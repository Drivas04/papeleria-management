
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Caja
 * 
 */
export type Caja = $Result.DefaultSelection<Prisma.$CajaPayload>
/**
 * Model Categoria
 * 
 */
export type Categoria = $Result.DefaultSelection<Prisma.$CategoriaPayload>
/**
 * Model Cliente
 * 
 */
export type Cliente = $Result.DefaultSelection<Prisma.$ClientePayload>
/**
 * Model Compra
 * 
 */
export type Compra = $Result.DefaultSelection<Prisma.$CompraPayload>
/**
 * Model CompraProducto
 * 
 */
export type CompraProducto = $Result.DefaultSelection<Prisma.$CompraProductoPayload>
/**
 * Model FacturaCompra
 * 
 */
export type FacturaCompra = $Result.DefaultSelection<Prisma.$FacturaCompraPayload>
/**
 * Model FacturaVenta
 * 
 */
export type FacturaVenta = $Result.DefaultSelection<Prisma.$FacturaVentaPayload>
/**
 * Model MovimientoInventario
 * 
 */
export type MovimientoInventario = $Result.DefaultSelection<Prisma.$MovimientoInventarioPayload>
/**
 * Model Producto
 * 
 */
export type Producto = $Result.DefaultSelection<Prisma.$ProductoPayload>
/**
 * Model Proveedor
 * 
 */
export type Proveedor = $Result.DefaultSelection<Prisma.$ProveedorPayload>
/**
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Venta
 * 
 */
export type Venta = $Result.DefaultSelection<Prisma.$VentaPayload>
/**
 * Model VentaProducto
 * 
 */
export type VentaProducto = $Result.DefaultSelection<Prisma.$VentaProductoPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Cajas
 * const cajas = await prisma.caja.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Cajas
   * const cajas = await prisma.caja.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.caja`: Exposes CRUD operations for the **Caja** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cajas
    * const cajas = await prisma.caja.findMany()
    * ```
    */
  get caja(): Prisma.CajaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categoria`: Exposes CRUD operations for the **Categoria** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categorias
    * const categorias = await prisma.categoria.findMany()
    * ```
    */
  get categoria(): Prisma.CategoriaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cliente`: Exposes CRUD operations for the **Cliente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clientes
    * const clientes = await prisma.cliente.findMany()
    * ```
    */
  get cliente(): Prisma.ClienteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.compra`: Exposes CRUD operations for the **Compra** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Compras
    * const compras = await prisma.compra.findMany()
    * ```
    */
  get compra(): Prisma.CompraDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.compraProducto`: Exposes CRUD operations for the **CompraProducto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CompraProductos
    * const compraProductos = await prisma.compraProducto.findMany()
    * ```
    */
  get compraProducto(): Prisma.CompraProductoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.facturaCompra`: Exposes CRUD operations for the **FacturaCompra** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FacturaCompras
    * const facturaCompras = await prisma.facturaCompra.findMany()
    * ```
    */
  get facturaCompra(): Prisma.FacturaCompraDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.facturaVenta`: Exposes CRUD operations for the **FacturaVenta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FacturaVentas
    * const facturaVentas = await prisma.facturaVenta.findMany()
    * ```
    */
  get facturaVenta(): Prisma.FacturaVentaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.movimientoInventario`: Exposes CRUD operations for the **MovimientoInventario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MovimientoInventarios
    * const movimientoInventarios = await prisma.movimientoInventario.findMany()
    * ```
    */
  get movimientoInventario(): Prisma.MovimientoInventarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.producto`: Exposes CRUD operations for the **Producto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Productos
    * const productos = await prisma.producto.findMany()
    * ```
    */
  get producto(): Prisma.ProductoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.proveedor`: Exposes CRUD operations for the **Proveedor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Proveedors
    * const proveedors = await prisma.proveedor.findMany()
    * ```
    */
  get proveedor(): Prisma.ProveedorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.venta`: Exposes CRUD operations for the **Venta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ventas
    * const ventas = await prisma.venta.findMany()
    * ```
    */
  get venta(): Prisma.VentaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ventaProducto`: Exposes CRUD operations for the **VentaProducto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VentaProductos
    * const ventaProductos = await prisma.ventaProducto.findMany()
    * ```
    */
  get ventaProducto(): Prisma.VentaProductoDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Caja: 'Caja',
    Categoria: 'Categoria',
    Cliente: 'Cliente',
    Compra: 'Compra',
    CompraProducto: 'CompraProducto',
    FacturaCompra: 'FacturaCompra',
    FacturaVenta: 'FacturaVenta',
    MovimientoInventario: 'MovimientoInventario',
    Producto: 'Producto',
    Proveedor: 'Proveedor',
    Usuario: 'Usuario',
    Venta: 'Venta',
    VentaProducto: 'VentaProducto'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "caja" | "categoria" | "cliente" | "compra" | "compraProducto" | "facturaCompra" | "facturaVenta" | "movimientoInventario" | "producto" | "proveedor" | "usuario" | "venta" | "ventaProducto"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Caja: {
        payload: Prisma.$CajaPayload<ExtArgs>
        fields: Prisma.CajaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CajaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CajaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CajaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CajaPayload>
          }
          findFirst: {
            args: Prisma.CajaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CajaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CajaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CajaPayload>
          }
          findMany: {
            args: Prisma.CajaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CajaPayload>[]
          }
          create: {
            args: Prisma.CajaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CajaPayload>
          }
          createMany: {
            args: Prisma.CajaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CajaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CajaPayload>
          }
          update: {
            args: Prisma.CajaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CajaPayload>
          }
          deleteMany: {
            args: Prisma.CajaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CajaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CajaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CajaPayload>
          }
          aggregate: {
            args: Prisma.CajaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCaja>
          }
          groupBy: {
            args: Prisma.CajaGroupByArgs<ExtArgs>
            result: $Utils.Optional<CajaGroupByOutputType>[]
          }
          count: {
            args: Prisma.CajaCountArgs<ExtArgs>
            result: $Utils.Optional<CajaCountAggregateOutputType> | number
          }
        }
      }
      Categoria: {
        payload: Prisma.$CategoriaPayload<ExtArgs>
        fields: Prisma.CategoriaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoriaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoriaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          findFirst: {
            args: Prisma.CategoriaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoriaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          findMany: {
            args: Prisma.CategoriaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>[]
          }
          create: {
            args: Prisma.CategoriaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          createMany: {
            args: Prisma.CategoriaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CategoriaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          update: {
            args: Prisma.CategoriaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          deleteMany: {
            args: Prisma.CategoriaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoriaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CategoriaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          aggregate: {
            args: Prisma.CategoriaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategoria>
          }
          groupBy: {
            args: Prisma.CategoriaGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoriaGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoriaCountArgs<ExtArgs>
            result: $Utils.Optional<CategoriaCountAggregateOutputType> | number
          }
        }
      }
      Cliente: {
        payload: Prisma.$ClientePayload<ExtArgs>
        fields: Prisma.ClienteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClienteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClienteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          findFirst: {
            args: Prisma.ClienteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClienteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          findMany: {
            args: Prisma.ClienteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          create: {
            args: Prisma.ClienteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          createMany: {
            args: Prisma.ClienteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ClienteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          update: {
            args: Prisma.ClienteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          deleteMany: {
            args: Prisma.ClienteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClienteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ClienteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          aggregate: {
            args: Prisma.ClienteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCliente>
          }
          groupBy: {
            args: Prisma.ClienteGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClienteGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClienteCountArgs<ExtArgs>
            result: $Utils.Optional<ClienteCountAggregateOutputType> | number
          }
        }
      }
      Compra: {
        payload: Prisma.$CompraPayload<ExtArgs>
        fields: Prisma.CompraFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompraFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompraPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompraFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompraPayload>
          }
          findFirst: {
            args: Prisma.CompraFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompraPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompraFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompraPayload>
          }
          findMany: {
            args: Prisma.CompraFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompraPayload>[]
          }
          create: {
            args: Prisma.CompraCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompraPayload>
          }
          createMany: {
            args: Prisma.CompraCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CompraDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompraPayload>
          }
          update: {
            args: Prisma.CompraUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompraPayload>
          }
          deleteMany: {
            args: Prisma.CompraDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompraUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CompraUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompraPayload>
          }
          aggregate: {
            args: Prisma.CompraAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompra>
          }
          groupBy: {
            args: Prisma.CompraGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompraGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompraCountArgs<ExtArgs>
            result: $Utils.Optional<CompraCountAggregateOutputType> | number
          }
        }
      }
      CompraProducto: {
        payload: Prisma.$CompraProductoPayload<ExtArgs>
        fields: Prisma.CompraProductoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompraProductoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompraProductoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompraProductoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompraProductoPayload>
          }
          findFirst: {
            args: Prisma.CompraProductoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompraProductoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompraProductoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompraProductoPayload>
          }
          findMany: {
            args: Prisma.CompraProductoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompraProductoPayload>[]
          }
          create: {
            args: Prisma.CompraProductoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompraProductoPayload>
          }
          createMany: {
            args: Prisma.CompraProductoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CompraProductoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompraProductoPayload>
          }
          update: {
            args: Prisma.CompraProductoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompraProductoPayload>
          }
          deleteMany: {
            args: Prisma.CompraProductoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompraProductoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CompraProductoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompraProductoPayload>
          }
          aggregate: {
            args: Prisma.CompraProductoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompraProducto>
          }
          groupBy: {
            args: Prisma.CompraProductoGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompraProductoGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompraProductoCountArgs<ExtArgs>
            result: $Utils.Optional<CompraProductoCountAggregateOutputType> | number
          }
        }
      }
      FacturaCompra: {
        payload: Prisma.$FacturaCompraPayload<ExtArgs>
        fields: Prisma.FacturaCompraFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FacturaCompraFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturaCompraPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FacturaCompraFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturaCompraPayload>
          }
          findFirst: {
            args: Prisma.FacturaCompraFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturaCompraPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FacturaCompraFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturaCompraPayload>
          }
          findMany: {
            args: Prisma.FacturaCompraFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturaCompraPayload>[]
          }
          create: {
            args: Prisma.FacturaCompraCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturaCompraPayload>
          }
          createMany: {
            args: Prisma.FacturaCompraCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FacturaCompraDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturaCompraPayload>
          }
          update: {
            args: Prisma.FacturaCompraUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturaCompraPayload>
          }
          deleteMany: {
            args: Prisma.FacturaCompraDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FacturaCompraUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FacturaCompraUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturaCompraPayload>
          }
          aggregate: {
            args: Prisma.FacturaCompraAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFacturaCompra>
          }
          groupBy: {
            args: Prisma.FacturaCompraGroupByArgs<ExtArgs>
            result: $Utils.Optional<FacturaCompraGroupByOutputType>[]
          }
          count: {
            args: Prisma.FacturaCompraCountArgs<ExtArgs>
            result: $Utils.Optional<FacturaCompraCountAggregateOutputType> | number
          }
        }
      }
      FacturaVenta: {
        payload: Prisma.$FacturaVentaPayload<ExtArgs>
        fields: Prisma.FacturaVentaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FacturaVentaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturaVentaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FacturaVentaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturaVentaPayload>
          }
          findFirst: {
            args: Prisma.FacturaVentaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturaVentaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FacturaVentaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturaVentaPayload>
          }
          findMany: {
            args: Prisma.FacturaVentaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturaVentaPayload>[]
          }
          create: {
            args: Prisma.FacturaVentaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturaVentaPayload>
          }
          createMany: {
            args: Prisma.FacturaVentaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FacturaVentaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturaVentaPayload>
          }
          update: {
            args: Prisma.FacturaVentaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturaVentaPayload>
          }
          deleteMany: {
            args: Prisma.FacturaVentaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FacturaVentaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FacturaVentaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturaVentaPayload>
          }
          aggregate: {
            args: Prisma.FacturaVentaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFacturaVenta>
          }
          groupBy: {
            args: Prisma.FacturaVentaGroupByArgs<ExtArgs>
            result: $Utils.Optional<FacturaVentaGroupByOutputType>[]
          }
          count: {
            args: Prisma.FacturaVentaCountArgs<ExtArgs>
            result: $Utils.Optional<FacturaVentaCountAggregateOutputType> | number
          }
        }
      }
      MovimientoInventario: {
        payload: Prisma.$MovimientoInventarioPayload<ExtArgs>
        fields: Prisma.MovimientoInventarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MovimientoInventarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimientoInventarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MovimientoInventarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimientoInventarioPayload>
          }
          findFirst: {
            args: Prisma.MovimientoInventarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimientoInventarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MovimientoInventarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimientoInventarioPayload>
          }
          findMany: {
            args: Prisma.MovimientoInventarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimientoInventarioPayload>[]
          }
          create: {
            args: Prisma.MovimientoInventarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimientoInventarioPayload>
          }
          createMany: {
            args: Prisma.MovimientoInventarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MovimientoInventarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimientoInventarioPayload>
          }
          update: {
            args: Prisma.MovimientoInventarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimientoInventarioPayload>
          }
          deleteMany: {
            args: Prisma.MovimientoInventarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MovimientoInventarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MovimientoInventarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimientoInventarioPayload>
          }
          aggregate: {
            args: Prisma.MovimientoInventarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMovimientoInventario>
          }
          groupBy: {
            args: Prisma.MovimientoInventarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<MovimientoInventarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.MovimientoInventarioCountArgs<ExtArgs>
            result: $Utils.Optional<MovimientoInventarioCountAggregateOutputType> | number
          }
        }
      }
      Producto: {
        payload: Prisma.$ProductoPayload<ExtArgs>
        fields: Prisma.ProductoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          findFirst: {
            args: Prisma.ProductoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          findMany: {
            args: Prisma.ProductoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>[]
          }
          create: {
            args: Prisma.ProductoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          createMany: {
            args: Prisma.ProductoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProductoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          update: {
            args: Prisma.ProductoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          deleteMany: {
            args: Prisma.ProductoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          aggregate: {
            args: Prisma.ProductoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProducto>
          }
          groupBy: {
            args: Prisma.ProductoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductoCountArgs<ExtArgs>
            result: $Utils.Optional<ProductoCountAggregateOutputType> | number
          }
        }
      }
      Proveedor: {
        payload: Prisma.$ProveedorPayload<ExtArgs>
        fields: Prisma.ProveedorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProveedorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProveedorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProveedorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProveedorPayload>
          }
          findFirst: {
            args: Prisma.ProveedorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProveedorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProveedorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProveedorPayload>
          }
          findMany: {
            args: Prisma.ProveedorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProveedorPayload>[]
          }
          create: {
            args: Prisma.ProveedorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProveedorPayload>
          }
          createMany: {
            args: Prisma.ProveedorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProveedorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProveedorPayload>
          }
          update: {
            args: Prisma.ProveedorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProveedorPayload>
          }
          deleteMany: {
            args: Prisma.ProveedorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProveedorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProveedorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProveedorPayload>
          }
          aggregate: {
            args: Prisma.ProveedorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProveedor>
          }
          groupBy: {
            args: Prisma.ProveedorGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProveedorGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProveedorCountArgs<ExtArgs>
            result: $Utils.Optional<ProveedorCountAggregateOutputType> | number
          }
        }
      }
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Venta: {
        payload: Prisma.$VentaPayload<ExtArgs>
        fields: Prisma.VentaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VentaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VentaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaPayload>
          }
          findFirst: {
            args: Prisma.VentaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VentaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaPayload>
          }
          findMany: {
            args: Prisma.VentaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaPayload>[]
          }
          create: {
            args: Prisma.VentaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaPayload>
          }
          createMany: {
            args: Prisma.VentaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.VentaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaPayload>
          }
          update: {
            args: Prisma.VentaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaPayload>
          }
          deleteMany: {
            args: Prisma.VentaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VentaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VentaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaPayload>
          }
          aggregate: {
            args: Prisma.VentaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVenta>
          }
          groupBy: {
            args: Prisma.VentaGroupByArgs<ExtArgs>
            result: $Utils.Optional<VentaGroupByOutputType>[]
          }
          count: {
            args: Prisma.VentaCountArgs<ExtArgs>
            result: $Utils.Optional<VentaCountAggregateOutputType> | number
          }
        }
      }
      VentaProducto: {
        payload: Prisma.$VentaProductoPayload<ExtArgs>
        fields: Prisma.VentaProductoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VentaProductoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaProductoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VentaProductoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaProductoPayload>
          }
          findFirst: {
            args: Prisma.VentaProductoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaProductoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VentaProductoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaProductoPayload>
          }
          findMany: {
            args: Prisma.VentaProductoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaProductoPayload>[]
          }
          create: {
            args: Prisma.VentaProductoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaProductoPayload>
          }
          createMany: {
            args: Prisma.VentaProductoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.VentaProductoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaProductoPayload>
          }
          update: {
            args: Prisma.VentaProductoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaProductoPayload>
          }
          deleteMany: {
            args: Prisma.VentaProductoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VentaProductoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VentaProductoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaProductoPayload>
          }
          aggregate: {
            args: Prisma.VentaProductoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVentaProducto>
          }
          groupBy: {
            args: Prisma.VentaProductoGroupByArgs<ExtArgs>
            result: $Utils.Optional<VentaProductoGroupByOutputType>[]
          }
          count: {
            args: Prisma.VentaProductoCountArgs<ExtArgs>
            result: $Utils.Optional<VentaProductoCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    caja?: CajaOmit
    categoria?: CategoriaOmit
    cliente?: ClienteOmit
    compra?: CompraOmit
    compraProducto?: CompraProductoOmit
    facturaCompra?: FacturaCompraOmit
    facturaVenta?: FacturaVentaOmit
    movimientoInventario?: MovimientoInventarioOmit
    producto?: ProductoOmit
    proveedor?: ProveedorOmit
    usuario?: UsuarioOmit
    venta?: VentaOmit
    ventaProducto?: VentaProductoOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CategoriaCountOutputType
   */

  export type CategoriaCountOutputType = {
    productos: number
  }

  export type CategoriaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productos?: boolean | CategoriaCountOutputTypeCountProductosArgs
  }

  // Custom InputTypes
  /**
   * CategoriaCountOutputType without action
   */
  export type CategoriaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriaCountOutputType
     */
    select?: CategoriaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoriaCountOutputType without action
   */
  export type CategoriaCountOutputTypeCountProductosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductoWhereInput
  }


  /**
   * Count Type ClienteCountOutputType
   */

  export type ClienteCountOutputType = {
    ventas: number
  }

  export type ClienteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ventas?: boolean | ClienteCountOutputTypeCountVentasArgs
  }

  // Custom InputTypes
  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClienteCountOutputType
     */
    select?: ClienteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeCountVentasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VentaWhereInput
  }


  /**
   * Count Type CompraCountOutputType
   */

  export type CompraCountOutputType = {
    compra_productos: number
  }

  export type CompraCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    compra_productos?: boolean | CompraCountOutputTypeCountCompra_productosArgs
  }

  // Custom InputTypes
  /**
   * CompraCountOutputType without action
   */
  export type CompraCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompraCountOutputType
     */
    select?: CompraCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CompraCountOutputType without action
   */
  export type CompraCountOutputTypeCountCompra_productosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompraProductoWhereInput
  }


  /**
   * Count Type ProductoCountOutputType
   */

  export type ProductoCountOutputType = {
    compra_productos: number
    venta_productos: number
    movimientos: number
  }

  export type ProductoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    compra_productos?: boolean | ProductoCountOutputTypeCountCompra_productosArgs
    venta_productos?: boolean | ProductoCountOutputTypeCountVenta_productosArgs
    movimientos?: boolean | ProductoCountOutputTypeCountMovimientosArgs
  }

  // Custom InputTypes
  /**
   * ProductoCountOutputType without action
   */
  export type ProductoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductoCountOutputType
     */
    select?: ProductoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductoCountOutputType without action
   */
  export type ProductoCountOutputTypeCountCompra_productosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompraProductoWhereInput
  }

  /**
   * ProductoCountOutputType without action
   */
  export type ProductoCountOutputTypeCountVenta_productosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VentaProductoWhereInput
  }

  /**
   * ProductoCountOutputType without action
   */
  export type ProductoCountOutputTypeCountMovimientosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovimientoInventarioWhereInput
  }


  /**
   * Count Type ProveedorCountOutputType
   */

  export type ProveedorCountOutputType = {
    compras: number
  }

  export type ProveedorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    compras?: boolean | ProveedorCountOutputTypeCountComprasArgs
  }

  // Custom InputTypes
  /**
   * ProveedorCountOutputType without action
   */
  export type ProveedorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProveedorCountOutputType
     */
    select?: ProveedorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProveedorCountOutputType without action
   */
  export type ProveedorCountOutputTypeCountComprasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompraWhereInput
  }


  /**
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    ventas: number
    compras: number
    cajas: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ventas?: boolean | UsuarioCountOutputTypeCountVentasArgs
    compras?: boolean | UsuarioCountOutputTypeCountComprasArgs
    cajas?: boolean | UsuarioCountOutputTypeCountCajasArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountVentasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VentaWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountComprasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompraWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountCajasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CajaWhereInput
  }


  /**
   * Count Type VentaCountOutputType
   */

  export type VentaCountOutputType = {
    venta_productos: number
  }

  export type VentaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    venta_productos?: boolean | VentaCountOutputTypeCountVenta_productosArgs
  }

  // Custom InputTypes
  /**
   * VentaCountOutputType without action
   */
  export type VentaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VentaCountOutputType
     */
    select?: VentaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VentaCountOutputType without action
   */
  export type VentaCountOutputTypeCountVenta_productosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VentaProductoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Caja
   */

  export type AggregateCaja = {
    _count: CajaCountAggregateOutputType | null
    _avg: CajaAvgAggregateOutputType | null
    _sum: CajaSumAggregateOutputType | null
    _min: CajaMinAggregateOutputType | null
    _max: CajaMaxAggregateOutputType | null
  }

  export type CajaAvgAggregateOutputType = {
    id_cierre_caja: number | null
    monto_inicial: Decimal | null
    monto_final: Decimal | null
    total_ventas: Decimal | null
    diferencia: Decimal | null
    usuario_id_usuario: number | null
  }

  export type CajaSumAggregateOutputType = {
    id_cierre_caja: number | null
    monto_inicial: Decimal | null
    monto_final: Decimal | null
    total_ventas: Decimal | null
    diferencia: Decimal | null
    usuario_id_usuario: number | null
  }

  export type CajaMinAggregateOutputType = {
    id_cierre_caja: number | null
    fecha_apertura: Date | null
    fecha_cierre: Date | null
    monto_inicial: Decimal | null
    monto_final: Decimal | null
    total_ventas: Decimal | null
    diferencia: Decimal | null
    usuario_id_usuario: number | null
  }

  export type CajaMaxAggregateOutputType = {
    id_cierre_caja: number | null
    fecha_apertura: Date | null
    fecha_cierre: Date | null
    monto_inicial: Decimal | null
    monto_final: Decimal | null
    total_ventas: Decimal | null
    diferencia: Decimal | null
    usuario_id_usuario: number | null
  }

  export type CajaCountAggregateOutputType = {
    id_cierre_caja: number
    fecha_apertura: number
    fecha_cierre: number
    monto_inicial: number
    monto_final: number
    total_ventas: number
    diferencia: number
    usuario_id_usuario: number
    _all: number
  }


  export type CajaAvgAggregateInputType = {
    id_cierre_caja?: true
    monto_inicial?: true
    monto_final?: true
    total_ventas?: true
    diferencia?: true
    usuario_id_usuario?: true
  }

  export type CajaSumAggregateInputType = {
    id_cierre_caja?: true
    monto_inicial?: true
    monto_final?: true
    total_ventas?: true
    diferencia?: true
    usuario_id_usuario?: true
  }

  export type CajaMinAggregateInputType = {
    id_cierre_caja?: true
    fecha_apertura?: true
    fecha_cierre?: true
    monto_inicial?: true
    monto_final?: true
    total_ventas?: true
    diferencia?: true
    usuario_id_usuario?: true
  }

  export type CajaMaxAggregateInputType = {
    id_cierre_caja?: true
    fecha_apertura?: true
    fecha_cierre?: true
    monto_inicial?: true
    monto_final?: true
    total_ventas?: true
    diferencia?: true
    usuario_id_usuario?: true
  }

  export type CajaCountAggregateInputType = {
    id_cierre_caja?: true
    fecha_apertura?: true
    fecha_cierre?: true
    monto_inicial?: true
    monto_final?: true
    total_ventas?: true
    diferencia?: true
    usuario_id_usuario?: true
    _all?: true
  }

  export type CajaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Caja to aggregate.
     */
    where?: CajaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cajas to fetch.
     */
    orderBy?: CajaOrderByWithRelationInput | CajaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CajaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cajas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cajas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cajas
    **/
    _count?: true | CajaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CajaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CajaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CajaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CajaMaxAggregateInputType
  }

  export type GetCajaAggregateType<T extends CajaAggregateArgs> = {
        [P in keyof T & keyof AggregateCaja]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCaja[P]>
      : GetScalarType<T[P], AggregateCaja[P]>
  }




  export type CajaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CajaWhereInput
    orderBy?: CajaOrderByWithAggregationInput | CajaOrderByWithAggregationInput[]
    by: CajaScalarFieldEnum[] | CajaScalarFieldEnum
    having?: CajaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CajaCountAggregateInputType | true
    _avg?: CajaAvgAggregateInputType
    _sum?: CajaSumAggregateInputType
    _min?: CajaMinAggregateInputType
    _max?: CajaMaxAggregateInputType
  }

  export type CajaGroupByOutputType = {
    id_cierre_caja: number
    fecha_apertura: Date | null
    fecha_cierre: Date | null
    monto_inicial: Decimal | null
    monto_final: Decimal | null
    total_ventas: Decimal | null
    diferencia: Decimal | null
    usuario_id_usuario: number
    _count: CajaCountAggregateOutputType | null
    _avg: CajaAvgAggregateOutputType | null
    _sum: CajaSumAggregateOutputType | null
    _min: CajaMinAggregateOutputType | null
    _max: CajaMaxAggregateOutputType | null
  }

  type GetCajaGroupByPayload<T extends CajaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CajaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CajaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CajaGroupByOutputType[P]>
            : GetScalarType<T[P], CajaGroupByOutputType[P]>
        }
      >
    >


  export type CajaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_cierre_caja?: boolean
    fecha_apertura?: boolean
    fecha_cierre?: boolean
    monto_inicial?: boolean
    monto_final?: boolean
    total_ventas?: boolean
    diferencia?: boolean
    usuario_id_usuario?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["caja"]>



  export type CajaSelectScalar = {
    id_cierre_caja?: boolean
    fecha_apertura?: boolean
    fecha_cierre?: boolean
    monto_inicial?: boolean
    monto_final?: boolean
    total_ventas?: boolean
    diferencia?: boolean
    usuario_id_usuario?: boolean
  }

  export type CajaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_cierre_caja" | "fecha_apertura" | "fecha_cierre" | "monto_inicial" | "monto_final" | "total_ventas" | "diferencia" | "usuario_id_usuario", ExtArgs["result"]["caja"]>
  export type CajaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $CajaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Caja"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_cierre_caja: number
      fecha_apertura: Date | null
      fecha_cierre: Date | null
      monto_inicial: Prisma.Decimal | null
      monto_final: Prisma.Decimal | null
      total_ventas: Prisma.Decimal | null
      diferencia: Prisma.Decimal | null
      usuario_id_usuario: number
    }, ExtArgs["result"]["caja"]>
    composites: {}
  }

  type CajaGetPayload<S extends boolean | null | undefined | CajaDefaultArgs> = $Result.GetResult<Prisma.$CajaPayload, S>

  type CajaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CajaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CajaCountAggregateInputType | true
    }

  export interface CajaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Caja'], meta: { name: 'Caja' } }
    /**
     * Find zero or one Caja that matches the filter.
     * @param {CajaFindUniqueArgs} args - Arguments to find a Caja
     * @example
     * // Get one Caja
     * const caja = await prisma.caja.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CajaFindUniqueArgs>(args: SelectSubset<T, CajaFindUniqueArgs<ExtArgs>>): Prisma__CajaClient<$Result.GetResult<Prisma.$CajaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Caja that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CajaFindUniqueOrThrowArgs} args - Arguments to find a Caja
     * @example
     * // Get one Caja
     * const caja = await prisma.caja.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CajaFindUniqueOrThrowArgs>(args: SelectSubset<T, CajaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CajaClient<$Result.GetResult<Prisma.$CajaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Caja that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CajaFindFirstArgs} args - Arguments to find a Caja
     * @example
     * // Get one Caja
     * const caja = await prisma.caja.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CajaFindFirstArgs>(args?: SelectSubset<T, CajaFindFirstArgs<ExtArgs>>): Prisma__CajaClient<$Result.GetResult<Prisma.$CajaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Caja that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CajaFindFirstOrThrowArgs} args - Arguments to find a Caja
     * @example
     * // Get one Caja
     * const caja = await prisma.caja.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CajaFindFirstOrThrowArgs>(args?: SelectSubset<T, CajaFindFirstOrThrowArgs<ExtArgs>>): Prisma__CajaClient<$Result.GetResult<Prisma.$CajaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cajas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CajaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cajas
     * const cajas = await prisma.caja.findMany()
     * 
     * // Get first 10 Cajas
     * const cajas = await prisma.caja.findMany({ take: 10 })
     * 
     * // Only select the `id_cierre_caja`
     * const cajaWithId_cierre_cajaOnly = await prisma.caja.findMany({ select: { id_cierre_caja: true } })
     * 
     */
    findMany<T extends CajaFindManyArgs>(args?: SelectSubset<T, CajaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CajaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Caja.
     * @param {CajaCreateArgs} args - Arguments to create a Caja.
     * @example
     * // Create one Caja
     * const Caja = await prisma.caja.create({
     *   data: {
     *     // ... data to create a Caja
     *   }
     * })
     * 
     */
    create<T extends CajaCreateArgs>(args: SelectSubset<T, CajaCreateArgs<ExtArgs>>): Prisma__CajaClient<$Result.GetResult<Prisma.$CajaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cajas.
     * @param {CajaCreateManyArgs} args - Arguments to create many Cajas.
     * @example
     * // Create many Cajas
     * const caja = await prisma.caja.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CajaCreateManyArgs>(args?: SelectSubset<T, CajaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Caja.
     * @param {CajaDeleteArgs} args - Arguments to delete one Caja.
     * @example
     * // Delete one Caja
     * const Caja = await prisma.caja.delete({
     *   where: {
     *     // ... filter to delete one Caja
     *   }
     * })
     * 
     */
    delete<T extends CajaDeleteArgs>(args: SelectSubset<T, CajaDeleteArgs<ExtArgs>>): Prisma__CajaClient<$Result.GetResult<Prisma.$CajaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Caja.
     * @param {CajaUpdateArgs} args - Arguments to update one Caja.
     * @example
     * // Update one Caja
     * const caja = await prisma.caja.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CajaUpdateArgs>(args: SelectSubset<T, CajaUpdateArgs<ExtArgs>>): Prisma__CajaClient<$Result.GetResult<Prisma.$CajaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cajas.
     * @param {CajaDeleteManyArgs} args - Arguments to filter Cajas to delete.
     * @example
     * // Delete a few Cajas
     * const { count } = await prisma.caja.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CajaDeleteManyArgs>(args?: SelectSubset<T, CajaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cajas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CajaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cajas
     * const caja = await prisma.caja.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CajaUpdateManyArgs>(args: SelectSubset<T, CajaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Caja.
     * @param {CajaUpsertArgs} args - Arguments to update or create a Caja.
     * @example
     * // Update or create a Caja
     * const caja = await prisma.caja.upsert({
     *   create: {
     *     // ... data to create a Caja
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Caja we want to update
     *   }
     * })
     */
    upsert<T extends CajaUpsertArgs>(args: SelectSubset<T, CajaUpsertArgs<ExtArgs>>): Prisma__CajaClient<$Result.GetResult<Prisma.$CajaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cajas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CajaCountArgs} args - Arguments to filter Cajas to count.
     * @example
     * // Count the number of Cajas
     * const count = await prisma.caja.count({
     *   where: {
     *     // ... the filter for the Cajas we want to count
     *   }
     * })
    **/
    count<T extends CajaCountArgs>(
      args?: Subset<T, CajaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CajaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Caja.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CajaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CajaAggregateArgs>(args: Subset<T, CajaAggregateArgs>): Prisma.PrismaPromise<GetCajaAggregateType<T>>

    /**
     * Group by Caja.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CajaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CajaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CajaGroupByArgs['orderBy'] }
        : { orderBy?: CajaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CajaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCajaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Caja model
   */
  readonly fields: CajaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Caja.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CajaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Caja model
   */
  interface CajaFieldRefs {
    readonly id_cierre_caja: FieldRef<"Caja", 'Int'>
    readonly fecha_apertura: FieldRef<"Caja", 'DateTime'>
    readonly fecha_cierre: FieldRef<"Caja", 'DateTime'>
    readonly monto_inicial: FieldRef<"Caja", 'Decimal'>
    readonly monto_final: FieldRef<"Caja", 'Decimal'>
    readonly total_ventas: FieldRef<"Caja", 'Decimal'>
    readonly diferencia: FieldRef<"Caja", 'Decimal'>
    readonly usuario_id_usuario: FieldRef<"Caja", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Caja findUnique
   */
  export type CajaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Caja
     */
    select?: CajaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Caja
     */
    omit?: CajaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CajaInclude<ExtArgs> | null
    /**
     * Filter, which Caja to fetch.
     */
    where: CajaWhereUniqueInput
  }

  /**
   * Caja findUniqueOrThrow
   */
  export type CajaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Caja
     */
    select?: CajaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Caja
     */
    omit?: CajaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CajaInclude<ExtArgs> | null
    /**
     * Filter, which Caja to fetch.
     */
    where: CajaWhereUniqueInput
  }

  /**
   * Caja findFirst
   */
  export type CajaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Caja
     */
    select?: CajaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Caja
     */
    omit?: CajaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CajaInclude<ExtArgs> | null
    /**
     * Filter, which Caja to fetch.
     */
    where?: CajaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cajas to fetch.
     */
    orderBy?: CajaOrderByWithRelationInput | CajaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cajas.
     */
    cursor?: CajaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cajas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cajas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cajas.
     */
    distinct?: CajaScalarFieldEnum | CajaScalarFieldEnum[]
  }

  /**
   * Caja findFirstOrThrow
   */
  export type CajaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Caja
     */
    select?: CajaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Caja
     */
    omit?: CajaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CajaInclude<ExtArgs> | null
    /**
     * Filter, which Caja to fetch.
     */
    where?: CajaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cajas to fetch.
     */
    orderBy?: CajaOrderByWithRelationInput | CajaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cajas.
     */
    cursor?: CajaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cajas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cajas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cajas.
     */
    distinct?: CajaScalarFieldEnum | CajaScalarFieldEnum[]
  }

  /**
   * Caja findMany
   */
  export type CajaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Caja
     */
    select?: CajaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Caja
     */
    omit?: CajaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CajaInclude<ExtArgs> | null
    /**
     * Filter, which Cajas to fetch.
     */
    where?: CajaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cajas to fetch.
     */
    orderBy?: CajaOrderByWithRelationInput | CajaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cajas.
     */
    cursor?: CajaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cajas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cajas.
     */
    skip?: number
    distinct?: CajaScalarFieldEnum | CajaScalarFieldEnum[]
  }

  /**
   * Caja create
   */
  export type CajaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Caja
     */
    select?: CajaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Caja
     */
    omit?: CajaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CajaInclude<ExtArgs> | null
    /**
     * The data needed to create a Caja.
     */
    data: XOR<CajaCreateInput, CajaUncheckedCreateInput>
  }

  /**
   * Caja createMany
   */
  export type CajaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cajas.
     */
    data: CajaCreateManyInput | CajaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Caja update
   */
  export type CajaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Caja
     */
    select?: CajaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Caja
     */
    omit?: CajaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CajaInclude<ExtArgs> | null
    /**
     * The data needed to update a Caja.
     */
    data: XOR<CajaUpdateInput, CajaUncheckedUpdateInput>
    /**
     * Choose, which Caja to update.
     */
    where: CajaWhereUniqueInput
  }

  /**
   * Caja updateMany
   */
  export type CajaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cajas.
     */
    data: XOR<CajaUpdateManyMutationInput, CajaUncheckedUpdateManyInput>
    /**
     * Filter which Cajas to update
     */
    where?: CajaWhereInput
    /**
     * Limit how many Cajas to update.
     */
    limit?: number
  }

  /**
   * Caja upsert
   */
  export type CajaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Caja
     */
    select?: CajaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Caja
     */
    omit?: CajaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CajaInclude<ExtArgs> | null
    /**
     * The filter to search for the Caja to update in case it exists.
     */
    where: CajaWhereUniqueInput
    /**
     * In case the Caja found by the `where` argument doesn't exist, create a new Caja with this data.
     */
    create: XOR<CajaCreateInput, CajaUncheckedCreateInput>
    /**
     * In case the Caja was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CajaUpdateInput, CajaUncheckedUpdateInput>
  }

  /**
   * Caja delete
   */
  export type CajaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Caja
     */
    select?: CajaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Caja
     */
    omit?: CajaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CajaInclude<ExtArgs> | null
    /**
     * Filter which Caja to delete.
     */
    where: CajaWhereUniqueInput
  }

  /**
   * Caja deleteMany
   */
  export type CajaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cajas to delete
     */
    where?: CajaWhereInput
    /**
     * Limit how many Cajas to delete.
     */
    limit?: number
  }

  /**
   * Caja without action
   */
  export type CajaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Caja
     */
    select?: CajaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Caja
     */
    omit?: CajaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CajaInclude<ExtArgs> | null
  }


  /**
   * Model Categoria
   */

  export type AggregateCategoria = {
    _count: CategoriaCountAggregateOutputType | null
    _avg: CategoriaAvgAggregateOutputType | null
    _sum: CategoriaSumAggregateOutputType | null
    _min: CategoriaMinAggregateOutputType | null
    _max: CategoriaMaxAggregateOutputType | null
  }

  export type CategoriaAvgAggregateOutputType = {
    id_categoria: number | null
  }

  export type CategoriaSumAggregateOutputType = {
    id_categoria: number | null
  }

  export type CategoriaMinAggregateOutputType = {
    id_categoria: number | null
    nombre: string | null
  }

  export type CategoriaMaxAggregateOutputType = {
    id_categoria: number | null
    nombre: string | null
  }

  export type CategoriaCountAggregateOutputType = {
    id_categoria: number
    nombre: number
    _all: number
  }


  export type CategoriaAvgAggregateInputType = {
    id_categoria?: true
  }

  export type CategoriaSumAggregateInputType = {
    id_categoria?: true
  }

  export type CategoriaMinAggregateInputType = {
    id_categoria?: true
    nombre?: true
  }

  export type CategoriaMaxAggregateInputType = {
    id_categoria?: true
    nombre?: true
  }

  export type CategoriaCountAggregateInputType = {
    id_categoria?: true
    nombre?: true
    _all?: true
  }

  export type CategoriaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categoria to aggregate.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categorias
    **/
    _count?: true | CategoriaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoriaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoriaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriaMaxAggregateInputType
  }

  export type GetCategoriaAggregateType<T extends CategoriaAggregateArgs> = {
        [P in keyof T & keyof AggregateCategoria]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategoria[P]>
      : GetScalarType<T[P], AggregateCategoria[P]>
  }




  export type CategoriaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoriaWhereInput
    orderBy?: CategoriaOrderByWithAggregationInput | CategoriaOrderByWithAggregationInput[]
    by: CategoriaScalarFieldEnum[] | CategoriaScalarFieldEnum
    having?: CategoriaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriaCountAggregateInputType | true
    _avg?: CategoriaAvgAggregateInputType
    _sum?: CategoriaSumAggregateInputType
    _min?: CategoriaMinAggregateInputType
    _max?: CategoriaMaxAggregateInputType
  }

  export type CategoriaGroupByOutputType = {
    id_categoria: number
    nombre: string
    _count: CategoriaCountAggregateOutputType | null
    _avg: CategoriaAvgAggregateOutputType | null
    _sum: CategoriaSumAggregateOutputType | null
    _min: CategoriaMinAggregateOutputType | null
    _max: CategoriaMaxAggregateOutputType | null
  }

  type GetCategoriaGroupByPayload<T extends CategoriaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriaGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriaGroupByOutputType[P]>
        }
      >
    >


  export type CategoriaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_categoria?: boolean
    nombre?: boolean
    productos?: boolean | Categoria$productosArgs<ExtArgs>
    _count?: boolean | CategoriaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categoria"]>



  export type CategoriaSelectScalar = {
    id_categoria?: boolean
    nombre?: boolean
  }

  export type CategoriaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_categoria" | "nombre", ExtArgs["result"]["categoria"]>
  export type CategoriaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productos?: boolean | Categoria$productosArgs<ExtArgs>
    _count?: boolean | CategoriaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CategoriaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Categoria"
    objects: {
      productos: Prisma.$ProductoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_categoria: number
      nombre: string
    }, ExtArgs["result"]["categoria"]>
    composites: {}
  }

  type CategoriaGetPayload<S extends boolean | null | undefined | CategoriaDefaultArgs> = $Result.GetResult<Prisma.$CategoriaPayload, S>

  type CategoriaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoriaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoriaCountAggregateInputType | true
    }

  export interface CategoriaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Categoria'], meta: { name: 'Categoria' } }
    /**
     * Find zero or one Categoria that matches the filter.
     * @param {CategoriaFindUniqueArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoriaFindUniqueArgs>(args: SelectSubset<T, CategoriaFindUniqueArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categoria that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoriaFindUniqueOrThrowArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoriaFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoriaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categoria that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaFindFirstArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoriaFindFirstArgs>(args?: SelectSubset<T, CategoriaFindFirstArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categoria that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaFindFirstOrThrowArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoriaFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoriaFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categorias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categorias
     * const categorias = await prisma.categoria.findMany()
     * 
     * // Get first 10 Categorias
     * const categorias = await prisma.categoria.findMany({ take: 10 })
     * 
     * // Only select the `id_categoria`
     * const categoriaWithId_categoriaOnly = await prisma.categoria.findMany({ select: { id_categoria: true } })
     * 
     */
    findMany<T extends CategoriaFindManyArgs>(args?: SelectSubset<T, CategoriaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categoria.
     * @param {CategoriaCreateArgs} args - Arguments to create a Categoria.
     * @example
     * // Create one Categoria
     * const Categoria = await prisma.categoria.create({
     *   data: {
     *     // ... data to create a Categoria
     *   }
     * })
     * 
     */
    create<T extends CategoriaCreateArgs>(args: SelectSubset<T, CategoriaCreateArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categorias.
     * @param {CategoriaCreateManyArgs} args - Arguments to create many Categorias.
     * @example
     * // Create many Categorias
     * const categoria = await prisma.categoria.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoriaCreateManyArgs>(args?: SelectSubset<T, CategoriaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Categoria.
     * @param {CategoriaDeleteArgs} args - Arguments to delete one Categoria.
     * @example
     * // Delete one Categoria
     * const Categoria = await prisma.categoria.delete({
     *   where: {
     *     // ... filter to delete one Categoria
     *   }
     * })
     * 
     */
    delete<T extends CategoriaDeleteArgs>(args: SelectSubset<T, CategoriaDeleteArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categoria.
     * @param {CategoriaUpdateArgs} args - Arguments to update one Categoria.
     * @example
     * // Update one Categoria
     * const categoria = await prisma.categoria.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoriaUpdateArgs>(args: SelectSubset<T, CategoriaUpdateArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categorias.
     * @param {CategoriaDeleteManyArgs} args - Arguments to filter Categorias to delete.
     * @example
     * // Delete a few Categorias
     * const { count } = await prisma.categoria.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoriaDeleteManyArgs>(args?: SelectSubset<T, CategoriaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categorias
     * const categoria = await prisma.categoria.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoriaUpdateManyArgs>(args: SelectSubset<T, CategoriaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Categoria.
     * @param {CategoriaUpsertArgs} args - Arguments to update or create a Categoria.
     * @example
     * // Update or create a Categoria
     * const categoria = await prisma.categoria.upsert({
     *   create: {
     *     // ... data to create a Categoria
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categoria we want to update
     *   }
     * })
     */
    upsert<T extends CategoriaUpsertArgs>(args: SelectSubset<T, CategoriaUpsertArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaCountArgs} args - Arguments to filter Categorias to count.
     * @example
     * // Count the number of Categorias
     * const count = await prisma.categoria.count({
     *   where: {
     *     // ... the filter for the Categorias we want to count
     *   }
     * })
    **/
    count<T extends CategoriaCountArgs>(
      args?: Subset<T, CategoriaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoriaAggregateArgs>(args: Subset<T, CategoriaAggregateArgs>): Prisma.PrismaPromise<GetCategoriaAggregateType<T>>

    /**
     * Group by Categoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoriaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoriaGroupByArgs['orderBy'] }
        : { orderBy?: CategoriaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoriaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Categoria model
   */
  readonly fields: CategoriaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Categoria.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoriaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    productos<T extends Categoria$productosArgs<ExtArgs> = {}>(args?: Subset<T, Categoria$productosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Categoria model
   */
  interface CategoriaFieldRefs {
    readonly id_categoria: FieldRef<"Categoria", 'Int'>
    readonly nombre: FieldRef<"Categoria", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Categoria findUnique
   */
  export type CategoriaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria findUniqueOrThrow
   */
  export type CategoriaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria findFirst
   */
  export type CategoriaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categorias.
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categorias.
     */
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Categoria findFirstOrThrow
   */
  export type CategoriaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categorias.
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categorias.
     */
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Categoria findMany
   */
  export type CategoriaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categorias to fetch.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categorias.
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Categoria create
   */
  export type CategoriaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * The data needed to create a Categoria.
     */
    data: XOR<CategoriaCreateInput, CategoriaUncheckedCreateInput>
  }

  /**
   * Categoria createMany
   */
  export type CategoriaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categorias.
     */
    data: CategoriaCreateManyInput | CategoriaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Categoria update
   */
  export type CategoriaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * The data needed to update a Categoria.
     */
    data: XOR<CategoriaUpdateInput, CategoriaUncheckedUpdateInput>
    /**
     * Choose, which Categoria to update.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria updateMany
   */
  export type CategoriaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categorias.
     */
    data: XOR<CategoriaUpdateManyMutationInput, CategoriaUncheckedUpdateManyInput>
    /**
     * Filter which Categorias to update
     */
    where?: CategoriaWhereInput
    /**
     * Limit how many Categorias to update.
     */
    limit?: number
  }

  /**
   * Categoria upsert
   */
  export type CategoriaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * The filter to search for the Categoria to update in case it exists.
     */
    where: CategoriaWhereUniqueInput
    /**
     * In case the Categoria found by the `where` argument doesn't exist, create a new Categoria with this data.
     */
    create: XOR<CategoriaCreateInput, CategoriaUncheckedCreateInput>
    /**
     * In case the Categoria was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoriaUpdateInput, CategoriaUncheckedUpdateInput>
  }

  /**
   * Categoria delete
   */
  export type CategoriaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter which Categoria to delete.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria deleteMany
   */
  export type CategoriaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categorias to delete
     */
    where?: CategoriaWhereInput
    /**
     * Limit how many Categorias to delete.
     */
    limit?: number
  }

  /**
   * Categoria.productos
   */
  export type Categoria$productosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    where?: ProductoWhereInput
    orderBy?: ProductoOrderByWithRelationInput | ProductoOrderByWithRelationInput[]
    cursor?: ProductoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductoScalarFieldEnum | ProductoScalarFieldEnum[]
  }

  /**
   * Categoria without action
   */
  export type CategoriaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
  }


  /**
   * Model Cliente
   */

  export type AggregateCliente = {
    _count: ClienteCountAggregateOutputType | null
    _avg: ClienteAvgAggregateOutputType | null
    _sum: ClienteSumAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  export type ClienteAvgAggregateOutputType = {
    id_cliente: number | null
    compras_semanales: Decimal | null
    deuda_total: Decimal | null
  }

  export type ClienteSumAggregateOutputType = {
    id_cliente: number | null
    compras_semanales: Decimal | null
    deuda_total: Decimal | null
  }

  export type ClienteMinAggregateOutputType = {
    id_cliente: number | null
    cedula: string | null
    nombre: string | null
    apellido: string | null
    telefono: string | null
    compras_semanales: Decimal | null
    deuda_total: Decimal | null
  }

  export type ClienteMaxAggregateOutputType = {
    id_cliente: number | null
    cedula: string | null
    nombre: string | null
    apellido: string | null
    telefono: string | null
    compras_semanales: Decimal | null
    deuda_total: Decimal | null
  }

  export type ClienteCountAggregateOutputType = {
    id_cliente: number
    cedula: number
    nombre: number
    apellido: number
    telefono: number
    compras_semanales: number
    deuda_total: number
    _all: number
  }


  export type ClienteAvgAggregateInputType = {
    id_cliente?: true
    compras_semanales?: true
    deuda_total?: true
  }

  export type ClienteSumAggregateInputType = {
    id_cliente?: true
    compras_semanales?: true
    deuda_total?: true
  }

  export type ClienteMinAggregateInputType = {
    id_cliente?: true
    cedula?: true
    nombre?: true
    apellido?: true
    telefono?: true
    compras_semanales?: true
    deuda_total?: true
  }

  export type ClienteMaxAggregateInputType = {
    id_cliente?: true
    cedula?: true
    nombre?: true
    apellido?: true
    telefono?: true
    compras_semanales?: true
    deuda_total?: true
  }

  export type ClienteCountAggregateInputType = {
    id_cliente?: true
    cedula?: true
    nombre?: true
    apellido?: true
    telefono?: true
    compras_semanales?: true
    deuda_total?: true
    _all?: true
  }

  export type ClienteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cliente to aggregate.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clientes
    **/
    _count?: true | ClienteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClienteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClienteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClienteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClienteMaxAggregateInputType
  }

  export type GetClienteAggregateType<T extends ClienteAggregateArgs> = {
        [P in keyof T & keyof AggregateCliente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCliente[P]>
      : GetScalarType<T[P], AggregateCliente[P]>
  }




  export type ClienteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClienteWhereInput
    orderBy?: ClienteOrderByWithAggregationInput | ClienteOrderByWithAggregationInput[]
    by: ClienteScalarFieldEnum[] | ClienteScalarFieldEnum
    having?: ClienteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClienteCountAggregateInputType | true
    _avg?: ClienteAvgAggregateInputType
    _sum?: ClienteSumAggregateInputType
    _min?: ClienteMinAggregateInputType
    _max?: ClienteMaxAggregateInputType
  }

  export type ClienteGroupByOutputType = {
    id_cliente: number
    cedula: string
    nombre: string | null
    apellido: string | null
    telefono: string | null
    compras_semanales: Decimal | null
    deuda_total: Decimal | null
    _count: ClienteCountAggregateOutputType | null
    _avg: ClienteAvgAggregateOutputType | null
    _sum: ClienteSumAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  type GetClienteGroupByPayload<T extends ClienteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClienteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClienteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClienteGroupByOutputType[P]>
            : GetScalarType<T[P], ClienteGroupByOutputType[P]>
        }
      >
    >


  export type ClienteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_cliente?: boolean
    cedula?: boolean
    nombre?: boolean
    apellido?: boolean
    telefono?: boolean
    compras_semanales?: boolean
    deuda_total?: boolean
    ventas?: boolean | Cliente$ventasArgs<ExtArgs>
    _count?: boolean | ClienteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cliente"]>



  export type ClienteSelectScalar = {
    id_cliente?: boolean
    cedula?: boolean
    nombre?: boolean
    apellido?: boolean
    telefono?: boolean
    compras_semanales?: boolean
    deuda_total?: boolean
  }

  export type ClienteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_cliente" | "cedula" | "nombre" | "apellido" | "telefono" | "compras_semanales" | "deuda_total", ExtArgs["result"]["cliente"]>
  export type ClienteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ventas?: boolean | Cliente$ventasArgs<ExtArgs>
    _count?: boolean | ClienteCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ClientePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cliente"
    objects: {
      ventas: Prisma.$VentaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_cliente: number
      cedula: string
      nombre: string | null
      apellido: string | null
      telefono: string | null
      compras_semanales: Prisma.Decimal | null
      deuda_total: Prisma.Decimal | null
    }, ExtArgs["result"]["cliente"]>
    composites: {}
  }

  type ClienteGetPayload<S extends boolean | null | undefined | ClienteDefaultArgs> = $Result.GetResult<Prisma.$ClientePayload, S>

  type ClienteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClienteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClienteCountAggregateInputType | true
    }

  export interface ClienteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cliente'], meta: { name: 'Cliente' } }
    /**
     * Find zero or one Cliente that matches the filter.
     * @param {ClienteFindUniqueArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClienteFindUniqueArgs>(args: SelectSubset<T, ClienteFindUniqueArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cliente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClienteFindUniqueOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClienteFindUniqueOrThrowArgs>(args: SelectSubset<T, ClienteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cliente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindFirstArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClienteFindFirstArgs>(args?: SelectSubset<T, ClienteFindFirstArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cliente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindFirstOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClienteFindFirstOrThrowArgs>(args?: SelectSubset<T, ClienteFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clientes
     * const clientes = await prisma.cliente.findMany()
     * 
     * // Get first 10 Clientes
     * const clientes = await prisma.cliente.findMany({ take: 10 })
     * 
     * // Only select the `id_cliente`
     * const clienteWithId_clienteOnly = await prisma.cliente.findMany({ select: { id_cliente: true } })
     * 
     */
    findMany<T extends ClienteFindManyArgs>(args?: SelectSubset<T, ClienteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cliente.
     * @param {ClienteCreateArgs} args - Arguments to create a Cliente.
     * @example
     * // Create one Cliente
     * const Cliente = await prisma.cliente.create({
     *   data: {
     *     // ... data to create a Cliente
     *   }
     * })
     * 
     */
    create<T extends ClienteCreateArgs>(args: SelectSubset<T, ClienteCreateArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clientes.
     * @param {ClienteCreateManyArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const cliente = await prisma.cliente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClienteCreateManyArgs>(args?: SelectSubset<T, ClienteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Cliente.
     * @param {ClienteDeleteArgs} args - Arguments to delete one Cliente.
     * @example
     * // Delete one Cliente
     * const Cliente = await prisma.cliente.delete({
     *   where: {
     *     // ... filter to delete one Cliente
     *   }
     * })
     * 
     */
    delete<T extends ClienteDeleteArgs>(args: SelectSubset<T, ClienteDeleteArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cliente.
     * @param {ClienteUpdateArgs} args - Arguments to update one Cliente.
     * @example
     * // Update one Cliente
     * const cliente = await prisma.cliente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClienteUpdateArgs>(args: SelectSubset<T, ClienteUpdateArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clientes.
     * @param {ClienteDeleteManyArgs} args - Arguments to filter Clientes to delete.
     * @example
     * // Delete a few Clientes
     * const { count } = await prisma.cliente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClienteDeleteManyArgs>(args?: SelectSubset<T, ClienteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clientes
     * const cliente = await prisma.cliente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClienteUpdateManyArgs>(args: SelectSubset<T, ClienteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cliente.
     * @param {ClienteUpsertArgs} args - Arguments to update or create a Cliente.
     * @example
     * // Update or create a Cliente
     * const cliente = await prisma.cliente.upsert({
     *   create: {
     *     // ... data to create a Cliente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cliente we want to update
     *   }
     * })
     */
    upsert<T extends ClienteUpsertArgs>(args: SelectSubset<T, ClienteUpsertArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteCountArgs} args - Arguments to filter Clientes to count.
     * @example
     * // Count the number of Clientes
     * const count = await prisma.cliente.count({
     *   where: {
     *     // ... the filter for the Clientes we want to count
     *   }
     * })
    **/
    count<T extends ClienteCountArgs>(
      args?: Subset<T, ClienteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClienteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClienteAggregateArgs>(args: Subset<T, ClienteAggregateArgs>): Prisma.PrismaPromise<GetClienteAggregateType<T>>

    /**
     * Group by Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClienteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClienteGroupByArgs['orderBy'] }
        : { orderBy?: ClienteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClienteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClienteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cliente model
   */
  readonly fields: ClienteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cliente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClienteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ventas<T extends Cliente$ventasArgs<ExtArgs> = {}>(args?: Subset<T, Cliente$ventasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Cliente model
   */
  interface ClienteFieldRefs {
    readonly id_cliente: FieldRef<"Cliente", 'Int'>
    readonly cedula: FieldRef<"Cliente", 'String'>
    readonly nombre: FieldRef<"Cliente", 'String'>
    readonly apellido: FieldRef<"Cliente", 'String'>
    readonly telefono: FieldRef<"Cliente", 'String'>
    readonly compras_semanales: FieldRef<"Cliente", 'Decimal'>
    readonly deuda_total: FieldRef<"Cliente", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * Cliente findUnique
   */
  export type ClienteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente findUniqueOrThrow
   */
  export type ClienteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente findFirst
   */
  export type ClienteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente findFirstOrThrow
   */
  export type ClienteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente findMany
   */
  export type ClienteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Clientes to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente create
   */
  export type ClienteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The data needed to create a Cliente.
     */
    data: XOR<ClienteCreateInput, ClienteUncheckedCreateInput>
  }

  /**
   * Cliente createMany
   */
  export type ClienteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clientes.
     */
    data: ClienteCreateManyInput | ClienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cliente update
   */
  export type ClienteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The data needed to update a Cliente.
     */
    data: XOR<ClienteUpdateInput, ClienteUncheckedUpdateInput>
    /**
     * Choose, which Cliente to update.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente updateMany
   */
  export type ClienteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clientes.
     */
    data: XOR<ClienteUpdateManyMutationInput, ClienteUncheckedUpdateManyInput>
    /**
     * Filter which Clientes to update
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to update.
     */
    limit?: number
  }

  /**
   * Cliente upsert
   */
  export type ClienteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The filter to search for the Cliente to update in case it exists.
     */
    where: ClienteWhereUniqueInput
    /**
     * In case the Cliente found by the `where` argument doesn't exist, create a new Cliente with this data.
     */
    create: XOR<ClienteCreateInput, ClienteUncheckedCreateInput>
    /**
     * In case the Cliente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClienteUpdateInput, ClienteUncheckedUpdateInput>
  }

  /**
   * Cliente delete
   */
  export type ClienteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter which Cliente to delete.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente deleteMany
   */
  export type ClienteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clientes to delete
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to delete.
     */
    limit?: number
  }

  /**
   * Cliente.ventas
   */
  export type Cliente$ventasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venta
     */
    select?: VentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venta
     */
    omit?: VentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaInclude<ExtArgs> | null
    where?: VentaWhereInput
    orderBy?: VentaOrderByWithRelationInput | VentaOrderByWithRelationInput[]
    cursor?: VentaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VentaScalarFieldEnum | VentaScalarFieldEnum[]
  }

  /**
   * Cliente without action
   */
  export type ClienteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
  }


  /**
   * Model Compra
   */

  export type AggregateCompra = {
    _count: CompraCountAggregateOutputType | null
    _avg: CompraAvgAggregateOutputType | null
    _sum: CompraSumAggregateOutputType | null
    _min: CompraMinAggregateOutputType | null
    _max: CompraMaxAggregateOutputType | null
  }

  export type CompraAvgAggregateOutputType = {
    id_compra: number | null
    total: Decimal | null
    usuario_id_usuario: number | null
    proveedor_id_proveedor: number | null
  }

  export type CompraSumAggregateOutputType = {
    id_compra: number | null
    total: Decimal | null
    usuario_id_usuario: number | null
    proveedor_id_proveedor: number | null
  }

  export type CompraMinAggregateOutputType = {
    id_compra: number | null
    fecha_compra: Date | null
    estado: string | null
    total: Decimal | null
    usuario_id_usuario: number | null
    proveedor_id_proveedor: number | null
  }

  export type CompraMaxAggregateOutputType = {
    id_compra: number | null
    fecha_compra: Date | null
    estado: string | null
    total: Decimal | null
    usuario_id_usuario: number | null
    proveedor_id_proveedor: number | null
  }

  export type CompraCountAggregateOutputType = {
    id_compra: number
    fecha_compra: number
    estado: number
    total: number
    usuario_id_usuario: number
    proveedor_id_proveedor: number
    _all: number
  }


  export type CompraAvgAggregateInputType = {
    id_compra?: true
    total?: true
    usuario_id_usuario?: true
    proveedor_id_proveedor?: true
  }

  export type CompraSumAggregateInputType = {
    id_compra?: true
    total?: true
    usuario_id_usuario?: true
    proveedor_id_proveedor?: true
  }

  export type CompraMinAggregateInputType = {
    id_compra?: true
    fecha_compra?: true
    estado?: true
    total?: true
    usuario_id_usuario?: true
    proveedor_id_proveedor?: true
  }

  export type CompraMaxAggregateInputType = {
    id_compra?: true
    fecha_compra?: true
    estado?: true
    total?: true
    usuario_id_usuario?: true
    proveedor_id_proveedor?: true
  }

  export type CompraCountAggregateInputType = {
    id_compra?: true
    fecha_compra?: true
    estado?: true
    total?: true
    usuario_id_usuario?: true
    proveedor_id_proveedor?: true
    _all?: true
  }

  export type CompraAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Compra to aggregate.
     */
    where?: CompraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Compras to fetch.
     */
    orderBy?: CompraOrderByWithRelationInput | CompraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Compras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Compras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Compras
    **/
    _count?: true | CompraCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CompraAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CompraSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompraMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompraMaxAggregateInputType
  }

  export type GetCompraAggregateType<T extends CompraAggregateArgs> = {
        [P in keyof T & keyof AggregateCompra]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompra[P]>
      : GetScalarType<T[P], AggregateCompra[P]>
  }




  export type CompraGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompraWhereInput
    orderBy?: CompraOrderByWithAggregationInput | CompraOrderByWithAggregationInput[]
    by: CompraScalarFieldEnum[] | CompraScalarFieldEnum
    having?: CompraScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompraCountAggregateInputType | true
    _avg?: CompraAvgAggregateInputType
    _sum?: CompraSumAggregateInputType
    _min?: CompraMinAggregateInputType
    _max?: CompraMaxAggregateInputType
  }

  export type CompraGroupByOutputType = {
    id_compra: number
    fecha_compra: Date | null
    estado: string | null
    total: Decimal | null
    usuario_id_usuario: number
    proveedor_id_proveedor: number
    _count: CompraCountAggregateOutputType | null
    _avg: CompraAvgAggregateOutputType | null
    _sum: CompraSumAggregateOutputType | null
    _min: CompraMinAggregateOutputType | null
    _max: CompraMaxAggregateOutputType | null
  }

  type GetCompraGroupByPayload<T extends CompraGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompraGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompraGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompraGroupByOutputType[P]>
            : GetScalarType<T[P], CompraGroupByOutputType[P]>
        }
      >
    >


  export type CompraSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_compra?: boolean
    fecha_compra?: boolean
    estado?: boolean
    total?: boolean
    usuario_id_usuario?: boolean
    proveedor_id_proveedor?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    proveedor?: boolean | ProveedorDefaultArgs<ExtArgs>
    compra_productos?: boolean | Compra$compra_productosArgs<ExtArgs>
    factura_compra?: boolean | Compra$factura_compraArgs<ExtArgs>
    _count?: boolean | CompraCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["compra"]>



  export type CompraSelectScalar = {
    id_compra?: boolean
    fecha_compra?: boolean
    estado?: boolean
    total?: boolean
    usuario_id_usuario?: boolean
    proveedor_id_proveedor?: boolean
  }

  export type CompraOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_compra" | "fecha_compra" | "estado" | "total" | "usuario_id_usuario" | "proveedor_id_proveedor", ExtArgs["result"]["compra"]>
  export type CompraInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    proveedor?: boolean | ProveedorDefaultArgs<ExtArgs>
    compra_productos?: boolean | Compra$compra_productosArgs<ExtArgs>
    factura_compra?: boolean | Compra$factura_compraArgs<ExtArgs>
    _count?: boolean | CompraCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CompraPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Compra"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      proveedor: Prisma.$ProveedorPayload<ExtArgs>
      compra_productos: Prisma.$CompraProductoPayload<ExtArgs>[]
      factura_compra: Prisma.$FacturaCompraPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id_compra: number
      fecha_compra: Date | null
      estado: string | null
      total: Prisma.Decimal | null
      usuario_id_usuario: number
      proveedor_id_proveedor: number
    }, ExtArgs["result"]["compra"]>
    composites: {}
  }

  type CompraGetPayload<S extends boolean | null | undefined | CompraDefaultArgs> = $Result.GetResult<Prisma.$CompraPayload, S>

  type CompraCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompraFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompraCountAggregateInputType | true
    }

  export interface CompraDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Compra'], meta: { name: 'Compra' } }
    /**
     * Find zero or one Compra that matches the filter.
     * @param {CompraFindUniqueArgs} args - Arguments to find a Compra
     * @example
     * // Get one Compra
     * const compra = await prisma.compra.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompraFindUniqueArgs>(args: SelectSubset<T, CompraFindUniqueArgs<ExtArgs>>): Prisma__CompraClient<$Result.GetResult<Prisma.$CompraPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Compra that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompraFindUniqueOrThrowArgs} args - Arguments to find a Compra
     * @example
     * // Get one Compra
     * const compra = await prisma.compra.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompraFindUniqueOrThrowArgs>(args: SelectSubset<T, CompraFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompraClient<$Result.GetResult<Prisma.$CompraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Compra that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompraFindFirstArgs} args - Arguments to find a Compra
     * @example
     * // Get one Compra
     * const compra = await prisma.compra.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompraFindFirstArgs>(args?: SelectSubset<T, CompraFindFirstArgs<ExtArgs>>): Prisma__CompraClient<$Result.GetResult<Prisma.$CompraPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Compra that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompraFindFirstOrThrowArgs} args - Arguments to find a Compra
     * @example
     * // Get one Compra
     * const compra = await prisma.compra.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompraFindFirstOrThrowArgs>(args?: SelectSubset<T, CompraFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompraClient<$Result.GetResult<Prisma.$CompraPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Compras that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompraFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Compras
     * const compras = await prisma.compra.findMany()
     * 
     * // Get first 10 Compras
     * const compras = await prisma.compra.findMany({ take: 10 })
     * 
     * // Only select the `id_compra`
     * const compraWithId_compraOnly = await prisma.compra.findMany({ select: { id_compra: true } })
     * 
     */
    findMany<T extends CompraFindManyArgs>(args?: SelectSubset<T, CompraFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompraPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Compra.
     * @param {CompraCreateArgs} args - Arguments to create a Compra.
     * @example
     * // Create one Compra
     * const Compra = await prisma.compra.create({
     *   data: {
     *     // ... data to create a Compra
     *   }
     * })
     * 
     */
    create<T extends CompraCreateArgs>(args: SelectSubset<T, CompraCreateArgs<ExtArgs>>): Prisma__CompraClient<$Result.GetResult<Prisma.$CompraPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Compras.
     * @param {CompraCreateManyArgs} args - Arguments to create many Compras.
     * @example
     * // Create many Compras
     * const compra = await prisma.compra.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompraCreateManyArgs>(args?: SelectSubset<T, CompraCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Compra.
     * @param {CompraDeleteArgs} args - Arguments to delete one Compra.
     * @example
     * // Delete one Compra
     * const Compra = await prisma.compra.delete({
     *   where: {
     *     // ... filter to delete one Compra
     *   }
     * })
     * 
     */
    delete<T extends CompraDeleteArgs>(args: SelectSubset<T, CompraDeleteArgs<ExtArgs>>): Prisma__CompraClient<$Result.GetResult<Prisma.$CompraPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Compra.
     * @param {CompraUpdateArgs} args - Arguments to update one Compra.
     * @example
     * // Update one Compra
     * const compra = await prisma.compra.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompraUpdateArgs>(args: SelectSubset<T, CompraUpdateArgs<ExtArgs>>): Prisma__CompraClient<$Result.GetResult<Prisma.$CompraPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Compras.
     * @param {CompraDeleteManyArgs} args - Arguments to filter Compras to delete.
     * @example
     * // Delete a few Compras
     * const { count } = await prisma.compra.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompraDeleteManyArgs>(args?: SelectSubset<T, CompraDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Compras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompraUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Compras
     * const compra = await prisma.compra.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompraUpdateManyArgs>(args: SelectSubset<T, CompraUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Compra.
     * @param {CompraUpsertArgs} args - Arguments to update or create a Compra.
     * @example
     * // Update or create a Compra
     * const compra = await prisma.compra.upsert({
     *   create: {
     *     // ... data to create a Compra
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Compra we want to update
     *   }
     * })
     */
    upsert<T extends CompraUpsertArgs>(args: SelectSubset<T, CompraUpsertArgs<ExtArgs>>): Prisma__CompraClient<$Result.GetResult<Prisma.$CompraPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Compras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompraCountArgs} args - Arguments to filter Compras to count.
     * @example
     * // Count the number of Compras
     * const count = await prisma.compra.count({
     *   where: {
     *     // ... the filter for the Compras we want to count
     *   }
     * })
    **/
    count<T extends CompraCountArgs>(
      args?: Subset<T, CompraCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompraCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Compra.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompraAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CompraAggregateArgs>(args: Subset<T, CompraAggregateArgs>): Prisma.PrismaPromise<GetCompraAggregateType<T>>

    /**
     * Group by Compra.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompraGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CompraGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompraGroupByArgs['orderBy'] }
        : { orderBy?: CompraGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CompraGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompraGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Compra model
   */
  readonly fields: CompraFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Compra.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompraClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    proveedor<T extends ProveedorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProveedorDefaultArgs<ExtArgs>>): Prisma__ProveedorClient<$Result.GetResult<Prisma.$ProveedorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    compra_productos<T extends Compra$compra_productosArgs<ExtArgs> = {}>(args?: Subset<T, Compra$compra_productosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompraProductoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    factura_compra<T extends Compra$factura_compraArgs<ExtArgs> = {}>(args?: Subset<T, Compra$factura_compraArgs<ExtArgs>>): Prisma__FacturaCompraClient<$Result.GetResult<Prisma.$FacturaCompraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Compra model
   */
  interface CompraFieldRefs {
    readonly id_compra: FieldRef<"Compra", 'Int'>
    readonly fecha_compra: FieldRef<"Compra", 'DateTime'>
    readonly estado: FieldRef<"Compra", 'String'>
    readonly total: FieldRef<"Compra", 'Decimal'>
    readonly usuario_id_usuario: FieldRef<"Compra", 'Int'>
    readonly proveedor_id_proveedor: FieldRef<"Compra", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Compra findUnique
   */
  export type CompraFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compra
     */
    select?: CompraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Compra
     */
    omit?: CompraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompraInclude<ExtArgs> | null
    /**
     * Filter, which Compra to fetch.
     */
    where: CompraWhereUniqueInput
  }

  /**
   * Compra findUniqueOrThrow
   */
  export type CompraFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compra
     */
    select?: CompraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Compra
     */
    omit?: CompraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompraInclude<ExtArgs> | null
    /**
     * Filter, which Compra to fetch.
     */
    where: CompraWhereUniqueInput
  }

  /**
   * Compra findFirst
   */
  export type CompraFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compra
     */
    select?: CompraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Compra
     */
    omit?: CompraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompraInclude<ExtArgs> | null
    /**
     * Filter, which Compra to fetch.
     */
    where?: CompraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Compras to fetch.
     */
    orderBy?: CompraOrderByWithRelationInput | CompraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Compras.
     */
    cursor?: CompraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Compras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Compras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Compras.
     */
    distinct?: CompraScalarFieldEnum | CompraScalarFieldEnum[]
  }

  /**
   * Compra findFirstOrThrow
   */
  export type CompraFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compra
     */
    select?: CompraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Compra
     */
    omit?: CompraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompraInclude<ExtArgs> | null
    /**
     * Filter, which Compra to fetch.
     */
    where?: CompraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Compras to fetch.
     */
    orderBy?: CompraOrderByWithRelationInput | CompraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Compras.
     */
    cursor?: CompraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Compras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Compras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Compras.
     */
    distinct?: CompraScalarFieldEnum | CompraScalarFieldEnum[]
  }

  /**
   * Compra findMany
   */
  export type CompraFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compra
     */
    select?: CompraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Compra
     */
    omit?: CompraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompraInclude<ExtArgs> | null
    /**
     * Filter, which Compras to fetch.
     */
    where?: CompraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Compras to fetch.
     */
    orderBy?: CompraOrderByWithRelationInput | CompraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Compras.
     */
    cursor?: CompraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Compras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Compras.
     */
    skip?: number
    distinct?: CompraScalarFieldEnum | CompraScalarFieldEnum[]
  }

  /**
   * Compra create
   */
  export type CompraCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compra
     */
    select?: CompraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Compra
     */
    omit?: CompraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompraInclude<ExtArgs> | null
    /**
     * The data needed to create a Compra.
     */
    data: XOR<CompraCreateInput, CompraUncheckedCreateInput>
  }

  /**
   * Compra createMany
   */
  export type CompraCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Compras.
     */
    data: CompraCreateManyInput | CompraCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Compra update
   */
  export type CompraUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compra
     */
    select?: CompraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Compra
     */
    omit?: CompraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompraInclude<ExtArgs> | null
    /**
     * The data needed to update a Compra.
     */
    data: XOR<CompraUpdateInput, CompraUncheckedUpdateInput>
    /**
     * Choose, which Compra to update.
     */
    where: CompraWhereUniqueInput
  }

  /**
   * Compra updateMany
   */
  export type CompraUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Compras.
     */
    data: XOR<CompraUpdateManyMutationInput, CompraUncheckedUpdateManyInput>
    /**
     * Filter which Compras to update
     */
    where?: CompraWhereInput
    /**
     * Limit how many Compras to update.
     */
    limit?: number
  }

  /**
   * Compra upsert
   */
  export type CompraUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compra
     */
    select?: CompraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Compra
     */
    omit?: CompraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompraInclude<ExtArgs> | null
    /**
     * The filter to search for the Compra to update in case it exists.
     */
    where: CompraWhereUniqueInput
    /**
     * In case the Compra found by the `where` argument doesn't exist, create a new Compra with this data.
     */
    create: XOR<CompraCreateInput, CompraUncheckedCreateInput>
    /**
     * In case the Compra was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompraUpdateInput, CompraUncheckedUpdateInput>
  }

  /**
   * Compra delete
   */
  export type CompraDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compra
     */
    select?: CompraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Compra
     */
    omit?: CompraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompraInclude<ExtArgs> | null
    /**
     * Filter which Compra to delete.
     */
    where: CompraWhereUniqueInput
  }

  /**
   * Compra deleteMany
   */
  export type CompraDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Compras to delete
     */
    where?: CompraWhereInput
    /**
     * Limit how many Compras to delete.
     */
    limit?: number
  }

  /**
   * Compra.compra_productos
   */
  export type Compra$compra_productosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompraProducto
     */
    select?: CompraProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompraProducto
     */
    omit?: CompraProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompraProductoInclude<ExtArgs> | null
    where?: CompraProductoWhereInput
    orderBy?: CompraProductoOrderByWithRelationInput | CompraProductoOrderByWithRelationInput[]
    cursor?: CompraProductoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CompraProductoScalarFieldEnum | CompraProductoScalarFieldEnum[]
  }

  /**
   * Compra.factura_compra
   */
  export type Compra$factura_compraArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacturaCompra
     */
    select?: FacturaCompraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacturaCompra
     */
    omit?: FacturaCompraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaCompraInclude<ExtArgs> | null
    where?: FacturaCompraWhereInput
  }

  /**
   * Compra without action
   */
  export type CompraDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compra
     */
    select?: CompraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Compra
     */
    omit?: CompraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompraInclude<ExtArgs> | null
  }


  /**
   * Model CompraProducto
   */

  export type AggregateCompraProducto = {
    _count: CompraProductoCountAggregateOutputType | null
    _avg: CompraProductoAvgAggregateOutputType | null
    _sum: CompraProductoSumAggregateOutputType | null
    _min: CompraProductoMinAggregateOutputType | null
    _max: CompraProductoMaxAggregateOutputType | null
  }

  export type CompraProductoAvgAggregateOutputType = {
    compra_id_compra: number | null
    producto_id_producto: number | null
    precio_unitario: Decimal | null
    cantidad: Decimal | null
    subtotal: Decimal | null
  }

  export type CompraProductoSumAggregateOutputType = {
    compra_id_compra: number | null
    producto_id_producto: number | null
    precio_unitario: Decimal | null
    cantidad: Decimal | null
    subtotal: Decimal | null
  }

  export type CompraProductoMinAggregateOutputType = {
    compra_id_compra: number | null
    producto_id_producto: number | null
    precio_unitario: Decimal | null
    cantidad: Decimal | null
    subtotal: Decimal | null
  }

  export type CompraProductoMaxAggregateOutputType = {
    compra_id_compra: number | null
    producto_id_producto: number | null
    precio_unitario: Decimal | null
    cantidad: Decimal | null
    subtotal: Decimal | null
  }

  export type CompraProductoCountAggregateOutputType = {
    compra_id_compra: number
    producto_id_producto: number
    precio_unitario: number
    cantidad: number
    subtotal: number
    _all: number
  }


  export type CompraProductoAvgAggregateInputType = {
    compra_id_compra?: true
    producto_id_producto?: true
    precio_unitario?: true
    cantidad?: true
    subtotal?: true
  }

  export type CompraProductoSumAggregateInputType = {
    compra_id_compra?: true
    producto_id_producto?: true
    precio_unitario?: true
    cantidad?: true
    subtotal?: true
  }

  export type CompraProductoMinAggregateInputType = {
    compra_id_compra?: true
    producto_id_producto?: true
    precio_unitario?: true
    cantidad?: true
    subtotal?: true
  }

  export type CompraProductoMaxAggregateInputType = {
    compra_id_compra?: true
    producto_id_producto?: true
    precio_unitario?: true
    cantidad?: true
    subtotal?: true
  }

  export type CompraProductoCountAggregateInputType = {
    compra_id_compra?: true
    producto_id_producto?: true
    precio_unitario?: true
    cantidad?: true
    subtotal?: true
    _all?: true
  }

  export type CompraProductoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompraProducto to aggregate.
     */
    where?: CompraProductoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompraProductos to fetch.
     */
    orderBy?: CompraProductoOrderByWithRelationInput | CompraProductoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompraProductoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompraProductos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompraProductos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CompraProductos
    **/
    _count?: true | CompraProductoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CompraProductoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CompraProductoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompraProductoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompraProductoMaxAggregateInputType
  }

  export type GetCompraProductoAggregateType<T extends CompraProductoAggregateArgs> = {
        [P in keyof T & keyof AggregateCompraProducto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompraProducto[P]>
      : GetScalarType<T[P], AggregateCompraProducto[P]>
  }




  export type CompraProductoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompraProductoWhereInput
    orderBy?: CompraProductoOrderByWithAggregationInput | CompraProductoOrderByWithAggregationInput[]
    by: CompraProductoScalarFieldEnum[] | CompraProductoScalarFieldEnum
    having?: CompraProductoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompraProductoCountAggregateInputType | true
    _avg?: CompraProductoAvgAggregateInputType
    _sum?: CompraProductoSumAggregateInputType
    _min?: CompraProductoMinAggregateInputType
    _max?: CompraProductoMaxAggregateInputType
  }

  export type CompraProductoGroupByOutputType = {
    compra_id_compra: number
    producto_id_producto: number
    precio_unitario: Decimal
    cantidad: Decimal
    subtotal: Decimal
    _count: CompraProductoCountAggregateOutputType | null
    _avg: CompraProductoAvgAggregateOutputType | null
    _sum: CompraProductoSumAggregateOutputType | null
    _min: CompraProductoMinAggregateOutputType | null
    _max: CompraProductoMaxAggregateOutputType | null
  }

  type GetCompraProductoGroupByPayload<T extends CompraProductoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompraProductoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompraProductoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompraProductoGroupByOutputType[P]>
            : GetScalarType<T[P], CompraProductoGroupByOutputType[P]>
        }
      >
    >


  export type CompraProductoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    compra_id_compra?: boolean
    producto_id_producto?: boolean
    precio_unitario?: boolean
    cantidad?: boolean
    subtotal?: boolean
    compra?: boolean | CompraDefaultArgs<ExtArgs>
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["compraProducto"]>



  export type CompraProductoSelectScalar = {
    compra_id_compra?: boolean
    producto_id_producto?: boolean
    precio_unitario?: boolean
    cantidad?: boolean
    subtotal?: boolean
  }

  export type CompraProductoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"compra_id_compra" | "producto_id_producto" | "precio_unitario" | "cantidad" | "subtotal", ExtArgs["result"]["compraProducto"]>
  export type CompraProductoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    compra?: boolean | CompraDefaultArgs<ExtArgs>
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
  }

  export type $CompraProductoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CompraProducto"
    objects: {
      compra: Prisma.$CompraPayload<ExtArgs>
      producto: Prisma.$ProductoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      compra_id_compra: number
      producto_id_producto: number
      precio_unitario: Prisma.Decimal
      cantidad: Prisma.Decimal
      subtotal: Prisma.Decimal
    }, ExtArgs["result"]["compraProducto"]>
    composites: {}
  }

  type CompraProductoGetPayload<S extends boolean | null | undefined | CompraProductoDefaultArgs> = $Result.GetResult<Prisma.$CompraProductoPayload, S>

  type CompraProductoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompraProductoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompraProductoCountAggregateInputType | true
    }

  export interface CompraProductoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CompraProducto'], meta: { name: 'CompraProducto' } }
    /**
     * Find zero or one CompraProducto that matches the filter.
     * @param {CompraProductoFindUniqueArgs} args - Arguments to find a CompraProducto
     * @example
     * // Get one CompraProducto
     * const compraProducto = await prisma.compraProducto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompraProductoFindUniqueArgs>(args: SelectSubset<T, CompraProductoFindUniqueArgs<ExtArgs>>): Prisma__CompraProductoClient<$Result.GetResult<Prisma.$CompraProductoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CompraProducto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompraProductoFindUniqueOrThrowArgs} args - Arguments to find a CompraProducto
     * @example
     * // Get one CompraProducto
     * const compraProducto = await prisma.compraProducto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompraProductoFindUniqueOrThrowArgs>(args: SelectSubset<T, CompraProductoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompraProductoClient<$Result.GetResult<Prisma.$CompraProductoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CompraProducto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompraProductoFindFirstArgs} args - Arguments to find a CompraProducto
     * @example
     * // Get one CompraProducto
     * const compraProducto = await prisma.compraProducto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompraProductoFindFirstArgs>(args?: SelectSubset<T, CompraProductoFindFirstArgs<ExtArgs>>): Prisma__CompraProductoClient<$Result.GetResult<Prisma.$CompraProductoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CompraProducto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompraProductoFindFirstOrThrowArgs} args - Arguments to find a CompraProducto
     * @example
     * // Get one CompraProducto
     * const compraProducto = await prisma.compraProducto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompraProductoFindFirstOrThrowArgs>(args?: SelectSubset<T, CompraProductoFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompraProductoClient<$Result.GetResult<Prisma.$CompraProductoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CompraProductos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompraProductoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CompraProductos
     * const compraProductos = await prisma.compraProducto.findMany()
     * 
     * // Get first 10 CompraProductos
     * const compraProductos = await prisma.compraProducto.findMany({ take: 10 })
     * 
     * // Only select the `compra_id_compra`
     * const compraProductoWithCompra_id_compraOnly = await prisma.compraProducto.findMany({ select: { compra_id_compra: true } })
     * 
     */
    findMany<T extends CompraProductoFindManyArgs>(args?: SelectSubset<T, CompraProductoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompraProductoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CompraProducto.
     * @param {CompraProductoCreateArgs} args - Arguments to create a CompraProducto.
     * @example
     * // Create one CompraProducto
     * const CompraProducto = await prisma.compraProducto.create({
     *   data: {
     *     // ... data to create a CompraProducto
     *   }
     * })
     * 
     */
    create<T extends CompraProductoCreateArgs>(args: SelectSubset<T, CompraProductoCreateArgs<ExtArgs>>): Prisma__CompraProductoClient<$Result.GetResult<Prisma.$CompraProductoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CompraProductos.
     * @param {CompraProductoCreateManyArgs} args - Arguments to create many CompraProductos.
     * @example
     * // Create many CompraProductos
     * const compraProducto = await prisma.compraProducto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompraProductoCreateManyArgs>(args?: SelectSubset<T, CompraProductoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CompraProducto.
     * @param {CompraProductoDeleteArgs} args - Arguments to delete one CompraProducto.
     * @example
     * // Delete one CompraProducto
     * const CompraProducto = await prisma.compraProducto.delete({
     *   where: {
     *     // ... filter to delete one CompraProducto
     *   }
     * })
     * 
     */
    delete<T extends CompraProductoDeleteArgs>(args: SelectSubset<T, CompraProductoDeleteArgs<ExtArgs>>): Prisma__CompraProductoClient<$Result.GetResult<Prisma.$CompraProductoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CompraProducto.
     * @param {CompraProductoUpdateArgs} args - Arguments to update one CompraProducto.
     * @example
     * // Update one CompraProducto
     * const compraProducto = await prisma.compraProducto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompraProductoUpdateArgs>(args: SelectSubset<T, CompraProductoUpdateArgs<ExtArgs>>): Prisma__CompraProductoClient<$Result.GetResult<Prisma.$CompraProductoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CompraProductos.
     * @param {CompraProductoDeleteManyArgs} args - Arguments to filter CompraProductos to delete.
     * @example
     * // Delete a few CompraProductos
     * const { count } = await prisma.compraProducto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompraProductoDeleteManyArgs>(args?: SelectSubset<T, CompraProductoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CompraProductos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompraProductoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CompraProductos
     * const compraProducto = await prisma.compraProducto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompraProductoUpdateManyArgs>(args: SelectSubset<T, CompraProductoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CompraProducto.
     * @param {CompraProductoUpsertArgs} args - Arguments to update or create a CompraProducto.
     * @example
     * // Update or create a CompraProducto
     * const compraProducto = await prisma.compraProducto.upsert({
     *   create: {
     *     // ... data to create a CompraProducto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CompraProducto we want to update
     *   }
     * })
     */
    upsert<T extends CompraProductoUpsertArgs>(args: SelectSubset<T, CompraProductoUpsertArgs<ExtArgs>>): Prisma__CompraProductoClient<$Result.GetResult<Prisma.$CompraProductoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CompraProductos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompraProductoCountArgs} args - Arguments to filter CompraProductos to count.
     * @example
     * // Count the number of CompraProductos
     * const count = await prisma.compraProducto.count({
     *   where: {
     *     // ... the filter for the CompraProductos we want to count
     *   }
     * })
    **/
    count<T extends CompraProductoCountArgs>(
      args?: Subset<T, CompraProductoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompraProductoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CompraProducto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompraProductoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CompraProductoAggregateArgs>(args: Subset<T, CompraProductoAggregateArgs>): Prisma.PrismaPromise<GetCompraProductoAggregateType<T>>

    /**
     * Group by CompraProducto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompraProductoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CompraProductoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompraProductoGroupByArgs['orderBy'] }
        : { orderBy?: CompraProductoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CompraProductoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompraProductoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CompraProducto model
   */
  readonly fields: CompraProductoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CompraProducto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompraProductoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    compra<T extends CompraDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompraDefaultArgs<ExtArgs>>): Prisma__CompraClient<$Result.GetResult<Prisma.$CompraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    producto<T extends ProductoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductoDefaultArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CompraProducto model
   */
  interface CompraProductoFieldRefs {
    readonly compra_id_compra: FieldRef<"CompraProducto", 'Int'>
    readonly producto_id_producto: FieldRef<"CompraProducto", 'Int'>
    readonly precio_unitario: FieldRef<"CompraProducto", 'Decimal'>
    readonly cantidad: FieldRef<"CompraProducto", 'Decimal'>
    readonly subtotal: FieldRef<"CompraProducto", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * CompraProducto findUnique
   */
  export type CompraProductoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompraProducto
     */
    select?: CompraProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompraProducto
     */
    omit?: CompraProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompraProductoInclude<ExtArgs> | null
    /**
     * Filter, which CompraProducto to fetch.
     */
    where: CompraProductoWhereUniqueInput
  }

  /**
   * CompraProducto findUniqueOrThrow
   */
  export type CompraProductoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompraProducto
     */
    select?: CompraProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompraProducto
     */
    omit?: CompraProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompraProductoInclude<ExtArgs> | null
    /**
     * Filter, which CompraProducto to fetch.
     */
    where: CompraProductoWhereUniqueInput
  }

  /**
   * CompraProducto findFirst
   */
  export type CompraProductoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompraProducto
     */
    select?: CompraProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompraProducto
     */
    omit?: CompraProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompraProductoInclude<ExtArgs> | null
    /**
     * Filter, which CompraProducto to fetch.
     */
    where?: CompraProductoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompraProductos to fetch.
     */
    orderBy?: CompraProductoOrderByWithRelationInput | CompraProductoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompraProductos.
     */
    cursor?: CompraProductoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompraProductos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompraProductos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompraProductos.
     */
    distinct?: CompraProductoScalarFieldEnum | CompraProductoScalarFieldEnum[]
  }

  /**
   * CompraProducto findFirstOrThrow
   */
  export type CompraProductoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompraProducto
     */
    select?: CompraProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompraProducto
     */
    omit?: CompraProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompraProductoInclude<ExtArgs> | null
    /**
     * Filter, which CompraProducto to fetch.
     */
    where?: CompraProductoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompraProductos to fetch.
     */
    orderBy?: CompraProductoOrderByWithRelationInput | CompraProductoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompraProductos.
     */
    cursor?: CompraProductoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompraProductos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompraProductos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompraProductos.
     */
    distinct?: CompraProductoScalarFieldEnum | CompraProductoScalarFieldEnum[]
  }

  /**
   * CompraProducto findMany
   */
  export type CompraProductoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompraProducto
     */
    select?: CompraProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompraProducto
     */
    omit?: CompraProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompraProductoInclude<ExtArgs> | null
    /**
     * Filter, which CompraProductos to fetch.
     */
    where?: CompraProductoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompraProductos to fetch.
     */
    orderBy?: CompraProductoOrderByWithRelationInput | CompraProductoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CompraProductos.
     */
    cursor?: CompraProductoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompraProductos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompraProductos.
     */
    skip?: number
    distinct?: CompraProductoScalarFieldEnum | CompraProductoScalarFieldEnum[]
  }

  /**
   * CompraProducto create
   */
  export type CompraProductoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompraProducto
     */
    select?: CompraProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompraProducto
     */
    omit?: CompraProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompraProductoInclude<ExtArgs> | null
    /**
     * The data needed to create a CompraProducto.
     */
    data: XOR<CompraProductoCreateInput, CompraProductoUncheckedCreateInput>
  }

  /**
   * CompraProducto createMany
   */
  export type CompraProductoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CompraProductos.
     */
    data: CompraProductoCreateManyInput | CompraProductoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CompraProducto update
   */
  export type CompraProductoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompraProducto
     */
    select?: CompraProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompraProducto
     */
    omit?: CompraProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompraProductoInclude<ExtArgs> | null
    /**
     * The data needed to update a CompraProducto.
     */
    data: XOR<CompraProductoUpdateInput, CompraProductoUncheckedUpdateInput>
    /**
     * Choose, which CompraProducto to update.
     */
    where: CompraProductoWhereUniqueInput
  }

  /**
   * CompraProducto updateMany
   */
  export type CompraProductoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CompraProductos.
     */
    data: XOR<CompraProductoUpdateManyMutationInput, CompraProductoUncheckedUpdateManyInput>
    /**
     * Filter which CompraProductos to update
     */
    where?: CompraProductoWhereInput
    /**
     * Limit how many CompraProductos to update.
     */
    limit?: number
  }

  /**
   * CompraProducto upsert
   */
  export type CompraProductoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompraProducto
     */
    select?: CompraProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompraProducto
     */
    omit?: CompraProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompraProductoInclude<ExtArgs> | null
    /**
     * The filter to search for the CompraProducto to update in case it exists.
     */
    where: CompraProductoWhereUniqueInput
    /**
     * In case the CompraProducto found by the `where` argument doesn't exist, create a new CompraProducto with this data.
     */
    create: XOR<CompraProductoCreateInput, CompraProductoUncheckedCreateInput>
    /**
     * In case the CompraProducto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompraProductoUpdateInput, CompraProductoUncheckedUpdateInput>
  }

  /**
   * CompraProducto delete
   */
  export type CompraProductoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompraProducto
     */
    select?: CompraProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompraProducto
     */
    omit?: CompraProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompraProductoInclude<ExtArgs> | null
    /**
     * Filter which CompraProducto to delete.
     */
    where: CompraProductoWhereUniqueInput
  }

  /**
   * CompraProducto deleteMany
   */
  export type CompraProductoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompraProductos to delete
     */
    where?: CompraProductoWhereInput
    /**
     * Limit how many CompraProductos to delete.
     */
    limit?: number
  }

  /**
   * CompraProducto without action
   */
  export type CompraProductoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompraProducto
     */
    select?: CompraProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompraProducto
     */
    omit?: CompraProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompraProductoInclude<ExtArgs> | null
  }


  /**
   * Model FacturaCompra
   */

  export type AggregateFacturaCompra = {
    _count: FacturaCompraCountAggregateOutputType | null
    _avg: FacturaCompraAvgAggregateOutputType | null
    _sum: FacturaCompraSumAggregateOutputType | null
    _min: FacturaCompraMinAggregateOutputType | null
    _max: FacturaCompraMaxAggregateOutputType | null
  }

  export type FacturaCompraAvgAggregateOutputType = {
    id_factura: number | null
    subtotal: Decimal | null
    impuestos: Decimal | null
    total: Decimal | null
    compra_id_compra: number | null
  }

  export type FacturaCompraSumAggregateOutputType = {
    id_factura: number | null
    subtotal: Decimal | null
    impuestos: Decimal | null
    total: Decimal | null
    compra_id_compra: number | null
  }

  export type FacturaCompraMinAggregateOutputType = {
    id_factura: number | null
    fecha: Date | null
    subtotal: Decimal | null
    impuestos: Decimal | null
    total: Decimal | null
    compra_id_compra: number | null
  }

  export type FacturaCompraMaxAggregateOutputType = {
    id_factura: number | null
    fecha: Date | null
    subtotal: Decimal | null
    impuestos: Decimal | null
    total: Decimal | null
    compra_id_compra: number | null
  }

  export type FacturaCompraCountAggregateOutputType = {
    id_factura: number
    fecha: number
    subtotal: number
    impuestos: number
    total: number
    compra_id_compra: number
    _all: number
  }


  export type FacturaCompraAvgAggregateInputType = {
    id_factura?: true
    subtotal?: true
    impuestos?: true
    total?: true
    compra_id_compra?: true
  }

  export type FacturaCompraSumAggregateInputType = {
    id_factura?: true
    subtotal?: true
    impuestos?: true
    total?: true
    compra_id_compra?: true
  }

  export type FacturaCompraMinAggregateInputType = {
    id_factura?: true
    fecha?: true
    subtotal?: true
    impuestos?: true
    total?: true
    compra_id_compra?: true
  }

  export type FacturaCompraMaxAggregateInputType = {
    id_factura?: true
    fecha?: true
    subtotal?: true
    impuestos?: true
    total?: true
    compra_id_compra?: true
  }

  export type FacturaCompraCountAggregateInputType = {
    id_factura?: true
    fecha?: true
    subtotal?: true
    impuestos?: true
    total?: true
    compra_id_compra?: true
    _all?: true
  }

  export type FacturaCompraAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FacturaCompra to aggregate.
     */
    where?: FacturaCompraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacturaCompras to fetch.
     */
    orderBy?: FacturaCompraOrderByWithRelationInput | FacturaCompraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FacturaCompraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacturaCompras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacturaCompras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FacturaCompras
    **/
    _count?: true | FacturaCompraCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FacturaCompraAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FacturaCompraSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FacturaCompraMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FacturaCompraMaxAggregateInputType
  }

  export type GetFacturaCompraAggregateType<T extends FacturaCompraAggregateArgs> = {
        [P in keyof T & keyof AggregateFacturaCompra]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFacturaCompra[P]>
      : GetScalarType<T[P], AggregateFacturaCompra[P]>
  }




  export type FacturaCompraGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FacturaCompraWhereInput
    orderBy?: FacturaCompraOrderByWithAggregationInput | FacturaCompraOrderByWithAggregationInput[]
    by: FacturaCompraScalarFieldEnum[] | FacturaCompraScalarFieldEnum
    having?: FacturaCompraScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FacturaCompraCountAggregateInputType | true
    _avg?: FacturaCompraAvgAggregateInputType
    _sum?: FacturaCompraSumAggregateInputType
    _min?: FacturaCompraMinAggregateInputType
    _max?: FacturaCompraMaxAggregateInputType
  }

  export type FacturaCompraGroupByOutputType = {
    id_factura: number
    fecha: Date | null
    subtotal: Decimal | null
    impuestos: Decimal | null
    total: Decimal | null
    compra_id_compra: number
    _count: FacturaCompraCountAggregateOutputType | null
    _avg: FacturaCompraAvgAggregateOutputType | null
    _sum: FacturaCompraSumAggregateOutputType | null
    _min: FacturaCompraMinAggregateOutputType | null
    _max: FacturaCompraMaxAggregateOutputType | null
  }

  type GetFacturaCompraGroupByPayload<T extends FacturaCompraGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FacturaCompraGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FacturaCompraGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FacturaCompraGroupByOutputType[P]>
            : GetScalarType<T[P], FacturaCompraGroupByOutputType[P]>
        }
      >
    >


  export type FacturaCompraSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_factura?: boolean
    fecha?: boolean
    subtotal?: boolean
    impuestos?: boolean
    total?: boolean
    compra_id_compra?: boolean
    compra?: boolean | CompraDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["facturaCompra"]>



  export type FacturaCompraSelectScalar = {
    id_factura?: boolean
    fecha?: boolean
    subtotal?: boolean
    impuestos?: boolean
    total?: boolean
    compra_id_compra?: boolean
  }

  export type FacturaCompraOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_factura" | "fecha" | "subtotal" | "impuestos" | "total" | "compra_id_compra", ExtArgs["result"]["facturaCompra"]>
  export type FacturaCompraInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    compra?: boolean | CompraDefaultArgs<ExtArgs>
  }

  export type $FacturaCompraPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FacturaCompra"
    objects: {
      compra: Prisma.$CompraPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_factura: number
      fecha: Date | null
      subtotal: Prisma.Decimal | null
      impuestos: Prisma.Decimal | null
      total: Prisma.Decimal | null
      compra_id_compra: number
    }, ExtArgs["result"]["facturaCompra"]>
    composites: {}
  }

  type FacturaCompraGetPayload<S extends boolean | null | undefined | FacturaCompraDefaultArgs> = $Result.GetResult<Prisma.$FacturaCompraPayload, S>

  type FacturaCompraCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FacturaCompraFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FacturaCompraCountAggregateInputType | true
    }

  export interface FacturaCompraDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FacturaCompra'], meta: { name: 'FacturaCompra' } }
    /**
     * Find zero or one FacturaCompra that matches the filter.
     * @param {FacturaCompraFindUniqueArgs} args - Arguments to find a FacturaCompra
     * @example
     * // Get one FacturaCompra
     * const facturaCompra = await prisma.facturaCompra.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FacturaCompraFindUniqueArgs>(args: SelectSubset<T, FacturaCompraFindUniqueArgs<ExtArgs>>): Prisma__FacturaCompraClient<$Result.GetResult<Prisma.$FacturaCompraPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FacturaCompra that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FacturaCompraFindUniqueOrThrowArgs} args - Arguments to find a FacturaCompra
     * @example
     * // Get one FacturaCompra
     * const facturaCompra = await prisma.facturaCompra.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FacturaCompraFindUniqueOrThrowArgs>(args: SelectSubset<T, FacturaCompraFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FacturaCompraClient<$Result.GetResult<Prisma.$FacturaCompraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FacturaCompra that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacturaCompraFindFirstArgs} args - Arguments to find a FacturaCompra
     * @example
     * // Get one FacturaCompra
     * const facturaCompra = await prisma.facturaCompra.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FacturaCompraFindFirstArgs>(args?: SelectSubset<T, FacturaCompraFindFirstArgs<ExtArgs>>): Prisma__FacturaCompraClient<$Result.GetResult<Prisma.$FacturaCompraPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FacturaCompra that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacturaCompraFindFirstOrThrowArgs} args - Arguments to find a FacturaCompra
     * @example
     * // Get one FacturaCompra
     * const facturaCompra = await prisma.facturaCompra.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FacturaCompraFindFirstOrThrowArgs>(args?: SelectSubset<T, FacturaCompraFindFirstOrThrowArgs<ExtArgs>>): Prisma__FacturaCompraClient<$Result.GetResult<Prisma.$FacturaCompraPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FacturaCompras that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacturaCompraFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FacturaCompras
     * const facturaCompras = await prisma.facturaCompra.findMany()
     * 
     * // Get first 10 FacturaCompras
     * const facturaCompras = await prisma.facturaCompra.findMany({ take: 10 })
     * 
     * // Only select the `id_factura`
     * const facturaCompraWithId_facturaOnly = await prisma.facturaCompra.findMany({ select: { id_factura: true } })
     * 
     */
    findMany<T extends FacturaCompraFindManyArgs>(args?: SelectSubset<T, FacturaCompraFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacturaCompraPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FacturaCompra.
     * @param {FacturaCompraCreateArgs} args - Arguments to create a FacturaCompra.
     * @example
     * // Create one FacturaCompra
     * const FacturaCompra = await prisma.facturaCompra.create({
     *   data: {
     *     // ... data to create a FacturaCompra
     *   }
     * })
     * 
     */
    create<T extends FacturaCompraCreateArgs>(args: SelectSubset<T, FacturaCompraCreateArgs<ExtArgs>>): Prisma__FacturaCompraClient<$Result.GetResult<Prisma.$FacturaCompraPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FacturaCompras.
     * @param {FacturaCompraCreateManyArgs} args - Arguments to create many FacturaCompras.
     * @example
     * // Create many FacturaCompras
     * const facturaCompra = await prisma.facturaCompra.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FacturaCompraCreateManyArgs>(args?: SelectSubset<T, FacturaCompraCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FacturaCompra.
     * @param {FacturaCompraDeleteArgs} args - Arguments to delete one FacturaCompra.
     * @example
     * // Delete one FacturaCompra
     * const FacturaCompra = await prisma.facturaCompra.delete({
     *   where: {
     *     // ... filter to delete one FacturaCompra
     *   }
     * })
     * 
     */
    delete<T extends FacturaCompraDeleteArgs>(args: SelectSubset<T, FacturaCompraDeleteArgs<ExtArgs>>): Prisma__FacturaCompraClient<$Result.GetResult<Prisma.$FacturaCompraPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FacturaCompra.
     * @param {FacturaCompraUpdateArgs} args - Arguments to update one FacturaCompra.
     * @example
     * // Update one FacturaCompra
     * const facturaCompra = await prisma.facturaCompra.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FacturaCompraUpdateArgs>(args: SelectSubset<T, FacturaCompraUpdateArgs<ExtArgs>>): Prisma__FacturaCompraClient<$Result.GetResult<Prisma.$FacturaCompraPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FacturaCompras.
     * @param {FacturaCompraDeleteManyArgs} args - Arguments to filter FacturaCompras to delete.
     * @example
     * // Delete a few FacturaCompras
     * const { count } = await prisma.facturaCompra.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FacturaCompraDeleteManyArgs>(args?: SelectSubset<T, FacturaCompraDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FacturaCompras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacturaCompraUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FacturaCompras
     * const facturaCompra = await prisma.facturaCompra.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FacturaCompraUpdateManyArgs>(args: SelectSubset<T, FacturaCompraUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FacturaCompra.
     * @param {FacturaCompraUpsertArgs} args - Arguments to update or create a FacturaCompra.
     * @example
     * // Update or create a FacturaCompra
     * const facturaCompra = await prisma.facturaCompra.upsert({
     *   create: {
     *     // ... data to create a FacturaCompra
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FacturaCompra we want to update
     *   }
     * })
     */
    upsert<T extends FacturaCompraUpsertArgs>(args: SelectSubset<T, FacturaCompraUpsertArgs<ExtArgs>>): Prisma__FacturaCompraClient<$Result.GetResult<Prisma.$FacturaCompraPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FacturaCompras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacturaCompraCountArgs} args - Arguments to filter FacturaCompras to count.
     * @example
     * // Count the number of FacturaCompras
     * const count = await prisma.facturaCompra.count({
     *   where: {
     *     // ... the filter for the FacturaCompras we want to count
     *   }
     * })
    **/
    count<T extends FacturaCompraCountArgs>(
      args?: Subset<T, FacturaCompraCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FacturaCompraCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FacturaCompra.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacturaCompraAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FacturaCompraAggregateArgs>(args: Subset<T, FacturaCompraAggregateArgs>): Prisma.PrismaPromise<GetFacturaCompraAggregateType<T>>

    /**
     * Group by FacturaCompra.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacturaCompraGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FacturaCompraGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FacturaCompraGroupByArgs['orderBy'] }
        : { orderBy?: FacturaCompraGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FacturaCompraGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFacturaCompraGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FacturaCompra model
   */
  readonly fields: FacturaCompraFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FacturaCompra.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FacturaCompraClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    compra<T extends CompraDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompraDefaultArgs<ExtArgs>>): Prisma__CompraClient<$Result.GetResult<Prisma.$CompraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FacturaCompra model
   */
  interface FacturaCompraFieldRefs {
    readonly id_factura: FieldRef<"FacturaCompra", 'Int'>
    readonly fecha: FieldRef<"FacturaCompra", 'DateTime'>
    readonly subtotal: FieldRef<"FacturaCompra", 'Decimal'>
    readonly impuestos: FieldRef<"FacturaCompra", 'Decimal'>
    readonly total: FieldRef<"FacturaCompra", 'Decimal'>
    readonly compra_id_compra: FieldRef<"FacturaCompra", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * FacturaCompra findUnique
   */
  export type FacturaCompraFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacturaCompra
     */
    select?: FacturaCompraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacturaCompra
     */
    omit?: FacturaCompraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaCompraInclude<ExtArgs> | null
    /**
     * Filter, which FacturaCompra to fetch.
     */
    where: FacturaCompraWhereUniqueInput
  }

  /**
   * FacturaCompra findUniqueOrThrow
   */
  export type FacturaCompraFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacturaCompra
     */
    select?: FacturaCompraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacturaCompra
     */
    omit?: FacturaCompraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaCompraInclude<ExtArgs> | null
    /**
     * Filter, which FacturaCompra to fetch.
     */
    where: FacturaCompraWhereUniqueInput
  }

  /**
   * FacturaCompra findFirst
   */
  export type FacturaCompraFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacturaCompra
     */
    select?: FacturaCompraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacturaCompra
     */
    omit?: FacturaCompraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaCompraInclude<ExtArgs> | null
    /**
     * Filter, which FacturaCompra to fetch.
     */
    where?: FacturaCompraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacturaCompras to fetch.
     */
    orderBy?: FacturaCompraOrderByWithRelationInput | FacturaCompraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FacturaCompras.
     */
    cursor?: FacturaCompraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacturaCompras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacturaCompras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FacturaCompras.
     */
    distinct?: FacturaCompraScalarFieldEnum | FacturaCompraScalarFieldEnum[]
  }

  /**
   * FacturaCompra findFirstOrThrow
   */
  export type FacturaCompraFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacturaCompra
     */
    select?: FacturaCompraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacturaCompra
     */
    omit?: FacturaCompraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaCompraInclude<ExtArgs> | null
    /**
     * Filter, which FacturaCompra to fetch.
     */
    where?: FacturaCompraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacturaCompras to fetch.
     */
    orderBy?: FacturaCompraOrderByWithRelationInput | FacturaCompraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FacturaCompras.
     */
    cursor?: FacturaCompraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacturaCompras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacturaCompras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FacturaCompras.
     */
    distinct?: FacturaCompraScalarFieldEnum | FacturaCompraScalarFieldEnum[]
  }

  /**
   * FacturaCompra findMany
   */
  export type FacturaCompraFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacturaCompra
     */
    select?: FacturaCompraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacturaCompra
     */
    omit?: FacturaCompraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaCompraInclude<ExtArgs> | null
    /**
     * Filter, which FacturaCompras to fetch.
     */
    where?: FacturaCompraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacturaCompras to fetch.
     */
    orderBy?: FacturaCompraOrderByWithRelationInput | FacturaCompraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FacturaCompras.
     */
    cursor?: FacturaCompraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacturaCompras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacturaCompras.
     */
    skip?: number
    distinct?: FacturaCompraScalarFieldEnum | FacturaCompraScalarFieldEnum[]
  }

  /**
   * FacturaCompra create
   */
  export type FacturaCompraCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacturaCompra
     */
    select?: FacturaCompraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacturaCompra
     */
    omit?: FacturaCompraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaCompraInclude<ExtArgs> | null
    /**
     * The data needed to create a FacturaCompra.
     */
    data: XOR<FacturaCompraCreateInput, FacturaCompraUncheckedCreateInput>
  }

  /**
   * FacturaCompra createMany
   */
  export type FacturaCompraCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FacturaCompras.
     */
    data: FacturaCompraCreateManyInput | FacturaCompraCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FacturaCompra update
   */
  export type FacturaCompraUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacturaCompra
     */
    select?: FacturaCompraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacturaCompra
     */
    omit?: FacturaCompraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaCompraInclude<ExtArgs> | null
    /**
     * The data needed to update a FacturaCompra.
     */
    data: XOR<FacturaCompraUpdateInput, FacturaCompraUncheckedUpdateInput>
    /**
     * Choose, which FacturaCompra to update.
     */
    where: FacturaCompraWhereUniqueInput
  }

  /**
   * FacturaCompra updateMany
   */
  export type FacturaCompraUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FacturaCompras.
     */
    data: XOR<FacturaCompraUpdateManyMutationInput, FacturaCompraUncheckedUpdateManyInput>
    /**
     * Filter which FacturaCompras to update
     */
    where?: FacturaCompraWhereInput
    /**
     * Limit how many FacturaCompras to update.
     */
    limit?: number
  }

  /**
   * FacturaCompra upsert
   */
  export type FacturaCompraUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacturaCompra
     */
    select?: FacturaCompraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacturaCompra
     */
    omit?: FacturaCompraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaCompraInclude<ExtArgs> | null
    /**
     * The filter to search for the FacturaCompra to update in case it exists.
     */
    where: FacturaCompraWhereUniqueInput
    /**
     * In case the FacturaCompra found by the `where` argument doesn't exist, create a new FacturaCompra with this data.
     */
    create: XOR<FacturaCompraCreateInput, FacturaCompraUncheckedCreateInput>
    /**
     * In case the FacturaCompra was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FacturaCompraUpdateInput, FacturaCompraUncheckedUpdateInput>
  }

  /**
   * FacturaCompra delete
   */
  export type FacturaCompraDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacturaCompra
     */
    select?: FacturaCompraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacturaCompra
     */
    omit?: FacturaCompraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaCompraInclude<ExtArgs> | null
    /**
     * Filter which FacturaCompra to delete.
     */
    where: FacturaCompraWhereUniqueInput
  }

  /**
   * FacturaCompra deleteMany
   */
  export type FacturaCompraDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FacturaCompras to delete
     */
    where?: FacturaCompraWhereInput
    /**
     * Limit how many FacturaCompras to delete.
     */
    limit?: number
  }

  /**
   * FacturaCompra without action
   */
  export type FacturaCompraDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacturaCompra
     */
    select?: FacturaCompraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacturaCompra
     */
    omit?: FacturaCompraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaCompraInclude<ExtArgs> | null
  }


  /**
   * Model FacturaVenta
   */

  export type AggregateFacturaVenta = {
    _count: FacturaVentaCountAggregateOutputType | null
    _avg: FacturaVentaAvgAggregateOutputType | null
    _sum: FacturaVentaSumAggregateOutputType | null
    _min: FacturaVentaMinAggregateOutputType | null
    _max: FacturaVentaMaxAggregateOutputType | null
  }

  export type FacturaVentaAvgAggregateOutputType = {
    id_factura: number | null
    subtotal: Decimal | null
    impuestos: Decimal | null
    total: Decimal | null
    venta_id_venta: number | null
  }

  export type FacturaVentaSumAggregateOutputType = {
    id_factura: number | null
    subtotal: Decimal | null
    impuestos: Decimal | null
    total: Decimal | null
    venta_id_venta: number | null
  }

  export type FacturaVentaMinAggregateOutputType = {
    id_factura: number | null
    fecha: Date | null
    subtotal: Decimal | null
    impuestos: Decimal | null
    total: Decimal | null
    venta_id_venta: number | null
  }

  export type FacturaVentaMaxAggregateOutputType = {
    id_factura: number | null
    fecha: Date | null
    subtotal: Decimal | null
    impuestos: Decimal | null
    total: Decimal | null
    venta_id_venta: number | null
  }

  export type FacturaVentaCountAggregateOutputType = {
    id_factura: number
    fecha: number
    subtotal: number
    impuestos: number
    total: number
    venta_id_venta: number
    _all: number
  }


  export type FacturaVentaAvgAggregateInputType = {
    id_factura?: true
    subtotal?: true
    impuestos?: true
    total?: true
    venta_id_venta?: true
  }

  export type FacturaVentaSumAggregateInputType = {
    id_factura?: true
    subtotal?: true
    impuestos?: true
    total?: true
    venta_id_venta?: true
  }

  export type FacturaVentaMinAggregateInputType = {
    id_factura?: true
    fecha?: true
    subtotal?: true
    impuestos?: true
    total?: true
    venta_id_venta?: true
  }

  export type FacturaVentaMaxAggregateInputType = {
    id_factura?: true
    fecha?: true
    subtotal?: true
    impuestos?: true
    total?: true
    venta_id_venta?: true
  }

  export type FacturaVentaCountAggregateInputType = {
    id_factura?: true
    fecha?: true
    subtotal?: true
    impuestos?: true
    total?: true
    venta_id_venta?: true
    _all?: true
  }

  export type FacturaVentaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FacturaVenta to aggregate.
     */
    where?: FacturaVentaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacturaVentas to fetch.
     */
    orderBy?: FacturaVentaOrderByWithRelationInput | FacturaVentaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FacturaVentaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacturaVentas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacturaVentas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FacturaVentas
    **/
    _count?: true | FacturaVentaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FacturaVentaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FacturaVentaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FacturaVentaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FacturaVentaMaxAggregateInputType
  }

  export type GetFacturaVentaAggregateType<T extends FacturaVentaAggregateArgs> = {
        [P in keyof T & keyof AggregateFacturaVenta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFacturaVenta[P]>
      : GetScalarType<T[P], AggregateFacturaVenta[P]>
  }




  export type FacturaVentaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FacturaVentaWhereInput
    orderBy?: FacturaVentaOrderByWithAggregationInput | FacturaVentaOrderByWithAggregationInput[]
    by: FacturaVentaScalarFieldEnum[] | FacturaVentaScalarFieldEnum
    having?: FacturaVentaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FacturaVentaCountAggregateInputType | true
    _avg?: FacturaVentaAvgAggregateInputType
    _sum?: FacturaVentaSumAggregateInputType
    _min?: FacturaVentaMinAggregateInputType
    _max?: FacturaVentaMaxAggregateInputType
  }

  export type FacturaVentaGroupByOutputType = {
    id_factura: number
    fecha: Date | null
    subtotal: Decimal | null
    impuestos: Decimal | null
    total: Decimal | null
    venta_id_venta: number
    _count: FacturaVentaCountAggregateOutputType | null
    _avg: FacturaVentaAvgAggregateOutputType | null
    _sum: FacturaVentaSumAggregateOutputType | null
    _min: FacturaVentaMinAggregateOutputType | null
    _max: FacturaVentaMaxAggregateOutputType | null
  }

  type GetFacturaVentaGroupByPayload<T extends FacturaVentaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FacturaVentaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FacturaVentaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FacturaVentaGroupByOutputType[P]>
            : GetScalarType<T[P], FacturaVentaGroupByOutputType[P]>
        }
      >
    >


  export type FacturaVentaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_factura?: boolean
    fecha?: boolean
    subtotal?: boolean
    impuestos?: boolean
    total?: boolean
    venta_id_venta?: boolean
    venta?: boolean | VentaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["facturaVenta"]>



  export type FacturaVentaSelectScalar = {
    id_factura?: boolean
    fecha?: boolean
    subtotal?: boolean
    impuestos?: boolean
    total?: boolean
    venta_id_venta?: boolean
  }

  export type FacturaVentaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_factura" | "fecha" | "subtotal" | "impuestos" | "total" | "venta_id_venta", ExtArgs["result"]["facturaVenta"]>
  export type FacturaVentaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    venta?: boolean | VentaDefaultArgs<ExtArgs>
  }

  export type $FacturaVentaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FacturaVenta"
    objects: {
      venta: Prisma.$VentaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_factura: number
      fecha: Date | null
      subtotal: Prisma.Decimal | null
      impuestos: Prisma.Decimal | null
      total: Prisma.Decimal | null
      venta_id_venta: number
    }, ExtArgs["result"]["facturaVenta"]>
    composites: {}
  }

  type FacturaVentaGetPayload<S extends boolean | null | undefined | FacturaVentaDefaultArgs> = $Result.GetResult<Prisma.$FacturaVentaPayload, S>

  type FacturaVentaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FacturaVentaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FacturaVentaCountAggregateInputType | true
    }

  export interface FacturaVentaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FacturaVenta'], meta: { name: 'FacturaVenta' } }
    /**
     * Find zero or one FacturaVenta that matches the filter.
     * @param {FacturaVentaFindUniqueArgs} args - Arguments to find a FacturaVenta
     * @example
     * // Get one FacturaVenta
     * const facturaVenta = await prisma.facturaVenta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FacturaVentaFindUniqueArgs>(args: SelectSubset<T, FacturaVentaFindUniqueArgs<ExtArgs>>): Prisma__FacturaVentaClient<$Result.GetResult<Prisma.$FacturaVentaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FacturaVenta that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FacturaVentaFindUniqueOrThrowArgs} args - Arguments to find a FacturaVenta
     * @example
     * // Get one FacturaVenta
     * const facturaVenta = await prisma.facturaVenta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FacturaVentaFindUniqueOrThrowArgs>(args: SelectSubset<T, FacturaVentaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FacturaVentaClient<$Result.GetResult<Prisma.$FacturaVentaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FacturaVenta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacturaVentaFindFirstArgs} args - Arguments to find a FacturaVenta
     * @example
     * // Get one FacturaVenta
     * const facturaVenta = await prisma.facturaVenta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FacturaVentaFindFirstArgs>(args?: SelectSubset<T, FacturaVentaFindFirstArgs<ExtArgs>>): Prisma__FacturaVentaClient<$Result.GetResult<Prisma.$FacturaVentaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FacturaVenta that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacturaVentaFindFirstOrThrowArgs} args - Arguments to find a FacturaVenta
     * @example
     * // Get one FacturaVenta
     * const facturaVenta = await prisma.facturaVenta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FacturaVentaFindFirstOrThrowArgs>(args?: SelectSubset<T, FacturaVentaFindFirstOrThrowArgs<ExtArgs>>): Prisma__FacturaVentaClient<$Result.GetResult<Prisma.$FacturaVentaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FacturaVentas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacturaVentaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FacturaVentas
     * const facturaVentas = await prisma.facturaVenta.findMany()
     * 
     * // Get first 10 FacturaVentas
     * const facturaVentas = await prisma.facturaVenta.findMany({ take: 10 })
     * 
     * // Only select the `id_factura`
     * const facturaVentaWithId_facturaOnly = await prisma.facturaVenta.findMany({ select: { id_factura: true } })
     * 
     */
    findMany<T extends FacturaVentaFindManyArgs>(args?: SelectSubset<T, FacturaVentaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacturaVentaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FacturaVenta.
     * @param {FacturaVentaCreateArgs} args - Arguments to create a FacturaVenta.
     * @example
     * // Create one FacturaVenta
     * const FacturaVenta = await prisma.facturaVenta.create({
     *   data: {
     *     // ... data to create a FacturaVenta
     *   }
     * })
     * 
     */
    create<T extends FacturaVentaCreateArgs>(args: SelectSubset<T, FacturaVentaCreateArgs<ExtArgs>>): Prisma__FacturaVentaClient<$Result.GetResult<Prisma.$FacturaVentaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FacturaVentas.
     * @param {FacturaVentaCreateManyArgs} args - Arguments to create many FacturaVentas.
     * @example
     * // Create many FacturaVentas
     * const facturaVenta = await prisma.facturaVenta.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FacturaVentaCreateManyArgs>(args?: SelectSubset<T, FacturaVentaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FacturaVenta.
     * @param {FacturaVentaDeleteArgs} args - Arguments to delete one FacturaVenta.
     * @example
     * // Delete one FacturaVenta
     * const FacturaVenta = await prisma.facturaVenta.delete({
     *   where: {
     *     // ... filter to delete one FacturaVenta
     *   }
     * })
     * 
     */
    delete<T extends FacturaVentaDeleteArgs>(args: SelectSubset<T, FacturaVentaDeleteArgs<ExtArgs>>): Prisma__FacturaVentaClient<$Result.GetResult<Prisma.$FacturaVentaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FacturaVenta.
     * @param {FacturaVentaUpdateArgs} args - Arguments to update one FacturaVenta.
     * @example
     * // Update one FacturaVenta
     * const facturaVenta = await prisma.facturaVenta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FacturaVentaUpdateArgs>(args: SelectSubset<T, FacturaVentaUpdateArgs<ExtArgs>>): Prisma__FacturaVentaClient<$Result.GetResult<Prisma.$FacturaVentaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FacturaVentas.
     * @param {FacturaVentaDeleteManyArgs} args - Arguments to filter FacturaVentas to delete.
     * @example
     * // Delete a few FacturaVentas
     * const { count } = await prisma.facturaVenta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FacturaVentaDeleteManyArgs>(args?: SelectSubset<T, FacturaVentaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FacturaVentas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacturaVentaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FacturaVentas
     * const facturaVenta = await prisma.facturaVenta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FacturaVentaUpdateManyArgs>(args: SelectSubset<T, FacturaVentaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FacturaVenta.
     * @param {FacturaVentaUpsertArgs} args - Arguments to update or create a FacturaVenta.
     * @example
     * // Update or create a FacturaVenta
     * const facturaVenta = await prisma.facturaVenta.upsert({
     *   create: {
     *     // ... data to create a FacturaVenta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FacturaVenta we want to update
     *   }
     * })
     */
    upsert<T extends FacturaVentaUpsertArgs>(args: SelectSubset<T, FacturaVentaUpsertArgs<ExtArgs>>): Prisma__FacturaVentaClient<$Result.GetResult<Prisma.$FacturaVentaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FacturaVentas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacturaVentaCountArgs} args - Arguments to filter FacturaVentas to count.
     * @example
     * // Count the number of FacturaVentas
     * const count = await prisma.facturaVenta.count({
     *   where: {
     *     // ... the filter for the FacturaVentas we want to count
     *   }
     * })
    **/
    count<T extends FacturaVentaCountArgs>(
      args?: Subset<T, FacturaVentaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FacturaVentaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FacturaVenta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacturaVentaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FacturaVentaAggregateArgs>(args: Subset<T, FacturaVentaAggregateArgs>): Prisma.PrismaPromise<GetFacturaVentaAggregateType<T>>

    /**
     * Group by FacturaVenta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacturaVentaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FacturaVentaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FacturaVentaGroupByArgs['orderBy'] }
        : { orderBy?: FacturaVentaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FacturaVentaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFacturaVentaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FacturaVenta model
   */
  readonly fields: FacturaVentaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FacturaVenta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FacturaVentaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    venta<T extends VentaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VentaDefaultArgs<ExtArgs>>): Prisma__VentaClient<$Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FacturaVenta model
   */
  interface FacturaVentaFieldRefs {
    readonly id_factura: FieldRef<"FacturaVenta", 'Int'>
    readonly fecha: FieldRef<"FacturaVenta", 'DateTime'>
    readonly subtotal: FieldRef<"FacturaVenta", 'Decimal'>
    readonly impuestos: FieldRef<"FacturaVenta", 'Decimal'>
    readonly total: FieldRef<"FacturaVenta", 'Decimal'>
    readonly venta_id_venta: FieldRef<"FacturaVenta", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * FacturaVenta findUnique
   */
  export type FacturaVentaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacturaVenta
     */
    select?: FacturaVentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacturaVenta
     */
    omit?: FacturaVentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaVentaInclude<ExtArgs> | null
    /**
     * Filter, which FacturaVenta to fetch.
     */
    where: FacturaVentaWhereUniqueInput
  }

  /**
   * FacturaVenta findUniqueOrThrow
   */
  export type FacturaVentaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacturaVenta
     */
    select?: FacturaVentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacturaVenta
     */
    omit?: FacturaVentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaVentaInclude<ExtArgs> | null
    /**
     * Filter, which FacturaVenta to fetch.
     */
    where: FacturaVentaWhereUniqueInput
  }

  /**
   * FacturaVenta findFirst
   */
  export type FacturaVentaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacturaVenta
     */
    select?: FacturaVentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacturaVenta
     */
    omit?: FacturaVentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaVentaInclude<ExtArgs> | null
    /**
     * Filter, which FacturaVenta to fetch.
     */
    where?: FacturaVentaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacturaVentas to fetch.
     */
    orderBy?: FacturaVentaOrderByWithRelationInput | FacturaVentaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FacturaVentas.
     */
    cursor?: FacturaVentaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacturaVentas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacturaVentas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FacturaVentas.
     */
    distinct?: FacturaVentaScalarFieldEnum | FacturaVentaScalarFieldEnum[]
  }

  /**
   * FacturaVenta findFirstOrThrow
   */
  export type FacturaVentaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacturaVenta
     */
    select?: FacturaVentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacturaVenta
     */
    omit?: FacturaVentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaVentaInclude<ExtArgs> | null
    /**
     * Filter, which FacturaVenta to fetch.
     */
    where?: FacturaVentaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacturaVentas to fetch.
     */
    orderBy?: FacturaVentaOrderByWithRelationInput | FacturaVentaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FacturaVentas.
     */
    cursor?: FacturaVentaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacturaVentas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacturaVentas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FacturaVentas.
     */
    distinct?: FacturaVentaScalarFieldEnum | FacturaVentaScalarFieldEnum[]
  }

  /**
   * FacturaVenta findMany
   */
  export type FacturaVentaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacturaVenta
     */
    select?: FacturaVentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacturaVenta
     */
    omit?: FacturaVentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaVentaInclude<ExtArgs> | null
    /**
     * Filter, which FacturaVentas to fetch.
     */
    where?: FacturaVentaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacturaVentas to fetch.
     */
    orderBy?: FacturaVentaOrderByWithRelationInput | FacturaVentaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FacturaVentas.
     */
    cursor?: FacturaVentaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacturaVentas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacturaVentas.
     */
    skip?: number
    distinct?: FacturaVentaScalarFieldEnum | FacturaVentaScalarFieldEnum[]
  }

  /**
   * FacturaVenta create
   */
  export type FacturaVentaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacturaVenta
     */
    select?: FacturaVentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacturaVenta
     */
    omit?: FacturaVentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaVentaInclude<ExtArgs> | null
    /**
     * The data needed to create a FacturaVenta.
     */
    data: XOR<FacturaVentaCreateInput, FacturaVentaUncheckedCreateInput>
  }

  /**
   * FacturaVenta createMany
   */
  export type FacturaVentaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FacturaVentas.
     */
    data: FacturaVentaCreateManyInput | FacturaVentaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FacturaVenta update
   */
  export type FacturaVentaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacturaVenta
     */
    select?: FacturaVentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacturaVenta
     */
    omit?: FacturaVentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaVentaInclude<ExtArgs> | null
    /**
     * The data needed to update a FacturaVenta.
     */
    data: XOR<FacturaVentaUpdateInput, FacturaVentaUncheckedUpdateInput>
    /**
     * Choose, which FacturaVenta to update.
     */
    where: FacturaVentaWhereUniqueInput
  }

  /**
   * FacturaVenta updateMany
   */
  export type FacturaVentaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FacturaVentas.
     */
    data: XOR<FacturaVentaUpdateManyMutationInput, FacturaVentaUncheckedUpdateManyInput>
    /**
     * Filter which FacturaVentas to update
     */
    where?: FacturaVentaWhereInput
    /**
     * Limit how many FacturaVentas to update.
     */
    limit?: number
  }

  /**
   * FacturaVenta upsert
   */
  export type FacturaVentaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacturaVenta
     */
    select?: FacturaVentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacturaVenta
     */
    omit?: FacturaVentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaVentaInclude<ExtArgs> | null
    /**
     * The filter to search for the FacturaVenta to update in case it exists.
     */
    where: FacturaVentaWhereUniqueInput
    /**
     * In case the FacturaVenta found by the `where` argument doesn't exist, create a new FacturaVenta with this data.
     */
    create: XOR<FacturaVentaCreateInput, FacturaVentaUncheckedCreateInput>
    /**
     * In case the FacturaVenta was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FacturaVentaUpdateInput, FacturaVentaUncheckedUpdateInput>
  }

  /**
   * FacturaVenta delete
   */
  export type FacturaVentaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacturaVenta
     */
    select?: FacturaVentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacturaVenta
     */
    omit?: FacturaVentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaVentaInclude<ExtArgs> | null
    /**
     * Filter which FacturaVenta to delete.
     */
    where: FacturaVentaWhereUniqueInput
  }

  /**
   * FacturaVenta deleteMany
   */
  export type FacturaVentaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FacturaVentas to delete
     */
    where?: FacturaVentaWhereInput
    /**
     * Limit how many FacturaVentas to delete.
     */
    limit?: number
  }

  /**
   * FacturaVenta without action
   */
  export type FacturaVentaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacturaVenta
     */
    select?: FacturaVentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacturaVenta
     */
    omit?: FacturaVentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaVentaInclude<ExtArgs> | null
  }


  /**
   * Model MovimientoInventario
   */

  export type AggregateMovimientoInventario = {
    _count: MovimientoInventarioCountAggregateOutputType | null
    _avg: MovimientoInventarioAvgAggregateOutputType | null
    _sum: MovimientoInventarioSumAggregateOutputType | null
    _min: MovimientoInventarioMinAggregateOutputType | null
    _max: MovimientoInventarioMaxAggregateOutputType | null
  }

  export type MovimientoInventarioAvgAggregateOutputType = {
    id_movimiento: number | null
    cantidad: Decimal | null
    producto_id_producto: number | null
  }

  export type MovimientoInventarioSumAggregateOutputType = {
    id_movimiento: number | null
    cantidad: Decimal | null
    producto_id_producto: number | null
  }

  export type MovimientoInventarioMinAggregateOutputType = {
    id_movimiento: number | null
    tipo_movimiento: string | null
    fecha_movimiento: Date | null
    cantidad: Decimal | null
    producto_id_producto: number | null
  }

  export type MovimientoInventarioMaxAggregateOutputType = {
    id_movimiento: number | null
    tipo_movimiento: string | null
    fecha_movimiento: Date | null
    cantidad: Decimal | null
    producto_id_producto: number | null
  }

  export type MovimientoInventarioCountAggregateOutputType = {
    id_movimiento: number
    tipo_movimiento: number
    fecha_movimiento: number
    cantidad: number
    producto_id_producto: number
    _all: number
  }


  export type MovimientoInventarioAvgAggregateInputType = {
    id_movimiento?: true
    cantidad?: true
    producto_id_producto?: true
  }

  export type MovimientoInventarioSumAggregateInputType = {
    id_movimiento?: true
    cantidad?: true
    producto_id_producto?: true
  }

  export type MovimientoInventarioMinAggregateInputType = {
    id_movimiento?: true
    tipo_movimiento?: true
    fecha_movimiento?: true
    cantidad?: true
    producto_id_producto?: true
  }

  export type MovimientoInventarioMaxAggregateInputType = {
    id_movimiento?: true
    tipo_movimiento?: true
    fecha_movimiento?: true
    cantidad?: true
    producto_id_producto?: true
  }

  export type MovimientoInventarioCountAggregateInputType = {
    id_movimiento?: true
    tipo_movimiento?: true
    fecha_movimiento?: true
    cantidad?: true
    producto_id_producto?: true
    _all?: true
  }

  export type MovimientoInventarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MovimientoInventario to aggregate.
     */
    where?: MovimientoInventarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MovimientoInventarios to fetch.
     */
    orderBy?: MovimientoInventarioOrderByWithRelationInput | MovimientoInventarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MovimientoInventarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MovimientoInventarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MovimientoInventarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MovimientoInventarios
    **/
    _count?: true | MovimientoInventarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MovimientoInventarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MovimientoInventarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MovimientoInventarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MovimientoInventarioMaxAggregateInputType
  }

  export type GetMovimientoInventarioAggregateType<T extends MovimientoInventarioAggregateArgs> = {
        [P in keyof T & keyof AggregateMovimientoInventario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMovimientoInventario[P]>
      : GetScalarType<T[P], AggregateMovimientoInventario[P]>
  }




  export type MovimientoInventarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovimientoInventarioWhereInput
    orderBy?: MovimientoInventarioOrderByWithAggregationInput | MovimientoInventarioOrderByWithAggregationInput[]
    by: MovimientoInventarioScalarFieldEnum[] | MovimientoInventarioScalarFieldEnum
    having?: MovimientoInventarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MovimientoInventarioCountAggregateInputType | true
    _avg?: MovimientoInventarioAvgAggregateInputType
    _sum?: MovimientoInventarioSumAggregateInputType
    _min?: MovimientoInventarioMinAggregateInputType
    _max?: MovimientoInventarioMaxAggregateInputType
  }

  export type MovimientoInventarioGroupByOutputType = {
    id_movimiento: number
    tipo_movimiento: string | null
    fecha_movimiento: Date | null
    cantidad: Decimal | null
    producto_id_producto: number
    _count: MovimientoInventarioCountAggregateOutputType | null
    _avg: MovimientoInventarioAvgAggregateOutputType | null
    _sum: MovimientoInventarioSumAggregateOutputType | null
    _min: MovimientoInventarioMinAggregateOutputType | null
    _max: MovimientoInventarioMaxAggregateOutputType | null
  }

  type GetMovimientoInventarioGroupByPayload<T extends MovimientoInventarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MovimientoInventarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MovimientoInventarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MovimientoInventarioGroupByOutputType[P]>
            : GetScalarType<T[P], MovimientoInventarioGroupByOutputType[P]>
        }
      >
    >


  export type MovimientoInventarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_movimiento?: boolean
    tipo_movimiento?: boolean
    fecha_movimiento?: boolean
    cantidad?: boolean
    producto_id_producto?: boolean
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["movimientoInventario"]>



  export type MovimientoInventarioSelectScalar = {
    id_movimiento?: boolean
    tipo_movimiento?: boolean
    fecha_movimiento?: boolean
    cantidad?: boolean
    producto_id_producto?: boolean
  }

  export type MovimientoInventarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_movimiento" | "tipo_movimiento" | "fecha_movimiento" | "cantidad" | "producto_id_producto", ExtArgs["result"]["movimientoInventario"]>
  export type MovimientoInventarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
  }

  export type $MovimientoInventarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MovimientoInventario"
    objects: {
      producto: Prisma.$ProductoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_movimiento: number
      tipo_movimiento: string | null
      fecha_movimiento: Date | null
      cantidad: Prisma.Decimal | null
      producto_id_producto: number
    }, ExtArgs["result"]["movimientoInventario"]>
    composites: {}
  }

  type MovimientoInventarioGetPayload<S extends boolean | null | undefined | MovimientoInventarioDefaultArgs> = $Result.GetResult<Prisma.$MovimientoInventarioPayload, S>

  type MovimientoInventarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MovimientoInventarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MovimientoInventarioCountAggregateInputType | true
    }

  export interface MovimientoInventarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MovimientoInventario'], meta: { name: 'MovimientoInventario' } }
    /**
     * Find zero or one MovimientoInventario that matches the filter.
     * @param {MovimientoInventarioFindUniqueArgs} args - Arguments to find a MovimientoInventario
     * @example
     * // Get one MovimientoInventario
     * const movimientoInventario = await prisma.movimientoInventario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MovimientoInventarioFindUniqueArgs>(args: SelectSubset<T, MovimientoInventarioFindUniqueArgs<ExtArgs>>): Prisma__MovimientoInventarioClient<$Result.GetResult<Prisma.$MovimientoInventarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MovimientoInventario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MovimientoInventarioFindUniqueOrThrowArgs} args - Arguments to find a MovimientoInventario
     * @example
     * // Get one MovimientoInventario
     * const movimientoInventario = await prisma.movimientoInventario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MovimientoInventarioFindUniqueOrThrowArgs>(args: SelectSubset<T, MovimientoInventarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MovimientoInventarioClient<$Result.GetResult<Prisma.$MovimientoInventarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MovimientoInventario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovimientoInventarioFindFirstArgs} args - Arguments to find a MovimientoInventario
     * @example
     * // Get one MovimientoInventario
     * const movimientoInventario = await prisma.movimientoInventario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MovimientoInventarioFindFirstArgs>(args?: SelectSubset<T, MovimientoInventarioFindFirstArgs<ExtArgs>>): Prisma__MovimientoInventarioClient<$Result.GetResult<Prisma.$MovimientoInventarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MovimientoInventario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovimientoInventarioFindFirstOrThrowArgs} args - Arguments to find a MovimientoInventario
     * @example
     * // Get one MovimientoInventario
     * const movimientoInventario = await prisma.movimientoInventario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MovimientoInventarioFindFirstOrThrowArgs>(args?: SelectSubset<T, MovimientoInventarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__MovimientoInventarioClient<$Result.GetResult<Prisma.$MovimientoInventarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MovimientoInventarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovimientoInventarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MovimientoInventarios
     * const movimientoInventarios = await prisma.movimientoInventario.findMany()
     * 
     * // Get first 10 MovimientoInventarios
     * const movimientoInventarios = await prisma.movimientoInventario.findMany({ take: 10 })
     * 
     * // Only select the `id_movimiento`
     * const movimientoInventarioWithId_movimientoOnly = await prisma.movimientoInventario.findMany({ select: { id_movimiento: true } })
     * 
     */
    findMany<T extends MovimientoInventarioFindManyArgs>(args?: SelectSubset<T, MovimientoInventarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovimientoInventarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MovimientoInventario.
     * @param {MovimientoInventarioCreateArgs} args - Arguments to create a MovimientoInventario.
     * @example
     * // Create one MovimientoInventario
     * const MovimientoInventario = await prisma.movimientoInventario.create({
     *   data: {
     *     // ... data to create a MovimientoInventario
     *   }
     * })
     * 
     */
    create<T extends MovimientoInventarioCreateArgs>(args: SelectSubset<T, MovimientoInventarioCreateArgs<ExtArgs>>): Prisma__MovimientoInventarioClient<$Result.GetResult<Prisma.$MovimientoInventarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MovimientoInventarios.
     * @param {MovimientoInventarioCreateManyArgs} args - Arguments to create many MovimientoInventarios.
     * @example
     * // Create many MovimientoInventarios
     * const movimientoInventario = await prisma.movimientoInventario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MovimientoInventarioCreateManyArgs>(args?: SelectSubset<T, MovimientoInventarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MovimientoInventario.
     * @param {MovimientoInventarioDeleteArgs} args - Arguments to delete one MovimientoInventario.
     * @example
     * // Delete one MovimientoInventario
     * const MovimientoInventario = await prisma.movimientoInventario.delete({
     *   where: {
     *     // ... filter to delete one MovimientoInventario
     *   }
     * })
     * 
     */
    delete<T extends MovimientoInventarioDeleteArgs>(args: SelectSubset<T, MovimientoInventarioDeleteArgs<ExtArgs>>): Prisma__MovimientoInventarioClient<$Result.GetResult<Prisma.$MovimientoInventarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MovimientoInventario.
     * @param {MovimientoInventarioUpdateArgs} args - Arguments to update one MovimientoInventario.
     * @example
     * // Update one MovimientoInventario
     * const movimientoInventario = await prisma.movimientoInventario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MovimientoInventarioUpdateArgs>(args: SelectSubset<T, MovimientoInventarioUpdateArgs<ExtArgs>>): Prisma__MovimientoInventarioClient<$Result.GetResult<Prisma.$MovimientoInventarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MovimientoInventarios.
     * @param {MovimientoInventarioDeleteManyArgs} args - Arguments to filter MovimientoInventarios to delete.
     * @example
     * // Delete a few MovimientoInventarios
     * const { count } = await prisma.movimientoInventario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MovimientoInventarioDeleteManyArgs>(args?: SelectSubset<T, MovimientoInventarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MovimientoInventarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovimientoInventarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MovimientoInventarios
     * const movimientoInventario = await prisma.movimientoInventario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MovimientoInventarioUpdateManyArgs>(args: SelectSubset<T, MovimientoInventarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MovimientoInventario.
     * @param {MovimientoInventarioUpsertArgs} args - Arguments to update or create a MovimientoInventario.
     * @example
     * // Update or create a MovimientoInventario
     * const movimientoInventario = await prisma.movimientoInventario.upsert({
     *   create: {
     *     // ... data to create a MovimientoInventario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MovimientoInventario we want to update
     *   }
     * })
     */
    upsert<T extends MovimientoInventarioUpsertArgs>(args: SelectSubset<T, MovimientoInventarioUpsertArgs<ExtArgs>>): Prisma__MovimientoInventarioClient<$Result.GetResult<Prisma.$MovimientoInventarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MovimientoInventarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovimientoInventarioCountArgs} args - Arguments to filter MovimientoInventarios to count.
     * @example
     * // Count the number of MovimientoInventarios
     * const count = await prisma.movimientoInventario.count({
     *   where: {
     *     // ... the filter for the MovimientoInventarios we want to count
     *   }
     * })
    **/
    count<T extends MovimientoInventarioCountArgs>(
      args?: Subset<T, MovimientoInventarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MovimientoInventarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MovimientoInventario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovimientoInventarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MovimientoInventarioAggregateArgs>(args: Subset<T, MovimientoInventarioAggregateArgs>): Prisma.PrismaPromise<GetMovimientoInventarioAggregateType<T>>

    /**
     * Group by MovimientoInventario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovimientoInventarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MovimientoInventarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MovimientoInventarioGroupByArgs['orderBy'] }
        : { orderBy?: MovimientoInventarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MovimientoInventarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMovimientoInventarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MovimientoInventario model
   */
  readonly fields: MovimientoInventarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MovimientoInventario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MovimientoInventarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    producto<T extends ProductoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductoDefaultArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MovimientoInventario model
   */
  interface MovimientoInventarioFieldRefs {
    readonly id_movimiento: FieldRef<"MovimientoInventario", 'Int'>
    readonly tipo_movimiento: FieldRef<"MovimientoInventario", 'String'>
    readonly fecha_movimiento: FieldRef<"MovimientoInventario", 'DateTime'>
    readonly cantidad: FieldRef<"MovimientoInventario", 'Decimal'>
    readonly producto_id_producto: FieldRef<"MovimientoInventario", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * MovimientoInventario findUnique
   */
  export type MovimientoInventarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimientoInventario
     */
    select?: MovimientoInventarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovimientoInventario
     */
    omit?: MovimientoInventarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimientoInventarioInclude<ExtArgs> | null
    /**
     * Filter, which MovimientoInventario to fetch.
     */
    where: MovimientoInventarioWhereUniqueInput
  }

  /**
   * MovimientoInventario findUniqueOrThrow
   */
  export type MovimientoInventarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimientoInventario
     */
    select?: MovimientoInventarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovimientoInventario
     */
    omit?: MovimientoInventarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimientoInventarioInclude<ExtArgs> | null
    /**
     * Filter, which MovimientoInventario to fetch.
     */
    where: MovimientoInventarioWhereUniqueInput
  }

  /**
   * MovimientoInventario findFirst
   */
  export type MovimientoInventarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimientoInventario
     */
    select?: MovimientoInventarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovimientoInventario
     */
    omit?: MovimientoInventarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimientoInventarioInclude<ExtArgs> | null
    /**
     * Filter, which MovimientoInventario to fetch.
     */
    where?: MovimientoInventarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MovimientoInventarios to fetch.
     */
    orderBy?: MovimientoInventarioOrderByWithRelationInput | MovimientoInventarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MovimientoInventarios.
     */
    cursor?: MovimientoInventarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MovimientoInventarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MovimientoInventarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MovimientoInventarios.
     */
    distinct?: MovimientoInventarioScalarFieldEnum | MovimientoInventarioScalarFieldEnum[]
  }

  /**
   * MovimientoInventario findFirstOrThrow
   */
  export type MovimientoInventarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimientoInventario
     */
    select?: MovimientoInventarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovimientoInventario
     */
    omit?: MovimientoInventarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimientoInventarioInclude<ExtArgs> | null
    /**
     * Filter, which MovimientoInventario to fetch.
     */
    where?: MovimientoInventarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MovimientoInventarios to fetch.
     */
    orderBy?: MovimientoInventarioOrderByWithRelationInput | MovimientoInventarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MovimientoInventarios.
     */
    cursor?: MovimientoInventarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MovimientoInventarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MovimientoInventarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MovimientoInventarios.
     */
    distinct?: MovimientoInventarioScalarFieldEnum | MovimientoInventarioScalarFieldEnum[]
  }

  /**
   * MovimientoInventario findMany
   */
  export type MovimientoInventarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimientoInventario
     */
    select?: MovimientoInventarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovimientoInventario
     */
    omit?: MovimientoInventarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimientoInventarioInclude<ExtArgs> | null
    /**
     * Filter, which MovimientoInventarios to fetch.
     */
    where?: MovimientoInventarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MovimientoInventarios to fetch.
     */
    orderBy?: MovimientoInventarioOrderByWithRelationInput | MovimientoInventarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MovimientoInventarios.
     */
    cursor?: MovimientoInventarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MovimientoInventarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MovimientoInventarios.
     */
    skip?: number
    distinct?: MovimientoInventarioScalarFieldEnum | MovimientoInventarioScalarFieldEnum[]
  }

  /**
   * MovimientoInventario create
   */
  export type MovimientoInventarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimientoInventario
     */
    select?: MovimientoInventarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovimientoInventario
     */
    omit?: MovimientoInventarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimientoInventarioInclude<ExtArgs> | null
    /**
     * The data needed to create a MovimientoInventario.
     */
    data: XOR<MovimientoInventarioCreateInput, MovimientoInventarioUncheckedCreateInput>
  }

  /**
   * MovimientoInventario createMany
   */
  export type MovimientoInventarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MovimientoInventarios.
     */
    data: MovimientoInventarioCreateManyInput | MovimientoInventarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MovimientoInventario update
   */
  export type MovimientoInventarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimientoInventario
     */
    select?: MovimientoInventarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovimientoInventario
     */
    omit?: MovimientoInventarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimientoInventarioInclude<ExtArgs> | null
    /**
     * The data needed to update a MovimientoInventario.
     */
    data: XOR<MovimientoInventarioUpdateInput, MovimientoInventarioUncheckedUpdateInput>
    /**
     * Choose, which MovimientoInventario to update.
     */
    where: MovimientoInventarioWhereUniqueInput
  }

  /**
   * MovimientoInventario updateMany
   */
  export type MovimientoInventarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MovimientoInventarios.
     */
    data: XOR<MovimientoInventarioUpdateManyMutationInput, MovimientoInventarioUncheckedUpdateManyInput>
    /**
     * Filter which MovimientoInventarios to update
     */
    where?: MovimientoInventarioWhereInput
    /**
     * Limit how many MovimientoInventarios to update.
     */
    limit?: number
  }

  /**
   * MovimientoInventario upsert
   */
  export type MovimientoInventarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimientoInventario
     */
    select?: MovimientoInventarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovimientoInventario
     */
    omit?: MovimientoInventarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimientoInventarioInclude<ExtArgs> | null
    /**
     * The filter to search for the MovimientoInventario to update in case it exists.
     */
    where: MovimientoInventarioWhereUniqueInput
    /**
     * In case the MovimientoInventario found by the `where` argument doesn't exist, create a new MovimientoInventario with this data.
     */
    create: XOR<MovimientoInventarioCreateInput, MovimientoInventarioUncheckedCreateInput>
    /**
     * In case the MovimientoInventario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MovimientoInventarioUpdateInput, MovimientoInventarioUncheckedUpdateInput>
  }

  /**
   * MovimientoInventario delete
   */
  export type MovimientoInventarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimientoInventario
     */
    select?: MovimientoInventarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovimientoInventario
     */
    omit?: MovimientoInventarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimientoInventarioInclude<ExtArgs> | null
    /**
     * Filter which MovimientoInventario to delete.
     */
    where: MovimientoInventarioWhereUniqueInput
  }

  /**
   * MovimientoInventario deleteMany
   */
  export type MovimientoInventarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MovimientoInventarios to delete
     */
    where?: MovimientoInventarioWhereInput
    /**
     * Limit how many MovimientoInventarios to delete.
     */
    limit?: number
  }

  /**
   * MovimientoInventario without action
   */
  export type MovimientoInventarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimientoInventario
     */
    select?: MovimientoInventarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovimientoInventario
     */
    omit?: MovimientoInventarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimientoInventarioInclude<ExtArgs> | null
  }


  /**
   * Model Producto
   */

  export type AggregateProducto = {
    _count: ProductoCountAggregateOutputType | null
    _avg: ProductoAvgAggregateOutputType | null
    _sum: ProductoSumAggregateOutputType | null
    _min: ProductoMinAggregateOutputType | null
    _max: ProductoMaxAggregateOutputType | null
  }

  export type ProductoAvgAggregateOutputType = {
    id_producto: number | null
    stock: Decimal | null
    categoria_id_categoria: number | null
  }

  export type ProductoSumAggregateOutputType = {
    id_producto: number | null
    stock: Decimal | null
    categoria_id_categoria: number | null
  }

  export type ProductoMinAggregateOutputType = {
    id_producto: number | null
    nombre_producto: string | null
    descripcion: string | null
    stock: Decimal | null
    nivel_alerta: string | null
    categoria_id_categoria: number | null
  }

  export type ProductoMaxAggregateOutputType = {
    id_producto: number | null
    nombre_producto: string | null
    descripcion: string | null
    stock: Decimal | null
    nivel_alerta: string | null
    categoria_id_categoria: number | null
  }

  export type ProductoCountAggregateOutputType = {
    id_producto: number
    nombre_producto: number
    descripcion: number
    stock: number
    nivel_alerta: number
    categoria_id_categoria: number
    _all: number
  }


  export type ProductoAvgAggregateInputType = {
    id_producto?: true
    stock?: true
    categoria_id_categoria?: true
  }

  export type ProductoSumAggregateInputType = {
    id_producto?: true
    stock?: true
    categoria_id_categoria?: true
  }

  export type ProductoMinAggregateInputType = {
    id_producto?: true
    nombre_producto?: true
    descripcion?: true
    stock?: true
    nivel_alerta?: true
    categoria_id_categoria?: true
  }

  export type ProductoMaxAggregateInputType = {
    id_producto?: true
    nombre_producto?: true
    descripcion?: true
    stock?: true
    nivel_alerta?: true
    categoria_id_categoria?: true
  }

  export type ProductoCountAggregateInputType = {
    id_producto?: true
    nombre_producto?: true
    descripcion?: true
    stock?: true
    nivel_alerta?: true
    categoria_id_categoria?: true
    _all?: true
  }

  export type ProductoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Producto to aggregate.
     */
    where?: ProductoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Productos to fetch.
     */
    orderBy?: ProductoOrderByWithRelationInput | ProductoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Productos
    **/
    _count?: true | ProductoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductoMaxAggregateInputType
  }

  export type GetProductoAggregateType<T extends ProductoAggregateArgs> = {
        [P in keyof T & keyof AggregateProducto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProducto[P]>
      : GetScalarType<T[P], AggregateProducto[P]>
  }




  export type ProductoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductoWhereInput
    orderBy?: ProductoOrderByWithAggregationInput | ProductoOrderByWithAggregationInput[]
    by: ProductoScalarFieldEnum[] | ProductoScalarFieldEnum
    having?: ProductoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductoCountAggregateInputType | true
    _avg?: ProductoAvgAggregateInputType
    _sum?: ProductoSumAggregateInputType
    _min?: ProductoMinAggregateInputType
    _max?: ProductoMaxAggregateInputType
  }

  export type ProductoGroupByOutputType = {
    id_producto: number
    nombre_producto: string | null
    descripcion: string | null
    stock: Decimal | null
    nivel_alerta: string | null
    categoria_id_categoria: number
    _count: ProductoCountAggregateOutputType | null
    _avg: ProductoAvgAggregateOutputType | null
    _sum: ProductoSumAggregateOutputType | null
    _min: ProductoMinAggregateOutputType | null
    _max: ProductoMaxAggregateOutputType | null
  }

  type GetProductoGroupByPayload<T extends ProductoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductoGroupByOutputType[P]>
            : GetScalarType<T[P], ProductoGroupByOutputType[P]>
        }
      >
    >


  export type ProductoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_producto?: boolean
    nombre_producto?: boolean
    descripcion?: boolean
    stock?: boolean
    nivel_alerta?: boolean
    categoria_id_categoria?: boolean
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
    compra_productos?: boolean | Producto$compra_productosArgs<ExtArgs>
    venta_productos?: boolean | Producto$venta_productosArgs<ExtArgs>
    movimientos?: boolean | Producto$movimientosArgs<ExtArgs>
    _count?: boolean | ProductoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["producto"]>



  export type ProductoSelectScalar = {
    id_producto?: boolean
    nombre_producto?: boolean
    descripcion?: boolean
    stock?: boolean
    nivel_alerta?: boolean
    categoria_id_categoria?: boolean
  }

  export type ProductoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_producto" | "nombre_producto" | "descripcion" | "stock" | "nivel_alerta" | "categoria_id_categoria", ExtArgs["result"]["producto"]>
  export type ProductoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
    compra_productos?: boolean | Producto$compra_productosArgs<ExtArgs>
    venta_productos?: boolean | Producto$venta_productosArgs<ExtArgs>
    movimientos?: boolean | Producto$movimientosArgs<ExtArgs>
    _count?: boolean | ProductoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ProductoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Producto"
    objects: {
      categoria: Prisma.$CategoriaPayload<ExtArgs>
      compra_productos: Prisma.$CompraProductoPayload<ExtArgs>[]
      venta_productos: Prisma.$VentaProductoPayload<ExtArgs>[]
      movimientos: Prisma.$MovimientoInventarioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_producto: number
      nombre_producto: string | null
      descripcion: string | null
      stock: Prisma.Decimal | null
      nivel_alerta: string | null
      categoria_id_categoria: number
    }, ExtArgs["result"]["producto"]>
    composites: {}
  }

  type ProductoGetPayload<S extends boolean | null | undefined | ProductoDefaultArgs> = $Result.GetResult<Prisma.$ProductoPayload, S>

  type ProductoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductoCountAggregateInputType | true
    }

  export interface ProductoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Producto'], meta: { name: 'Producto' } }
    /**
     * Find zero or one Producto that matches the filter.
     * @param {ProductoFindUniqueArgs} args - Arguments to find a Producto
     * @example
     * // Get one Producto
     * const producto = await prisma.producto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductoFindUniqueArgs>(args: SelectSubset<T, ProductoFindUniqueArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Producto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductoFindUniqueOrThrowArgs} args - Arguments to find a Producto
     * @example
     * // Get one Producto
     * const producto = await prisma.producto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductoFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Producto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoFindFirstArgs} args - Arguments to find a Producto
     * @example
     * // Get one Producto
     * const producto = await prisma.producto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductoFindFirstArgs>(args?: SelectSubset<T, ProductoFindFirstArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Producto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoFindFirstOrThrowArgs} args - Arguments to find a Producto
     * @example
     * // Get one Producto
     * const producto = await prisma.producto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductoFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Productos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Productos
     * const productos = await prisma.producto.findMany()
     * 
     * // Get first 10 Productos
     * const productos = await prisma.producto.findMany({ take: 10 })
     * 
     * // Only select the `id_producto`
     * const productoWithId_productoOnly = await prisma.producto.findMany({ select: { id_producto: true } })
     * 
     */
    findMany<T extends ProductoFindManyArgs>(args?: SelectSubset<T, ProductoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Producto.
     * @param {ProductoCreateArgs} args - Arguments to create a Producto.
     * @example
     * // Create one Producto
     * const Producto = await prisma.producto.create({
     *   data: {
     *     // ... data to create a Producto
     *   }
     * })
     * 
     */
    create<T extends ProductoCreateArgs>(args: SelectSubset<T, ProductoCreateArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Productos.
     * @param {ProductoCreateManyArgs} args - Arguments to create many Productos.
     * @example
     * // Create many Productos
     * const producto = await prisma.producto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductoCreateManyArgs>(args?: SelectSubset<T, ProductoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Producto.
     * @param {ProductoDeleteArgs} args - Arguments to delete one Producto.
     * @example
     * // Delete one Producto
     * const Producto = await prisma.producto.delete({
     *   where: {
     *     // ... filter to delete one Producto
     *   }
     * })
     * 
     */
    delete<T extends ProductoDeleteArgs>(args: SelectSubset<T, ProductoDeleteArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Producto.
     * @param {ProductoUpdateArgs} args - Arguments to update one Producto.
     * @example
     * // Update one Producto
     * const producto = await prisma.producto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductoUpdateArgs>(args: SelectSubset<T, ProductoUpdateArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Productos.
     * @param {ProductoDeleteManyArgs} args - Arguments to filter Productos to delete.
     * @example
     * // Delete a few Productos
     * const { count } = await prisma.producto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductoDeleteManyArgs>(args?: SelectSubset<T, ProductoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Productos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Productos
     * const producto = await prisma.producto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductoUpdateManyArgs>(args: SelectSubset<T, ProductoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Producto.
     * @param {ProductoUpsertArgs} args - Arguments to update or create a Producto.
     * @example
     * // Update or create a Producto
     * const producto = await prisma.producto.upsert({
     *   create: {
     *     // ... data to create a Producto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Producto we want to update
     *   }
     * })
     */
    upsert<T extends ProductoUpsertArgs>(args: SelectSubset<T, ProductoUpsertArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Productos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoCountArgs} args - Arguments to filter Productos to count.
     * @example
     * // Count the number of Productos
     * const count = await prisma.producto.count({
     *   where: {
     *     // ... the filter for the Productos we want to count
     *   }
     * })
    **/
    count<T extends ProductoCountArgs>(
      args?: Subset<T, ProductoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Producto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductoAggregateArgs>(args: Subset<T, ProductoAggregateArgs>): Prisma.PrismaPromise<GetProductoAggregateType<T>>

    /**
     * Group by Producto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductoGroupByArgs['orderBy'] }
        : { orderBy?: ProductoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Producto model
   */
  readonly fields: ProductoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Producto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    categoria<T extends CategoriaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoriaDefaultArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    compra_productos<T extends Producto$compra_productosArgs<ExtArgs> = {}>(args?: Subset<T, Producto$compra_productosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompraProductoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    venta_productos<T extends Producto$venta_productosArgs<ExtArgs> = {}>(args?: Subset<T, Producto$venta_productosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VentaProductoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    movimientos<T extends Producto$movimientosArgs<ExtArgs> = {}>(args?: Subset<T, Producto$movimientosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovimientoInventarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Producto model
   */
  interface ProductoFieldRefs {
    readonly id_producto: FieldRef<"Producto", 'Int'>
    readonly nombre_producto: FieldRef<"Producto", 'String'>
    readonly descripcion: FieldRef<"Producto", 'String'>
    readonly stock: FieldRef<"Producto", 'Decimal'>
    readonly nivel_alerta: FieldRef<"Producto", 'String'>
    readonly categoria_id_categoria: FieldRef<"Producto", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Producto findUnique
   */
  export type ProductoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter, which Producto to fetch.
     */
    where: ProductoWhereUniqueInput
  }

  /**
   * Producto findUniqueOrThrow
   */
  export type ProductoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter, which Producto to fetch.
     */
    where: ProductoWhereUniqueInput
  }

  /**
   * Producto findFirst
   */
  export type ProductoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter, which Producto to fetch.
     */
    where?: ProductoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Productos to fetch.
     */
    orderBy?: ProductoOrderByWithRelationInput | ProductoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Productos.
     */
    cursor?: ProductoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Productos.
     */
    distinct?: ProductoScalarFieldEnum | ProductoScalarFieldEnum[]
  }

  /**
   * Producto findFirstOrThrow
   */
  export type ProductoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter, which Producto to fetch.
     */
    where?: ProductoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Productos to fetch.
     */
    orderBy?: ProductoOrderByWithRelationInput | ProductoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Productos.
     */
    cursor?: ProductoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Productos.
     */
    distinct?: ProductoScalarFieldEnum | ProductoScalarFieldEnum[]
  }

  /**
   * Producto findMany
   */
  export type ProductoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter, which Productos to fetch.
     */
    where?: ProductoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Productos to fetch.
     */
    orderBy?: ProductoOrderByWithRelationInput | ProductoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Productos.
     */
    cursor?: ProductoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Productos.
     */
    skip?: number
    distinct?: ProductoScalarFieldEnum | ProductoScalarFieldEnum[]
  }

  /**
   * Producto create
   */
  export type ProductoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * The data needed to create a Producto.
     */
    data: XOR<ProductoCreateInput, ProductoUncheckedCreateInput>
  }

  /**
   * Producto createMany
   */
  export type ProductoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Productos.
     */
    data: ProductoCreateManyInput | ProductoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Producto update
   */
  export type ProductoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * The data needed to update a Producto.
     */
    data: XOR<ProductoUpdateInput, ProductoUncheckedUpdateInput>
    /**
     * Choose, which Producto to update.
     */
    where: ProductoWhereUniqueInput
  }

  /**
   * Producto updateMany
   */
  export type ProductoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Productos.
     */
    data: XOR<ProductoUpdateManyMutationInput, ProductoUncheckedUpdateManyInput>
    /**
     * Filter which Productos to update
     */
    where?: ProductoWhereInput
    /**
     * Limit how many Productos to update.
     */
    limit?: number
  }

  /**
   * Producto upsert
   */
  export type ProductoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * The filter to search for the Producto to update in case it exists.
     */
    where: ProductoWhereUniqueInput
    /**
     * In case the Producto found by the `where` argument doesn't exist, create a new Producto with this data.
     */
    create: XOR<ProductoCreateInput, ProductoUncheckedCreateInput>
    /**
     * In case the Producto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductoUpdateInput, ProductoUncheckedUpdateInput>
  }

  /**
   * Producto delete
   */
  export type ProductoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter which Producto to delete.
     */
    where: ProductoWhereUniqueInput
  }

  /**
   * Producto deleteMany
   */
  export type ProductoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Productos to delete
     */
    where?: ProductoWhereInput
    /**
     * Limit how many Productos to delete.
     */
    limit?: number
  }

  /**
   * Producto.compra_productos
   */
  export type Producto$compra_productosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompraProducto
     */
    select?: CompraProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompraProducto
     */
    omit?: CompraProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompraProductoInclude<ExtArgs> | null
    where?: CompraProductoWhereInput
    orderBy?: CompraProductoOrderByWithRelationInput | CompraProductoOrderByWithRelationInput[]
    cursor?: CompraProductoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CompraProductoScalarFieldEnum | CompraProductoScalarFieldEnum[]
  }

  /**
   * Producto.venta_productos
   */
  export type Producto$venta_productosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VentaProducto
     */
    select?: VentaProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VentaProducto
     */
    omit?: VentaProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaProductoInclude<ExtArgs> | null
    where?: VentaProductoWhereInput
    orderBy?: VentaProductoOrderByWithRelationInput | VentaProductoOrderByWithRelationInput[]
    cursor?: VentaProductoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VentaProductoScalarFieldEnum | VentaProductoScalarFieldEnum[]
  }

  /**
   * Producto.movimientos
   */
  export type Producto$movimientosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimientoInventario
     */
    select?: MovimientoInventarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovimientoInventario
     */
    omit?: MovimientoInventarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimientoInventarioInclude<ExtArgs> | null
    where?: MovimientoInventarioWhereInput
    orderBy?: MovimientoInventarioOrderByWithRelationInput | MovimientoInventarioOrderByWithRelationInput[]
    cursor?: MovimientoInventarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MovimientoInventarioScalarFieldEnum | MovimientoInventarioScalarFieldEnum[]
  }

  /**
   * Producto without action
   */
  export type ProductoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
  }


  /**
   * Model Proveedor
   */

  export type AggregateProveedor = {
    _count: ProveedorCountAggregateOutputType | null
    _avg: ProveedorAvgAggregateOutputType | null
    _sum: ProveedorSumAggregateOutputType | null
    _min: ProveedorMinAggregateOutputType | null
    _max: ProveedorMaxAggregateOutputType | null
  }

  export type ProveedorAvgAggregateOutputType = {
    id_proveedor: number | null
  }

  export type ProveedorSumAggregateOutputType = {
    id_proveedor: number | null
  }

  export type ProveedorMinAggregateOutputType = {
    id_proveedor: number | null
    nombre: string | null
    telefono: string | null
    direccion: string | null
  }

  export type ProveedorMaxAggregateOutputType = {
    id_proveedor: number | null
    nombre: string | null
    telefono: string | null
    direccion: string | null
  }

  export type ProveedorCountAggregateOutputType = {
    id_proveedor: number
    nombre: number
    telefono: number
    direccion: number
    _all: number
  }


  export type ProveedorAvgAggregateInputType = {
    id_proveedor?: true
  }

  export type ProveedorSumAggregateInputType = {
    id_proveedor?: true
  }

  export type ProveedorMinAggregateInputType = {
    id_proveedor?: true
    nombre?: true
    telefono?: true
    direccion?: true
  }

  export type ProveedorMaxAggregateInputType = {
    id_proveedor?: true
    nombre?: true
    telefono?: true
    direccion?: true
  }

  export type ProveedorCountAggregateInputType = {
    id_proveedor?: true
    nombre?: true
    telefono?: true
    direccion?: true
    _all?: true
  }

  export type ProveedorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Proveedor to aggregate.
     */
    where?: ProveedorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Proveedors to fetch.
     */
    orderBy?: ProveedorOrderByWithRelationInput | ProveedorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProveedorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Proveedors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Proveedors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Proveedors
    **/
    _count?: true | ProveedorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProveedorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProveedorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProveedorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProveedorMaxAggregateInputType
  }

  export type GetProveedorAggregateType<T extends ProveedorAggregateArgs> = {
        [P in keyof T & keyof AggregateProveedor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProveedor[P]>
      : GetScalarType<T[P], AggregateProveedor[P]>
  }




  export type ProveedorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProveedorWhereInput
    orderBy?: ProveedorOrderByWithAggregationInput | ProveedorOrderByWithAggregationInput[]
    by: ProveedorScalarFieldEnum[] | ProveedorScalarFieldEnum
    having?: ProveedorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProveedorCountAggregateInputType | true
    _avg?: ProveedorAvgAggregateInputType
    _sum?: ProveedorSumAggregateInputType
    _min?: ProveedorMinAggregateInputType
    _max?: ProveedorMaxAggregateInputType
  }

  export type ProveedorGroupByOutputType = {
    id_proveedor: number
    nombre: string | null
    telefono: string | null
    direccion: string | null
    _count: ProveedorCountAggregateOutputType | null
    _avg: ProveedorAvgAggregateOutputType | null
    _sum: ProveedorSumAggregateOutputType | null
    _min: ProveedorMinAggregateOutputType | null
    _max: ProveedorMaxAggregateOutputType | null
  }

  type GetProveedorGroupByPayload<T extends ProveedorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProveedorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProveedorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProveedorGroupByOutputType[P]>
            : GetScalarType<T[P], ProveedorGroupByOutputType[P]>
        }
      >
    >


  export type ProveedorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_proveedor?: boolean
    nombre?: boolean
    telefono?: boolean
    direccion?: boolean
    compras?: boolean | Proveedor$comprasArgs<ExtArgs>
    _count?: boolean | ProveedorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["proveedor"]>



  export type ProveedorSelectScalar = {
    id_proveedor?: boolean
    nombre?: boolean
    telefono?: boolean
    direccion?: boolean
  }

  export type ProveedorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_proveedor" | "nombre" | "telefono" | "direccion", ExtArgs["result"]["proveedor"]>
  export type ProveedorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    compras?: boolean | Proveedor$comprasArgs<ExtArgs>
    _count?: boolean | ProveedorCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ProveedorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Proveedor"
    objects: {
      compras: Prisma.$CompraPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_proveedor: number
      nombre: string | null
      telefono: string | null
      direccion: string | null
    }, ExtArgs["result"]["proveedor"]>
    composites: {}
  }

  type ProveedorGetPayload<S extends boolean | null | undefined | ProveedorDefaultArgs> = $Result.GetResult<Prisma.$ProveedorPayload, S>

  type ProveedorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProveedorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProveedorCountAggregateInputType | true
    }

  export interface ProveedorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Proveedor'], meta: { name: 'Proveedor' } }
    /**
     * Find zero or one Proveedor that matches the filter.
     * @param {ProveedorFindUniqueArgs} args - Arguments to find a Proveedor
     * @example
     * // Get one Proveedor
     * const proveedor = await prisma.proveedor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProveedorFindUniqueArgs>(args: SelectSubset<T, ProveedorFindUniqueArgs<ExtArgs>>): Prisma__ProveedorClient<$Result.GetResult<Prisma.$ProveedorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Proveedor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProveedorFindUniqueOrThrowArgs} args - Arguments to find a Proveedor
     * @example
     * // Get one Proveedor
     * const proveedor = await prisma.proveedor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProveedorFindUniqueOrThrowArgs>(args: SelectSubset<T, ProveedorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProveedorClient<$Result.GetResult<Prisma.$ProveedorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Proveedor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProveedorFindFirstArgs} args - Arguments to find a Proveedor
     * @example
     * // Get one Proveedor
     * const proveedor = await prisma.proveedor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProveedorFindFirstArgs>(args?: SelectSubset<T, ProveedorFindFirstArgs<ExtArgs>>): Prisma__ProveedorClient<$Result.GetResult<Prisma.$ProveedorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Proveedor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProveedorFindFirstOrThrowArgs} args - Arguments to find a Proveedor
     * @example
     * // Get one Proveedor
     * const proveedor = await prisma.proveedor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProveedorFindFirstOrThrowArgs>(args?: SelectSubset<T, ProveedorFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProveedorClient<$Result.GetResult<Prisma.$ProveedorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Proveedors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProveedorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Proveedors
     * const proveedors = await prisma.proveedor.findMany()
     * 
     * // Get first 10 Proveedors
     * const proveedors = await prisma.proveedor.findMany({ take: 10 })
     * 
     * // Only select the `id_proveedor`
     * const proveedorWithId_proveedorOnly = await prisma.proveedor.findMany({ select: { id_proveedor: true } })
     * 
     */
    findMany<T extends ProveedorFindManyArgs>(args?: SelectSubset<T, ProveedorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProveedorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Proveedor.
     * @param {ProveedorCreateArgs} args - Arguments to create a Proveedor.
     * @example
     * // Create one Proveedor
     * const Proveedor = await prisma.proveedor.create({
     *   data: {
     *     // ... data to create a Proveedor
     *   }
     * })
     * 
     */
    create<T extends ProveedorCreateArgs>(args: SelectSubset<T, ProveedorCreateArgs<ExtArgs>>): Prisma__ProveedorClient<$Result.GetResult<Prisma.$ProveedorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Proveedors.
     * @param {ProveedorCreateManyArgs} args - Arguments to create many Proveedors.
     * @example
     * // Create many Proveedors
     * const proveedor = await prisma.proveedor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProveedorCreateManyArgs>(args?: SelectSubset<T, ProveedorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Proveedor.
     * @param {ProveedorDeleteArgs} args - Arguments to delete one Proveedor.
     * @example
     * // Delete one Proveedor
     * const Proveedor = await prisma.proveedor.delete({
     *   where: {
     *     // ... filter to delete one Proveedor
     *   }
     * })
     * 
     */
    delete<T extends ProveedorDeleteArgs>(args: SelectSubset<T, ProveedorDeleteArgs<ExtArgs>>): Prisma__ProveedorClient<$Result.GetResult<Prisma.$ProveedorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Proveedor.
     * @param {ProveedorUpdateArgs} args - Arguments to update one Proveedor.
     * @example
     * // Update one Proveedor
     * const proveedor = await prisma.proveedor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProveedorUpdateArgs>(args: SelectSubset<T, ProveedorUpdateArgs<ExtArgs>>): Prisma__ProveedorClient<$Result.GetResult<Prisma.$ProveedorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Proveedors.
     * @param {ProveedorDeleteManyArgs} args - Arguments to filter Proveedors to delete.
     * @example
     * // Delete a few Proveedors
     * const { count } = await prisma.proveedor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProveedorDeleteManyArgs>(args?: SelectSubset<T, ProveedorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Proveedors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProveedorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Proveedors
     * const proveedor = await prisma.proveedor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProveedorUpdateManyArgs>(args: SelectSubset<T, ProveedorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Proveedor.
     * @param {ProveedorUpsertArgs} args - Arguments to update or create a Proveedor.
     * @example
     * // Update or create a Proveedor
     * const proveedor = await prisma.proveedor.upsert({
     *   create: {
     *     // ... data to create a Proveedor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Proveedor we want to update
     *   }
     * })
     */
    upsert<T extends ProveedorUpsertArgs>(args: SelectSubset<T, ProveedorUpsertArgs<ExtArgs>>): Prisma__ProveedorClient<$Result.GetResult<Prisma.$ProveedorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Proveedors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProveedorCountArgs} args - Arguments to filter Proveedors to count.
     * @example
     * // Count the number of Proveedors
     * const count = await prisma.proveedor.count({
     *   where: {
     *     // ... the filter for the Proveedors we want to count
     *   }
     * })
    **/
    count<T extends ProveedorCountArgs>(
      args?: Subset<T, ProveedorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProveedorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Proveedor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProveedorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProveedorAggregateArgs>(args: Subset<T, ProveedorAggregateArgs>): Prisma.PrismaPromise<GetProveedorAggregateType<T>>

    /**
     * Group by Proveedor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProveedorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProveedorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProveedorGroupByArgs['orderBy'] }
        : { orderBy?: ProveedorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProveedorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProveedorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Proveedor model
   */
  readonly fields: ProveedorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Proveedor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProveedorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    compras<T extends Proveedor$comprasArgs<ExtArgs> = {}>(args?: Subset<T, Proveedor$comprasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompraPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Proveedor model
   */
  interface ProveedorFieldRefs {
    readonly id_proveedor: FieldRef<"Proveedor", 'Int'>
    readonly nombre: FieldRef<"Proveedor", 'String'>
    readonly telefono: FieldRef<"Proveedor", 'String'>
    readonly direccion: FieldRef<"Proveedor", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Proveedor findUnique
   */
  export type ProveedorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proveedor
     */
    select?: ProveedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proveedor
     */
    omit?: ProveedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProveedorInclude<ExtArgs> | null
    /**
     * Filter, which Proveedor to fetch.
     */
    where: ProveedorWhereUniqueInput
  }

  /**
   * Proveedor findUniqueOrThrow
   */
  export type ProveedorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proveedor
     */
    select?: ProveedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proveedor
     */
    omit?: ProveedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProveedorInclude<ExtArgs> | null
    /**
     * Filter, which Proveedor to fetch.
     */
    where: ProveedorWhereUniqueInput
  }

  /**
   * Proveedor findFirst
   */
  export type ProveedorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proveedor
     */
    select?: ProveedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proveedor
     */
    omit?: ProveedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProveedorInclude<ExtArgs> | null
    /**
     * Filter, which Proveedor to fetch.
     */
    where?: ProveedorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Proveedors to fetch.
     */
    orderBy?: ProveedorOrderByWithRelationInput | ProveedorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Proveedors.
     */
    cursor?: ProveedorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Proveedors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Proveedors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Proveedors.
     */
    distinct?: ProveedorScalarFieldEnum | ProveedorScalarFieldEnum[]
  }

  /**
   * Proveedor findFirstOrThrow
   */
  export type ProveedorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proveedor
     */
    select?: ProveedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proveedor
     */
    omit?: ProveedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProveedorInclude<ExtArgs> | null
    /**
     * Filter, which Proveedor to fetch.
     */
    where?: ProveedorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Proveedors to fetch.
     */
    orderBy?: ProveedorOrderByWithRelationInput | ProveedorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Proveedors.
     */
    cursor?: ProveedorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Proveedors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Proveedors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Proveedors.
     */
    distinct?: ProveedorScalarFieldEnum | ProveedorScalarFieldEnum[]
  }

  /**
   * Proveedor findMany
   */
  export type ProveedorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proveedor
     */
    select?: ProveedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proveedor
     */
    omit?: ProveedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProveedorInclude<ExtArgs> | null
    /**
     * Filter, which Proveedors to fetch.
     */
    where?: ProveedorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Proveedors to fetch.
     */
    orderBy?: ProveedorOrderByWithRelationInput | ProveedorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Proveedors.
     */
    cursor?: ProveedorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Proveedors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Proveedors.
     */
    skip?: number
    distinct?: ProveedorScalarFieldEnum | ProveedorScalarFieldEnum[]
  }

  /**
   * Proveedor create
   */
  export type ProveedorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proveedor
     */
    select?: ProveedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proveedor
     */
    omit?: ProveedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProveedorInclude<ExtArgs> | null
    /**
     * The data needed to create a Proveedor.
     */
    data?: XOR<ProveedorCreateInput, ProveedorUncheckedCreateInput>
  }

  /**
   * Proveedor createMany
   */
  export type ProveedorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Proveedors.
     */
    data: ProveedorCreateManyInput | ProveedorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Proveedor update
   */
  export type ProveedorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proveedor
     */
    select?: ProveedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proveedor
     */
    omit?: ProveedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProveedorInclude<ExtArgs> | null
    /**
     * The data needed to update a Proveedor.
     */
    data: XOR<ProveedorUpdateInput, ProveedorUncheckedUpdateInput>
    /**
     * Choose, which Proveedor to update.
     */
    where: ProveedorWhereUniqueInput
  }

  /**
   * Proveedor updateMany
   */
  export type ProveedorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Proveedors.
     */
    data: XOR<ProveedorUpdateManyMutationInput, ProveedorUncheckedUpdateManyInput>
    /**
     * Filter which Proveedors to update
     */
    where?: ProveedorWhereInput
    /**
     * Limit how many Proveedors to update.
     */
    limit?: number
  }

  /**
   * Proveedor upsert
   */
  export type ProveedorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proveedor
     */
    select?: ProveedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proveedor
     */
    omit?: ProveedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProveedorInclude<ExtArgs> | null
    /**
     * The filter to search for the Proveedor to update in case it exists.
     */
    where: ProveedorWhereUniqueInput
    /**
     * In case the Proveedor found by the `where` argument doesn't exist, create a new Proveedor with this data.
     */
    create: XOR<ProveedorCreateInput, ProveedorUncheckedCreateInput>
    /**
     * In case the Proveedor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProveedorUpdateInput, ProveedorUncheckedUpdateInput>
  }

  /**
   * Proveedor delete
   */
  export type ProveedorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proveedor
     */
    select?: ProveedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proveedor
     */
    omit?: ProveedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProveedorInclude<ExtArgs> | null
    /**
     * Filter which Proveedor to delete.
     */
    where: ProveedorWhereUniqueInput
  }

  /**
   * Proveedor deleteMany
   */
  export type ProveedorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Proveedors to delete
     */
    where?: ProveedorWhereInput
    /**
     * Limit how many Proveedors to delete.
     */
    limit?: number
  }

  /**
   * Proveedor.compras
   */
  export type Proveedor$comprasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compra
     */
    select?: CompraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Compra
     */
    omit?: CompraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompraInclude<ExtArgs> | null
    where?: CompraWhereInput
    orderBy?: CompraOrderByWithRelationInput | CompraOrderByWithRelationInput[]
    cursor?: CompraWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CompraScalarFieldEnum | CompraScalarFieldEnum[]
  }

  /**
   * Proveedor without action
   */
  export type ProveedorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proveedor
     */
    select?: ProveedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proveedor
     */
    omit?: ProveedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProveedorInclude<ExtArgs> | null
  }


  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id_usuario: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id_usuario: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id_usuario: number | null
    usuario: string | null
    contraseña: string | null
    rol: string | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id_usuario: number | null
    usuario: string | null
    contraseña: string | null
    rol: string | null
  }

  export type UsuarioCountAggregateOutputType = {
    id_usuario: number
    usuario: number
    contraseña: number
    rol: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id_usuario?: true
  }

  export type UsuarioSumAggregateInputType = {
    id_usuario?: true
  }

  export type UsuarioMinAggregateInputType = {
    id_usuario?: true
    usuario?: true
    contraseña?: true
    rol?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id_usuario?: true
    usuario?: true
    contraseña?: true
    rol?: true
  }

  export type UsuarioCountAggregateInputType = {
    id_usuario?: true
    usuario?: true
    contraseña?: true
    rol?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id_usuario: number
    usuario: string | null
    contraseña: string | null
    rol: string | null
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    usuario?: boolean
    contraseña?: boolean
    rol?: boolean
    ventas?: boolean | Usuario$ventasArgs<ExtArgs>
    compras?: boolean | Usuario$comprasArgs<ExtArgs>
    cajas?: boolean | Usuario$cajasArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>



  export type UsuarioSelectScalar = {
    id_usuario?: boolean
    usuario?: boolean
    contraseña?: boolean
    rol?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_usuario" | "usuario" | "contraseña" | "rol", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ventas?: boolean | Usuario$ventasArgs<ExtArgs>
    compras?: boolean | Usuario$comprasArgs<ExtArgs>
    cajas?: boolean | Usuario$cajasArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      ventas: Prisma.$VentaPayload<ExtArgs>[]
      compras: Prisma.$CompraPayload<ExtArgs>[]
      cajas: Prisma.$CajaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_usuario: number
      usuario: string | null
      contraseña: string | null
      rol: string | null
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id_usuario`
     * const usuarioWithId_usuarioOnly = await prisma.usuario.findMany({ select: { id_usuario: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ventas<T extends Usuario$ventasArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$ventasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    compras<T extends Usuario$comprasArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$comprasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompraPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    cajas<T extends Usuario$cajasArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$cajasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CajaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id_usuario: FieldRef<"Usuario", 'Int'>
    readonly usuario: FieldRef<"Usuario", 'String'>
    readonly contraseña: FieldRef<"Usuario", 'String'>
    readonly rol: FieldRef<"Usuario", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data?: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.ventas
   */
  export type Usuario$ventasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venta
     */
    select?: VentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venta
     */
    omit?: VentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaInclude<ExtArgs> | null
    where?: VentaWhereInput
    orderBy?: VentaOrderByWithRelationInput | VentaOrderByWithRelationInput[]
    cursor?: VentaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VentaScalarFieldEnum | VentaScalarFieldEnum[]
  }

  /**
   * Usuario.compras
   */
  export type Usuario$comprasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compra
     */
    select?: CompraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Compra
     */
    omit?: CompraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompraInclude<ExtArgs> | null
    where?: CompraWhereInput
    orderBy?: CompraOrderByWithRelationInput | CompraOrderByWithRelationInput[]
    cursor?: CompraWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CompraScalarFieldEnum | CompraScalarFieldEnum[]
  }

  /**
   * Usuario.cajas
   */
  export type Usuario$cajasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Caja
     */
    select?: CajaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Caja
     */
    omit?: CajaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CajaInclude<ExtArgs> | null
    where?: CajaWhereInput
    orderBy?: CajaOrderByWithRelationInput | CajaOrderByWithRelationInput[]
    cursor?: CajaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CajaScalarFieldEnum | CajaScalarFieldEnum[]
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Venta
   */

  export type AggregateVenta = {
    _count: VentaCountAggregateOutputType | null
    _avg: VentaAvgAggregateOutputType | null
    _sum: VentaSumAggregateOutputType | null
    _min: VentaMinAggregateOutputType | null
    _max: VentaMaxAggregateOutputType | null
  }

  export type VentaAvgAggregateOutputType = {
    id_venta: number | null
    cliente_id_cliente: number | null
    usuario_id_usuario: number | null
  }

  export type VentaSumAggregateOutputType = {
    id_venta: number | null
    cliente_id_cliente: number | null
    usuario_id_usuario: number | null
  }

  export type VentaMinAggregateOutputType = {
    id_venta: number | null
    tipo_venta: string | null
    estado: string | null
    cliente_id_cliente: number | null
    cliente_cedula: string | null
    usuario_id_usuario: number | null
  }

  export type VentaMaxAggregateOutputType = {
    id_venta: number | null
    tipo_venta: string | null
    estado: string | null
    cliente_id_cliente: number | null
    cliente_cedula: string | null
    usuario_id_usuario: number | null
  }

  export type VentaCountAggregateOutputType = {
    id_venta: number
    tipo_venta: number
    estado: number
    cliente_id_cliente: number
    cliente_cedula: number
    usuario_id_usuario: number
    _all: number
  }


  export type VentaAvgAggregateInputType = {
    id_venta?: true
    cliente_id_cliente?: true
    usuario_id_usuario?: true
  }

  export type VentaSumAggregateInputType = {
    id_venta?: true
    cliente_id_cliente?: true
    usuario_id_usuario?: true
  }

  export type VentaMinAggregateInputType = {
    id_venta?: true
    tipo_venta?: true
    estado?: true
    cliente_id_cliente?: true
    cliente_cedula?: true
    usuario_id_usuario?: true
  }

  export type VentaMaxAggregateInputType = {
    id_venta?: true
    tipo_venta?: true
    estado?: true
    cliente_id_cliente?: true
    cliente_cedula?: true
    usuario_id_usuario?: true
  }

  export type VentaCountAggregateInputType = {
    id_venta?: true
    tipo_venta?: true
    estado?: true
    cliente_id_cliente?: true
    cliente_cedula?: true
    usuario_id_usuario?: true
    _all?: true
  }

  export type VentaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Venta to aggregate.
     */
    where?: VentaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ventas to fetch.
     */
    orderBy?: VentaOrderByWithRelationInput | VentaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VentaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ventas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ventas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ventas
    **/
    _count?: true | VentaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VentaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VentaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VentaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VentaMaxAggregateInputType
  }

  export type GetVentaAggregateType<T extends VentaAggregateArgs> = {
        [P in keyof T & keyof AggregateVenta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVenta[P]>
      : GetScalarType<T[P], AggregateVenta[P]>
  }




  export type VentaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VentaWhereInput
    orderBy?: VentaOrderByWithAggregationInput | VentaOrderByWithAggregationInput[]
    by: VentaScalarFieldEnum[] | VentaScalarFieldEnum
    having?: VentaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VentaCountAggregateInputType | true
    _avg?: VentaAvgAggregateInputType
    _sum?: VentaSumAggregateInputType
    _min?: VentaMinAggregateInputType
    _max?: VentaMaxAggregateInputType
  }

  export type VentaGroupByOutputType = {
    id_venta: number
    tipo_venta: string | null
    estado: string | null
    cliente_id_cliente: number
    cliente_cedula: string
    usuario_id_usuario: number
    _count: VentaCountAggregateOutputType | null
    _avg: VentaAvgAggregateOutputType | null
    _sum: VentaSumAggregateOutputType | null
    _min: VentaMinAggregateOutputType | null
    _max: VentaMaxAggregateOutputType | null
  }

  type GetVentaGroupByPayload<T extends VentaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VentaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VentaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VentaGroupByOutputType[P]>
            : GetScalarType<T[P], VentaGroupByOutputType[P]>
        }
      >
    >


  export type VentaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_venta?: boolean
    tipo_venta?: boolean
    estado?: boolean
    cliente_id_cliente?: boolean
    cliente_cedula?: boolean
    usuario_id_usuario?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    venta_productos?: boolean | Venta$venta_productosArgs<ExtArgs>
    factura_venta?: boolean | Venta$factura_ventaArgs<ExtArgs>
    _count?: boolean | VentaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["venta"]>



  export type VentaSelectScalar = {
    id_venta?: boolean
    tipo_venta?: boolean
    estado?: boolean
    cliente_id_cliente?: boolean
    cliente_cedula?: boolean
    usuario_id_usuario?: boolean
  }

  export type VentaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_venta" | "tipo_venta" | "estado" | "cliente_id_cliente" | "cliente_cedula" | "usuario_id_usuario", ExtArgs["result"]["venta"]>
  export type VentaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    venta_productos?: boolean | Venta$venta_productosArgs<ExtArgs>
    factura_venta?: boolean | Venta$factura_ventaArgs<ExtArgs>
    _count?: boolean | VentaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $VentaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Venta"
    objects: {
      cliente: Prisma.$ClientePayload<ExtArgs>
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      venta_productos: Prisma.$VentaProductoPayload<ExtArgs>[]
      factura_venta: Prisma.$FacturaVentaPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id_venta: number
      tipo_venta: string | null
      estado: string | null
      cliente_id_cliente: number
      cliente_cedula: string
      usuario_id_usuario: number
    }, ExtArgs["result"]["venta"]>
    composites: {}
  }

  type VentaGetPayload<S extends boolean | null | undefined | VentaDefaultArgs> = $Result.GetResult<Prisma.$VentaPayload, S>

  type VentaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VentaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VentaCountAggregateInputType | true
    }

  export interface VentaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Venta'], meta: { name: 'Venta' } }
    /**
     * Find zero or one Venta that matches the filter.
     * @param {VentaFindUniqueArgs} args - Arguments to find a Venta
     * @example
     * // Get one Venta
     * const venta = await prisma.venta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VentaFindUniqueArgs>(args: SelectSubset<T, VentaFindUniqueArgs<ExtArgs>>): Prisma__VentaClient<$Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Venta that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VentaFindUniqueOrThrowArgs} args - Arguments to find a Venta
     * @example
     * // Get one Venta
     * const venta = await prisma.venta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VentaFindUniqueOrThrowArgs>(args: SelectSubset<T, VentaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VentaClient<$Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Venta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VentaFindFirstArgs} args - Arguments to find a Venta
     * @example
     * // Get one Venta
     * const venta = await prisma.venta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VentaFindFirstArgs>(args?: SelectSubset<T, VentaFindFirstArgs<ExtArgs>>): Prisma__VentaClient<$Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Venta that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VentaFindFirstOrThrowArgs} args - Arguments to find a Venta
     * @example
     * // Get one Venta
     * const venta = await prisma.venta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VentaFindFirstOrThrowArgs>(args?: SelectSubset<T, VentaFindFirstOrThrowArgs<ExtArgs>>): Prisma__VentaClient<$Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ventas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VentaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ventas
     * const ventas = await prisma.venta.findMany()
     * 
     * // Get first 10 Ventas
     * const ventas = await prisma.venta.findMany({ take: 10 })
     * 
     * // Only select the `id_venta`
     * const ventaWithId_ventaOnly = await prisma.venta.findMany({ select: { id_venta: true } })
     * 
     */
    findMany<T extends VentaFindManyArgs>(args?: SelectSubset<T, VentaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Venta.
     * @param {VentaCreateArgs} args - Arguments to create a Venta.
     * @example
     * // Create one Venta
     * const Venta = await prisma.venta.create({
     *   data: {
     *     // ... data to create a Venta
     *   }
     * })
     * 
     */
    create<T extends VentaCreateArgs>(args: SelectSubset<T, VentaCreateArgs<ExtArgs>>): Prisma__VentaClient<$Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ventas.
     * @param {VentaCreateManyArgs} args - Arguments to create many Ventas.
     * @example
     * // Create many Ventas
     * const venta = await prisma.venta.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VentaCreateManyArgs>(args?: SelectSubset<T, VentaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Venta.
     * @param {VentaDeleteArgs} args - Arguments to delete one Venta.
     * @example
     * // Delete one Venta
     * const Venta = await prisma.venta.delete({
     *   where: {
     *     // ... filter to delete one Venta
     *   }
     * })
     * 
     */
    delete<T extends VentaDeleteArgs>(args: SelectSubset<T, VentaDeleteArgs<ExtArgs>>): Prisma__VentaClient<$Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Venta.
     * @param {VentaUpdateArgs} args - Arguments to update one Venta.
     * @example
     * // Update one Venta
     * const venta = await prisma.venta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VentaUpdateArgs>(args: SelectSubset<T, VentaUpdateArgs<ExtArgs>>): Prisma__VentaClient<$Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ventas.
     * @param {VentaDeleteManyArgs} args - Arguments to filter Ventas to delete.
     * @example
     * // Delete a few Ventas
     * const { count } = await prisma.venta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VentaDeleteManyArgs>(args?: SelectSubset<T, VentaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ventas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VentaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ventas
     * const venta = await prisma.venta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VentaUpdateManyArgs>(args: SelectSubset<T, VentaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Venta.
     * @param {VentaUpsertArgs} args - Arguments to update or create a Venta.
     * @example
     * // Update or create a Venta
     * const venta = await prisma.venta.upsert({
     *   create: {
     *     // ... data to create a Venta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Venta we want to update
     *   }
     * })
     */
    upsert<T extends VentaUpsertArgs>(args: SelectSubset<T, VentaUpsertArgs<ExtArgs>>): Prisma__VentaClient<$Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ventas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VentaCountArgs} args - Arguments to filter Ventas to count.
     * @example
     * // Count the number of Ventas
     * const count = await prisma.venta.count({
     *   where: {
     *     // ... the filter for the Ventas we want to count
     *   }
     * })
    **/
    count<T extends VentaCountArgs>(
      args?: Subset<T, VentaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VentaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Venta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VentaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VentaAggregateArgs>(args: Subset<T, VentaAggregateArgs>): Prisma.PrismaPromise<GetVentaAggregateType<T>>

    /**
     * Group by Venta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VentaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VentaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VentaGroupByArgs['orderBy'] }
        : { orderBy?: VentaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VentaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVentaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Venta model
   */
  readonly fields: VentaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Venta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VentaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cliente<T extends ClienteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClienteDefaultArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    venta_productos<T extends Venta$venta_productosArgs<ExtArgs> = {}>(args?: Subset<T, Venta$venta_productosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VentaProductoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    factura_venta<T extends Venta$factura_ventaArgs<ExtArgs> = {}>(args?: Subset<T, Venta$factura_ventaArgs<ExtArgs>>): Prisma__FacturaVentaClient<$Result.GetResult<Prisma.$FacturaVentaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Venta model
   */
  interface VentaFieldRefs {
    readonly id_venta: FieldRef<"Venta", 'Int'>
    readonly tipo_venta: FieldRef<"Venta", 'String'>
    readonly estado: FieldRef<"Venta", 'String'>
    readonly cliente_id_cliente: FieldRef<"Venta", 'Int'>
    readonly cliente_cedula: FieldRef<"Venta", 'String'>
    readonly usuario_id_usuario: FieldRef<"Venta", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Venta findUnique
   */
  export type VentaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venta
     */
    select?: VentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venta
     */
    omit?: VentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaInclude<ExtArgs> | null
    /**
     * Filter, which Venta to fetch.
     */
    where: VentaWhereUniqueInput
  }

  /**
   * Venta findUniqueOrThrow
   */
  export type VentaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venta
     */
    select?: VentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venta
     */
    omit?: VentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaInclude<ExtArgs> | null
    /**
     * Filter, which Venta to fetch.
     */
    where: VentaWhereUniqueInput
  }

  /**
   * Venta findFirst
   */
  export type VentaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venta
     */
    select?: VentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venta
     */
    omit?: VentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaInclude<ExtArgs> | null
    /**
     * Filter, which Venta to fetch.
     */
    where?: VentaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ventas to fetch.
     */
    orderBy?: VentaOrderByWithRelationInput | VentaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ventas.
     */
    cursor?: VentaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ventas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ventas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ventas.
     */
    distinct?: VentaScalarFieldEnum | VentaScalarFieldEnum[]
  }

  /**
   * Venta findFirstOrThrow
   */
  export type VentaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venta
     */
    select?: VentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venta
     */
    omit?: VentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaInclude<ExtArgs> | null
    /**
     * Filter, which Venta to fetch.
     */
    where?: VentaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ventas to fetch.
     */
    orderBy?: VentaOrderByWithRelationInput | VentaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ventas.
     */
    cursor?: VentaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ventas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ventas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ventas.
     */
    distinct?: VentaScalarFieldEnum | VentaScalarFieldEnum[]
  }

  /**
   * Venta findMany
   */
  export type VentaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venta
     */
    select?: VentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venta
     */
    omit?: VentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaInclude<ExtArgs> | null
    /**
     * Filter, which Ventas to fetch.
     */
    where?: VentaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ventas to fetch.
     */
    orderBy?: VentaOrderByWithRelationInput | VentaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ventas.
     */
    cursor?: VentaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ventas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ventas.
     */
    skip?: number
    distinct?: VentaScalarFieldEnum | VentaScalarFieldEnum[]
  }

  /**
   * Venta create
   */
  export type VentaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venta
     */
    select?: VentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venta
     */
    omit?: VentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaInclude<ExtArgs> | null
    /**
     * The data needed to create a Venta.
     */
    data: XOR<VentaCreateInput, VentaUncheckedCreateInput>
  }

  /**
   * Venta createMany
   */
  export type VentaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ventas.
     */
    data: VentaCreateManyInput | VentaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Venta update
   */
  export type VentaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venta
     */
    select?: VentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venta
     */
    omit?: VentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaInclude<ExtArgs> | null
    /**
     * The data needed to update a Venta.
     */
    data: XOR<VentaUpdateInput, VentaUncheckedUpdateInput>
    /**
     * Choose, which Venta to update.
     */
    where: VentaWhereUniqueInput
  }

  /**
   * Venta updateMany
   */
  export type VentaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ventas.
     */
    data: XOR<VentaUpdateManyMutationInput, VentaUncheckedUpdateManyInput>
    /**
     * Filter which Ventas to update
     */
    where?: VentaWhereInput
    /**
     * Limit how many Ventas to update.
     */
    limit?: number
  }

  /**
   * Venta upsert
   */
  export type VentaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venta
     */
    select?: VentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venta
     */
    omit?: VentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaInclude<ExtArgs> | null
    /**
     * The filter to search for the Venta to update in case it exists.
     */
    where: VentaWhereUniqueInput
    /**
     * In case the Venta found by the `where` argument doesn't exist, create a new Venta with this data.
     */
    create: XOR<VentaCreateInput, VentaUncheckedCreateInput>
    /**
     * In case the Venta was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VentaUpdateInput, VentaUncheckedUpdateInput>
  }

  /**
   * Venta delete
   */
  export type VentaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venta
     */
    select?: VentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venta
     */
    omit?: VentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaInclude<ExtArgs> | null
    /**
     * Filter which Venta to delete.
     */
    where: VentaWhereUniqueInput
  }

  /**
   * Venta deleteMany
   */
  export type VentaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ventas to delete
     */
    where?: VentaWhereInput
    /**
     * Limit how many Ventas to delete.
     */
    limit?: number
  }

  /**
   * Venta.venta_productos
   */
  export type Venta$venta_productosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VentaProducto
     */
    select?: VentaProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VentaProducto
     */
    omit?: VentaProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaProductoInclude<ExtArgs> | null
    where?: VentaProductoWhereInput
    orderBy?: VentaProductoOrderByWithRelationInput | VentaProductoOrderByWithRelationInput[]
    cursor?: VentaProductoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VentaProductoScalarFieldEnum | VentaProductoScalarFieldEnum[]
  }

  /**
   * Venta.factura_venta
   */
  export type Venta$factura_ventaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacturaVenta
     */
    select?: FacturaVentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacturaVenta
     */
    omit?: FacturaVentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaVentaInclude<ExtArgs> | null
    where?: FacturaVentaWhereInput
  }

  /**
   * Venta without action
   */
  export type VentaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venta
     */
    select?: VentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venta
     */
    omit?: VentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaInclude<ExtArgs> | null
  }


  /**
   * Model VentaProducto
   */

  export type AggregateVentaProducto = {
    _count: VentaProductoCountAggregateOutputType | null
    _avg: VentaProductoAvgAggregateOutputType | null
    _sum: VentaProductoSumAggregateOutputType | null
    _min: VentaProductoMinAggregateOutputType | null
    _max: VentaProductoMaxAggregateOutputType | null
  }

  export type VentaProductoAvgAggregateOutputType = {
    venta_id_venta: number | null
    producto_id_producto: number | null
    cantidad: Decimal | null
    precio_unitario: Decimal | null
  }

  export type VentaProductoSumAggregateOutputType = {
    venta_id_venta: number | null
    producto_id_producto: number | null
    cantidad: Decimal | null
    precio_unitario: Decimal | null
  }

  export type VentaProductoMinAggregateOutputType = {
    venta_id_venta: number | null
    producto_id_producto: number | null
    cantidad: Decimal | null
    precio_unitario: Decimal | null
  }

  export type VentaProductoMaxAggregateOutputType = {
    venta_id_venta: number | null
    producto_id_producto: number | null
    cantidad: Decimal | null
    precio_unitario: Decimal | null
  }

  export type VentaProductoCountAggregateOutputType = {
    venta_id_venta: number
    producto_id_producto: number
    cantidad: number
    precio_unitario: number
    _all: number
  }


  export type VentaProductoAvgAggregateInputType = {
    venta_id_venta?: true
    producto_id_producto?: true
    cantidad?: true
    precio_unitario?: true
  }

  export type VentaProductoSumAggregateInputType = {
    venta_id_venta?: true
    producto_id_producto?: true
    cantidad?: true
    precio_unitario?: true
  }

  export type VentaProductoMinAggregateInputType = {
    venta_id_venta?: true
    producto_id_producto?: true
    cantidad?: true
    precio_unitario?: true
  }

  export type VentaProductoMaxAggregateInputType = {
    venta_id_venta?: true
    producto_id_producto?: true
    cantidad?: true
    precio_unitario?: true
  }

  export type VentaProductoCountAggregateInputType = {
    venta_id_venta?: true
    producto_id_producto?: true
    cantidad?: true
    precio_unitario?: true
    _all?: true
  }

  export type VentaProductoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VentaProducto to aggregate.
     */
    where?: VentaProductoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VentaProductos to fetch.
     */
    orderBy?: VentaProductoOrderByWithRelationInput | VentaProductoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VentaProductoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VentaProductos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VentaProductos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VentaProductos
    **/
    _count?: true | VentaProductoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VentaProductoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VentaProductoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VentaProductoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VentaProductoMaxAggregateInputType
  }

  export type GetVentaProductoAggregateType<T extends VentaProductoAggregateArgs> = {
        [P in keyof T & keyof AggregateVentaProducto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVentaProducto[P]>
      : GetScalarType<T[P], AggregateVentaProducto[P]>
  }




  export type VentaProductoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VentaProductoWhereInput
    orderBy?: VentaProductoOrderByWithAggregationInput | VentaProductoOrderByWithAggregationInput[]
    by: VentaProductoScalarFieldEnum[] | VentaProductoScalarFieldEnum
    having?: VentaProductoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VentaProductoCountAggregateInputType | true
    _avg?: VentaProductoAvgAggregateInputType
    _sum?: VentaProductoSumAggregateInputType
    _min?: VentaProductoMinAggregateInputType
    _max?: VentaProductoMaxAggregateInputType
  }

  export type VentaProductoGroupByOutputType = {
    venta_id_venta: number
    producto_id_producto: number
    cantidad: Decimal
    precio_unitario: Decimal
    _count: VentaProductoCountAggregateOutputType | null
    _avg: VentaProductoAvgAggregateOutputType | null
    _sum: VentaProductoSumAggregateOutputType | null
    _min: VentaProductoMinAggregateOutputType | null
    _max: VentaProductoMaxAggregateOutputType | null
  }

  type GetVentaProductoGroupByPayload<T extends VentaProductoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VentaProductoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VentaProductoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VentaProductoGroupByOutputType[P]>
            : GetScalarType<T[P], VentaProductoGroupByOutputType[P]>
        }
      >
    >


  export type VentaProductoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    venta_id_venta?: boolean
    producto_id_producto?: boolean
    cantidad?: boolean
    precio_unitario?: boolean
    venta?: boolean | VentaDefaultArgs<ExtArgs>
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ventaProducto"]>



  export type VentaProductoSelectScalar = {
    venta_id_venta?: boolean
    producto_id_producto?: boolean
    cantidad?: boolean
    precio_unitario?: boolean
  }

  export type VentaProductoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"venta_id_venta" | "producto_id_producto" | "cantidad" | "precio_unitario", ExtArgs["result"]["ventaProducto"]>
  export type VentaProductoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    venta?: boolean | VentaDefaultArgs<ExtArgs>
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
  }

  export type $VentaProductoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VentaProducto"
    objects: {
      venta: Prisma.$VentaPayload<ExtArgs>
      producto: Prisma.$ProductoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      venta_id_venta: number
      producto_id_producto: number
      cantidad: Prisma.Decimal
      precio_unitario: Prisma.Decimal
    }, ExtArgs["result"]["ventaProducto"]>
    composites: {}
  }

  type VentaProductoGetPayload<S extends boolean | null | undefined | VentaProductoDefaultArgs> = $Result.GetResult<Prisma.$VentaProductoPayload, S>

  type VentaProductoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VentaProductoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VentaProductoCountAggregateInputType | true
    }

  export interface VentaProductoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VentaProducto'], meta: { name: 'VentaProducto' } }
    /**
     * Find zero or one VentaProducto that matches the filter.
     * @param {VentaProductoFindUniqueArgs} args - Arguments to find a VentaProducto
     * @example
     * // Get one VentaProducto
     * const ventaProducto = await prisma.ventaProducto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VentaProductoFindUniqueArgs>(args: SelectSubset<T, VentaProductoFindUniqueArgs<ExtArgs>>): Prisma__VentaProductoClient<$Result.GetResult<Prisma.$VentaProductoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VentaProducto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VentaProductoFindUniqueOrThrowArgs} args - Arguments to find a VentaProducto
     * @example
     * // Get one VentaProducto
     * const ventaProducto = await prisma.ventaProducto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VentaProductoFindUniqueOrThrowArgs>(args: SelectSubset<T, VentaProductoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VentaProductoClient<$Result.GetResult<Prisma.$VentaProductoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VentaProducto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VentaProductoFindFirstArgs} args - Arguments to find a VentaProducto
     * @example
     * // Get one VentaProducto
     * const ventaProducto = await prisma.ventaProducto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VentaProductoFindFirstArgs>(args?: SelectSubset<T, VentaProductoFindFirstArgs<ExtArgs>>): Prisma__VentaProductoClient<$Result.GetResult<Prisma.$VentaProductoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VentaProducto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VentaProductoFindFirstOrThrowArgs} args - Arguments to find a VentaProducto
     * @example
     * // Get one VentaProducto
     * const ventaProducto = await prisma.ventaProducto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VentaProductoFindFirstOrThrowArgs>(args?: SelectSubset<T, VentaProductoFindFirstOrThrowArgs<ExtArgs>>): Prisma__VentaProductoClient<$Result.GetResult<Prisma.$VentaProductoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VentaProductos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VentaProductoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VentaProductos
     * const ventaProductos = await prisma.ventaProducto.findMany()
     * 
     * // Get first 10 VentaProductos
     * const ventaProductos = await prisma.ventaProducto.findMany({ take: 10 })
     * 
     * // Only select the `venta_id_venta`
     * const ventaProductoWithVenta_id_ventaOnly = await prisma.ventaProducto.findMany({ select: { venta_id_venta: true } })
     * 
     */
    findMany<T extends VentaProductoFindManyArgs>(args?: SelectSubset<T, VentaProductoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VentaProductoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VentaProducto.
     * @param {VentaProductoCreateArgs} args - Arguments to create a VentaProducto.
     * @example
     * // Create one VentaProducto
     * const VentaProducto = await prisma.ventaProducto.create({
     *   data: {
     *     // ... data to create a VentaProducto
     *   }
     * })
     * 
     */
    create<T extends VentaProductoCreateArgs>(args: SelectSubset<T, VentaProductoCreateArgs<ExtArgs>>): Prisma__VentaProductoClient<$Result.GetResult<Prisma.$VentaProductoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VentaProductos.
     * @param {VentaProductoCreateManyArgs} args - Arguments to create many VentaProductos.
     * @example
     * // Create many VentaProductos
     * const ventaProducto = await prisma.ventaProducto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VentaProductoCreateManyArgs>(args?: SelectSubset<T, VentaProductoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a VentaProducto.
     * @param {VentaProductoDeleteArgs} args - Arguments to delete one VentaProducto.
     * @example
     * // Delete one VentaProducto
     * const VentaProducto = await prisma.ventaProducto.delete({
     *   where: {
     *     // ... filter to delete one VentaProducto
     *   }
     * })
     * 
     */
    delete<T extends VentaProductoDeleteArgs>(args: SelectSubset<T, VentaProductoDeleteArgs<ExtArgs>>): Prisma__VentaProductoClient<$Result.GetResult<Prisma.$VentaProductoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VentaProducto.
     * @param {VentaProductoUpdateArgs} args - Arguments to update one VentaProducto.
     * @example
     * // Update one VentaProducto
     * const ventaProducto = await prisma.ventaProducto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VentaProductoUpdateArgs>(args: SelectSubset<T, VentaProductoUpdateArgs<ExtArgs>>): Prisma__VentaProductoClient<$Result.GetResult<Prisma.$VentaProductoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VentaProductos.
     * @param {VentaProductoDeleteManyArgs} args - Arguments to filter VentaProductos to delete.
     * @example
     * // Delete a few VentaProductos
     * const { count } = await prisma.ventaProducto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VentaProductoDeleteManyArgs>(args?: SelectSubset<T, VentaProductoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VentaProductos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VentaProductoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VentaProductos
     * const ventaProducto = await prisma.ventaProducto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VentaProductoUpdateManyArgs>(args: SelectSubset<T, VentaProductoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one VentaProducto.
     * @param {VentaProductoUpsertArgs} args - Arguments to update or create a VentaProducto.
     * @example
     * // Update or create a VentaProducto
     * const ventaProducto = await prisma.ventaProducto.upsert({
     *   create: {
     *     // ... data to create a VentaProducto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VentaProducto we want to update
     *   }
     * })
     */
    upsert<T extends VentaProductoUpsertArgs>(args: SelectSubset<T, VentaProductoUpsertArgs<ExtArgs>>): Prisma__VentaProductoClient<$Result.GetResult<Prisma.$VentaProductoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VentaProductos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VentaProductoCountArgs} args - Arguments to filter VentaProductos to count.
     * @example
     * // Count the number of VentaProductos
     * const count = await prisma.ventaProducto.count({
     *   where: {
     *     // ... the filter for the VentaProductos we want to count
     *   }
     * })
    **/
    count<T extends VentaProductoCountArgs>(
      args?: Subset<T, VentaProductoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VentaProductoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VentaProducto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VentaProductoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VentaProductoAggregateArgs>(args: Subset<T, VentaProductoAggregateArgs>): Prisma.PrismaPromise<GetVentaProductoAggregateType<T>>

    /**
     * Group by VentaProducto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VentaProductoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VentaProductoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VentaProductoGroupByArgs['orderBy'] }
        : { orderBy?: VentaProductoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VentaProductoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVentaProductoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VentaProducto model
   */
  readonly fields: VentaProductoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VentaProducto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VentaProductoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    venta<T extends VentaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VentaDefaultArgs<ExtArgs>>): Prisma__VentaClient<$Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    producto<T extends ProductoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductoDefaultArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VentaProducto model
   */
  interface VentaProductoFieldRefs {
    readonly venta_id_venta: FieldRef<"VentaProducto", 'Int'>
    readonly producto_id_producto: FieldRef<"VentaProducto", 'Int'>
    readonly cantidad: FieldRef<"VentaProducto", 'Decimal'>
    readonly precio_unitario: FieldRef<"VentaProducto", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * VentaProducto findUnique
   */
  export type VentaProductoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VentaProducto
     */
    select?: VentaProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VentaProducto
     */
    omit?: VentaProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaProductoInclude<ExtArgs> | null
    /**
     * Filter, which VentaProducto to fetch.
     */
    where: VentaProductoWhereUniqueInput
  }

  /**
   * VentaProducto findUniqueOrThrow
   */
  export type VentaProductoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VentaProducto
     */
    select?: VentaProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VentaProducto
     */
    omit?: VentaProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaProductoInclude<ExtArgs> | null
    /**
     * Filter, which VentaProducto to fetch.
     */
    where: VentaProductoWhereUniqueInput
  }

  /**
   * VentaProducto findFirst
   */
  export type VentaProductoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VentaProducto
     */
    select?: VentaProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VentaProducto
     */
    omit?: VentaProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaProductoInclude<ExtArgs> | null
    /**
     * Filter, which VentaProducto to fetch.
     */
    where?: VentaProductoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VentaProductos to fetch.
     */
    orderBy?: VentaProductoOrderByWithRelationInput | VentaProductoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VentaProductos.
     */
    cursor?: VentaProductoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VentaProductos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VentaProductos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VentaProductos.
     */
    distinct?: VentaProductoScalarFieldEnum | VentaProductoScalarFieldEnum[]
  }

  /**
   * VentaProducto findFirstOrThrow
   */
  export type VentaProductoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VentaProducto
     */
    select?: VentaProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VentaProducto
     */
    omit?: VentaProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaProductoInclude<ExtArgs> | null
    /**
     * Filter, which VentaProducto to fetch.
     */
    where?: VentaProductoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VentaProductos to fetch.
     */
    orderBy?: VentaProductoOrderByWithRelationInput | VentaProductoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VentaProductos.
     */
    cursor?: VentaProductoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VentaProductos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VentaProductos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VentaProductos.
     */
    distinct?: VentaProductoScalarFieldEnum | VentaProductoScalarFieldEnum[]
  }

  /**
   * VentaProducto findMany
   */
  export type VentaProductoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VentaProducto
     */
    select?: VentaProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VentaProducto
     */
    omit?: VentaProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaProductoInclude<ExtArgs> | null
    /**
     * Filter, which VentaProductos to fetch.
     */
    where?: VentaProductoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VentaProductos to fetch.
     */
    orderBy?: VentaProductoOrderByWithRelationInput | VentaProductoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VentaProductos.
     */
    cursor?: VentaProductoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VentaProductos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VentaProductos.
     */
    skip?: number
    distinct?: VentaProductoScalarFieldEnum | VentaProductoScalarFieldEnum[]
  }

  /**
   * VentaProducto create
   */
  export type VentaProductoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VentaProducto
     */
    select?: VentaProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VentaProducto
     */
    omit?: VentaProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaProductoInclude<ExtArgs> | null
    /**
     * The data needed to create a VentaProducto.
     */
    data: XOR<VentaProductoCreateInput, VentaProductoUncheckedCreateInput>
  }

  /**
   * VentaProducto createMany
   */
  export type VentaProductoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VentaProductos.
     */
    data: VentaProductoCreateManyInput | VentaProductoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VentaProducto update
   */
  export type VentaProductoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VentaProducto
     */
    select?: VentaProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VentaProducto
     */
    omit?: VentaProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaProductoInclude<ExtArgs> | null
    /**
     * The data needed to update a VentaProducto.
     */
    data: XOR<VentaProductoUpdateInput, VentaProductoUncheckedUpdateInput>
    /**
     * Choose, which VentaProducto to update.
     */
    where: VentaProductoWhereUniqueInput
  }

  /**
   * VentaProducto updateMany
   */
  export type VentaProductoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VentaProductos.
     */
    data: XOR<VentaProductoUpdateManyMutationInput, VentaProductoUncheckedUpdateManyInput>
    /**
     * Filter which VentaProductos to update
     */
    where?: VentaProductoWhereInput
    /**
     * Limit how many VentaProductos to update.
     */
    limit?: number
  }

  /**
   * VentaProducto upsert
   */
  export type VentaProductoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VentaProducto
     */
    select?: VentaProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VentaProducto
     */
    omit?: VentaProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaProductoInclude<ExtArgs> | null
    /**
     * The filter to search for the VentaProducto to update in case it exists.
     */
    where: VentaProductoWhereUniqueInput
    /**
     * In case the VentaProducto found by the `where` argument doesn't exist, create a new VentaProducto with this data.
     */
    create: XOR<VentaProductoCreateInput, VentaProductoUncheckedCreateInput>
    /**
     * In case the VentaProducto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VentaProductoUpdateInput, VentaProductoUncheckedUpdateInput>
  }

  /**
   * VentaProducto delete
   */
  export type VentaProductoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VentaProducto
     */
    select?: VentaProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VentaProducto
     */
    omit?: VentaProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaProductoInclude<ExtArgs> | null
    /**
     * Filter which VentaProducto to delete.
     */
    where: VentaProductoWhereUniqueInput
  }

  /**
   * VentaProducto deleteMany
   */
  export type VentaProductoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VentaProductos to delete
     */
    where?: VentaProductoWhereInput
    /**
     * Limit how many VentaProductos to delete.
     */
    limit?: number
  }

  /**
   * VentaProducto without action
   */
  export type VentaProductoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VentaProducto
     */
    select?: VentaProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VentaProducto
     */
    omit?: VentaProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaProductoInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CajaScalarFieldEnum: {
    id_cierre_caja: 'id_cierre_caja',
    fecha_apertura: 'fecha_apertura',
    fecha_cierre: 'fecha_cierre',
    monto_inicial: 'monto_inicial',
    monto_final: 'monto_final',
    total_ventas: 'total_ventas',
    diferencia: 'diferencia',
    usuario_id_usuario: 'usuario_id_usuario'
  };

  export type CajaScalarFieldEnum = (typeof CajaScalarFieldEnum)[keyof typeof CajaScalarFieldEnum]


  export const CategoriaScalarFieldEnum: {
    id_categoria: 'id_categoria',
    nombre: 'nombre'
  };

  export type CategoriaScalarFieldEnum = (typeof CategoriaScalarFieldEnum)[keyof typeof CategoriaScalarFieldEnum]


  export const ClienteScalarFieldEnum: {
    id_cliente: 'id_cliente',
    cedula: 'cedula',
    nombre: 'nombre',
    apellido: 'apellido',
    telefono: 'telefono',
    compras_semanales: 'compras_semanales',
    deuda_total: 'deuda_total'
  };

  export type ClienteScalarFieldEnum = (typeof ClienteScalarFieldEnum)[keyof typeof ClienteScalarFieldEnum]


  export const CompraScalarFieldEnum: {
    id_compra: 'id_compra',
    fecha_compra: 'fecha_compra',
    estado: 'estado',
    total: 'total',
    usuario_id_usuario: 'usuario_id_usuario',
    proveedor_id_proveedor: 'proveedor_id_proveedor'
  };

  export type CompraScalarFieldEnum = (typeof CompraScalarFieldEnum)[keyof typeof CompraScalarFieldEnum]


  export const CompraProductoScalarFieldEnum: {
    compra_id_compra: 'compra_id_compra',
    producto_id_producto: 'producto_id_producto',
    precio_unitario: 'precio_unitario',
    cantidad: 'cantidad',
    subtotal: 'subtotal'
  };

  export type CompraProductoScalarFieldEnum = (typeof CompraProductoScalarFieldEnum)[keyof typeof CompraProductoScalarFieldEnum]


  export const FacturaCompraScalarFieldEnum: {
    id_factura: 'id_factura',
    fecha: 'fecha',
    subtotal: 'subtotal',
    impuestos: 'impuestos',
    total: 'total',
    compra_id_compra: 'compra_id_compra'
  };

  export type FacturaCompraScalarFieldEnum = (typeof FacturaCompraScalarFieldEnum)[keyof typeof FacturaCompraScalarFieldEnum]


  export const FacturaVentaScalarFieldEnum: {
    id_factura: 'id_factura',
    fecha: 'fecha',
    subtotal: 'subtotal',
    impuestos: 'impuestos',
    total: 'total',
    venta_id_venta: 'venta_id_venta'
  };

  export type FacturaVentaScalarFieldEnum = (typeof FacturaVentaScalarFieldEnum)[keyof typeof FacturaVentaScalarFieldEnum]


  export const MovimientoInventarioScalarFieldEnum: {
    id_movimiento: 'id_movimiento',
    tipo_movimiento: 'tipo_movimiento',
    fecha_movimiento: 'fecha_movimiento',
    cantidad: 'cantidad',
    producto_id_producto: 'producto_id_producto'
  };

  export type MovimientoInventarioScalarFieldEnum = (typeof MovimientoInventarioScalarFieldEnum)[keyof typeof MovimientoInventarioScalarFieldEnum]


  export const ProductoScalarFieldEnum: {
    id_producto: 'id_producto',
    nombre_producto: 'nombre_producto',
    descripcion: 'descripcion',
    stock: 'stock',
    nivel_alerta: 'nivel_alerta',
    categoria_id_categoria: 'categoria_id_categoria'
  };

  export type ProductoScalarFieldEnum = (typeof ProductoScalarFieldEnum)[keyof typeof ProductoScalarFieldEnum]


  export const ProveedorScalarFieldEnum: {
    id_proveedor: 'id_proveedor',
    nombre: 'nombre',
    telefono: 'telefono',
    direccion: 'direccion'
  };

  export type ProveedorScalarFieldEnum = (typeof ProveedorScalarFieldEnum)[keyof typeof ProveedorScalarFieldEnum]


  export const UsuarioScalarFieldEnum: {
    id_usuario: 'id_usuario',
    usuario: 'usuario',
    contraseña: 'contraseña',
    rol: 'rol'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const VentaScalarFieldEnum: {
    id_venta: 'id_venta',
    tipo_venta: 'tipo_venta',
    estado: 'estado',
    cliente_id_cliente: 'cliente_id_cliente',
    cliente_cedula: 'cliente_cedula',
    usuario_id_usuario: 'usuario_id_usuario'
  };

  export type VentaScalarFieldEnum = (typeof VentaScalarFieldEnum)[keyof typeof VentaScalarFieldEnum]


  export const VentaProductoScalarFieldEnum: {
    venta_id_venta: 'venta_id_venta',
    producto_id_producto: 'producto_id_producto',
    cantidad: 'cantidad',
    precio_unitario: 'precio_unitario'
  };

  export type VentaProductoScalarFieldEnum = (typeof VentaProductoScalarFieldEnum)[keyof typeof VentaProductoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const CategoriaOrderByRelevanceFieldEnum: {
    nombre: 'nombre'
  };

  export type CategoriaOrderByRelevanceFieldEnum = (typeof CategoriaOrderByRelevanceFieldEnum)[keyof typeof CategoriaOrderByRelevanceFieldEnum]


  export const ClienteOrderByRelevanceFieldEnum: {
    cedula: 'cedula',
    nombre: 'nombre',
    apellido: 'apellido',
    telefono: 'telefono'
  };

  export type ClienteOrderByRelevanceFieldEnum = (typeof ClienteOrderByRelevanceFieldEnum)[keyof typeof ClienteOrderByRelevanceFieldEnum]


  export const CompraOrderByRelevanceFieldEnum: {
    estado: 'estado'
  };

  export type CompraOrderByRelevanceFieldEnum = (typeof CompraOrderByRelevanceFieldEnum)[keyof typeof CompraOrderByRelevanceFieldEnum]


  export const MovimientoInventarioOrderByRelevanceFieldEnum: {
    tipo_movimiento: 'tipo_movimiento'
  };

  export type MovimientoInventarioOrderByRelevanceFieldEnum = (typeof MovimientoInventarioOrderByRelevanceFieldEnum)[keyof typeof MovimientoInventarioOrderByRelevanceFieldEnum]


  export const ProductoOrderByRelevanceFieldEnum: {
    nombre_producto: 'nombre_producto',
    descripcion: 'descripcion',
    nivel_alerta: 'nivel_alerta'
  };

  export type ProductoOrderByRelevanceFieldEnum = (typeof ProductoOrderByRelevanceFieldEnum)[keyof typeof ProductoOrderByRelevanceFieldEnum]


  export const ProveedorOrderByRelevanceFieldEnum: {
    nombre: 'nombre',
    telefono: 'telefono',
    direccion: 'direccion'
  };

  export type ProveedorOrderByRelevanceFieldEnum = (typeof ProveedorOrderByRelevanceFieldEnum)[keyof typeof ProveedorOrderByRelevanceFieldEnum]


  export const UsuarioOrderByRelevanceFieldEnum: {
    usuario: 'usuario',
    contraseña: 'contraseña',
    rol: 'rol'
  };

  export type UsuarioOrderByRelevanceFieldEnum = (typeof UsuarioOrderByRelevanceFieldEnum)[keyof typeof UsuarioOrderByRelevanceFieldEnum]


  export const VentaOrderByRelevanceFieldEnum: {
    tipo_venta: 'tipo_venta',
    estado: 'estado',
    cliente_cedula: 'cliente_cedula'
  };

  export type VentaOrderByRelevanceFieldEnum = (typeof VentaOrderByRelevanceFieldEnum)[keyof typeof VentaOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type CajaWhereInput = {
    AND?: CajaWhereInput | CajaWhereInput[]
    OR?: CajaWhereInput[]
    NOT?: CajaWhereInput | CajaWhereInput[]
    id_cierre_caja?: IntFilter<"Caja"> | number
    fecha_apertura?: DateTimeNullableFilter<"Caja"> | Date | string | null
    fecha_cierre?: DateTimeNullableFilter<"Caja"> | Date | string | null
    monto_inicial?: DecimalNullableFilter<"Caja"> | Decimal | DecimalJsLike | number | string | null
    monto_final?: DecimalNullableFilter<"Caja"> | Decimal | DecimalJsLike | number | string | null
    total_ventas?: DecimalNullableFilter<"Caja"> | Decimal | DecimalJsLike | number | string | null
    diferencia?: DecimalNullableFilter<"Caja"> | Decimal | DecimalJsLike | number | string | null
    usuario_id_usuario?: IntFilter<"Caja"> | number
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }

  export type CajaOrderByWithRelationInput = {
    id_cierre_caja?: SortOrder
    fecha_apertura?: SortOrderInput | SortOrder
    fecha_cierre?: SortOrderInput | SortOrder
    monto_inicial?: SortOrderInput | SortOrder
    monto_final?: SortOrderInput | SortOrder
    total_ventas?: SortOrderInput | SortOrder
    diferencia?: SortOrderInput | SortOrder
    usuario_id_usuario?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
  }

  export type CajaWhereUniqueInput = Prisma.AtLeast<{
    id_cierre_caja?: number
    AND?: CajaWhereInput | CajaWhereInput[]
    OR?: CajaWhereInput[]
    NOT?: CajaWhereInput | CajaWhereInput[]
    fecha_apertura?: DateTimeNullableFilter<"Caja"> | Date | string | null
    fecha_cierre?: DateTimeNullableFilter<"Caja"> | Date | string | null
    monto_inicial?: DecimalNullableFilter<"Caja"> | Decimal | DecimalJsLike | number | string | null
    monto_final?: DecimalNullableFilter<"Caja"> | Decimal | DecimalJsLike | number | string | null
    total_ventas?: DecimalNullableFilter<"Caja"> | Decimal | DecimalJsLike | number | string | null
    diferencia?: DecimalNullableFilter<"Caja"> | Decimal | DecimalJsLike | number | string | null
    usuario_id_usuario?: IntFilter<"Caja"> | number
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }, "id_cierre_caja">

  export type CajaOrderByWithAggregationInput = {
    id_cierre_caja?: SortOrder
    fecha_apertura?: SortOrderInput | SortOrder
    fecha_cierre?: SortOrderInput | SortOrder
    monto_inicial?: SortOrderInput | SortOrder
    monto_final?: SortOrderInput | SortOrder
    total_ventas?: SortOrderInput | SortOrder
    diferencia?: SortOrderInput | SortOrder
    usuario_id_usuario?: SortOrder
    _count?: CajaCountOrderByAggregateInput
    _avg?: CajaAvgOrderByAggregateInput
    _max?: CajaMaxOrderByAggregateInput
    _min?: CajaMinOrderByAggregateInput
    _sum?: CajaSumOrderByAggregateInput
  }

  export type CajaScalarWhereWithAggregatesInput = {
    AND?: CajaScalarWhereWithAggregatesInput | CajaScalarWhereWithAggregatesInput[]
    OR?: CajaScalarWhereWithAggregatesInput[]
    NOT?: CajaScalarWhereWithAggregatesInput | CajaScalarWhereWithAggregatesInput[]
    id_cierre_caja?: IntWithAggregatesFilter<"Caja"> | number
    fecha_apertura?: DateTimeNullableWithAggregatesFilter<"Caja"> | Date | string | null
    fecha_cierre?: DateTimeNullableWithAggregatesFilter<"Caja"> | Date | string | null
    monto_inicial?: DecimalNullableWithAggregatesFilter<"Caja"> | Decimal | DecimalJsLike | number | string | null
    monto_final?: DecimalNullableWithAggregatesFilter<"Caja"> | Decimal | DecimalJsLike | number | string | null
    total_ventas?: DecimalNullableWithAggregatesFilter<"Caja"> | Decimal | DecimalJsLike | number | string | null
    diferencia?: DecimalNullableWithAggregatesFilter<"Caja"> | Decimal | DecimalJsLike | number | string | null
    usuario_id_usuario?: IntWithAggregatesFilter<"Caja"> | number
  }

  export type CategoriaWhereInput = {
    AND?: CategoriaWhereInput | CategoriaWhereInput[]
    OR?: CategoriaWhereInput[]
    NOT?: CategoriaWhereInput | CategoriaWhereInput[]
    id_categoria?: IntFilter<"Categoria"> | number
    nombre?: StringFilter<"Categoria"> | string
    productos?: ProductoListRelationFilter
  }

  export type CategoriaOrderByWithRelationInput = {
    id_categoria?: SortOrder
    nombre?: SortOrder
    productos?: ProductoOrderByRelationAggregateInput
    _relevance?: CategoriaOrderByRelevanceInput
  }

  export type CategoriaWhereUniqueInput = Prisma.AtLeast<{
    id_categoria?: number
    AND?: CategoriaWhereInput | CategoriaWhereInput[]
    OR?: CategoriaWhereInput[]
    NOT?: CategoriaWhereInput | CategoriaWhereInput[]
    nombre?: StringFilter<"Categoria"> | string
    productos?: ProductoListRelationFilter
  }, "id_categoria">

  export type CategoriaOrderByWithAggregationInput = {
    id_categoria?: SortOrder
    nombre?: SortOrder
    _count?: CategoriaCountOrderByAggregateInput
    _avg?: CategoriaAvgOrderByAggregateInput
    _max?: CategoriaMaxOrderByAggregateInput
    _min?: CategoriaMinOrderByAggregateInput
    _sum?: CategoriaSumOrderByAggregateInput
  }

  export type CategoriaScalarWhereWithAggregatesInput = {
    AND?: CategoriaScalarWhereWithAggregatesInput | CategoriaScalarWhereWithAggregatesInput[]
    OR?: CategoriaScalarWhereWithAggregatesInput[]
    NOT?: CategoriaScalarWhereWithAggregatesInput | CategoriaScalarWhereWithAggregatesInput[]
    id_categoria?: IntWithAggregatesFilter<"Categoria"> | number
    nombre?: StringWithAggregatesFilter<"Categoria"> | string
  }

  export type ClienteWhereInput = {
    AND?: ClienteWhereInput | ClienteWhereInput[]
    OR?: ClienteWhereInput[]
    NOT?: ClienteWhereInput | ClienteWhereInput[]
    id_cliente?: IntFilter<"Cliente"> | number
    cedula?: StringFilter<"Cliente"> | string
    nombre?: StringNullableFilter<"Cliente"> | string | null
    apellido?: StringNullableFilter<"Cliente"> | string | null
    telefono?: StringNullableFilter<"Cliente"> | string | null
    compras_semanales?: DecimalNullableFilter<"Cliente"> | Decimal | DecimalJsLike | number | string | null
    deuda_total?: DecimalNullableFilter<"Cliente"> | Decimal | DecimalJsLike | number | string | null
    ventas?: VentaListRelationFilter
  }

  export type ClienteOrderByWithRelationInput = {
    id_cliente?: SortOrder
    cedula?: SortOrder
    nombre?: SortOrderInput | SortOrder
    apellido?: SortOrderInput | SortOrder
    telefono?: SortOrderInput | SortOrder
    compras_semanales?: SortOrderInput | SortOrder
    deuda_total?: SortOrderInput | SortOrder
    ventas?: VentaOrderByRelationAggregateInput
    _relevance?: ClienteOrderByRelevanceInput
  }

  export type ClienteWhereUniqueInput = Prisma.AtLeast<{
    id_cliente?: number
    cedula?: string
    AND?: ClienteWhereInput | ClienteWhereInput[]
    OR?: ClienteWhereInput[]
    NOT?: ClienteWhereInput | ClienteWhereInput[]
    nombre?: StringNullableFilter<"Cliente"> | string | null
    apellido?: StringNullableFilter<"Cliente"> | string | null
    telefono?: StringNullableFilter<"Cliente"> | string | null
    compras_semanales?: DecimalNullableFilter<"Cliente"> | Decimal | DecimalJsLike | number | string | null
    deuda_total?: DecimalNullableFilter<"Cliente"> | Decimal | DecimalJsLike | number | string | null
    ventas?: VentaListRelationFilter
  }, "id_cliente" | "cedula">

  export type ClienteOrderByWithAggregationInput = {
    id_cliente?: SortOrder
    cedula?: SortOrder
    nombre?: SortOrderInput | SortOrder
    apellido?: SortOrderInput | SortOrder
    telefono?: SortOrderInput | SortOrder
    compras_semanales?: SortOrderInput | SortOrder
    deuda_total?: SortOrderInput | SortOrder
    _count?: ClienteCountOrderByAggregateInput
    _avg?: ClienteAvgOrderByAggregateInput
    _max?: ClienteMaxOrderByAggregateInput
    _min?: ClienteMinOrderByAggregateInput
    _sum?: ClienteSumOrderByAggregateInput
  }

  export type ClienteScalarWhereWithAggregatesInput = {
    AND?: ClienteScalarWhereWithAggregatesInput | ClienteScalarWhereWithAggregatesInput[]
    OR?: ClienteScalarWhereWithAggregatesInput[]
    NOT?: ClienteScalarWhereWithAggregatesInput | ClienteScalarWhereWithAggregatesInput[]
    id_cliente?: IntWithAggregatesFilter<"Cliente"> | number
    cedula?: StringWithAggregatesFilter<"Cliente"> | string
    nombre?: StringNullableWithAggregatesFilter<"Cliente"> | string | null
    apellido?: StringNullableWithAggregatesFilter<"Cliente"> | string | null
    telefono?: StringNullableWithAggregatesFilter<"Cliente"> | string | null
    compras_semanales?: DecimalNullableWithAggregatesFilter<"Cliente"> | Decimal | DecimalJsLike | number | string | null
    deuda_total?: DecimalNullableWithAggregatesFilter<"Cliente"> | Decimal | DecimalJsLike | number | string | null
  }

  export type CompraWhereInput = {
    AND?: CompraWhereInput | CompraWhereInput[]
    OR?: CompraWhereInput[]
    NOT?: CompraWhereInput | CompraWhereInput[]
    id_compra?: IntFilter<"Compra"> | number
    fecha_compra?: DateTimeNullableFilter<"Compra"> | Date | string | null
    estado?: StringNullableFilter<"Compra"> | string | null
    total?: DecimalNullableFilter<"Compra"> | Decimal | DecimalJsLike | number | string | null
    usuario_id_usuario?: IntFilter<"Compra"> | number
    proveedor_id_proveedor?: IntFilter<"Compra"> | number
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    proveedor?: XOR<ProveedorScalarRelationFilter, ProveedorWhereInput>
    compra_productos?: CompraProductoListRelationFilter
    factura_compra?: XOR<FacturaCompraNullableScalarRelationFilter, FacturaCompraWhereInput> | null
  }

  export type CompraOrderByWithRelationInput = {
    id_compra?: SortOrder
    fecha_compra?: SortOrderInput | SortOrder
    estado?: SortOrderInput | SortOrder
    total?: SortOrderInput | SortOrder
    usuario_id_usuario?: SortOrder
    proveedor_id_proveedor?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    proveedor?: ProveedorOrderByWithRelationInput
    compra_productos?: CompraProductoOrderByRelationAggregateInput
    factura_compra?: FacturaCompraOrderByWithRelationInput
    _relevance?: CompraOrderByRelevanceInput
  }

  export type CompraWhereUniqueInput = Prisma.AtLeast<{
    id_compra?: number
    AND?: CompraWhereInput | CompraWhereInput[]
    OR?: CompraWhereInput[]
    NOT?: CompraWhereInput | CompraWhereInput[]
    fecha_compra?: DateTimeNullableFilter<"Compra"> | Date | string | null
    estado?: StringNullableFilter<"Compra"> | string | null
    total?: DecimalNullableFilter<"Compra"> | Decimal | DecimalJsLike | number | string | null
    usuario_id_usuario?: IntFilter<"Compra"> | number
    proveedor_id_proveedor?: IntFilter<"Compra"> | number
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    proveedor?: XOR<ProveedorScalarRelationFilter, ProveedorWhereInput>
    compra_productos?: CompraProductoListRelationFilter
    factura_compra?: XOR<FacturaCompraNullableScalarRelationFilter, FacturaCompraWhereInput> | null
  }, "id_compra">

  export type CompraOrderByWithAggregationInput = {
    id_compra?: SortOrder
    fecha_compra?: SortOrderInput | SortOrder
    estado?: SortOrderInput | SortOrder
    total?: SortOrderInput | SortOrder
    usuario_id_usuario?: SortOrder
    proveedor_id_proveedor?: SortOrder
    _count?: CompraCountOrderByAggregateInput
    _avg?: CompraAvgOrderByAggregateInput
    _max?: CompraMaxOrderByAggregateInput
    _min?: CompraMinOrderByAggregateInput
    _sum?: CompraSumOrderByAggregateInput
  }

  export type CompraScalarWhereWithAggregatesInput = {
    AND?: CompraScalarWhereWithAggregatesInput | CompraScalarWhereWithAggregatesInput[]
    OR?: CompraScalarWhereWithAggregatesInput[]
    NOT?: CompraScalarWhereWithAggregatesInput | CompraScalarWhereWithAggregatesInput[]
    id_compra?: IntWithAggregatesFilter<"Compra"> | number
    fecha_compra?: DateTimeNullableWithAggregatesFilter<"Compra"> | Date | string | null
    estado?: StringNullableWithAggregatesFilter<"Compra"> | string | null
    total?: DecimalNullableWithAggregatesFilter<"Compra"> | Decimal | DecimalJsLike | number | string | null
    usuario_id_usuario?: IntWithAggregatesFilter<"Compra"> | number
    proveedor_id_proveedor?: IntWithAggregatesFilter<"Compra"> | number
  }

  export type CompraProductoWhereInput = {
    AND?: CompraProductoWhereInput | CompraProductoWhereInput[]
    OR?: CompraProductoWhereInput[]
    NOT?: CompraProductoWhereInput | CompraProductoWhereInput[]
    compra_id_compra?: IntFilter<"CompraProducto"> | number
    producto_id_producto?: IntFilter<"CompraProducto"> | number
    precio_unitario?: DecimalFilter<"CompraProducto"> | Decimal | DecimalJsLike | number | string
    cantidad?: DecimalFilter<"CompraProducto"> | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFilter<"CompraProducto"> | Decimal | DecimalJsLike | number | string
    compra?: XOR<CompraScalarRelationFilter, CompraWhereInput>
    producto?: XOR<ProductoScalarRelationFilter, ProductoWhereInput>
  }

  export type CompraProductoOrderByWithRelationInput = {
    compra_id_compra?: SortOrder
    producto_id_producto?: SortOrder
    precio_unitario?: SortOrder
    cantidad?: SortOrder
    subtotal?: SortOrder
    compra?: CompraOrderByWithRelationInput
    producto?: ProductoOrderByWithRelationInput
  }

  export type CompraProductoWhereUniqueInput = Prisma.AtLeast<{
    compra_id_compra_producto_id_producto?: CompraProductoCompra_id_compraProducto_id_productoCompoundUniqueInput
    AND?: CompraProductoWhereInput | CompraProductoWhereInput[]
    OR?: CompraProductoWhereInput[]
    NOT?: CompraProductoWhereInput | CompraProductoWhereInput[]
    compra_id_compra?: IntFilter<"CompraProducto"> | number
    producto_id_producto?: IntFilter<"CompraProducto"> | number
    precio_unitario?: DecimalFilter<"CompraProducto"> | Decimal | DecimalJsLike | number | string
    cantidad?: DecimalFilter<"CompraProducto"> | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFilter<"CompraProducto"> | Decimal | DecimalJsLike | number | string
    compra?: XOR<CompraScalarRelationFilter, CompraWhereInput>
    producto?: XOR<ProductoScalarRelationFilter, ProductoWhereInput>
  }, "compra_id_compra_producto_id_producto">

  export type CompraProductoOrderByWithAggregationInput = {
    compra_id_compra?: SortOrder
    producto_id_producto?: SortOrder
    precio_unitario?: SortOrder
    cantidad?: SortOrder
    subtotal?: SortOrder
    _count?: CompraProductoCountOrderByAggregateInput
    _avg?: CompraProductoAvgOrderByAggregateInput
    _max?: CompraProductoMaxOrderByAggregateInput
    _min?: CompraProductoMinOrderByAggregateInput
    _sum?: CompraProductoSumOrderByAggregateInput
  }

  export type CompraProductoScalarWhereWithAggregatesInput = {
    AND?: CompraProductoScalarWhereWithAggregatesInput | CompraProductoScalarWhereWithAggregatesInput[]
    OR?: CompraProductoScalarWhereWithAggregatesInput[]
    NOT?: CompraProductoScalarWhereWithAggregatesInput | CompraProductoScalarWhereWithAggregatesInput[]
    compra_id_compra?: IntWithAggregatesFilter<"CompraProducto"> | number
    producto_id_producto?: IntWithAggregatesFilter<"CompraProducto"> | number
    precio_unitario?: DecimalWithAggregatesFilter<"CompraProducto"> | Decimal | DecimalJsLike | number | string
    cantidad?: DecimalWithAggregatesFilter<"CompraProducto"> | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalWithAggregatesFilter<"CompraProducto"> | Decimal | DecimalJsLike | number | string
  }

  export type FacturaCompraWhereInput = {
    AND?: FacturaCompraWhereInput | FacturaCompraWhereInput[]
    OR?: FacturaCompraWhereInput[]
    NOT?: FacturaCompraWhereInput | FacturaCompraWhereInput[]
    id_factura?: IntFilter<"FacturaCompra"> | number
    fecha?: DateTimeNullableFilter<"FacturaCompra"> | Date | string | null
    subtotal?: DecimalNullableFilter<"FacturaCompra"> | Decimal | DecimalJsLike | number | string | null
    impuestos?: DecimalNullableFilter<"FacturaCompra"> | Decimal | DecimalJsLike | number | string | null
    total?: DecimalNullableFilter<"FacturaCompra"> | Decimal | DecimalJsLike | number | string | null
    compra_id_compra?: IntFilter<"FacturaCompra"> | number
    compra?: XOR<CompraScalarRelationFilter, CompraWhereInput>
  }

  export type FacturaCompraOrderByWithRelationInput = {
    id_factura?: SortOrder
    fecha?: SortOrderInput | SortOrder
    subtotal?: SortOrderInput | SortOrder
    impuestos?: SortOrderInput | SortOrder
    total?: SortOrderInput | SortOrder
    compra_id_compra?: SortOrder
    compra?: CompraOrderByWithRelationInput
  }

  export type FacturaCompraWhereUniqueInput = Prisma.AtLeast<{
    id_factura?: number
    compra_id_compra?: number
    AND?: FacturaCompraWhereInput | FacturaCompraWhereInput[]
    OR?: FacturaCompraWhereInput[]
    NOT?: FacturaCompraWhereInput | FacturaCompraWhereInput[]
    fecha?: DateTimeNullableFilter<"FacturaCompra"> | Date | string | null
    subtotal?: DecimalNullableFilter<"FacturaCompra"> | Decimal | DecimalJsLike | number | string | null
    impuestos?: DecimalNullableFilter<"FacturaCompra"> | Decimal | DecimalJsLike | number | string | null
    total?: DecimalNullableFilter<"FacturaCompra"> | Decimal | DecimalJsLike | number | string | null
    compra?: XOR<CompraScalarRelationFilter, CompraWhereInput>
  }, "id_factura" | "compra_id_compra">

  export type FacturaCompraOrderByWithAggregationInput = {
    id_factura?: SortOrder
    fecha?: SortOrderInput | SortOrder
    subtotal?: SortOrderInput | SortOrder
    impuestos?: SortOrderInput | SortOrder
    total?: SortOrderInput | SortOrder
    compra_id_compra?: SortOrder
    _count?: FacturaCompraCountOrderByAggregateInput
    _avg?: FacturaCompraAvgOrderByAggregateInput
    _max?: FacturaCompraMaxOrderByAggregateInput
    _min?: FacturaCompraMinOrderByAggregateInput
    _sum?: FacturaCompraSumOrderByAggregateInput
  }

  export type FacturaCompraScalarWhereWithAggregatesInput = {
    AND?: FacturaCompraScalarWhereWithAggregatesInput | FacturaCompraScalarWhereWithAggregatesInput[]
    OR?: FacturaCompraScalarWhereWithAggregatesInput[]
    NOT?: FacturaCompraScalarWhereWithAggregatesInput | FacturaCompraScalarWhereWithAggregatesInput[]
    id_factura?: IntWithAggregatesFilter<"FacturaCompra"> | number
    fecha?: DateTimeNullableWithAggregatesFilter<"FacturaCompra"> | Date | string | null
    subtotal?: DecimalNullableWithAggregatesFilter<"FacturaCompra"> | Decimal | DecimalJsLike | number | string | null
    impuestos?: DecimalNullableWithAggregatesFilter<"FacturaCompra"> | Decimal | DecimalJsLike | number | string | null
    total?: DecimalNullableWithAggregatesFilter<"FacturaCompra"> | Decimal | DecimalJsLike | number | string | null
    compra_id_compra?: IntWithAggregatesFilter<"FacturaCompra"> | number
  }

  export type FacturaVentaWhereInput = {
    AND?: FacturaVentaWhereInput | FacturaVentaWhereInput[]
    OR?: FacturaVentaWhereInput[]
    NOT?: FacturaVentaWhereInput | FacturaVentaWhereInput[]
    id_factura?: IntFilter<"FacturaVenta"> | number
    fecha?: DateTimeNullableFilter<"FacturaVenta"> | Date | string | null
    subtotal?: DecimalNullableFilter<"FacturaVenta"> | Decimal | DecimalJsLike | number | string | null
    impuestos?: DecimalNullableFilter<"FacturaVenta"> | Decimal | DecimalJsLike | number | string | null
    total?: DecimalNullableFilter<"FacturaVenta"> | Decimal | DecimalJsLike | number | string | null
    venta_id_venta?: IntFilter<"FacturaVenta"> | number
    venta?: XOR<VentaScalarRelationFilter, VentaWhereInput>
  }

  export type FacturaVentaOrderByWithRelationInput = {
    id_factura?: SortOrder
    fecha?: SortOrderInput | SortOrder
    subtotal?: SortOrderInput | SortOrder
    impuestos?: SortOrderInput | SortOrder
    total?: SortOrderInput | SortOrder
    venta_id_venta?: SortOrder
    venta?: VentaOrderByWithRelationInput
  }

  export type FacturaVentaWhereUniqueInput = Prisma.AtLeast<{
    id_factura?: number
    venta_id_venta?: number
    AND?: FacturaVentaWhereInput | FacturaVentaWhereInput[]
    OR?: FacturaVentaWhereInput[]
    NOT?: FacturaVentaWhereInput | FacturaVentaWhereInput[]
    fecha?: DateTimeNullableFilter<"FacturaVenta"> | Date | string | null
    subtotal?: DecimalNullableFilter<"FacturaVenta"> | Decimal | DecimalJsLike | number | string | null
    impuestos?: DecimalNullableFilter<"FacturaVenta"> | Decimal | DecimalJsLike | number | string | null
    total?: DecimalNullableFilter<"FacturaVenta"> | Decimal | DecimalJsLike | number | string | null
    venta?: XOR<VentaScalarRelationFilter, VentaWhereInput>
  }, "id_factura" | "venta_id_venta">

  export type FacturaVentaOrderByWithAggregationInput = {
    id_factura?: SortOrder
    fecha?: SortOrderInput | SortOrder
    subtotal?: SortOrderInput | SortOrder
    impuestos?: SortOrderInput | SortOrder
    total?: SortOrderInput | SortOrder
    venta_id_venta?: SortOrder
    _count?: FacturaVentaCountOrderByAggregateInput
    _avg?: FacturaVentaAvgOrderByAggregateInput
    _max?: FacturaVentaMaxOrderByAggregateInput
    _min?: FacturaVentaMinOrderByAggregateInput
    _sum?: FacturaVentaSumOrderByAggregateInput
  }

  export type FacturaVentaScalarWhereWithAggregatesInput = {
    AND?: FacturaVentaScalarWhereWithAggregatesInput | FacturaVentaScalarWhereWithAggregatesInput[]
    OR?: FacturaVentaScalarWhereWithAggregatesInput[]
    NOT?: FacturaVentaScalarWhereWithAggregatesInput | FacturaVentaScalarWhereWithAggregatesInput[]
    id_factura?: IntWithAggregatesFilter<"FacturaVenta"> | number
    fecha?: DateTimeNullableWithAggregatesFilter<"FacturaVenta"> | Date | string | null
    subtotal?: DecimalNullableWithAggregatesFilter<"FacturaVenta"> | Decimal | DecimalJsLike | number | string | null
    impuestos?: DecimalNullableWithAggregatesFilter<"FacturaVenta"> | Decimal | DecimalJsLike | number | string | null
    total?: DecimalNullableWithAggregatesFilter<"FacturaVenta"> | Decimal | DecimalJsLike | number | string | null
    venta_id_venta?: IntWithAggregatesFilter<"FacturaVenta"> | number
  }

  export type MovimientoInventarioWhereInput = {
    AND?: MovimientoInventarioWhereInput | MovimientoInventarioWhereInput[]
    OR?: MovimientoInventarioWhereInput[]
    NOT?: MovimientoInventarioWhereInput | MovimientoInventarioWhereInput[]
    id_movimiento?: IntFilter<"MovimientoInventario"> | number
    tipo_movimiento?: StringNullableFilter<"MovimientoInventario"> | string | null
    fecha_movimiento?: DateTimeNullableFilter<"MovimientoInventario"> | Date | string | null
    cantidad?: DecimalNullableFilter<"MovimientoInventario"> | Decimal | DecimalJsLike | number | string | null
    producto_id_producto?: IntFilter<"MovimientoInventario"> | number
    producto?: XOR<ProductoScalarRelationFilter, ProductoWhereInput>
  }

  export type MovimientoInventarioOrderByWithRelationInput = {
    id_movimiento?: SortOrder
    tipo_movimiento?: SortOrderInput | SortOrder
    fecha_movimiento?: SortOrderInput | SortOrder
    cantidad?: SortOrderInput | SortOrder
    producto_id_producto?: SortOrder
    producto?: ProductoOrderByWithRelationInput
    _relevance?: MovimientoInventarioOrderByRelevanceInput
  }

  export type MovimientoInventarioWhereUniqueInput = Prisma.AtLeast<{
    id_movimiento?: number
    AND?: MovimientoInventarioWhereInput | MovimientoInventarioWhereInput[]
    OR?: MovimientoInventarioWhereInput[]
    NOT?: MovimientoInventarioWhereInput | MovimientoInventarioWhereInput[]
    tipo_movimiento?: StringNullableFilter<"MovimientoInventario"> | string | null
    fecha_movimiento?: DateTimeNullableFilter<"MovimientoInventario"> | Date | string | null
    cantidad?: DecimalNullableFilter<"MovimientoInventario"> | Decimal | DecimalJsLike | number | string | null
    producto_id_producto?: IntFilter<"MovimientoInventario"> | number
    producto?: XOR<ProductoScalarRelationFilter, ProductoWhereInput>
  }, "id_movimiento">

  export type MovimientoInventarioOrderByWithAggregationInput = {
    id_movimiento?: SortOrder
    tipo_movimiento?: SortOrderInput | SortOrder
    fecha_movimiento?: SortOrderInput | SortOrder
    cantidad?: SortOrderInput | SortOrder
    producto_id_producto?: SortOrder
    _count?: MovimientoInventarioCountOrderByAggregateInput
    _avg?: MovimientoInventarioAvgOrderByAggregateInput
    _max?: MovimientoInventarioMaxOrderByAggregateInput
    _min?: MovimientoInventarioMinOrderByAggregateInput
    _sum?: MovimientoInventarioSumOrderByAggregateInput
  }

  export type MovimientoInventarioScalarWhereWithAggregatesInput = {
    AND?: MovimientoInventarioScalarWhereWithAggregatesInput | MovimientoInventarioScalarWhereWithAggregatesInput[]
    OR?: MovimientoInventarioScalarWhereWithAggregatesInput[]
    NOT?: MovimientoInventarioScalarWhereWithAggregatesInput | MovimientoInventarioScalarWhereWithAggregatesInput[]
    id_movimiento?: IntWithAggregatesFilter<"MovimientoInventario"> | number
    tipo_movimiento?: StringNullableWithAggregatesFilter<"MovimientoInventario"> | string | null
    fecha_movimiento?: DateTimeNullableWithAggregatesFilter<"MovimientoInventario"> | Date | string | null
    cantidad?: DecimalNullableWithAggregatesFilter<"MovimientoInventario"> | Decimal | DecimalJsLike | number | string | null
    producto_id_producto?: IntWithAggregatesFilter<"MovimientoInventario"> | number
  }

  export type ProductoWhereInput = {
    AND?: ProductoWhereInput | ProductoWhereInput[]
    OR?: ProductoWhereInput[]
    NOT?: ProductoWhereInput | ProductoWhereInput[]
    id_producto?: IntFilter<"Producto"> | number
    nombre_producto?: StringNullableFilter<"Producto"> | string | null
    descripcion?: StringNullableFilter<"Producto"> | string | null
    stock?: DecimalNullableFilter<"Producto"> | Decimal | DecimalJsLike | number | string | null
    nivel_alerta?: StringNullableFilter<"Producto"> | string | null
    categoria_id_categoria?: IntFilter<"Producto"> | number
    categoria?: XOR<CategoriaScalarRelationFilter, CategoriaWhereInput>
    compra_productos?: CompraProductoListRelationFilter
    venta_productos?: VentaProductoListRelationFilter
    movimientos?: MovimientoInventarioListRelationFilter
  }

  export type ProductoOrderByWithRelationInput = {
    id_producto?: SortOrder
    nombre_producto?: SortOrderInput | SortOrder
    descripcion?: SortOrderInput | SortOrder
    stock?: SortOrderInput | SortOrder
    nivel_alerta?: SortOrderInput | SortOrder
    categoria_id_categoria?: SortOrder
    categoria?: CategoriaOrderByWithRelationInput
    compra_productos?: CompraProductoOrderByRelationAggregateInput
    venta_productos?: VentaProductoOrderByRelationAggregateInput
    movimientos?: MovimientoInventarioOrderByRelationAggregateInput
    _relevance?: ProductoOrderByRelevanceInput
  }

  export type ProductoWhereUniqueInput = Prisma.AtLeast<{
    id_producto?: number
    AND?: ProductoWhereInput | ProductoWhereInput[]
    OR?: ProductoWhereInput[]
    NOT?: ProductoWhereInput | ProductoWhereInput[]
    nombre_producto?: StringNullableFilter<"Producto"> | string | null
    descripcion?: StringNullableFilter<"Producto"> | string | null
    stock?: DecimalNullableFilter<"Producto"> | Decimal | DecimalJsLike | number | string | null
    nivel_alerta?: StringNullableFilter<"Producto"> | string | null
    categoria_id_categoria?: IntFilter<"Producto"> | number
    categoria?: XOR<CategoriaScalarRelationFilter, CategoriaWhereInput>
    compra_productos?: CompraProductoListRelationFilter
    venta_productos?: VentaProductoListRelationFilter
    movimientos?: MovimientoInventarioListRelationFilter
  }, "id_producto">

  export type ProductoOrderByWithAggregationInput = {
    id_producto?: SortOrder
    nombre_producto?: SortOrderInput | SortOrder
    descripcion?: SortOrderInput | SortOrder
    stock?: SortOrderInput | SortOrder
    nivel_alerta?: SortOrderInput | SortOrder
    categoria_id_categoria?: SortOrder
    _count?: ProductoCountOrderByAggregateInput
    _avg?: ProductoAvgOrderByAggregateInput
    _max?: ProductoMaxOrderByAggregateInput
    _min?: ProductoMinOrderByAggregateInput
    _sum?: ProductoSumOrderByAggregateInput
  }

  export type ProductoScalarWhereWithAggregatesInput = {
    AND?: ProductoScalarWhereWithAggregatesInput | ProductoScalarWhereWithAggregatesInput[]
    OR?: ProductoScalarWhereWithAggregatesInput[]
    NOT?: ProductoScalarWhereWithAggregatesInput | ProductoScalarWhereWithAggregatesInput[]
    id_producto?: IntWithAggregatesFilter<"Producto"> | number
    nombre_producto?: StringNullableWithAggregatesFilter<"Producto"> | string | null
    descripcion?: StringNullableWithAggregatesFilter<"Producto"> | string | null
    stock?: DecimalNullableWithAggregatesFilter<"Producto"> | Decimal | DecimalJsLike | number | string | null
    nivel_alerta?: StringNullableWithAggregatesFilter<"Producto"> | string | null
    categoria_id_categoria?: IntWithAggregatesFilter<"Producto"> | number
  }

  export type ProveedorWhereInput = {
    AND?: ProveedorWhereInput | ProveedorWhereInput[]
    OR?: ProveedorWhereInput[]
    NOT?: ProveedorWhereInput | ProveedorWhereInput[]
    id_proveedor?: IntFilter<"Proveedor"> | number
    nombre?: StringNullableFilter<"Proveedor"> | string | null
    telefono?: StringNullableFilter<"Proveedor"> | string | null
    direccion?: StringNullableFilter<"Proveedor"> | string | null
    compras?: CompraListRelationFilter
  }

  export type ProveedorOrderByWithRelationInput = {
    id_proveedor?: SortOrder
    nombre?: SortOrderInput | SortOrder
    telefono?: SortOrderInput | SortOrder
    direccion?: SortOrderInput | SortOrder
    compras?: CompraOrderByRelationAggregateInput
    _relevance?: ProveedorOrderByRelevanceInput
  }

  export type ProveedorWhereUniqueInput = Prisma.AtLeast<{
    id_proveedor?: number
    AND?: ProveedorWhereInput | ProveedorWhereInput[]
    OR?: ProveedorWhereInput[]
    NOT?: ProveedorWhereInput | ProveedorWhereInput[]
    nombre?: StringNullableFilter<"Proveedor"> | string | null
    telefono?: StringNullableFilter<"Proveedor"> | string | null
    direccion?: StringNullableFilter<"Proveedor"> | string | null
    compras?: CompraListRelationFilter
  }, "id_proveedor">

  export type ProveedorOrderByWithAggregationInput = {
    id_proveedor?: SortOrder
    nombre?: SortOrderInput | SortOrder
    telefono?: SortOrderInput | SortOrder
    direccion?: SortOrderInput | SortOrder
    _count?: ProveedorCountOrderByAggregateInput
    _avg?: ProveedorAvgOrderByAggregateInput
    _max?: ProveedorMaxOrderByAggregateInput
    _min?: ProveedorMinOrderByAggregateInput
    _sum?: ProveedorSumOrderByAggregateInput
  }

  export type ProveedorScalarWhereWithAggregatesInput = {
    AND?: ProveedorScalarWhereWithAggregatesInput | ProveedorScalarWhereWithAggregatesInput[]
    OR?: ProveedorScalarWhereWithAggregatesInput[]
    NOT?: ProveedorScalarWhereWithAggregatesInput | ProveedorScalarWhereWithAggregatesInput[]
    id_proveedor?: IntWithAggregatesFilter<"Proveedor"> | number
    nombre?: StringNullableWithAggregatesFilter<"Proveedor"> | string | null
    telefono?: StringNullableWithAggregatesFilter<"Proveedor"> | string | null
    direccion?: StringNullableWithAggregatesFilter<"Proveedor"> | string | null
  }

  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id_usuario?: IntFilter<"Usuario"> | number
    usuario?: StringNullableFilter<"Usuario"> | string | null
    contraseña?: StringNullableFilter<"Usuario"> | string | null
    rol?: StringNullableFilter<"Usuario"> | string | null
    ventas?: VentaListRelationFilter
    compras?: CompraListRelationFilter
    cajas?: CajaListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    id_usuario?: SortOrder
    usuario?: SortOrderInput | SortOrder
    contraseña?: SortOrderInput | SortOrder
    rol?: SortOrderInput | SortOrder
    ventas?: VentaOrderByRelationAggregateInput
    compras?: CompraOrderByRelationAggregateInput
    cajas?: CajaOrderByRelationAggregateInput
    _relevance?: UsuarioOrderByRelevanceInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id_usuario?: number
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    usuario?: StringNullableFilter<"Usuario"> | string | null
    contraseña?: StringNullableFilter<"Usuario"> | string | null
    rol?: StringNullableFilter<"Usuario"> | string | null
    ventas?: VentaListRelationFilter
    compras?: CompraListRelationFilter
    cajas?: CajaListRelationFilter
  }, "id_usuario">

  export type UsuarioOrderByWithAggregationInput = {
    id_usuario?: SortOrder
    usuario?: SortOrderInput | SortOrder
    contraseña?: SortOrderInput | SortOrder
    rol?: SortOrderInput | SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id_usuario?: IntWithAggregatesFilter<"Usuario"> | number
    usuario?: StringNullableWithAggregatesFilter<"Usuario"> | string | null
    contraseña?: StringNullableWithAggregatesFilter<"Usuario"> | string | null
    rol?: StringNullableWithAggregatesFilter<"Usuario"> | string | null
  }

  export type VentaWhereInput = {
    AND?: VentaWhereInput | VentaWhereInput[]
    OR?: VentaWhereInput[]
    NOT?: VentaWhereInput | VentaWhereInput[]
    id_venta?: IntFilter<"Venta"> | number
    tipo_venta?: StringNullableFilter<"Venta"> | string | null
    estado?: StringNullableFilter<"Venta"> | string | null
    cliente_id_cliente?: IntFilter<"Venta"> | number
    cliente_cedula?: StringFilter<"Venta"> | string
    usuario_id_usuario?: IntFilter<"Venta"> | number
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    venta_productos?: VentaProductoListRelationFilter
    factura_venta?: XOR<FacturaVentaNullableScalarRelationFilter, FacturaVentaWhereInput> | null
  }

  export type VentaOrderByWithRelationInput = {
    id_venta?: SortOrder
    tipo_venta?: SortOrderInput | SortOrder
    estado?: SortOrderInput | SortOrder
    cliente_id_cliente?: SortOrder
    cliente_cedula?: SortOrder
    usuario_id_usuario?: SortOrder
    cliente?: ClienteOrderByWithRelationInput
    usuario?: UsuarioOrderByWithRelationInput
    venta_productos?: VentaProductoOrderByRelationAggregateInput
    factura_venta?: FacturaVentaOrderByWithRelationInput
    _relevance?: VentaOrderByRelevanceInput
  }

  export type VentaWhereUniqueInput = Prisma.AtLeast<{
    id_venta?: number
    AND?: VentaWhereInput | VentaWhereInput[]
    OR?: VentaWhereInput[]
    NOT?: VentaWhereInput | VentaWhereInput[]
    tipo_venta?: StringNullableFilter<"Venta"> | string | null
    estado?: StringNullableFilter<"Venta"> | string | null
    cliente_id_cliente?: IntFilter<"Venta"> | number
    cliente_cedula?: StringFilter<"Venta"> | string
    usuario_id_usuario?: IntFilter<"Venta"> | number
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    venta_productos?: VentaProductoListRelationFilter
    factura_venta?: XOR<FacturaVentaNullableScalarRelationFilter, FacturaVentaWhereInput> | null
  }, "id_venta">

  export type VentaOrderByWithAggregationInput = {
    id_venta?: SortOrder
    tipo_venta?: SortOrderInput | SortOrder
    estado?: SortOrderInput | SortOrder
    cliente_id_cliente?: SortOrder
    cliente_cedula?: SortOrder
    usuario_id_usuario?: SortOrder
    _count?: VentaCountOrderByAggregateInput
    _avg?: VentaAvgOrderByAggregateInput
    _max?: VentaMaxOrderByAggregateInput
    _min?: VentaMinOrderByAggregateInput
    _sum?: VentaSumOrderByAggregateInput
  }

  export type VentaScalarWhereWithAggregatesInput = {
    AND?: VentaScalarWhereWithAggregatesInput | VentaScalarWhereWithAggregatesInput[]
    OR?: VentaScalarWhereWithAggregatesInput[]
    NOT?: VentaScalarWhereWithAggregatesInput | VentaScalarWhereWithAggregatesInput[]
    id_venta?: IntWithAggregatesFilter<"Venta"> | number
    tipo_venta?: StringNullableWithAggregatesFilter<"Venta"> | string | null
    estado?: StringNullableWithAggregatesFilter<"Venta"> | string | null
    cliente_id_cliente?: IntWithAggregatesFilter<"Venta"> | number
    cliente_cedula?: StringWithAggregatesFilter<"Venta"> | string
    usuario_id_usuario?: IntWithAggregatesFilter<"Venta"> | number
  }

  export type VentaProductoWhereInput = {
    AND?: VentaProductoWhereInput | VentaProductoWhereInput[]
    OR?: VentaProductoWhereInput[]
    NOT?: VentaProductoWhereInput | VentaProductoWhereInput[]
    venta_id_venta?: IntFilter<"VentaProducto"> | number
    producto_id_producto?: IntFilter<"VentaProducto"> | number
    cantidad?: DecimalFilter<"VentaProducto"> | Decimal | DecimalJsLike | number | string
    precio_unitario?: DecimalFilter<"VentaProducto"> | Decimal | DecimalJsLike | number | string
    venta?: XOR<VentaScalarRelationFilter, VentaWhereInput>
    producto?: XOR<ProductoScalarRelationFilter, ProductoWhereInput>
  }

  export type VentaProductoOrderByWithRelationInput = {
    venta_id_venta?: SortOrder
    producto_id_producto?: SortOrder
    cantidad?: SortOrder
    precio_unitario?: SortOrder
    venta?: VentaOrderByWithRelationInput
    producto?: ProductoOrderByWithRelationInput
  }

  export type VentaProductoWhereUniqueInput = Prisma.AtLeast<{
    venta_id_venta_producto_id_producto?: VentaProductoVenta_id_ventaProducto_id_productoCompoundUniqueInput
    AND?: VentaProductoWhereInput | VentaProductoWhereInput[]
    OR?: VentaProductoWhereInput[]
    NOT?: VentaProductoWhereInput | VentaProductoWhereInput[]
    venta_id_venta?: IntFilter<"VentaProducto"> | number
    producto_id_producto?: IntFilter<"VentaProducto"> | number
    cantidad?: DecimalFilter<"VentaProducto"> | Decimal | DecimalJsLike | number | string
    precio_unitario?: DecimalFilter<"VentaProducto"> | Decimal | DecimalJsLike | number | string
    venta?: XOR<VentaScalarRelationFilter, VentaWhereInput>
    producto?: XOR<ProductoScalarRelationFilter, ProductoWhereInput>
  }, "venta_id_venta_producto_id_producto">

  export type VentaProductoOrderByWithAggregationInput = {
    venta_id_venta?: SortOrder
    producto_id_producto?: SortOrder
    cantidad?: SortOrder
    precio_unitario?: SortOrder
    _count?: VentaProductoCountOrderByAggregateInput
    _avg?: VentaProductoAvgOrderByAggregateInput
    _max?: VentaProductoMaxOrderByAggregateInput
    _min?: VentaProductoMinOrderByAggregateInput
    _sum?: VentaProductoSumOrderByAggregateInput
  }

  export type VentaProductoScalarWhereWithAggregatesInput = {
    AND?: VentaProductoScalarWhereWithAggregatesInput | VentaProductoScalarWhereWithAggregatesInput[]
    OR?: VentaProductoScalarWhereWithAggregatesInput[]
    NOT?: VentaProductoScalarWhereWithAggregatesInput | VentaProductoScalarWhereWithAggregatesInput[]
    venta_id_venta?: IntWithAggregatesFilter<"VentaProducto"> | number
    producto_id_producto?: IntWithAggregatesFilter<"VentaProducto"> | number
    cantidad?: DecimalWithAggregatesFilter<"VentaProducto"> | Decimal | DecimalJsLike | number | string
    precio_unitario?: DecimalWithAggregatesFilter<"VentaProducto"> | Decimal | DecimalJsLike | number | string
  }

  export type CajaCreateInput = {
    fecha_apertura?: Date | string | null
    fecha_cierre?: Date | string | null
    monto_inicial?: Decimal | DecimalJsLike | number | string | null
    monto_final?: Decimal | DecimalJsLike | number | string | null
    total_ventas?: Decimal | DecimalJsLike | number | string | null
    diferencia?: Decimal | DecimalJsLike | number | string | null
    usuario: UsuarioCreateNestedOneWithoutCajasInput
  }

  export type CajaUncheckedCreateInput = {
    id_cierre_caja?: number
    fecha_apertura?: Date | string | null
    fecha_cierre?: Date | string | null
    monto_inicial?: Decimal | DecimalJsLike | number | string | null
    monto_final?: Decimal | DecimalJsLike | number | string | null
    total_ventas?: Decimal | DecimalJsLike | number | string | null
    diferencia?: Decimal | DecimalJsLike | number | string | null
    usuario_id_usuario: number
  }

  export type CajaUpdateInput = {
    fecha_apertura?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_cierre?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    monto_inicial?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    monto_final?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    total_ventas?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    diferencia?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    usuario?: UsuarioUpdateOneRequiredWithoutCajasNestedInput
  }

  export type CajaUncheckedUpdateInput = {
    id_cierre_caja?: IntFieldUpdateOperationsInput | number
    fecha_apertura?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_cierre?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    monto_inicial?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    monto_final?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    total_ventas?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    diferencia?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    usuario_id_usuario?: IntFieldUpdateOperationsInput | number
  }

  export type CajaCreateManyInput = {
    id_cierre_caja?: number
    fecha_apertura?: Date | string | null
    fecha_cierre?: Date | string | null
    monto_inicial?: Decimal | DecimalJsLike | number | string | null
    monto_final?: Decimal | DecimalJsLike | number | string | null
    total_ventas?: Decimal | DecimalJsLike | number | string | null
    diferencia?: Decimal | DecimalJsLike | number | string | null
    usuario_id_usuario: number
  }

  export type CajaUpdateManyMutationInput = {
    fecha_apertura?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_cierre?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    monto_inicial?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    monto_final?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    total_ventas?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    diferencia?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type CajaUncheckedUpdateManyInput = {
    id_cierre_caja?: IntFieldUpdateOperationsInput | number
    fecha_apertura?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_cierre?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    monto_inicial?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    monto_final?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    total_ventas?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    diferencia?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    usuario_id_usuario?: IntFieldUpdateOperationsInput | number
  }

  export type CategoriaCreateInput = {
    nombre: string
    productos?: ProductoCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriaUncheckedCreateInput = {
    id_categoria?: number
    nombre: string
    productos?: ProductoUncheckedCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriaUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    productos?: ProductoUpdateManyWithoutCategoriaNestedInput
  }

  export type CategoriaUncheckedUpdateInput = {
    id_categoria?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    productos?: ProductoUncheckedUpdateManyWithoutCategoriaNestedInput
  }

  export type CategoriaCreateManyInput = {
    id_categoria?: number
    nombre: string
  }

  export type CategoriaUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type CategoriaUncheckedUpdateManyInput = {
    id_categoria?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type ClienteCreateInput = {
    cedula: string
    nombre?: string | null
    apellido?: string | null
    telefono?: string | null
    compras_semanales?: Decimal | DecimalJsLike | number | string | null
    deuda_total?: Decimal | DecimalJsLike | number | string | null
    ventas?: VentaCreateNestedManyWithoutClienteInput
  }

  export type ClienteUncheckedCreateInput = {
    id_cliente?: number
    cedula: string
    nombre?: string | null
    apellido?: string | null
    telefono?: string | null
    compras_semanales?: Decimal | DecimalJsLike | number | string | null
    deuda_total?: Decimal | DecimalJsLike | number | string | null
    ventas?: VentaUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClienteUpdateInput = {
    cedula?: StringFieldUpdateOperationsInput | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    apellido?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    compras_semanales?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    deuda_total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    ventas?: VentaUpdateManyWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateInput = {
    id_cliente?: IntFieldUpdateOperationsInput | number
    cedula?: StringFieldUpdateOperationsInput | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    apellido?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    compras_semanales?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    deuda_total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    ventas?: VentaUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type ClienteCreateManyInput = {
    id_cliente?: number
    cedula: string
    nombre?: string | null
    apellido?: string | null
    telefono?: string | null
    compras_semanales?: Decimal | DecimalJsLike | number | string | null
    deuda_total?: Decimal | DecimalJsLike | number | string | null
  }

  export type ClienteUpdateManyMutationInput = {
    cedula?: StringFieldUpdateOperationsInput | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    apellido?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    compras_semanales?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    deuda_total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type ClienteUncheckedUpdateManyInput = {
    id_cliente?: IntFieldUpdateOperationsInput | number
    cedula?: StringFieldUpdateOperationsInput | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    apellido?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    compras_semanales?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    deuda_total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type CompraCreateInput = {
    fecha_compra?: Date | string | null
    estado?: string | null
    total?: Decimal | DecimalJsLike | number | string | null
    usuario: UsuarioCreateNestedOneWithoutComprasInput
    proveedor: ProveedorCreateNestedOneWithoutComprasInput
    compra_productos?: CompraProductoCreateNestedManyWithoutCompraInput
    factura_compra?: FacturaCompraCreateNestedOneWithoutCompraInput
  }

  export type CompraUncheckedCreateInput = {
    id_compra?: number
    fecha_compra?: Date | string | null
    estado?: string | null
    total?: Decimal | DecimalJsLike | number | string | null
    usuario_id_usuario: number
    proveedor_id_proveedor: number
    compra_productos?: CompraProductoUncheckedCreateNestedManyWithoutCompraInput
    factura_compra?: FacturaCompraUncheckedCreateNestedOneWithoutCompraInput
  }

  export type CompraUpdateInput = {
    fecha_compra?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    usuario?: UsuarioUpdateOneRequiredWithoutComprasNestedInput
    proveedor?: ProveedorUpdateOneRequiredWithoutComprasNestedInput
    compra_productos?: CompraProductoUpdateManyWithoutCompraNestedInput
    factura_compra?: FacturaCompraUpdateOneWithoutCompraNestedInput
  }

  export type CompraUncheckedUpdateInput = {
    id_compra?: IntFieldUpdateOperationsInput | number
    fecha_compra?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    usuario_id_usuario?: IntFieldUpdateOperationsInput | number
    proveedor_id_proveedor?: IntFieldUpdateOperationsInput | number
    compra_productos?: CompraProductoUncheckedUpdateManyWithoutCompraNestedInput
    factura_compra?: FacturaCompraUncheckedUpdateOneWithoutCompraNestedInput
  }

  export type CompraCreateManyInput = {
    id_compra?: number
    fecha_compra?: Date | string | null
    estado?: string | null
    total?: Decimal | DecimalJsLike | number | string | null
    usuario_id_usuario: number
    proveedor_id_proveedor: number
  }

  export type CompraUpdateManyMutationInput = {
    fecha_compra?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type CompraUncheckedUpdateManyInput = {
    id_compra?: IntFieldUpdateOperationsInput | number
    fecha_compra?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    usuario_id_usuario?: IntFieldUpdateOperationsInput | number
    proveedor_id_proveedor?: IntFieldUpdateOperationsInput | number
  }

  export type CompraProductoCreateInput = {
    precio_unitario: Decimal | DecimalJsLike | number | string
    cantidad: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
    compra: CompraCreateNestedOneWithoutCompra_productosInput
    producto: ProductoCreateNestedOneWithoutCompra_productosInput
  }

  export type CompraProductoUncheckedCreateInput = {
    compra_id_compra: number
    producto_id_producto: number
    precio_unitario: Decimal | DecimalJsLike | number | string
    cantidad: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
  }

  export type CompraProductoUpdateInput = {
    precio_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cantidad?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    compra?: CompraUpdateOneRequiredWithoutCompra_productosNestedInput
    producto?: ProductoUpdateOneRequiredWithoutCompra_productosNestedInput
  }

  export type CompraProductoUncheckedUpdateInput = {
    compra_id_compra?: IntFieldUpdateOperationsInput | number
    producto_id_producto?: IntFieldUpdateOperationsInput | number
    precio_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cantidad?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type CompraProductoCreateManyInput = {
    compra_id_compra: number
    producto_id_producto: number
    precio_unitario: Decimal | DecimalJsLike | number | string
    cantidad: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
  }

  export type CompraProductoUpdateManyMutationInput = {
    precio_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cantidad?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type CompraProductoUncheckedUpdateManyInput = {
    compra_id_compra?: IntFieldUpdateOperationsInput | number
    producto_id_producto?: IntFieldUpdateOperationsInput | number
    precio_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cantidad?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type FacturaCompraCreateInput = {
    fecha?: Date | string | null
    subtotal?: Decimal | DecimalJsLike | number | string | null
    impuestos?: Decimal | DecimalJsLike | number | string | null
    total?: Decimal | DecimalJsLike | number | string | null
    compra: CompraCreateNestedOneWithoutFactura_compraInput
  }

  export type FacturaCompraUncheckedCreateInput = {
    id_factura?: number
    fecha?: Date | string | null
    subtotal?: Decimal | DecimalJsLike | number | string | null
    impuestos?: Decimal | DecimalJsLike | number | string | null
    total?: Decimal | DecimalJsLike | number | string | null
    compra_id_compra: number
  }

  export type FacturaCompraUpdateInput = {
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subtotal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    impuestos?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    compra?: CompraUpdateOneRequiredWithoutFactura_compraNestedInput
  }

  export type FacturaCompraUncheckedUpdateInput = {
    id_factura?: IntFieldUpdateOperationsInput | number
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subtotal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    impuestos?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    compra_id_compra?: IntFieldUpdateOperationsInput | number
  }

  export type FacturaCompraCreateManyInput = {
    id_factura?: number
    fecha?: Date | string | null
    subtotal?: Decimal | DecimalJsLike | number | string | null
    impuestos?: Decimal | DecimalJsLike | number | string | null
    total?: Decimal | DecimalJsLike | number | string | null
    compra_id_compra: number
  }

  export type FacturaCompraUpdateManyMutationInput = {
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subtotal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    impuestos?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type FacturaCompraUncheckedUpdateManyInput = {
    id_factura?: IntFieldUpdateOperationsInput | number
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subtotal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    impuestos?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    compra_id_compra?: IntFieldUpdateOperationsInput | number
  }

  export type FacturaVentaCreateInput = {
    fecha?: Date | string | null
    subtotal?: Decimal | DecimalJsLike | number | string | null
    impuestos?: Decimal | DecimalJsLike | number | string | null
    total?: Decimal | DecimalJsLike | number | string | null
    venta: VentaCreateNestedOneWithoutFactura_ventaInput
  }

  export type FacturaVentaUncheckedCreateInput = {
    id_factura?: number
    fecha?: Date | string | null
    subtotal?: Decimal | DecimalJsLike | number | string | null
    impuestos?: Decimal | DecimalJsLike | number | string | null
    total?: Decimal | DecimalJsLike | number | string | null
    venta_id_venta: number
  }

  export type FacturaVentaUpdateInput = {
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subtotal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    impuestos?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    venta?: VentaUpdateOneRequiredWithoutFactura_ventaNestedInput
  }

  export type FacturaVentaUncheckedUpdateInput = {
    id_factura?: IntFieldUpdateOperationsInput | number
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subtotal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    impuestos?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    venta_id_venta?: IntFieldUpdateOperationsInput | number
  }

  export type FacturaVentaCreateManyInput = {
    id_factura?: number
    fecha?: Date | string | null
    subtotal?: Decimal | DecimalJsLike | number | string | null
    impuestos?: Decimal | DecimalJsLike | number | string | null
    total?: Decimal | DecimalJsLike | number | string | null
    venta_id_venta: number
  }

  export type FacturaVentaUpdateManyMutationInput = {
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subtotal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    impuestos?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type FacturaVentaUncheckedUpdateManyInput = {
    id_factura?: IntFieldUpdateOperationsInput | number
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subtotal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    impuestos?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    venta_id_venta?: IntFieldUpdateOperationsInput | number
  }

  export type MovimientoInventarioCreateInput = {
    tipo_movimiento?: string | null
    fecha_movimiento?: Date | string | null
    cantidad?: Decimal | DecimalJsLike | number | string | null
    producto: ProductoCreateNestedOneWithoutMovimientosInput
  }

  export type MovimientoInventarioUncheckedCreateInput = {
    id_movimiento?: number
    tipo_movimiento?: string | null
    fecha_movimiento?: Date | string | null
    cantidad?: Decimal | DecimalJsLike | number | string | null
    producto_id_producto: number
  }

  export type MovimientoInventarioUpdateInput = {
    tipo_movimiento?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_movimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cantidad?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    producto?: ProductoUpdateOneRequiredWithoutMovimientosNestedInput
  }

  export type MovimientoInventarioUncheckedUpdateInput = {
    id_movimiento?: IntFieldUpdateOperationsInput | number
    tipo_movimiento?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_movimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cantidad?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    producto_id_producto?: IntFieldUpdateOperationsInput | number
  }

  export type MovimientoInventarioCreateManyInput = {
    id_movimiento?: number
    tipo_movimiento?: string | null
    fecha_movimiento?: Date | string | null
    cantidad?: Decimal | DecimalJsLike | number | string | null
    producto_id_producto: number
  }

  export type MovimientoInventarioUpdateManyMutationInput = {
    tipo_movimiento?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_movimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cantidad?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type MovimientoInventarioUncheckedUpdateManyInput = {
    id_movimiento?: IntFieldUpdateOperationsInput | number
    tipo_movimiento?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_movimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cantidad?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    producto_id_producto?: IntFieldUpdateOperationsInput | number
  }

  export type ProductoCreateInput = {
    nombre_producto?: string | null
    descripcion?: string | null
    stock?: Decimal | DecimalJsLike | number | string | null
    nivel_alerta?: string | null
    categoria: CategoriaCreateNestedOneWithoutProductosInput
    compra_productos?: CompraProductoCreateNestedManyWithoutProductoInput
    venta_productos?: VentaProductoCreateNestedManyWithoutProductoInput
    movimientos?: MovimientoInventarioCreateNestedManyWithoutProductoInput
  }

  export type ProductoUncheckedCreateInput = {
    id_producto?: number
    nombre_producto?: string | null
    descripcion?: string | null
    stock?: Decimal | DecimalJsLike | number | string | null
    nivel_alerta?: string | null
    categoria_id_categoria: number
    compra_productos?: CompraProductoUncheckedCreateNestedManyWithoutProductoInput
    venta_productos?: VentaProductoUncheckedCreateNestedManyWithoutProductoInput
    movimientos?: MovimientoInventarioUncheckedCreateNestedManyWithoutProductoInput
  }

  export type ProductoUpdateInput = {
    nombre_producto?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    stock?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nivel_alerta?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: CategoriaUpdateOneRequiredWithoutProductosNestedInput
    compra_productos?: CompraProductoUpdateManyWithoutProductoNestedInput
    venta_productos?: VentaProductoUpdateManyWithoutProductoNestedInput
    movimientos?: MovimientoInventarioUpdateManyWithoutProductoNestedInput
  }

  export type ProductoUncheckedUpdateInput = {
    id_producto?: IntFieldUpdateOperationsInput | number
    nombre_producto?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    stock?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nivel_alerta?: NullableStringFieldUpdateOperationsInput | string | null
    categoria_id_categoria?: IntFieldUpdateOperationsInput | number
    compra_productos?: CompraProductoUncheckedUpdateManyWithoutProductoNestedInput
    venta_productos?: VentaProductoUncheckedUpdateManyWithoutProductoNestedInput
    movimientos?: MovimientoInventarioUncheckedUpdateManyWithoutProductoNestedInput
  }

  export type ProductoCreateManyInput = {
    id_producto?: number
    nombre_producto?: string | null
    descripcion?: string | null
    stock?: Decimal | DecimalJsLike | number | string | null
    nivel_alerta?: string | null
    categoria_id_categoria: number
  }

  export type ProductoUpdateManyMutationInput = {
    nombre_producto?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    stock?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nivel_alerta?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProductoUncheckedUpdateManyInput = {
    id_producto?: IntFieldUpdateOperationsInput | number
    nombre_producto?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    stock?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nivel_alerta?: NullableStringFieldUpdateOperationsInput | string | null
    categoria_id_categoria?: IntFieldUpdateOperationsInput | number
  }

  export type ProveedorCreateInput = {
    nombre?: string | null
    telefono?: string | null
    direccion?: string | null
    compras?: CompraCreateNestedManyWithoutProveedorInput
  }

  export type ProveedorUncheckedCreateInput = {
    id_proveedor?: number
    nombre?: string | null
    telefono?: string | null
    direccion?: string | null
    compras?: CompraUncheckedCreateNestedManyWithoutProveedorInput
  }

  export type ProveedorUpdateInput = {
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    compras?: CompraUpdateManyWithoutProveedorNestedInput
  }

  export type ProveedorUncheckedUpdateInput = {
    id_proveedor?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    compras?: CompraUncheckedUpdateManyWithoutProveedorNestedInput
  }

  export type ProveedorCreateManyInput = {
    id_proveedor?: number
    nombre?: string | null
    telefono?: string | null
    direccion?: string | null
  }

  export type ProveedorUpdateManyMutationInput = {
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProveedorUncheckedUpdateManyInput = {
    id_proveedor?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UsuarioCreateInput = {
    usuario?: string | null
    contraseña?: string | null
    rol?: string | null
    ventas?: VentaCreateNestedManyWithoutUsuarioInput
    compras?: CompraCreateNestedManyWithoutUsuarioInput
    cajas?: CajaCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateInput = {
    id_usuario?: number
    usuario?: string | null
    contraseña?: string | null
    rol?: string | null
    ventas?: VentaUncheckedCreateNestedManyWithoutUsuarioInput
    compras?: CompraUncheckedCreateNestedManyWithoutUsuarioInput
    cajas?: CajaUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUpdateInput = {
    usuario?: NullableStringFieldUpdateOperationsInput | string | null
    contraseña?: NullableStringFieldUpdateOperationsInput | string | null
    rol?: NullableStringFieldUpdateOperationsInput | string | null
    ventas?: VentaUpdateManyWithoutUsuarioNestedInput
    compras?: CompraUpdateManyWithoutUsuarioNestedInput
    cajas?: CajaUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    usuario?: NullableStringFieldUpdateOperationsInput | string | null
    contraseña?: NullableStringFieldUpdateOperationsInput | string | null
    rol?: NullableStringFieldUpdateOperationsInput | string | null
    ventas?: VentaUncheckedUpdateManyWithoutUsuarioNestedInput
    compras?: CompraUncheckedUpdateManyWithoutUsuarioNestedInput
    cajas?: CajaUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioCreateManyInput = {
    id_usuario?: number
    usuario?: string | null
    contraseña?: string | null
    rol?: string | null
  }

  export type UsuarioUpdateManyMutationInput = {
    usuario?: NullableStringFieldUpdateOperationsInput | string | null
    contraseña?: NullableStringFieldUpdateOperationsInput | string | null
    rol?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    usuario?: NullableStringFieldUpdateOperationsInput | string | null
    contraseña?: NullableStringFieldUpdateOperationsInput | string | null
    rol?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VentaCreateInput = {
    tipo_venta?: string | null
    estado?: string | null
    cliente_cedula: string
    cliente: ClienteCreateNestedOneWithoutVentasInput
    usuario: UsuarioCreateNestedOneWithoutVentasInput
    venta_productos?: VentaProductoCreateNestedManyWithoutVentaInput
    factura_venta?: FacturaVentaCreateNestedOneWithoutVentaInput
  }

  export type VentaUncheckedCreateInput = {
    id_venta?: number
    tipo_venta?: string | null
    estado?: string | null
    cliente_id_cliente: number
    cliente_cedula: string
    usuario_id_usuario: number
    venta_productos?: VentaProductoUncheckedCreateNestedManyWithoutVentaInput
    factura_venta?: FacturaVentaUncheckedCreateNestedOneWithoutVentaInput
  }

  export type VentaUpdateInput = {
    tipo_venta?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    cliente_cedula?: StringFieldUpdateOperationsInput | string
    cliente?: ClienteUpdateOneRequiredWithoutVentasNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutVentasNestedInput
    venta_productos?: VentaProductoUpdateManyWithoutVentaNestedInput
    factura_venta?: FacturaVentaUpdateOneWithoutVentaNestedInput
  }

  export type VentaUncheckedUpdateInput = {
    id_venta?: IntFieldUpdateOperationsInput | number
    tipo_venta?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    cliente_id_cliente?: IntFieldUpdateOperationsInput | number
    cliente_cedula?: StringFieldUpdateOperationsInput | string
    usuario_id_usuario?: IntFieldUpdateOperationsInput | number
    venta_productos?: VentaProductoUncheckedUpdateManyWithoutVentaNestedInput
    factura_venta?: FacturaVentaUncheckedUpdateOneWithoutVentaNestedInput
  }

  export type VentaCreateManyInput = {
    id_venta?: number
    tipo_venta?: string | null
    estado?: string | null
    cliente_id_cliente: number
    cliente_cedula: string
    usuario_id_usuario: number
  }

  export type VentaUpdateManyMutationInput = {
    tipo_venta?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    cliente_cedula?: StringFieldUpdateOperationsInput | string
  }

  export type VentaUncheckedUpdateManyInput = {
    id_venta?: IntFieldUpdateOperationsInput | number
    tipo_venta?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    cliente_id_cliente?: IntFieldUpdateOperationsInput | number
    cliente_cedula?: StringFieldUpdateOperationsInput | string
    usuario_id_usuario?: IntFieldUpdateOperationsInput | number
  }

  export type VentaProductoCreateInput = {
    cantidad: Decimal | DecimalJsLike | number | string
    precio_unitario: Decimal | DecimalJsLike | number | string
    venta: VentaCreateNestedOneWithoutVenta_productosInput
    producto: ProductoCreateNestedOneWithoutVenta_productosInput
  }

  export type VentaProductoUncheckedCreateInput = {
    venta_id_venta: number
    producto_id_producto: number
    cantidad: Decimal | DecimalJsLike | number | string
    precio_unitario: Decimal | DecimalJsLike | number | string
  }

  export type VentaProductoUpdateInput = {
    cantidad?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    precio_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    venta?: VentaUpdateOneRequiredWithoutVenta_productosNestedInput
    producto?: ProductoUpdateOneRequiredWithoutVenta_productosNestedInput
  }

  export type VentaProductoUncheckedUpdateInput = {
    venta_id_venta?: IntFieldUpdateOperationsInput | number
    producto_id_producto?: IntFieldUpdateOperationsInput | number
    cantidad?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    precio_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type VentaProductoCreateManyInput = {
    venta_id_venta: number
    producto_id_producto: number
    cantidad: Decimal | DecimalJsLike | number | string
    precio_unitario: Decimal | DecimalJsLike | number | string
  }

  export type VentaProductoUpdateManyMutationInput = {
    cantidad?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    precio_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type VentaProductoUncheckedUpdateManyInput = {
    venta_id_venta?: IntFieldUpdateOperationsInput | number
    producto_id_producto?: IntFieldUpdateOperationsInput | number
    cantidad?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    precio_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CajaCountOrderByAggregateInput = {
    id_cierre_caja?: SortOrder
    fecha_apertura?: SortOrder
    fecha_cierre?: SortOrder
    monto_inicial?: SortOrder
    monto_final?: SortOrder
    total_ventas?: SortOrder
    diferencia?: SortOrder
    usuario_id_usuario?: SortOrder
  }

  export type CajaAvgOrderByAggregateInput = {
    id_cierre_caja?: SortOrder
    monto_inicial?: SortOrder
    monto_final?: SortOrder
    total_ventas?: SortOrder
    diferencia?: SortOrder
    usuario_id_usuario?: SortOrder
  }

  export type CajaMaxOrderByAggregateInput = {
    id_cierre_caja?: SortOrder
    fecha_apertura?: SortOrder
    fecha_cierre?: SortOrder
    monto_inicial?: SortOrder
    monto_final?: SortOrder
    total_ventas?: SortOrder
    diferencia?: SortOrder
    usuario_id_usuario?: SortOrder
  }

  export type CajaMinOrderByAggregateInput = {
    id_cierre_caja?: SortOrder
    fecha_apertura?: SortOrder
    fecha_cierre?: SortOrder
    monto_inicial?: SortOrder
    monto_final?: SortOrder
    total_ventas?: SortOrder
    diferencia?: SortOrder
    usuario_id_usuario?: SortOrder
  }

  export type CajaSumOrderByAggregateInput = {
    id_cierre_caja?: SortOrder
    monto_inicial?: SortOrder
    monto_final?: SortOrder
    total_ventas?: SortOrder
    diferencia?: SortOrder
    usuario_id_usuario?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type ProductoListRelationFilter = {
    every?: ProductoWhereInput
    some?: ProductoWhereInput
    none?: ProductoWhereInput
  }

  export type ProductoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoriaOrderByRelevanceInput = {
    fields: CategoriaOrderByRelevanceFieldEnum | CategoriaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CategoriaCountOrderByAggregateInput = {
    id_categoria?: SortOrder
    nombre?: SortOrder
  }

  export type CategoriaAvgOrderByAggregateInput = {
    id_categoria?: SortOrder
  }

  export type CategoriaMaxOrderByAggregateInput = {
    id_categoria?: SortOrder
    nombre?: SortOrder
  }

  export type CategoriaMinOrderByAggregateInput = {
    id_categoria?: SortOrder
    nombre?: SortOrder
  }

  export type CategoriaSumOrderByAggregateInput = {
    id_categoria?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type VentaListRelationFilter = {
    every?: VentaWhereInput
    some?: VentaWhereInput
    none?: VentaWhereInput
  }

  export type VentaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClienteOrderByRelevanceInput = {
    fields: ClienteOrderByRelevanceFieldEnum | ClienteOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ClienteCountOrderByAggregateInput = {
    id_cliente?: SortOrder
    cedula?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    telefono?: SortOrder
    compras_semanales?: SortOrder
    deuda_total?: SortOrder
  }

  export type ClienteAvgOrderByAggregateInput = {
    id_cliente?: SortOrder
    compras_semanales?: SortOrder
    deuda_total?: SortOrder
  }

  export type ClienteMaxOrderByAggregateInput = {
    id_cliente?: SortOrder
    cedula?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    telefono?: SortOrder
    compras_semanales?: SortOrder
    deuda_total?: SortOrder
  }

  export type ClienteMinOrderByAggregateInput = {
    id_cliente?: SortOrder
    cedula?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    telefono?: SortOrder
    compras_semanales?: SortOrder
    deuda_total?: SortOrder
  }

  export type ClienteSumOrderByAggregateInput = {
    id_cliente?: SortOrder
    compras_semanales?: SortOrder
    deuda_total?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type ProveedorScalarRelationFilter = {
    is?: ProveedorWhereInput
    isNot?: ProveedorWhereInput
  }

  export type CompraProductoListRelationFilter = {
    every?: CompraProductoWhereInput
    some?: CompraProductoWhereInput
    none?: CompraProductoWhereInput
  }

  export type FacturaCompraNullableScalarRelationFilter = {
    is?: FacturaCompraWhereInput | null
    isNot?: FacturaCompraWhereInput | null
  }

  export type CompraProductoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CompraOrderByRelevanceInput = {
    fields: CompraOrderByRelevanceFieldEnum | CompraOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CompraCountOrderByAggregateInput = {
    id_compra?: SortOrder
    fecha_compra?: SortOrder
    estado?: SortOrder
    total?: SortOrder
    usuario_id_usuario?: SortOrder
    proveedor_id_proveedor?: SortOrder
  }

  export type CompraAvgOrderByAggregateInput = {
    id_compra?: SortOrder
    total?: SortOrder
    usuario_id_usuario?: SortOrder
    proveedor_id_proveedor?: SortOrder
  }

  export type CompraMaxOrderByAggregateInput = {
    id_compra?: SortOrder
    fecha_compra?: SortOrder
    estado?: SortOrder
    total?: SortOrder
    usuario_id_usuario?: SortOrder
    proveedor_id_proveedor?: SortOrder
  }

  export type CompraMinOrderByAggregateInput = {
    id_compra?: SortOrder
    fecha_compra?: SortOrder
    estado?: SortOrder
    total?: SortOrder
    usuario_id_usuario?: SortOrder
    proveedor_id_proveedor?: SortOrder
  }

  export type CompraSumOrderByAggregateInput = {
    id_compra?: SortOrder
    total?: SortOrder
    usuario_id_usuario?: SortOrder
    proveedor_id_proveedor?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type CompraScalarRelationFilter = {
    is?: CompraWhereInput
    isNot?: CompraWhereInput
  }

  export type ProductoScalarRelationFilter = {
    is?: ProductoWhereInput
    isNot?: ProductoWhereInput
  }

  export type CompraProductoCompra_id_compraProducto_id_productoCompoundUniqueInput = {
    compra_id_compra: number
    producto_id_producto: number
  }

  export type CompraProductoCountOrderByAggregateInput = {
    compra_id_compra?: SortOrder
    producto_id_producto?: SortOrder
    precio_unitario?: SortOrder
    cantidad?: SortOrder
    subtotal?: SortOrder
  }

  export type CompraProductoAvgOrderByAggregateInput = {
    compra_id_compra?: SortOrder
    producto_id_producto?: SortOrder
    precio_unitario?: SortOrder
    cantidad?: SortOrder
    subtotal?: SortOrder
  }

  export type CompraProductoMaxOrderByAggregateInput = {
    compra_id_compra?: SortOrder
    producto_id_producto?: SortOrder
    precio_unitario?: SortOrder
    cantidad?: SortOrder
    subtotal?: SortOrder
  }

  export type CompraProductoMinOrderByAggregateInput = {
    compra_id_compra?: SortOrder
    producto_id_producto?: SortOrder
    precio_unitario?: SortOrder
    cantidad?: SortOrder
    subtotal?: SortOrder
  }

  export type CompraProductoSumOrderByAggregateInput = {
    compra_id_compra?: SortOrder
    producto_id_producto?: SortOrder
    precio_unitario?: SortOrder
    cantidad?: SortOrder
    subtotal?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type FacturaCompraCountOrderByAggregateInput = {
    id_factura?: SortOrder
    fecha?: SortOrder
    subtotal?: SortOrder
    impuestos?: SortOrder
    total?: SortOrder
    compra_id_compra?: SortOrder
  }

  export type FacturaCompraAvgOrderByAggregateInput = {
    id_factura?: SortOrder
    subtotal?: SortOrder
    impuestos?: SortOrder
    total?: SortOrder
    compra_id_compra?: SortOrder
  }

  export type FacturaCompraMaxOrderByAggregateInput = {
    id_factura?: SortOrder
    fecha?: SortOrder
    subtotal?: SortOrder
    impuestos?: SortOrder
    total?: SortOrder
    compra_id_compra?: SortOrder
  }

  export type FacturaCompraMinOrderByAggregateInput = {
    id_factura?: SortOrder
    fecha?: SortOrder
    subtotal?: SortOrder
    impuestos?: SortOrder
    total?: SortOrder
    compra_id_compra?: SortOrder
  }

  export type FacturaCompraSumOrderByAggregateInput = {
    id_factura?: SortOrder
    subtotal?: SortOrder
    impuestos?: SortOrder
    total?: SortOrder
    compra_id_compra?: SortOrder
  }

  export type VentaScalarRelationFilter = {
    is?: VentaWhereInput
    isNot?: VentaWhereInput
  }

  export type FacturaVentaCountOrderByAggregateInput = {
    id_factura?: SortOrder
    fecha?: SortOrder
    subtotal?: SortOrder
    impuestos?: SortOrder
    total?: SortOrder
    venta_id_venta?: SortOrder
  }

  export type FacturaVentaAvgOrderByAggregateInput = {
    id_factura?: SortOrder
    subtotal?: SortOrder
    impuestos?: SortOrder
    total?: SortOrder
    venta_id_venta?: SortOrder
  }

  export type FacturaVentaMaxOrderByAggregateInput = {
    id_factura?: SortOrder
    fecha?: SortOrder
    subtotal?: SortOrder
    impuestos?: SortOrder
    total?: SortOrder
    venta_id_venta?: SortOrder
  }

  export type FacturaVentaMinOrderByAggregateInput = {
    id_factura?: SortOrder
    fecha?: SortOrder
    subtotal?: SortOrder
    impuestos?: SortOrder
    total?: SortOrder
    venta_id_venta?: SortOrder
  }

  export type FacturaVentaSumOrderByAggregateInput = {
    id_factura?: SortOrder
    subtotal?: SortOrder
    impuestos?: SortOrder
    total?: SortOrder
    venta_id_venta?: SortOrder
  }

  export type MovimientoInventarioOrderByRelevanceInput = {
    fields: MovimientoInventarioOrderByRelevanceFieldEnum | MovimientoInventarioOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type MovimientoInventarioCountOrderByAggregateInput = {
    id_movimiento?: SortOrder
    tipo_movimiento?: SortOrder
    fecha_movimiento?: SortOrder
    cantidad?: SortOrder
    producto_id_producto?: SortOrder
  }

  export type MovimientoInventarioAvgOrderByAggregateInput = {
    id_movimiento?: SortOrder
    cantidad?: SortOrder
    producto_id_producto?: SortOrder
  }

  export type MovimientoInventarioMaxOrderByAggregateInput = {
    id_movimiento?: SortOrder
    tipo_movimiento?: SortOrder
    fecha_movimiento?: SortOrder
    cantidad?: SortOrder
    producto_id_producto?: SortOrder
  }

  export type MovimientoInventarioMinOrderByAggregateInput = {
    id_movimiento?: SortOrder
    tipo_movimiento?: SortOrder
    fecha_movimiento?: SortOrder
    cantidad?: SortOrder
    producto_id_producto?: SortOrder
  }

  export type MovimientoInventarioSumOrderByAggregateInput = {
    id_movimiento?: SortOrder
    cantidad?: SortOrder
    producto_id_producto?: SortOrder
  }

  export type CategoriaScalarRelationFilter = {
    is?: CategoriaWhereInput
    isNot?: CategoriaWhereInput
  }

  export type VentaProductoListRelationFilter = {
    every?: VentaProductoWhereInput
    some?: VentaProductoWhereInput
    none?: VentaProductoWhereInput
  }

  export type MovimientoInventarioListRelationFilter = {
    every?: MovimientoInventarioWhereInput
    some?: MovimientoInventarioWhereInput
    none?: MovimientoInventarioWhereInput
  }

  export type VentaProductoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MovimientoInventarioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductoOrderByRelevanceInput = {
    fields: ProductoOrderByRelevanceFieldEnum | ProductoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ProductoCountOrderByAggregateInput = {
    id_producto?: SortOrder
    nombre_producto?: SortOrder
    descripcion?: SortOrder
    stock?: SortOrder
    nivel_alerta?: SortOrder
    categoria_id_categoria?: SortOrder
  }

  export type ProductoAvgOrderByAggregateInput = {
    id_producto?: SortOrder
    stock?: SortOrder
    categoria_id_categoria?: SortOrder
  }

  export type ProductoMaxOrderByAggregateInput = {
    id_producto?: SortOrder
    nombre_producto?: SortOrder
    descripcion?: SortOrder
    stock?: SortOrder
    nivel_alerta?: SortOrder
    categoria_id_categoria?: SortOrder
  }

  export type ProductoMinOrderByAggregateInput = {
    id_producto?: SortOrder
    nombre_producto?: SortOrder
    descripcion?: SortOrder
    stock?: SortOrder
    nivel_alerta?: SortOrder
    categoria_id_categoria?: SortOrder
  }

  export type ProductoSumOrderByAggregateInput = {
    id_producto?: SortOrder
    stock?: SortOrder
    categoria_id_categoria?: SortOrder
  }

  export type CompraListRelationFilter = {
    every?: CompraWhereInput
    some?: CompraWhereInput
    none?: CompraWhereInput
  }

  export type CompraOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProveedorOrderByRelevanceInput = {
    fields: ProveedorOrderByRelevanceFieldEnum | ProveedorOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ProveedorCountOrderByAggregateInput = {
    id_proveedor?: SortOrder
    nombre?: SortOrder
    telefono?: SortOrder
    direccion?: SortOrder
  }

  export type ProveedorAvgOrderByAggregateInput = {
    id_proveedor?: SortOrder
  }

  export type ProveedorMaxOrderByAggregateInput = {
    id_proveedor?: SortOrder
    nombre?: SortOrder
    telefono?: SortOrder
    direccion?: SortOrder
  }

  export type ProveedorMinOrderByAggregateInput = {
    id_proveedor?: SortOrder
    nombre?: SortOrder
    telefono?: SortOrder
    direccion?: SortOrder
  }

  export type ProveedorSumOrderByAggregateInput = {
    id_proveedor?: SortOrder
  }

  export type CajaListRelationFilter = {
    every?: CajaWhereInput
    some?: CajaWhereInput
    none?: CajaWhereInput
  }

  export type CajaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioOrderByRelevanceInput = {
    fields: UsuarioOrderByRelevanceFieldEnum | UsuarioOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UsuarioCountOrderByAggregateInput = {
    id_usuario?: SortOrder
    usuario?: SortOrder
    contraseña?: SortOrder
    rol?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    id_usuario?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id_usuario?: SortOrder
    usuario?: SortOrder
    contraseña?: SortOrder
    rol?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id_usuario?: SortOrder
    usuario?: SortOrder
    contraseña?: SortOrder
    rol?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
    id_usuario?: SortOrder
  }

  export type ClienteScalarRelationFilter = {
    is?: ClienteWhereInput
    isNot?: ClienteWhereInput
  }

  export type FacturaVentaNullableScalarRelationFilter = {
    is?: FacturaVentaWhereInput | null
    isNot?: FacturaVentaWhereInput | null
  }

  export type VentaOrderByRelevanceInput = {
    fields: VentaOrderByRelevanceFieldEnum | VentaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type VentaCountOrderByAggregateInput = {
    id_venta?: SortOrder
    tipo_venta?: SortOrder
    estado?: SortOrder
    cliente_id_cliente?: SortOrder
    cliente_cedula?: SortOrder
    usuario_id_usuario?: SortOrder
  }

  export type VentaAvgOrderByAggregateInput = {
    id_venta?: SortOrder
    cliente_id_cliente?: SortOrder
    usuario_id_usuario?: SortOrder
  }

  export type VentaMaxOrderByAggregateInput = {
    id_venta?: SortOrder
    tipo_venta?: SortOrder
    estado?: SortOrder
    cliente_id_cliente?: SortOrder
    cliente_cedula?: SortOrder
    usuario_id_usuario?: SortOrder
  }

  export type VentaMinOrderByAggregateInput = {
    id_venta?: SortOrder
    tipo_venta?: SortOrder
    estado?: SortOrder
    cliente_id_cliente?: SortOrder
    cliente_cedula?: SortOrder
    usuario_id_usuario?: SortOrder
  }

  export type VentaSumOrderByAggregateInput = {
    id_venta?: SortOrder
    cliente_id_cliente?: SortOrder
    usuario_id_usuario?: SortOrder
  }

  export type VentaProductoVenta_id_ventaProducto_id_productoCompoundUniqueInput = {
    venta_id_venta: number
    producto_id_producto: number
  }

  export type VentaProductoCountOrderByAggregateInput = {
    venta_id_venta?: SortOrder
    producto_id_producto?: SortOrder
    cantidad?: SortOrder
    precio_unitario?: SortOrder
  }

  export type VentaProductoAvgOrderByAggregateInput = {
    venta_id_venta?: SortOrder
    producto_id_producto?: SortOrder
    cantidad?: SortOrder
    precio_unitario?: SortOrder
  }

  export type VentaProductoMaxOrderByAggregateInput = {
    venta_id_venta?: SortOrder
    producto_id_producto?: SortOrder
    cantidad?: SortOrder
    precio_unitario?: SortOrder
  }

  export type VentaProductoMinOrderByAggregateInput = {
    venta_id_venta?: SortOrder
    producto_id_producto?: SortOrder
    cantidad?: SortOrder
    precio_unitario?: SortOrder
  }

  export type VentaProductoSumOrderByAggregateInput = {
    venta_id_venta?: SortOrder
    producto_id_producto?: SortOrder
    cantidad?: SortOrder
    precio_unitario?: SortOrder
  }

  export type UsuarioCreateNestedOneWithoutCajasInput = {
    create?: XOR<UsuarioCreateWithoutCajasInput, UsuarioUncheckedCreateWithoutCajasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutCajasInput
    connect?: UsuarioWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type UsuarioUpdateOneRequiredWithoutCajasNestedInput = {
    create?: XOR<UsuarioCreateWithoutCajasInput, UsuarioUncheckedCreateWithoutCajasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutCajasInput
    upsert?: UsuarioUpsertWithoutCajasInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutCajasInput, UsuarioUpdateWithoutCajasInput>, UsuarioUncheckedUpdateWithoutCajasInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProductoCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<ProductoCreateWithoutCategoriaInput, ProductoUncheckedCreateWithoutCategoriaInput> | ProductoCreateWithoutCategoriaInput[] | ProductoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: ProductoCreateOrConnectWithoutCategoriaInput | ProductoCreateOrConnectWithoutCategoriaInput[]
    createMany?: ProductoCreateManyCategoriaInputEnvelope
    connect?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
  }

  export type ProductoUncheckedCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<ProductoCreateWithoutCategoriaInput, ProductoUncheckedCreateWithoutCategoriaInput> | ProductoCreateWithoutCategoriaInput[] | ProductoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: ProductoCreateOrConnectWithoutCategoriaInput | ProductoCreateOrConnectWithoutCategoriaInput[]
    createMany?: ProductoCreateManyCategoriaInputEnvelope
    connect?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type ProductoUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<ProductoCreateWithoutCategoriaInput, ProductoUncheckedCreateWithoutCategoriaInput> | ProductoCreateWithoutCategoriaInput[] | ProductoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: ProductoCreateOrConnectWithoutCategoriaInput | ProductoCreateOrConnectWithoutCategoriaInput[]
    upsert?: ProductoUpsertWithWhereUniqueWithoutCategoriaInput | ProductoUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: ProductoCreateManyCategoriaInputEnvelope
    set?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
    disconnect?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
    delete?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
    connect?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
    update?: ProductoUpdateWithWhereUniqueWithoutCategoriaInput | ProductoUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: ProductoUpdateManyWithWhereWithoutCategoriaInput | ProductoUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: ProductoScalarWhereInput | ProductoScalarWhereInput[]
  }

  export type ProductoUncheckedUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<ProductoCreateWithoutCategoriaInput, ProductoUncheckedCreateWithoutCategoriaInput> | ProductoCreateWithoutCategoriaInput[] | ProductoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: ProductoCreateOrConnectWithoutCategoriaInput | ProductoCreateOrConnectWithoutCategoriaInput[]
    upsert?: ProductoUpsertWithWhereUniqueWithoutCategoriaInput | ProductoUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: ProductoCreateManyCategoriaInputEnvelope
    set?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
    disconnect?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
    delete?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
    connect?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
    update?: ProductoUpdateWithWhereUniqueWithoutCategoriaInput | ProductoUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: ProductoUpdateManyWithWhereWithoutCategoriaInput | ProductoUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: ProductoScalarWhereInput | ProductoScalarWhereInput[]
  }

  export type VentaCreateNestedManyWithoutClienteInput = {
    create?: XOR<VentaCreateWithoutClienteInput, VentaUncheckedCreateWithoutClienteInput> | VentaCreateWithoutClienteInput[] | VentaUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: VentaCreateOrConnectWithoutClienteInput | VentaCreateOrConnectWithoutClienteInput[]
    createMany?: VentaCreateManyClienteInputEnvelope
    connect?: VentaWhereUniqueInput | VentaWhereUniqueInput[]
  }

  export type VentaUncheckedCreateNestedManyWithoutClienteInput = {
    create?: XOR<VentaCreateWithoutClienteInput, VentaUncheckedCreateWithoutClienteInput> | VentaCreateWithoutClienteInput[] | VentaUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: VentaCreateOrConnectWithoutClienteInput | VentaCreateOrConnectWithoutClienteInput[]
    createMany?: VentaCreateManyClienteInputEnvelope
    connect?: VentaWhereUniqueInput | VentaWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type VentaUpdateManyWithoutClienteNestedInput = {
    create?: XOR<VentaCreateWithoutClienteInput, VentaUncheckedCreateWithoutClienteInput> | VentaCreateWithoutClienteInput[] | VentaUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: VentaCreateOrConnectWithoutClienteInput | VentaCreateOrConnectWithoutClienteInput[]
    upsert?: VentaUpsertWithWhereUniqueWithoutClienteInput | VentaUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: VentaCreateManyClienteInputEnvelope
    set?: VentaWhereUniqueInput | VentaWhereUniqueInput[]
    disconnect?: VentaWhereUniqueInput | VentaWhereUniqueInput[]
    delete?: VentaWhereUniqueInput | VentaWhereUniqueInput[]
    connect?: VentaWhereUniqueInput | VentaWhereUniqueInput[]
    update?: VentaUpdateWithWhereUniqueWithoutClienteInput | VentaUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: VentaUpdateManyWithWhereWithoutClienteInput | VentaUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: VentaScalarWhereInput | VentaScalarWhereInput[]
  }

  export type VentaUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: XOR<VentaCreateWithoutClienteInput, VentaUncheckedCreateWithoutClienteInput> | VentaCreateWithoutClienteInput[] | VentaUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: VentaCreateOrConnectWithoutClienteInput | VentaCreateOrConnectWithoutClienteInput[]
    upsert?: VentaUpsertWithWhereUniqueWithoutClienteInput | VentaUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: VentaCreateManyClienteInputEnvelope
    set?: VentaWhereUniqueInput | VentaWhereUniqueInput[]
    disconnect?: VentaWhereUniqueInput | VentaWhereUniqueInput[]
    delete?: VentaWhereUniqueInput | VentaWhereUniqueInput[]
    connect?: VentaWhereUniqueInput | VentaWhereUniqueInput[]
    update?: VentaUpdateWithWhereUniqueWithoutClienteInput | VentaUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: VentaUpdateManyWithWhereWithoutClienteInput | VentaUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: VentaScalarWhereInput | VentaScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutComprasInput = {
    create?: XOR<UsuarioCreateWithoutComprasInput, UsuarioUncheckedCreateWithoutComprasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutComprasInput
    connect?: UsuarioWhereUniqueInput
  }

  export type ProveedorCreateNestedOneWithoutComprasInput = {
    create?: XOR<ProveedorCreateWithoutComprasInput, ProveedorUncheckedCreateWithoutComprasInput>
    connectOrCreate?: ProveedorCreateOrConnectWithoutComprasInput
    connect?: ProveedorWhereUniqueInput
  }

  export type CompraProductoCreateNestedManyWithoutCompraInput = {
    create?: XOR<CompraProductoCreateWithoutCompraInput, CompraProductoUncheckedCreateWithoutCompraInput> | CompraProductoCreateWithoutCompraInput[] | CompraProductoUncheckedCreateWithoutCompraInput[]
    connectOrCreate?: CompraProductoCreateOrConnectWithoutCompraInput | CompraProductoCreateOrConnectWithoutCompraInput[]
    createMany?: CompraProductoCreateManyCompraInputEnvelope
    connect?: CompraProductoWhereUniqueInput | CompraProductoWhereUniqueInput[]
  }

  export type FacturaCompraCreateNestedOneWithoutCompraInput = {
    create?: XOR<FacturaCompraCreateWithoutCompraInput, FacturaCompraUncheckedCreateWithoutCompraInput>
    connectOrCreate?: FacturaCompraCreateOrConnectWithoutCompraInput
    connect?: FacturaCompraWhereUniqueInput
  }

  export type CompraProductoUncheckedCreateNestedManyWithoutCompraInput = {
    create?: XOR<CompraProductoCreateWithoutCompraInput, CompraProductoUncheckedCreateWithoutCompraInput> | CompraProductoCreateWithoutCompraInput[] | CompraProductoUncheckedCreateWithoutCompraInput[]
    connectOrCreate?: CompraProductoCreateOrConnectWithoutCompraInput | CompraProductoCreateOrConnectWithoutCompraInput[]
    createMany?: CompraProductoCreateManyCompraInputEnvelope
    connect?: CompraProductoWhereUniqueInput | CompraProductoWhereUniqueInput[]
  }

  export type FacturaCompraUncheckedCreateNestedOneWithoutCompraInput = {
    create?: XOR<FacturaCompraCreateWithoutCompraInput, FacturaCompraUncheckedCreateWithoutCompraInput>
    connectOrCreate?: FacturaCompraCreateOrConnectWithoutCompraInput
    connect?: FacturaCompraWhereUniqueInput
  }

  export type UsuarioUpdateOneRequiredWithoutComprasNestedInput = {
    create?: XOR<UsuarioCreateWithoutComprasInput, UsuarioUncheckedCreateWithoutComprasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutComprasInput
    upsert?: UsuarioUpsertWithoutComprasInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutComprasInput, UsuarioUpdateWithoutComprasInput>, UsuarioUncheckedUpdateWithoutComprasInput>
  }

  export type ProveedorUpdateOneRequiredWithoutComprasNestedInput = {
    create?: XOR<ProveedorCreateWithoutComprasInput, ProveedorUncheckedCreateWithoutComprasInput>
    connectOrCreate?: ProveedorCreateOrConnectWithoutComprasInput
    upsert?: ProveedorUpsertWithoutComprasInput
    connect?: ProveedorWhereUniqueInput
    update?: XOR<XOR<ProveedorUpdateToOneWithWhereWithoutComprasInput, ProveedorUpdateWithoutComprasInput>, ProveedorUncheckedUpdateWithoutComprasInput>
  }

  export type CompraProductoUpdateManyWithoutCompraNestedInput = {
    create?: XOR<CompraProductoCreateWithoutCompraInput, CompraProductoUncheckedCreateWithoutCompraInput> | CompraProductoCreateWithoutCompraInput[] | CompraProductoUncheckedCreateWithoutCompraInput[]
    connectOrCreate?: CompraProductoCreateOrConnectWithoutCompraInput | CompraProductoCreateOrConnectWithoutCompraInput[]
    upsert?: CompraProductoUpsertWithWhereUniqueWithoutCompraInput | CompraProductoUpsertWithWhereUniqueWithoutCompraInput[]
    createMany?: CompraProductoCreateManyCompraInputEnvelope
    set?: CompraProductoWhereUniqueInput | CompraProductoWhereUniqueInput[]
    disconnect?: CompraProductoWhereUniqueInput | CompraProductoWhereUniqueInput[]
    delete?: CompraProductoWhereUniqueInput | CompraProductoWhereUniqueInput[]
    connect?: CompraProductoWhereUniqueInput | CompraProductoWhereUniqueInput[]
    update?: CompraProductoUpdateWithWhereUniqueWithoutCompraInput | CompraProductoUpdateWithWhereUniqueWithoutCompraInput[]
    updateMany?: CompraProductoUpdateManyWithWhereWithoutCompraInput | CompraProductoUpdateManyWithWhereWithoutCompraInput[]
    deleteMany?: CompraProductoScalarWhereInput | CompraProductoScalarWhereInput[]
  }

  export type FacturaCompraUpdateOneWithoutCompraNestedInput = {
    create?: XOR<FacturaCompraCreateWithoutCompraInput, FacturaCompraUncheckedCreateWithoutCompraInput>
    connectOrCreate?: FacturaCompraCreateOrConnectWithoutCompraInput
    upsert?: FacturaCompraUpsertWithoutCompraInput
    disconnect?: FacturaCompraWhereInput | boolean
    delete?: FacturaCompraWhereInput | boolean
    connect?: FacturaCompraWhereUniqueInput
    update?: XOR<XOR<FacturaCompraUpdateToOneWithWhereWithoutCompraInput, FacturaCompraUpdateWithoutCompraInput>, FacturaCompraUncheckedUpdateWithoutCompraInput>
  }

  export type CompraProductoUncheckedUpdateManyWithoutCompraNestedInput = {
    create?: XOR<CompraProductoCreateWithoutCompraInput, CompraProductoUncheckedCreateWithoutCompraInput> | CompraProductoCreateWithoutCompraInput[] | CompraProductoUncheckedCreateWithoutCompraInput[]
    connectOrCreate?: CompraProductoCreateOrConnectWithoutCompraInput | CompraProductoCreateOrConnectWithoutCompraInput[]
    upsert?: CompraProductoUpsertWithWhereUniqueWithoutCompraInput | CompraProductoUpsertWithWhereUniqueWithoutCompraInput[]
    createMany?: CompraProductoCreateManyCompraInputEnvelope
    set?: CompraProductoWhereUniqueInput | CompraProductoWhereUniqueInput[]
    disconnect?: CompraProductoWhereUniqueInput | CompraProductoWhereUniqueInput[]
    delete?: CompraProductoWhereUniqueInput | CompraProductoWhereUniqueInput[]
    connect?: CompraProductoWhereUniqueInput | CompraProductoWhereUniqueInput[]
    update?: CompraProductoUpdateWithWhereUniqueWithoutCompraInput | CompraProductoUpdateWithWhereUniqueWithoutCompraInput[]
    updateMany?: CompraProductoUpdateManyWithWhereWithoutCompraInput | CompraProductoUpdateManyWithWhereWithoutCompraInput[]
    deleteMany?: CompraProductoScalarWhereInput | CompraProductoScalarWhereInput[]
  }

  export type FacturaCompraUncheckedUpdateOneWithoutCompraNestedInput = {
    create?: XOR<FacturaCompraCreateWithoutCompraInput, FacturaCompraUncheckedCreateWithoutCompraInput>
    connectOrCreate?: FacturaCompraCreateOrConnectWithoutCompraInput
    upsert?: FacturaCompraUpsertWithoutCompraInput
    disconnect?: FacturaCompraWhereInput | boolean
    delete?: FacturaCompraWhereInput | boolean
    connect?: FacturaCompraWhereUniqueInput
    update?: XOR<XOR<FacturaCompraUpdateToOneWithWhereWithoutCompraInput, FacturaCompraUpdateWithoutCompraInput>, FacturaCompraUncheckedUpdateWithoutCompraInput>
  }

  export type CompraCreateNestedOneWithoutCompra_productosInput = {
    create?: XOR<CompraCreateWithoutCompra_productosInput, CompraUncheckedCreateWithoutCompra_productosInput>
    connectOrCreate?: CompraCreateOrConnectWithoutCompra_productosInput
    connect?: CompraWhereUniqueInput
  }

  export type ProductoCreateNestedOneWithoutCompra_productosInput = {
    create?: XOR<ProductoCreateWithoutCompra_productosInput, ProductoUncheckedCreateWithoutCompra_productosInput>
    connectOrCreate?: ProductoCreateOrConnectWithoutCompra_productosInput
    connect?: ProductoWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type CompraUpdateOneRequiredWithoutCompra_productosNestedInput = {
    create?: XOR<CompraCreateWithoutCompra_productosInput, CompraUncheckedCreateWithoutCompra_productosInput>
    connectOrCreate?: CompraCreateOrConnectWithoutCompra_productosInput
    upsert?: CompraUpsertWithoutCompra_productosInput
    connect?: CompraWhereUniqueInput
    update?: XOR<XOR<CompraUpdateToOneWithWhereWithoutCompra_productosInput, CompraUpdateWithoutCompra_productosInput>, CompraUncheckedUpdateWithoutCompra_productosInput>
  }

  export type ProductoUpdateOneRequiredWithoutCompra_productosNestedInput = {
    create?: XOR<ProductoCreateWithoutCompra_productosInput, ProductoUncheckedCreateWithoutCompra_productosInput>
    connectOrCreate?: ProductoCreateOrConnectWithoutCompra_productosInput
    upsert?: ProductoUpsertWithoutCompra_productosInput
    connect?: ProductoWhereUniqueInput
    update?: XOR<XOR<ProductoUpdateToOneWithWhereWithoutCompra_productosInput, ProductoUpdateWithoutCompra_productosInput>, ProductoUncheckedUpdateWithoutCompra_productosInput>
  }

  export type CompraCreateNestedOneWithoutFactura_compraInput = {
    create?: XOR<CompraCreateWithoutFactura_compraInput, CompraUncheckedCreateWithoutFactura_compraInput>
    connectOrCreate?: CompraCreateOrConnectWithoutFactura_compraInput
    connect?: CompraWhereUniqueInput
  }

  export type CompraUpdateOneRequiredWithoutFactura_compraNestedInput = {
    create?: XOR<CompraCreateWithoutFactura_compraInput, CompraUncheckedCreateWithoutFactura_compraInput>
    connectOrCreate?: CompraCreateOrConnectWithoutFactura_compraInput
    upsert?: CompraUpsertWithoutFactura_compraInput
    connect?: CompraWhereUniqueInput
    update?: XOR<XOR<CompraUpdateToOneWithWhereWithoutFactura_compraInput, CompraUpdateWithoutFactura_compraInput>, CompraUncheckedUpdateWithoutFactura_compraInput>
  }

  export type VentaCreateNestedOneWithoutFactura_ventaInput = {
    create?: XOR<VentaCreateWithoutFactura_ventaInput, VentaUncheckedCreateWithoutFactura_ventaInput>
    connectOrCreate?: VentaCreateOrConnectWithoutFactura_ventaInput
    connect?: VentaWhereUniqueInput
  }

  export type VentaUpdateOneRequiredWithoutFactura_ventaNestedInput = {
    create?: XOR<VentaCreateWithoutFactura_ventaInput, VentaUncheckedCreateWithoutFactura_ventaInput>
    connectOrCreate?: VentaCreateOrConnectWithoutFactura_ventaInput
    upsert?: VentaUpsertWithoutFactura_ventaInput
    connect?: VentaWhereUniqueInput
    update?: XOR<XOR<VentaUpdateToOneWithWhereWithoutFactura_ventaInput, VentaUpdateWithoutFactura_ventaInput>, VentaUncheckedUpdateWithoutFactura_ventaInput>
  }

  export type ProductoCreateNestedOneWithoutMovimientosInput = {
    create?: XOR<ProductoCreateWithoutMovimientosInput, ProductoUncheckedCreateWithoutMovimientosInput>
    connectOrCreate?: ProductoCreateOrConnectWithoutMovimientosInput
    connect?: ProductoWhereUniqueInput
  }

  export type ProductoUpdateOneRequiredWithoutMovimientosNestedInput = {
    create?: XOR<ProductoCreateWithoutMovimientosInput, ProductoUncheckedCreateWithoutMovimientosInput>
    connectOrCreate?: ProductoCreateOrConnectWithoutMovimientosInput
    upsert?: ProductoUpsertWithoutMovimientosInput
    connect?: ProductoWhereUniqueInput
    update?: XOR<XOR<ProductoUpdateToOneWithWhereWithoutMovimientosInput, ProductoUpdateWithoutMovimientosInput>, ProductoUncheckedUpdateWithoutMovimientosInput>
  }

  export type CategoriaCreateNestedOneWithoutProductosInput = {
    create?: XOR<CategoriaCreateWithoutProductosInput, CategoriaUncheckedCreateWithoutProductosInput>
    connectOrCreate?: CategoriaCreateOrConnectWithoutProductosInput
    connect?: CategoriaWhereUniqueInput
  }

  export type CompraProductoCreateNestedManyWithoutProductoInput = {
    create?: XOR<CompraProductoCreateWithoutProductoInput, CompraProductoUncheckedCreateWithoutProductoInput> | CompraProductoCreateWithoutProductoInput[] | CompraProductoUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: CompraProductoCreateOrConnectWithoutProductoInput | CompraProductoCreateOrConnectWithoutProductoInput[]
    createMany?: CompraProductoCreateManyProductoInputEnvelope
    connect?: CompraProductoWhereUniqueInput | CompraProductoWhereUniqueInput[]
  }

  export type VentaProductoCreateNestedManyWithoutProductoInput = {
    create?: XOR<VentaProductoCreateWithoutProductoInput, VentaProductoUncheckedCreateWithoutProductoInput> | VentaProductoCreateWithoutProductoInput[] | VentaProductoUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: VentaProductoCreateOrConnectWithoutProductoInput | VentaProductoCreateOrConnectWithoutProductoInput[]
    createMany?: VentaProductoCreateManyProductoInputEnvelope
    connect?: VentaProductoWhereUniqueInput | VentaProductoWhereUniqueInput[]
  }

  export type MovimientoInventarioCreateNestedManyWithoutProductoInput = {
    create?: XOR<MovimientoInventarioCreateWithoutProductoInput, MovimientoInventarioUncheckedCreateWithoutProductoInput> | MovimientoInventarioCreateWithoutProductoInput[] | MovimientoInventarioUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: MovimientoInventarioCreateOrConnectWithoutProductoInput | MovimientoInventarioCreateOrConnectWithoutProductoInput[]
    createMany?: MovimientoInventarioCreateManyProductoInputEnvelope
    connect?: MovimientoInventarioWhereUniqueInput | MovimientoInventarioWhereUniqueInput[]
  }

  export type CompraProductoUncheckedCreateNestedManyWithoutProductoInput = {
    create?: XOR<CompraProductoCreateWithoutProductoInput, CompraProductoUncheckedCreateWithoutProductoInput> | CompraProductoCreateWithoutProductoInput[] | CompraProductoUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: CompraProductoCreateOrConnectWithoutProductoInput | CompraProductoCreateOrConnectWithoutProductoInput[]
    createMany?: CompraProductoCreateManyProductoInputEnvelope
    connect?: CompraProductoWhereUniqueInput | CompraProductoWhereUniqueInput[]
  }

  export type VentaProductoUncheckedCreateNestedManyWithoutProductoInput = {
    create?: XOR<VentaProductoCreateWithoutProductoInput, VentaProductoUncheckedCreateWithoutProductoInput> | VentaProductoCreateWithoutProductoInput[] | VentaProductoUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: VentaProductoCreateOrConnectWithoutProductoInput | VentaProductoCreateOrConnectWithoutProductoInput[]
    createMany?: VentaProductoCreateManyProductoInputEnvelope
    connect?: VentaProductoWhereUniqueInput | VentaProductoWhereUniqueInput[]
  }

  export type MovimientoInventarioUncheckedCreateNestedManyWithoutProductoInput = {
    create?: XOR<MovimientoInventarioCreateWithoutProductoInput, MovimientoInventarioUncheckedCreateWithoutProductoInput> | MovimientoInventarioCreateWithoutProductoInput[] | MovimientoInventarioUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: MovimientoInventarioCreateOrConnectWithoutProductoInput | MovimientoInventarioCreateOrConnectWithoutProductoInput[]
    createMany?: MovimientoInventarioCreateManyProductoInputEnvelope
    connect?: MovimientoInventarioWhereUniqueInput | MovimientoInventarioWhereUniqueInput[]
  }

  export type CategoriaUpdateOneRequiredWithoutProductosNestedInput = {
    create?: XOR<CategoriaCreateWithoutProductosInput, CategoriaUncheckedCreateWithoutProductosInput>
    connectOrCreate?: CategoriaCreateOrConnectWithoutProductosInput
    upsert?: CategoriaUpsertWithoutProductosInput
    connect?: CategoriaWhereUniqueInput
    update?: XOR<XOR<CategoriaUpdateToOneWithWhereWithoutProductosInput, CategoriaUpdateWithoutProductosInput>, CategoriaUncheckedUpdateWithoutProductosInput>
  }

  export type CompraProductoUpdateManyWithoutProductoNestedInput = {
    create?: XOR<CompraProductoCreateWithoutProductoInput, CompraProductoUncheckedCreateWithoutProductoInput> | CompraProductoCreateWithoutProductoInput[] | CompraProductoUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: CompraProductoCreateOrConnectWithoutProductoInput | CompraProductoCreateOrConnectWithoutProductoInput[]
    upsert?: CompraProductoUpsertWithWhereUniqueWithoutProductoInput | CompraProductoUpsertWithWhereUniqueWithoutProductoInput[]
    createMany?: CompraProductoCreateManyProductoInputEnvelope
    set?: CompraProductoWhereUniqueInput | CompraProductoWhereUniqueInput[]
    disconnect?: CompraProductoWhereUniqueInput | CompraProductoWhereUniqueInput[]
    delete?: CompraProductoWhereUniqueInput | CompraProductoWhereUniqueInput[]
    connect?: CompraProductoWhereUniqueInput | CompraProductoWhereUniqueInput[]
    update?: CompraProductoUpdateWithWhereUniqueWithoutProductoInput | CompraProductoUpdateWithWhereUniqueWithoutProductoInput[]
    updateMany?: CompraProductoUpdateManyWithWhereWithoutProductoInput | CompraProductoUpdateManyWithWhereWithoutProductoInput[]
    deleteMany?: CompraProductoScalarWhereInput | CompraProductoScalarWhereInput[]
  }

  export type VentaProductoUpdateManyWithoutProductoNestedInput = {
    create?: XOR<VentaProductoCreateWithoutProductoInput, VentaProductoUncheckedCreateWithoutProductoInput> | VentaProductoCreateWithoutProductoInput[] | VentaProductoUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: VentaProductoCreateOrConnectWithoutProductoInput | VentaProductoCreateOrConnectWithoutProductoInput[]
    upsert?: VentaProductoUpsertWithWhereUniqueWithoutProductoInput | VentaProductoUpsertWithWhereUniqueWithoutProductoInput[]
    createMany?: VentaProductoCreateManyProductoInputEnvelope
    set?: VentaProductoWhereUniqueInput | VentaProductoWhereUniqueInput[]
    disconnect?: VentaProductoWhereUniqueInput | VentaProductoWhereUniqueInput[]
    delete?: VentaProductoWhereUniqueInput | VentaProductoWhereUniqueInput[]
    connect?: VentaProductoWhereUniqueInput | VentaProductoWhereUniqueInput[]
    update?: VentaProductoUpdateWithWhereUniqueWithoutProductoInput | VentaProductoUpdateWithWhereUniqueWithoutProductoInput[]
    updateMany?: VentaProductoUpdateManyWithWhereWithoutProductoInput | VentaProductoUpdateManyWithWhereWithoutProductoInput[]
    deleteMany?: VentaProductoScalarWhereInput | VentaProductoScalarWhereInput[]
  }

  export type MovimientoInventarioUpdateManyWithoutProductoNestedInput = {
    create?: XOR<MovimientoInventarioCreateWithoutProductoInput, MovimientoInventarioUncheckedCreateWithoutProductoInput> | MovimientoInventarioCreateWithoutProductoInput[] | MovimientoInventarioUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: MovimientoInventarioCreateOrConnectWithoutProductoInput | MovimientoInventarioCreateOrConnectWithoutProductoInput[]
    upsert?: MovimientoInventarioUpsertWithWhereUniqueWithoutProductoInput | MovimientoInventarioUpsertWithWhereUniqueWithoutProductoInput[]
    createMany?: MovimientoInventarioCreateManyProductoInputEnvelope
    set?: MovimientoInventarioWhereUniqueInput | MovimientoInventarioWhereUniqueInput[]
    disconnect?: MovimientoInventarioWhereUniqueInput | MovimientoInventarioWhereUniqueInput[]
    delete?: MovimientoInventarioWhereUniqueInput | MovimientoInventarioWhereUniqueInput[]
    connect?: MovimientoInventarioWhereUniqueInput | MovimientoInventarioWhereUniqueInput[]
    update?: MovimientoInventarioUpdateWithWhereUniqueWithoutProductoInput | MovimientoInventarioUpdateWithWhereUniqueWithoutProductoInput[]
    updateMany?: MovimientoInventarioUpdateManyWithWhereWithoutProductoInput | MovimientoInventarioUpdateManyWithWhereWithoutProductoInput[]
    deleteMany?: MovimientoInventarioScalarWhereInput | MovimientoInventarioScalarWhereInput[]
  }

  export type CompraProductoUncheckedUpdateManyWithoutProductoNestedInput = {
    create?: XOR<CompraProductoCreateWithoutProductoInput, CompraProductoUncheckedCreateWithoutProductoInput> | CompraProductoCreateWithoutProductoInput[] | CompraProductoUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: CompraProductoCreateOrConnectWithoutProductoInput | CompraProductoCreateOrConnectWithoutProductoInput[]
    upsert?: CompraProductoUpsertWithWhereUniqueWithoutProductoInput | CompraProductoUpsertWithWhereUniqueWithoutProductoInput[]
    createMany?: CompraProductoCreateManyProductoInputEnvelope
    set?: CompraProductoWhereUniqueInput | CompraProductoWhereUniqueInput[]
    disconnect?: CompraProductoWhereUniqueInput | CompraProductoWhereUniqueInput[]
    delete?: CompraProductoWhereUniqueInput | CompraProductoWhereUniqueInput[]
    connect?: CompraProductoWhereUniqueInput | CompraProductoWhereUniqueInput[]
    update?: CompraProductoUpdateWithWhereUniqueWithoutProductoInput | CompraProductoUpdateWithWhereUniqueWithoutProductoInput[]
    updateMany?: CompraProductoUpdateManyWithWhereWithoutProductoInput | CompraProductoUpdateManyWithWhereWithoutProductoInput[]
    deleteMany?: CompraProductoScalarWhereInput | CompraProductoScalarWhereInput[]
  }

  export type VentaProductoUncheckedUpdateManyWithoutProductoNestedInput = {
    create?: XOR<VentaProductoCreateWithoutProductoInput, VentaProductoUncheckedCreateWithoutProductoInput> | VentaProductoCreateWithoutProductoInput[] | VentaProductoUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: VentaProductoCreateOrConnectWithoutProductoInput | VentaProductoCreateOrConnectWithoutProductoInput[]
    upsert?: VentaProductoUpsertWithWhereUniqueWithoutProductoInput | VentaProductoUpsertWithWhereUniqueWithoutProductoInput[]
    createMany?: VentaProductoCreateManyProductoInputEnvelope
    set?: VentaProductoWhereUniqueInput | VentaProductoWhereUniqueInput[]
    disconnect?: VentaProductoWhereUniqueInput | VentaProductoWhereUniqueInput[]
    delete?: VentaProductoWhereUniqueInput | VentaProductoWhereUniqueInput[]
    connect?: VentaProductoWhereUniqueInput | VentaProductoWhereUniqueInput[]
    update?: VentaProductoUpdateWithWhereUniqueWithoutProductoInput | VentaProductoUpdateWithWhereUniqueWithoutProductoInput[]
    updateMany?: VentaProductoUpdateManyWithWhereWithoutProductoInput | VentaProductoUpdateManyWithWhereWithoutProductoInput[]
    deleteMany?: VentaProductoScalarWhereInput | VentaProductoScalarWhereInput[]
  }

  export type MovimientoInventarioUncheckedUpdateManyWithoutProductoNestedInput = {
    create?: XOR<MovimientoInventarioCreateWithoutProductoInput, MovimientoInventarioUncheckedCreateWithoutProductoInput> | MovimientoInventarioCreateWithoutProductoInput[] | MovimientoInventarioUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: MovimientoInventarioCreateOrConnectWithoutProductoInput | MovimientoInventarioCreateOrConnectWithoutProductoInput[]
    upsert?: MovimientoInventarioUpsertWithWhereUniqueWithoutProductoInput | MovimientoInventarioUpsertWithWhereUniqueWithoutProductoInput[]
    createMany?: MovimientoInventarioCreateManyProductoInputEnvelope
    set?: MovimientoInventarioWhereUniqueInput | MovimientoInventarioWhereUniqueInput[]
    disconnect?: MovimientoInventarioWhereUniqueInput | MovimientoInventarioWhereUniqueInput[]
    delete?: MovimientoInventarioWhereUniqueInput | MovimientoInventarioWhereUniqueInput[]
    connect?: MovimientoInventarioWhereUniqueInput | MovimientoInventarioWhereUniqueInput[]
    update?: MovimientoInventarioUpdateWithWhereUniqueWithoutProductoInput | MovimientoInventarioUpdateWithWhereUniqueWithoutProductoInput[]
    updateMany?: MovimientoInventarioUpdateManyWithWhereWithoutProductoInput | MovimientoInventarioUpdateManyWithWhereWithoutProductoInput[]
    deleteMany?: MovimientoInventarioScalarWhereInput | MovimientoInventarioScalarWhereInput[]
  }

  export type CompraCreateNestedManyWithoutProveedorInput = {
    create?: XOR<CompraCreateWithoutProveedorInput, CompraUncheckedCreateWithoutProveedorInput> | CompraCreateWithoutProveedorInput[] | CompraUncheckedCreateWithoutProveedorInput[]
    connectOrCreate?: CompraCreateOrConnectWithoutProveedorInput | CompraCreateOrConnectWithoutProveedorInput[]
    createMany?: CompraCreateManyProveedorInputEnvelope
    connect?: CompraWhereUniqueInput | CompraWhereUniqueInput[]
  }

  export type CompraUncheckedCreateNestedManyWithoutProveedorInput = {
    create?: XOR<CompraCreateWithoutProveedorInput, CompraUncheckedCreateWithoutProveedorInput> | CompraCreateWithoutProveedorInput[] | CompraUncheckedCreateWithoutProveedorInput[]
    connectOrCreate?: CompraCreateOrConnectWithoutProveedorInput | CompraCreateOrConnectWithoutProveedorInput[]
    createMany?: CompraCreateManyProveedorInputEnvelope
    connect?: CompraWhereUniqueInput | CompraWhereUniqueInput[]
  }

  export type CompraUpdateManyWithoutProveedorNestedInput = {
    create?: XOR<CompraCreateWithoutProveedorInput, CompraUncheckedCreateWithoutProveedorInput> | CompraCreateWithoutProveedorInput[] | CompraUncheckedCreateWithoutProveedorInput[]
    connectOrCreate?: CompraCreateOrConnectWithoutProveedorInput | CompraCreateOrConnectWithoutProveedorInput[]
    upsert?: CompraUpsertWithWhereUniqueWithoutProveedorInput | CompraUpsertWithWhereUniqueWithoutProveedorInput[]
    createMany?: CompraCreateManyProveedorInputEnvelope
    set?: CompraWhereUniqueInput | CompraWhereUniqueInput[]
    disconnect?: CompraWhereUniqueInput | CompraWhereUniqueInput[]
    delete?: CompraWhereUniqueInput | CompraWhereUniqueInput[]
    connect?: CompraWhereUniqueInput | CompraWhereUniqueInput[]
    update?: CompraUpdateWithWhereUniqueWithoutProveedorInput | CompraUpdateWithWhereUniqueWithoutProveedorInput[]
    updateMany?: CompraUpdateManyWithWhereWithoutProveedorInput | CompraUpdateManyWithWhereWithoutProveedorInput[]
    deleteMany?: CompraScalarWhereInput | CompraScalarWhereInput[]
  }

  export type CompraUncheckedUpdateManyWithoutProveedorNestedInput = {
    create?: XOR<CompraCreateWithoutProveedorInput, CompraUncheckedCreateWithoutProveedorInput> | CompraCreateWithoutProveedorInput[] | CompraUncheckedCreateWithoutProveedorInput[]
    connectOrCreate?: CompraCreateOrConnectWithoutProveedorInput | CompraCreateOrConnectWithoutProveedorInput[]
    upsert?: CompraUpsertWithWhereUniqueWithoutProveedorInput | CompraUpsertWithWhereUniqueWithoutProveedorInput[]
    createMany?: CompraCreateManyProveedorInputEnvelope
    set?: CompraWhereUniqueInput | CompraWhereUniqueInput[]
    disconnect?: CompraWhereUniqueInput | CompraWhereUniqueInput[]
    delete?: CompraWhereUniqueInput | CompraWhereUniqueInput[]
    connect?: CompraWhereUniqueInput | CompraWhereUniqueInput[]
    update?: CompraUpdateWithWhereUniqueWithoutProveedorInput | CompraUpdateWithWhereUniqueWithoutProveedorInput[]
    updateMany?: CompraUpdateManyWithWhereWithoutProveedorInput | CompraUpdateManyWithWhereWithoutProveedorInput[]
    deleteMany?: CompraScalarWhereInput | CompraScalarWhereInput[]
  }

  export type VentaCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<VentaCreateWithoutUsuarioInput, VentaUncheckedCreateWithoutUsuarioInput> | VentaCreateWithoutUsuarioInput[] | VentaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: VentaCreateOrConnectWithoutUsuarioInput | VentaCreateOrConnectWithoutUsuarioInput[]
    createMany?: VentaCreateManyUsuarioInputEnvelope
    connect?: VentaWhereUniqueInput | VentaWhereUniqueInput[]
  }

  export type CompraCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<CompraCreateWithoutUsuarioInput, CompraUncheckedCreateWithoutUsuarioInput> | CompraCreateWithoutUsuarioInput[] | CompraUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: CompraCreateOrConnectWithoutUsuarioInput | CompraCreateOrConnectWithoutUsuarioInput[]
    createMany?: CompraCreateManyUsuarioInputEnvelope
    connect?: CompraWhereUniqueInput | CompraWhereUniqueInput[]
  }

  export type CajaCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<CajaCreateWithoutUsuarioInput, CajaUncheckedCreateWithoutUsuarioInput> | CajaCreateWithoutUsuarioInput[] | CajaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: CajaCreateOrConnectWithoutUsuarioInput | CajaCreateOrConnectWithoutUsuarioInput[]
    createMany?: CajaCreateManyUsuarioInputEnvelope
    connect?: CajaWhereUniqueInput | CajaWhereUniqueInput[]
  }

  export type VentaUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<VentaCreateWithoutUsuarioInput, VentaUncheckedCreateWithoutUsuarioInput> | VentaCreateWithoutUsuarioInput[] | VentaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: VentaCreateOrConnectWithoutUsuarioInput | VentaCreateOrConnectWithoutUsuarioInput[]
    createMany?: VentaCreateManyUsuarioInputEnvelope
    connect?: VentaWhereUniqueInput | VentaWhereUniqueInput[]
  }

  export type CompraUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<CompraCreateWithoutUsuarioInput, CompraUncheckedCreateWithoutUsuarioInput> | CompraCreateWithoutUsuarioInput[] | CompraUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: CompraCreateOrConnectWithoutUsuarioInput | CompraCreateOrConnectWithoutUsuarioInput[]
    createMany?: CompraCreateManyUsuarioInputEnvelope
    connect?: CompraWhereUniqueInput | CompraWhereUniqueInput[]
  }

  export type CajaUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<CajaCreateWithoutUsuarioInput, CajaUncheckedCreateWithoutUsuarioInput> | CajaCreateWithoutUsuarioInput[] | CajaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: CajaCreateOrConnectWithoutUsuarioInput | CajaCreateOrConnectWithoutUsuarioInput[]
    createMany?: CajaCreateManyUsuarioInputEnvelope
    connect?: CajaWhereUniqueInput | CajaWhereUniqueInput[]
  }

  export type VentaUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<VentaCreateWithoutUsuarioInput, VentaUncheckedCreateWithoutUsuarioInput> | VentaCreateWithoutUsuarioInput[] | VentaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: VentaCreateOrConnectWithoutUsuarioInput | VentaCreateOrConnectWithoutUsuarioInput[]
    upsert?: VentaUpsertWithWhereUniqueWithoutUsuarioInput | VentaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: VentaCreateManyUsuarioInputEnvelope
    set?: VentaWhereUniqueInput | VentaWhereUniqueInput[]
    disconnect?: VentaWhereUniqueInput | VentaWhereUniqueInput[]
    delete?: VentaWhereUniqueInput | VentaWhereUniqueInput[]
    connect?: VentaWhereUniqueInput | VentaWhereUniqueInput[]
    update?: VentaUpdateWithWhereUniqueWithoutUsuarioInput | VentaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: VentaUpdateManyWithWhereWithoutUsuarioInput | VentaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: VentaScalarWhereInput | VentaScalarWhereInput[]
  }

  export type CompraUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<CompraCreateWithoutUsuarioInput, CompraUncheckedCreateWithoutUsuarioInput> | CompraCreateWithoutUsuarioInput[] | CompraUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: CompraCreateOrConnectWithoutUsuarioInput | CompraCreateOrConnectWithoutUsuarioInput[]
    upsert?: CompraUpsertWithWhereUniqueWithoutUsuarioInput | CompraUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: CompraCreateManyUsuarioInputEnvelope
    set?: CompraWhereUniqueInput | CompraWhereUniqueInput[]
    disconnect?: CompraWhereUniqueInput | CompraWhereUniqueInput[]
    delete?: CompraWhereUniqueInput | CompraWhereUniqueInput[]
    connect?: CompraWhereUniqueInput | CompraWhereUniqueInput[]
    update?: CompraUpdateWithWhereUniqueWithoutUsuarioInput | CompraUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: CompraUpdateManyWithWhereWithoutUsuarioInput | CompraUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: CompraScalarWhereInput | CompraScalarWhereInput[]
  }

  export type CajaUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<CajaCreateWithoutUsuarioInput, CajaUncheckedCreateWithoutUsuarioInput> | CajaCreateWithoutUsuarioInput[] | CajaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: CajaCreateOrConnectWithoutUsuarioInput | CajaCreateOrConnectWithoutUsuarioInput[]
    upsert?: CajaUpsertWithWhereUniqueWithoutUsuarioInput | CajaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: CajaCreateManyUsuarioInputEnvelope
    set?: CajaWhereUniqueInput | CajaWhereUniqueInput[]
    disconnect?: CajaWhereUniqueInput | CajaWhereUniqueInput[]
    delete?: CajaWhereUniqueInput | CajaWhereUniqueInput[]
    connect?: CajaWhereUniqueInput | CajaWhereUniqueInput[]
    update?: CajaUpdateWithWhereUniqueWithoutUsuarioInput | CajaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: CajaUpdateManyWithWhereWithoutUsuarioInput | CajaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: CajaScalarWhereInput | CajaScalarWhereInput[]
  }

  export type VentaUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<VentaCreateWithoutUsuarioInput, VentaUncheckedCreateWithoutUsuarioInput> | VentaCreateWithoutUsuarioInput[] | VentaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: VentaCreateOrConnectWithoutUsuarioInput | VentaCreateOrConnectWithoutUsuarioInput[]
    upsert?: VentaUpsertWithWhereUniqueWithoutUsuarioInput | VentaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: VentaCreateManyUsuarioInputEnvelope
    set?: VentaWhereUniqueInput | VentaWhereUniqueInput[]
    disconnect?: VentaWhereUniqueInput | VentaWhereUniqueInput[]
    delete?: VentaWhereUniqueInput | VentaWhereUniqueInput[]
    connect?: VentaWhereUniqueInput | VentaWhereUniqueInput[]
    update?: VentaUpdateWithWhereUniqueWithoutUsuarioInput | VentaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: VentaUpdateManyWithWhereWithoutUsuarioInput | VentaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: VentaScalarWhereInput | VentaScalarWhereInput[]
  }

  export type CompraUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<CompraCreateWithoutUsuarioInput, CompraUncheckedCreateWithoutUsuarioInput> | CompraCreateWithoutUsuarioInput[] | CompraUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: CompraCreateOrConnectWithoutUsuarioInput | CompraCreateOrConnectWithoutUsuarioInput[]
    upsert?: CompraUpsertWithWhereUniqueWithoutUsuarioInput | CompraUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: CompraCreateManyUsuarioInputEnvelope
    set?: CompraWhereUniqueInput | CompraWhereUniqueInput[]
    disconnect?: CompraWhereUniqueInput | CompraWhereUniqueInput[]
    delete?: CompraWhereUniqueInput | CompraWhereUniqueInput[]
    connect?: CompraWhereUniqueInput | CompraWhereUniqueInput[]
    update?: CompraUpdateWithWhereUniqueWithoutUsuarioInput | CompraUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: CompraUpdateManyWithWhereWithoutUsuarioInput | CompraUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: CompraScalarWhereInput | CompraScalarWhereInput[]
  }

  export type CajaUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<CajaCreateWithoutUsuarioInput, CajaUncheckedCreateWithoutUsuarioInput> | CajaCreateWithoutUsuarioInput[] | CajaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: CajaCreateOrConnectWithoutUsuarioInput | CajaCreateOrConnectWithoutUsuarioInput[]
    upsert?: CajaUpsertWithWhereUniqueWithoutUsuarioInput | CajaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: CajaCreateManyUsuarioInputEnvelope
    set?: CajaWhereUniqueInput | CajaWhereUniqueInput[]
    disconnect?: CajaWhereUniqueInput | CajaWhereUniqueInput[]
    delete?: CajaWhereUniqueInput | CajaWhereUniqueInput[]
    connect?: CajaWhereUniqueInput | CajaWhereUniqueInput[]
    update?: CajaUpdateWithWhereUniqueWithoutUsuarioInput | CajaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: CajaUpdateManyWithWhereWithoutUsuarioInput | CajaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: CajaScalarWhereInput | CajaScalarWhereInput[]
  }

  export type ClienteCreateNestedOneWithoutVentasInput = {
    create?: XOR<ClienteCreateWithoutVentasInput, ClienteUncheckedCreateWithoutVentasInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutVentasInput
    connect?: ClienteWhereUniqueInput
  }

  export type UsuarioCreateNestedOneWithoutVentasInput = {
    create?: XOR<UsuarioCreateWithoutVentasInput, UsuarioUncheckedCreateWithoutVentasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutVentasInput
    connect?: UsuarioWhereUniqueInput
  }

  export type VentaProductoCreateNestedManyWithoutVentaInput = {
    create?: XOR<VentaProductoCreateWithoutVentaInput, VentaProductoUncheckedCreateWithoutVentaInput> | VentaProductoCreateWithoutVentaInput[] | VentaProductoUncheckedCreateWithoutVentaInput[]
    connectOrCreate?: VentaProductoCreateOrConnectWithoutVentaInput | VentaProductoCreateOrConnectWithoutVentaInput[]
    createMany?: VentaProductoCreateManyVentaInputEnvelope
    connect?: VentaProductoWhereUniqueInput | VentaProductoWhereUniqueInput[]
  }

  export type FacturaVentaCreateNestedOneWithoutVentaInput = {
    create?: XOR<FacturaVentaCreateWithoutVentaInput, FacturaVentaUncheckedCreateWithoutVentaInput>
    connectOrCreate?: FacturaVentaCreateOrConnectWithoutVentaInput
    connect?: FacturaVentaWhereUniqueInput
  }

  export type VentaProductoUncheckedCreateNestedManyWithoutVentaInput = {
    create?: XOR<VentaProductoCreateWithoutVentaInput, VentaProductoUncheckedCreateWithoutVentaInput> | VentaProductoCreateWithoutVentaInput[] | VentaProductoUncheckedCreateWithoutVentaInput[]
    connectOrCreate?: VentaProductoCreateOrConnectWithoutVentaInput | VentaProductoCreateOrConnectWithoutVentaInput[]
    createMany?: VentaProductoCreateManyVentaInputEnvelope
    connect?: VentaProductoWhereUniqueInput | VentaProductoWhereUniqueInput[]
  }

  export type FacturaVentaUncheckedCreateNestedOneWithoutVentaInput = {
    create?: XOR<FacturaVentaCreateWithoutVentaInput, FacturaVentaUncheckedCreateWithoutVentaInput>
    connectOrCreate?: FacturaVentaCreateOrConnectWithoutVentaInput
    connect?: FacturaVentaWhereUniqueInput
  }

  export type ClienteUpdateOneRequiredWithoutVentasNestedInput = {
    create?: XOR<ClienteCreateWithoutVentasInput, ClienteUncheckedCreateWithoutVentasInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutVentasInput
    upsert?: ClienteUpsertWithoutVentasInput
    connect?: ClienteWhereUniqueInput
    update?: XOR<XOR<ClienteUpdateToOneWithWhereWithoutVentasInput, ClienteUpdateWithoutVentasInput>, ClienteUncheckedUpdateWithoutVentasInput>
  }

  export type UsuarioUpdateOneRequiredWithoutVentasNestedInput = {
    create?: XOR<UsuarioCreateWithoutVentasInput, UsuarioUncheckedCreateWithoutVentasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutVentasInput
    upsert?: UsuarioUpsertWithoutVentasInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutVentasInput, UsuarioUpdateWithoutVentasInput>, UsuarioUncheckedUpdateWithoutVentasInput>
  }

  export type VentaProductoUpdateManyWithoutVentaNestedInput = {
    create?: XOR<VentaProductoCreateWithoutVentaInput, VentaProductoUncheckedCreateWithoutVentaInput> | VentaProductoCreateWithoutVentaInput[] | VentaProductoUncheckedCreateWithoutVentaInput[]
    connectOrCreate?: VentaProductoCreateOrConnectWithoutVentaInput | VentaProductoCreateOrConnectWithoutVentaInput[]
    upsert?: VentaProductoUpsertWithWhereUniqueWithoutVentaInput | VentaProductoUpsertWithWhereUniqueWithoutVentaInput[]
    createMany?: VentaProductoCreateManyVentaInputEnvelope
    set?: VentaProductoWhereUniqueInput | VentaProductoWhereUniqueInput[]
    disconnect?: VentaProductoWhereUniqueInput | VentaProductoWhereUniqueInput[]
    delete?: VentaProductoWhereUniqueInput | VentaProductoWhereUniqueInput[]
    connect?: VentaProductoWhereUniqueInput | VentaProductoWhereUniqueInput[]
    update?: VentaProductoUpdateWithWhereUniqueWithoutVentaInput | VentaProductoUpdateWithWhereUniqueWithoutVentaInput[]
    updateMany?: VentaProductoUpdateManyWithWhereWithoutVentaInput | VentaProductoUpdateManyWithWhereWithoutVentaInput[]
    deleteMany?: VentaProductoScalarWhereInput | VentaProductoScalarWhereInput[]
  }

  export type FacturaVentaUpdateOneWithoutVentaNestedInput = {
    create?: XOR<FacturaVentaCreateWithoutVentaInput, FacturaVentaUncheckedCreateWithoutVentaInput>
    connectOrCreate?: FacturaVentaCreateOrConnectWithoutVentaInput
    upsert?: FacturaVentaUpsertWithoutVentaInput
    disconnect?: FacturaVentaWhereInput | boolean
    delete?: FacturaVentaWhereInput | boolean
    connect?: FacturaVentaWhereUniqueInput
    update?: XOR<XOR<FacturaVentaUpdateToOneWithWhereWithoutVentaInput, FacturaVentaUpdateWithoutVentaInput>, FacturaVentaUncheckedUpdateWithoutVentaInput>
  }

  export type VentaProductoUncheckedUpdateManyWithoutVentaNestedInput = {
    create?: XOR<VentaProductoCreateWithoutVentaInput, VentaProductoUncheckedCreateWithoutVentaInput> | VentaProductoCreateWithoutVentaInput[] | VentaProductoUncheckedCreateWithoutVentaInput[]
    connectOrCreate?: VentaProductoCreateOrConnectWithoutVentaInput | VentaProductoCreateOrConnectWithoutVentaInput[]
    upsert?: VentaProductoUpsertWithWhereUniqueWithoutVentaInput | VentaProductoUpsertWithWhereUniqueWithoutVentaInput[]
    createMany?: VentaProductoCreateManyVentaInputEnvelope
    set?: VentaProductoWhereUniqueInput | VentaProductoWhereUniqueInput[]
    disconnect?: VentaProductoWhereUniqueInput | VentaProductoWhereUniqueInput[]
    delete?: VentaProductoWhereUniqueInput | VentaProductoWhereUniqueInput[]
    connect?: VentaProductoWhereUniqueInput | VentaProductoWhereUniqueInput[]
    update?: VentaProductoUpdateWithWhereUniqueWithoutVentaInput | VentaProductoUpdateWithWhereUniqueWithoutVentaInput[]
    updateMany?: VentaProductoUpdateManyWithWhereWithoutVentaInput | VentaProductoUpdateManyWithWhereWithoutVentaInput[]
    deleteMany?: VentaProductoScalarWhereInput | VentaProductoScalarWhereInput[]
  }

  export type FacturaVentaUncheckedUpdateOneWithoutVentaNestedInput = {
    create?: XOR<FacturaVentaCreateWithoutVentaInput, FacturaVentaUncheckedCreateWithoutVentaInput>
    connectOrCreate?: FacturaVentaCreateOrConnectWithoutVentaInput
    upsert?: FacturaVentaUpsertWithoutVentaInput
    disconnect?: FacturaVentaWhereInput | boolean
    delete?: FacturaVentaWhereInput | boolean
    connect?: FacturaVentaWhereUniqueInput
    update?: XOR<XOR<FacturaVentaUpdateToOneWithWhereWithoutVentaInput, FacturaVentaUpdateWithoutVentaInput>, FacturaVentaUncheckedUpdateWithoutVentaInput>
  }

  export type VentaCreateNestedOneWithoutVenta_productosInput = {
    create?: XOR<VentaCreateWithoutVenta_productosInput, VentaUncheckedCreateWithoutVenta_productosInput>
    connectOrCreate?: VentaCreateOrConnectWithoutVenta_productosInput
    connect?: VentaWhereUniqueInput
  }

  export type ProductoCreateNestedOneWithoutVenta_productosInput = {
    create?: XOR<ProductoCreateWithoutVenta_productosInput, ProductoUncheckedCreateWithoutVenta_productosInput>
    connectOrCreate?: ProductoCreateOrConnectWithoutVenta_productosInput
    connect?: ProductoWhereUniqueInput
  }

  export type VentaUpdateOneRequiredWithoutVenta_productosNestedInput = {
    create?: XOR<VentaCreateWithoutVenta_productosInput, VentaUncheckedCreateWithoutVenta_productosInput>
    connectOrCreate?: VentaCreateOrConnectWithoutVenta_productosInput
    upsert?: VentaUpsertWithoutVenta_productosInput
    connect?: VentaWhereUniqueInput
    update?: XOR<XOR<VentaUpdateToOneWithWhereWithoutVenta_productosInput, VentaUpdateWithoutVenta_productosInput>, VentaUncheckedUpdateWithoutVenta_productosInput>
  }

  export type ProductoUpdateOneRequiredWithoutVenta_productosNestedInput = {
    create?: XOR<ProductoCreateWithoutVenta_productosInput, ProductoUncheckedCreateWithoutVenta_productosInput>
    connectOrCreate?: ProductoCreateOrConnectWithoutVenta_productosInput
    upsert?: ProductoUpsertWithoutVenta_productosInput
    connect?: ProductoWhereUniqueInput
    update?: XOR<XOR<ProductoUpdateToOneWithWhereWithoutVenta_productosInput, ProductoUpdateWithoutVenta_productosInput>, ProductoUncheckedUpdateWithoutVenta_productosInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type UsuarioCreateWithoutCajasInput = {
    usuario?: string | null
    contraseña?: string | null
    rol?: string | null
    ventas?: VentaCreateNestedManyWithoutUsuarioInput
    compras?: CompraCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutCajasInput = {
    id_usuario?: number
    usuario?: string | null
    contraseña?: string | null
    rol?: string | null
    ventas?: VentaUncheckedCreateNestedManyWithoutUsuarioInput
    compras?: CompraUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutCajasInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutCajasInput, UsuarioUncheckedCreateWithoutCajasInput>
  }

  export type UsuarioUpsertWithoutCajasInput = {
    update: XOR<UsuarioUpdateWithoutCajasInput, UsuarioUncheckedUpdateWithoutCajasInput>
    create: XOR<UsuarioCreateWithoutCajasInput, UsuarioUncheckedCreateWithoutCajasInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutCajasInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutCajasInput, UsuarioUncheckedUpdateWithoutCajasInput>
  }

  export type UsuarioUpdateWithoutCajasInput = {
    usuario?: NullableStringFieldUpdateOperationsInput | string | null
    contraseña?: NullableStringFieldUpdateOperationsInput | string | null
    rol?: NullableStringFieldUpdateOperationsInput | string | null
    ventas?: VentaUpdateManyWithoutUsuarioNestedInput
    compras?: CompraUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutCajasInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    usuario?: NullableStringFieldUpdateOperationsInput | string | null
    contraseña?: NullableStringFieldUpdateOperationsInput | string | null
    rol?: NullableStringFieldUpdateOperationsInput | string | null
    ventas?: VentaUncheckedUpdateManyWithoutUsuarioNestedInput
    compras?: CompraUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type ProductoCreateWithoutCategoriaInput = {
    nombre_producto?: string | null
    descripcion?: string | null
    stock?: Decimal | DecimalJsLike | number | string | null
    nivel_alerta?: string | null
    compra_productos?: CompraProductoCreateNestedManyWithoutProductoInput
    venta_productos?: VentaProductoCreateNestedManyWithoutProductoInput
    movimientos?: MovimientoInventarioCreateNestedManyWithoutProductoInput
  }

  export type ProductoUncheckedCreateWithoutCategoriaInput = {
    id_producto?: number
    nombre_producto?: string | null
    descripcion?: string | null
    stock?: Decimal | DecimalJsLike | number | string | null
    nivel_alerta?: string | null
    compra_productos?: CompraProductoUncheckedCreateNestedManyWithoutProductoInput
    venta_productos?: VentaProductoUncheckedCreateNestedManyWithoutProductoInput
    movimientos?: MovimientoInventarioUncheckedCreateNestedManyWithoutProductoInput
  }

  export type ProductoCreateOrConnectWithoutCategoriaInput = {
    where: ProductoWhereUniqueInput
    create: XOR<ProductoCreateWithoutCategoriaInput, ProductoUncheckedCreateWithoutCategoriaInput>
  }

  export type ProductoCreateManyCategoriaInputEnvelope = {
    data: ProductoCreateManyCategoriaInput | ProductoCreateManyCategoriaInput[]
    skipDuplicates?: boolean
  }

  export type ProductoUpsertWithWhereUniqueWithoutCategoriaInput = {
    where: ProductoWhereUniqueInput
    update: XOR<ProductoUpdateWithoutCategoriaInput, ProductoUncheckedUpdateWithoutCategoriaInput>
    create: XOR<ProductoCreateWithoutCategoriaInput, ProductoUncheckedCreateWithoutCategoriaInput>
  }

  export type ProductoUpdateWithWhereUniqueWithoutCategoriaInput = {
    where: ProductoWhereUniqueInput
    data: XOR<ProductoUpdateWithoutCategoriaInput, ProductoUncheckedUpdateWithoutCategoriaInput>
  }

  export type ProductoUpdateManyWithWhereWithoutCategoriaInput = {
    where: ProductoScalarWhereInput
    data: XOR<ProductoUpdateManyMutationInput, ProductoUncheckedUpdateManyWithoutCategoriaInput>
  }

  export type ProductoScalarWhereInput = {
    AND?: ProductoScalarWhereInput | ProductoScalarWhereInput[]
    OR?: ProductoScalarWhereInput[]
    NOT?: ProductoScalarWhereInput | ProductoScalarWhereInput[]
    id_producto?: IntFilter<"Producto"> | number
    nombre_producto?: StringNullableFilter<"Producto"> | string | null
    descripcion?: StringNullableFilter<"Producto"> | string | null
    stock?: DecimalNullableFilter<"Producto"> | Decimal | DecimalJsLike | number | string | null
    nivel_alerta?: StringNullableFilter<"Producto"> | string | null
    categoria_id_categoria?: IntFilter<"Producto"> | number
  }

  export type VentaCreateWithoutClienteInput = {
    tipo_venta?: string | null
    estado?: string | null
    cliente_cedula: string
    usuario: UsuarioCreateNestedOneWithoutVentasInput
    venta_productos?: VentaProductoCreateNestedManyWithoutVentaInput
    factura_venta?: FacturaVentaCreateNestedOneWithoutVentaInput
  }

  export type VentaUncheckedCreateWithoutClienteInput = {
    id_venta?: number
    tipo_venta?: string | null
    estado?: string | null
    cliente_cedula: string
    usuario_id_usuario: number
    venta_productos?: VentaProductoUncheckedCreateNestedManyWithoutVentaInput
    factura_venta?: FacturaVentaUncheckedCreateNestedOneWithoutVentaInput
  }

  export type VentaCreateOrConnectWithoutClienteInput = {
    where: VentaWhereUniqueInput
    create: XOR<VentaCreateWithoutClienteInput, VentaUncheckedCreateWithoutClienteInput>
  }

  export type VentaCreateManyClienteInputEnvelope = {
    data: VentaCreateManyClienteInput | VentaCreateManyClienteInput[]
    skipDuplicates?: boolean
  }

  export type VentaUpsertWithWhereUniqueWithoutClienteInput = {
    where: VentaWhereUniqueInput
    update: XOR<VentaUpdateWithoutClienteInput, VentaUncheckedUpdateWithoutClienteInput>
    create: XOR<VentaCreateWithoutClienteInput, VentaUncheckedCreateWithoutClienteInput>
  }

  export type VentaUpdateWithWhereUniqueWithoutClienteInput = {
    where: VentaWhereUniqueInput
    data: XOR<VentaUpdateWithoutClienteInput, VentaUncheckedUpdateWithoutClienteInput>
  }

  export type VentaUpdateManyWithWhereWithoutClienteInput = {
    where: VentaScalarWhereInput
    data: XOR<VentaUpdateManyMutationInput, VentaUncheckedUpdateManyWithoutClienteInput>
  }

  export type VentaScalarWhereInput = {
    AND?: VentaScalarWhereInput | VentaScalarWhereInput[]
    OR?: VentaScalarWhereInput[]
    NOT?: VentaScalarWhereInput | VentaScalarWhereInput[]
    id_venta?: IntFilter<"Venta"> | number
    tipo_venta?: StringNullableFilter<"Venta"> | string | null
    estado?: StringNullableFilter<"Venta"> | string | null
    cliente_id_cliente?: IntFilter<"Venta"> | number
    cliente_cedula?: StringFilter<"Venta"> | string
    usuario_id_usuario?: IntFilter<"Venta"> | number
  }

  export type UsuarioCreateWithoutComprasInput = {
    usuario?: string | null
    contraseña?: string | null
    rol?: string | null
    ventas?: VentaCreateNestedManyWithoutUsuarioInput
    cajas?: CajaCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutComprasInput = {
    id_usuario?: number
    usuario?: string | null
    contraseña?: string | null
    rol?: string | null
    ventas?: VentaUncheckedCreateNestedManyWithoutUsuarioInput
    cajas?: CajaUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutComprasInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutComprasInput, UsuarioUncheckedCreateWithoutComprasInput>
  }

  export type ProveedorCreateWithoutComprasInput = {
    nombre?: string | null
    telefono?: string | null
    direccion?: string | null
  }

  export type ProveedorUncheckedCreateWithoutComprasInput = {
    id_proveedor?: number
    nombre?: string | null
    telefono?: string | null
    direccion?: string | null
  }

  export type ProveedorCreateOrConnectWithoutComprasInput = {
    where: ProveedorWhereUniqueInput
    create: XOR<ProveedorCreateWithoutComprasInput, ProveedorUncheckedCreateWithoutComprasInput>
  }

  export type CompraProductoCreateWithoutCompraInput = {
    precio_unitario: Decimal | DecimalJsLike | number | string
    cantidad: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
    producto: ProductoCreateNestedOneWithoutCompra_productosInput
  }

  export type CompraProductoUncheckedCreateWithoutCompraInput = {
    producto_id_producto: number
    precio_unitario: Decimal | DecimalJsLike | number | string
    cantidad: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
  }

  export type CompraProductoCreateOrConnectWithoutCompraInput = {
    where: CompraProductoWhereUniqueInput
    create: XOR<CompraProductoCreateWithoutCompraInput, CompraProductoUncheckedCreateWithoutCompraInput>
  }

  export type CompraProductoCreateManyCompraInputEnvelope = {
    data: CompraProductoCreateManyCompraInput | CompraProductoCreateManyCompraInput[]
    skipDuplicates?: boolean
  }

  export type FacturaCompraCreateWithoutCompraInput = {
    fecha?: Date | string | null
    subtotal?: Decimal | DecimalJsLike | number | string | null
    impuestos?: Decimal | DecimalJsLike | number | string | null
    total?: Decimal | DecimalJsLike | number | string | null
  }

  export type FacturaCompraUncheckedCreateWithoutCompraInput = {
    id_factura?: number
    fecha?: Date | string | null
    subtotal?: Decimal | DecimalJsLike | number | string | null
    impuestos?: Decimal | DecimalJsLike | number | string | null
    total?: Decimal | DecimalJsLike | number | string | null
  }

  export type FacturaCompraCreateOrConnectWithoutCompraInput = {
    where: FacturaCompraWhereUniqueInput
    create: XOR<FacturaCompraCreateWithoutCompraInput, FacturaCompraUncheckedCreateWithoutCompraInput>
  }

  export type UsuarioUpsertWithoutComprasInput = {
    update: XOR<UsuarioUpdateWithoutComprasInput, UsuarioUncheckedUpdateWithoutComprasInput>
    create: XOR<UsuarioCreateWithoutComprasInput, UsuarioUncheckedCreateWithoutComprasInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutComprasInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutComprasInput, UsuarioUncheckedUpdateWithoutComprasInput>
  }

  export type UsuarioUpdateWithoutComprasInput = {
    usuario?: NullableStringFieldUpdateOperationsInput | string | null
    contraseña?: NullableStringFieldUpdateOperationsInput | string | null
    rol?: NullableStringFieldUpdateOperationsInput | string | null
    ventas?: VentaUpdateManyWithoutUsuarioNestedInput
    cajas?: CajaUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutComprasInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    usuario?: NullableStringFieldUpdateOperationsInput | string | null
    contraseña?: NullableStringFieldUpdateOperationsInput | string | null
    rol?: NullableStringFieldUpdateOperationsInput | string | null
    ventas?: VentaUncheckedUpdateManyWithoutUsuarioNestedInput
    cajas?: CajaUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type ProveedorUpsertWithoutComprasInput = {
    update: XOR<ProveedorUpdateWithoutComprasInput, ProveedorUncheckedUpdateWithoutComprasInput>
    create: XOR<ProveedorCreateWithoutComprasInput, ProveedorUncheckedCreateWithoutComprasInput>
    where?: ProveedorWhereInput
  }

  export type ProveedorUpdateToOneWithWhereWithoutComprasInput = {
    where?: ProveedorWhereInput
    data: XOR<ProveedorUpdateWithoutComprasInput, ProveedorUncheckedUpdateWithoutComprasInput>
  }

  export type ProveedorUpdateWithoutComprasInput = {
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProveedorUncheckedUpdateWithoutComprasInput = {
    id_proveedor?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CompraProductoUpsertWithWhereUniqueWithoutCompraInput = {
    where: CompraProductoWhereUniqueInput
    update: XOR<CompraProductoUpdateWithoutCompraInput, CompraProductoUncheckedUpdateWithoutCompraInput>
    create: XOR<CompraProductoCreateWithoutCompraInput, CompraProductoUncheckedCreateWithoutCompraInput>
  }

  export type CompraProductoUpdateWithWhereUniqueWithoutCompraInput = {
    where: CompraProductoWhereUniqueInput
    data: XOR<CompraProductoUpdateWithoutCompraInput, CompraProductoUncheckedUpdateWithoutCompraInput>
  }

  export type CompraProductoUpdateManyWithWhereWithoutCompraInput = {
    where: CompraProductoScalarWhereInput
    data: XOR<CompraProductoUpdateManyMutationInput, CompraProductoUncheckedUpdateManyWithoutCompraInput>
  }

  export type CompraProductoScalarWhereInput = {
    AND?: CompraProductoScalarWhereInput | CompraProductoScalarWhereInput[]
    OR?: CompraProductoScalarWhereInput[]
    NOT?: CompraProductoScalarWhereInput | CompraProductoScalarWhereInput[]
    compra_id_compra?: IntFilter<"CompraProducto"> | number
    producto_id_producto?: IntFilter<"CompraProducto"> | number
    precio_unitario?: DecimalFilter<"CompraProducto"> | Decimal | DecimalJsLike | number | string
    cantidad?: DecimalFilter<"CompraProducto"> | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFilter<"CompraProducto"> | Decimal | DecimalJsLike | number | string
  }

  export type FacturaCompraUpsertWithoutCompraInput = {
    update: XOR<FacturaCompraUpdateWithoutCompraInput, FacturaCompraUncheckedUpdateWithoutCompraInput>
    create: XOR<FacturaCompraCreateWithoutCompraInput, FacturaCompraUncheckedCreateWithoutCompraInput>
    where?: FacturaCompraWhereInput
  }

  export type FacturaCompraUpdateToOneWithWhereWithoutCompraInput = {
    where?: FacturaCompraWhereInput
    data: XOR<FacturaCompraUpdateWithoutCompraInput, FacturaCompraUncheckedUpdateWithoutCompraInput>
  }

  export type FacturaCompraUpdateWithoutCompraInput = {
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subtotal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    impuestos?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type FacturaCompraUncheckedUpdateWithoutCompraInput = {
    id_factura?: IntFieldUpdateOperationsInput | number
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subtotal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    impuestos?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type CompraCreateWithoutCompra_productosInput = {
    fecha_compra?: Date | string | null
    estado?: string | null
    total?: Decimal | DecimalJsLike | number | string | null
    usuario: UsuarioCreateNestedOneWithoutComprasInput
    proveedor: ProveedorCreateNestedOneWithoutComprasInput
    factura_compra?: FacturaCompraCreateNestedOneWithoutCompraInput
  }

  export type CompraUncheckedCreateWithoutCompra_productosInput = {
    id_compra?: number
    fecha_compra?: Date | string | null
    estado?: string | null
    total?: Decimal | DecimalJsLike | number | string | null
    usuario_id_usuario: number
    proveedor_id_proveedor: number
    factura_compra?: FacturaCompraUncheckedCreateNestedOneWithoutCompraInput
  }

  export type CompraCreateOrConnectWithoutCompra_productosInput = {
    where: CompraWhereUniqueInput
    create: XOR<CompraCreateWithoutCompra_productosInput, CompraUncheckedCreateWithoutCompra_productosInput>
  }

  export type ProductoCreateWithoutCompra_productosInput = {
    nombre_producto?: string | null
    descripcion?: string | null
    stock?: Decimal | DecimalJsLike | number | string | null
    nivel_alerta?: string | null
    categoria: CategoriaCreateNestedOneWithoutProductosInput
    venta_productos?: VentaProductoCreateNestedManyWithoutProductoInput
    movimientos?: MovimientoInventarioCreateNestedManyWithoutProductoInput
  }

  export type ProductoUncheckedCreateWithoutCompra_productosInput = {
    id_producto?: number
    nombre_producto?: string | null
    descripcion?: string | null
    stock?: Decimal | DecimalJsLike | number | string | null
    nivel_alerta?: string | null
    categoria_id_categoria: number
    venta_productos?: VentaProductoUncheckedCreateNestedManyWithoutProductoInput
    movimientos?: MovimientoInventarioUncheckedCreateNestedManyWithoutProductoInput
  }

  export type ProductoCreateOrConnectWithoutCompra_productosInput = {
    where: ProductoWhereUniqueInput
    create: XOR<ProductoCreateWithoutCompra_productosInput, ProductoUncheckedCreateWithoutCompra_productosInput>
  }

  export type CompraUpsertWithoutCompra_productosInput = {
    update: XOR<CompraUpdateWithoutCompra_productosInput, CompraUncheckedUpdateWithoutCompra_productosInput>
    create: XOR<CompraCreateWithoutCompra_productosInput, CompraUncheckedCreateWithoutCompra_productosInput>
    where?: CompraWhereInput
  }

  export type CompraUpdateToOneWithWhereWithoutCompra_productosInput = {
    where?: CompraWhereInput
    data: XOR<CompraUpdateWithoutCompra_productosInput, CompraUncheckedUpdateWithoutCompra_productosInput>
  }

  export type CompraUpdateWithoutCompra_productosInput = {
    fecha_compra?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    usuario?: UsuarioUpdateOneRequiredWithoutComprasNestedInput
    proveedor?: ProveedorUpdateOneRequiredWithoutComprasNestedInput
    factura_compra?: FacturaCompraUpdateOneWithoutCompraNestedInput
  }

  export type CompraUncheckedUpdateWithoutCompra_productosInput = {
    id_compra?: IntFieldUpdateOperationsInput | number
    fecha_compra?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    usuario_id_usuario?: IntFieldUpdateOperationsInput | number
    proveedor_id_proveedor?: IntFieldUpdateOperationsInput | number
    factura_compra?: FacturaCompraUncheckedUpdateOneWithoutCompraNestedInput
  }

  export type ProductoUpsertWithoutCompra_productosInput = {
    update: XOR<ProductoUpdateWithoutCompra_productosInput, ProductoUncheckedUpdateWithoutCompra_productosInput>
    create: XOR<ProductoCreateWithoutCompra_productosInput, ProductoUncheckedCreateWithoutCompra_productosInput>
    where?: ProductoWhereInput
  }

  export type ProductoUpdateToOneWithWhereWithoutCompra_productosInput = {
    where?: ProductoWhereInput
    data: XOR<ProductoUpdateWithoutCompra_productosInput, ProductoUncheckedUpdateWithoutCompra_productosInput>
  }

  export type ProductoUpdateWithoutCompra_productosInput = {
    nombre_producto?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    stock?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nivel_alerta?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: CategoriaUpdateOneRequiredWithoutProductosNestedInput
    venta_productos?: VentaProductoUpdateManyWithoutProductoNestedInput
    movimientos?: MovimientoInventarioUpdateManyWithoutProductoNestedInput
  }

  export type ProductoUncheckedUpdateWithoutCompra_productosInput = {
    id_producto?: IntFieldUpdateOperationsInput | number
    nombre_producto?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    stock?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nivel_alerta?: NullableStringFieldUpdateOperationsInput | string | null
    categoria_id_categoria?: IntFieldUpdateOperationsInput | number
    venta_productos?: VentaProductoUncheckedUpdateManyWithoutProductoNestedInput
    movimientos?: MovimientoInventarioUncheckedUpdateManyWithoutProductoNestedInput
  }

  export type CompraCreateWithoutFactura_compraInput = {
    fecha_compra?: Date | string | null
    estado?: string | null
    total?: Decimal | DecimalJsLike | number | string | null
    usuario: UsuarioCreateNestedOneWithoutComprasInput
    proveedor: ProveedorCreateNestedOneWithoutComprasInput
    compra_productos?: CompraProductoCreateNestedManyWithoutCompraInput
  }

  export type CompraUncheckedCreateWithoutFactura_compraInput = {
    id_compra?: number
    fecha_compra?: Date | string | null
    estado?: string | null
    total?: Decimal | DecimalJsLike | number | string | null
    usuario_id_usuario: number
    proveedor_id_proveedor: number
    compra_productos?: CompraProductoUncheckedCreateNestedManyWithoutCompraInput
  }

  export type CompraCreateOrConnectWithoutFactura_compraInput = {
    where: CompraWhereUniqueInput
    create: XOR<CompraCreateWithoutFactura_compraInput, CompraUncheckedCreateWithoutFactura_compraInput>
  }

  export type CompraUpsertWithoutFactura_compraInput = {
    update: XOR<CompraUpdateWithoutFactura_compraInput, CompraUncheckedUpdateWithoutFactura_compraInput>
    create: XOR<CompraCreateWithoutFactura_compraInput, CompraUncheckedCreateWithoutFactura_compraInput>
    where?: CompraWhereInput
  }

  export type CompraUpdateToOneWithWhereWithoutFactura_compraInput = {
    where?: CompraWhereInput
    data: XOR<CompraUpdateWithoutFactura_compraInput, CompraUncheckedUpdateWithoutFactura_compraInput>
  }

  export type CompraUpdateWithoutFactura_compraInput = {
    fecha_compra?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    usuario?: UsuarioUpdateOneRequiredWithoutComprasNestedInput
    proveedor?: ProveedorUpdateOneRequiredWithoutComprasNestedInput
    compra_productos?: CompraProductoUpdateManyWithoutCompraNestedInput
  }

  export type CompraUncheckedUpdateWithoutFactura_compraInput = {
    id_compra?: IntFieldUpdateOperationsInput | number
    fecha_compra?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    usuario_id_usuario?: IntFieldUpdateOperationsInput | number
    proveedor_id_proveedor?: IntFieldUpdateOperationsInput | number
    compra_productos?: CompraProductoUncheckedUpdateManyWithoutCompraNestedInput
  }

  export type VentaCreateWithoutFactura_ventaInput = {
    tipo_venta?: string | null
    estado?: string | null
    cliente_cedula: string
    cliente: ClienteCreateNestedOneWithoutVentasInput
    usuario: UsuarioCreateNestedOneWithoutVentasInput
    venta_productos?: VentaProductoCreateNestedManyWithoutVentaInput
  }

  export type VentaUncheckedCreateWithoutFactura_ventaInput = {
    id_venta?: number
    tipo_venta?: string | null
    estado?: string | null
    cliente_id_cliente: number
    cliente_cedula: string
    usuario_id_usuario: number
    venta_productos?: VentaProductoUncheckedCreateNestedManyWithoutVentaInput
  }

  export type VentaCreateOrConnectWithoutFactura_ventaInput = {
    where: VentaWhereUniqueInput
    create: XOR<VentaCreateWithoutFactura_ventaInput, VentaUncheckedCreateWithoutFactura_ventaInput>
  }

  export type VentaUpsertWithoutFactura_ventaInput = {
    update: XOR<VentaUpdateWithoutFactura_ventaInput, VentaUncheckedUpdateWithoutFactura_ventaInput>
    create: XOR<VentaCreateWithoutFactura_ventaInput, VentaUncheckedCreateWithoutFactura_ventaInput>
    where?: VentaWhereInput
  }

  export type VentaUpdateToOneWithWhereWithoutFactura_ventaInput = {
    where?: VentaWhereInput
    data: XOR<VentaUpdateWithoutFactura_ventaInput, VentaUncheckedUpdateWithoutFactura_ventaInput>
  }

  export type VentaUpdateWithoutFactura_ventaInput = {
    tipo_venta?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    cliente_cedula?: StringFieldUpdateOperationsInput | string
    cliente?: ClienteUpdateOneRequiredWithoutVentasNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutVentasNestedInput
    venta_productos?: VentaProductoUpdateManyWithoutVentaNestedInput
  }

  export type VentaUncheckedUpdateWithoutFactura_ventaInput = {
    id_venta?: IntFieldUpdateOperationsInput | number
    tipo_venta?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    cliente_id_cliente?: IntFieldUpdateOperationsInput | number
    cliente_cedula?: StringFieldUpdateOperationsInput | string
    usuario_id_usuario?: IntFieldUpdateOperationsInput | number
    venta_productos?: VentaProductoUncheckedUpdateManyWithoutVentaNestedInput
  }

  export type ProductoCreateWithoutMovimientosInput = {
    nombre_producto?: string | null
    descripcion?: string | null
    stock?: Decimal | DecimalJsLike | number | string | null
    nivel_alerta?: string | null
    categoria: CategoriaCreateNestedOneWithoutProductosInput
    compra_productos?: CompraProductoCreateNestedManyWithoutProductoInput
    venta_productos?: VentaProductoCreateNestedManyWithoutProductoInput
  }

  export type ProductoUncheckedCreateWithoutMovimientosInput = {
    id_producto?: number
    nombre_producto?: string | null
    descripcion?: string | null
    stock?: Decimal | DecimalJsLike | number | string | null
    nivel_alerta?: string | null
    categoria_id_categoria: number
    compra_productos?: CompraProductoUncheckedCreateNestedManyWithoutProductoInput
    venta_productos?: VentaProductoUncheckedCreateNestedManyWithoutProductoInput
  }

  export type ProductoCreateOrConnectWithoutMovimientosInput = {
    where: ProductoWhereUniqueInput
    create: XOR<ProductoCreateWithoutMovimientosInput, ProductoUncheckedCreateWithoutMovimientosInput>
  }

  export type ProductoUpsertWithoutMovimientosInput = {
    update: XOR<ProductoUpdateWithoutMovimientosInput, ProductoUncheckedUpdateWithoutMovimientosInput>
    create: XOR<ProductoCreateWithoutMovimientosInput, ProductoUncheckedCreateWithoutMovimientosInput>
    where?: ProductoWhereInput
  }

  export type ProductoUpdateToOneWithWhereWithoutMovimientosInput = {
    where?: ProductoWhereInput
    data: XOR<ProductoUpdateWithoutMovimientosInput, ProductoUncheckedUpdateWithoutMovimientosInput>
  }

  export type ProductoUpdateWithoutMovimientosInput = {
    nombre_producto?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    stock?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nivel_alerta?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: CategoriaUpdateOneRequiredWithoutProductosNestedInput
    compra_productos?: CompraProductoUpdateManyWithoutProductoNestedInput
    venta_productos?: VentaProductoUpdateManyWithoutProductoNestedInput
  }

  export type ProductoUncheckedUpdateWithoutMovimientosInput = {
    id_producto?: IntFieldUpdateOperationsInput | number
    nombre_producto?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    stock?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nivel_alerta?: NullableStringFieldUpdateOperationsInput | string | null
    categoria_id_categoria?: IntFieldUpdateOperationsInput | number
    compra_productos?: CompraProductoUncheckedUpdateManyWithoutProductoNestedInput
    venta_productos?: VentaProductoUncheckedUpdateManyWithoutProductoNestedInput
  }

  export type CategoriaCreateWithoutProductosInput = {
    nombre: string
  }

  export type CategoriaUncheckedCreateWithoutProductosInput = {
    id_categoria?: number
    nombre: string
  }

  export type CategoriaCreateOrConnectWithoutProductosInput = {
    where: CategoriaWhereUniqueInput
    create: XOR<CategoriaCreateWithoutProductosInput, CategoriaUncheckedCreateWithoutProductosInput>
  }

  export type CompraProductoCreateWithoutProductoInput = {
    precio_unitario: Decimal | DecimalJsLike | number | string
    cantidad: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
    compra: CompraCreateNestedOneWithoutCompra_productosInput
  }

  export type CompraProductoUncheckedCreateWithoutProductoInput = {
    compra_id_compra: number
    precio_unitario: Decimal | DecimalJsLike | number | string
    cantidad: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
  }

  export type CompraProductoCreateOrConnectWithoutProductoInput = {
    where: CompraProductoWhereUniqueInput
    create: XOR<CompraProductoCreateWithoutProductoInput, CompraProductoUncheckedCreateWithoutProductoInput>
  }

  export type CompraProductoCreateManyProductoInputEnvelope = {
    data: CompraProductoCreateManyProductoInput | CompraProductoCreateManyProductoInput[]
    skipDuplicates?: boolean
  }

  export type VentaProductoCreateWithoutProductoInput = {
    cantidad: Decimal | DecimalJsLike | number | string
    precio_unitario: Decimal | DecimalJsLike | number | string
    venta: VentaCreateNestedOneWithoutVenta_productosInput
  }

  export type VentaProductoUncheckedCreateWithoutProductoInput = {
    venta_id_venta: number
    cantidad: Decimal | DecimalJsLike | number | string
    precio_unitario: Decimal | DecimalJsLike | number | string
  }

  export type VentaProductoCreateOrConnectWithoutProductoInput = {
    where: VentaProductoWhereUniqueInput
    create: XOR<VentaProductoCreateWithoutProductoInput, VentaProductoUncheckedCreateWithoutProductoInput>
  }

  export type VentaProductoCreateManyProductoInputEnvelope = {
    data: VentaProductoCreateManyProductoInput | VentaProductoCreateManyProductoInput[]
    skipDuplicates?: boolean
  }

  export type MovimientoInventarioCreateWithoutProductoInput = {
    tipo_movimiento?: string | null
    fecha_movimiento?: Date | string | null
    cantidad?: Decimal | DecimalJsLike | number | string | null
  }

  export type MovimientoInventarioUncheckedCreateWithoutProductoInput = {
    id_movimiento?: number
    tipo_movimiento?: string | null
    fecha_movimiento?: Date | string | null
    cantidad?: Decimal | DecimalJsLike | number | string | null
  }

  export type MovimientoInventarioCreateOrConnectWithoutProductoInput = {
    where: MovimientoInventarioWhereUniqueInput
    create: XOR<MovimientoInventarioCreateWithoutProductoInput, MovimientoInventarioUncheckedCreateWithoutProductoInput>
  }

  export type MovimientoInventarioCreateManyProductoInputEnvelope = {
    data: MovimientoInventarioCreateManyProductoInput | MovimientoInventarioCreateManyProductoInput[]
    skipDuplicates?: boolean
  }

  export type CategoriaUpsertWithoutProductosInput = {
    update: XOR<CategoriaUpdateWithoutProductosInput, CategoriaUncheckedUpdateWithoutProductosInput>
    create: XOR<CategoriaCreateWithoutProductosInput, CategoriaUncheckedCreateWithoutProductosInput>
    where?: CategoriaWhereInput
  }

  export type CategoriaUpdateToOneWithWhereWithoutProductosInput = {
    where?: CategoriaWhereInput
    data: XOR<CategoriaUpdateWithoutProductosInput, CategoriaUncheckedUpdateWithoutProductosInput>
  }

  export type CategoriaUpdateWithoutProductosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type CategoriaUncheckedUpdateWithoutProductosInput = {
    id_categoria?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type CompraProductoUpsertWithWhereUniqueWithoutProductoInput = {
    where: CompraProductoWhereUniqueInput
    update: XOR<CompraProductoUpdateWithoutProductoInput, CompraProductoUncheckedUpdateWithoutProductoInput>
    create: XOR<CompraProductoCreateWithoutProductoInput, CompraProductoUncheckedCreateWithoutProductoInput>
  }

  export type CompraProductoUpdateWithWhereUniqueWithoutProductoInput = {
    where: CompraProductoWhereUniqueInput
    data: XOR<CompraProductoUpdateWithoutProductoInput, CompraProductoUncheckedUpdateWithoutProductoInput>
  }

  export type CompraProductoUpdateManyWithWhereWithoutProductoInput = {
    where: CompraProductoScalarWhereInput
    data: XOR<CompraProductoUpdateManyMutationInput, CompraProductoUncheckedUpdateManyWithoutProductoInput>
  }

  export type VentaProductoUpsertWithWhereUniqueWithoutProductoInput = {
    where: VentaProductoWhereUniqueInput
    update: XOR<VentaProductoUpdateWithoutProductoInput, VentaProductoUncheckedUpdateWithoutProductoInput>
    create: XOR<VentaProductoCreateWithoutProductoInput, VentaProductoUncheckedCreateWithoutProductoInput>
  }

  export type VentaProductoUpdateWithWhereUniqueWithoutProductoInput = {
    where: VentaProductoWhereUniqueInput
    data: XOR<VentaProductoUpdateWithoutProductoInput, VentaProductoUncheckedUpdateWithoutProductoInput>
  }

  export type VentaProductoUpdateManyWithWhereWithoutProductoInput = {
    where: VentaProductoScalarWhereInput
    data: XOR<VentaProductoUpdateManyMutationInput, VentaProductoUncheckedUpdateManyWithoutProductoInput>
  }

  export type VentaProductoScalarWhereInput = {
    AND?: VentaProductoScalarWhereInput | VentaProductoScalarWhereInput[]
    OR?: VentaProductoScalarWhereInput[]
    NOT?: VentaProductoScalarWhereInput | VentaProductoScalarWhereInput[]
    venta_id_venta?: IntFilter<"VentaProducto"> | number
    producto_id_producto?: IntFilter<"VentaProducto"> | number
    cantidad?: DecimalFilter<"VentaProducto"> | Decimal | DecimalJsLike | number | string
    precio_unitario?: DecimalFilter<"VentaProducto"> | Decimal | DecimalJsLike | number | string
  }

  export type MovimientoInventarioUpsertWithWhereUniqueWithoutProductoInput = {
    where: MovimientoInventarioWhereUniqueInput
    update: XOR<MovimientoInventarioUpdateWithoutProductoInput, MovimientoInventarioUncheckedUpdateWithoutProductoInput>
    create: XOR<MovimientoInventarioCreateWithoutProductoInput, MovimientoInventarioUncheckedCreateWithoutProductoInput>
  }

  export type MovimientoInventarioUpdateWithWhereUniqueWithoutProductoInput = {
    where: MovimientoInventarioWhereUniqueInput
    data: XOR<MovimientoInventarioUpdateWithoutProductoInput, MovimientoInventarioUncheckedUpdateWithoutProductoInput>
  }

  export type MovimientoInventarioUpdateManyWithWhereWithoutProductoInput = {
    where: MovimientoInventarioScalarWhereInput
    data: XOR<MovimientoInventarioUpdateManyMutationInput, MovimientoInventarioUncheckedUpdateManyWithoutProductoInput>
  }

  export type MovimientoInventarioScalarWhereInput = {
    AND?: MovimientoInventarioScalarWhereInput | MovimientoInventarioScalarWhereInput[]
    OR?: MovimientoInventarioScalarWhereInput[]
    NOT?: MovimientoInventarioScalarWhereInput | MovimientoInventarioScalarWhereInput[]
    id_movimiento?: IntFilter<"MovimientoInventario"> | number
    tipo_movimiento?: StringNullableFilter<"MovimientoInventario"> | string | null
    fecha_movimiento?: DateTimeNullableFilter<"MovimientoInventario"> | Date | string | null
    cantidad?: DecimalNullableFilter<"MovimientoInventario"> | Decimal | DecimalJsLike | number | string | null
    producto_id_producto?: IntFilter<"MovimientoInventario"> | number
  }

  export type CompraCreateWithoutProveedorInput = {
    fecha_compra?: Date | string | null
    estado?: string | null
    total?: Decimal | DecimalJsLike | number | string | null
    usuario: UsuarioCreateNestedOneWithoutComprasInput
    compra_productos?: CompraProductoCreateNestedManyWithoutCompraInput
    factura_compra?: FacturaCompraCreateNestedOneWithoutCompraInput
  }

  export type CompraUncheckedCreateWithoutProveedorInput = {
    id_compra?: number
    fecha_compra?: Date | string | null
    estado?: string | null
    total?: Decimal | DecimalJsLike | number | string | null
    usuario_id_usuario: number
    compra_productos?: CompraProductoUncheckedCreateNestedManyWithoutCompraInput
    factura_compra?: FacturaCompraUncheckedCreateNestedOneWithoutCompraInput
  }

  export type CompraCreateOrConnectWithoutProveedorInput = {
    where: CompraWhereUniqueInput
    create: XOR<CompraCreateWithoutProveedorInput, CompraUncheckedCreateWithoutProveedorInput>
  }

  export type CompraCreateManyProveedorInputEnvelope = {
    data: CompraCreateManyProveedorInput | CompraCreateManyProveedorInput[]
    skipDuplicates?: boolean
  }

  export type CompraUpsertWithWhereUniqueWithoutProveedorInput = {
    where: CompraWhereUniqueInput
    update: XOR<CompraUpdateWithoutProveedorInput, CompraUncheckedUpdateWithoutProveedorInput>
    create: XOR<CompraCreateWithoutProveedorInput, CompraUncheckedCreateWithoutProveedorInput>
  }

  export type CompraUpdateWithWhereUniqueWithoutProveedorInput = {
    where: CompraWhereUniqueInput
    data: XOR<CompraUpdateWithoutProveedorInput, CompraUncheckedUpdateWithoutProveedorInput>
  }

  export type CompraUpdateManyWithWhereWithoutProveedorInput = {
    where: CompraScalarWhereInput
    data: XOR<CompraUpdateManyMutationInput, CompraUncheckedUpdateManyWithoutProveedorInput>
  }

  export type CompraScalarWhereInput = {
    AND?: CompraScalarWhereInput | CompraScalarWhereInput[]
    OR?: CompraScalarWhereInput[]
    NOT?: CompraScalarWhereInput | CompraScalarWhereInput[]
    id_compra?: IntFilter<"Compra"> | number
    fecha_compra?: DateTimeNullableFilter<"Compra"> | Date | string | null
    estado?: StringNullableFilter<"Compra"> | string | null
    total?: DecimalNullableFilter<"Compra"> | Decimal | DecimalJsLike | number | string | null
    usuario_id_usuario?: IntFilter<"Compra"> | number
    proveedor_id_proveedor?: IntFilter<"Compra"> | number
  }

  export type VentaCreateWithoutUsuarioInput = {
    tipo_venta?: string | null
    estado?: string | null
    cliente_cedula: string
    cliente: ClienteCreateNestedOneWithoutVentasInput
    venta_productos?: VentaProductoCreateNestedManyWithoutVentaInput
    factura_venta?: FacturaVentaCreateNestedOneWithoutVentaInput
  }

  export type VentaUncheckedCreateWithoutUsuarioInput = {
    id_venta?: number
    tipo_venta?: string | null
    estado?: string | null
    cliente_id_cliente: number
    cliente_cedula: string
    venta_productos?: VentaProductoUncheckedCreateNestedManyWithoutVentaInput
    factura_venta?: FacturaVentaUncheckedCreateNestedOneWithoutVentaInput
  }

  export type VentaCreateOrConnectWithoutUsuarioInput = {
    where: VentaWhereUniqueInput
    create: XOR<VentaCreateWithoutUsuarioInput, VentaUncheckedCreateWithoutUsuarioInput>
  }

  export type VentaCreateManyUsuarioInputEnvelope = {
    data: VentaCreateManyUsuarioInput | VentaCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type CompraCreateWithoutUsuarioInput = {
    fecha_compra?: Date | string | null
    estado?: string | null
    total?: Decimal | DecimalJsLike | number | string | null
    proveedor: ProveedorCreateNestedOneWithoutComprasInput
    compra_productos?: CompraProductoCreateNestedManyWithoutCompraInput
    factura_compra?: FacturaCompraCreateNestedOneWithoutCompraInput
  }

  export type CompraUncheckedCreateWithoutUsuarioInput = {
    id_compra?: number
    fecha_compra?: Date | string | null
    estado?: string | null
    total?: Decimal | DecimalJsLike | number | string | null
    proveedor_id_proveedor: number
    compra_productos?: CompraProductoUncheckedCreateNestedManyWithoutCompraInput
    factura_compra?: FacturaCompraUncheckedCreateNestedOneWithoutCompraInput
  }

  export type CompraCreateOrConnectWithoutUsuarioInput = {
    where: CompraWhereUniqueInput
    create: XOR<CompraCreateWithoutUsuarioInput, CompraUncheckedCreateWithoutUsuarioInput>
  }

  export type CompraCreateManyUsuarioInputEnvelope = {
    data: CompraCreateManyUsuarioInput | CompraCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type CajaCreateWithoutUsuarioInput = {
    fecha_apertura?: Date | string | null
    fecha_cierre?: Date | string | null
    monto_inicial?: Decimal | DecimalJsLike | number | string | null
    monto_final?: Decimal | DecimalJsLike | number | string | null
    total_ventas?: Decimal | DecimalJsLike | number | string | null
    diferencia?: Decimal | DecimalJsLike | number | string | null
  }

  export type CajaUncheckedCreateWithoutUsuarioInput = {
    id_cierre_caja?: number
    fecha_apertura?: Date | string | null
    fecha_cierre?: Date | string | null
    monto_inicial?: Decimal | DecimalJsLike | number | string | null
    monto_final?: Decimal | DecimalJsLike | number | string | null
    total_ventas?: Decimal | DecimalJsLike | number | string | null
    diferencia?: Decimal | DecimalJsLike | number | string | null
  }

  export type CajaCreateOrConnectWithoutUsuarioInput = {
    where: CajaWhereUniqueInput
    create: XOR<CajaCreateWithoutUsuarioInput, CajaUncheckedCreateWithoutUsuarioInput>
  }

  export type CajaCreateManyUsuarioInputEnvelope = {
    data: CajaCreateManyUsuarioInput | CajaCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type VentaUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: VentaWhereUniqueInput
    update: XOR<VentaUpdateWithoutUsuarioInput, VentaUncheckedUpdateWithoutUsuarioInput>
    create: XOR<VentaCreateWithoutUsuarioInput, VentaUncheckedCreateWithoutUsuarioInput>
  }

  export type VentaUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: VentaWhereUniqueInput
    data: XOR<VentaUpdateWithoutUsuarioInput, VentaUncheckedUpdateWithoutUsuarioInput>
  }

  export type VentaUpdateManyWithWhereWithoutUsuarioInput = {
    where: VentaScalarWhereInput
    data: XOR<VentaUpdateManyMutationInput, VentaUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type CompraUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: CompraWhereUniqueInput
    update: XOR<CompraUpdateWithoutUsuarioInput, CompraUncheckedUpdateWithoutUsuarioInput>
    create: XOR<CompraCreateWithoutUsuarioInput, CompraUncheckedCreateWithoutUsuarioInput>
  }

  export type CompraUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: CompraWhereUniqueInput
    data: XOR<CompraUpdateWithoutUsuarioInput, CompraUncheckedUpdateWithoutUsuarioInput>
  }

  export type CompraUpdateManyWithWhereWithoutUsuarioInput = {
    where: CompraScalarWhereInput
    data: XOR<CompraUpdateManyMutationInput, CompraUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type CajaUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: CajaWhereUniqueInput
    update: XOR<CajaUpdateWithoutUsuarioInput, CajaUncheckedUpdateWithoutUsuarioInput>
    create: XOR<CajaCreateWithoutUsuarioInput, CajaUncheckedCreateWithoutUsuarioInput>
  }

  export type CajaUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: CajaWhereUniqueInput
    data: XOR<CajaUpdateWithoutUsuarioInput, CajaUncheckedUpdateWithoutUsuarioInput>
  }

  export type CajaUpdateManyWithWhereWithoutUsuarioInput = {
    where: CajaScalarWhereInput
    data: XOR<CajaUpdateManyMutationInput, CajaUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type CajaScalarWhereInput = {
    AND?: CajaScalarWhereInput | CajaScalarWhereInput[]
    OR?: CajaScalarWhereInput[]
    NOT?: CajaScalarWhereInput | CajaScalarWhereInput[]
    id_cierre_caja?: IntFilter<"Caja"> | number
    fecha_apertura?: DateTimeNullableFilter<"Caja"> | Date | string | null
    fecha_cierre?: DateTimeNullableFilter<"Caja"> | Date | string | null
    monto_inicial?: DecimalNullableFilter<"Caja"> | Decimal | DecimalJsLike | number | string | null
    monto_final?: DecimalNullableFilter<"Caja"> | Decimal | DecimalJsLike | number | string | null
    total_ventas?: DecimalNullableFilter<"Caja"> | Decimal | DecimalJsLike | number | string | null
    diferencia?: DecimalNullableFilter<"Caja"> | Decimal | DecimalJsLike | number | string | null
    usuario_id_usuario?: IntFilter<"Caja"> | number
  }

  export type ClienteCreateWithoutVentasInput = {
    cedula: string
    nombre?: string | null
    apellido?: string | null
    telefono?: string | null
    compras_semanales?: Decimal | DecimalJsLike | number | string | null
    deuda_total?: Decimal | DecimalJsLike | number | string | null
  }

  export type ClienteUncheckedCreateWithoutVentasInput = {
    id_cliente?: number
    cedula: string
    nombre?: string | null
    apellido?: string | null
    telefono?: string | null
    compras_semanales?: Decimal | DecimalJsLike | number | string | null
    deuda_total?: Decimal | DecimalJsLike | number | string | null
  }

  export type ClienteCreateOrConnectWithoutVentasInput = {
    where: ClienteWhereUniqueInput
    create: XOR<ClienteCreateWithoutVentasInput, ClienteUncheckedCreateWithoutVentasInput>
  }

  export type UsuarioCreateWithoutVentasInput = {
    usuario?: string | null
    contraseña?: string | null
    rol?: string | null
    compras?: CompraCreateNestedManyWithoutUsuarioInput
    cajas?: CajaCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutVentasInput = {
    id_usuario?: number
    usuario?: string | null
    contraseña?: string | null
    rol?: string | null
    compras?: CompraUncheckedCreateNestedManyWithoutUsuarioInput
    cajas?: CajaUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutVentasInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutVentasInput, UsuarioUncheckedCreateWithoutVentasInput>
  }

  export type VentaProductoCreateWithoutVentaInput = {
    cantidad: Decimal | DecimalJsLike | number | string
    precio_unitario: Decimal | DecimalJsLike | number | string
    producto: ProductoCreateNestedOneWithoutVenta_productosInput
  }

  export type VentaProductoUncheckedCreateWithoutVentaInput = {
    producto_id_producto: number
    cantidad: Decimal | DecimalJsLike | number | string
    precio_unitario: Decimal | DecimalJsLike | number | string
  }

  export type VentaProductoCreateOrConnectWithoutVentaInput = {
    where: VentaProductoWhereUniqueInput
    create: XOR<VentaProductoCreateWithoutVentaInput, VentaProductoUncheckedCreateWithoutVentaInput>
  }

  export type VentaProductoCreateManyVentaInputEnvelope = {
    data: VentaProductoCreateManyVentaInput | VentaProductoCreateManyVentaInput[]
    skipDuplicates?: boolean
  }

  export type FacturaVentaCreateWithoutVentaInput = {
    fecha?: Date | string | null
    subtotal?: Decimal | DecimalJsLike | number | string | null
    impuestos?: Decimal | DecimalJsLike | number | string | null
    total?: Decimal | DecimalJsLike | number | string | null
  }

  export type FacturaVentaUncheckedCreateWithoutVentaInput = {
    id_factura?: number
    fecha?: Date | string | null
    subtotal?: Decimal | DecimalJsLike | number | string | null
    impuestos?: Decimal | DecimalJsLike | number | string | null
    total?: Decimal | DecimalJsLike | number | string | null
  }

  export type FacturaVentaCreateOrConnectWithoutVentaInput = {
    where: FacturaVentaWhereUniqueInput
    create: XOR<FacturaVentaCreateWithoutVentaInput, FacturaVentaUncheckedCreateWithoutVentaInput>
  }

  export type ClienteUpsertWithoutVentasInput = {
    update: XOR<ClienteUpdateWithoutVentasInput, ClienteUncheckedUpdateWithoutVentasInput>
    create: XOR<ClienteCreateWithoutVentasInput, ClienteUncheckedCreateWithoutVentasInput>
    where?: ClienteWhereInput
  }

  export type ClienteUpdateToOneWithWhereWithoutVentasInput = {
    where?: ClienteWhereInput
    data: XOR<ClienteUpdateWithoutVentasInput, ClienteUncheckedUpdateWithoutVentasInput>
  }

  export type ClienteUpdateWithoutVentasInput = {
    cedula?: StringFieldUpdateOperationsInput | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    apellido?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    compras_semanales?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    deuda_total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type ClienteUncheckedUpdateWithoutVentasInput = {
    id_cliente?: IntFieldUpdateOperationsInput | number
    cedula?: StringFieldUpdateOperationsInput | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    apellido?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    compras_semanales?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    deuda_total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type UsuarioUpsertWithoutVentasInput = {
    update: XOR<UsuarioUpdateWithoutVentasInput, UsuarioUncheckedUpdateWithoutVentasInput>
    create: XOR<UsuarioCreateWithoutVentasInput, UsuarioUncheckedCreateWithoutVentasInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutVentasInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutVentasInput, UsuarioUncheckedUpdateWithoutVentasInput>
  }

  export type UsuarioUpdateWithoutVentasInput = {
    usuario?: NullableStringFieldUpdateOperationsInput | string | null
    contraseña?: NullableStringFieldUpdateOperationsInput | string | null
    rol?: NullableStringFieldUpdateOperationsInput | string | null
    compras?: CompraUpdateManyWithoutUsuarioNestedInput
    cajas?: CajaUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutVentasInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    usuario?: NullableStringFieldUpdateOperationsInput | string | null
    contraseña?: NullableStringFieldUpdateOperationsInput | string | null
    rol?: NullableStringFieldUpdateOperationsInput | string | null
    compras?: CompraUncheckedUpdateManyWithoutUsuarioNestedInput
    cajas?: CajaUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type VentaProductoUpsertWithWhereUniqueWithoutVentaInput = {
    where: VentaProductoWhereUniqueInput
    update: XOR<VentaProductoUpdateWithoutVentaInput, VentaProductoUncheckedUpdateWithoutVentaInput>
    create: XOR<VentaProductoCreateWithoutVentaInput, VentaProductoUncheckedCreateWithoutVentaInput>
  }

  export type VentaProductoUpdateWithWhereUniqueWithoutVentaInput = {
    where: VentaProductoWhereUniqueInput
    data: XOR<VentaProductoUpdateWithoutVentaInput, VentaProductoUncheckedUpdateWithoutVentaInput>
  }

  export type VentaProductoUpdateManyWithWhereWithoutVentaInput = {
    where: VentaProductoScalarWhereInput
    data: XOR<VentaProductoUpdateManyMutationInput, VentaProductoUncheckedUpdateManyWithoutVentaInput>
  }

  export type FacturaVentaUpsertWithoutVentaInput = {
    update: XOR<FacturaVentaUpdateWithoutVentaInput, FacturaVentaUncheckedUpdateWithoutVentaInput>
    create: XOR<FacturaVentaCreateWithoutVentaInput, FacturaVentaUncheckedCreateWithoutVentaInput>
    where?: FacturaVentaWhereInput
  }

  export type FacturaVentaUpdateToOneWithWhereWithoutVentaInput = {
    where?: FacturaVentaWhereInput
    data: XOR<FacturaVentaUpdateWithoutVentaInput, FacturaVentaUncheckedUpdateWithoutVentaInput>
  }

  export type FacturaVentaUpdateWithoutVentaInput = {
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subtotal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    impuestos?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type FacturaVentaUncheckedUpdateWithoutVentaInput = {
    id_factura?: IntFieldUpdateOperationsInput | number
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subtotal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    impuestos?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type VentaCreateWithoutVenta_productosInput = {
    tipo_venta?: string | null
    estado?: string | null
    cliente_cedula: string
    cliente: ClienteCreateNestedOneWithoutVentasInput
    usuario: UsuarioCreateNestedOneWithoutVentasInput
    factura_venta?: FacturaVentaCreateNestedOneWithoutVentaInput
  }

  export type VentaUncheckedCreateWithoutVenta_productosInput = {
    id_venta?: number
    tipo_venta?: string | null
    estado?: string | null
    cliente_id_cliente: number
    cliente_cedula: string
    usuario_id_usuario: number
    factura_venta?: FacturaVentaUncheckedCreateNestedOneWithoutVentaInput
  }

  export type VentaCreateOrConnectWithoutVenta_productosInput = {
    where: VentaWhereUniqueInput
    create: XOR<VentaCreateWithoutVenta_productosInput, VentaUncheckedCreateWithoutVenta_productosInput>
  }

  export type ProductoCreateWithoutVenta_productosInput = {
    nombre_producto?: string | null
    descripcion?: string | null
    stock?: Decimal | DecimalJsLike | number | string | null
    nivel_alerta?: string | null
    categoria: CategoriaCreateNestedOneWithoutProductosInput
    compra_productos?: CompraProductoCreateNestedManyWithoutProductoInput
    movimientos?: MovimientoInventarioCreateNestedManyWithoutProductoInput
  }

  export type ProductoUncheckedCreateWithoutVenta_productosInput = {
    id_producto?: number
    nombre_producto?: string | null
    descripcion?: string | null
    stock?: Decimal | DecimalJsLike | number | string | null
    nivel_alerta?: string | null
    categoria_id_categoria: number
    compra_productos?: CompraProductoUncheckedCreateNestedManyWithoutProductoInput
    movimientos?: MovimientoInventarioUncheckedCreateNestedManyWithoutProductoInput
  }

  export type ProductoCreateOrConnectWithoutVenta_productosInput = {
    where: ProductoWhereUniqueInput
    create: XOR<ProductoCreateWithoutVenta_productosInput, ProductoUncheckedCreateWithoutVenta_productosInput>
  }

  export type VentaUpsertWithoutVenta_productosInput = {
    update: XOR<VentaUpdateWithoutVenta_productosInput, VentaUncheckedUpdateWithoutVenta_productosInput>
    create: XOR<VentaCreateWithoutVenta_productosInput, VentaUncheckedCreateWithoutVenta_productosInput>
    where?: VentaWhereInput
  }

  export type VentaUpdateToOneWithWhereWithoutVenta_productosInput = {
    where?: VentaWhereInput
    data: XOR<VentaUpdateWithoutVenta_productosInput, VentaUncheckedUpdateWithoutVenta_productosInput>
  }

  export type VentaUpdateWithoutVenta_productosInput = {
    tipo_venta?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    cliente_cedula?: StringFieldUpdateOperationsInput | string
    cliente?: ClienteUpdateOneRequiredWithoutVentasNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutVentasNestedInput
    factura_venta?: FacturaVentaUpdateOneWithoutVentaNestedInput
  }

  export type VentaUncheckedUpdateWithoutVenta_productosInput = {
    id_venta?: IntFieldUpdateOperationsInput | number
    tipo_venta?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    cliente_id_cliente?: IntFieldUpdateOperationsInput | number
    cliente_cedula?: StringFieldUpdateOperationsInput | string
    usuario_id_usuario?: IntFieldUpdateOperationsInput | number
    factura_venta?: FacturaVentaUncheckedUpdateOneWithoutVentaNestedInput
  }

  export type ProductoUpsertWithoutVenta_productosInput = {
    update: XOR<ProductoUpdateWithoutVenta_productosInput, ProductoUncheckedUpdateWithoutVenta_productosInput>
    create: XOR<ProductoCreateWithoutVenta_productosInput, ProductoUncheckedCreateWithoutVenta_productosInput>
    where?: ProductoWhereInput
  }

  export type ProductoUpdateToOneWithWhereWithoutVenta_productosInput = {
    where?: ProductoWhereInput
    data: XOR<ProductoUpdateWithoutVenta_productosInput, ProductoUncheckedUpdateWithoutVenta_productosInput>
  }

  export type ProductoUpdateWithoutVenta_productosInput = {
    nombre_producto?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    stock?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nivel_alerta?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: CategoriaUpdateOneRequiredWithoutProductosNestedInput
    compra_productos?: CompraProductoUpdateManyWithoutProductoNestedInput
    movimientos?: MovimientoInventarioUpdateManyWithoutProductoNestedInput
  }

  export type ProductoUncheckedUpdateWithoutVenta_productosInput = {
    id_producto?: IntFieldUpdateOperationsInput | number
    nombre_producto?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    stock?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nivel_alerta?: NullableStringFieldUpdateOperationsInput | string | null
    categoria_id_categoria?: IntFieldUpdateOperationsInput | number
    compra_productos?: CompraProductoUncheckedUpdateManyWithoutProductoNestedInput
    movimientos?: MovimientoInventarioUncheckedUpdateManyWithoutProductoNestedInput
  }

  export type ProductoCreateManyCategoriaInput = {
    id_producto?: number
    nombre_producto?: string | null
    descripcion?: string | null
    stock?: Decimal | DecimalJsLike | number | string | null
    nivel_alerta?: string | null
  }

  export type ProductoUpdateWithoutCategoriaInput = {
    nombre_producto?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    stock?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nivel_alerta?: NullableStringFieldUpdateOperationsInput | string | null
    compra_productos?: CompraProductoUpdateManyWithoutProductoNestedInput
    venta_productos?: VentaProductoUpdateManyWithoutProductoNestedInput
    movimientos?: MovimientoInventarioUpdateManyWithoutProductoNestedInput
  }

  export type ProductoUncheckedUpdateWithoutCategoriaInput = {
    id_producto?: IntFieldUpdateOperationsInput | number
    nombre_producto?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    stock?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nivel_alerta?: NullableStringFieldUpdateOperationsInput | string | null
    compra_productos?: CompraProductoUncheckedUpdateManyWithoutProductoNestedInput
    venta_productos?: VentaProductoUncheckedUpdateManyWithoutProductoNestedInput
    movimientos?: MovimientoInventarioUncheckedUpdateManyWithoutProductoNestedInput
  }

  export type ProductoUncheckedUpdateManyWithoutCategoriaInput = {
    id_producto?: IntFieldUpdateOperationsInput | number
    nombre_producto?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    stock?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    nivel_alerta?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VentaCreateManyClienteInput = {
    id_venta?: number
    tipo_venta?: string | null
    estado?: string | null
    cliente_cedula: string
    usuario_id_usuario: number
  }

  export type VentaUpdateWithoutClienteInput = {
    tipo_venta?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    cliente_cedula?: StringFieldUpdateOperationsInput | string
    usuario?: UsuarioUpdateOneRequiredWithoutVentasNestedInput
    venta_productos?: VentaProductoUpdateManyWithoutVentaNestedInput
    factura_venta?: FacturaVentaUpdateOneWithoutVentaNestedInput
  }

  export type VentaUncheckedUpdateWithoutClienteInput = {
    id_venta?: IntFieldUpdateOperationsInput | number
    tipo_venta?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    cliente_cedula?: StringFieldUpdateOperationsInput | string
    usuario_id_usuario?: IntFieldUpdateOperationsInput | number
    venta_productos?: VentaProductoUncheckedUpdateManyWithoutVentaNestedInput
    factura_venta?: FacturaVentaUncheckedUpdateOneWithoutVentaNestedInput
  }

  export type VentaUncheckedUpdateManyWithoutClienteInput = {
    id_venta?: IntFieldUpdateOperationsInput | number
    tipo_venta?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    cliente_cedula?: StringFieldUpdateOperationsInput | string
    usuario_id_usuario?: IntFieldUpdateOperationsInput | number
  }

  export type CompraProductoCreateManyCompraInput = {
    producto_id_producto: number
    precio_unitario: Decimal | DecimalJsLike | number | string
    cantidad: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
  }

  export type CompraProductoUpdateWithoutCompraInput = {
    precio_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cantidad?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    producto?: ProductoUpdateOneRequiredWithoutCompra_productosNestedInput
  }

  export type CompraProductoUncheckedUpdateWithoutCompraInput = {
    producto_id_producto?: IntFieldUpdateOperationsInput | number
    precio_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cantidad?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type CompraProductoUncheckedUpdateManyWithoutCompraInput = {
    producto_id_producto?: IntFieldUpdateOperationsInput | number
    precio_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cantidad?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type CompraProductoCreateManyProductoInput = {
    compra_id_compra: number
    precio_unitario: Decimal | DecimalJsLike | number | string
    cantidad: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
  }

  export type VentaProductoCreateManyProductoInput = {
    venta_id_venta: number
    cantidad: Decimal | DecimalJsLike | number | string
    precio_unitario: Decimal | DecimalJsLike | number | string
  }

  export type MovimientoInventarioCreateManyProductoInput = {
    id_movimiento?: number
    tipo_movimiento?: string | null
    fecha_movimiento?: Date | string | null
    cantidad?: Decimal | DecimalJsLike | number | string | null
  }

  export type CompraProductoUpdateWithoutProductoInput = {
    precio_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cantidad?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    compra?: CompraUpdateOneRequiredWithoutCompra_productosNestedInput
  }

  export type CompraProductoUncheckedUpdateWithoutProductoInput = {
    compra_id_compra?: IntFieldUpdateOperationsInput | number
    precio_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cantidad?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type CompraProductoUncheckedUpdateManyWithoutProductoInput = {
    compra_id_compra?: IntFieldUpdateOperationsInput | number
    precio_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cantidad?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type VentaProductoUpdateWithoutProductoInput = {
    cantidad?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    precio_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    venta?: VentaUpdateOneRequiredWithoutVenta_productosNestedInput
  }

  export type VentaProductoUncheckedUpdateWithoutProductoInput = {
    venta_id_venta?: IntFieldUpdateOperationsInput | number
    cantidad?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    precio_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type VentaProductoUncheckedUpdateManyWithoutProductoInput = {
    venta_id_venta?: IntFieldUpdateOperationsInput | number
    cantidad?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    precio_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type MovimientoInventarioUpdateWithoutProductoInput = {
    tipo_movimiento?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_movimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cantidad?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type MovimientoInventarioUncheckedUpdateWithoutProductoInput = {
    id_movimiento?: IntFieldUpdateOperationsInput | number
    tipo_movimiento?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_movimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cantidad?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type MovimientoInventarioUncheckedUpdateManyWithoutProductoInput = {
    id_movimiento?: IntFieldUpdateOperationsInput | number
    tipo_movimiento?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_movimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cantidad?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type CompraCreateManyProveedorInput = {
    id_compra?: number
    fecha_compra?: Date | string | null
    estado?: string | null
    total?: Decimal | DecimalJsLike | number | string | null
    usuario_id_usuario: number
  }

  export type CompraUpdateWithoutProveedorInput = {
    fecha_compra?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    usuario?: UsuarioUpdateOneRequiredWithoutComprasNestedInput
    compra_productos?: CompraProductoUpdateManyWithoutCompraNestedInput
    factura_compra?: FacturaCompraUpdateOneWithoutCompraNestedInput
  }

  export type CompraUncheckedUpdateWithoutProveedorInput = {
    id_compra?: IntFieldUpdateOperationsInput | number
    fecha_compra?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    usuario_id_usuario?: IntFieldUpdateOperationsInput | number
    compra_productos?: CompraProductoUncheckedUpdateManyWithoutCompraNestedInput
    factura_compra?: FacturaCompraUncheckedUpdateOneWithoutCompraNestedInput
  }

  export type CompraUncheckedUpdateManyWithoutProveedorInput = {
    id_compra?: IntFieldUpdateOperationsInput | number
    fecha_compra?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    usuario_id_usuario?: IntFieldUpdateOperationsInput | number
  }

  export type VentaCreateManyUsuarioInput = {
    id_venta?: number
    tipo_venta?: string | null
    estado?: string | null
    cliente_id_cliente: number
    cliente_cedula: string
  }

  export type CompraCreateManyUsuarioInput = {
    id_compra?: number
    fecha_compra?: Date | string | null
    estado?: string | null
    total?: Decimal | DecimalJsLike | number | string | null
    proveedor_id_proveedor: number
  }

  export type CajaCreateManyUsuarioInput = {
    id_cierre_caja?: number
    fecha_apertura?: Date | string | null
    fecha_cierre?: Date | string | null
    monto_inicial?: Decimal | DecimalJsLike | number | string | null
    monto_final?: Decimal | DecimalJsLike | number | string | null
    total_ventas?: Decimal | DecimalJsLike | number | string | null
    diferencia?: Decimal | DecimalJsLike | number | string | null
  }

  export type VentaUpdateWithoutUsuarioInput = {
    tipo_venta?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    cliente_cedula?: StringFieldUpdateOperationsInput | string
    cliente?: ClienteUpdateOneRequiredWithoutVentasNestedInput
    venta_productos?: VentaProductoUpdateManyWithoutVentaNestedInput
    factura_venta?: FacturaVentaUpdateOneWithoutVentaNestedInput
  }

  export type VentaUncheckedUpdateWithoutUsuarioInput = {
    id_venta?: IntFieldUpdateOperationsInput | number
    tipo_venta?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    cliente_id_cliente?: IntFieldUpdateOperationsInput | number
    cliente_cedula?: StringFieldUpdateOperationsInput | string
    venta_productos?: VentaProductoUncheckedUpdateManyWithoutVentaNestedInput
    factura_venta?: FacturaVentaUncheckedUpdateOneWithoutVentaNestedInput
  }

  export type VentaUncheckedUpdateManyWithoutUsuarioInput = {
    id_venta?: IntFieldUpdateOperationsInput | number
    tipo_venta?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    cliente_id_cliente?: IntFieldUpdateOperationsInput | number
    cliente_cedula?: StringFieldUpdateOperationsInput | string
  }

  export type CompraUpdateWithoutUsuarioInput = {
    fecha_compra?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    proveedor?: ProveedorUpdateOneRequiredWithoutComprasNestedInput
    compra_productos?: CompraProductoUpdateManyWithoutCompraNestedInput
    factura_compra?: FacturaCompraUpdateOneWithoutCompraNestedInput
  }

  export type CompraUncheckedUpdateWithoutUsuarioInput = {
    id_compra?: IntFieldUpdateOperationsInput | number
    fecha_compra?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    proveedor_id_proveedor?: IntFieldUpdateOperationsInput | number
    compra_productos?: CompraProductoUncheckedUpdateManyWithoutCompraNestedInput
    factura_compra?: FacturaCompraUncheckedUpdateOneWithoutCompraNestedInput
  }

  export type CompraUncheckedUpdateManyWithoutUsuarioInput = {
    id_compra?: IntFieldUpdateOperationsInput | number
    fecha_compra?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    proveedor_id_proveedor?: IntFieldUpdateOperationsInput | number
  }

  export type CajaUpdateWithoutUsuarioInput = {
    fecha_apertura?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_cierre?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    monto_inicial?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    monto_final?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    total_ventas?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    diferencia?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type CajaUncheckedUpdateWithoutUsuarioInput = {
    id_cierre_caja?: IntFieldUpdateOperationsInput | number
    fecha_apertura?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_cierre?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    monto_inicial?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    monto_final?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    total_ventas?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    diferencia?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type CajaUncheckedUpdateManyWithoutUsuarioInput = {
    id_cierre_caja?: IntFieldUpdateOperationsInput | number
    fecha_apertura?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_cierre?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    monto_inicial?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    monto_final?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    total_ventas?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    diferencia?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type VentaProductoCreateManyVentaInput = {
    producto_id_producto: number
    cantidad: Decimal | DecimalJsLike | number | string
    precio_unitario: Decimal | DecimalJsLike | number | string
  }

  export type VentaProductoUpdateWithoutVentaInput = {
    cantidad?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    precio_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    producto?: ProductoUpdateOneRequiredWithoutVenta_productosNestedInput
  }

  export type VentaProductoUncheckedUpdateWithoutVentaInput = {
    producto_id_producto?: IntFieldUpdateOperationsInput | number
    cantidad?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    precio_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type VentaProductoUncheckedUpdateManyWithoutVentaInput = {
    producto_id_producto?: IntFieldUpdateOperationsInput | number
    cantidad?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    precio_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}