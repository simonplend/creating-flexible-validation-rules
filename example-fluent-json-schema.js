/**
 * Import the fluent-json-schema library.
 */
import S from "fluent-json-schema";

/**
 * Use fluent-json-schema to generate a JSON schema.
 */
const iceCreamSchema = S.object()
  .prop("flavour", S.string().required())
  .prop("price", S.number().required())
  .prop("stock", S.integer().required())
  // This method call returns the generated schema as an object.
  .valueOf();

/**
 * Output our generated JSON schema.
 */
console.log(JSON.stringify(iceCreamSchema, null, 2));
