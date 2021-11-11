/**
 * Define a JSON schema, which describes the structure and
 * types we expect for our data.
 */
const iceCreamSchema = {
  type: "object",
  properties: {
    flavour: { type: "string" },
    price: { type: "number" },
    stock: { type: "integer" },
  },
  required: ["flavour", "price", "stock"],
};

/**
 * Define the data which we want to validate.
 */
const iceCreamData = {
  flavour: "Pistachio",
  price: 1.99,
  stock: null,
};

/**
 * Import the Ajv library and create a new Ajv instance.
 */
import Ajv from "ajv";

const ajv = new Ajv();

/**
 * Validate data against our ice cream schema.
 */
const isDataValid = ajv.validate(iceCreamSchema, iceCreamData);

/**
 * Output the validation results.
 */
if (isDataValid) {
  console.log("The ice cream data is valid! 🍨");
} else {
  console.error("The ice cream data is invalid:", ajv.errors);
}
