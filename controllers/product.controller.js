import { StatusCodes } from "http-status-codes";
import Product from "../models/Product.js";
import path from "path";
import { existsSync } from "fs";
import { mkdir , unlink} from "fs/promises";
import { createCustomAPIError } from "../errors/custom-error.js";
import { v2 as cloudinary } from "cloudinary";
class ProductController {
  /**
   * Description
   * @param {import("express").Request} request
   * @param {import("express").Response} response
   * @returns {import("express").Response}
   */
  static async create(request, response) {
    const product = await Product.create(request.body);
    return response.status(StatusCodes.CREATED).json(product);
  }

  /**
   * Description
   * @param {import("express").Request} request
   * @param {import("express").Response} response
   * @returns {import("express").Response}
   */
  static async all(request, response) {
    const products = await Product.find();
    return response.status(StatusCodes.OK).json({ products });
  }

  /**
   * Description
   * @param {import("express").Request} request
   * @param {import("express").Response} response
   * @returns {import("express").Response}
   */
  static async uploadImage(request, response) {
    if (!request.files) {
      throw createCustomAPIError(
        "No File Uploaded...",
        StatusCodes.BAD_REQUEST
      );
    }

    const productImage = request.files.image;

    if (!productImage.mimetype.startsWith("image/")) {
      throw createCustomAPIError(
        "Invalid File Type...",
        StatusCodes.BAD_REQUEST
      );
    }
    const maxsize = 1024 * 1024;
    if (productImage.size > maxsize) {
      throw createCustomAPIError(
        "File Size too Large...",
        StatusCodes.BAD_REQUEST
      );
    }
    const filePath = path.resolve("public", "uploads", productImage.name);

    if (!existsSync(filePath)) {
      await mkdir(path.resolve("public", "uploads"), { recursive: true });
    }

    await productImage.mv(filePath);

    return response
      .status(StatusCodes.OK)
      .json({ image: { src: path.join("/uploads", productImage.name) } });
  }
  /**
   * Description
   * @param {import("express").Request} request
   * @param {import("express").Response} response
   * @returns {import("express").Response}
   */
  static async uploadImageToServer(request, response) {
    const result = await cloudinary.uploader.upload(
      request.files?.image?.tempFilePath,
      {
        use_filename: true,
        folder: "file-upload-prj",
      }
    );
    await unlink(request.files?.image?.tempFilePath);
    return response
      .status(StatusCodes.OK)
      .json({ image: { src: result.secure_url } });
  }
}

export default ProductController;
