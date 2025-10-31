
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Room
 * 
 */
export type Room = $Result.DefaultSelection<Prisma.$RoomPayload>
/**
 * Model RoomUser
 * 
 */
export type RoomUser = $Result.DefaultSelection<Prisma.$RoomUserPayload>
/**
 * Model Document
 * 
 */
export type Document = $Result.DefaultSelection<Prisma.$DocumentPayload>
/**
 * Model DocumentImage
 * 
 */
export type DocumentImage = $Result.DefaultSelection<Prisma.$DocumentImagePayload>
/**
 * Model DocumentVersion
 * 
 */
export type DocumentVersion = $Result.DefaultSelection<Prisma.$DocumentVersionPayload>
/**
 * Model DocumentCollaborators
 * 
 */
export type DocumentCollaborators = $Result.DefaultSelection<Prisma.$DocumentCollaboratorsPayload>
/**
 * Model DocumentComment
 * 
 */
export type DocumentComment = $Result.DefaultSelection<Prisma.$DocumentCommentPayload>
/**
 * Model DocumentShare
 * 
 */
export type DocumentShare = $Result.DefaultSelection<Prisma.$DocumentSharePayload>
/**
 * Model DocumentTemplate
 * 
 */
export type DocumentTemplate = $Result.DefaultSelection<Prisma.$DocumentTemplatePayload>
/**
 * Model UserSettings
 * 
 */
export type UserSettings = $Result.DefaultSelection<Prisma.$UserSettingsPayload>
/**
 * Model DocumentActivity
 * 
 */
export type DocumentActivity = $Result.DefaultSelection<Prisma.$DocumentActivityPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.room`: Exposes CRUD operations for the **Room** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rooms
    * const rooms = await prisma.room.findMany()
    * ```
    */
  get room(): Prisma.RoomDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.roomUser`: Exposes CRUD operations for the **RoomUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RoomUsers
    * const roomUsers = await prisma.roomUser.findMany()
    * ```
    */
  get roomUser(): Prisma.RoomUserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.document`: Exposes CRUD operations for the **Document** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Documents
    * const documents = await prisma.document.findMany()
    * ```
    */
  get document(): Prisma.DocumentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.documentImage`: Exposes CRUD operations for the **DocumentImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DocumentImages
    * const documentImages = await prisma.documentImage.findMany()
    * ```
    */
  get documentImage(): Prisma.DocumentImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.documentVersion`: Exposes CRUD operations for the **DocumentVersion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DocumentVersions
    * const documentVersions = await prisma.documentVersion.findMany()
    * ```
    */
  get documentVersion(): Prisma.DocumentVersionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.documentCollaborators`: Exposes CRUD operations for the **DocumentCollaborators** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DocumentCollaborators
    * const documentCollaborators = await prisma.documentCollaborators.findMany()
    * ```
    */
  get documentCollaborators(): Prisma.DocumentCollaboratorsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.documentComment`: Exposes CRUD operations for the **DocumentComment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DocumentComments
    * const documentComments = await prisma.documentComment.findMany()
    * ```
    */
  get documentComment(): Prisma.DocumentCommentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.documentShare`: Exposes CRUD operations for the **DocumentShare** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DocumentShares
    * const documentShares = await prisma.documentShare.findMany()
    * ```
    */
  get documentShare(): Prisma.DocumentShareDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.documentTemplate`: Exposes CRUD operations for the **DocumentTemplate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DocumentTemplates
    * const documentTemplates = await prisma.documentTemplate.findMany()
    * ```
    */
  get documentTemplate(): Prisma.DocumentTemplateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userSettings`: Exposes CRUD operations for the **UserSettings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserSettings
    * const userSettings = await prisma.userSettings.findMany()
    * ```
    */
  get userSettings(): Prisma.UserSettingsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.documentActivity`: Exposes CRUD operations for the **DocumentActivity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DocumentActivities
    * const documentActivities = await prisma.documentActivity.findMany()
    * ```
    */
  get documentActivity(): Prisma.DocumentActivityDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.16.2
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
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
    User: 'User',
    Room: 'Room',
    RoomUser: 'RoomUser',
    Document: 'Document',
    DocumentImage: 'DocumentImage',
    DocumentVersion: 'DocumentVersion',
    DocumentCollaborators: 'DocumentCollaborators',
    DocumentComment: 'DocumentComment',
    DocumentShare: 'DocumentShare',
    DocumentTemplate: 'DocumentTemplate',
    UserSettings: 'UserSettings',
    DocumentActivity: 'DocumentActivity'
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
      modelProps: "user" | "room" | "roomUser" | "document" | "documentImage" | "documentVersion" | "documentCollaborators" | "documentComment" | "documentShare" | "documentTemplate" | "userSettings" | "documentActivity"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Room: {
        payload: Prisma.$RoomPayload<ExtArgs>
        fields: Prisma.RoomFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoomFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoomFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          findFirst: {
            args: Prisma.RoomFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoomFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          findMany: {
            args: Prisma.RoomFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>[]
          }
          create: {
            args: Prisma.RoomCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          createMany: {
            args: Prisma.RoomCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoomCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>[]
          }
          delete: {
            args: Prisma.RoomDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          update: {
            args: Prisma.RoomUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          deleteMany: {
            args: Prisma.RoomDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoomUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoomUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>[]
          }
          upsert: {
            args: Prisma.RoomUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          aggregate: {
            args: Prisma.RoomAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoom>
          }
          groupBy: {
            args: Prisma.RoomGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoomGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoomCountArgs<ExtArgs>
            result: $Utils.Optional<RoomCountAggregateOutputType> | number
          }
        }
      }
      RoomUser: {
        payload: Prisma.$RoomUserPayload<ExtArgs>
        fields: Prisma.RoomUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoomUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoomUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomUserPayload>
          }
          findFirst: {
            args: Prisma.RoomUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoomUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomUserPayload>
          }
          findMany: {
            args: Prisma.RoomUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomUserPayload>[]
          }
          create: {
            args: Prisma.RoomUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomUserPayload>
          }
          createMany: {
            args: Prisma.RoomUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoomUserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomUserPayload>[]
          }
          delete: {
            args: Prisma.RoomUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomUserPayload>
          }
          update: {
            args: Prisma.RoomUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomUserPayload>
          }
          deleteMany: {
            args: Prisma.RoomUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoomUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoomUserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomUserPayload>[]
          }
          upsert: {
            args: Prisma.RoomUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomUserPayload>
          }
          aggregate: {
            args: Prisma.RoomUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoomUser>
          }
          groupBy: {
            args: Prisma.RoomUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoomUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoomUserCountArgs<ExtArgs>
            result: $Utils.Optional<RoomUserCountAggregateOutputType> | number
          }
        }
      }
      Document: {
        payload: Prisma.$DocumentPayload<ExtArgs>
        fields: Prisma.DocumentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DocumentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DocumentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          findFirst: {
            args: Prisma.DocumentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DocumentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          findMany: {
            args: Prisma.DocumentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>[]
          }
          create: {
            args: Prisma.DocumentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          createMany: {
            args: Prisma.DocumentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DocumentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>[]
          }
          delete: {
            args: Prisma.DocumentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          update: {
            args: Prisma.DocumentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          deleteMany: {
            args: Prisma.DocumentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DocumentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DocumentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>[]
          }
          upsert: {
            args: Prisma.DocumentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          aggregate: {
            args: Prisma.DocumentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDocument>
          }
          groupBy: {
            args: Prisma.DocumentGroupByArgs<ExtArgs>
            result: $Utils.Optional<DocumentGroupByOutputType>[]
          }
          count: {
            args: Prisma.DocumentCountArgs<ExtArgs>
            result: $Utils.Optional<DocumentCountAggregateOutputType> | number
          }
        }
      }
      DocumentImage: {
        payload: Prisma.$DocumentImagePayload<ExtArgs>
        fields: Prisma.DocumentImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DocumentImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DocumentImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentImagePayload>
          }
          findFirst: {
            args: Prisma.DocumentImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DocumentImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentImagePayload>
          }
          findMany: {
            args: Prisma.DocumentImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentImagePayload>[]
          }
          create: {
            args: Prisma.DocumentImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentImagePayload>
          }
          createMany: {
            args: Prisma.DocumentImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DocumentImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentImagePayload>[]
          }
          delete: {
            args: Prisma.DocumentImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentImagePayload>
          }
          update: {
            args: Prisma.DocumentImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentImagePayload>
          }
          deleteMany: {
            args: Prisma.DocumentImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DocumentImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DocumentImageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentImagePayload>[]
          }
          upsert: {
            args: Prisma.DocumentImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentImagePayload>
          }
          aggregate: {
            args: Prisma.DocumentImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDocumentImage>
          }
          groupBy: {
            args: Prisma.DocumentImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<DocumentImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.DocumentImageCountArgs<ExtArgs>
            result: $Utils.Optional<DocumentImageCountAggregateOutputType> | number
          }
        }
      }
      DocumentVersion: {
        payload: Prisma.$DocumentVersionPayload<ExtArgs>
        fields: Prisma.DocumentVersionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DocumentVersionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentVersionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DocumentVersionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentVersionPayload>
          }
          findFirst: {
            args: Prisma.DocumentVersionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentVersionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DocumentVersionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentVersionPayload>
          }
          findMany: {
            args: Prisma.DocumentVersionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentVersionPayload>[]
          }
          create: {
            args: Prisma.DocumentVersionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentVersionPayload>
          }
          createMany: {
            args: Prisma.DocumentVersionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DocumentVersionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentVersionPayload>[]
          }
          delete: {
            args: Prisma.DocumentVersionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentVersionPayload>
          }
          update: {
            args: Prisma.DocumentVersionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentVersionPayload>
          }
          deleteMany: {
            args: Prisma.DocumentVersionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DocumentVersionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DocumentVersionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentVersionPayload>[]
          }
          upsert: {
            args: Prisma.DocumentVersionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentVersionPayload>
          }
          aggregate: {
            args: Prisma.DocumentVersionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDocumentVersion>
          }
          groupBy: {
            args: Prisma.DocumentVersionGroupByArgs<ExtArgs>
            result: $Utils.Optional<DocumentVersionGroupByOutputType>[]
          }
          count: {
            args: Prisma.DocumentVersionCountArgs<ExtArgs>
            result: $Utils.Optional<DocumentVersionCountAggregateOutputType> | number
          }
        }
      }
      DocumentCollaborators: {
        payload: Prisma.$DocumentCollaboratorsPayload<ExtArgs>
        fields: Prisma.DocumentCollaboratorsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DocumentCollaboratorsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentCollaboratorsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DocumentCollaboratorsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentCollaboratorsPayload>
          }
          findFirst: {
            args: Prisma.DocumentCollaboratorsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentCollaboratorsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DocumentCollaboratorsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentCollaboratorsPayload>
          }
          findMany: {
            args: Prisma.DocumentCollaboratorsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentCollaboratorsPayload>[]
          }
          create: {
            args: Prisma.DocumentCollaboratorsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentCollaboratorsPayload>
          }
          createMany: {
            args: Prisma.DocumentCollaboratorsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DocumentCollaboratorsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentCollaboratorsPayload>[]
          }
          delete: {
            args: Prisma.DocumentCollaboratorsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentCollaboratorsPayload>
          }
          update: {
            args: Prisma.DocumentCollaboratorsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentCollaboratorsPayload>
          }
          deleteMany: {
            args: Prisma.DocumentCollaboratorsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DocumentCollaboratorsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DocumentCollaboratorsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentCollaboratorsPayload>[]
          }
          upsert: {
            args: Prisma.DocumentCollaboratorsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentCollaboratorsPayload>
          }
          aggregate: {
            args: Prisma.DocumentCollaboratorsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDocumentCollaborators>
          }
          groupBy: {
            args: Prisma.DocumentCollaboratorsGroupByArgs<ExtArgs>
            result: $Utils.Optional<DocumentCollaboratorsGroupByOutputType>[]
          }
          count: {
            args: Prisma.DocumentCollaboratorsCountArgs<ExtArgs>
            result: $Utils.Optional<DocumentCollaboratorsCountAggregateOutputType> | number
          }
        }
      }
      DocumentComment: {
        payload: Prisma.$DocumentCommentPayload<ExtArgs>
        fields: Prisma.DocumentCommentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DocumentCommentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentCommentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DocumentCommentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentCommentPayload>
          }
          findFirst: {
            args: Prisma.DocumentCommentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentCommentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DocumentCommentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentCommentPayload>
          }
          findMany: {
            args: Prisma.DocumentCommentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentCommentPayload>[]
          }
          create: {
            args: Prisma.DocumentCommentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentCommentPayload>
          }
          createMany: {
            args: Prisma.DocumentCommentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DocumentCommentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentCommentPayload>[]
          }
          delete: {
            args: Prisma.DocumentCommentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentCommentPayload>
          }
          update: {
            args: Prisma.DocumentCommentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentCommentPayload>
          }
          deleteMany: {
            args: Prisma.DocumentCommentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DocumentCommentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DocumentCommentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentCommentPayload>[]
          }
          upsert: {
            args: Prisma.DocumentCommentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentCommentPayload>
          }
          aggregate: {
            args: Prisma.DocumentCommentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDocumentComment>
          }
          groupBy: {
            args: Prisma.DocumentCommentGroupByArgs<ExtArgs>
            result: $Utils.Optional<DocumentCommentGroupByOutputType>[]
          }
          count: {
            args: Prisma.DocumentCommentCountArgs<ExtArgs>
            result: $Utils.Optional<DocumentCommentCountAggregateOutputType> | number
          }
        }
      }
      DocumentShare: {
        payload: Prisma.$DocumentSharePayload<ExtArgs>
        fields: Prisma.DocumentShareFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DocumentShareFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentSharePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DocumentShareFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentSharePayload>
          }
          findFirst: {
            args: Prisma.DocumentShareFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentSharePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DocumentShareFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentSharePayload>
          }
          findMany: {
            args: Prisma.DocumentShareFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentSharePayload>[]
          }
          create: {
            args: Prisma.DocumentShareCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentSharePayload>
          }
          createMany: {
            args: Prisma.DocumentShareCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DocumentShareCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentSharePayload>[]
          }
          delete: {
            args: Prisma.DocumentShareDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentSharePayload>
          }
          update: {
            args: Prisma.DocumentShareUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentSharePayload>
          }
          deleteMany: {
            args: Prisma.DocumentShareDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DocumentShareUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DocumentShareUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentSharePayload>[]
          }
          upsert: {
            args: Prisma.DocumentShareUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentSharePayload>
          }
          aggregate: {
            args: Prisma.DocumentShareAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDocumentShare>
          }
          groupBy: {
            args: Prisma.DocumentShareGroupByArgs<ExtArgs>
            result: $Utils.Optional<DocumentShareGroupByOutputType>[]
          }
          count: {
            args: Prisma.DocumentShareCountArgs<ExtArgs>
            result: $Utils.Optional<DocumentShareCountAggregateOutputType> | number
          }
        }
      }
      DocumentTemplate: {
        payload: Prisma.$DocumentTemplatePayload<ExtArgs>
        fields: Prisma.DocumentTemplateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DocumentTemplateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentTemplatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DocumentTemplateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentTemplatePayload>
          }
          findFirst: {
            args: Prisma.DocumentTemplateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentTemplatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DocumentTemplateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentTemplatePayload>
          }
          findMany: {
            args: Prisma.DocumentTemplateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentTemplatePayload>[]
          }
          create: {
            args: Prisma.DocumentTemplateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentTemplatePayload>
          }
          createMany: {
            args: Prisma.DocumentTemplateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DocumentTemplateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentTemplatePayload>[]
          }
          delete: {
            args: Prisma.DocumentTemplateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentTemplatePayload>
          }
          update: {
            args: Prisma.DocumentTemplateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentTemplatePayload>
          }
          deleteMany: {
            args: Prisma.DocumentTemplateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DocumentTemplateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DocumentTemplateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentTemplatePayload>[]
          }
          upsert: {
            args: Prisma.DocumentTemplateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentTemplatePayload>
          }
          aggregate: {
            args: Prisma.DocumentTemplateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDocumentTemplate>
          }
          groupBy: {
            args: Prisma.DocumentTemplateGroupByArgs<ExtArgs>
            result: $Utils.Optional<DocumentTemplateGroupByOutputType>[]
          }
          count: {
            args: Prisma.DocumentTemplateCountArgs<ExtArgs>
            result: $Utils.Optional<DocumentTemplateCountAggregateOutputType> | number
          }
        }
      }
      UserSettings: {
        payload: Prisma.$UserSettingsPayload<ExtArgs>
        fields: Prisma.UserSettingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserSettingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserSettingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload>
          }
          findFirst: {
            args: Prisma.UserSettingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserSettingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload>
          }
          findMany: {
            args: Prisma.UserSettingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload>[]
          }
          create: {
            args: Prisma.UserSettingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload>
          }
          createMany: {
            args: Prisma.UserSettingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserSettingsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload>[]
          }
          delete: {
            args: Prisma.UserSettingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload>
          }
          update: {
            args: Prisma.UserSettingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload>
          }
          deleteMany: {
            args: Prisma.UserSettingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserSettingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserSettingsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload>[]
          }
          upsert: {
            args: Prisma.UserSettingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload>
          }
          aggregate: {
            args: Prisma.UserSettingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserSettings>
          }
          groupBy: {
            args: Prisma.UserSettingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserSettingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserSettingsCountArgs<ExtArgs>
            result: $Utils.Optional<UserSettingsCountAggregateOutputType> | number
          }
        }
      }
      DocumentActivity: {
        payload: Prisma.$DocumentActivityPayload<ExtArgs>
        fields: Prisma.DocumentActivityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DocumentActivityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentActivityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DocumentActivityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentActivityPayload>
          }
          findFirst: {
            args: Prisma.DocumentActivityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentActivityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DocumentActivityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentActivityPayload>
          }
          findMany: {
            args: Prisma.DocumentActivityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentActivityPayload>[]
          }
          create: {
            args: Prisma.DocumentActivityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentActivityPayload>
          }
          createMany: {
            args: Prisma.DocumentActivityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DocumentActivityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentActivityPayload>[]
          }
          delete: {
            args: Prisma.DocumentActivityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentActivityPayload>
          }
          update: {
            args: Prisma.DocumentActivityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentActivityPayload>
          }
          deleteMany: {
            args: Prisma.DocumentActivityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DocumentActivityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DocumentActivityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentActivityPayload>[]
          }
          upsert: {
            args: Prisma.DocumentActivityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentActivityPayload>
          }
          aggregate: {
            args: Prisma.DocumentActivityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDocumentActivity>
          }
          groupBy: {
            args: Prisma.DocumentActivityGroupByArgs<ExtArgs>
            result: $Utils.Optional<DocumentActivityGroupByOutputType>[]
          }
          count: {
            args: Prisma.DocumentActivityCountArgs<ExtArgs>
            result: $Utils.Optional<DocumentActivityCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    user?: UserOmit
    room?: RoomOmit
    roomUser?: RoomUserOmit
    document?: DocumentOmit
    documentImage?: DocumentImageOmit
    documentVersion?: DocumentVersionOmit
    documentCollaborators?: DocumentCollaboratorsOmit
    documentComment?: DocumentCommentOmit
    documentShare?: DocumentShareOmit
    documentTemplate?: DocumentTemplateOmit
    userSettings?: UserSettingsOmit
    documentActivity?: DocumentActivityOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    documents: number
    collaborations: number
    comments: number
    rooms: number
    createdRooms: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documents?: boolean | UserCountOutputTypeCountDocumentsArgs
    collaborations?: boolean | UserCountOutputTypeCountCollaborationsArgs
    comments?: boolean | UserCountOutputTypeCountCommentsArgs
    rooms?: boolean | UserCountOutputTypeCountRoomsArgs
    createdRooms?: boolean | UserCountOutputTypeCountCreatedRoomsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDocumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCollaborationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentCollaboratorsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentCommentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRoomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomUserWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedRoomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomWhereInput
  }


  /**
   * Count Type RoomCountOutputType
   */

  export type RoomCountOutputType = {
    participants: number
  }

  export type RoomCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participants?: boolean | RoomCountOutputTypeCountParticipantsArgs
  }

  // Custom InputTypes
  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomCountOutputType
     */
    select?: RoomCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeCountParticipantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomUserWhereInput
  }


  /**
   * Count Type DocumentCountOutputType
   */

  export type DocumentCountOutputType = {
    images: number
    versions: number
    collaborators: number
    comments: number
    shares: number
    activities: number
    Room: number
  }

  export type DocumentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | DocumentCountOutputTypeCountImagesArgs
    versions?: boolean | DocumentCountOutputTypeCountVersionsArgs
    collaborators?: boolean | DocumentCountOutputTypeCountCollaboratorsArgs
    comments?: boolean | DocumentCountOutputTypeCountCommentsArgs
    shares?: boolean | DocumentCountOutputTypeCountSharesArgs
    activities?: boolean | DocumentCountOutputTypeCountActivitiesArgs
    Room?: boolean | DocumentCountOutputTypeCountRoomArgs
  }

  // Custom InputTypes
  /**
   * DocumentCountOutputType without action
   */
  export type DocumentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentCountOutputType
     */
    select?: DocumentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DocumentCountOutputType without action
   */
  export type DocumentCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentImageWhereInput
  }

  /**
   * DocumentCountOutputType without action
   */
  export type DocumentCountOutputTypeCountVersionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentVersionWhereInput
  }

  /**
   * DocumentCountOutputType without action
   */
  export type DocumentCountOutputTypeCountCollaboratorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentCollaboratorsWhereInput
  }

  /**
   * DocumentCountOutputType without action
   */
  export type DocumentCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentCommentWhereInput
  }

  /**
   * DocumentCountOutputType without action
   */
  export type DocumentCountOutputTypeCountSharesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentShareWhereInput
  }

  /**
   * DocumentCountOutputType without action
   */
  export type DocumentCountOutputTypeCountActivitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentActivityWhereInput
  }

  /**
   * DocumentCountOutputType without action
   */
  export type DocumentCountOutputTypeCountRoomArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    avatar: string | null
    name: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    avatar: string | null
    name: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    avatar: number
    name: number
    email: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    avatar?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    avatar?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    avatar?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    avatar: string
    name: string
    email: string
    password: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    avatar?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    documents?: boolean | User$documentsArgs<ExtArgs>
    collaborations?: boolean | User$collaborationsArgs<ExtArgs>
    comments?: boolean | User$commentsArgs<ExtArgs>
    settings?: boolean | User$settingsArgs<ExtArgs>
    rooms?: boolean | User$roomsArgs<ExtArgs>
    createdRooms?: boolean | User$createdRoomsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    avatar?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    avatar?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    avatar?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "avatar" | "name" | "email" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documents?: boolean | User$documentsArgs<ExtArgs>
    collaborations?: boolean | User$collaborationsArgs<ExtArgs>
    comments?: boolean | User$commentsArgs<ExtArgs>
    settings?: boolean | User$settingsArgs<ExtArgs>
    rooms?: boolean | User$roomsArgs<ExtArgs>
    createdRooms?: boolean | User$createdRoomsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      documents: Prisma.$DocumentPayload<ExtArgs>[]
      collaborations: Prisma.$DocumentCollaboratorsPayload<ExtArgs>[]
      comments: Prisma.$DocumentCommentPayload<ExtArgs>[]
      settings: Prisma.$UserSettingsPayload<ExtArgs> | null
      rooms: Prisma.$RoomUserPayload<ExtArgs>[]
      createdRooms: Prisma.$RoomPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      avatar: string
      name: string
      email: string
      password: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    documents<T extends User$documentsArgs<ExtArgs> = {}>(args?: Subset<T, User$documentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    collaborations<T extends User$collaborationsArgs<ExtArgs> = {}>(args?: Subset<T, User$collaborationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentCollaboratorsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comments<T extends User$commentsArgs<ExtArgs> = {}>(args?: Subset<T, User$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentCommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    settings<T extends User$settingsArgs<ExtArgs> = {}>(args?: Subset<T, User$settingsArgs<ExtArgs>>): Prisma__UserSettingsClient<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    rooms<T extends User$roomsArgs<ExtArgs> = {}>(args?: Subset<T, User$roomsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    createdRooms<T extends User$createdRoomsArgs<ExtArgs> = {}>(args?: Subset<T, User$createdRoomsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly avatar: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.documents
   */
  export type User$documentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    where?: DocumentWhereInput
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    cursor?: DocumentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * User.collaborations
   */
  export type User$collaborationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentCollaborators
     */
    select?: DocumentCollaboratorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentCollaborators
     */
    omit?: DocumentCollaboratorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentCollaboratorsInclude<ExtArgs> | null
    where?: DocumentCollaboratorsWhereInput
    orderBy?: DocumentCollaboratorsOrderByWithRelationInput | DocumentCollaboratorsOrderByWithRelationInput[]
    cursor?: DocumentCollaboratorsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DocumentCollaboratorsScalarFieldEnum | DocumentCollaboratorsScalarFieldEnum[]
  }

  /**
   * User.comments
   */
  export type User$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentComment
     */
    select?: DocumentCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentComment
     */
    omit?: DocumentCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentCommentInclude<ExtArgs> | null
    where?: DocumentCommentWhereInput
    orderBy?: DocumentCommentOrderByWithRelationInput | DocumentCommentOrderByWithRelationInput[]
    cursor?: DocumentCommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DocumentCommentScalarFieldEnum | DocumentCommentScalarFieldEnum[]
  }

  /**
   * User.settings
   */
  export type User$settingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
    where?: UserSettingsWhereInput
  }

  /**
   * User.rooms
   */
  export type User$roomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomUser
     */
    select?: RoomUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomUser
     */
    omit?: RoomUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomUserInclude<ExtArgs> | null
    where?: RoomUserWhereInput
    orderBy?: RoomUserOrderByWithRelationInput | RoomUserOrderByWithRelationInput[]
    cursor?: RoomUserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoomUserScalarFieldEnum | RoomUserScalarFieldEnum[]
  }

  /**
   * User.createdRooms
   */
  export type User$createdRoomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    where?: RoomWhereInput
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    cursor?: RoomWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Room
   */

  export type AggregateRoom = {
    _count: RoomCountAggregateOutputType | null
    _min: RoomMinAggregateOutputType | null
    _max: RoomMaxAggregateOutputType | null
  }

  export type RoomMinAggregateOutputType = {
    id: string | null
    name: string | null
    code: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    createdById: string | null
    documentId: string | null
    shareLink: string | null
    shareLinkExpiresAt: Date | null
    isPublic: boolean | null
  }

  export type RoomMaxAggregateOutputType = {
    id: string | null
    name: string | null
    code: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    createdById: string | null
    documentId: string | null
    shareLink: string | null
    shareLinkExpiresAt: Date | null
    isPublic: boolean | null
  }

  export type RoomCountAggregateOutputType = {
    id: number
    name: number
    code: number
    isActive: number
    createdAt: number
    updatedAt: number
    createdById: number
    documentId: number
    shareLink: number
    shareLinkExpiresAt: number
    allowedEmails: number
    isPublic: number
    _all: number
  }


  export type RoomMinAggregateInputType = {
    id?: true
    name?: true
    code?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    createdById?: true
    documentId?: true
    shareLink?: true
    shareLinkExpiresAt?: true
    isPublic?: true
  }

  export type RoomMaxAggregateInputType = {
    id?: true
    name?: true
    code?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    createdById?: true
    documentId?: true
    shareLink?: true
    shareLinkExpiresAt?: true
    isPublic?: true
  }

  export type RoomCountAggregateInputType = {
    id?: true
    name?: true
    code?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    createdById?: true
    documentId?: true
    shareLink?: true
    shareLinkExpiresAt?: true
    allowedEmails?: true
    isPublic?: true
    _all?: true
  }

  export type RoomAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Room to aggregate.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rooms
    **/
    _count?: true | RoomCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoomMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoomMaxAggregateInputType
  }

  export type GetRoomAggregateType<T extends RoomAggregateArgs> = {
        [P in keyof T & keyof AggregateRoom]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoom[P]>
      : GetScalarType<T[P], AggregateRoom[P]>
  }




  export type RoomGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomWhereInput
    orderBy?: RoomOrderByWithAggregationInput | RoomOrderByWithAggregationInput[]
    by: RoomScalarFieldEnum[] | RoomScalarFieldEnum
    having?: RoomScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoomCountAggregateInputType | true
    _min?: RoomMinAggregateInputType
    _max?: RoomMaxAggregateInputType
  }

  export type RoomGroupByOutputType = {
    id: string
    name: string
    code: string
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    createdById: string
    documentId: string | null
    shareLink: string | null
    shareLinkExpiresAt: Date | null
    allowedEmails: string[]
    isPublic: boolean
    _count: RoomCountAggregateOutputType | null
    _min: RoomMinAggregateOutputType | null
    _max: RoomMaxAggregateOutputType | null
  }

  type GetRoomGroupByPayload<T extends RoomGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoomGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoomGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoomGroupByOutputType[P]>
            : GetScalarType<T[P], RoomGroupByOutputType[P]>
        }
      >
    >


  export type RoomSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
    documentId?: boolean
    shareLink?: boolean
    shareLinkExpiresAt?: boolean
    allowedEmails?: boolean
    isPublic?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    document?: boolean | Room$documentArgs<ExtArgs>
    participants?: boolean | Room$participantsArgs<ExtArgs>
    _count?: boolean | RoomCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["room"]>

  export type RoomSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
    documentId?: boolean
    shareLink?: boolean
    shareLinkExpiresAt?: boolean
    allowedEmails?: boolean
    isPublic?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    document?: boolean | Room$documentArgs<ExtArgs>
  }, ExtArgs["result"]["room"]>

  export type RoomSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
    documentId?: boolean
    shareLink?: boolean
    shareLinkExpiresAt?: boolean
    allowedEmails?: boolean
    isPublic?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    document?: boolean | Room$documentArgs<ExtArgs>
  }, ExtArgs["result"]["room"]>

  export type RoomSelectScalar = {
    id?: boolean
    name?: boolean
    code?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
    documentId?: boolean
    shareLink?: boolean
    shareLinkExpiresAt?: boolean
    allowedEmails?: boolean
    isPublic?: boolean
  }

  export type RoomOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "code" | "isActive" | "createdAt" | "updatedAt" | "createdById" | "documentId" | "shareLink" | "shareLinkExpiresAt" | "allowedEmails" | "isPublic", ExtArgs["result"]["room"]>
  export type RoomInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    document?: boolean | Room$documentArgs<ExtArgs>
    participants?: boolean | Room$participantsArgs<ExtArgs>
    _count?: boolean | RoomCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoomIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    document?: boolean | Room$documentArgs<ExtArgs>
  }
  export type RoomIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    document?: boolean | Room$documentArgs<ExtArgs>
  }

  export type $RoomPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Room"
    objects: {
      createdBy: Prisma.$UserPayload<ExtArgs>
      document: Prisma.$DocumentPayload<ExtArgs> | null
      participants: Prisma.$RoomUserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      code: string
      isActive: boolean
      createdAt: Date
      updatedAt: Date
      createdById: string
      documentId: string | null
      shareLink: string | null
      shareLinkExpiresAt: Date | null
      allowedEmails: string[]
      isPublic: boolean
    }, ExtArgs["result"]["room"]>
    composites: {}
  }

  type RoomGetPayload<S extends boolean | null | undefined | RoomDefaultArgs> = $Result.GetResult<Prisma.$RoomPayload, S>

  type RoomCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoomFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoomCountAggregateInputType | true
    }

  export interface RoomDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Room'], meta: { name: 'Room' } }
    /**
     * Find zero or one Room that matches the filter.
     * @param {RoomFindUniqueArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoomFindUniqueArgs>(args: SelectSubset<T, RoomFindUniqueArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Room that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoomFindUniqueOrThrowArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoomFindUniqueOrThrowArgs>(args: SelectSubset<T, RoomFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Room that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindFirstArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoomFindFirstArgs>(args?: SelectSubset<T, RoomFindFirstArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Room that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindFirstOrThrowArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoomFindFirstOrThrowArgs>(args?: SelectSubset<T, RoomFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rooms
     * const rooms = await prisma.room.findMany()
     * 
     * // Get first 10 Rooms
     * const rooms = await prisma.room.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roomWithIdOnly = await prisma.room.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoomFindManyArgs>(args?: SelectSubset<T, RoomFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Room.
     * @param {RoomCreateArgs} args - Arguments to create a Room.
     * @example
     * // Create one Room
     * const Room = await prisma.room.create({
     *   data: {
     *     // ... data to create a Room
     *   }
     * })
     * 
     */
    create<T extends RoomCreateArgs>(args: SelectSubset<T, RoomCreateArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rooms.
     * @param {RoomCreateManyArgs} args - Arguments to create many Rooms.
     * @example
     * // Create many Rooms
     * const room = await prisma.room.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoomCreateManyArgs>(args?: SelectSubset<T, RoomCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rooms and returns the data saved in the database.
     * @param {RoomCreateManyAndReturnArgs} args - Arguments to create many Rooms.
     * @example
     * // Create many Rooms
     * const room = await prisma.room.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rooms and only return the `id`
     * const roomWithIdOnly = await prisma.room.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoomCreateManyAndReturnArgs>(args?: SelectSubset<T, RoomCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Room.
     * @param {RoomDeleteArgs} args - Arguments to delete one Room.
     * @example
     * // Delete one Room
     * const Room = await prisma.room.delete({
     *   where: {
     *     // ... filter to delete one Room
     *   }
     * })
     * 
     */
    delete<T extends RoomDeleteArgs>(args: SelectSubset<T, RoomDeleteArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Room.
     * @param {RoomUpdateArgs} args - Arguments to update one Room.
     * @example
     * // Update one Room
     * const room = await prisma.room.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoomUpdateArgs>(args: SelectSubset<T, RoomUpdateArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rooms.
     * @param {RoomDeleteManyArgs} args - Arguments to filter Rooms to delete.
     * @example
     * // Delete a few Rooms
     * const { count } = await prisma.room.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoomDeleteManyArgs>(args?: SelectSubset<T, RoomDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rooms
     * const room = await prisma.room.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoomUpdateManyArgs>(args: SelectSubset<T, RoomUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rooms and returns the data updated in the database.
     * @param {RoomUpdateManyAndReturnArgs} args - Arguments to update many Rooms.
     * @example
     * // Update many Rooms
     * const room = await prisma.room.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rooms and only return the `id`
     * const roomWithIdOnly = await prisma.room.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RoomUpdateManyAndReturnArgs>(args: SelectSubset<T, RoomUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Room.
     * @param {RoomUpsertArgs} args - Arguments to update or create a Room.
     * @example
     * // Update or create a Room
     * const room = await prisma.room.upsert({
     *   create: {
     *     // ... data to create a Room
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Room we want to update
     *   }
     * })
     */
    upsert<T extends RoomUpsertArgs>(args: SelectSubset<T, RoomUpsertArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomCountArgs} args - Arguments to filter Rooms to count.
     * @example
     * // Count the number of Rooms
     * const count = await prisma.room.count({
     *   where: {
     *     // ... the filter for the Rooms we want to count
     *   }
     * })
    **/
    count<T extends RoomCountArgs>(
      args?: Subset<T, RoomCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoomCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Room.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoomAggregateArgs>(args: Subset<T, RoomAggregateArgs>): Prisma.PrismaPromise<GetRoomAggregateType<T>>

    /**
     * Group by Room.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomGroupByArgs} args - Group by arguments.
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
      T extends RoomGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoomGroupByArgs['orderBy'] }
        : { orderBy?: RoomGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RoomGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoomGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Room model
   */
  readonly fields: RoomFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Room.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoomClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    document<T extends Room$documentArgs<ExtArgs> = {}>(args?: Subset<T, Room$documentArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    participants<T extends Room$participantsArgs<ExtArgs> = {}>(args?: Subset<T, Room$participantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Room model
   */
  interface RoomFieldRefs {
    readonly id: FieldRef<"Room", 'String'>
    readonly name: FieldRef<"Room", 'String'>
    readonly code: FieldRef<"Room", 'String'>
    readonly isActive: FieldRef<"Room", 'Boolean'>
    readonly createdAt: FieldRef<"Room", 'DateTime'>
    readonly updatedAt: FieldRef<"Room", 'DateTime'>
    readonly createdById: FieldRef<"Room", 'String'>
    readonly documentId: FieldRef<"Room", 'String'>
    readonly shareLink: FieldRef<"Room", 'String'>
    readonly shareLinkExpiresAt: FieldRef<"Room", 'DateTime'>
    readonly allowedEmails: FieldRef<"Room", 'String[]'>
    readonly isPublic: FieldRef<"Room", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Room findUnique
   */
  export type RoomFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room findUniqueOrThrow
   */
  export type RoomFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room findFirst
   */
  export type RoomFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rooms.
     */
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room findFirstOrThrow
   */
  export type RoomFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rooms.
     */
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room findMany
   */
  export type RoomFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Rooms to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room create
   */
  export type RoomCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The data needed to create a Room.
     */
    data: XOR<RoomCreateInput, RoomUncheckedCreateInput>
  }

  /**
   * Room createMany
   */
  export type RoomCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rooms.
     */
    data: RoomCreateManyInput | RoomCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Room createManyAndReturn
   */
  export type RoomCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * The data used to create many Rooms.
     */
    data: RoomCreateManyInput | RoomCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Room update
   */
  export type RoomUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The data needed to update a Room.
     */
    data: XOR<RoomUpdateInput, RoomUncheckedUpdateInput>
    /**
     * Choose, which Room to update.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room updateMany
   */
  export type RoomUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rooms.
     */
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyInput>
    /**
     * Filter which Rooms to update
     */
    where?: RoomWhereInput
    /**
     * Limit how many Rooms to update.
     */
    limit?: number
  }

  /**
   * Room updateManyAndReturn
   */
  export type RoomUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * The data used to update Rooms.
     */
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyInput>
    /**
     * Filter which Rooms to update
     */
    where?: RoomWhereInput
    /**
     * Limit how many Rooms to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Room upsert
   */
  export type RoomUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The filter to search for the Room to update in case it exists.
     */
    where: RoomWhereUniqueInput
    /**
     * In case the Room found by the `where` argument doesn't exist, create a new Room with this data.
     */
    create: XOR<RoomCreateInput, RoomUncheckedCreateInput>
    /**
     * In case the Room was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoomUpdateInput, RoomUncheckedUpdateInput>
  }

  /**
   * Room delete
   */
  export type RoomDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter which Room to delete.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room deleteMany
   */
  export type RoomDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rooms to delete
     */
    where?: RoomWhereInput
    /**
     * Limit how many Rooms to delete.
     */
    limit?: number
  }

  /**
   * Room.document
   */
  export type Room$documentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    where?: DocumentWhereInput
  }

  /**
   * Room.participants
   */
  export type Room$participantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomUser
     */
    select?: RoomUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomUser
     */
    omit?: RoomUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomUserInclude<ExtArgs> | null
    where?: RoomUserWhereInput
    orderBy?: RoomUserOrderByWithRelationInput | RoomUserOrderByWithRelationInput[]
    cursor?: RoomUserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoomUserScalarFieldEnum | RoomUserScalarFieldEnum[]
  }

  /**
   * Room without action
   */
  export type RoomDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
  }


  /**
   * Model RoomUser
   */

  export type AggregateRoomUser = {
    _count: RoomUserCountAggregateOutputType | null
    _min: RoomUserMinAggregateOutputType | null
    _max: RoomUserMaxAggregateOutputType | null
  }

  export type RoomUserMinAggregateOutputType = {
    id: string | null
    roomId: string | null
    userId: string | null
    role: string | null
    joinedAt: Date | null
    lastActive: Date | null
  }

  export type RoomUserMaxAggregateOutputType = {
    id: string | null
    roomId: string | null
    userId: string | null
    role: string | null
    joinedAt: Date | null
    lastActive: Date | null
  }

  export type RoomUserCountAggregateOutputType = {
    id: number
    roomId: number
    userId: number
    role: number
    joinedAt: number
    lastActive: number
    _all: number
  }


  export type RoomUserMinAggregateInputType = {
    id?: true
    roomId?: true
    userId?: true
    role?: true
    joinedAt?: true
    lastActive?: true
  }

  export type RoomUserMaxAggregateInputType = {
    id?: true
    roomId?: true
    userId?: true
    role?: true
    joinedAt?: true
    lastActive?: true
  }

  export type RoomUserCountAggregateInputType = {
    id?: true
    roomId?: true
    userId?: true
    role?: true
    joinedAt?: true
    lastActive?: true
    _all?: true
  }

  export type RoomUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoomUser to aggregate.
     */
    where?: RoomUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomUsers to fetch.
     */
    orderBy?: RoomUserOrderByWithRelationInput | RoomUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoomUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RoomUsers
    **/
    _count?: true | RoomUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoomUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoomUserMaxAggregateInputType
  }

  export type GetRoomUserAggregateType<T extends RoomUserAggregateArgs> = {
        [P in keyof T & keyof AggregateRoomUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoomUser[P]>
      : GetScalarType<T[P], AggregateRoomUser[P]>
  }




  export type RoomUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomUserWhereInput
    orderBy?: RoomUserOrderByWithAggregationInput | RoomUserOrderByWithAggregationInput[]
    by: RoomUserScalarFieldEnum[] | RoomUserScalarFieldEnum
    having?: RoomUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoomUserCountAggregateInputType | true
    _min?: RoomUserMinAggregateInputType
    _max?: RoomUserMaxAggregateInputType
  }

  export type RoomUserGroupByOutputType = {
    id: string
    roomId: string
    userId: string
    role: string
    joinedAt: Date
    lastActive: Date
    _count: RoomUserCountAggregateOutputType | null
    _min: RoomUserMinAggregateOutputType | null
    _max: RoomUserMaxAggregateOutputType | null
  }

  type GetRoomUserGroupByPayload<T extends RoomUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoomUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoomUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoomUserGroupByOutputType[P]>
            : GetScalarType<T[P], RoomUserGroupByOutputType[P]>
        }
      >
    >


  export type RoomUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roomId?: boolean
    userId?: boolean
    role?: boolean
    joinedAt?: boolean
    lastActive?: boolean
    room?: boolean | RoomDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roomUser"]>

  export type RoomUserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roomId?: boolean
    userId?: boolean
    role?: boolean
    joinedAt?: boolean
    lastActive?: boolean
    room?: boolean | RoomDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roomUser"]>

  export type RoomUserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roomId?: boolean
    userId?: boolean
    role?: boolean
    joinedAt?: boolean
    lastActive?: boolean
    room?: boolean | RoomDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roomUser"]>

  export type RoomUserSelectScalar = {
    id?: boolean
    roomId?: boolean
    userId?: boolean
    role?: boolean
    joinedAt?: boolean
    lastActive?: boolean
  }

  export type RoomUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "roomId" | "userId" | "role" | "joinedAt" | "lastActive", ExtArgs["result"]["roomUser"]>
  export type RoomUserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RoomUserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RoomUserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RoomUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RoomUser"
    objects: {
      room: Prisma.$RoomPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      roomId: string
      userId: string
      role: string
      joinedAt: Date
      lastActive: Date
    }, ExtArgs["result"]["roomUser"]>
    composites: {}
  }

  type RoomUserGetPayload<S extends boolean | null | undefined | RoomUserDefaultArgs> = $Result.GetResult<Prisma.$RoomUserPayload, S>

  type RoomUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoomUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoomUserCountAggregateInputType | true
    }

  export interface RoomUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RoomUser'], meta: { name: 'RoomUser' } }
    /**
     * Find zero or one RoomUser that matches the filter.
     * @param {RoomUserFindUniqueArgs} args - Arguments to find a RoomUser
     * @example
     * // Get one RoomUser
     * const roomUser = await prisma.roomUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoomUserFindUniqueArgs>(args: SelectSubset<T, RoomUserFindUniqueArgs<ExtArgs>>): Prisma__RoomUserClient<$Result.GetResult<Prisma.$RoomUserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RoomUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoomUserFindUniqueOrThrowArgs} args - Arguments to find a RoomUser
     * @example
     * // Get one RoomUser
     * const roomUser = await prisma.roomUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoomUserFindUniqueOrThrowArgs>(args: SelectSubset<T, RoomUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoomUserClient<$Result.GetResult<Prisma.$RoomUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RoomUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomUserFindFirstArgs} args - Arguments to find a RoomUser
     * @example
     * // Get one RoomUser
     * const roomUser = await prisma.roomUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoomUserFindFirstArgs>(args?: SelectSubset<T, RoomUserFindFirstArgs<ExtArgs>>): Prisma__RoomUserClient<$Result.GetResult<Prisma.$RoomUserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RoomUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomUserFindFirstOrThrowArgs} args - Arguments to find a RoomUser
     * @example
     * // Get one RoomUser
     * const roomUser = await prisma.roomUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoomUserFindFirstOrThrowArgs>(args?: SelectSubset<T, RoomUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoomUserClient<$Result.GetResult<Prisma.$RoomUserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RoomUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RoomUsers
     * const roomUsers = await prisma.roomUser.findMany()
     * 
     * // Get first 10 RoomUsers
     * const roomUsers = await prisma.roomUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roomUserWithIdOnly = await prisma.roomUser.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoomUserFindManyArgs>(args?: SelectSubset<T, RoomUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RoomUser.
     * @param {RoomUserCreateArgs} args - Arguments to create a RoomUser.
     * @example
     * // Create one RoomUser
     * const RoomUser = await prisma.roomUser.create({
     *   data: {
     *     // ... data to create a RoomUser
     *   }
     * })
     * 
     */
    create<T extends RoomUserCreateArgs>(args: SelectSubset<T, RoomUserCreateArgs<ExtArgs>>): Prisma__RoomUserClient<$Result.GetResult<Prisma.$RoomUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RoomUsers.
     * @param {RoomUserCreateManyArgs} args - Arguments to create many RoomUsers.
     * @example
     * // Create many RoomUsers
     * const roomUser = await prisma.roomUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoomUserCreateManyArgs>(args?: SelectSubset<T, RoomUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RoomUsers and returns the data saved in the database.
     * @param {RoomUserCreateManyAndReturnArgs} args - Arguments to create many RoomUsers.
     * @example
     * // Create many RoomUsers
     * const roomUser = await prisma.roomUser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RoomUsers and only return the `id`
     * const roomUserWithIdOnly = await prisma.roomUser.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoomUserCreateManyAndReturnArgs>(args?: SelectSubset<T, RoomUserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomUserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RoomUser.
     * @param {RoomUserDeleteArgs} args - Arguments to delete one RoomUser.
     * @example
     * // Delete one RoomUser
     * const RoomUser = await prisma.roomUser.delete({
     *   where: {
     *     // ... filter to delete one RoomUser
     *   }
     * })
     * 
     */
    delete<T extends RoomUserDeleteArgs>(args: SelectSubset<T, RoomUserDeleteArgs<ExtArgs>>): Prisma__RoomUserClient<$Result.GetResult<Prisma.$RoomUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RoomUser.
     * @param {RoomUserUpdateArgs} args - Arguments to update one RoomUser.
     * @example
     * // Update one RoomUser
     * const roomUser = await prisma.roomUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoomUserUpdateArgs>(args: SelectSubset<T, RoomUserUpdateArgs<ExtArgs>>): Prisma__RoomUserClient<$Result.GetResult<Prisma.$RoomUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RoomUsers.
     * @param {RoomUserDeleteManyArgs} args - Arguments to filter RoomUsers to delete.
     * @example
     * // Delete a few RoomUsers
     * const { count } = await prisma.roomUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoomUserDeleteManyArgs>(args?: SelectSubset<T, RoomUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RoomUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RoomUsers
     * const roomUser = await prisma.roomUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoomUserUpdateManyArgs>(args: SelectSubset<T, RoomUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RoomUsers and returns the data updated in the database.
     * @param {RoomUserUpdateManyAndReturnArgs} args - Arguments to update many RoomUsers.
     * @example
     * // Update many RoomUsers
     * const roomUser = await prisma.roomUser.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RoomUsers and only return the `id`
     * const roomUserWithIdOnly = await prisma.roomUser.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RoomUserUpdateManyAndReturnArgs>(args: SelectSubset<T, RoomUserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomUserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RoomUser.
     * @param {RoomUserUpsertArgs} args - Arguments to update or create a RoomUser.
     * @example
     * // Update or create a RoomUser
     * const roomUser = await prisma.roomUser.upsert({
     *   create: {
     *     // ... data to create a RoomUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RoomUser we want to update
     *   }
     * })
     */
    upsert<T extends RoomUserUpsertArgs>(args: SelectSubset<T, RoomUserUpsertArgs<ExtArgs>>): Prisma__RoomUserClient<$Result.GetResult<Prisma.$RoomUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RoomUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomUserCountArgs} args - Arguments to filter RoomUsers to count.
     * @example
     * // Count the number of RoomUsers
     * const count = await prisma.roomUser.count({
     *   where: {
     *     // ... the filter for the RoomUsers we want to count
     *   }
     * })
    **/
    count<T extends RoomUserCountArgs>(
      args?: Subset<T, RoomUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoomUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RoomUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoomUserAggregateArgs>(args: Subset<T, RoomUserAggregateArgs>): Prisma.PrismaPromise<GetRoomUserAggregateType<T>>

    /**
     * Group by RoomUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomUserGroupByArgs} args - Group by arguments.
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
      T extends RoomUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoomUserGroupByArgs['orderBy'] }
        : { orderBy?: RoomUserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RoomUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoomUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RoomUser model
   */
  readonly fields: RoomUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RoomUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoomUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    room<T extends RoomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoomDefaultArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the RoomUser model
   */
  interface RoomUserFieldRefs {
    readonly id: FieldRef<"RoomUser", 'String'>
    readonly roomId: FieldRef<"RoomUser", 'String'>
    readonly userId: FieldRef<"RoomUser", 'String'>
    readonly role: FieldRef<"RoomUser", 'String'>
    readonly joinedAt: FieldRef<"RoomUser", 'DateTime'>
    readonly lastActive: FieldRef<"RoomUser", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RoomUser findUnique
   */
  export type RoomUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomUser
     */
    select?: RoomUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomUser
     */
    omit?: RoomUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomUserInclude<ExtArgs> | null
    /**
     * Filter, which RoomUser to fetch.
     */
    where: RoomUserWhereUniqueInput
  }

  /**
   * RoomUser findUniqueOrThrow
   */
  export type RoomUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomUser
     */
    select?: RoomUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomUser
     */
    omit?: RoomUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomUserInclude<ExtArgs> | null
    /**
     * Filter, which RoomUser to fetch.
     */
    where: RoomUserWhereUniqueInput
  }

  /**
   * RoomUser findFirst
   */
  export type RoomUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomUser
     */
    select?: RoomUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomUser
     */
    omit?: RoomUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomUserInclude<ExtArgs> | null
    /**
     * Filter, which RoomUser to fetch.
     */
    where?: RoomUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomUsers to fetch.
     */
    orderBy?: RoomUserOrderByWithRelationInput | RoomUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoomUsers.
     */
    cursor?: RoomUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoomUsers.
     */
    distinct?: RoomUserScalarFieldEnum | RoomUserScalarFieldEnum[]
  }

  /**
   * RoomUser findFirstOrThrow
   */
  export type RoomUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomUser
     */
    select?: RoomUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomUser
     */
    omit?: RoomUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomUserInclude<ExtArgs> | null
    /**
     * Filter, which RoomUser to fetch.
     */
    where?: RoomUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomUsers to fetch.
     */
    orderBy?: RoomUserOrderByWithRelationInput | RoomUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoomUsers.
     */
    cursor?: RoomUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoomUsers.
     */
    distinct?: RoomUserScalarFieldEnum | RoomUserScalarFieldEnum[]
  }

  /**
   * RoomUser findMany
   */
  export type RoomUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomUser
     */
    select?: RoomUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomUser
     */
    omit?: RoomUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomUserInclude<ExtArgs> | null
    /**
     * Filter, which RoomUsers to fetch.
     */
    where?: RoomUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomUsers to fetch.
     */
    orderBy?: RoomUserOrderByWithRelationInput | RoomUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RoomUsers.
     */
    cursor?: RoomUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomUsers.
     */
    skip?: number
    distinct?: RoomUserScalarFieldEnum | RoomUserScalarFieldEnum[]
  }

  /**
   * RoomUser create
   */
  export type RoomUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomUser
     */
    select?: RoomUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomUser
     */
    omit?: RoomUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomUserInclude<ExtArgs> | null
    /**
     * The data needed to create a RoomUser.
     */
    data: XOR<RoomUserCreateInput, RoomUserUncheckedCreateInput>
  }

  /**
   * RoomUser createMany
   */
  export type RoomUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RoomUsers.
     */
    data: RoomUserCreateManyInput | RoomUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RoomUser createManyAndReturn
   */
  export type RoomUserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomUser
     */
    select?: RoomUserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RoomUser
     */
    omit?: RoomUserOmit<ExtArgs> | null
    /**
     * The data used to create many RoomUsers.
     */
    data: RoomUserCreateManyInput | RoomUserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomUserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RoomUser update
   */
  export type RoomUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomUser
     */
    select?: RoomUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomUser
     */
    omit?: RoomUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomUserInclude<ExtArgs> | null
    /**
     * The data needed to update a RoomUser.
     */
    data: XOR<RoomUserUpdateInput, RoomUserUncheckedUpdateInput>
    /**
     * Choose, which RoomUser to update.
     */
    where: RoomUserWhereUniqueInput
  }

  /**
   * RoomUser updateMany
   */
  export type RoomUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RoomUsers.
     */
    data: XOR<RoomUserUpdateManyMutationInput, RoomUserUncheckedUpdateManyInput>
    /**
     * Filter which RoomUsers to update
     */
    where?: RoomUserWhereInput
    /**
     * Limit how many RoomUsers to update.
     */
    limit?: number
  }

  /**
   * RoomUser updateManyAndReturn
   */
  export type RoomUserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomUser
     */
    select?: RoomUserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RoomUser
     */
    omit?: RoomUserOmit<ExtArgs> | null
    /**
     * The data used to update RoomUsers.
     */
    data: XOR<RoomUserUpdateManyMutationInput, RoomUserUncheckedUpdateManyInput>
    /**
     * Filter which RoomUsers to update
     */
    where?: RoomUserWhereInput
    /**
     * Limit how many RoomUsers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomUserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RoomUser upsert
   */
  export type RoomUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomUser
     */
    select?: RoomUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomUser
     */
    omit?: RoomUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomUserInclude<ExtArgs> | null
    /**
     * The filter to search for the RoomUser to update in case it exists.
     */
    where: RoomUserWhereUniqueInput
    /**
     * In case the RoomUser found by the `where` argument doesn't exist, create a new RoomUser with this data.
     */
    create: XOR<RoomUserCreateInput, RoomUserUncheckedCreateInput>
    /**
     * In case the RoomUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoomUserUpdateInput, RoomUserUncheckedUpdateInput>
  }

  /**
   * RoomUser delete
   */
  export type RoomUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomUser
     */
    select?: RoomUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomUser
     */
    omit?: RoomUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomUserInclude<ExtArgs> | null
    /**
     * Filter which RoomUser to delete.
     */
    where: RoomUserWhereUniqueInput
  }

  /**
   * RoomUser deleteMany
   */
  export type RoomUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoomUsers to delete
     */
    where?: RoomUserWhereInput
    /**
     * Limit how many RoomUsers to delete.
     */
    limit?: number
  }

  /**
   * RoomUser without action
   */
  export type RoomUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomUser
     */
    select?: RoomUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomUser
     */
    omit?: RoomUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomUserInclude<ExtArgs> | null
  }


  /**
   * Model Document
   */

  export type AggregateDocument = {
    _count: DocumentCountAggregateOutputType | null
    _min: DocumentMinAggregateOutputType | null
    _max: DocumentMaxAggregateOutputType | null
  }

  export type DocumentMinAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    userId: string | null
    isPublic: boolean | null
    allowComments: boolean | null
    allowSuggestions: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    lastEditedAt: Date | null
  }

  export type DocumentMaxAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    userId: string | null
    isPublic: boolean | null
    allowComments: boolean | null
    allowSuggestions: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    lastEditedAt: Date | null
  }

  export type DocumentCountAggregateOutputType = {
    id: number
    title: number
    content: number
    userId: number
    isPublic: number
    tags: number
    allowComments: number
    allowSuggestions: number
    createdAt: number
    updatedAt: number
    lastEditedAt: number
    _all: number
  }


  export type DocumentMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
    userId?: true
    isPublic?: true
    allowComments?: true
    allowSuggestions?: true
    createdAt?: true
    updatedAt?: true
    lastEditedAt?: true
  }

  export type DocumentMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
    userId?: true
    isPublic?: true
    allowComments?: true
    allowSuggestions?: true
    createdAt?: true
    updatedAt?: true
    lastEditedAt?: true
  }

  export type DocumentCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    userId?: true
    isPublic?: true
    tags?: true
    allowComments?: true
    allowSuggestions?: true
    createdAt?: true
    updatedAt?: true
    lastEditedAt?: true
    _all?: true
  }

  export type DocumentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Document to aggregate.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Documents
    **/
    _count?: true | DocumentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DocumentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DocumentMaxAggregateInputType
  }

  export type GetDocumentAggregateType<T extends DocumentAggregateArgs> = {
        [P in keyof T & keyof AggregateDocument]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocument[P]>
      : GetScalarType<T[P], AggregateDocument[P]>
  }




  export type DocumentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentWhereInput
    orderBy?: DocumentOrderByWithAggregationInput | DocumentOrderByWithAggregationInput[]
    by: DocumentScalarFieldEnum[] | DocumentScalarFieldEnum
    having?: DocumentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DocumentCountAggregateInputType | true
    _min?: DocumentMinAggregateInputType
    _max?: DocumentMaxAggregateInputType
  }

  export type DocumentGroupByOutputType = {
    id: string
    title: string
    content: string
    userId: string
    isPublic: boolean
    tags: string[]
    allowComments: boolean
    allowSuggestions: boolean
    createdAt: Date
    updatedAt: Date
    lastEditedAt: Date
    _count: DocumentCountAggregateOutputType | null
    _min: DocumentMinAggregateOutputType | null
    _max: DocumentMaxAggregateOutputType | null
  }

  type GetDocumentGroupByPayload<T extends DocumentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DocumentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DocumentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DocumentGroupByOutputType[P]>
            : GetScalarType<T[P], DocumentGroupByOutputType[P]>
        }
      >
    >


  export type DocumentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    userId?: boolean
    isPublic?: boolean
    tags?: boolean
    allowComments?: boolean
    allowSuggestions?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastEditedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    images?: boolean | Document$imagesArgs<ExtArgs>
    versions?: boolean | Document$versionsArgs<ExtArgs>
    collaborators?: boolean | Document$collaboratorsArgs<ExtArgs>
    comments?: boolean | Document$commentsArgs<ExtArgs>
    shares?: boolean | Document$sharesArgs<ExtArgs>
    activities?: boolean | Document$activitiesArgs<ExtArgs>
    Room?: boolean | Document$RoomArgs<ExtArgs>
    _count?: boolean | DocumentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["document"]>

  export type DocumentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    userId?: boolean
    isPublic?: boolean
    tags?: boolean
    allowComments?: boolean
    allowSuggestions?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastEditedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["document"]>

  export type DocumentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    userId?: boolean
    isPublic?: boolean
    tags?: boolean
    allowComments?: boolean
    allowSuggestions?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastEditedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["document"]>

  export type DocumentSelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
    userId?: boolean
    isPublic?: boolean
    tags?: boolean
    allowComments?: boolean
    allowSuggestions?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastEditedAt?: boolean
  }

  export type DocumentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "content" | "userId" | "isPublic" | "tags" | "allowComments" | "allowSuggestions" | "createdAt" | "updatedAt" | "lastEditedAt", ExtArgs["result"]["document"]>
  export type DocumentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    images?: boolean | Document$imagesArgs<ExtArgs>
    versions?: boolean | Document$versionsArgs<ExtArgs>
    collaborators?: boolean | Document$collaboratorsArgs<ExtArgs>
    comments?: boolean | Document$commentsArgs<ExtArgs>
    shares?: boolean | Document$sharesArgs<ExtArgs>
    activities?: boolean | Document$activitiesArgs<ExtArgs>
    Room?: boolean | Document$RoomArgs<ExtArgs>
    _count?: boolean | DocumentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DocumentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DocumentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DocumentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Document"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      images: Prisma.$DocumentImagePayload<ExtArgs>[]
      versions: Prisma.$DocumentVersionPayload<ExtArgs>[]
      collaborators: Prisma.$DocumentCollaboratorsPayload<ExtArgs>[]
      comments: Prisma.$DocumentCommentPayload<ExtArgs>[]
      shares: Prisma.$DocumentSharePayload<ExtArgs>[]
      activities: Prisma.$DocumentActivityPayload<ExtArgs>[]
      Room: Prisma.$RoomPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      content: string
      userId: string
      isPublic: boolean
      tags: string[]
      allowComments: boolean
      allowSuggestions: boolean
      createdAt: Date
      updatedAt: Date
      lastEditedAt: Date
    }, ExtArgs["result"]["document"]>
    composites: {}
  }

  type DocumentGetPayload<S extends boolean | null | undefined | DocumentDefaultArgs> = $Result.GetResult<Prisma.$DocumentPayload, S>

  type DocumentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DocumentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DocumentCountAggregateInputType | true
    }

  export interface DocumentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Document'], meta: { name: 'Document' } }
    /**
     * Find zero or one Document that matches the filter.
     * @param {DocumentFindUniqueArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DocumentFindUniqueArgs>(args: SelectSubset<T, DocumentFindUniqueArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Document that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DocumentFindUniqueOrThrowArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DocumentFindUniqueOrThrowArgs>(args: SelectSubset<T, DocumentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Document that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindFirstArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DocumentFindFirstArgs>(args?: SelectSubset<T, DocumentFindFirstArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Document that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindFirstOrThrowArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DocumentFindFirstOrThrowArgs>(args?: SelectSubset<T, DocumentFindFirstOrThrowArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Documents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Documents
     * const documents = await prisma.document.findMany()
     * 
     * // Get first 10 Documents
     * const documents = await prisma.document.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const documentWithIdOnly = await prisma.document.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DocumentFindManyArgs>(args?: SelectSubset<T, DocumentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Document.
     * @param {DocumentCreateArgs} args - Arguments to create a Document.
     * @example
     * // Create one Document
     * const Document = await prisma.document.create({
     *   data: {
     *     // ... data to create a Document
     *   }
     * })
     * 
     */
    create<T extends DocumentCreateArgs>(args: SelectSubset<T, DocumentCreateArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Documents.
     * @param {DocumentCreateManyArgs} args - Arguments to create many Documents.
     * @example
     * // Create many Documents
     * const document = await prisma.document.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DocumentCreateManyArgs>(args?: SelectSubset<T, DocumentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Documents and returns the data saved in the database.
     * @param {DocumentCreateManyAndReturnArgs} args - Arguments to create many Documents.
     * @example
     * // Create many Documents
     * const document = await prisma.document.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Documents and only return the `id`
     * const documentWithIdOnly = await prisma.document.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DocumentCreateManyAndReturnArgs>(args?: SelectSubset<T, DocumentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Document.
     * @param {DocumentDeleteArgs} args - Arguments to delete one Document.
     * @example
     * // Delete one Document
     * const Document = await prisma.document.delete({
     *   where: {
     *     // ... filter to delete one Document
     *   }
     * })
     * 
     */
    delete<T extends DocumentDeleteArgs>(args: SelectSubset<T, DocumentDeleteArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Document.
     * @param {DocumentUpdateArgs} args - Arguments to update one Document.
     * @example
     * // Update one Document
     * const document = await prisma.document.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DocumentUpdateArgs>(args: SelectSubset<T, DocumentUpdateArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Documents.
     * @param {DocumentDeleteManyArgs} args - Arguments to filter Documents to delete.
     * @example
     * // Delete a few Documents
     * const { count } = await prisma.document.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DocumentDeleteManyArgs>(args?: SelectSubset<T, DocumentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Documents
     * const document = await prisma.document.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DocumentUpdateManyArgs>(args: SelectSubset<T, DocumentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Documents and returns the data updated in the database.
     * @param {DocumentUpdateManyAndReturnArgs} args - Arguments to update many Documents.
     * @example
     * // Update many Documents
     * const document = await prisma.document.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Documents and only return the `id`
     * const documentWithIdOnly = await prisma.document.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DocumentUpdateManyAndReturnArgs>(args: SelectSubset<T, DocumentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Document.
     * @param {DocumentUpsertArgs} args - Arguments to update or create a Document.
     * @example
     * // Update or create a Document
     * const document = await prisma.document.upsert({
     *   create: {
     *     // ... data to create a Document
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Document we want to update
     *   }
     * })
     */
    upsert<T extends DocumentUpsertArgs>(args: SelectSubset<T, DocumentUpsertArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentCountArgs} args - Arguments to filter Documents to count.
     * @example
     * // Count the number of Documents
     * const count = await prisma.document.count({
     *   where: {
     *     // ... the filter for the Documents we want to count
     *   }
     * })
    **/
    count<T extends DocumentCountArgs>(
      args?: Subset<T, DocumentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DocumentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Document.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DocumentAggregateArgs>(args: Subset<T, DocumentAggregateArgs>): Prisma.PrismaPromise<GetDocumentAggregateType<T>>

    /**
     * Group by Document.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentGroupByArgs} args - Group by arguments.
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
      T extends DocumentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DocumentGroupByArgs['orderBy'] }
        : { orderBy?: DocumentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DocumentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocumentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Document model
   */
  readonly fields: DocumentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Document.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DocumentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    images<T extends Document$imagesArgs<ExtArgs> = {}>(args?: Subset<T, Document$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    versions<T extends Document$versionsArgs<ExtArgs> = {}>(args?: Subset<T, Document$versionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentVersionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    collaborators<T extends Document$collaboratorsArgs<ExtArgs> = {}>(args?: Subset<T, Document$collaboratorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentCollaboratorsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comments<T extends Document$commentsArgs<ExtArgs> = {}>(args?: Subset<T, Document$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentCommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    shares<T extends Document$sharesArgs<ExtArgs> = {}>(args?: Subset<T, Document$sharesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentSharePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    activities<T extends Document$activitiesArgs<ExtArgs> = {}>(args?: Subset<T, Document$activitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Room<T extends Document$RoomArgs<ExtArgs> = {}>(args?: Subset<T, Document$RoomArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Document model
   */
  interface DocumentFieldRefs {
    readonly id: FieldRef<"Document", 'String'>
    readonly title: FieldRef<"Document", 'String'>
    readonly content: FieldRef<"Document", 'String'>
    readonly userId: FieldRef<"Document", 'String'>
    readonly isPublic: FieldRef<"Document", 'Boolean'>
    readonly tags: FieldRef<"Document", 'String[]'>
    readonly allowComments: FieldRef<"Document", 'Boolean'>
    readonly allowSuggestions: FieldRef<"Document", 'Boolean'>
    readonly createdAt: FieldRef<"Document", 'DateTime'>
    readonly updatedAt: FieldRef<"Document", 'DateTime'>
    readonly lastEditedAt: FieldRef<"Document", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Document findUnique
   */
  export type DocumentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document findUniqueOrThrow
   */
  export type DocumentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document findFirst
   */
  export type DocumentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Documents.
     */
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document findFirstOrThrow
   */
  export type DocumentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Documents.
     */
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document findMany
   */
  export type DocumentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Documents to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document create
   */
  export type DocumentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The data needed to create a Document.
     */
    data: XOR<DocumentCreateInput, DocumentUncheckedCreateInput>
  }

  /**
   * Document createMany
   */
  export type DocumentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Documents.
     */
    data: DocumentCreateManyInput | DocumentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Document createManyAndReturn
   */
  export type DocumentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * The data used to create many Documents.
     */
    data: DocumentCreateManyInput | DocumentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Document update
   */
  export type DocumentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The data needed to update a Document.
     */
    data: XOR<DocumentUpdateInput, DocumentUncheckedUpdateInput>
    /**
     * Choose, which Document to update.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document updateMany
   */
  export type DocumentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Documents.
     */
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyInput>
    /**
     * Filter which Documents to update
     */
    where?: DocumentWhereInput
    /**
     * Limit how many Documents to update.
     */
    limit?: number
  }

  /**
   * Document updateManyAndReturn
   */
  export type DocumentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * The data used to update Documents.
     */
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyInput>
    /**
     * Filter which Documents to update
     */
    where?: DocumentWhereInput
    /**
     * Limit how many Documents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Document upsert
   */
  export type DocumentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The filter to search for the Document to update in case it exists.
     */
    where: DocumentWhereUniqueInput
    /**
     * In case the Document found by the `where` argument doesn't exist, create a new Document with this data.
     */
    create: XOR<DocumentCreateInput, DocumentUncheckedCreateInput>
    /**
     * In case the Document was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DocumentUpdateInput, DocumentUncheckedUpdateInput>
  }

  /**
   * Document delete
   */
  export type DocumentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter which Document to delete.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document deleteMany
   */
  export type DocumentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Documents to delete
     */
    where?: DocumentWhereInput
    /**
     * Limit how many Documents to delete.
     */
    limit?: number
  }

  /**
   * Document.images
   */
  export type Document$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentImage
     */
    select?: DocumentImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentImage
     */
    omit?: DocumentImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentImageInclude<ExtArgs> | null
    where?: DocumentImageWhereInput
    orderBy?: DocumentImageOrderByWithRelationInput | DocumentImageOrderByWithRelationInput[]
    cursor?: DocumentImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DocumentImageScalarFieldEnum | DocumentImageScalarFieldEnum[]
  }

  /**
   * Document.versions
   */
  export type Document$versionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentVersion
     */
    select?: DocumentVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentVersion
     */
    omit?: DocumentVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentVersionInclude<ExtArgs> | null
    where?: DocumentVersionWhereInput
    orderBy?: DocumentVersionOrderByWithRelationInput | DocumentVersionOrderByWithRelationInput[]
    cursor?: DocumentVersionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DocumentVersionScalarFieldEnum | DocumentVersionScalarFieldEnum[]
  }

  /**
   * Document.collaborators
   */
  export type Document$collaboratorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentCollaborators
     */
    select?: DocumentCollaboratorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentCollaborators
     */
    omit?: DocumentCollaboratorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentCollaboratorsInclude<ExtArgs> | null
    where?: DocumentCollaboratorsWhereInput
    orderBy?: DocumentCollaboratorsOrderByWithRelationInput | DocumentCollaboratorsOrderByWithRelationInput[]
    cursor?: DocumentCollaboratorsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DocumentCollaboratorsScalarFieldEnum | DocumentCollaboratorsScalarFieldEnum[]
  }

  /**
   * Document.comments
   */
  export type Document$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentComment
     */
    select?: DocumentCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentComment
     */
    omit?: DocumentCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentCommentInclude<ExtArgs> | null
    where?: DocumentCommentWhereInput
    orderBy?: DocumentCommentOrderByWithRelationInput | DocumentCommentOrderByWithRelationInput[]
    cursor?: DocumentCommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DocumentCommentScalarFieldEnum | DocumentCommentScalarFieldEnum[]
  }

  /**
   * Document.shares
   */
  export type Document$sharesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentShare
     */
    select?: DocumentShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentShare
     */
    omit?: DocumentShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentShareInclude<ExtArgs> | null
    where?: DocumentShareWhereInput
    orderBy?: DocumentShareOrderByWithRelationInput | DocumentShareOrderByWithRelationInput[]
    cursor?: DocumentShareWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DocumentShareScalarFieldEnum | DocumentShareScalarFieldEnum[]
  }

  /**
   * Document.activities
   */
  export type Document$activitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentActivity
     */
    select?: DocumentActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentActivity
     */
    omit?: DocumentActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentActivityInclude<ExtArgs> | null
    where?: DocumentActivityWhereInput
    orderBy?: DocumentActivityOrderByWithRelationInput | DocumentActivityOrderByWithRelationInput[]
    cursor?: DocumentActivityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DocumentActivityScalarFieldEnum | DocumentActivityScalarFieldEnum[]
  }

  /**
   * Document.Room
   */
  export type Document$RoomArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    where?: RoomWhereInput
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    cursor?: RoomWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Document without action
   */
  export type DocumentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
  }


  /**
   * Model DocumentImage
   */

  export type AggregateDocumentImage = {
    _count: DocumentImageCountAggregateOutputType | null
    _avg: DocumentImageAvgAggregateOutputType | null
    _sum: DocumentImageSumAggregateOutputType | null
    _min: DocumentImageMinAggregateOutputType | null
    _max: DocumentImageMaxAggregateOutputType | null
  }

  export type DocumentImageAvgAggregateOutputType = {
    fileSize: number | null
    width: number | null
    height: number | null
  }

  export type DocumentImageSumAggregateOutputType = {
    fileSize: number | null
    width: number | null
    height: number | null
  }

  export type DocumentImageMinAggregateOutputType = {
    id: string | null
    documentId: string | null
    fileName: string | null
    originalName: string | null
    fileUrl: string | null
    fileSize: number | null
    mimeType: string | null
    width: number | null
    height: number | null
    createdAt: Date | null
  }

  export type DocumentImageMaxAggregateOutputType = {
    id: string | null
    documentId: string | null
    fileName: string | null
    originalName: string | null
    fileUrl: string | null
    fileSize: number | null
    mimeType: string | null
    width: number | null
    height: number | null
    createdAt: Date | null
  }

  export type DocumentImageCountAggregateOutputType = {
    id: number
    documentId: number
    fileName: number
    originalName: number
    fileUrl: number
    fileSize: number
    mimeType: number
    width: number
    height: number
    createdAt: number
    _all: number
  }


  export type DocumentImageAvgAggregateInputType = {
    fileSize?: true
    width?: true
    height?: true
  }

  export type DocumentImageSumAggregateInputType = {
    fileSize?: true
    width?: true
    height?: true
  }

  export type DocumentImageMinAggregateInputType = {
    id?: true
    documentId?: true
    fileName?: true
    originalName?: true
    fileUrl?: true
    fileSize?: true
    mimeType?: true
    width?: true
    height?: true
    createdAt?: true
  }

  export type DocumentImageMaxAggregateInputType = {
    id?: true
    documentId?: true
    fileName?: true
    originalName?: true
    fileUrl?: true
    fileSize?: true
    mimeType?: true
    width?: true
    height?: true
    createdAt?: true
  }

  export type DocumentImageCountAggregateInputType = {
    id?: true
    documentId?: true
    fileName?: true
    originalName?: true
    fileUrl?: true
    fileSize?: true
    mimeType?: true
    width?: true
    height?: true
    createdAt?: true
    _all?: true
  }

  export type DocumentImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DocumentImage to aggregate.
     */
    where?: DocumentImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentImages to fetch.
     */
    orderBy?: DocumentImageOrderByWithRelationInput | DocumentImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DocumentImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DocumentImages
    **/
    _count?: true | DocumentImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DocumentImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DocumentImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DocumentImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DocumentImageMaxAggregateInputType
  }

  export type GetDocumentImageAggregateType<T extends DocumentImageAggregateArgs> = {
        [P in keyof T & keyof AggregateDocumentImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocumentImage[P]>
      : GetScalarType<T[P], AggregateDocumentImage[P]>
  }




  export type DocumentImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentImageWhereInput
    orderBy?: DocumentImageOrderByWithAggregationInput | DocumentImageOrderByWithAggregationInput[]
    by: DocumentImageScalarFieldEnum[] | DocumentImageScalarFieldEnum
    having?: DocumentImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DocumentImageCountAggregateInputType | true
    _avg?: DocumentImageAvgAggregateInputType
    _sum?: DocumentImageSumAggregateInputType
    _min?: DocumentImageMinAggregateInputType
    _max?: DocumentImageMaxAggregateInputType
  }

  export type DocumentImageGroupByOutputType = {
    id: string
    documentId: string
    fileName: string
    originalName: string
    fileUrl: string
    fileSize: number
    mimeType: string
    width: number | null
    height: number | null
    createdAt: Date
    _count: DocumentImageCountAggregateOutputType | null
    _avg: DocumentImageAvgAggregateOutputType | null
    _sum: DocumentImageSumAggregateOutputType | null
    _min: DocumentImageMinAggregateOutputType | null
    _max: DocumentImageMaxAggregateOutputType | null
  }

  type GetDocumentImageGroupByPayload<T extends DocumentImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DocumentImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DocumentImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DocumentImageGroupByOutputType[P]>
            : GetScalarType<T[P], DocumentImageGroupByOutputType[P]>
        }
      >
    >


  export type DocumentImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    documentId?: boolean
    fileName?: boolean
    originalName?: boolean
    fileUrl?: boolean
    fileSize?: boolean
    mimeType?: boolean
    width?: boolean
    height?: boolean
    createdAt?: boolean
    document?: boolean | DocumentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["documentImage"]>

  export type DocumentImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    documentId?: boolean
    fileName?: boolean
    originalName?: boolean
    fileUrl?: boolean
    fileSize?: boolean
    mimeType?: boolean
    width?: boolean
    height?: boolean
    createdAt?: boolean
    document?: boolean | DocumentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["documentImage"]>

  export type DocumentImageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    documentId?: boolean
    fileName?: boolean
    originalName?: boolean
    fileUrl?: boolean
    fileSize?: boolean
    mimeType?: boolean
    width?: boolean
    height?: boolean
    createdAt?: boolean
    document?: boolean | DocumentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["documentImage"]>

  export type DocumentImageSelectScalar = {
    id?: boolean
    documentId?: boolean
    fileName?: boolean
    originalName?: boolean
    fileUrl?: boolean
    fileSize?: boolean
    mimeType?: boolean
    width?: boolean
    height?: boolean
    createdAt?: boolean
  }

  export type DocumentImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "documentId" | "fileName" | "originalName" | "fileUrl" | "fileSize" | "mimeType" | "width" | "height" | "createdAt", ExtArgs["result"]["documentImage"]>
  export type DocumentImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    document?: boolean | DocumentDefaultArgs<ExtArgs>
  }
  export type DocumentImageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    document?: boolean | DocumentDefaultArgs<ExtArgs>
  }
  export type DocumentImageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    document?: boolean | DocumentDefaultArgs<ExtArgs>
  }

  export type $DocumentImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DocumentImage"
    objects: {
      document: Prisma.$DocumentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      documentId: string
      fileName: string
      originalName: string
      fileUrl: string
      fileSize: number
      mimeType: string
      width: number | null
      height: number | null
      createdAt: Date
    }, ExtArgs["result"]["documentImage"]>
    composites: {}
  }

  type DocumentImageGetPayload<S extends boolean | null | undefined | DocumentImageDefaultArgs> = $Result.GetResult<Prisma.$DocumentImagePayload, S>

  type DocumentImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DocumentImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DocumentImageCountAggregateInputType | true
    }

  export interface DocumentImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DocumentImage'], meta: { name: 'DocumentImage' } }
    /**
     * Find zero or one DocumentImage that matches the filter.
     * @param {DocumentImageFindUniqueArgs} args - Arguments to find a DocumentImage
     * @example
     * // Get one DocumentImage
     * const documentImage = await prisma.documentImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DocumentImageFindUniqueArgs>(args: SelectSubset<T, DocumentImageFindUniqueArgs<ExtArgs>>): Prisma__DocumentImageClient<$Result.GetResult<Prisma.$DocumentImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DocumentImage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DocumentImageFindUniqueOrThrowArgs} args - Arguments to find a DocumentImage
     * @example
     * // Get one DocumentImage
     * const documentImage = await prisma.documentImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DocumentImageFindUniqueOrThrowArgs>(args: SelectSubset<T, DocumentImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DocumentImageClient<$Result.GetResult<Prisma.$DocumentImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DocumentImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentImageFindFirstArgs} args - Arguments to find a DocumentImage
     * @example
     * // Get one DocumentImage
     * const documentImage = await prisma.documentImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DocumentImageFindFirstArgs>(args?: SelectSubset<T, DocumentImageFindFirstArgs<ExtArgs>>): Prisma__DocumentImageClient<$Result.GetResult<Prisma.$DocumentImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DocumentImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentImageFindFirstOrThrowArgs} args - Arguments to find a DocumentImage
     * @example
     * // Get one DocumentImage
     * const documentImage = await prisma.documentImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DocumentImageFindFirstOrThrowArgs>(args?: SelectSubset<T, DocumentImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__DocumentImageClient<$Result.GetResult<Prisma.$DocumentImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DocumentImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DocumentImages
     * const documentImages = await prisma.documentImage.findMany()
     * 
     * // Get first 10 DocumentImages
     * const documentImages = await prisma.documentImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const documentImageWithIdOnly = await prisma.documentImage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DocumentImageFindManyArgs>(args?: SelectSubset<T, DocumentImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DocumentImage.
     * @param {DocumentImageCreateArgs} args - Arguments to create a DocumentImage.
     * @example
     * // Create one DocumentImage
     * const DocumentImage = await prisma.documentImage.create({
     *   data: {
     *     // ... data to create a DocumentImage
     *   }
     * })
     * 
     */
    create<T extends DocumentImageCreateArgs>(args: SelectSubset<T, DocumentImageCreateArgs<ExtArgs>>): Prisma__DocumentImageClient<$Result.GetResult<Prisma.$DocumentImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DocumentImages.
     * @param {DocumentImageCreateManyArgs} args - Arguments to create many DocumentImages.
     * @example
     * // Create many DocumentImages
     * const documentImage = await prisma.documentImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DocumentImageCreateManyArgs>(args?: SelectSubset<T, DocumentImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DocumentImages and returns the data saved in the database.
     * @param {DocumentImageCreateManyAndReturnArgs} args - Arguments to create many DocumentImages.
     * @example
     * // Create many DocumentImages
     * const documentImage = await prisma.documentImage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DocumentImages and only return the `id`
     * const documentImageWithIdOnly = await prisma.documentImage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DocumentImageCreateManyAndReturnArgs>(args?: SelectSubset<T, DocumentImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentImagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DocumentImage.
     * @param {DocumentImageDeleteArgs} args - Arguments to delete one DocumentImage.
     * @example
     * // Delete one DocumentImage
     * const DocumentImage = await prisma.documentImage.delete({
     *   where: {
     *     // ... filter to delete one DocumentImage
     *   }
     * })
     * 
     */
    delete<T extends DocumentImageDeleteArgs>(args: SelectSubset<T, DocumentImageDeleteArgs<ExtArgs>>): Prisma__DocumentImageClient<$Result.GetResult<Prisma.$DocumentImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DocumentImage.
     * @param {DocumentImageUpdateArgs} args - Arguments to update one DocumentImage.
     * @example
     * // Update one DocumentImage
     * const documentImage = await prisma.documentImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DocumentImageUpdateArgs>(args: SelectSubset<T, DocumentImageUpdateArgs<ExtArgs>>): Prisma__DocumentImageClient<$Result.GetResult<Prisma.$DocumentImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DocumentImages.
     * @param {DocumentImageDeleteManyArgs} args - Arguments to filter DocumentImages to delete.
     * @example
     * // Delete a few DocumentImages
     * const { count } = await prisma.documentImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DocumentImageDeleteManyArgs>(args?: SelectSubset<T, DocumentImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DocumentImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DocumentImages
     * const documentImage = await prisma.documentImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DocumentImageUpdateManyArgs>(args: SelectSubset<T, DocumentImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DocumentImages and returns the data updated in the database.
     * @param {DocumentImageUpdateManyAndReturnArgs} args - Arguments to update many DocumentImages.
     * @example
     * // Update many DocumentImages
     * const documentImage = await prisma.documentImage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DocumentImages and only return the `id`
     * const documentImageWithIdOnly = await prisma.documentImage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DocumentImageUpdateManyAndReturnArgs>(args: SelectSubset<T, DocumentImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentImagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DocumentImage.
     * @param {DocumentImageUpsertArgs} args - Arguments to update or create a DocumentImage.
     * @example
     * // Update or create a DocumentImage
     * const documentImage = await prisma.documentImage.upsert({
     *   create: {
     *     // ... data to create a DocumentImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DocumentImage we want to update
     *   }
     * })
     */
    upsert<T extends DocumentImageUpsertArgs>(args: SelectSubset<T, DocumentImageUpsertArgs<ExtArgs>>): Prisma__DocumentImageClient<$Result.GetResult<Prisma.$DocumentImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DocumentImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentImageCountArgs} args - Arguments to filter DocumentImages to count.
     * @example
     * // Count the number of DocumentImages
     * const count = await prisma.documentImage.count({
     *   where: {
     *     // ... the filter for the DocumentImages we want to count
     *   }
     * })
    **/
    count<T extends DocumentImageCountArgs>(
      args?: Subset<T, DocumentImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DocumentImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DocumentImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DocumentImageAggregateArgs>(args: Subset<T, DocumentImageAggregateArgs>): Prisma.PrismaPromise<GetDocumentImageAggregateType<T>>

    /**
     * Group by DocumentImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentImageGroupByArgs} args - Group by arguments.
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
      T extends DocumentImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DocumentImageGroupByArgs['orderBy'] }
        : { orderBy?: DocumentImageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DocumentImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocumentImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DocumentImage model
   */
  readonly fields: DocumentImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DocumentImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DocumentImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    document<T extends DocumentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DocumentDefaultArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the DocumentImage model
   */
  interface DocumentImageFieldRefs {
    readonly id: FieldRef<"DocumentImage", 'String'>
    readonly documentId: FieldRef<"DocumentImage", 'String'>
    readonly fileName: FieldRef<"DocumentImage", 'String'>
    readonly originalName: FieldRef<"DocumentImage", 'String'>
    readonly fileUrl: FieldRef<"DocumentImage", 'String'>
    readonly fileSize: FieldRef<"DocumentImage", 'Int'>
    readonly mimeType: FieldRef<"DocumentImage", 'String'>
    readonly width: FieldRef<"DocumentImage", 'Int'>
    readonly height: FieldRef<"DocumentImage", 'Int'>
    readonly createdAt: FieldRef<"DocumentImage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DocumentImage findUnique
   */
  export type DocumentImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentImage
     */
    select?: DocumentImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentImage
     */
    omit?: DocumentImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentImageInclude<ExtArgs> | null
    /**
     * Filter, which DocumentImage to fetch.
     */
    where: DocumentImageWhereUniqueInput
  }

  /**
   * DocumentImage findUniqueOrThrow
   */
  export type DocumentImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentImage
     */
    select?: DocumentImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentImage
     */
    omit?: DocumentImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentImageInclude<ExtArgs> | null
    /**
     * Filter, which DocumentImage to fetch.
     */
    where: DocumentImageWhereUniqueInput
  }

  /**
   * DocumentImage findFirst
   */
  export type DocumentImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentImage
     */
    select?: DocumentImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentImage
     */
    omit?: DocumentImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentImageInclude<ExtArgs> | null
    /**
     * Filter, which DocumentImage to fetch.
     */
    where?: DocumentImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentImages to fetch.
     */
    orderBy?: DocumentImageOrderByWithRelationInput | DocumentImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DocumentImages.
     */
    cursor?: DocumentImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DocumentImages.
     */
    distinct?: DocumentImageScalarFieldEnum | DocumentImageScalarFieldEnum[]
  }

  /**
   * DocumentImage findFirstOrThrow
   */
  export type DocumentImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentImage
     */
    select?: DocumentImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentImage
     */
    omit?: DocumentImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentImageInclude<ExtArgs> | null
    /**
     * Filter, which DocumentImage to fetch.
     */
    where?: DocumentImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentImages to fetch.
     */
    orderBy?: DocumentImageOrderByWithRelationInput | DocumentImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DocumentImages.
     */
    cursor?: DocumentImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DocumentImages.
     */
    distinct?: DocumentImageScalarFieldEnum | DocumentImageScalarFieldEnum[]
  }

  /**
   * DocumentImage findMany
   */
  export type DocumentImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentImage
     */
    select?: DocumentImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentImage
     */
    omit?: DocumentImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentImageInclude<ExtArgs> | null
    /**
     * Filter, which DocumentImages to fetch.
     */
    where?: DocumentImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentImages to fetch.
     */
    orderBy?: DocumentImageOrderByWithRelationInput | DocumentImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DocumentImages.
     */
    cursor?: DocumentImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentImages.
     */
    skip?: number
    distinct?: DocumentImageScalarFieldEnum | DocumentImageScalarFieldEnum[]
  }

  /**
   * DocumentImage create
   */
  export type DocumentImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentImage
     */
    select?: DocumentImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentImage
     */
    omit?: DocumentImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentImageInclude<ExtArgs> | null
    /**
     * The data needed to create a DocumentImage.
     */
    data: XOR<DocumentImageCreateInput, DocumentImageUncheckedCreateInput>
  }

  /**
   * DocumentImage createMany
   */
  export type DocumentImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DocumentImages.
     */
    data: DocumentImageCreateManyInput | DocumentImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DocumentImage createManyAndReturn
   */
  export type DocumentImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentImage
     */
    select?: DocumentImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentImage
     */
    omit?: DocumentImageOmit<ExtArgs> | null
    /**
     * The data used to create many DocumentImages.
     */
    data: DocumentImageCreateManyInput | DocumentImageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentImageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DocumentImage update
   */
  export type DocumentImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentImage
     */
    select?: DocumentImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentImage
     */
    omit?: DocumentImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentImageInclude<ExtArgs> | null
    /**
     * The data needed to update a DocumentImage.
     */
    data: XOR<DocumentImageUpdateInput, DocumentImageUncheckedUpdateInput>
    /**
     * Choose, which DocumentImage to update.
     */
    where: DocumentImageWhereUniqueInput
  }

  /**
   * DocumentImage updateMany
   */
  export type DocumentImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DocumentImages.
     */
    data: XOR<DocumentImageUpdateManyMutationInput, DocumentImageUncheckedUpdateManyInput>
    /**
     * Filter which DocumentImages to update
     */
    where?: DocumentImageWhereInput
    /**
     * Limit how many DocumentImages to update.
     */
    limit?: number
  }

  /**
   * DocumentImage updateManyAndReturn
   */
  export type DocumentImageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentImage
     */
    select?: DocumentImageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentImage
     */
    omit?: DocumentImageOmit<ExtArgs> | null
    /**
     * The data used to update DocumentImages.
     */
    data: XOR<DocumentImageUpdateManyMutationInput, DocumentImageUncheckedUpdateManyInput>
    /**
     * Filter which DocumentImages to update
     */
    where?: DocumentImageWhereInput
    /**
     * Limit how many DocumentImages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentImageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DocumentImage upsert
   */
  export type DocumentImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentImage
     */
    select?: DocumentImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentImage
     */
    omit?: DocumentImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentImageInclude<ExtArgs> | null
    /**
     * The filter to search for the DocumentImage to update in case it exists.
     */
    where: DocumentImageWhereUniqueInput
    /**
     * In case the DocumentImage found by the `where` argument doesn't exist, create a new DocumentImage with this data.
     */
    create: XOR<DocumentImageCreateInput, DocumentImageUncheckedCreateInput>
    /**
     * In case the DocumentImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DocumentImageUpdateInput, DocumentImageUncheckedUpdateInput>
  }

  /**
   * DocumentImage delete
   */
  export type DocumentImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentImage
     */
    select?: DocumentImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentImage
     */
    omit?: DocumentImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentImageInclude<ExtArgs> | null
    /**
     * Filter which DocumentImage to delete.
     */
    where: DocumentImageWhereUniqueInput
  }

  /**
   * DocumentImage deleteMany
   */
  export type DocumentImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DocumentImages to delete
     */
    where?: DocumentImageWhereInput
    /**
     * Limit how many DocumentImages to delete.
     */
    limit?: number
  }

  /**
   * DocumentImage without action
   */
  export type DocumentImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentImage
     */
    select?: DocumentImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentImage
     */
    omit?: DocumentImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentImageInclude<ExtArgs> | null
  }


  /**
   * Model DocumentVersion
   */

  export type AggregateDocumentVersion = {
    _count: DocumentVersionCountAggregateOutputType | null
    _avg: DocumentVersionAvgAggregateOutputType | null
    _sum: DocumentVersionSumAggregateOutputType | null
    _min: DocumentVersionMinAggregateOutputType | null
    _max: DocumentVersionMaxAggregateOutputType | null
  }

  export type DocumentVersionAvgAggregateOutputType = {
    versionNumber: number | null
  }

  export type DocumentVersionSumAggregateOutputType = {
    versionNumber: number | null
  }

  export type DocumentVersionMinAggregateOutputType = {
    id: string | null
    documentId: string | null
    content: string | null
    versionNumber: number | null
    changeDescription: string | null
    createdAt: Date | null
    createdBy: string | null
  }

  export type DocumentVersionMaxAggregateOutputType = {
    id: string | null
    documentId: string | null
    content: string | null
    versionNumber: number | null
    changeDescription: string | null
    createdAt: Date | null
    createdBy: string | null
  }

  export type DocumentVersionCountAggregateOutputType = {
    id: number
    documentId: number
    content: number
    versionNumber: number
    changeDescription: number
    createdAt: number
    createdBy: number
    _all: number
  }


  export type DocumentVersionAvgAggregateInputType = {
    versionNumber?: true
  }

  export type DocumentVersionSumAggregateInputType = {
    versionNumber?: true
  }

  export type DocumentVersionMinAggregateInputType = {
    id?: true
    documentId?: true
    content?: true
    versionNumber?: true
    changeDescription?: true
    createdAt?: true
    createdBy?: true
  }

  export type DocumentVersionMaxAggregateInputType = {
    id?: true
    documentId?: true
    content?: true
    versionNumber?: true
    changeDescription?: true
    createdAt?: true
    createdBy?: true
  }

  export type DocumentVersionCountAggregateInputType = {
    id?: true
    documentId?: true
    content?: true
    versionNumber?: true
    changeDescription?: true
    createdAt?: true
    createdBy?: true
    _all?: true
  }

  export type DocumentVersionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DocumentVersion to aggregate.
     */
    where?: DocumentVersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentVersions to fetch.
     */
    orderBy?: DocumentVersionOrderByWithRelationInput | DocumentVersionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DocumentVersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentVersions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentVersions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DocumentVersions
    **/
    _count?: true | DocumentVersionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DocumentVersionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DocumentVersionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DocumentVersionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DocumentVersionMaxAggregateInputType
  }

  export type GetDocumentVersionAggregateType<T extends DocumentVersionAggregateArgs> = {
        [P in keyof T & keyof AggregateDocumentVersion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocumentVersion[P]>
      : GetScalarType<T[P], AggregateDocumentVersion[P]>
  }




  export type DocumentVersionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentVersionWhereInput
    orderBy?: DocumentVersionOrderByWithAggregationInput | DocumentVersionOrderByWithAggregationInput[]
    by: DocumentVersionScalarFieldEnum[] | DocumentVersionScalarFieldEnum
    having?: DocumentVersionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DocumentVersionCountAggregateInputType | true
    _avg?: DocumentVersionAvgAggregateInputType
    _sum?: DocumentVersionSumAggregateInputType
    _min?: DocumentVersionMinAggregateInputType
    _max?: DocumentVersionMaxAggregateInputType
  }

  export type DocumentVersionGroupByOutputType = {
    id: string
    documentId: string
    content: string
    versionNumber: number
    changeDescription: string | null
    createdAt: Date
    createdBy: string
    _count: DocumentVersionCountAggregateOutputType | null
    _avg: DocumentVersionAvgAggregateOutputType | null
    _sum: DocumentVersionSumAggregateOutputType | null
    _min: DocumentVersionMinAggregateOutputType | null
    _max: DocumentVersionMaxAggregateOutputType | null
  }

  type GetDocumentVersionGroupByPayload<T extends DocumentVersionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DocumentVersionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DocumentVersionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DocumentVersionGroupByOutputType[P]>
            : GetScalarType<T[P], DocumentVersionGroupByOutputType[P]>
        }
      >
    >


  export type DocumentVersionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    documentId?: boolean
    content?: boolean
    versionNumber?: boolean
    changeDescription?: boolean
    createdAt?: boolean
    createdBy?: boolean
    document?: boolean | DocumentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["documentVersion"]>

  export type DocumentVersionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    documentId?: boolean
    content?: boolean
    versionNumber?: boolean
    changeDescription?: boolean
    createdAt?: boolean
    createdBy?: boolean
    document?: boolean | DocumentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["documentVersion"]>

  export type DocumentVersionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    documentId?: boolean
    content?: boolean
    versionNumber?: boolean
    changeDescription?: boolean
    createdAt?: boolean
    createdBy?: boolean
    document?: boolean | DocumentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["documentVersion"]>

  export type DocumentVersionSelectScalar = {
    id?: boolean
    documentId?: boolean
    content?: boolean
    versionNumber?: boolean
    changeDescription?: boolean
    createdAt?: boolean
    createdBy?: boolean
  }

  export type DocumentVersionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "documentId" | "content" | "versionNumber" | "changeDescription" | "createdAt" | "createdBy", ExtArgs["result"]["documentVersion"]>
  export type DocumentVersionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    document?: boolean | DocumentDefaultArgs<ExtArgs>
  }
  export type DocumentVersionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    document?: boolean | DocumentDefaultArgs<ExtArgs>
  }
  export type DocumentVersionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    document?: boolean | DocumentDefaultArgs<ExtArgs>
  }

  export type $DocumentVersionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DocumentVersion"
    objects: {
      document: Prisma.$DocumentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      documentId: string
      content: string
      versionNumber: number
      changeDescription: string | null
      createdAt: Date
      createdBy: string
    }, ExtArgs["result"]["documentVersion"]>
    composites: {}
  }

  type DocumentVersionGetPayload<S extends boolean | null | undefined | DocumentVersionDefaultArgs> = $Result.GetResult<Prisma.$DocumentVersionPayload, S>

  type DocumentVersionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DocumentVersionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DocumentVersionCountAggregateInputType | true
    }

  export interface DocumentVersionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DocumentVersion'], meta: { name: 'DocumentVersion' } }
    /**
     * Find zero or one DocumentVersion that matches the filter.
     * @param {DocumentVersionFindUniqueArgs} args - Arguments to find a DocumentVersion
     * @example
     * // Get one DocumentVersion
     * const documentVersion = await prisma.documentVersion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DocumentVersionFindUniqueArgs>(args: SelectSubset<T, DocumentVersionFindUniqueArgs<ExtArgs>>): Prisma__DocumentVersionClient<$Result.GetResult<Prisma.$DocumentVersionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DocumentVersion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DocumentVersionFindUniqueOrThrowArgs} args - Arguments to find a DocumentVersion
     * @example
     * // Get one DocumentVersion
     * const documentVersion = await prisma.documentVersion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DocumentVersionFindUniqueOrThrowArgs>(args: SelectSubset<T, DocumentVersionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DocumentVersionClient<$Result.GetResult<Prisma.$DocumentVersionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DocumentVersion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentVersionFindFirstArgs} args - Arguments to find a DocumentVersion
     * @example
     * // Get one DocumentVersion
     * const documentVersion = await prisma.documentVersion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DocumentVersionFindFirstArgs>(args?: SelectSubset<T, DocumentVersionFindFirstArgs<ExtArgs>>): Prisma__DocumentVersionClient<$Result.GetResult<Prisma.$DocumentVersionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DocumentVersion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentVersionFindFirstOrThrowArgs} args - Arguments to find a DocumentVersion
     * @example
     * // Get one DocumentVersion
     * const documentVersion = await prisma.documentVersion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DocumentVersionFindFirstOrThrowArgs>(args?: SelectSubset<T, DocumentVersionFindFirstOrThrowArgs<ExtArgs>>): Prisma__DocumentVersionClient<$Result.GetResult<Prisma.$DocumentVersionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DocumentVersions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentVersionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DocumentVersions
     * const documentVersions = await prisma.documentVersion.findMany()
     * 
     * // Get first 10 DocumentVersions
     * const documentVersions = await prisma.documentVersion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const documentVersionWithIdOnly = await prisma.documentVersion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DocumentVersionFindManyArgs>(args?: SelectSubset<T, DocumentVersionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentVersionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DocumentVersion.
     * @param {DocumentVersionCreateArgs} args - Arguments to create a DocumentVersion.
     * @example
     * // Create one DocumentVersion
     * const DocumentVersion = await prisma.documentVersion.create({
     *   data: {
     *     // ... data to create a DocumentVersion
     *   }
     * })
     * 
     */
    create<T extends DocumentVersionCreateArgs>(args: SelectSubset<T, DocumentVersionCreateArgs<ExtArgs>>): Prisma__DocumentVersionClient<$Result.GetResult<Prisma.$DocumentVersionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DocumentVersions.
     * @param {DocumentVersionCreateManyArgs} args - Arguments to create many DocumentVersions.
     * @example
     * // Create many DocumentVersions
     * const documentVersion = await prisma.documentVersion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DocumentVersionCreateManyArgs>(args?: SelectSubset<T, DocumentVersionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DocumentVersions and returns the data saved in the database.
     * @param {DocumentVersionCreateManyAndReturnArgs} args - Arguments to create many DocumentVersions.
     * @example
     * // Create many DocumentVersions
     * const documentVersion = await prisma.documentVersion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DocumentVersions and only return the `id`
     * const documentVersionWithIdOnly = await prisma.documentVersion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DocumentVersionCreateManyAndReturnArgs>(args?: SelectSubset<T, DocumentVersionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentVersionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DocumentVersion.
     * @param {DocumentVersionDeleteArgs} args - Arguments to delete one DocumentVersion.
     * @example
     * // Delete one DocumentVersion
     * const DocumentVersion = await prisma.documentVersion.delete({
     *   where: {
     *     // ... filter to delete one DocumentVersion
     *   }
     * })
     * 
     */
    delete<T extends DocumentVersionDeleteArgs>(args: SelectSubset<T, DocumentVersionDeleteArgs<ExtArgs>>): Prisma__DocumentVersionClient<$Result.GetResult<Prisma.$DocumentVersionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DocumentVersion.
     * @param {DocumentVersionUpdateArgs} args - Arguments to update one DocumentVersion.
     * @example
     * // Update one DocumentVersion
     * const documentVersion = await prisma.documentVersion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DocumentVersionUpdateArgs>(args: SelectSubset<T, DocumentVersionUpdateArgs<ExtArgs>>): Prisma__DocumentVersionClient<$Result.GetResult<Prisma.$DocumentVersionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DocumentVersions.
     * @param {DocumentVersionDeleteManyArgs} args - Arguments to filter DocumentVersions to delete.
     * @example
     * // Delete a few DocumentVersions
     * const { count } = await prisma.documentVersion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DocumentVersionDeleteManyArgs>(args?: SelectSubset<T, DocumentVersionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DocumentVersions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentVersionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DocumentVersions
     * const documentVersion = await prisma.documentVersion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DocumentVersionUpdateManyArgs>(args: SelectSubset<T, DocumentVersionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DocumentVersions and returns the data updated in the database.
     * @param {DocumentVersionUpdateManyAndReturnArgs} args - Arguments to update many DocumentVersions.
     * @example
     * // Update many DocumentVersions
     * const documentVersion = await prisma.documentVersion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DocumentVersions and only return the `id`
     * const documentVersionWithIdOnly = await prisma.documentVersion.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DocumentVersionUpdateManyAndReturnArgs>(args: SelectSubset<T, DocumentVersionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentVersionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DocumentVersion.
     * @param {DocumentVersionUpsertArgs} args - Arguments to update or create a DocumentVersion.
     * @example
     * // Update or create a DocumentVersion
     * const documentVersion = await prisma.documentVersion.upsert({
     *   create: {
     *     // ... data to create a DocumentVersion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DocumentVersion we want to update
     *   }
     * })
     */
    upsert<T extends DocumentVersionUpsertArgs>(args: SelectSubset<T, DocumentVersionUpsertArgs<ExtArgs>>): Prisma__DocumentVersionClient<$Result.GetResult<Prisma.$DocumentVersionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DocumentVersions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentVersionCountArgs} args - Arguments to filter DocumentVersions to count.
     * @example
     * // Count the number of DocumentVersions
     * const count = await prisma.documentVersion.count({
     *   where: {
     *     // ... the filter for the DocumentVersions we want to count
     *   }
     * })
    **/
    count<T extends DocumentVersionCountArgs>(
      args?: Subset<T, DocumentVersionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DocumentVersionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DocumentVersion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentVersionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DocumentVersionAggregateArgs>(args: Subset<T, DocumentVersionAggregateArgs>): Prisma.PrismaPromise<GetDocumentVersionAggregateType<T>>

    /**
     * Group by DocumentVersion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentVersionGroupByArgs} args - Group by arguments.
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
      T extends DocumentVersionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DocumentVersionGroupByArgs['orderBy'] }
        : { orderBy?: DocumentVersionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DocumentVersionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocumentVersionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DocumentVersion model
   */
  readonly fields: DocumentVersionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DocumentVersion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DocumentVersionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    document<T extends DocumentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DocumentDefaultArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the DocumentVersion model
   */
  interface DocumentVersionFieldRefs {
    readonly id: FieldRef<"DocumentVersion", 'String'>
    readonly documentId: FieldRef<"DocumentVersion", 'String'>
    readonly content: FieldRef<"DocumentVersion", 'String'>
    readonly versionNumber: FieldRef<"DocumentVersion", 'Int'>
    readonly changeDescription: FieldRef<"DocumentVersion", 'String'>
    readonly createdAt: FieldRef<"DocumentVersion", 'DateTime'>
    readonly createdBy: FieldRef<"DocumentVersion", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DocumentVersion findUnique
   */
  export type DocumentVersionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentVersion
     */
    select?: DocumentVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentVersion
     */
    omit?: DocumentVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentVersionInclude<ExtArgs> | null
    /**
     * Filter, which DocumentVersion to fetch.
     */
    where: DocumentVersionWhereUniqueInput
  }

  /**
   * DocumentVersion findUniqueOrThrow
   */
  export type DocumentVersionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentVersion
     */
    select?: DocumentVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentVersion
     */
    omit?: DocumentVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentVersionInclude<ExtArgs> | null
    /**
     * Filter, which DocumentVersion to fetch.
     */
    where: DocumentVersionWhereUniqueInput
  }

  /**
   * DocumentVersion findFirst
   */
  export type DocumentVersionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentVersion
     */
    select?: DocumentVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentVersion
     */
    omit?: DocumentVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentVersionInclude<ExtArgs> | null
    /**
     * Filter, which DocumentVersion to fetch.
     */
    where?: DocumentVersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentVersions to fetch.
     */
    orderBy?: DocumentVersionOrderByWithRelationInput | DocumentVersionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DocumentVersions.
     */
    cursor?: DocumentVersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentVersions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentVersions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DocumentVersions.
     */
    distinct?: DocumentVersionScalarFieldEnum | DocumentVersionScalarFieldEnum[]
  }

  /**
   * DocumentVersion findFirstOrThrow
   */
  export type DocumentVersionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentVersion
     */
    select?: DocumentVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentVersion
     */
    omit?: DocumentVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentVersionInclude<ExtArgs> | null
    /**
     * Filter, which DocumentVersion to fetch.
     */
    where?: DocumentVersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentVersions to fetch.
     */
    orderBy?: DocumentVersionOrderByWithRelationInput | DocumentVersionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DocumentVersions.
     */
    cursor?: DocumentVersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentVersions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentVersions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DocumentVersions.
     */
    distinct?: DocumentVersionScalarFieldEnum | DocumentVersionScalarFieldEnum[]
  }

  /**
   * DocumentVersion findMany
   */
  export type DocumentVersionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentVersion
     */
    select?: DocumentVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentVersion
     */
    omit?: DocumentVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentVersionInclude<ExtArgs> | null
    /**
     * Filter, which DocumentVersions to fetch.
     */
    where?: DocumentVersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentVersions to fetch.
     */
    orderBy?: DocumentVersionOrderByWithRelationInput | DocumentVersionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DocumentVersions.
     */
    cursor?: DocumentVersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentVersions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentVersions.
     */
    skip?: number
    distinct?: DocumentVersionScalarFieldEnum | DocumentVersionScalarFieldEnum[]
  }

  /**
   * DocumentVersion create
   */
  export type DocumentVersionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentVersion
     */
    select?: DocumentVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentVersion
     */
    omit?: DocumentVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentVersionInclude<ExtArgs> | null
    /**
     * The data needed to create a DocumentVersion.
     */
    data: XOR<DocumentVersionCreateInput, DocumentVersionUncheckedCreateInput>
  }

  /**
   * DocumentVersion createMany
   */
  export type DocumentVersionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DocumentVersions.
     */
    data: DocumentVersionCreateManyInput | DocumentVersionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DocumentVersion createManyAndReturn
   */
  export type DocumentVersionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentVersion
     */
    select?: DocumentVersionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentVersion
     */
    omit?: DocumentVersionOmit<ExtArgs> | null
    /**
     * The data used to create many DocumentVersions.
     */
    data: DocumentVersionCreateManyInput | DocumentVersionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentVersionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DocumentVersion update
   */
  export type DocumentVersionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentVersion
     */
    select?: DocumentVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentVersion
     */
    omit?: DocumentVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentVersionInclude<ExtArgs> | null
    /**
     * The data needed to update a DocumentVersion.
     */
    data: XOR<DocumentVersionUpdateInput, DocumentVersionUncheckedUpdateInput>
    /**
     * Choose, which DocumentVersion to update.
     */
    where: DocumentVersionWhereUniqueInput
  }

  /**
   * DocumentVersion updateMany
   */
  export type DocumentVersionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DocumentVersions.
     */
    data: XOR<DocumentVersionUpdateManyMutationInput, DocumentVersionUncheckedUpdateManyInput>
    /**
     * Filter which DocumentVersions to update
     */
    where?: DocumentVersionWhereInput
    /**
     * Limit how many DocumentVersions to update.
     */
    limit?: number
  }

  /**
   * DocumentVersion updateManyAndReturn
   */
  export type DocumentVersionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentVersion
     */
    select?: DocumentVersionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentVersion
     */
    omit?: DocumentVersionOmit<ExtArgs> | null
    /**
     * The data used to update DocumentVersions.
     */
    data: XOR<DocumentVersionUpdateManyMutationInput, DocumentVersionUncheckedUpdateManyInput>
    /**
     * Filter which DocumentVersions to update
     */
    where?: DocumentVersionWhereInput
    /**
     * Limit how many DocumentVersions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentVersionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DocumentVersion upsert
   */
  export type DocumentVersionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentVersion
     */
    select?: DocumentVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentVersion
     */
    omit?: DocumentVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentVersionInclude<ExtArgs> | null
    /**
     * The filter to search for the DocumentVersion to update in case it exists.
     */
    where: DocumentVersionWhereUniqueInput
    /**
     * In case the DocumentVersion found by the `where` argument doesn't exist, create a new DocumentVersion with this data.
     */
    create: XOR<DocumentVersionCreateInput, DocumentVersionUncheckedCreateInput>
    /**
     * In case the DocumentVersion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DocumentVersionUpdateInput, DocumentVersionUncheckedUpdateInput>
  }

  /**
   * DocumentVersion delete
   */
  export type DocumentVersionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentVersion
     */
    select?: DocumentVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentVersion
     */
    omit?: DocumentVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentVersionInclude<ExtArgs> | null
    /**
     * Filter which DocumentVersion to delete.
     */
    where: DocumentVersionWhereUniqueInput
  }

  /**
   * DocumentVersion deleteMany
   */
  export type DocumentVersionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DocumentVersions to delete
     */
    where?: DocumentVersionWhereInput
    /**
     * Limit how many DocumentVersions to delete.
     */
    limit?: number
  }

  /**
   * DocumentVersion without action
   */
  export type DocumentVersionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentVersion
     */
    select?: DocumentVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentVersion
     */
    omit?: DocumentVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentVersionInclude<ExtArgs> | null
  }


  /**
   * Model DocumentCollaborators
   */

  export type AggregateDocumentCollaborators = {
    _count: DocumentCollaboratorsCountAggregateOutputType | null
    _min: DocumentCollaboratorsMinAggregateOutputType | null
    _max: DocumentCollaboratorsMaxAggregateOutputType | null
  }

  export type DocumentCollaboratorsMinAggregateOutputType = {
    id: string | null
    documentId: string | null
    userId: string | null
    role: string | null
    invitedAt: Date | null
    acceptedAt: Date | null
  }

  export type DocumentCollaboratorsMaxAggregateOutputType = {
    id: string | null
    documentId: string | null
    userId: string | null
    role: string | null
    invitedAt: Date | null
    acceptedAt: Date | null
  }

  export type DocumentCollaboratorsCountAggregateOutputType = {
    id: number
    documentId: number
    userId: number
    role: number
    permissions: number
    invitedAt: number
    acceptedAt: number
    _all: number
  }


  export type DocumentCollaboratorsMinAggregateInputType = {
    id?: true
    documentId?: true
    userId?: true
    role?: true
    invitedAt?: true
    acceptedAt?: true
  }

  export type DocumentCollaboratorsMaxAggregateInputType = {
    id?: true
    documentId?: true
    userId?: true
    role?: true
    invitedAt?: true
    acceptedAt?: true
  }

  export type DocumentCollaboratorsCountAggregateInputType = {
    id?: true
    documentId?: true
    userId?: true
    role?: true
    permissions?: true
    invitedAt?: true
    acceptedAt?: true
    _all?: true
  }

  export type DocumentCollaboratorsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DocumentCollaborators to aggregate.
     */
    where?: DocumentCollaboratorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentCollaborators to fetch.
     */
    orderBy?: DocumentCollaboratorsOrderByWithRelationInput | DocumentCollaboratorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DocumentCollaboratorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentCollaborators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentCollaborators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DocumentCollaborators
    **/
    _count?: true | DocumentCollaboratorsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DocumentCollaboratorsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DocumentCollaboratorsMaxAggregateInputType
  }

  export type GetDocumentCollaboratorsAggregateType<T extends DocumentCollaboratorsAggregateArgs> = {
        [P in keyof T & keyof AggregateDocumentCollaborators]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocumentCollaborators[P]>
      : GetScalarType<T[P], AggregateDocumentCollaborators[P]>
  }




  export type DocumentCollaboratorsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentCollaboratorsWhereInput
    orderBy?: DocumentCollaboratorsOrderByWithAggregationInput | DocumentCollaboratorsOrderByWithAggregationInput[]
    by: DocumentCollaboratorsScalarFieldEnum[] | DocumentCollaboratorsScalarFieldEnum
    having?: DocumentCollaboratorsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DocumentCollaboratorsCountAggregateInputType | true
    _min?: DocumentCollaboratorsMinAggregateInputType
    _max?: DocumentCollaboratorsMaxAggregateInputType
  }

  export type DocumentCollaboratorsGroupByOutputType = {
    id: string
    documentId: string
    userId: string
    role: string
    permissions: string[]
    invitedAt: Date
    acceptedAt: Date | null
    _count: DocumentCollaboratorsCountAggregateOutputType | null
    _min: DocumentCollaboratorsMinAggregateOutputType | null
    _max: DocumentCollaboratorsMaxAggregateOutputType | null
  }

  type GetDocumentCollaboratorsGroupByPayload<T extends DocumentCollaboratorsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DocumentCollaboratorsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DocumentCollaboratorsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DocumentCollaboratorsGroupByOutputType[P]>
            : GetScalarType<T[P], DocumentCollaboratorsGroupByOutputType[P]>
        }
      >
    >


  export type DocumentCollaboratorsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    documentId?: boolean
    userId?: boolean
    role?: boolean
    permissions?: boolean
    invitedAt?: boolean
    acceptedAt?: boolean
    document?: boolean | DocumentDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["documentCollaborators"]>

  export type DocumentCollaboratorsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    documentId?: boolean
    userId?: boolean
    role?: boolean
    permissions?: boolean
    invitedAt?: boolean
    acceptedAt?: boolean
    document?: boolean | DocumentDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["documentCollaborators"]>

  export type DocumentCollaboratorsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    documentId?: boolean
    userId?: boolean
    role?: boolean
    permissions?: boolean
    invitedAt?: boolean
    acceptedAt?: boolean
    document?: boolean | DocumentDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["documentCollaborators"]>

  export type DocumentCollaboratorsSelectScalar = {
    id?: boolean
    documentId?: boolean
    userId?: boolean
    role?: boolean
    permissions?: boolean
    invitedAt?: boolean
    acceptedAt?: boolean
  }

  export type DocumentCollaboratorsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "documentId" | "userId" | "role" | "permissions" | "invitedAt" | "acceptedAt", ExtArgs["result"]["documentCollaborators"]>
  export type DocumentCollaboratorsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    document?: boolean | DocumentDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DocumentCollaboratorsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    document?: boolean | DocumentDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DocumentCollaboratorsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    document?: boolean | DocumentDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DocumentCollaboratorsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DocumentCollaborators"
    objects: {
      document: Prisma.$DocumentPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      documentId: string
      userId: string
      role: string
      permissions: string[]
      invitedAt: Date
      acceptedAt: Date | null
    }, ExtArgs["result"]["documentCollaborators"]>
    composites: {}
  }

  type DocumentCollaboratorsGetPayload<S extends boolean | null | undefined | DocumentCollaboratorsDefaultArgs> = $Result.GetResult<Prisma.$DocumentCollaboratorsPayload, S>

  type DocumentCollaboratorsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DocumentCollaboratorsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DocumentCollaboratorsCountAggregateInputType | true
    }

  export interface DocumentCollaboratorsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DocumentCollaborators'], meta: { name: 'DocumentCollaborators' } }
    /**
     * Find zero or one DocumentCollaborators that matches the filter.
     * @param {DocumentCollaboratorsFindUniqueArgs} args - Arguments to find a DocumentCollaborators
     * @example
     * // Get one DocumentCollaborators
     * const documentCollaborators = await prisma.documentCollaborators.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DocumentCollaboratorsFindUniqueArgs>(args: SelectSubset<T, DocumentCollaboratorsFindUniqueArgs<ExtArgs>>): Prisma__DocumentCollaboratorsClient<$Result.GetResult<Prisma.$DocumentCollaboratorsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DocumentCollaborators that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DocumentCollaboratorsFindUniqueOrThrowArgs} args - Arguments to find a DocumentCollaborators
     * @example
     * // Get one DocumentCollaborators
     * const documentCollaborators = await prisma.documentCollaborators.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DocumentCollaboratorsFindUniqueOrThrowArgs>(args: SelectSubset<T, DocumentCollaboratorsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DocumentCollaboratorsClient<$Result.GetResult<Prisma.$DocumentCollaboratorsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DocumentCollaborators that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentCollaboratorsFindFirstArgs} args - Arguments to find a DocumentCollaborators
     * @example
     * // Get one DocumentCollaborators
     * const documentCollaborators = await prisma.documentCollaborators.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DocumentCollaboratorsFindFirstArgs>(args?: SelectSubset<T, DocumentCollaboratorsFindFirstArgs<ExtArgs>>): Prisma__DocumentCollaboratorsClient<$Result.GetResult<Prisma.$DocumentCollaboratorsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DocumentCollaborators that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentCollaboratorsFindFirstOrThrowArgs} args - Arguments to find a DocumentCollaborators
     * @example
     * // Get one DocumentCollaborators
     * const documentCollaborators = await prisma.documentCollaborators.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DocumentCollaboratorsFindFirstOrThrowArgs>(args?: SelectSubset<T, DocumentCollaboratorsFindFirstOrThrowArgs<ExtArgs>>): Prisma__DocumentCollaboratorsClient<$Result.GetResult<Prisma.$DocumentCollaboratorsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DocumentCollaborators that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentCollaboratorsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DocumentCollaborators
     * const documentCollaborators = await prisma.documentCollaborators.findMany()
     * 
     * // Get first 10 DocumentCollaborators
     * const documentCollaborators = await prisma.documentCollaborators.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const documentCollaboratorsWithIdOnly = await prisma.documentCollaborators.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DocumentCollaboratorsFindManyArgs>(args?: SelectSubset<T, DocumentCollaboratorsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentCollaboratorsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DocumentCollaborators.
     * @param {DocumentCollaboratorsCreateArgs} args - Arguments to create a DocumentCollaborators.
     * @example
     * // Create one DocumentCollaborators
     * const DocumentCollaborators = await prisma.documentCollaborators.create({
     *   data: {
     *     // ... data to create a DocumentCollaborators
     *   }
     * })
     * 
     */
    create<T extends DocumentCollaboratorsCreateArgs>(args: SelectSubset<T, DocumentCollaboratorsCreateArgs<ExtArgs>>): Prisma__DocumentCollaboratorsClient<$Result.GetResult<Prisma.$DocumentCollaboratorsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DocumentCollaborators.
     * @param {DocumentCollaboratorsCreateManyArgs} args - Arguments to create many DocumentCollaborators.
     * @example
     * // Create many DocumentCollaborators
     * const documentCollaborators = await prisma.documentCollaborators.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DocumentCollaboratorsCreateManyArgs>(args?: SelectSubset<T, DocumentCollaboratorsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DocumentCollaborators and returns the data saved in the database.
     * @param {DocumentCollaboratorsCreateManyAndReturnArgs} args - Arguments to create many DocumentCollaborators.
     * @example
     * // Create many DocumentCollaborators
     * const documentCollaborators = await prisma.documentCollaborators.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DocumentCollaborators and only return the `id`
     * const documentCollaboratorsWithIdOnly = await prisma.documentCollaborators.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DocumentCollaboratorsCreateManyAndReturnArgs>(args?: SelectSubset<T, DocumentCollaboratorsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentCollaboratorsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DocumentCollaborators.
     * @param {DocumentCollaboratorsDeleteArgs} args - Arguments to delete one DocumentCollaborators.
     * @example
     * // Delete one DocumentCollaborators
     * const DocumentCollaborators = await prisma.documentCollaborators.delete({
     *   where: {
     *     // ... filter to delete one DocumentCollaborators
     *   }
     * })
     * 
     */
    delete<T extends DocumentCollaboratorsDeleteArgs>(args: SelectSubset<T, DocumentCollaboratorsDeleteArgs<ExtArgs>>): Prisma__DocumentCollaboratorsClient<$Result.GetResult<Prisma.$DocumentCollaboratorsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DocumentCollaborators.
     * @param {DocumentCollaboratorsUpdateArgs} args - Arguments to update one DocumentCollaborators.
     * @example
     * // Update one DocumentCollaborators
     * const documentCollaborators = await prisma.documentCollaborators.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DocumentCollaboratorsUpdateArgs>(args: SelectSubset<T, DocumentCollaboratorsUpdateArgs<ExtArgs>>): Prisma__DocumentCollaboratorsClient<$Result.GetResult<Prisma.$DocumentCollaboratorsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DocumentCollaborators.
     * @param {DocumentCollaboratorsDeleteManyArgs} args - Arguments to filter DocumentCollaborators to delete.
     * @example
     * // Delete a few DocumentCollaborators
     * const { count } = await prisma.documentCollaborators.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DocumentCollaboratorsDeleteManyArgs>(args?: SelectSubset<T, DocumentCollaboratorsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DocumentCollaborators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentCollaboratorsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DocumentCollaborators
     * const documentCollaborators = await prisma.documentCollaborators.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DocumentCollaboratorsUpdateManyArgs>(args: SelectSubset<T, DocumentCollaboratorsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DocumentCollaborators and returns the data updated in the database.
     * @param {DocumentCollaboratorsUpdateManyAndReturnArgs} args - Arguments to update many DocumentCollaborators.
     * @example
     * // Update many DocumentCollaborators
     * const documentCollaborators = await prisma.documentCollaborators.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DocumentCollaborators and only return the `id`
     * const documentCollaboratorsWithIdOnly = await prisma.documentCollaborators.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DocumentCollaboratorsUpdateManyAndReturnArgs>(args: SelectSubset<T, DocumentCollaboratorsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentCollaboratorsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DocumentCollaborators.
     * @param {DocumentCollaboratorsUpsertArgs} args - Arguments to update or create a DocumentCollaborators.
     * @example
     * // Update or create a DocumentCollaborators
     * const documentCollaborators = await prisma.documentCollaborators.upsert({
     *   create: {
     *     // ... data to create a DocumentCollaborators
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DocumentCollaborators we want to update
     *   }
     * })
     */
    upsert<T extends DocumentCollaboratorsUpsertArgs>(args: SelectSubset<T, DocumentCollaboratorsUpsertArgs<ExtArgs>>): Prisma__DocumentCollaboratorsClient<$Result.GetResult<Prisma.$DocumentCollaboratorsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DocumentCollaborators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentCollaboratorsCountArgs} args - Arguments to filter DocumentCollaborators to count.
     * @example
     * // Count the number of DocumentCollaborators
     * const count = await prisma.documentCollaborators.count({
     *   where: {
     *     // ... the filter for the DocumentCollaborators we want to count
     *   }
     * })
    **/
    count<T extends DocumentCollaboratorsCountArgs>(
      args?: Subset<T, DocumentCollaboratorsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DocumentCollaboratorsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DocumentCollaborators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentCollaboratorsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DocumentCollaboratorsAggregateArgs>(args: Subset<T, DocumentCollaboratorsAggregateArgs>): Prisma.PrismaPromise<GetDocumentCollaboratorsAggregateType<T>>

    /**
     * Group by DocumentCollaborators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentCollaboratorsGroupByArgs} args - Group by arguments.
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
      T extends DocumentCollaboratorsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DocumentCollaboratorsGroupByArgs['orderBy'] }
        : { orderBy?: DocumentCollaboratorsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DocumentCollaboratorsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocumentCollaboratorsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DocumentCollaborators model
   */
  readonly fields: DocumentCollaboratorsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DocumentCollaborators.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DocumentCollaboratorsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    document<T extends DocumentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DocumentDefaultArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the DocumentCollaborators model
   */
  interface DocumentCollaboratorsFieldRefs {
    readonly id: FieldRef<"DocumentCollaborators", 'String'>
    readonly documentId: FieldRef<"DocumentCollaborators", 'String'>
    readonly userId: FieldRef<"DocumentCollaborators", 'String'>
    readonly role: FieldRef<"DocumentCollaborators", 'String'>
    readonly permissions: FieldRef<"DocumentCollaborators", 'String[]'>
    readonly invitedAt: FieldRef<"DocumentCollaborators", 'DateTime'>
    readonly acceptedAt: FieldRef<"DocumentCollaborators", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DocumentCollaborators findUnique
   */
  export type DocumentCollaboratorsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentCollaborators
     */
    select?: DocumentCollaboratorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentCollaborators
     */
    omit?: DocumentCollaboratorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentCollaboratorsInclude<ExtArgs> | null
    /**
     * Filter, which DocumentCollaborators to fetch.
     */
    where: DocumentCollaboratorsWhereUniqueInput
  }

  /**
   * DocumentCollaborators findUniqueOrThrow
   */
  export type DocumentCollaboratorsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentCollaborators
     */
    select?: DocumentCollaboratorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentCollaborators
     */
    omit?: DocumentCollaboratorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentCollaboratorsInclude<ExtArgs> | null
    /**
     * Filter, which DocumentCollaborators to fetch.
     */
    where: DocumentCollaboratorsWhereUniqueInput
  }

  /**
   * DocumentCollaborators findFirst
   */
  export type DocumentCollaboratorsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentCollaborators
     */
    select?: DocumentCollaboratorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentCollaborators
     */
    omit?: DocumentCollaboratorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentCollaboratorsInclude<ExtArgs> | null
    /**
     * Filter, which DocumentCollaborators to fetch.
     */
    where?: DocumentCollaboratorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentCollaborators to fetch.
     */
    orderBy?: DocumentCollaboratorsOrderByWithRelationInput | DocumentCollaboratorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DocumentCollaborators.
     */
    cursor?: DocumentCollaboratorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentCollaborators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentCollaborators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DocumentCollaborators.
     */
    distinct?: DocumentCollaboratorsScalarFieldEnum | DocumentCollaboratorsScalarFieldEnum[]
  }

  /**
   * DocumentCollaborators findFirstOrThrow
   */
  export type DocumentCollaboratorsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentCollaborators
     */
    select?: DocumentCollaboratorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentCollaborators
     */
    omit?: DocumentCollaboratorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentCollaboratorsInclude<ExtArgs> | null
    /**
     * Filter, which DocumentCollaborators to fetch.
     */
    where?: DocumentCollaboratorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentCollaborators to fetch.
     */
    orderBy?: DocumentCollaboratorsOrderByWithRelationInput | DocumentCollaboratorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DocumentCollaborators.
     */
    cursor?: DocumentCollaboratorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentCollaborators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentCollaborators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DocumentCollaborators.
     */
    distinct?: DocumentCollaboratorsScalarFieldEnum | DocumentCollaboratorsScalarFieldEnum[]
  }

  /**
   * DocumentCollaborators findMany
   */
  export type DocumentCollaboratorsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentCollaborators
     */
    select?: DocumentCollaboratorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentCollaborators
     */
    omit?: DocumentCollaboratorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentCollaboratorsInclude<ExtArgs> | null
    /**
     * Filter, which DocumentCollaborators to fetch.
     */
    where?: DocumentCollaboratorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentCollaborators to fetch.
     */
    orderBy?: DocumentCollaboratorsOrderByWithRelationInput | DocumentCollaboratorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DocumentCollaborators.
     */
    cursor?: DocumentCollaboratorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentCollaborators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentCollaborators.
     */
    skip?: number
    distinct?: DocumentCollaboratorsScalarFieldEnum | DocumentCollaboratorsScalarFieldEnum[]
  }

  /**
   * DocumentCollaborators create
   */
  export type DocumentCollaboratorsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentCollaborators
     */
    select?: DocumentCollaboratorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentCollaborators
     */
    omit?: DocumentCollaboratorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentCollaboratorsInclude<ExtArgs> | null
    /**
     * The data needed to create a DocumentCollaborators.
     */
    data: XOR<DocumentCollaboratorsCreateInput, DocumentCollaboratorsUncheckedCreateInput>
  }

  /**
   * DocumentCollaborators createMany
   */
  export type DocumentCollaboratorsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DocumentCollaborators.
     */
    data: DocumentCollaboratorsCreateManyInput | DocumentCollaboratorsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DocumentCollaborators createManyAndReturn
   */
  export type DocumentCollaboratorsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentCollaborators
     */
    select?: DocumentCollaboratorsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentCollaborators
     */
    omit?: DocumentCollaboratorsOmit<ExtArgs> | null
    /**
     * The data used to create many DocumentCollaborators.
     */
    data: DocumentCollaboratorsCreateManyInput | DocumentCollaboratorsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentCollaboratorsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DocumentCollaborators update
   */
  export type DocumentCollaboratorsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentCollaborators
     */
    select?: DocumentCollaboratorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentCollaborators
     */
    omit?: DocumentCollaboratorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentCollaboratorsInclude<ExtArgs> | null
    /**
     * The data needed to update a DocumentCollaborators.
     */
    data: XOR<DocumentCollaboratorsUpdateInput, DocumentCollaboratorsUncheckedUpdateInput>
    /**
     * Choose, which DocumentCollaborators to update.
     */
    where: DocumentCollaboratorsWhereUniqueInput
  }

  /**
   * DocumentCollaborators updateMany
   */
  export type DocumentCollaboratorsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DocumentCollaborators.
     */
    data: XOR<DocumentCollaboratorsUpdateManyMutationInput, DocumentCollaboratorsUncheckedUpdateManyInput>
    /**
     * Filter which DocumentCollaborators to update
     */
    where?: DocumentCollaboratorsWhereInput
    /**
     * Limit how many DocumentCollaborators to update.
     */
    limit?: number
  }

  /**
   * DocumentCollaborators updateManyAndReturn
   */
  export type DocumentCollaboratorsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentCollaborators
     */
    select?: DocumentCollaboratorsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentCollaborators
     */
    omit?: DocumentCollaboratorsOmit<ExtArgs> | null
    /**
     * The data used to update DocumentCollaborators.
     */
    data: XOR<DocumentCollaboratorsUpdateManyMutationInput, DocumentCollaboratorsUncheckedUpdateManyInput>
    /**
     * Filter which DocumentCollaborators to update
     */
    where?: DocumentCollaboratorsWhereInput
    /**
     * Limit how many DocumentCollaborators to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentCollaboratorsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DocumentCollaborators upsert
   */
  export type DocumentCollaboratorsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentCollaborators
     */
    select?: DocumentCollaboratorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentCollaborators
     */
    omit?: DocumentCollaboratorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentCollaboratorsInclude<ExtArgs> | null
    /**
     * The filter to search for the DocumentCollaborators to update in case it exists.
     */
    where: DocumentCollaboratorsWhereUniqueInput
    /**
     * In case the DocumentCollaborators found by the `where` argument doesn't exist, create a new DocumentCollaborators with this data.
     */
    create: XOR<DocumentCollaboratorsCreateInput, DocumentCollaboratorsUncheckedCreateInput>
    /**
     * In case the DocumentCollaborators was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DocumentCollaboratorsUpdateInput, DocumentCollaboratorsUncheckedUpdateInput>
  }

  /**
   * DocumentCollaborators delete
   */
  export type DocumentCollaboratorsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentCollaborators
     */
    select?: DocumentCollaboratorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentCollaborators
     */
    omit?: DocumentCollaboratorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentCollaboratorsInclude<ExtArgs> | null
    /**
     * Filter which DocumentCollaborators to delete.
     */
    where: DocumentCollaboratorsWhereUniqueInput
  }

  /**
   * DocumentCollaborators deleteMany
   */
  export type DocumentCollaboratorsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DocumentCollaborators to delete
     */
    where?: DocumentCollaboratorsWhereInput
    /**
     * Limit how many DocumentCollaborators to delete.
     */
    limit?: number
  }

  /**
   * DocumentCollaborators without action
   */
  export type DocumentCollaboratorsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentCollaborators
     */
    select?: DocumentCollaboratorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentCollaborators
     */
    omit?: DocumentCollaboratorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentCollaboratorsInclude<ExtArgs> | null
  }


  /**
   * Model DocumentComment
   */

  export type AggregateDocumentComment = {
    _count: DocumentCommentCountAggregateOutputType | null
    _avg: DocumentCommentAvgAggregateOutputType | null
    _sum: DocumentCommentSumAggregateOutputType | null
    _min: DocumentCommentMinAggregateOutputType | null
    _max: DocumentCommentMaxAggregateOutputType | null
  }

  export type DocumentCommentAvgAggregateOutputType = {
    lineNumber: number | null
  }

  export type DocumentCommentSumAggregateOutputType = {
    lineNumber: number | null
  }

  export type DocumentCommentMinAggregateOutputType = {
    id: string | null
    documentId: string | null
    userId: string | null
    content: string | null
    lineNumber: number | null
    isResolved: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DocumentCommentMaxAggregateOutputType = {
    id: string | null
    documentId: string | null
    userId: string | null
    content: string | null
    lineNumber: number | null
    isResolved: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DocumentCommentCountAggregateOutputType = {
    id: number
    documentId: number
    userId: number
    content: number
    lineNumber: number
    isResolved: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DocumentCommentAvgAggregateInputType = {
    lineNumber?: true
  }

  export type DocumentCommentSumAggregateInputType = {
    lineNumber?: true
  }

  export type DocumentCommentMinAggregateInputType = {
    id?: true
    documentId?: true
    userId?: true
    content?: true
    lineNumber?: true
    isResolved?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DocumentCommentMaxAggregateInputType = {
    id?: true
    documentId?: true
    userId?: true
    content?: true
    lineNumber?: true
    isResolved?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DocumentCommentCountAggregateInputType = {
    id?: true
    documentId?: true
    userId?: true
    content?: true
    lineNumber?: true
    isResolved?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DocumentCommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DocumentComment to aggregate.
     */
    where?: DocumentCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentComments to fetch.
     */
    orderBy?: DocumentCommentOrderByWithRelationInput | DocumentCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DocumentCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DocumentComments
    **/
    _count?: true | DocumentCommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DocumentCommentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DocumentCommentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DocumentCommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DocumentCommentMaxAggregateInputType
  }

  export type GetDocumentCommentAggregateType<T extends DocumentCommentAggregateArgs> = {
        [P in keyof T & keyof AggregateDocumentComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocumentComment[P]>
      : GetScalarType<T[P], AggregateDocumentComment[P]>
  }




  export type DocumentCommentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentCommentWhereInput
    orderBy?: DocumentCommentOrderByWithAggregationInput | DocumentCommentOrderByWithAggregationInput[]
    by: DocumentCommentScalarFieldEnum[] | DocumentCommentScalarFieldEnum
    having?: DocumentCommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DocumentCommentCountAggregateInputType | true
    _avg?: DocumentCommentAvgAggregateInputType
    _sum?: DocumentCommentSumAggregateInputType
    _min?: DocumentCommentMinAggregateInputType
    _max?: DocumentCommentMaxAggregateInputType
  }

  export type DocumentCommentGroupByOutputType = {
    id: string
    documentId: string
    userId: string
    content: string
    lineNumber: number | null
    isResolved: boolean
    createdAt: Date
    updatedAt: Date
    _count: DocumentCommentCountAggregateOutputType | null
    _avg: DocumentCommentAvgAggregateOutputType | null
    _sum: DocumentCommentSumAggregateOutputType | null
    _min: DocumentCommentMinAggregateOutputType | null
    _max: DocumentCommentMaxAggregateOutputType | null
  }

  type GetDocumentCommentGroupByPayload<T extends DocumentCommentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DocumentCommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DocumentCommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DocumentCommentGroupByOutputType[P]>
            : GetScalarType<T[P], DocumentCommentGroupByOutputType[P]>
        }
      >
    >


  export type DocumentCommentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    documentId?: boolean
    userId?: boolean
    content?: boolean
    lineNumber?: boolean
    isResolved?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    document?: boolean | DocumentDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["documentComment"]>

  export type DocumentCommentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    documentId?: boolean
    userId?: boolean
    content?: boolean
    lineNumber?: boolean
    isResolved?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    document?: boolean | DocumentDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["documentComment"]>

  export type DocumentCommentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    documentId?: boolean
    userId?: boolean
    content?: boolean
    lineNumber?: boolean
    isResolved?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    document?: boolean | DocumentDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["documentComment"]>

  export type DocumentCommentSelectScalar = {
    id?: boolean
    documentId?: boolean
    userId?: boolean
    content?: boolean
    lineNumber?: boolean
    isResolved?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DocumentCommentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "documentId" | "userId" | "content" | "lineNumber" | "isResolved" | "createdAt" | "updatedAt", ExtArgs["result"]["documentComment"]>
  export type DocumentCommentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    document?: boolean | DocumentDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DocumentCommentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    document?: boolean | DocumentDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DocumentCommentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    document?: boolean | DocumentDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DocumentCommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DocumentComment"
    objects: {
      document: Prisma.$DocumentPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      documentId: string
      userId: string
      content: string
      lineNumber: number | null
      isResolved: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["documentComment"]>
    composites: {}
  }

  type DocumentCommentGetPayload<S extends boolean | null | undefined | DocumentCommentDefaultArgs> = $Result.GetResult<Prisma.$DocumentCommentPayload, S>

  type DocumentCommentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DocumentCommentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DocumentCommentCountAggregateInputType | true
    }

  export interface DocumentCommentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DocumentComment'], meta: { name: 'DocumentComment' } }
    /**
     * Find zero or one DocumentComment that matches the filter.
     * @param {DocumentCommentFindUniqueArgs} args - Arguments to find a DocumentComment
     * @example
     * // Get one DocumentComment
     * const documentComment = await prisma.documentComment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DocumentCommentFindUniqueArgs>(args: SelectSubset<T, DocumentCommentFindUniqueArgs<ExtArgs>>): Prisma__DocumentCommentClient<$Result.GetResult<Prisma.$DocumentCommentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DocumentComment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DocumentCommentFindUniqueOrThrowArgs} args - Arguments to find a DocumentComment
     * @example
     * // Get one DocumentComment
     * const documentComment = await prisma.documentComment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DocumentCommentFindUniqueOrThrowArgs>(args: SelectSubset<T, DocumentCommentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DocumentCommentClient<$Result.GetResult<Prisma.$DocumentCommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DocumentComment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentCommentFindFirstArgs} args - Arguments to find a DocumentComment
     * @example
     * // Get one DocumentComment
     * const documentComment = await prisma.documentComment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DocumentCommentFindFirstArgs>(args?: SelectSubset<T, DocumentCommentFindFirstArgs<ExtArgs>>): Prisma__DocumentCommentClient<$Result.GetResult<Prisma.$DocumentCommentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DocumentComment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentCommentFindFirstOrThrowArgs} args - Arguments to find a DocumentComment
     * @example
     * // Get one DocumentComment
     * const documentComment = await prisma.documentComment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DocumentCommentFindFirstOrThrowArgs>(args?: SelectSubset<T, DocumentCommentFindFirstOrThrowArgs<ExtArgs>>): Prisma__DocumentCommentClient<$Result.GetResult<Prisma.$DocumentCommentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DocumentComments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentCommentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DocumentComments
     * const documentComments = await prisma.documentComment.findMany()
     * 
     * // Get first 10 DocumentComments
     * const documentComments = await prisma.documentComment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const documentCommentWithIdOnly = await prisma.documentComment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DocumentCommentFindManyArgs>(args?: SelectSubset<T, DocumentCommentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentCommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DocumentComment.
     * @param {DocumentCommentCreateArgs} args - Arguments to create a DocumentComment.
     * @example
     * // Create one DocumentComment
     * const DocumentComment = await prisma.documentComment.create({
     *   data: {
     *     // ... data to create a DocumentComment
     *   }
     * })
     * 
     */
    create<T extends DocumentCommentCreateArgs>(args: SelectSubset<T, DocumentCommentCreateArgs<ExtArgs>>): Prisma__DocumentCommentClient<$Result.GetResult<Prisma.$DocumentCommentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DocumentComments.
     * @param {DocumentCommentCreateManyArgs} args - Arguments to create many DocumentComments.
     * @example
     * // Create many DocumentComments
     * const documentComment = await prisma.documentComment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DocumentCommentCreateManyArgs>(args?: SelectSubset<T, DocumentCommentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DocumentComments and returns the data saved in the database.
     * @param {DocumentCommentCreateManyAndReturnArgs} args - Arguments to create many DocumentComments.
     * @example
     * // Create many DocumentComments
     * const documentComment = await prisma.documentComment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DocumentComments and only return the `id`
     * const documentCommentWithIdOnly = await prisma.documentComment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DocumentCommentCreateManyAndReturnArgs>(args?: SelectSubset<T, DocumentCommentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentCommentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DocumentComment.
     * @param {DocumentCommentDeleteArgs} args - Arguments to delete one DocumentComment.
     * @example
     * // Delete one DocumentComment
     * const DocumentComment = await prisma.documentComment.delete({
     *   where: {
     *     // ... filter to delete one DocumentComment
     *   }
     * })
     * 
     */
    delete<T extends DocumentCommentDeleteArgs>(args: SelectSubset<T, DocumentCommentDeleteArgs<ExtArgs>>): Prisma__DocumentCommentClient<$Result.GetResult<Prisma.$DocumentCommentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DocumentComment.
     * @param {DocumentCommentUpdateArgs} args - Arguments to update one DocumentComment.
     * @example
     * // Update one DocumentComment
     * const documentComment = await prisma.documentComment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DocumentCommentUpdateArgs>(args: SelectSubset<T, DocumentCommentUpdateArgs<ExtArgs>>): Prisma__DocumentCommentClient<$Result.GetResult<Prisma.$DocumentCommentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DocumentComments.
     * @param {DocumentCommentDeleteManyArgs} args - Arguments to filter DocumentComments to delete.
     * @example
     * // Delete a few DocumentComments
     * const { count } = await prisma.documentComment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DocumentCommentDeleteManyArgs>(args?: SelectSubset<T, DocumentCommentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DocumentComments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentCommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DocumentComments
     * const documentComment = await prisma.documentComment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DocumentCommentUpdateManyArgs>(args: SelectSubset<T, DocumentCommentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DocumentComments and returns the data updated in the database.
     * @param {DocumentCommentUpdateManyAndReturnArgs} args - Arguments to update many DocumentComments.
     * @example
     * // Update many DocumentComments
     * const documentComment = await prisma.documentComment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DocumentComments and only return the `id`
     * const documentCommentWithIdOnly = await prisma.documentComment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DocumentCommentUpdateManyAndReturnArgs>(args: SelectSubset<T, DocumentCommentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentCommentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DocumentComment.
     * @param {DocumentCommentUpsertArgs} args - Arguments to update or create a DocumentComment.
     * @example
     * // Update or create a DocumentComment
     * const documentComment = await prisma.documentComment.upsert({
     *   create: {
     *     // ... data to create a DocumentComment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DocumentComment we want to update
     *   }
     * })
     */
    upsert<T extends DocumentCommentUpsertArgs>(args: SelectSubset<T, DocumentCommentUpsertArgs<ExtArgs>>): Prisma__DocumentCommentClient<$Result.GetResult<Prisma.$DocumentCommentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DocumentComments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentCommentCountArgs} args - Arguments to filter DocumentComments to count.
     * @example
     * // Count the number of DocumentComments
     * const count = await prisma.documentComment.count({
     *   where: {
     *     // ... the filter for the DocumentComments we want to count
     *   }
     * })
    **/
    count<T extends DocumentCommentCountArgs>(
      args?: Subset<T, DocumentCommentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DocumentCommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DocumentComment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentCommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DocumentCommentAggregateArgs>(args: Subset<T, DocumentCommentAggregateArgs>): Prisma.PrismaPromise<GetDocumentCommentAggregateType<T>>

    /**
     * Group by DocumentComment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentCommentGroupByArgs} args - Group by arguments.
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
      T extends DocumentCommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DocumentCommentGroupByArgs['orderBy'] }
        : { orderBy?: DocumentCommentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DocumentCommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocumentCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DocumentComment model
   */
  readonly fields: DocumentCommentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DocumentComment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DocumentCommentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    document<T extends DocumentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DocumentDefaultArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the DocumentComment model
   */
  interface DocumentCommentFieldRefs {
    readonly id: FieldRef<"DocumentComment", 'String'>
    readonly documentId: FieldRef<"DocumentComment", 'String'>
    readonly userId: FieldRef<"DocumentComment", 'String'>
    readonly content: FieldRef<"DocumentComment", 'String'>
    readonly lineNumber: FieldRef<"DocumentComment", 'Int'>
    readonly isResolved: FieldRef<"DocumentComment", 'Boolean'>
    readonly createdAt: FieldRef<"DocumentComment", 'DateTime'>
    readonly updatedAt: FieldRef<"DocumentComment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DocumentComment findUnique
   */
  export type DocumentCommentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentComment
     */
    select?: DocumentCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentComment
     */
    omit?: DocumentCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentCommentInclude<ExtArgs> | null
    /**
     * Filter, which DocumentComment to fetch.
     */
    where: DocumentCommentWhereUniqueInput
  }

  /**
   * DocumentComment findUniqueOrThrow
   */
  export type DocumentCommentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentComment
     */
    select?: DocumentCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentComment
     */
    omit?: DocumentCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentCommentInclude<ExtArgs> | null
    /**
     * Filter, which DocumentComment to fetch.
     */
    where: DocumentCommentWhereUniqueInput
  }

  /**
   * DocumentComment findFirst
   */
  export type DocumentCommentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentComment
     */
    select?: DocumentCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentComment
     */
    omit?: DocumentCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentCommentInclude<ExtArgs> | null
    /**
     * Filter, which DocumentComment to fetch.
     */
    where?: DocumentCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentComments to fetch.
     */
    orderBy?: DocumentCommentOrderByWithRelationInput | DocumentCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DocumentComments.
     */
    cursor?: DocumentCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DocumentComments.
     */
    distinct?: DocumentCommentScalarFieldEnum | DocumentCommentScalarFieldEnum[]
  }

  /**
   * DocumentComment findFirstOrThrow
   */
  export type DocumentCommentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentComment
     */
    select?: DocumentCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentComment
     */
    omit?: DocumentCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentCommentInclude<ExtArgs> | null
    /**
     * Filter, which DocumentComment to fetch.
     */
    where?: DocumentCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentComments to fetch.
     */
    orderBy?: DocumentCommentOrderByWithRelationInput | DocumentCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DocumentComments.
     */
    cursor?: DocumentCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DocumentComments.
     */
    distinct?: DocumentCommentScalarFieldEnum | DocumentCommentScalarFieldEnum[]
  }

  /**
   * DocumentComment findMany
   */
  export type DocumentCommentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentComment
     */
    select?: DocumentCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentComment
     */
    omit?: DocumentCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentCommentInclude<ExtArgs> | null
    /**
     * Filter, which DocumentComments to fetch.
     */
    where?: DocumentCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentComments to fetch.
     */
    orderBy?: DocumentCommentOrderByWithRelationInput | DocumentCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DocumentComments.
     */
    cursor?: DocumentCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentComments.
     */
    skip?: number
    distinct?: DocumentCommentScalarFieldEnum | DocumentCommentScalarFieldEnum[]
  }

  /**
   * DocumentComment create
   */
  export type DocumentCommentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentComment
     */
    select?: DocumentCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentComment
     */
    omit?: DocumentCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentCommentInclude<ExtArgs> | null
    /**
     * The data needed to create a DocumentComment.
     */
    data: XOR<DocumentCommentCreateInput, DocumentCommentUncheckedCreateInput>
  }

  /**
   * DocumentComment createMany
   */
  export type DocumentCommentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DocumentComments.
     */
    data: DocumentCommentCreateManyInput | DocumentCommentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DocumentComment createManyAndReturn
   */
  export type DocumentCommentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentComment
     */
    select?: DocumentCommentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentComment
     */
    omit?: DocumentCommentOmit<ExtArgs> | null
    /**
     * The data used to create many DocumentComments.
     */
    data: DocumentCommentCreateManyInput | DocumentCommentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentCommentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DocumentComment update
   */
  export type DocumentCommentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentComment
     */
    select?: DocumentCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentComment
     */
    omit?: DocumentCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentCommentInclude<ExtArgs> | null
    /**
     * The data needed to update a DocumentComment.
     */
    data: XOR<DocumentCommentUpdateInput, DocumentCommentUncheckedUpdateInput>
    /**
     * Choose, which DocumentComment to update.
     */
    where: DocumentCommentWhereUniqueInput
  }

  /**
   * DocumentComment updateMany
   */
  export type DocumentCommentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DocumentComments.
     */
    data: XOR<DocumentCommentUpdateManyMutationInput, DocumentCommentUncheckedUpdateManyInput>
    /**
     * Filter which DocumentComments to update
     */
    where?: DocumentCommentWhereInput
    /**
     * Limit how many DocumentComments to update.
     */
    limit?: number
  }

  /**
   * DocumentComment updateManyAndReturn
   */
  export type DocumentCommentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentComment
     */
    select?: DocumentCommentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentComment
     */
    omit?: DocumentCommentOmit<ExtArgs> | null
    /**
     * The data used to update DocumentComments.
     */
    data: XOR<DocumentCommentUpdateManyMutationInput, DocumentCommentUncheckedUpdateManyInput>
    /**
     * Filter which DocumentComments to update
     */
    where?: DocumentCommentWhereInput
    /**
     * Limit how many DocumentComments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentCommentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DocumentComment upsert
   */
  export type DocumentCommentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentComment
     */
    select?: DocumentCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentComment
     */
    omit?: DocumentCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentCommentInclude<ExtArgs> | null
    /**
     * The filter to search for the DocumentComment to update in case it exists.
     */
    where: DocumentCommentWhereUniqueInput
    /**
     * In case the DocumentComment found by the `where` argument doesn't exist, create a new DocumentComment with this data.
     */
    create: XOR<DocumentCommentCreateInput, DocumentCommentUncheckedCreateInput>
    /**
     * In case the DocumentComment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DocumentCommentUpdateInput, DocumentCommentUncheckedUpdateInput>
  }

  /**
   * DocumentComment delete
   */
  export type DocumentCommentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentComment
     */
    select?: DocumentCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentComment
     */
    omit?: DocumentCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentCommentInclude<ExtArgs> | null
    /**
     * Filter which DocumentComment to delete.
     */
    where: DocumentCommentWhereUniqueInput
  }

  /**
   * DocumentComment deleteMany
   */
  export type DocumentCommentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DocumentComments to delete
     */
    where?: DocumentCommentWhereInput
    /**
     * Limit how many DocumentComments to delete.
     */
    limit?: number
  }

  /**
   * DocumentComment without action
   */
  export type DocumentCommentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentComment
     */
    select?: DocumentCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentComment
     */
    omit?: DocumentCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentCommentInclude<ExtArgs> | null
  }


  /**
   * Model DocumentShare
   */

  export type AggregateDocumentShare = {
    _count: DocumentShareCountAggregateOutputType | null
    _avg: DocumentShareAvgAggregateOutputType | null
    _sum: DocumentShareSumAggregateOutputType | null
    _min: DocumentShareMinAggregateOutputType | null
    _max: DocumentShareMaxAggregateOutputType | null
  }

  export type DocumentShareAvgAggregateOutputType = {
    maxUses: number | null
    useCount: number | null
  }

  export type DocumentShareSumAggregateOutputType = {
    maxUses: number | null
    useCount: number | null
  }

  export type DocumentShareMinAggregateOutputType = {
    id: string | null
    documentId: string | null
    shareToken: string | null
    expiresAt: Date | null
    maxUses: number | null
    useCount: number | null
    createdAt: Date | null
    createdBy: string | null
  }

  export type DocumentShareMaxAggregateOutputType = {
    id: string | null
    documentId: string | null
    shareToken: string | null
    expiresAt: Date | null
    maxUses: number | null
    useCount: number | null
    createdAt: Date | null
    createdBy: string | null
  }

  export type DocumentShareCountAggregateOutputType = {
    id: number
    documentId: number
    shareToken: number
    permissions: number
    expiresAt: number
    maxUses: number
    useCount: number
    createdAt: number
    createdBy: number
    _all: number
  }


  export type DocumentShareAvgAggregateInputType = {
    maxUses?: true
    useCount?: true
  }

  export type DocumentShareSumAggregateInputType = {
    maxUses?: true
    useCount?: true
  }

  export type DocumentShareMinAggregateInputType = {
    id?: true
    documentId?: true
    shareToken?: true
    expiresAt?: true
    maxUses?: true
    useCount?: true
    createdAt?: true
    createdBy?: true
  }

  export type DocumentShareMaxAggregateInputType = {
    id?: true
    documentId?: true
    shareToken?: true
    expiresAt?: true
    maxUses?: true
    useCount?: true
    createdAt?: true
    createdBy?: true
  }

  export type DocumentShareCountAggregateInputType = {
    id?: true
    documentId?: true
    shareToken?: true
    permissions?: true
    expiresAt?: true
    maxUses?: true
    useCount?: true
    createdAt?: true
    createdBy?: true
    _all?: true
  }

  export type DocumentShareAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DocumentShare to aggregate.
     */
    where?: DocumentShareWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentShares to fetch.
     */
    orderBy?: DocumentShareOrderByWithRelationInput | DocumentShareOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DocumentShareWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentShares from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentShares.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DocumentShares
    **/
    _count?: true | DocumentShareCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DocumentShareAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DocumentShareSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DocumentShareMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DocumentShareMaxAggregateInputType
  }

  export type GetDocumentShareAggregateType<T extends DocumentShareAggregateArgs> = {
        [P in keyof T & keyof AggregateDocumentShare]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocumentShare[P]>
      : GetScalarType<T[P], AggregateDocumentShare[P]>
  }




  export type DocumentShareGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentShareWhereInput
    orderBy?: DocumentShareOrderByWithAggregationInput | DocumentShareOrderByWithAggregationInput[]
    by: DocumentShareScalarFieldEnum[] | DocumentShareScalarFieldEnum
    having?: DocumentShareScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DocumentShareCountAggregateInputType | true
    _avg?: DocumentShareAvgAggregateInputType
    _sum?: DocumentShareSumAggregateInputType
    _min?: DocumentShareMinAggregateInputType
    _max?: DocumentShareMaxAggregateInputType
  }

  export type DocumentShareGroupByOutputType = {
    id: string
    documentId: string
    shareToken: string
    permissions: string[]
    expiresAt: Date | null
    maxUses: number | null
    useCount: number
    createdAt: Date
    createdBy: string
    _count: DocumentShareCountAggregateOutputType | null
    _avg: DocumentShareAvgAggregateOutputType | null
    _sum: DocumentShareSumAggregateOutputType | null
    _min: DocumentShareMinAggregateOutputType | null
    _max: DocumentShareMaxAggregateOutputType | null
  }

  type GetDocumentShareGroupByPayload<T extends DocumentShareGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DocumentShareGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DocumentShareGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DocumentShareGroupByOutputType[P]>
            : GetScalarType<T[P], DocumentShareGroupByOutputType[P]>
        }
      >
    >


  export type DocumentShareSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    documentId?: boolean
    shareToken?: boolean
    permissions?: boolean
    expiresAt?: boolean
    maxUses?: boolean
    useCount?: boolean
    createdAt?: boolean
    createdBy?: boolean
    document?: boolean | DocumentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["documentShare"]>

  export type DocumentShareSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    documentId?: boolean
    shareToken?: boolean
    permissions?: boolean
    expiresAt?: boolean
    maxUses?: boolean
    useCount?: boolean
    createdAt?: boolean
    createdBy?: boolean
    document?: boolean | DocumentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["documentShare"]>

  export type DocumentShareSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    documentId?: boolean
    shareToken?: boolean
    permissions?: boolean
    expiresAt?: boolean
    maxUses?: boolean
    useCount?: boolean
    createdAt?: boolean
    createdBy?: boolean
    document?: boolean | DocumentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["documentShare"]>

  export type DocumentShareSelectScalar = {
    id?: boolean
    documentId?: boolean
    shareToken?: boolean
    permissions?: boolean
    expiresAt?: boolean
    maxUses?: boolean
    useCount?: boolean
    createdAt?: boolean
    createdBy?: boolean
  }

  export type DocumentShareOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "documentId" | "shareToken" | "permissions" | "expiresAt" | "maxUses" | "useCount" | "createdAt" | "createdBy", ExtArgs["result"]["documentShare"]>
  export type DocumentShareInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    document?: boolean | DocumentDefaultArgs<ExtArgs>
  }
  export type DocumentShareIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    document?: boolean | DocumentDefaultArgs<ExtArgs>
  }
  export type DocumentShareIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    document?: boolean | DocumentDefaultArgs<ExtArgs>
  }

  export type $DocumentSharePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DocumentShare"
    objects: {
      document: Prisma.$DocumentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      documentId: string
      shareToken: string
      permissions: string[]
      expiresAt: Date | null
      maxUses: number | null
      useCount: number
      createdAt: Date
      createdBy: string
    }, ExtArgs["result"]["documentShare"]>
    composites: {}
  }

  type DocumentShareGetPayload<S extends boolean | null | undefined | DocumentShareDefaultArgs> = $Result.GetResult<Prisma.$DocumentSharePayload, S>

  type DocumentShareCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DocumentShareFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DocumentShareCountAggregateInputType | true
    }

  export interface DocumentShareDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DocumentShare'], meta: { name: 'DocumentShare' } }
    /**
     * Find zero or one DocumentShare that matches the filter.
     * @param {DocumentShareFindUniqueArgs} args - Arguments to find a DocumentShare
     * @example
     * // Get one DocumentShare
     * const documentShare = await prisma.documentShare.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DocumentShareFindUniqueArgs>(args: SelectSubset<T, DocumentShareFindUniqueArgs<ExtArgs>>): Prisma__DocumentShareClient<$Result.GetResult<Prisma.$DocumentSharePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DocumentShare that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DocumentShareFindUniqueOrThrowArgs} args - Arguments to find a DocumentShare
     * @example
     * // Get one DocumentShare
     * const documentShare = await prisma.documentShare.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DocumentShareFindUniqueOrThrowArgs>(args: SelectSubset<T, DocumentShareFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DocumentShareClient<$Result.GetResult<Prisma.$DocumentSharePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DocumentShare that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentShareFindFirstArgs} args - Arguments to find a DocumentShare
     * @example
     * // Get one DocumentShare
     * const documentShare = await prisma.documentShare.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DocumentShareFindFirstArgs>(args?: SelectSubset<T, DocumentShareFindFirstArgs<ExtArgs>>): Prisma__DocumentShareClient<$Result.GetResult<Prisma.$DocumentSharePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DocumentShare that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentShareFindFirstOrThrowArgs} args - Arguments to find a DocumentShare
     * @example
     * // Get one DocumentShare
     * const documentShare = await prisma.documentShare.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DocumentShareFindFirstOrThrowArgs>(args?: SelectSubset<T, DocumentShareFindFirstOrThrowArgs<ExtArgs>>): Prisma__DocumentShareClient<$Result.GetResult<Prisma.$DocumentSharePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DocumentShares that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentShareFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DocumentShares
     * const documentShares = await prisma.documentShare.findMany()
     * 
     * // Get first 10 DocumentShares
     * const documentShares = await prisma.documentShare.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const documentShareWithIdOnly = await prisma.documentShare.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DocumentShareFindManyArgs>(args?: SelectSubset<T, DocumentShareFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentSharePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DocumentShare.
     * @param {DocumentShareCreateArgs} args - Arguments to create a DocumentShare.
     * @example
     * // Create one DocumentShare
     * const DocumentShare = await prisma.documentShare.create({
     *   data: {
     *     // ... data to create a DocumentShare
     *   }
     * })
     * 
     */
    create<T extends DocumentShareCreateArgs>(args: SelectSubset<T, DocumentShareCreateArgs<ExtArgs>>): Prisma__DocumentShareClient<$Result.GetResult<Prisma.$DocumentSharePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DocumentShares.
     * @param {DocumentShareCreateManyArgs} args - Arguments to create many DocumentShares.
     * @example
     * // Create many DocumentShares
     * const documentShare = await prisma.documentShare.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DocumentShareCreateManyArgs>(args?: SelectSubset<T, DocumentShareCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DocumentShares and returns the data saved in the database.
     * @param {DocumentShareCreateManyAndReturnArgs} args - Arguments to create many DocumentShares.
     * @example
     * // Create many DocumentShares
     * const documentShare = await prisma.documentShare.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DocumentShares and only return the `id`
     * const documentShareWithIdOnly = await prisma.documentShare.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DocumentShareCreateManyAndReturnArgs>(args?: SelectSubset<T, DocumentShareCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentSharePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DocumentShare.
     * @param {DocumentShareDeleteArgs} args - Arguments to delete one DocumentShare.
     * @example
     * // Delete one DocumentShare
     * const DocumentShare = await prisma.documentShare.delete({
     *   where: {
     *     // ... filter to delete one DocumentShare
     *   }
     * })
     * 
     */
    delete<T extends DocumentShareDeleteArgs>(args: SelectSubset<T, DocumentShareDeleteArgs<ExtArgs>>): Prisma__DocumentShareClient<$Result.GetResult<Prisma.$DocumentSharePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DocumentShare.
     * @param {DocumentShareUpdateArgs} args - Arguments to update one DocumentShare.
     * @example
     * // Update one DocumentShare
     * const documentShare = await prisma.documentShare.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DocumentShareUpdateArgs>(args: SelectSubset<T, DocumentShareUpdateArgs<ExtArgs>>): Prisma__DocumentShareClient<$Result.GetResult<Prisma.$DocumentSharePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DocumentShares.
     * @param {DocumentShareDeleteManyArgs} args - Arguments to filter DocumentShares to delete.
     * @example
     * // Delete a few DocumentShares
     * const { count } = await prisma.documentShare.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DocumentShareDeleteManyArgs>(args?: SelectSubset<T, DocumentShareDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DocumentShares.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentShareUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DocumentShares
     * const documentShare = await prisma.documentShare.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DocumentShareUpdateManyArgs>(args: SelectSubset<T, DocumentShareUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DocumentShares and returns the data updated in the database.
     * @param {DocumentShareUpdateManyAndReturnArgs} args - Arguments to update many DocumentShares.
     * @example
     * // Update many DocumentShares
     * const documentShare = await prisma.documentShare.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DocumentShares and only return the `id`
     * const documentShareWithIdOnly = await prisma.documentShare.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DocumentShareUpdateManyAndReturnArgs>(args: SelectSubset<T, DocumentShareUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentSharePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DocumentShare.
     * @param {DocumentShareUpsertArgs} args - Arguments to update or create a DocumentShare.
     * @example
     * // Update or create a DocumentShare
     * const documentShare = await prisma.documentShare.upsert({
     *   create: {
     *     // ... data to create a DocumentShare
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DocumentShare we want to update
     *   }
     * })
     */
    upsert<T extends DocumentShareUpsertArgs>(args: SelectSubset<T, DocumentShareUpsertArgs<ExtArgs>>): Prisma__DocumentShareClient<$Result.GetResult<Prisma.$DocumentSharePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DocumentShares.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentShareCountArgs} args - Arguments to filter DocumentShares to count.
     * @example
     * // Count the number of DocumentShares
     * const count = await prisma.documentShare.count({
     *   where: {
     *     // ... the filter for the DocumentShares we want to count
     *   }
     * })
    **/
    count<T extends DocumentShareCountArgs>(
      args?: Subset<T, DocumentShareCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DocumentShareCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DocumentShare.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentShareAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DocumentShareAggregateArgs>(args: Subset<T, DocumentShareAggregateArgs>): Prisma.PrismaPromise<GetDocumentShareAggregateType<T>>

    /**
     * Group by DocumentShare.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentShareGroupByArgs} args - Group by arguments.
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
      T extends DocumentShareGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DocumentShareGroupByArgs['orderBy'] }
        : { orderBy?: DocumentShareGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DocumentShareGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocumentShareGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DocumentShare model
   */
  readonly fields: DocumentShareFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DocumentShare.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DocumentShareClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    document<T extends DocumentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DocumentDefaultArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the DocumentShare model
   */
  interface DocumentShareFieldRefs {
    readonly id: FieldRef<"DocumentShare", 'String'>
    readonly documentId: FieldRef<"DocumentShare", 'String'>
    readonly shareToken: FieldRef<"DocumentShare", 'String'>
    readonly permissions: FieldRef<"DocumentShare", 'String[]'>
    readonly expiresAt: FieldRef<"DocumentShare", 'DateTime'>
    readonly maxUses: FieldRef<"DocumentShare", 'Int'>
    readonly useCount: FieldRef<"DocumentShare", 'Int'>
    readonly createdAt: FieldRef<"DocumentShare", 'DateTime'>
    readonly createdBy: FieldRef<"DocumentShare", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DocumentShare findUnique
   */
  export type DocumentShareFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentShare
     */
    select?: DocumentShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentShare
     */
    omit?: DocumentShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentShareInclude<ExtArgs> | null
    /**
     * Filter, which DocumentShare to fetch.
     */
    where: DocumentShareWhereUniqueInput
  }

  /**
   * DocumentShare findUniqueOrThrow
   */
  export type DocumentShareFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentShare
     */
    select?: DocumentShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentShare
     */
    omit?: DocumentShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentShareInclude<ExtArgs> | null
    /**
     * Filter, which DocumentShare to fetch.
     */
    where: DocumentShareWhereUniqueInput
  }

  /**
   * DocumentShare findFirst
   */
  export type DocumentShareFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentShare
     */
    select?: DocumentShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentShare
     */
    omit?: DocumentShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentShareInclude<ExtArgs> | null
    /**
     * Filter, which DocumentShare to fetch.
     */
    where?: DocumentShareWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentShares to fetch.
     */
    orderBy?: DocumentShareOrderByWithRelationInput | DocumentShareOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DocumentShares.
     */
    cursor?: DocumentShareWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentShares from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentShares.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DocumentShares.
     */
    distinct?: DocumentShareScalarFieldEnum | DocumentShareScalarFieldEnum[]
  }

  /**
   * DocumentShare findFirstOrThrow
   */
  export type DocumentShareFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentShare
     */
    select?: DocumentShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentShare
     */
    omit?: DocumentShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentShareInclude<ExtArgs> | null
    /**
     * Filter, which DocumentShare to fetch.
     */
    where?: DocumentShareWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentShares to fetch.
     */
    orderBy?: DocumentShareOrderByWithRelationInput | DocumentShareOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DocumentShares.
     */
    cursor?: DocumentShareWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentShares from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentShares.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DocumentShares.
     */
    distinct?: DocumentShareScalarFieldEnum | DocumentShareScalarFieldEnum[]
  }

  /**
   * DocumentShare findMany
   */
  export type DocumentShareFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentShare
     */
    select?: DocumentShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentShare
     */
    omit?: DocumentShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentShareInclude<ExtArgs> | null
    /**
     * Filter, which DocumentShares to fetch.
     */
    where?: DocumentShareWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentShares to fetch.
     */
    orderBy?: DocumentShareOrderByWithRelationInput | DocumentShareOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DocumentShares.
     */
    cursor?: DocumentShareWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentShares from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentShares.
     */
    skip?: number
    distinct?: DocumentShareScalarFieldEnum | DocumentShareScalarFieldEnum[]
  }

  /**
   * DocumentShare create
   */
  export type DocumentShareCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentShare
     */
    select?: DocumentShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentShare
     */
    omit?: DocumentShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentShareInclude<ExtArgs> | null
    /**
     * The data needed to create a DocumentShare.
     */
    data: XOR<DocumentShareCreateInput, DocumentShareUncheckedCreateInput>
  }

  /**
   * DocumentShare createMany
   */
  export type DocumentShareCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DocumentShares.
     */
    data: DocumentShareCreateManyInput | DocumentShareCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DocumentShare createManyAndReturn
   */
  export type DocumentShareCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentShare
     */
    select?: DocumentShareSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentShare
     */
    omit?: DocumentShareOmit<ExtArgs> | null
    /**
     * The data used to create many DocumentShares.
     */
    data: DocumentShareCreateManyInput | DocumentShareCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentShareIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DocumentShare update
   */
  export type DocumentShareUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentShare
     */
    select?: DocumentShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentShare
     */
    omit?: DocumentShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentShareInclude<ExtArgs> | null
    /**
     * The data needed to update a DocumentShare.
     */
    data: XOR<DocumentShareUpdateInput, DocumentShareUncheckedUpdateInput>
    /**
     * Choose, which DocumentShare to update.
     */
    where: DocumentShareWhereUniqueInput
  }

  /**
   * DocumentShare updateMany
   */
  export type DocumentShareUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DocumentShares.
     */
    data: XOR<DocumentShareUpdateManyMutationInput, DocumentShareUncheckedUpdateManyInput>
    /**
     * Filter which DocumentShares to update
     */
    where?: DocumentShareWhereInput
    /**
     * Limit how many DocumentShares to update.
     */
    limit?: number
  }

  /**
   * DocumentShare updateManyAndReturn
   */
  export type DocumentShareUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentShare
     */
    select?: DocumentShareSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentShare
     */
    omit?: DocumentShareOmit<ExtArgs> | null
    /**
     * The data used to update DocumentShares.
     */
    data: XOR<DocumentShareUpdateManyMutationInput, DocumentShareUncheckedUpdateManyInput>
    /**
     * Filter which DocumentShares to update
     */
    where?: DocumentShareWhereInput
    /**
     * Limit how many DocumentShares to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentShareIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DocumentShare upsert
   */
  export type DocumentShareUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentShare
     */
    select?: DocumentShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentShare
     */
    omit?: DocumentShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentShareInclude<ExtArgs> | null
    /**
     * The filter to search for the DocumentShare to update in case it exists.
     */
    where: DocumentShareWhereUniqueInput
    /**
     * In case the DocumentShare found by the `where` argument doesn't exist, create a new DocumentShare with this data.
     */
    create: XOR<DocumentShareCreateInput, DocumentShareUncheckedCreateInput>
    /**
     * In case the DocumentShare was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DocumentShareUpdateInput, DocumentShareUncheckedUpdateInput>
  }

  /**
   * DocumentShare delete
   */
  export type DocumentShareDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentShare
     */
    select?: DocumentShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentShare
     */
    omit?: DocumentShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentShareInclude<ExtArgs> | null
    /**
     * Filter which DocumentShare to delete.
     */
    where: DocumentShareWhereUniqueInput
  }

  /**
   * DocumentShare deleteMany
   */
  export type DocumentShareDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DocumentShares to delete
     */
    where?: DocumentShareWhereInput
    /**
     * Limit how many DocumentShares to delete.
     */
    limit?: number
  }

  /**
   * DocumentShare without action
   */
  export type DocumentShareDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentShare
     */
    select?: DocumentShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentShare
     */
    omit?: DocumentShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentShareInclude<ExtArgs> | null
  }


  /**
   * Model DocumentTemplate
   */

  export type AggregateDocumentTemplate = {
    _count: DocumentTemplateCountAggregateOutputType | null
    _min: DocumentTemplateMinAggregateOutputType | null
    _max: DocumentTemplateMaxAggregateOutputType | null
  }

  export type DocumentTemplateMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    content: string | null
    category: string | null
    isPublic: boolean | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DocumentTemplateMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    content: string | null
    category: string | null
    isPublic: boolean | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DocumentTemplateCountAggregateOutputType = {
    id: number
    name: number
    description: number
    content: number
    category: number
    isPublic: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DocumentTemplateMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    content?: true
    category?: true
    isPublic?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DocumentTemplateMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    content?: true
    category?: true
    isPublic?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DocumentTemplateCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    content?: true
    category?: true
    isPublic?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DocumentTemplateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DocumentTemplate to aggregate.
     */
    where?: DocumentTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentTemplates to fetch.
     */
    orderBy?: DocumentTemplateOrderByWithRelationInput | DocumentTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DocumentTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DocumentTemplates
    **/
    _count?: true | DocumentTemplateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DocumentTemplateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DocumentTemplateMaxAggregateInputType
  }

  export type GetDocumentTemplateAggregateType<T extends DocumentTemplateAggregateArgs> = {
        [P in keyof T & keyof AggregateDocumentTemplate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocumentTemplate[P]>
      : GetScalarType<T[P], AggregateDocumentTemplate[P]>
  }




  export type DocumentTemplateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentTemplateWhereInput
    orderBy?: DocumentTemplateOrderByWithAggregationInput | DocumentTemplateOrderByWithAggregationInput[]
    by: DocumentTemplateScalarFieldEnum[] | DocumentTemplateScalarFieldEnum
    having?: DocumentTemplateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DocumentTemplateCountAggregateInputType | true
    _min?: DocumentTemplateMinAggregateInputType
    _max?: DocumentTemplateMaxAggregateInputType
  }

  export type DocumentTemplateGroupByOutputType = {
    id: string
    name: string
    description: string | null
    content: string
    category: string | null
    isPublic: boolean
    userId: string | null
    createdAt: Date
    updatedAt: Date
    _count: DocumentTemplateCountAggregateOutputType | null
    _min: DocumentTemplateMinAggregateOutputType | null
    _max: DocumentTemplateMaxAggregateOutputType | null
  }

  type GetDocumentTemplateGroupByPayload<T extends DocumentTemplateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DocumentTemplateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DocumentTemplateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DocumentTemplateGroupByOutputType[P]>
            : GetScalarType<T[P], DocumentTemplateGroupByOutputType[P]>
        }
      >
    >


  export type DocumentTemplateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    content?: boolean
    category?: boolean
    isPublic?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["documentTemplate"]>

  export type DocumentTemplateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    content?: boolean
    category?: boolean
    isPublic?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["documentTemplate"]>

  export type DocumentTemplateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    content?: boolean
    category?: boolean
    isPublic?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["documentTemplate"]>

  export type DocumentTemplateSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    content?: boolean
    category?: boolean
    isPublic?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DocumentTemplateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "content" | "category" | "isPublic" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["documentTemplate"]>

  export type $DocumentTemplatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DocumentTemplate"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      content: string
      category: string | null
      isPublic: boolean
      userId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["documentTemplate"]>
    composites: {}
  }

  type DocumentTemplateGetPayload<S extends boolean | null | undefined | DocumentTemplateDefaultArgs> = $Result.GetResult<Prisma.$DocumentTemplatePayload, S>

  type DocumentTemplateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DocumentTemplateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DocumentTemplateCountAggregateInputType | true
    }

  export interface DocumentTemplateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DocumentTemplate'], meta: { name: 'DocumentTemplate' } }
    /**
     * Find zero or one DocumentTemplate that matches the filter.
     * @param {DocumentTemplateFindUniqueArgs} args - Arguments to find a DocumentTemplate
     * @example
     * // Get one DocumentTemplate
     * const documentTemplate = await prisma.documentTemplate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DocumentTemplateFindUniqueArgs>(args: SelectSubset<T, DocumentTemplateFindUniqueArgs<ExtArgs>>): Prisma__DocumentTemplateClient<$Result.GetResult<Prisma.$DocumentTemplatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DocumentTemplate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DocumentTemplateFindUniqueOrThrowArgs} args - Arguments to find a DocumentTemplate
     * @example
     * // Get one DocumentTemplate
     * const documentTemplate = await prisma.documentTemplate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DocumentTemplateFindUniqueOrThrowArgs>(args: SelectSubset<T, DocumentTemplateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DocumentTemplateClient<$Result.GetResult<Prisma.$DocumentTemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DocumentTemplate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentTemplateFindFirstArgs} args - Arguments to find a DocumentTemplate
     * @example
     * // Get one DocumentTemplate
     * const documentTemplate = await prisma.documentTemplate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DocumentTemplateFindFirstArgs>(args?: SelectSubset<T, DocumentTemplateFindFirstArgs<ExtArgs>>): Prisma__DocumentTemplateClient<$Result.GetResult<Prisma.$DocumentTemplatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DocumentTemplate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentTemplateFindFirstOrThrowArgs} args - Arguments to find a DocumentTemplate
     * @example
     * // Get one DocumentTemplate
     * const documentTemplate = await prisma.documentTemplate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DocumentTemplateFindFirstOrThrowArgs>(args?: SelectSubset<T, DocumentTemplateFindFirstOrThrowArgs<ExtArgs>>): Prisma__DocumentTemplateClient<$Result.GetResult<Prisma.$DocumentTemplatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DocumentTemplates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentTemplateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DocumentTemplates
     * const documentTemplates = await prisma.documentTemplate.findMany()
     * 
     * // Get first 10 DocumentTemplates
     * const documentTemplates = await prisma.documentTemplate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const documentTemplateWithIdOnly = await prisma.documentTemplate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DocumentTemplateFindManyArgs>(args?: SelectSubset<T, DocumentTemplateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentTemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DocumentTemplate.
     * @param {DocumentTemplateCreateArgs} args - Arguments to create a DocumentTemplate.
     * @example
     * // Create one DocumentTemplate
     * const DocumentTemplate = await prisma.documentTemplate.create({
     *   data: {
     *     // ... data to create a DocumentTemplate
     *   }
     * })
     * 
     */
    create<T extends DocumentTemplateCreateArgs>(args: SelectSubset<T, DocumentTemplateCreateArgs<ExtArgs>>): Prisma__DocumentTemplateClient<$Result.GetResult<Prisma.$DocumentTemplatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DocumentTemplates.
     * @param {DocumentTemplateCreateManyArgs} args - Arguments to create many DocumentTemplates.
     * @example
     * // Create many DocumentTemplates
     * const documentTemplate = await prisma.documentTemplate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DocumentTemplateCreateManyArgs>(args?: SelectSubset<T, DocumentTemplateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DocumentTemplates and returns the data saved in the database.
     * @param {DocumentTemplateCreateManyAndReturnArgs} args - Arguments to create many DocumentTemplates.
     * @example
     * // Create many DocumentTemplates
     * const documentTemplate = await prisma.documentTemplate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DocumentTemplates and only return the `id`
     * const documentTemplateWithIdOnly = await prisma.documentTemplate.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DocumentTemplateCreateManyAndReturnArgs>(args?: SelectSubset<T, DocumentTemplateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentTemplatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DocumentTemplate.
     * @param {DocumentTemplateDeleteArgs} args - Arguments to delete one DocumentTemplate.
     * @example
     * // Delete one DocumentTemplate
     * const DocumentTemplate = await prisma.documentTemplate.delete({
     *   where: {
     *     // ... filter to delete one DocumentTemplate
     *   }
     * })
     * 
     */
    delete<T extends DocumentTemplateDeleteArgs>(args: SelectSubset<T, DocumentTemplateDeleteArgs<ExtArgs>>): Prisma__DocumentTemplateClient<$Result.GetResult<Prisma.$DocumentTemplatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DocumentTemplate.
     * @param {DocumentTemplateUpdateArgs} args - Arguments to update one DocumentTemplate.
     * @example
     * // Update one DocumentTemplate
     * const documentTemplate = await prisma.documentTemplate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DocumentTemplateUpdateArgs>(args: SelectSubset<T, DocumentTemplateUpdateArgs<ExtArgs>>): Prisma__DocumentTemplateClient<$Result.GetResult<Prisma.$DocumentTemplatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DocumentTemplates.
     * @param {DocumentTemplateDeleteManyArgs} args - Arguments to filter DocumentTemplates to delete.
     * @example
     * // Delete a few DocumentTemplates
     * const { count } = await prisma.documentTemplate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DocumentTemplateDeleteManyArgs>(args?: SelectSubset<T, DocumentTemplateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DocumentTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentTemplateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DocumentTemplates
     * const documentTemplate = await prisma.documentTemplate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DocumentTemplateUpdateManyArgs>(args: SelectSubset<T, DocumentTemplateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DocumentTemplates and returns the data updated in the database.
     * @param {DocumentTemplateUpdateManyAndReturnArgs} args - Arguments to update many DocumentTemplates.
     * @example
     * // Update many DocumentTemplates
     * const documentTemplate = await prisma.documentTemplate.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DocumentTemplates and only return the `id`
     * const documentTemplateWithIdOnly = await prisma.documentTemplate.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DocumentTemplateUpdateManyAndReturnArgs>(args: SelectSubset<T, DocumentTemplateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentTemplatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DocumentTemplate.
     * @param {DocumentTemplateUpsertArgs} args - Arguments to update or create a DocumentTemplate.
     * @example
     * // Update or create a DocumentTemplate
     * const documentTemplate = await prisma.documentTemplate.upsert({
     *   create: {
     *     // ... data to create a DocumentTemplate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DocumentTemplate we want to update
     *   }
     * })
     */
    upsert<T extends DocumentTemplateUpsertArgs>(args: SelectSubset<T, DocumentTemplateUpsertArgs<ExtArgs>>): Prisma__DocumentTemplateClient<$Result.GetResult<Prisma.$DocumentTemplatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DocumentTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentTemplateCountArgs} args - Arguments to filter DocumentTemplates to count.
     * @example
     * // Count the number of DocumentTemplates
     * const count = await prisma.documentTemplate.count({
     *   where: {
     *     // ... the filter for the DocumentTemplates we want to count
     *   }
     * })
    **/
    count<T extends DocumentTemplateCountArgs>(
      args?: Subset<T, DocumentTemplateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DocumentTemplateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DocumentTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentTemplateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DocumentTemplateAggregateArgs>(args: Subset<T, DocumentTemplateAggregateArgs>): Prisma.PrismaPromise<GetDocumentTemplateAggregateType<T>>

    /**
     * Group by DocumentTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentTemplateGroupByArgs} args - Group by arguments.
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
      T extends DocumentTemplateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DocumentTemplateGroupByArgs['orderBy'] }
        : { orderBy?: DocumentTemplateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DocumentTemplateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocumentTemplateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DocumentTemplate model
   */
  readonly fields: DocumentTemplateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DocumentTemplate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DocumentTemplateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the DocumentTemplate model
   */
  interface DocumentTemplateFieldRefs {
    readonly id: FieldRef<"DocumentTemplate", 'String'>
    readonly name: FieldRef<"DocumentTemplate", 'String'>
    readonly description: FieldRef<"DocumentTemplate", 'String'>
    readonly content: FieldRef<"DocumentTemplate", 'String'>
    readonly category: FieldRef<"DocumentTemplate", 'String'>
    readonly isPublic: FieldRef<"DocumentTemplate", 'Boolean'>
    readonly userId: FieldRef<"DocumentTemplate", 'String'>
    readonly createdAt: FieldRef<"DocumentTemplate", 'DateTime'>
    readonly updatedAt: FieldRef<"DocumentTemplate", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DocumentTemplate findUnique
   */
  export type DocumentTemplateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentTemplate
     */
    select?: DocumentTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentTemplate
     */
    omit?: DocumentTemplateOmit<ExtArgs> | null
    /**
     * Filter, which DocumentTemplate to fetch.
     */
    where: DocumentTemplateWhereUniqueInput
  }

  /**
   * DocumentTemplate findUniqueOrThrow
   */
  export type DocumentTemplateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentTemplate
     */
    select?: DocumentTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentTemplate
     */
    omit?: DocumentTemplateOmit<ExtArgs> | null
    /**
     * Filter, which DocumentTemplate to fetch.
     */
    where: DocumentTemplateWhereUniqueInput
  }

  /**
   * DocumentTemplate findFirst
   */
  export type DocumentTemplateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentTemplate
     */
    select?: DocumentTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentTemplate
     */
    omit?: DocumentTemplateOmit<ExtArgs> | null
    /**
     * Filter, which DocumentTemplate to fetch.
     */
    where?: DocumentTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentTemplates to fetch.
     */
    orderBy?: DocumentTemplateOrderByWithRelationInput | DocumentTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DocumentTemplates.
     */
    cursor?: DocumentTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DocumentTemplates.
     */
    distinct?: DocumentTemplateScalarFieldEnum | DocumentTemplateScalarFieldEnum[]
  }

  /**
   * DocumentTemplate findFirstOrThrow
   */
  export type DocumentTemplateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentTemplate
     */
    select?: DocumentTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentTemplate
     */
    omit?: DocumentTemplateOmit<ExtArgs> | null
    /**
     * Filter, which DocumentTemplate to fetch.
     */
    where?: DocumentTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentTemplates to fetch.
     */
    orderBy?: DocumentTemplateOrderByWithRelationInput | DocumentTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DocumentTemplates.
     */
    cursor?: DocumentTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DocumentTemplates.
     */
    distinct?: DocumentTemplateScalarFieldEnum | DocumentTemplateScalarFieldEnum[]
  }

  /**
   * DocumentTemplate findMany
   */
  export type DocumentTemplateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentTemplate
     */
    select?: DocumentTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentTemplate
     */
    omit?: DocumentTemplateOmit<ExtArgs> | null
    /**
     * Filter, which DocumentTemplates to fetch.
     */
    where?: DocumentTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentTemplates to fetch.
     */
    orderBy?: DocumentTemplateOrderByWithRelationInput | DocumentTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DocumentTemplates.
     */
    cursor?: DocumentTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentTemplates.
     */
    skip?: number
    distinct?: DocumentTemplateScalarFieldEnum | DocumentTemplateScalarFieldEnum[]
  }

  /**
   * DocumentTemplate create
   */
  export type DocumentTemplateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentTemplate
     */
    select?: DocumentTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentTemplate
     */
    omit?: DocumentTemplateOmit<ExtArgs> | null
    /**
     * The data needed to create a DocumentTemplate.
     */
    data: XOR<DocumentTemplateCreateInput, DocumentTemplateUncheckedCreateInput>
  }

  /**
   * DocumentTemplate createMany
   */
  export type DocumentTemplateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DocumentTemplates.
     */
    data: DocumentTemplateCreateManyInput | DocumentTemplateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DocumentTemplate createManyAndReturn
   */
  export type DocumentTemplateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentTemplate
     */
    select?: DocumentTemplateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentTemplate
     */
    omit?: DocumentTemplateOmit<ExtArgs> | null
    /**
     * The data used to create many DocumentTemplates.
     */
    data: DocumentTemplateCreateManyInput | DocumentTemplateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DocumentTemplate update
   */
  export type DocumentTemplateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentTemplate
     */
    select?: DocumentTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentTemplate
     */
    omit?: DocumentTemplateOmit<ExtArgs> | null
    /**
     * The data needed to update a DocumentTemplate.
     */
    data: XOR<DocumentTemplateUpdateInput, DocumentTemplateUncheckedUpdateInput>
    /**
     * Choose, which DocumentTemplate to update.
     */
    where: DocumentTemplateWhereUniqueInput
  }

  /**
   * DocumentTemplate updateMany
   */
  export type DocumentTemplateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DocumentTemplates.
     */
    data: XOR<DocumentTemplateUpdateManyMutationInput, DocumentTemplateUncheckedUpdateManyInput>
    /**
     * Filter which DocumentTemplates to update
     */
    where?: DocumentTemplateWhereInput
    /**
     * Limit how many DocumentTemplates to update.
     */
    limit?: number
  }

  /**
   * DocumentTemplate updateManyAndReturn
   */
  export type DocumentTemplateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentTemplate
     */
    select?: DocumentTemplateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentTemplate
     */
    omit?: DocumentTemplateOmit<ExtArgs> | null
    /**
     * The data used to update DocumentTemplates.
     */
    data: XOR<DocumentTemplateUpdateManyMutationInput, DocumentTemplateUncheckedUpdateManyInput>
    /**
     * Filter which DocumentTemplates to update
     */
    where?: DocumentTemplateWhereInput
    /**
     * Limit how many DocumentTemplates to update.
     */
    limit?: number
  }

  /**
   * DocumentTemplate upsert
   */
  export type DocumentTemplateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentTemplate
     */
    select?: DocumentTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentTemplate
     */
    omit?: DocumentTemplateOmit<ExtArgs> | null
    /**
     * The filter to search for the DocumentTemplate to update in case it exists.
     */
    where: DocumentTemplateWhereUniqueInput
    /**
     * In case the DocumentTemplate found by the `where` argument doesn't exist, create a new DocumentTemplate with this data.
     */
    create: XOR<DocumentTemplateCreateInput, DocumentTemplateUncheckedCreateInput>
    /**
     * In case the DocumentTemplate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DocumentTemplateUpdateInput, DocumentTemplateUncheckedUpdateInput>
  }

  /**
   * DocumentTemplate delete
   */
  export type DocumentTemplateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentTemplate
     */
    select?: DocumentTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentTemplate
     */
    omit?: DocumentTemplateOmit<ExtArgs> | null
    /**
     * Filter which DocumentTemplate to delete.
     */
    where: DocumentTemplateWhereUniqueInput
  }

  /**
   * DocumentTemplate deleteMany
   */
  export type DocumentTemplateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DocumentTemplates to delete
     */
    where?: DocumentTemplateWhereInput
    /**
     * Limit how many DocumentTemplates to delete.
     */
    limit?: number
  }

  /**
   * DocumentTemplate without action
   */
  export type DocumentTemplateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentTemplate
     */
    select?: DocumentTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentTemplate
     */
    omit?: DocumentTemplateOmit<ExtArgs> | null
  }


  /**
   * Model UserSettings
   */

  export type AggregateUserSettings = {
    _count: UserSettingsCountAggregateOutputType | null
    _avg: UserSettingsAvgAggregateOutputType | null
    _sum: UserSettingsSumAggregateOutputType | null
    _min: UserSettingsMinAggregateOutputType | null
    _max: UserSettingsMaxAggregateOutputType | null
  }

  export type UserSettingsAvgAggregateOutputType = {
    fontSize: number | null
    autoSaveInterval: number | null
  }

  export type UserSettingsSumAggregateOutputType = {
    fontSize: number | null
    autoSaveInterval: number | null
  }

  export type UserSettingsMinAggregateOutputType = {
    id: string | null
    userId: string | null
    editorTheme: string | null
    fontSize: number | null
    autoSave: boolean | null
    autoSaveInterval: number | null
    showLineNumbers: boolean | null
    wordWrap: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserSettingsMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    editorTheme: string | null
    fontSize: number | null
    autoSave: boolean | null
    autoSaveInterval: number | null
    showLineNumbers: boolean | null
    wordWrap: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserSettingsCountAggregateOutputType = {
    id: number
    userId: number
    editorTheme: number
    fontSize: number
    autoSave: number
    autoSaveInterval: number
    showLineNumbers: number
    wordWrap: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserSettingsAvgAggregateInputType = {
    fontSize?: true
    autoSaveInterval?: true
  }

  export type UserSettingsSumAggregateInputType = {
    fontSize?: true
    autoSaveInterval?: true
  }

  export type UserSettingsMinAggregateInputType = {
    id?: true
    userId?: true
    editorTheme?: true
    fontSize?: true
    autoSave?: true
    autoSaveInterval?: true
    showLineNumbers?: true
    wordWrap?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserSettingsMaxAggregateInputType = {
    id?: true
    userId?: true
    editorTheme?: true
    fontSize?: true
    autoSave?: true
    autoSaveInterval?: true
    showLineNumbers?: true
    wordWrap?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserSettingsCountAggregateInputType = {
    id?: true
    userId?: true
    editorTheme?: true
    fontSize?: true
    autoSave?: true
    autoSaveInterval?: true
    showLineNumbers?: true
    wordWrap?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserSettingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSettings to aggregate.
     */
    where?: UserSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSettings to fetch.
     */
    orderBy?: UserSettingsOrderByWithRelationInput | UserSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserSettings
    **/
    _count?: true | UserSettingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserSettingsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSettingsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserSettingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserSettingsMaxAggregateInputType
  }

  export type GetUserSettingsAggregateType<T extends UserSettingsAggregateArgs> = {
        [P in keyof T & keyof AggregateUserSettings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserSettings[P]>
      : GetScalarType<T[P], AggregateUserSettings[P]>
  }




  export type UserSettingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSettingsWhereInput
    orderBy?: UserSettingsOrderByWithAggregationInput | UserSettingsOrderByWithAggregationInput[]
    by: UserSettingsScalarFieldEnum[] | UserSettingsScalarFieldEnum
    having?: UserSettingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserSettingsCountAggregateInputType | true
    _avg?: UserSettingsAvgAggregateInputType
    _sum?: UserSettingsSumAggregateInputType
    _min?: UserSettingsMinAggregateInputType
    _max?: UserSettingsMaxAggregateInputType
  }

  export type UserSettingsGroupByOutputType = {
    id: string
    userId: string
    editorTheme: string
    fontSize: number
    autoSave: boolean
    autoSaveInterval: number
    showLineNumbers: boolean
    wordWrap: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserSettingsCountAggregateOutputType | null
    _avg: UserSettingsAvgAggregateOutputType | null
    _sum: UserSettingsSumAggregateOutputType | null
    _min: UserSettingsMinAggregateOutputType | null
    _max: UserSettingsMaxAggregateOutputType | null
  }

  type GetUserSettingsGroupByPayload<T extends UserSettingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserSettingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserSettingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserSettingsGroupByOutputType[P]>
            : GetScalarType<T[P], UserSettingsGroupByOutputType[P]>
        }
      >
    >


  export type UserSettingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    editorTheme?: boolean
    fontSize?: boolean
    autoSave?: boolean
    autoSaveInterval?: boolean
    showLineNumbers?: boolean
    wordWrap?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSettings"]>

  export type UserSettingsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    editorTheme?: boolean
    fontSize?: boolean
    autoSave?: boolean
    autoSaveInterval?: boolean
    showLineNumbers?: boolean
    wordWrap?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSettings"]>

  export type UserSettingsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    editorTheme?: boolean
    fontSize?: boolean
    autoSave?: boolean
    autoSaveInterval?: boolean
    showLineNumbers?: boolean
    wordWrap?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSettings"]>

  export type UserSettingsSelectScalar = {
    id?: boolean
    userId?: boolean
    editorTheme?: boolean
    fontSize?: boolean
    autoSave?: boolean
    autoSaveInterval?: boolean
    showLineNumbers?: boolean
    wordWrap?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserSettingsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "editorTheme" | "fontSize" | "autoSave" | "autoSaveInterval" | "showLineNumbers" | "wordWrap" | "createdAt" | "updatedAt", ExtArgs["result"]["userSettings"]>
  export type UserSettingsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserSettingsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserSettingsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserSettingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserSettings"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      editorTheme: string
      fontSize: number
      autoSave: boolean
      autoSaveInterval: number
      showLineNumbers: boolean
      wordWrap: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userSettings"]>
    composites: {}
  }

  type UserSettingsGetPayload<S extends boolean | null | undefined | UserSettingsDefaultArgs> = $Result.GetResult<Prisma.$UserSettingsPayload, S>

  type UserSettingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserSettingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserSettingsCountAggregateInputType | true
    }

  export interface UserSettingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserSettings'], meta: { name: 'UserSettings' } }
    /**
     * Find zero or one UserSettings that matches the filter.
     * @param {UserSettingsFindUniqueArgs} args - Arguments to find a UserSettings
     * @example
     * // Get one UserSettings
     * const userSettings = await prisma.userSettings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserSettingsFindUniqueArgs>(args: SelectSubset<T, UserSettingsFindUniqueArgs<ExtArgs>>): Prisma__UserSettingsClient<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserSettings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserSettingsFindUniqueOrThrowArgs} args - Arguments to find a UserSettings
     * @example
     * // Get one UserSettings
     * const userSettings = await prisma.userSettings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserSettingsFindUniqueOrThrowArgs>(args: SelectSubset<T, UserSettingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserSettingsClient<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSettingsFindFirstArgs} args - Arguments to find a UserSettings
     * @example
     * // Get one UserSettings
     * const userSettings = await prisma.userSettings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserSettingsFindFirstArgs>(args?: SelectSubset<T, UserSettingsFindFirstArgs<ExtArgs>>): Prisma__UserSettingsClient<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserSettings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSettingsFindFirstOrThrowArgs} args - Arguments to find a UserSettings
     * @example
     * // Get one UserSettings
     * const userSettings = await prisma.userSettings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserSettingsFindFirstOrThrowArgs>(args?: SelectSubset<T, UserSettingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserSettingsClient<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSettingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserSettings
     * const userSettings = await prisma.userSettings.findMany()
     * 
     * // Get first 10 UserSettings
     * const userSettings = await prisma.userSettings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userSettingsWithIdOnly = await prisma.userSettings.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserSettingsFindManyArgs>(args?: SelectSubset<T, UserSettingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserSettings.
     * @param {UserSettingsCreateArgs} args - Arguments to create a UserSettings.
     * @example
     * // Create one UserSettings
     * const UserSettings = await prisma.userSettings.create({
     *   data: {
     *     // ... data to create a UserSettings
     *   }
     * })
     * 
     */
    create<T extends UserSettingsCreateArgs>(args: SelectSubset<T, UserSettingsCreateArgs<ExtArgs>>): Prisma__UserSettingsClient<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserSettings.
     * @param {UserSettingsCreateManyArgs} args - Arguments to create many UserSettings.
     * @example
     * // Create many UserSettings
     * const userSettings = await prisma.userSettings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserSettingsCreateManyArgs>(args?: SelectSubset<T, UserSettingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserSettings and returns the data saved in the database.
     * @param {UserSettingsCreateManyAndReturnArgs} args - Arguments to create many UserSettings.
     * @example
     * // Create many UserSettings
     * const userSettings = await prisma.userSettings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserSettings and only return the `id`
     * const userSettingsWithIdOnly = await prisma.userSettings.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserSettingsCreateManyAndReturnArgs>(args?: SelectSubset<T, UserSettingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserSettings.
     * @param {UserSettingsDeleteArgs} args - Arguments to delete one UserSettings.
     * @example
     * // Delete one UserSettings
     * const UserSettings = await prisma.userSettings.delete({
     *   where: {
     *     // ... filter to delete one UserSettings
     *   }
     * })
     * 
     */
    delete<T extends UserSettingsDeleteArgs>(args: SelectSubset<T, UserSettingsDeleteArgs<ExtArgs>>): Prisma__UserSettingsClient<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserSettings.
     * @param {UserSettingsUpdateArgs} args - Arguments to update one UserSettings.
     * @example
     * // Update one UserSettings
     * const userSettings = await prisma.userSettings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserSettingsUpdateArgs>(args: SelectSubset<T, UserSettingsUpdateArgs<ExtArgs>>): Prisma__UserSettingsClient<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserSettings.
     * @param {UserSettingsDeleteManyArgs} args - Arguments to filter UserSettings to delete.
     * @example
     * // Delete a few UserSettings
     * const { count } = await prisma.userSettings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserSettingsDeleteManyArgs>(args?: SelectSubset<T, UserSettingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSettingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserSettings
     * const userSettings = await prisma.userSettings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserSettingsUpdateManyArgs>(args: SelectSubset<T, UserSettingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSettings and returns the data updated in the database.
     * @param {UserSettingsUpdateManyAndReturnArgs} args - Arguments to update many UserSettings.
     * @example
     * // Update many UserSettings
     * const userSettings = await prisma.userSettings.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserSettings and only return the `id`
     * const userSettingsWithIdOnly = await prisma.userSettings.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserSettingsUpdateManyAndReturnArgs>(args: SelectSubset<T, UserSettingsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserSettings.
     * @param {UserSettingsUpsertArgs} args - Arguments to update or create a UserSettings.
     * @example
     * // Update or create a UserSettings
     * const userSettings = await prisma.userSettings.upsert({
     *   create: {
     *     // ... data to create a UserSettings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserSettings we want to update
     *   }
     * })
     */
    upsert<T extends UserSettingsUpsertArgs>(args: SelectSubset<T, UserSettingsUpsertArgs<ExtArgs>>): Prisma__UserSettingsClient<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSettingsCountArgs} args - Arguments to filter UserSettings to count.
     * @example
     * // Count the number of UserSettings
     * const count = await prisma.userSettings.count({
     *   where: {
     *     // ... the filter for the UserSettings we want to count
     *   }
     * })
    **/
    count<T extends UserSettingsCountArgs>(
      args?: Subset<T, UserSettingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserSettingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSettingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserSettingsAggregateArgs>(args: Subset<T, UserSettingsAggregateArgs>): Prisma.PrismaPromise<GetUserSettingsAggregateType<T>>

    /**
     * Group by UserSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSettingsGroupByArgs} args - Group by arguments.
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
      T extends UserSettingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserSettingsGroupByArgs['orderBy'] }
        : { orderBy?: UserSettingsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserSettingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserSettingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserSettings model
   */
  readonly fields: UserSettingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserSettings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserSettingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserSettings model
   */
  interface UserSettingsFieldRefs {
    readonly id: FieldRef<"UserSettings", 'String'>
    readonly userId: FieldRef<"UserSettings", 'String'>
    readonly editorTheme: FieldRef<"UserSettings", 'String'>
    readonly fontSize: FieldRef<"UserSettings", 'Int'>
    readonly autoSave: FieldRef<"UserSettings", 'Boolean'>
    readonly autoSaveInterval: FieldRef<"UserSettings", 'Int'>
    readonly showLineNumbers: FieldRef<"UserSettings", 'Boolean'>
    readonly wordWrap: FieldRef<"UserSettings", 'Boolean'>
    readonly createdAt: FieldRef<"UserSettings", 'DateTime'>
    readonly updatedAt: FieldRef<"UserSettings", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserSettings findUnique
   */
  export type UserSettingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
    /**
     * Filter, which UserSettings to fetch.
     */
    where: UserSettingsWhereUniqueInput
  }

  /**
   * UserSettings findUniqueOrThrow
   */
  export type UserSettingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
    /**
     * Filter, which UserSettings to fetch.
     */
    where: UserSettingsWhereUniqueInput
  }

  /**
   * UserSettings findFirst
   */
  export type UserSettingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
    /**
     * Filter, which UserSettings to fetch.
     */
    where?: UserSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSettings to fetch.
     */
    orderBy?: UserSettingsOrderByWithRelationInput | UserSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSettings.
     */
    cursor?: UserSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSettings.
     */
    distinct?: UserSettingsScalarFieldEnum | UserSettingsScalarFieldEnum[]
  }

  /**
   * UserSettings findFirstOrThrow
   */
  export type UserSettingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
    /**
     * Filter, which UserSettings to fetch.
     */
    where?: UserSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSettings to fetch.
     */
    orderBy?: UserSettingsOrderByWithRelationInput | UserSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSettings.
     */
    cursor?: UserSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSettings.
     */
    distinct?: UserSettingsScalarFieldEnum | UserSettingsScalarFieldEnum[]
  }

  /**
   * UserSettings findMany
   */
  export type UserSettingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
    /**
     * Filter, which UserSettings to fetch.
     */
    where?: UserSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSettings to fetch.
     */
    orderBy?: UserSettingsOrderByWithRelationInput | UserSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserSettings.
     */
    cursor?: UserSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSettings.
     */
    skip?: number
    distinct?: UserSettingsScalarFieldEnum | UserSettingsScalarFieldEnum[]
  }

  /**
   * UserSettings create
   */
  export type UserSettingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
    /**
     * The data needed to create a UserSettings.
     */
    data: XOR<UserSettingsCreateInput, UserSettingsUncheckedCreateInput>
  }

  /**
   * UserSettings createMany
   */
  export type UserSettingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserSettings.
     */
    data: UserSettingsCreateManyInput | UserSettingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserSettings createManyAndReturn
   */
  export type UserSettingsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * The data used to create many UserSettings.
     */
    data: UserSettingsCreateManyInput | UserSettingsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserSettings update
   */
  export type UserSettingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
    /**
     * The data needed to update a UserSettings.
     */
    data: XOR<UserSettingsUpdateInput, UserSettingsUncheckedUpdateInput>
    /**
     * Choose, which UserSettings to update.
     */
    where: UserSettingsWhereUniqueInput
  }

  /**
   * UserSettings updateMany
   */
  export type UserSettingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserSettings.
     */
    data: XOR<UserSettingsUpdateManyMutationInput, UserSettingsUncheckedUpdateManyInput>
    /**
     * Filter which UserSettings to update
     */
    where?: UserSettingsWhereInput
    /**
     * Limit how many UserSettings to update.
     */
    limit?: number
  }

  /**
   * UserSettings updateManyAndReturn
   */
  export type UserSettingsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * The data used to update UserSettings.
     */
    data: XOR<UserSettingsUpdateManyMutationInput, UserSettingsUncheckedUpdateManyInput>
    /**
     * Filter which UserSettings to update
     */
    where?: UserSettingsWhereInput
    /**
     * Limit how many UserSettings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserSettings upsert
   */
  export type UserSettingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
    /**
     * The filter to search for the UserSettings to update in case it exists.
     */
    where: UserSettingsWhereUniqueInput
    /**
     * In case the UserSettings found by the `where` argument doesn't exist, create a new UserSettings with this data.
     */
    create: XOR<UserSettingsCreateInput, UserSettingsUncheckedCreateInput>
    /**
     * In case the UserSettings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserSettingsUpdateInput, UserSettingsUncheckedUpdateInput>
  }

  /**
   * UserSettings delete
   */
  export type UserSettingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
    /**
     * Filter which UserSettings to delete.
     */
    where: UserSettingsWhereUniqueInput
  }

  /**
   * UserSettings deleteMany
   */
  export type UserSettingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSettings to delete
     */
    where?: UserSettingsWhereInput
    /**
     * Limit how many UserSettings to delete.
     */
    limit?: number
  }

  /**
   * UserSettings without action
   */
  export type UserSettingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
  }


  /**
   * Model DocumentActivity
   */

  export type AggregateDocumentActivity = {
    _count: DocumentActivityCountAggregateOutputType | null
    _min: DocumentActivityMinAggregateOutputType | null
    _max: DocumentActivityMaxAggregateOutputType | null
  }

  export type DocumentActivityMinAggregateOutputType = {
    id: string | null
    documentId: string | null
    userId: string | null
    action: string | null
    description: string | null
    createdAt: Date | null
  }

  export type DocumentActivityMaxAggregateOutputType = {
    id: string | null
    documentId: string | null
    userId: string | null
    action: string | null
    description: string | null
    createdAt: Date | null
  }

  export type DocumentActivityCountAggregateOutputType = {
    id: number
    documentId: number
    userId: number
    action: number
    description: number
    metadata: number
    createdAt: number
    _all: number
  }


  export type DocumentActivityMinAggregateInputType = {
    id?: true
    documentId?: true
    userId?: true
    action?: true
    description?: true
    createdAt?: true
  }

  export type DocumentActivityMaxAggregateInputType = {
    id?: true
    documentId?: true
    userId?: true
    action?: true
    description?: true
    createdAt?: true
  }

  export type DocumentActivityCountAggregateInputType = {
    id?: true
    documentId?: true
    userId?: true
    action?: true
    description?: true
    metadata?: true
    createdAt?: true
    _all?: true
  }

  export type DocumentActivityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DocumentActivity to aggregate.
     */
    where?: DocumentActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentActivities to fetch.
     */
    orderBy?: DocumentActivityOrderByWithRelationInput | DocumentActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DocumentActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DocumentActivities
    **/
    _count?: true | DocumentActivityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DocumentActivityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DocumentActivityMaxAggregateInputType
  }

  export type GetDocumentActivityAggregateType<T extends DocumentActivityAggregateArgs> = {
        [P in keyof T & keyof AggregateDocumentActivity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocumentActivity[P]>
      : GetScalarType<T[P], AggregateDocumentActivity[P]>
  }




  export type DocumentActivityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentActivityWhereInput
    orderBy?: DocumentActivityOrderByWithAggregationInput | DocumentActivityOrderByWithAggregationInput[]
    by: DocumentActivityScalarFieldEnum[] | DocumentActivityScalarFieldEnum
    having?: DocumentActivityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DocumentActivityCountAggregateInputType | true
    _min?: DocumentActivityMinAggregateInputType
    _max?: DocumentActivityMaxAggregateInputType
  }

  export type DocumentActivityGroupByOutputType = {
    id: string
    documentId: string
    userId: string
    action: string
    description: string | null
    metadata: JsonValue | null
    createdAt: Date
    _count: DocumentActivityCountAggregateOutputType | null
    _min: DocumentActivityMinAggregateOutputType | null
    _max: DocumentActivityMaxAggregateOutputType | null
  }

  type GetDocumentActivityGroupByPayload<T extends DocumentActivityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DocumentActivityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DocumentActivityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DocumentActivityGroupByOutputType[P]>
            : GetScalarType<T[P], DocumentActivityGroupByOutputType[P]>
        }
      >
    >


  export type DocumentActivitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    documentId?: boolean
    userId?: boolean
    action?: boolean
    description?: boolean
    metadata?: boolean
    createdAt?: boolean
    document?: boolean | DocumentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["documentActivity"]>

  export type DocumentActivitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    documentId?: boolean
    userId?: boolean
    action?: boolean
    description?: boolean
    metadata?: boolean
    createdAt?: boolean
    document?: boolean | DocumentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["documentActivity"]>

  export type DocumentActivitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    documentId?: boolean
    userId?: boolean
    action?: boolean
    description?: boolean
    metadata?: boolean
    createdAt?: boolean
    document?: boolean | DocumentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["documentActivity"]>

  export type DocumentActivitySelectScalar = {
    id?: boolean
    documentId?: boolean
    userId?: boolean
    action?: boolean
    description?: boolean
    metadata?: boolean
    createdAt?: boolean
  }

  export type DocumentActivityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "documentId" | "userId" | "action" | "description" | "metadata" | "createdAt", ExtArgs["result"]["documentActivity"]>
  export type DocumentActivityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    document?: boolean | DocumentDefaultArgs<ExtArgs>
  }
  export type DocumentActivityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    document?: boolean | DocumentDefaultArgs<ExtArgs>
  }
  export type DocumentActivityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    document?: boolean | DocumentDefaultArgs<ExtArgs>
  }

  export type $DocumentActivityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DocumentActivity"
    objects: {
      document: Prisma.$DocumentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      documentId: string
      userId: string
      action: string
      description: string | null
      metadata: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["documentActivity"]>
    composites: {}
  }

  type DocumentActivityGetPayload<S extends boolean | null | undefined | DocumentActivityDefaultArgs> = $Result.GetResult<Prisma.$DocumentActivityPayload, S>

  type DocumentActivityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DocumentActivityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DocumentActivityCountAggregateInputType | true
    }

  export interface DocumentActivityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DocumentActivity'], meta: { name: 'DocumentActivity' } }
    /**
     * Find zero or one DocumentActivity that matches the filter.
     * @param {DocumentActivityFindUniqueArgs} args - Arguments to find a DocumentActivity
     * @example
     * // Get one DocumentActivity
     * const documentActivity = await prisma.documentActivity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DocumentActivityFindUniqueArgs>(args: SelectSubset<T, DocumentActivityFindUniqueArgs<ExtArgs>>): Prisma__DocumentActivityClient<$Result.GetResult<Prisma.$DocumentActivityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DocumentActivity that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DocumentActivityFindUniqueOrThrowArgs} args - Arguments to find a DocumentActivity
     * @example
     * // Get one DocumentActivity
     * const documentActivity = await prisma.documentActivity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DocumentActivityFindUniqueOrThrowArgs>(args: SelectSubset<T, DocumentActivityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DocumentActivityClient<$Result.GetResult<Prisma.$DocumentActivityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DocumentActivity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentActivityFindFirstArgs} args - Arguments to find a DocumentActivity
     * @example
     * // Get one DocumentActivity
     * const documentActivity = await prisma.documentActivity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DocumentActivityFindFirstArgs>(args?: SelectSubset<T, DocumentActivityFindFirstArgs<ExtArgs>>): Prisma__DocumentActivityClient<$Result.GetResult<Prisma.$DocumentActivityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DocumentActivity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentActivityFindFirstOrThrowArgs} args - Arguments to find a DocumentActivity
     * @example
     * // Get one DocumentActivity
     * const documentActivity = await prisma.documentActivity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DocumentActivityFindFirstOrThrowArgs>(args?: SelectSubset<T, DocumentActivityFindFirstOrThrowArgs<ExtArgs>>): Prisma__DocumentActivityClient<$Result.GetResult<Prisma.$DocumentActivityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DocumentActivities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentActivityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DocumentActivities
     * const documentActivities = await prisma.documentActivity.findMany()
     * 
     * // Get first 10 DocumentActivities
     * const documentActivities = await prisma.documentActivity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const documentActivityWithIdOnly = await prisma.documentActivity.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DocumentActivityFindManyArgs>(args?: SelectSubset<T, DocumentActivityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DocumentActivity.
     * @param {DocumentActivityCreateArgs} args - Arguments to create a DocumentActivity.
     * @example
     * // Create one DocumentActivity
     * const DocumentActivity = await prisma.documentActivity.create({
     *   data: {
     *     // ... data to create a DocumentActivity
     *   }
     * })
     * 
     */
    create<T extends DocumentActivityCreateArgs>(args: SelectSubset<T, DocumentActivityCreateArgs<ExtArgs>>): Prisma__DocumentActivityClient<$Result.GetResult<Prisma.$DocumentActivityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DocumentActivities.
     * @param {DocumentActivityCreateManyArgs} args - Arguments to create many DocumentActivities.
     * @example
     * // Create many DocumentActivities
     * const documentActivity = await prisma.documentActivity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DocumentActivityCreateManyArgs>(args?: SelectSubset<T, DocumentActivityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DocumentActivities and returns the data saved in the database.
     * @param {DocumentActivityCreateManyAndReturnArgs} args - Arguments to create many DocumentActivities.
     * @example
     * // Create many DocumentActivities
     * const documentActivity = await prisma.documentActivity.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DocumentActivities and only return the `id`
     * const documentActivityWithIdOnly = await prisma.documentActivity.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DocumentActivityCreateManyAndReturnArgs>(args?: SelectSubset<T, DocumentActivityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentActivityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DocumentActivity.
     * @param {DocumentActivityDeleteArgs} args - Arguments to delete one DocumentActivity.
     * @example
     * // Delete one DocumentActivity
     * const DocumentActivity = await prisma.documentActivity.delete({
     *   where: {
     *     // ... filter to delete one DocumentActivity
     *   }
     * })
     * 
     */
    delete<T extends DocumentActivityDeleteArgs>(args: SelectSubset<T, DocumentActivityDeleteArgs<ExtArgs>>): Prisma__DocumentActivityClient<$Result.GetResult<Prisma.$DocumentActivityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DocumentActivity.
     * @param {DocumentActivityUpdateArgs} args - Arguments to update one DocumentActivity.
     * @example
     * // Update one DocumentActivity
     * const documentActivity = await prisma.documentActivity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DocumentActivityUpdateArgs>(args: SelectSubset<T, DocumentActivityUpdateArgs<ExtArgs>>): Prisma__DocumentActivityClient<$Result.GetResult<Prisma.$DocumentActivityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DocumentActivities.
     * @param {DocumentActivityDeleteManyArgs} args - Arguments to filter DocumentActivities to delete.
     * @example
     * // Delete a few DocumentActivities
     * const { count } = await prisma.documentActivity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DocumentActivityDeleteManyArgs>(args?: SelectSubset<T, DocumentActivityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DocumentActivities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentActivityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DocumentActivities
     * const documentActivity = await prisma.documentActivity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DocumentActivityUpdateManyArgs>(args: SelectSubset<T, DocumentActivityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DocumentActivities and returns the data updated in the database.
     * @param {DocumentActivityUpdateManyAndReturnArgs} args - Arguments to update many DocumentActivities.
     * @example
     * // Update many DocumentActivities
     * const documentActivity = await prisma.documentActivity.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DocumentActivities and only return the `id`
     * const documentActivityWithIdOnly = await prisma.documentActivity.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DocumentActivityUpdateManyAndReturnArgs>(args: SelectSubset<T, DocumentActivityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentActivityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DocumentActivity.
     * @param {DocumentActivityUpsertArgs} args - Arguments to update or create a DocumentActivity.
     * @example
     * // Update or create a DocumentActivity
     * const documentActivity = await prisma.documentActivity.upsert({
     *   create: {
     *     // ... data to create a DocumentActivity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DocumentActivity we want to update
     *   }
     * })
     */
    upsert<T extends DocumentActivityUpsertArgs>(args: SelectSubset<T, DocumentActivityUpsertArgs<ExtArgs>>): Prisma__DocumentActivityClient<$Result.GetResult<Prisma.$DocumentActivityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DocumentActivities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentActivityCountArgs} args - Arguments to filter DocumentActivities to count.
     * @example
     * // Count the number of DocumentActivities
     * const count = await prisma.documentActivity.count({
     *   where: {
     *     // ... the filter for the DocumentActivities we want to count
     *   }
     * })
    **/
    count<T extends DocumentActivityCountArgs>(
      args?: Subset<T, DocumentActivityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DocumentActivityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DocumentActivity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentActivityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DocumentActivityAggregateArgs>(args: Subset<T, DocumentActivityAggregateArgs>): Prisma.PrismaPromise<GetDocumentActivityAggregateType<T>>

    /**
     * Group by DocumentActivity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentActivityGroupByArgs} args - Group by arguments.
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
      T extends DocumentActivityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DocumentActivityGroupByArgs['orderBy'] }
        : { orderBy?: DocumentActivityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DocumentActivityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocumentActivityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DocumentActivity model
   */
  readonly fields: DocumentActivityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DocumentActivity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DocumentActivityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    document<T extends DocumentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DocumentDefaultArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the DocumentActivity model
   */
  interface DocumentActivityFieldRefs {
    readonly id: FieldRef<"DocumentActivity", 'String'>
    readonly documentId: FieldRef<"DocumentActivity", 'String'>
    readonly userId: FieldRef<"DocumentActivity", 'String'>
    readonly action: FieldRef<"DocumentActivity", 'String'>
    readonly description: FieldRef<"DocumentActivity", 'String'>
    readonly metadata: FieldRef<"DocumentActivity", 'Json'>
    readonly createdAt: FieldRef<"DocumentActivity", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DocumentActivity findUnique
   */
  export type DocumentActivityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentActivity
     */
    select?: DocumentActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentActivity
     */
    omit?: DocumentActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentActivityInclude<ExtArgs> | null
    /**
     * Filter, which DocumentActivity to fetch.
     */
    where: DocumentActivityWhereUniqueInput
  }

  /**
   * DocumentActivity findUniqueOrThrow
   */
  export type DocumentActivityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentActivity
     */
    select?: DocumentActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentActivity
     */
    omit?: DocumentActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentActivityInclude<ExtArgs> | null
    /**
     * Filter, which DocumentActivity to fetch.
     */
    where: DocumentActivityWhereUniqueInput
  }

  /**
   * DocumentActivity findFirst
   */
  export type DocumentActivityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentActivity
     */
    select?: DocumentActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentActivity
     */
    omit?: DocumentActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentActivityInclude<ExtArgs> | null
    /**
     * Filter, which DocumentActivity to fetch.
     */
    where?: DocumentActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentActivities to fetch.
     */
    orderBy?: DocumentActivityOrderByWithRelationInput | DocumentActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DocumentActivities.
     */
    cursor?: DocumentActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DocumentActivities.
     */
    distinct?: DocumentActivityScalarFieldEnum | DocumentActivityScalarFieldEnum[]
  }

  /**
   * DocumentActivity findFirstOrThrow
   */
  export type DocumentActivityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentActivity
     */
    select?: DocumentActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentActivity
     */
    omit?: DocumentActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentActivityInclude<ExtArgs> | null
    /**
     * Filter, which DocumentActivity to fetch.
     */
    where?: DocumentActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentActivities to fetch.
     */
    orderBy?: DocumentActivityOrderByWithRelationInput | DocumentActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DocumentActivities.
     */
    cursor?: DocumentActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DocumentActivities.
     */
    distinct?: DocumentActivityScalarFieldEnum | DocumentActivityScalarFieldEnum[]
  }

  /**
   * DocumentActivity findMany
   */
  export type DocumentActivityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentActivity
     */
    select?: DocumentActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentActivity
     */
    omit?: DocumentActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentActivityInclude<ExtArgs> | null
    /**
     * Filter, which DocumentActivities to fetch.
     */
    where?: DocumentActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentActivities to fetch.
     */
    orderBy?: DocumentActivityOrderByWithRelationInput | DocumentActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DocumentActivities.
     */
    cursor?: DocumentActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentActivities.
     */
    skip?: number
    distinct?: DocumentActivityScalarFieldEnum | DocumentActivityScalarFieldEnum[]
  }

  /**
   * DocumentActivity create
   */
  export type DocumentActivityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentActivity
     */
    select?: DocumentActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentActivity
     */
    omit?: DocumentActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentActivityInclude<ExtArgs> | null
    /**
     * The data needed to create a DocumentActivity.
     */
    data: XOR<DocumentActivityCreateInput, DocumentActivityUncheckedCreateInput>
  }

  /**
   * DocumentActivity createMany
   */
  export type DocumentActivityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DocumentActivities.
     */
    data: DocumentActivityCreateManyInput | DocumentActivityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DocumentActivity createManyAndReturn
   */
  export type DocumentActivityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentActivity
     */
    select?: DocumentActivitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentActivity
     */
    omit?: DocumentActivityOmit<ExtArgs> | null
    /**
     * The data used to create many DocumentActivities.
     */
    data: DocumentActivityCreateManyInput | DocumentActivityCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentActivityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DocumentActivity update
   */
  export type DocumentActivityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentActivity
     */
    select?: DocumentActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentActivity
     */
    omit?: DocumentActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentActivityInclude<ExtArgs> | null
    /**
     * The data needed to update a DocumentActivity.
     */
    data: XOR<DocumentActivityUpdateInput, DocumentActivityUncheckedUpdateInput>
    /**
     * Choose, which DocumentActivity to update.
     */
    where: DocumentActivityWhereUniqueInput
  }

  /**
   * DocumentActivity updateMany
   */
  export type DocumentActivityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DocumentActivities.
     */
    data: XOR<DocumentActivityUpdateManyMutationInput, DocumentActivityUncheckedUpdateManyInput>
    /**
     * Filter which DocumentActivities to update
     */
    where?: DocumentActivityWhereInput
    /**
     * Limit how many DocumentActivities to update.
     */
    limit?: number
  }

  /**
   * DocumentActivity updateManyAndReturn
   */
  export type DocumentActivityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentActivity
     */
    select?: DocumentActivitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentActivity
     */
    omit?: DocumentActivityOmit<ExtArgs> | null
    /**
     * The data used to update DocumentActivities.
     */
    data: XOR<DocumentActivityUpdateManyMutationInput, DocumentActivityUncheckedUpdateManyInput>
    /**
     * Filter which DocumentActivities to update
     */
    where?: DocumentActivityWhereInput
    /**
     * Limit how many DocumentActivities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentActivityIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DocumentActivity upsert
   */
  export type DocumentActivityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentActivity
     */
    select?: DocumentActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentActivity
     */
    omit?: DocumentActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentActivityInclude<ExtArgs> | null
    /**
     * The filter to search for the DocumentActivity to update in case it exists.
     */
    where: DocumentActivityWhereUniqueInput
    /**
     * In case the DocumentActivity found by the `where` argument doesn't exist, create a new DocumentActivity with this data.
     */
    create: XOR<DocumentActivityCreateInput, DocumentActivityUncheckedCreateInput>
    /**
     * In case the DocumentActivity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DocumentActivityUpdateInput, DocumentActivityUncheckedUpdateInput>
  }

  /**
   * DocumentActivity delete
   */
  export type DocumentActivityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentActivity
     */
    select?: DocumentActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentActivity
     */
    omit?: DocumentActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentActivityInclude<ExtArgs> | null
    /**
     * Filter which DocumentActivity to delete.
     */
    where: DocumentActivityWhereUniqueInput
  }

  /**
   * DocumentActivity deleteMany
   */
  export type DocumentActivityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DocumentActivities to delete
     */
    where?: DocumentActivityWhereInput
    /**
     * Limit how many DocumentActivities to delete.
     */
    limit?: number
  }

  /**
   * DocumentActivity without action
   */
  export type DocumentActivityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentActivity
     */
    select?: DocumentActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentActivity
     */
    omit?: DocumentActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentActivityInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    avatar: 'avatar',
    name: 'name',
    email: 'email',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const RoomScalarFieldEnum: {
    id: 'id',
    name: 'name',
    code: 'code',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    createdById: 'createdById',
    documentId: 'documentId',
    shareLink: 'shareLink',
    shareLinkExpiresAt: 'shareLinkExpiresAt',
    allowedEmails: 'allowedEmails',
    isPublic: 'isPublic'
  };

  export type RoomScalarFieldEnum = (typeof RoomScalarFieldEnum)[keyof typeof RoomScalarFieldEnum]


  export const RoomUserScalarFieldEnum: {
    id: 'id',
    roomId: 'roomId',
    userId: 'userId',
    role: 'role',
    joinedAt: 'joinedAt',
    lastActive: 'lastActive'
  };

  export type RoomUserScalarFieldEnum = (typeof RoomUserScalarFieldEnum)[keyof typeof RoomUserScalarFieldEnum]


  export const DocumentScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    userId: 'userId',
    isPublic: 'isPublic',
    tags: 'tags',
    allowComments: 'allowComments',
    allowSuggestions: 'allowSuggestions',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    lastEditedAt: 'lastEditedAt'
  };

  export type DocumentScalarFieldEnum = (typeof DocumentScalarFieldEnum)[keyof typeof DocumentScalarFieldEnum]


  export const DocumentImageScalarFieldEnum: {
    id: 'id',
    documentId: 'documentId',
    fileName: 'fileName',
    originalName: 'originalName',
    fileUrl: 'fileUrl',
    fileSize: 'fileSize',
    mimeType: 'mimeType',
    width: 'width',
    height: 'height',
    createdAt: 'createdAt'
  };

  export type DocumentImageScalarFieldEnum = (typeof DocumentImageScalarFieldEnum)[keyof typeof DocumentImageScalarFieldEnum]


  export const DocumentVersionScalarFieldEnum: {
    id: 'id',
    documentId: 'documentId',
    content: 'content',
    versionNumber: 'versionNumber',
    changeDescription: 'changeDescription',
    createdAt: 'createdAt',
    createdBy: 'createdBy'
  };

  export type DocumentVersionScalarFieldEnum = (typeof DocumentVersionScalarFieldEnum)[keyof typeof DocumentVersionScalarFieldEnum]


  export const DocumentCollaboratorsScalarFieldEnum: {
    id: 'id',
    documentId: 'documentId',
    userId: 'userId',
    role: 'role',
    permissions: 'permissions',
    invitedAt: 'invitedAt',
    acceptedAt: 'acceptedAt'
  };

  export type DocumentCollaboratorsScalarFieldEnum = (typeof DocumentCollaboratorsScalarFieldEnum)[keyof typeof DocumentCollaboratorsScalarFieldEnum]


  export const DocumentCommentScalarFieldEnum: {
    id: 'id',
    documentId: 'documentId',
    userId: 'userId',
    content: 'content',
    lineNumber: 'lineNumber',
    isResolved: 'isResolved',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DocumentCommentScalarFieldEnum = (typeof DocumentCommentScalarFieldEnum)[keyof typeof DocumentCommentScalarFieldEnum]


  export const DocumentShareScalarFieldEnum: {
    id: 'id',
    documentId: 'documentId',
    shareToken: 'shareToken',
    permissions: 'permissions',
    expiresAt: 'expiresAt',
    maxUses: 'maxUses',
    useCount: 'useCount',
    createdAt: 'createdAt',
    createdBy: 'createdBy'
  };

  export type DocumentShareScalarFieldEnum = (typeof DocumentShareScalarFieldEnum)[keyof typeof DocumentShareScalarFieldEnum]


  export const DocumentTemplateScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    content: 'content',
    category: 'category',
    isPublic: 'isPublic',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DocumentTemplateScalarFieldEnum = (typeof DocumentTemplateScalarFieldEnum)[keyof typeof DocumentTemplateScalarFieldEnum]


  export const UserSettingsScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    editorTheme: 'editorTheme',
    fontSize: 'fontSize',
    autoSave: 'autoSave',
    autoSaveInterval: 'autoSaveInterval',
    showLineNumbers: 'showLineNumbers',
    wordWrap: 'wordWrap',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserSettingsScalarFieldEnum = (typeof UserSettingsScalarFieldEnum)[keyof typeof UserSettingsScalarFieldEnum]


  export const DocumentActivityScalarFieldEnum: {
    id: 'id',
    documentId: 'documentId',
    userId: 'userId',
    action: 'action',
    description: 'description',
    metadata: 'metadata',
    createdAt: 'createdAt'
  };

  export type DocumentActivityScalarFieldEnum = (typeof DocumentActivityScalarFieldEnum)[keyof typeof DocumentActivityScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    avatar?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    documents?: DocumentListRelationFilter
    collaborations?: DocumentCollaboratorsListRelationFilter
    comments?: DocumentCommentListRelationFilter
    settings?: XOR<UserSettingsNullableScalarRelationFilter, UserSettingsWhereInput> | null
    rooms?: RoomUserListRelationFilter
    createdRooms?: RoomListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    avatar?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    documents?: DocumentOrderByRelationAggregateInput
    collaborations?: DocumentCollaboratorsOrderByRelationAggregateInput
    comments?: DocumentCommentOrderByRelationAggregateInput
    settings?: UserSettingsOrderByWithRelationInput
    rooms?: RoomUserOrderByRelationAggregateInput
    createdRooms?: RoomOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    avatar?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    documents?: DocumentListRelationFilter
    collaborations?: DocumentCollaboratorsListRelationFilter
    comments?: DocumentCommentListRelationFilter
    settings?: XOR<UserSettingsNullableScalarRelationFilter, UserSettingsWhereInput> | null
    rooms?: RoomUserListRelationFilter
    createdRooms?: RoomListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    avatar?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    avatar?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type RoomWhereInput = {
    AND?: RoomWhereInput | RoomWhereInput[]
    OR?: RoomWhereInput[]
    NOT?: RoomWhereInput | RoomWhereInput[]
    id?: StringFilter<"Room"> | string
    name?: StringFilter<"Room"> | string
    code?: StringFilter<"Room"> | string
    isActive?: BoolFilter<"Room"> | boolean
    createdAt?: DateTimeFilter<"Room"> | Date | string
    updatedAt?: DateTimeFilter<"Room"> | Date | string
    createdById?: StringFilter<"Room"> | string
    documentId?: StringNullableFilter<"Room"> | string | null
    shareLink?: StringNullableFilter<"Room"> | string | null
    shareLinkExpiresAt?: DateTimeNullableFilter<"Room"> | Date | string | null
    allowedEmails?: StringNullableListFilter<"Room">
    isPublic?: BoolFilter<"Room"> | boolean
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    document?: XOR<DocumentNullableScalarRelationFilter, DocumentWhereInput> | null
    participants?: RoomUserListRelationFilter
  }

  export type RoomOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
    documentId?: SortOrderInput | SortOrder
    shareLink?: SortOrderInput | SortOrder
    shareLinkExpiresAt?: SortOrderInput | SortOrder
    allowedEmails?: SortOrder
    isPublic?: SortOrder
    createdBy?: UserOrderByWithRelationInput
    document?: DocumentOrderByWithRelationInput
    participants?: RoomUserOrderByRelationAggregateInput
  }

  export type RoomWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    shareLink?: string
    AND?: RoomWhereInput | RoomWhereInput[]
    OR?: RoomWhereInput[]
    NOT?: RoomWhereInput | RoomWhereInput[]
    name?: StringFilter<"Room"> | string
    isActive?: BoolFilter<"Room"> | boolean
    createdAt?: DateTimeFilter<"Room"> | Date | string
    updatedAt?: DateTimeFilter<"Room"> | Date | string
    createdById?: StringFilter<"Room"> | string
    documentId?: StringNullableFilter<"Room"> | string | null
    shareLinkExpiresAt?: DateTimeNullableFilter<"Room"> | Date | string | null
    allowedEmails?: StringNullableListFilter<"Room">
    isPublic?: BoolFilter<"Room"> | boolean
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    document?: XOR<DocumentNullableScalarRelationFilter, DocumentWhereInput> | null
    participants?: RoomUserListRelationFilter
  }, "id" | "code" | "shareLink">

  export type RoomOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
    documentId?: SortOrderInput | SortOrder
    shareLink?: SortOrderInput | SortOrder
    shareLinkExpiresAt?: SortOrderInput | SortOrder
    allowedEmails?: SortOrder
    isPublic?: SortOrder
    _count?: RoomCountOrderByAggregateInput
    _max?: RoomMaxOrderByAggregateInput
    _min?: RoomMinOrderByAggregateInput
  }

  export type RoomScalarWhereWithAggregatesInput = {
    AND?: RoomScalarWhereWithAggregatesInput | RoomScalarWhereWithAggregatesInput[]
    OR?: RoomScalarWhereWithAggregatesInput[]
    NOT?: RoomScalarWhereWithAggregatesInput | RoomScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Room"> | string
    name?: StringWithAggregatesFilter<"Room"> | string
    code?: StringWithAggregatesFilter<"Room"> | string
    isActive?: BoolWithAggregatesFilter<"Room"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Room"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Room"> | Date | string
    createdById?: StringWithAggregatesFilter<"Room"> | string
    documentId?: StringNullableWithAggregatesFilter<"Room"> | string | null
    shareLink?: StringNullableWithAggregatesFilter<"Room"> | string | null
    shareLinkExpiresAt?: DateTimeNullableWithAggregatesFilter<"Room"> | Date | string | null
    allowedEmails?: StringNullableListFilter<"Room">
    isPublic?: BoolWithAggregatesFilter<"Room"> | boolean
  }

  export type RoomUserWhereInput = {
    AND?: RoomUserWhereInput | RoomUserWhereInput[]
    OR?: RoomUserWhereInput[]
    NOT?: RoomUserWhereInput | RoomUserWhereInput[]
    id?: StringFilter<"RoomUser"> | string
    roomId?: StringFilter<"RoomUser"> | string
    userId?: StringFilter<"RoomUser"> | string
    role?: StringFilter<"RoomUser"> | string
    joinedAt?: DateTimeFilter<"RoomUser"> | Date | string
    lastActive?: DateTimeFilter<"RoomUser"> | Date | string
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type RoomUserOrderByWithRelationInput = {
    id?: SortOrder
    roomId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
    lastActive?: SortOrder
    room?: RoomOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type RoomUserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    roomId_userId?: RoomUserRoomIdUserIdCompoundUniqueInput
    AND?: RoomUserWhereInput | RoomUserWhereInput[]
    OR?: RoomUserWhereInput[]
    NOT?: RoomUserWhereInput | RoomUserWhereInput[]
    roomId?: StringFilter<"RoomUser"> | string
    userId?: StringFilter<"RoomUser"> | string
    role?: StringFilter<"RoomUser"> | string
    joinedAt?: DateTimeFilter<"RoomUser"> | Date | string
    lastActive?: DateTimeFilter<"RoomUser"> | Date | string
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "roomId_userId">

  export type RoomUserOrderByWithAggregationInput = {
    id?: SortOrder
    roomId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
    lastActive?: SortOrder
    _count?: RoomUserCountOrderByAggregateInput
    _max?: RoomUserMaxOrderByAggregateInput
    _min?: RoomUserMinOrderByAggregateInput
  }

  export type RoomUserScalarWhereWithAggregatesInput = {
    AND?: RoomUserScalarWhereWithAggregatesInput | RoomUserScalarWhereWithAggregatesInput[]
    OR?: RoomUserScalarWhereWithAggregatesInput[]
    NOT?: RoomUserScalarWhereWithAggregatesInput | RoomUserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RoomUser"> | string
    roomId?: StringWithAggregatesFilter<"RoomUser"> | string
    userId?: StringWithAggregatesFilter<"RoomUser"> | string
    role?: StringWithAggregatesFilter<"RoomUser"> | string
    joinedAt?: DateTimeWithAggregatesFilter<"RoomUser"> | Date | string
    lastActive?: DateTimeWithAggregatesFilter<"RoomUser"> | Date | string
  }

  export type DocumentWhereInput = {
    AND?: DocumentWhereInput | DocumentWhereInput[]
    OR?: DocumentWhereInput[]
    NOT?: DocumentWhereInput | DocumentWhereInput[]
    id?: StringFilter<"Document"> | string
    title?: StringFilter<"Document"> | string
    content?: StringFilter<"Document"> | string
    userId?: StringFilter<"Document"> | string
    isPublic?: BoolFilter<"Document"> | boolean
    tags?: StringNullableListFilter<"Document">
    allowComments?: BoolFilter<"Document"> | boolean
    allowSuggestions?: BoolFilter<"Document"> | boolean
    createdAt?: DateTimeFilter<"Document"> | Date | string
    updatedAt?: DateTimeFilter<"Document"> | Date | string
    lastEditedAt?: DateTimeFilter<"Document"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    images?: DocumentImageListRelationFilter
    versions?: DocumentVersionListRelationFilter
    collaborators?: DocumentCollaboratorsListRelationFilter
    comments?: DocumentCommentListRelationFilter
    shares?: DocumentShareListRelationFilter
    activities?: DocumentActivityListRelationFilter
    Room?: RoomListRelationFilter
  }

  export type DocumentOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    userId?: SortOrder
    isPublic?: SortOrder
    tags?: SortOrder
    allowComments?: SortOrder
    allowSuggestions?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastEditedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    images?: DocumentImageOrderByRelationAggregateInput
    versions?: DocumentVersionOrderByRelationAggregateInput
    collaborators?: DocumentCollaboratorsOrderByRelationAggregateInput
    comments?: DocumentCommentOrderByRelationAggregateInput
    shares?: DocumentShareOrderByRelationAggregateInput
    activities?: DocumentActivityOrderByRelationAggregateInput
    Room?: RoomOrderByRelationAggregateInput
  }

  export type DocumentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DocumentWhereInput | DocumentWhereInput[]
    OR?: DocumentWhereInput[]
    NOT?: DocumentWhereInput | DocumentWhereInput[]
    title?: StringFilter<"Document"> | string
    content?: StringFilter<"Document"> | string
    userId?: StringFilter<"Document"> | string
    isPublic?: BoolFilter<"Document"> | boolean
    tags?: StringNullableListFilter<"Document">
    allowComments?: BoolFilter<"Document"> | boolean
    allowSuggestions?: BoolFilter<"Document"> | boolean
    createdAt?: DateTimeFilter<"Document"> | Date | string
    updatedAt?: DateTimeFilter<"Document"> | Date | string
    lastEditedAt?: DateTimeFilter<"Document"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    images?: DocumentImageListRelationFilter
    versions?: DocumentVersionListRelationFilter
    collaborators?: DocumentCollaboratorsListRelationFilter
    comments?: DocumentCommentListRelationFilter
    shares?: DocumentShareListRelationFilter
    activities?: DocumentActivityListRelationFilter
    Room?: RoomListRelationFilter
  }, "id">

  export type DocumentOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    userId?: SortOrder
    isPublic?: SortOrder
    tags?: SortOrder
    allowComments?: SortOrder
    allowSuggestions?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastEditedAt?: SortOrder
    _count?: DocumentCountOrderByAggregateInput
    _max?: DocumentMaxOrderByAggregateInput
    _min?: DocumentMinOrderByAggregateInput
  }

  export type DocumentScalarWhereWithAggregatesInput = {
    AND?: DocumentScalarWhereWithAggregatesInput | DocumentScalarWhereWithAggregatesInput[]
    OR?: DocumentScalarWhereWithAggregatesInput[]
    NOT?: DocumentScalarWhereWithAggregatesInput | DocumentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Document"> | string
    title?: StringWithAggregatesFilter<"Document"> | string
    content?: StringWithAggregatesFilter<"Document"> | string
    userId?: StringWithAggregatesFilter<"Document"> | string
    isPublic?: BoolWithAggregatesFilter<"Document"> | boolean
    tags?: StringNullableListFilter<"Document">
    allowComments?: BoolWithAggregatesFilter<"Document"> | boolean
    allowSuggestions?: BoolWithAggregatesFilter<"Document"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Document"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Document"> | Date | string
    lastEditedAt?: DateTimeWithAggregatesFilter<"Document"> | Date | string
  }

  export type DocumentImageWhereInput = {
    AND?: DocumentImageWhereInput | DocumentImageWhereInput[]
    OR?: DocumentImageWhereInput[]
    NOT?: DocumentImageWhereInput | DocumentImageWhereInput[]
    id?: StringFilter<"DocumentImage"> | string
    documentId?: StringFilter<"DocumentImage"> | string
    fileName?: StringFilter<"DocumentImage"> | string
    originalName?: StringFilter<"DocumentImage"> | string
    fileUrl?: StringFilter<"DocumentImage"> | string
    fileSize?: IntFilter<"DocumentImage"> | number
    mimeType?: StringFilter<"DocumentImage"> | string
    width?: IntNullableFilter<"DocumentImage"> | number | null
    height?: IntNullableFilter<"DocumentImage"> | number | null
    createdAt?: DateTimeFilter<"DocumentImage"> | Date | string
    document?: XOR<DocumentScalarRelationFilter, DocumentWhereInput>
  }

  export type DocumentImageOrderByWithRelationInput = {
    id?: SortOrder
    documentId?: SortOrder
    fileName?: SortOrder
    originalName?: SortOrder
    fileUrl?: SortOrder
    fileSize?: SortOrder
    mimeType?: SortOrder
    width?: SortOrderInput | SortOrder
    height?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    document?: DocumentOrderByWithRelationInput
  }

  export type DocumentImageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DocumentImageWhereInput | DocumentImageWhereInput[]
    OR?: DocumentImageWhereInput[]
    NOT?: DocumentImageWhereInput | DocumentImageWhereInput[]
    documentId?: StringFilter<"DocumentImage"> | string
    fileName?: StringFilter<"DocumentImage"> | string
    originalName?: StringFilter<"DocumentImage"> | string
    fileUrl?: StringFilter<"DocumentImage"> | string
    fileSize?: IntFilter<"DocumentImage"> | number
    mimeType?: StringFilter<"DocumentImage"> | string
    width?: IntNullableFilter<"DocumentImage"> | number | null
    height?: IntNullableFilter<"DocumentImage"> | number | null
    createdAt?: DateTimeFilter<"DocumentImage"> | Date | string
    document?: XOR<DocumentScalarRelationFilter, DocumentWhereInput>
  }, "id">

  export type DocumentImageOrderByWithAggregationInput = {
    id?: SortOrder
    documentId?: SortOrder
    fileName?: SortOrder
    originalName?: SortOrder
    fileUrl?: SortOrder
    fileSize?: SortOrder
    mimeType?: SortOrder
    width?: SortOrderInput | SortOrder
    height?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: DocumentImageCountOrderByAggregateInput
    _avg?: DocumentImageAvgOrderByAggregateInput
    _max?: DocumentImageMaxOrderByAggregateInput
    _min?: DocumentImageMinOrderByAggregateInput
    _sum?: DocumentImageSumOrderByAggregateInput
  }

  export type DocumentImageScalarWhereWithAggregatesInput = {
    AND?: DocumentImageScalarWhereWithAggregatesInput | DocumentImageScalarWhereWithAggregatesInput[]
    OR?: DocumentImageScalarWhereWithAggregatesInput[]
    NOT?: DocumentImageScalarWhereWithAggregatesInput | DocumentImageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DocumentImage"> | string
    documentId?: StringWithAggregatesFilter<"DocumentImage"> | string
    fileName?: StringWithAggregatesFilter<"DocumentImage"> | string
    originalName?: StringWithAggregatesFilter<"DocumentImage"> | string
    fileUrl?: StringWithAggregatesFilter<"DocumentImage"> | string
    fileSize?: IntWithAggregatesFilter<"DocumentImage"> | number
    mimeType?: StringWithAggregatesFilter<"DocumentImage"> | string
    width?: IntNullableWithAggregatesFilter<"DocumentImage"> | number | null
    height?: IntNullableWithAggregatesFilter<"DocumentImage"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"DocumentImage"> | Date | string
  }

  export type DocumentVersionWhereInput = {
    AND?: DocumentVersionWhereInput | DocumentVersionWhereInput[]
    OR?: DocumentVersionWhereInput[]
    NOT?: DocumentVersionWhereInput | DocumentVersionWhereInput[]
    id?: StringFilter<"DocumentVersion"> | string
    documentId?: StringFilter<"DocumentVersion"> | string
    content?: StringFilter<"DocumentVersion"> | string
    versionNumber?: IntFilter<"DocumentVersion"> | number
    changeDescription?: StringNullableFilter<"DocumentVersion"> | string | null
    createdAt?: DateTimeFilter<"DocumentVersion"> | Date | string
    createdBy?: StringFilter<"DocumentVersion"> | string
    document?: XOR<DocumentScalarRelationFilter, DocumentWhereInput>
  }

  export type DocumentVersionOrderByWithRelationInput = {
    id?: SortOrder
    documentId?: SortOrder
    content?: SortOrder
    versionNumber?: SortOrder
    changeDescription?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    document?: DocumentOrderByWithRelationInput
  }

  export type DocumentVersionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DocumentVersionWhereInput | DocumentVersionWhereInput[]
    OR?: DocumentVersionWhereInput[]
    NOT?: DocumentVersionWhereInput | DocumentVersionWhereInput[]
    documentId?: StringFilter<"DocumentVersion"> | string
    content?: StringFilter<"DocumentVersion"> | string
    versionNumber?: IntFilter<"DocumentVersion"> | number
    changeDescription?: StringNullableFilter<"DocumentVersion"> | string | null
    createdAt?: DateTimeFilter<"DocumentVersion"> | Date | string
    createdBy?: StringFilter<"DocumentVersion"> | string
    document?: XOR<DocumentScalarRelationFilter, DocumentWhereInput>
  }, "id">

  export type DocumentVersionOrderByWithAggregationInput = {
    id?: SortOrder
    documentId?: SortOrder
    content?: SortOrder
    versionNumber?: SortOrder
    changeDescription?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    _count?: DocumentVersionCountOrderByAggregateInput
    _avg?: DocumentVersionAvgOrderByAggregateInput
    _max?: DocumentVersionMaxOrderByAggregateInput
    _min?: DocumentVersionMinOrderByAggregateInput
    _sum?: DocumentVersionSumOrderByAggregateInput
  }

  export type DocumentVersionScalarWhereWithAggregatesInput = {
    AND?: DocumentVersionScalarWhereWithAggregatesInput | DocumentVersionScalarWhereWithAggregatesInput[]
    OR?: DocumentVersionScalarWhereWithAggregatesInput[]
    NOT?: DocumentVersionScalarWhereWithAggregatesInput | DocumentVersionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DocumentVersion"> | string
    documentId?: StringWithAggregatesFilter<"DocumentVersion"> | string
    content?: StringWithAggregatesFilter<"DocumentVersion"> | string
    versionNumber?: IntWithAggregatesFilter<"DocumentVersion"> | number
    changeDescription?: StringNullableWithAggregatesFilter<"DocumentVersion"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"DocumentVersion"> | Date | string
    createdBy?: StringWithAggregatesFilter<"DocumentVersion"> | string
  }

  export type DocumentCollaboratorsWhereInput = {
    AND?: DocumentCollaboratorsWhereInput | DocumentCollaboratorsWhereInput[]
    OR?: DocumentCollaboratorsWhereInput[]
    NOT?: DocumentCollaboratorsWhereInput | DocumentCollaboratorsWhereInput[]
    id?: StringFilter<"DocumentCollaborators"> | string
    documentId?: StringFilter<"DocumentCollaborators"> | string
    userId?: StringFilter<"DocumentCollaborators"> | string
    role?: StringFilter<"DocumentCollaborators"> | string
    permissions?: StringNullableListFilter<"DocumentCollaborators">
    invitedAt?: DateTimeFilter<"DocumentCollaborators"> | Date | string
    acceptedAt?: DateTimeNullableFilter<"DocumentCollaborators"> | Date | string | null
    document?: XOR<DocumentScalarRelationFilter, DocumentWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type DocumentCollaboratorsOrderByWithRelationInput = {
    id?: SortOrder
    documentId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    permissions?: SortOrder
    invitedAt?: SortOrder
    acceptedAt?: SortOrderInput | SortOrder
    document?: DocumentOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type DocumentCollaboratorsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    documentId_userId?: DocumentCollaboratorsDocumentIdUserIdCompoundUniqueInput
    AND?: DocumentCollaboratorsWhereInput | DocumentCollaboratorsWhereInput[]
    OR?: DocumentCollaboratorsWhereInput[]
    NOT?: DocumentCollaboratorsWhereInput | DocumentCollaboratorsWhereInput[]
    documentId?: StringFilter<"DocumentCollaborators"> | string
    userId?: StringFilter<"DocumentCollaborators"> | string
    role?: StringFilter<"DocumentCollaborators"> | string
    permissions?: StringNullableListFilter<"DocumentCollaborators">
    invitedAt?: DateTimeFilter<"DocumentCollaborators"> | Date | string
    acceptedAt?: DateTimeNullableFilter<"DocumentCollaborators"> | Date | string | null
    document?: XOR<DocumentScalarRelationFilter, DocumentWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "documentId_userId">

  export type DocumentCollaboratorsOrderByWithAggregationInput = {
    id?: SortOrder
    documentId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    permissions?: SortOrder
    invitedAt?: SortOrder
    acceptedAt?: SortOrderInput | SortOrder
    _count?: DocumentCollaboratorsCountOrderByAggregateInput
    _max?: DocumentCollaboratorsMaxOrderByAggregateInput
    _min?: DocumentCollaboratorsMinOrderByAggregateInput
  }

  export type DocumentCollaboratorsScalarWhereWithAggregatesInput = {
    AND?: DocumentCollaboratorsScalarWhereWithAggregatesInput | DocumentCollaboratorsScalarWhereWithAggregatesInput[]
    OR?: DocumentCollaboratorsScalarWhereWithAggregatesInput[]
    NOT?: DocumentCollaboratorsScalarWhereWithAggregatesInput | DocumentCollaboratorsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DocumentCollaborators"> | string
    documentId?: StringWithAggregatesFilter<"DocumentCollaborators"> | string
    userId?: StringWithAggregatesFilter<"DocumentCollaborators"> | string
    role?: StringWithAggregatesFilter<"DocumentCollaborators"> | string
    permissions?: StringNullableListFilter<"DocumentCollaborators">
    invitedAt?: DateTimeWithAggregatesFilter<"DocumentCollaborators"> | Date | string
    acceptedAt?: DateTimeNullableWithAggregatesFilter<"DocumentCollaborators"> | Date | string | null
  }

  export type DocumentCommentWhereInput = {
    AND?: DocumentCommentWhereInput | DocumentCommentWhereInput[]
    OR?: DocumentCommentWhereInput[]
    NOT?: DocumentCommentWhereInput | DocumentCommentWhereInput[]
    id?: StringFilter<"DocumentComment"> | string
    documentId?: StringFilter<"DocumentComment"> | string
    userId?: StringFilter<"DocumentComment"> | string
    content?: StringFilter<"DocumentComment"> | string
    lineNumber?: IntNullableFilter<"DocumentComment"> | number | null
    isResolved?: BoolFilter<"DocumentComment"> | boolean
    createdAt?: DateTimeFilter<"DocumentComment"> | Date | string
    updatedAt?: DateTimeFilter<"DocumentComment"> | Date | string
    document?: XOR<DocumentScalarRelationFilter, DocumentWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type DocumentCommentOrderByWithRelationInput = {
    id?: SortOrder
    documentId?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    lineNumber?: SortOrderInput | SortOrder
    isResolved?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    document?: DocumentOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type DocumentCommentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DocumentCommentWhereInput | DocumentCommentWhereInput[]
    OR?: DocumentCommentWhereInput[]
    NOT?: DocumentCommentWhereInput | DocumentCommentWhereInput[]
    documentId?: StringFilter<"DocumentComment"> | string
    userId?: StringFilter<"DocumentComment"> | string
    content?: StringFilter<"DocumentComment"> | string
    lineNumber?: IntNullableFilter<"DocumentComment"> | number | null
    isResolved?: BoolFilter<"DocumentComment"> | boolean
    createdAt?: DateTimeFilter<"DocumentComment"> | Date | string
    updatedAt?: DateTimeFilter<"DocumentComment"> | Date | string
    document?: XOR<DocumentScalarRelationFilter, DocumentWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type DocumentCommentOrderByWithAggregationInput = {
    id?: SortOrder
    documentId?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    lineNumber?: SortOrderInput | SortOrder
    isResolved?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DocumentCommentCountOrderByAggregateInput
    _avg?: DocumentCommentAvgOrderByAggregateInput
    _max?: DocumentCommentMaxOrderByAggregateInput
    _min?: DocumentCommentMinOrderByAggregateInput
    _sum?: DocumentCommentSumOrderByAggregateInput
  }

  export type DocumentCommentScalarWhereWithAggregatesInput = {
    AND?: DocumentCommentScalarWhereWithAggregatesInput | DocumentCommentScalarWhereWithAggregatesInput[]
    OR?: DocumentCommentScalarWhereWithAggregatesInput[]
    NOT?: DocumentCommentScalarWhereWithAggregatesInput | DocumentCommentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DocumentComment"> | string
    documentId?: StringWithAggregatesFilter<"DocumentComment"> | string
    userId?: StringWithAggregatesFilter<"DocumentComment"> | string
    content?: StringWithAggregatesFilter<"DocumentComment"> | string
    lineNumber?: IntNullableWithAggregatesFilter<"DocumentComment"> | number | null
    isResolved?: BoolWithAggregatesFilter<"DocumentComment"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"DocumentComment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DocumentComment"> | Date | string
  }

  export type DocumentShareWhereInput = {
    AND?: DocumentShareWhereInput | DocumentShareWhereInput[]
    OR?: DocumentShareWhereInput[]
    NOT?: DocumentShareWhereInput | DocumentShareWhereInput[]
    id?: StringFilter<"DocumentShare"> | string
    documentId?: StringFilter<"DocumentShare"> | string
    shareToken?: StringFilter<"DocumentShare"> | string
    permissions?: StringNullableListFilter<"DocumentShare">
    expiresAt?: DateTimeNullableFilter<"DocumentShare"> | Date | string | null
    maxUses?: IntNullableFilter<"DocumentShare"> | number | null
    useCount?: IntFilter<"DocumentShare"> | number
    createdAt?: DateTimeFilter<"DocumentShare"> | Date | string
    createdBy?: StringFilter<"DocumentShare"> | string
    document?: XOR<DocumentScalarRelationFilter, DocumentWhereInput>
  }

  export type DocumentShareOrderByWithRelationInput = {
    id?: SortOrder
    documentId?: SortOrder
    shareToken?: SortOrder
    permissions?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    maxUses?: SortOrderInput | SortOrder
    useCount?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    document?: DocumentOrderByWithRelationInput
  }

  export type DocumentShareWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    shareToken?: string
    AND?: DocumentShareWhereInput | DocumentShareWhereInput[]
    OR?: DocumentShareWhereInput[]
    NOT?: DocumentShareWhereInput | DocumentShareWhereInput[]
    documentId?: StringFilter<"DocumentShare"> | string
    permissions?: StringNullableListFilter<"DocumentShare">
    expiresAt?: DateTimeNullableFilter<"DocumentShare"> | Date | string | null
    maxUses?: IntNullableFilter<"DocumentShare"> | number | null
    useCount?: IntFilter<"DocumentShare"> | number
    createdAt?: DateTimeFilter<"DocumentShare"> | Date | string
    createdBy?: StringFilter<"DocumentShare"> | string
    document?: XOR<DocumentScalarRelationFilter, DocumentWhereInput>
  }, "id" | "shareToken">

  export type DocumentShareOrderByWithAggregationInput = {
    id?: SortOrder
    documentId?: SortOrder
    shareToken?: SortOrder
    permissions?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    maxUses?: SortOrderInput | SortOrder
    useCount?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    _count?: DocumentShareCountOrderByAggregateInput
    _avg?: DocumentShareAvgOrderByAggregateInput
    _max?: DocumentShareMaxOrderByAggregateInput
    _min?: DocumentShareMinOrderByAggregateInput
    _sum?: DocumentShareSumOrderByAggregateInput
  }

  export type DocumentShareScalarWhereWithAggregatesInput = {
    AND?: DocumentShareScalarWhereWithAggregatesInput | DocumentShareScalarWhereWithAggregatesInput[]
    OR?: DocumentShareScalarWhereWithAggregatesInput[]
    NOT?: DocumentShareScalarWhereWithAggregatesInput | DocumentShareScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DocumentShare"> | string
    documentId?: StringWithAggregatesFilter<"DocumentShare"> | string
    shareToken?: StringWithAggregatesFilter<"DocumentShare"> | string
    permissions?: StringNullableListFilter<"DocumentShare">
    expiresAt?: DateTimeNullableWithAggregatesFilter<"DocumentShare"> | Date | string | null
    maxUses?: IntNullableWithAggregatesFilter<"DocumentShare"> | number | null
    useCount?: IntWithAggregatesFilter<"DocumentShare"> | number
    createdAt?: DateTimeWithAggregatesFilter<"DocumentShare"> | Date | string
    createdBy?: StringWithAggregatesFilter<"DocumentShare"> | string
  }

  export type DocumentTemplateWhereInput = {
    AND?: DocumentTemplateWhereInput | DocumentTemplateWhereInput[]
    OR?: DocumentTemplateWhereInput[]
    NOT?: DocumentTemplateWhereInput | DocumentTemplateWhereInput[]
    id?: StringFilter<"DocumentTemplate"> | string
    name?: StringFilter<"DocumentTemplate"> | string
    description?: StringNullableFilter<"DocumentTemplate"> | string | null
    content?: StringFilter<"DocumentTemplate"> | string
    category?: StringNullableFilter<"DocumentTemplate"> | string | null
    isPublic?: BoolFilter<"DocumentTemplate"> | boolean
    userId?: StringNullableFilter<"DocumentTemplate"> | string | null
    createdAt?: DateTimeFilter<"DocumentTemplate"> | Date | string
    updatedAt?: DateTimeFilter<"DocumentTemplate"> | Date | string
  }

  export type DocumentTemplateOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    content?: SortOrder
    category?: SortOrderInput | SortOrder
    isPublic?: SortOrder
    userId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DocumentTemplateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DocumentTemplateWhereInput | DocumentTemplateWhereInput[]
    OR?: DocumentTemplateWhereInput[]
    NOT?: DocumentTemplateWhereInput | DocumentTemplateWhereInput[]
    name?: StringFilter<"DocumentTemplate"> | string
    description?: StringNullableFilter<"DocumentTemplate"> | string | null
    content?: StringFilter<"DocumentTemplate"> | string
    category?: StringNullableFilter<"DocumentTemplate"> | string | null
    isPublic?: BoolFilter<"DocumentTemplate"> | boolean
    userId?: StringNullableFilter<"DocumentTemplate"> | string | null
    createdAt?: DateTimeFilter<"DocumentTemplate"> | Date | string
    updatedAt?: DateTimeFilter<"DocumentTemplate"> | Date | string
  }, "id">

  export type DocumentTemplateOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    content?: SortOrder
    category?: SortOrderInput | SortOrder
    isPublic?: SortOrder
    userId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DocumentTemplateCountOrderByAggregateInput
    _max?: DocumentTemplateMaxOrderByAggregateInput
    _min?: DocumentTemplateMinOrderByAggregateInput
  }

  export type DocumentTemplateScalarWhereWithAggregatesInput = {
    AND?: DocumentTemplateScalarWhereWithAggregatesInput | DocumentTemplateScalarWhereWithAggregatesInput[]
    OR?: DocumentTemplateScalarWhereWithAggregatesInput[]
    NOT?: DocumentTemplateScalarWhereWithAggregatesInput | DocumentTemplateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DocumentTemplate"> | string
    name?: StringWithAggregatesFilter<"DocumentTemplate"> | string
    description?: StringNullableWithAggregatesFilter<"DocumentTemplate"> | string | null
    content?: StringWithAggregatesFilter<"DocumentTemplate"> | string
    category?: StringNullableWithAggregatesFilter<"DocumentTemplate"> | string | null
    isPublic?: BoolWithAggregatesFilter<"DocumentTemplate"> | boolean
    userId?: StringNullableWithAggregatesFilter<"DocumentTemplate"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"DocumentTemplate"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DocumentTemplate"> | Date | string
  }

  export type UserSettingsWhereInput = {
    AND?: UserSettingsWhereInput | UserSettingsWhereInput[]
    OR?: UserSettingsWhereInput[]
    NOT?: UserSettingsWhereInput | UserSettingsWhereInput[]
    id?: StringFilter<"UserSettings"> | string
    userId?: StringFilter<"UserSettings"> | string
    editorTheme?: StringFilter<"UserSettings"> | string
    fontSize?: IntFilter<"UserSettings"> | number
    autoSave?: BoolFilter<"UserSettings"> | boolean
    autoSaveInterval?: IntFilter<"UserSettings"> | number
    showLineNumbers?: BoolFilter<"UserSettings"> | boolean
    wordWrap?: BoolFilter<"UserSettings"> | boolean
    createdAt?: DateTimeFilter<"UserSettings"> | Date | string
    updatedAt?: DateTimeFilter<"UserSettings"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserSettingsOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    editorTheme?: SortOrder
    fontSize?: SortOrder
    autoSave?: SortOrder
    autoSaveInterval?: SortOrder
    showLineNumbers?: SortOrder
    wordWrap?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserSettingsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: UserSettingsWhereInput | UserSettingsWhereInput[]
    OR?: UserSettingsWhereInput[]
    NOT?: UserSettingsWhereInput | UserSettingsWhereInput[]
    editorTheme?: StringFilter<"UserSettings"> | string
    fontSize?: IntFilter<"UserSettings"> | number
    autoSave?: BoolFilter<"UserSettings"> | boolean
    autoSaveInterval?: IntFilter<"UserSettings"> | number
    showLineNumbers?: BoolFilter<"UserSettings"> | boolean
    wordWrap?: BoolFilter<"UserSettings"> | boolean
    createdAt?: DateTimeFilter<"UserSettings"> | Date | string
    updatedAt?: DateTimeFilter<"UserSettings"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type UserSettingsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    editorTheme?: SortOrder
    fontSize?: SortOrder
    autoSave?: SortOrder
    autoSaveInterval?: SortOrder
    showLineNumbers?: SortOrder
    wordWrap?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserSettingsCountOrderByAggregateInput
    _avg?: UserSettingsAvgOrderByAggregateInput
    _max?: UserSettingsMaxOrderByAggregateInput
    _min?: UserSettingsMinOrderByAggregateInput
    _sum?: UserSettingsSumOrderByAggregateInput
  }

  export type UserSettingsScalarWhereWithAggregatesInput = {
    AND?: UserSettingsScalarWhereWithAggregatesInput | UserSettingsScalarWhereWithAggregatesInput[]
    OR?: UserSettingsScalarWhereWithAggregatesInput[]
    NOT?: UserSettingsScalarWhereWithAggregatesInput | UserSettingsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserSettings"> | string
    userId?: StringWithAggregatesFilter<"UserSettings"> | string
    editorTheme?: StringWithAggregatesFilter<"UserSettings"> | string
    fontSize?: IntWithAggregatesFilter<"UserSettings"> | number
    autoSave?: BoolWithAggregatesFilter<"UserSettings"> | boolean
    autoSaveInterval?: IntWithAggregatesFilter<"UserSettings"> | number
    showLineNumbers?: BoolWithAggregatesFilter<"UserSettings"> | boolean
    wordWrap?: BoolWithAggregatesFilter<"UserSettings"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"UserSettings"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserSettings"> | Date | string
  }

  export type DocumentActivityWhereInput = {
    AND?: DocumentActivityWhereInput | DocumentActivityWhereInput[]
    OR?: DocumentActivityWhereInput[]
    NOT?: DocumentActivityWhereInput | DocumentActivityWhereInput[]
    id?: StringFilter<"DocumentActivity"> | string
    documentId?: StringFilter<"DocumentActivity"> | string
    userId?: StringFilter<"DocumentActivity"> | string
    action?: StringFilter<"DocumentActivity"> | string
    description?: StringNullableFilter<"DocumentActivity"> | string | null
    metadata?: JsonNullableFilter<"DocumentActivity">
    createdAt?: DateTimeFilter<"DocumentActivity"> | Date | string
    document?: XOR<DocumentScalarRelationFilter, DocumentWhereInput>
  }

  export type DocumentActivityOrderByWithRelationInput = {
    id?: SortOrder
    documentId?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    description?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    document?: DocumentOrderByWithRelationInput
  }

  export type DocumentActivityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DocumentActivityWhereInput | DocumentActivityWhereInput[]
    OR?: DocumentActivityWhereInput[]
    NOT?: DocumentActivityWhereInput | DocumentActivityWhereInput[]
    documentId?: StringFilter<"DocumentActivity"> | string
    userId?: StringFilter<"DocumentActivity"> | string
    action?: StringFilter<"DocumentActivity"> | string
    description?: StringNullableFilter<"DocumentActivity"> | string | null
    metadata?: JsonNullableFilter<"DocumentActivity">
    createdAt?: DateTimeFilter<"DocumentActivity"> | Date | string
    document?: XOR<DocumentScalarRelationFilter, DocumentWhereInput>
  }, "id">

  export type DocumentActivityOrderByWithAggregationInput = {
    id?: SortOrder
    documentId?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    description?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: DocumentActivityCountOrderByAggregateInput
    _max?: DocumentActivityMaxOrderByAggregateInput
    _min?: DocumentActivityMinOrderByAggregateInput
  }

  export type DocumentActivityScalarWhereWithAggregatesInput = {
    AND?: DocumentActivityScalarWhereWithAggregatesInput | DocumentActivityScalarWhereWithAggregatesInput[]
    OR?: DocumentActivityScalarWhereWithAggregatesInput[]
    NOT?: DocumentActivityScalarWhereWithAggregatesInput | DocumentActivityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DocumentActivity"> | string
    documentId?: StringWithAggregatesFilter<"DocumentActivity"> | string
    userId?: StringWithAggregatesFilter<"DocumentActivity"> | string
    action?: StringWithAggregatesFilter<"DocumentActivity"> | string
    description?: StringNullableWithAggregatesFilter<"DocumentActivity"> | string | null
    metadata?: JsonNullableWithAggregatesFilter<"DocumentActivity">
    createdAt?: DateTimeWithAggregatesFilter<"DocumentActivity"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    avatar?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: DocumentCreateNestedManyWithoutUserInput
    collaborations?: DocumentCollaboratorsCreateNestedManyWithoutUserInput
    comments?: DocumentCommentCreateNestedManyWithoutUserInput
    settings?: UserSettingsCreateNestedOneWithoutUserInput
    rooms?: RoomUserCreateNestedManyWithoutUserInput
    createdRooms?: RoomCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    avatar?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: DocumentUncheckedCreateNestedManyWithoutUserInput
    collaborations?: DocumentCollaboratorsUncheckedCreateNestedManyWithoutUserInput
    comments?: DocumentCommentUncheckedCreateNestedManyWithoutUserInput
    settings?: UserSettingsUncheckedCreateNestedOneWithoutUserInput
    rooms?: RoomUserUncheckedCreateNestedManyWithoutUserInput
    createdRooms?: RoomUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: DocumentUpdateManyWithoutUserNestedInput
    collaborations?: DocumentCollaboratorsUpdateManyWithoutUserNestedInput
    comments?: DocumentCommentUpdateManyWithoutUserNestedInput
    settings?: UserSettingsUpdateOneWithoutUserNestedInput
    rooms?: RoomUserUpdateManyWithoutUserNestedInput
    createdRooms?: RoomUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: DocumentUncheckedUpdateManyWithoutUserNestedInput
    collaborations?: DocumentCollaboratorsUncheckedUpdateManyWithoutUserNestedInput
    comments?: DocumentCommentUncheckedUpdateManyWithoutUserNestedInput
    settings?: UserSettingsUncheckedUpdateOneWithoutUserNestedInput
    rooms?: RoomUserUncheckedUpdateManyWithoutUserNestedInput
    createdRooms?: RoomUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    avatar?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomCreateInput = {
    id?: string
    name: string
    code: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    shareLink?: string | null
    shareLinkExpiresAt?: Date | string | null
    allowedEmails?: RoomCreateallowedEmailsInput | string[]
    isPublic?: boolean
    createdBy: UserCreateNestedOneWithoutCreatedRoomsInput
    document?: DocumentCreateNestedOneWithoutRoomInput
    participants?: RoomUserCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateInput = {
    id?: string
    name: string
    code: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById: string
    documentId?: string | null
    shareLink?: string | null
    shareLinkExpiresAt?: Date | string | null
    allowedEmails?: RoomCreateallowedEmailsInput | string[]
    isPublic?: boolean
    participants?: RoomUserUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shareLink?: NullableStringFieldUpdateOperationsInput | string | null
    shareLinkExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    allowedEmails?: RoomUpdateallowedEmailsInput | string[]
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: UserUpdateOneRequiredWithoutCreatedRoomsNestedInput
    document?: DocumentUpdateOneWithoutRoomNestedInput
    participants?: RoomUserUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
    documentId?: NullableStringFieldUpdateOperationsInput | string | null
    shareLink?: NullableStringFieldUpdateOperationsInput | string | null
    shareLinkExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    allowedEmails?: RoomUpdateallowedEmailsInput | string[]
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    participants?: RoomUserUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type RoomCreateManyInput = {
    id?: string
    name: string
    code: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById: string
    documentId?: string | null
    shareLink?: string | null
    shareLinkExpiresAt?: Date | string | null
    allowedEmails?: RoomCreateallowedEmailsInput | string[]
    isPublic?: boolean
  }

  export type RoomUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shareLink?: NullableStringFieldUpdateOperationsInput | string | null
    shareLinkExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    allowedEmails?: RoomUpdateallowedEmailsInput | string[]
    isPublic?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RoomUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
    documentId?: NullableStringFieldUpdateOperationsInput | string | null
    shareLink?: NullableStringFieldUpdateOperationsInput | string | null
    shareLinkExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    allowedEmails?: RoomUpdateallowedEmailsInput | string[]
    isPublic?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RoomUserCreateInput = {
    id?: string
    role?: string
    joinedAt?: Date | string
    lastActive?: Date | string
    room: RoomCreateNestedOneWithoutParticipantsInput
    user: UserCreateNestedOneWithoutRoomsInput
  }

  export type RoomUserUncheckedCreateInput = {
    id?: string
    roomId: string
    userId: string
    role?: string
    joinedAt?: Date | string
    lastActive?: Date | string
  }

  export type RoomUserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActive?: DateTimeFieldUpdateOperationsInput | Date | string
    room?: RoomUpdateOneRequiredWithoutParticipantsNestedInput
    user?: UserUpdateOneRequiredWithoutRoomsNestedInput
  }

  export type RoomUserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActive?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomUserCreateManyInput = {
    id?: string
    roomId: string
    userId: string
    role?: string
    joinedAt?: Date | string
    lastActive?: Date | string
  }

  export type RoomUserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActive?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomUserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActive?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentCreateInput = {
    id?: string
    title: string
    content: string
    isPublic?: boolean
    tags?: DocumentCreatetagsInput | string[]
    allowComments?: boolean
    allowSuggestions?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lastEditedAt?: Date | string
    user: UserCreateNestedOneWithoutDocumentsInput
    images?: DocumentImageCreateNestedManyWithoutDocumentInput
    versions?: DocumentVersionCreateNestedManyWithoutDocumentInput
    collaborators?: DocumentCollaboratorsCreateNestedManyWithoutDocumentInput
    comments?: DocumentCommentCreateNestedManyWithoutDocumentInput
    shares?: DocumentShareCreateNestedManyWithoutDocumentInput
    activities?: DocumentActivityCreateNestedManyWithoutDocumentInput
    Room?: RoomCreateNestedManyWithoutDocumentInput
  }

  export type DocumentUncheckedCreateInput = {
    id?: string
    title: string
    content: string
    userId: string
    isPublic?: boolean
    tags?: DocumentCreatetagsInput | string[]
    allowComments?: boolean
    allowSuggestions?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lastEditedAt?: Date | string
    images?: DocumentImageUncheckedCreateNestedManyWithoutDocumentInput
    versions?: DocumentVersionUncheckedCreateNestedManyWithoutDocumentInput
    collaborators?: DocumentCollaboratorsUncheckedCreateNestedManyWithoutDocumentInput
    comments?: DocumentCommentUncheckedCreateNestedManyWithoutDocumentInput
    shares?: DocumentShareUncheckedCreateNestedManyWithoutDocumentInput
    activities?: DocumentActivityUncheckedCreateNestedManyWithoutDocumentInput
    Room?: RoomUncheckedCreateNestedManyWithoutDocumentInput
  }

  export type DocumentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    tags?: DocumentUpdatetagsInput | string[]
    allowComments?: BoolFieldUpdateOperationsInput | boolean
    allowSuggestions?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastEditedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDocumentsNestedInput
    images?: DocumentImageUpdateManyWithoutDocumentNestedInput
    versions?: DocumentVersionUpdateManyWithoutDocumentNestedInput
    collaborators?: DocumentCollaboratorsUpdateManyWithoutDocumentNestedInput
    comments?: DocumentCommentUpdateManyWithoutDocumentNestedInput
    shares?: DocumentShareUpdateManyWithoutDocumentNestedInput
    activities?: DocumentActivityUpdateManyWithoutDocumentNestedInput
    Room?: RoomUpdateManyWithoutDocumentNestedInput
  }

  export type DocumentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    tags?: DocumentUpdatetagsInput | string[]
    allowComments?: BoolFieldUpdateOperationsInput | boolean
    allowSuggestions?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastEditedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: DocumentImageUncheckedUpdateManyWithoutDocumentNestedInput
    versions?: DocumentVersionUncheckedUpdateManyWithoutDocumentNestedInput
    collaborators?: DocumentCollaboratorsUncheckedUpdateManyWithoutDocumentNestedInput
    comments?: DocumentCommentUncheckedUpdateManyWithoutDocumentNestedInput
    shares?: DocumentShareUncheckedUpdateManyWithoutDocumentNestedInput
    activities?: DocumentActivityUncheckedUpdateManyWithoutDocumentNestedInput
    Room?: RoomUncheckedUpdateManyWithoutDocumentNestedInput
  }

  export type DocumentCreateManyInput = {
    id?: string
    title: string
    content: string
    userId: string
    isPublic?: boolean
    tags?: DocumentCreatetagsInput | string[]
    allowComments?: boolean
    allowSuggestions?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lastEditedAt?: Date | string
  }

  export type DocumentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    tags?: DocumentUpdatetagsInput | string[]
    allowComments?: BoolFieldUpdateOperationsInput | boolean
    allowSuggestions?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastEditedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    tags?: DocumentUpdatetagsInput | string[]
    allowComments?: BoolFieldUpdateOperationsInput | boolean
    allowSuggestions?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastEditedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentImageCreateInput = {
    id?: string
    fileName: string
    originalName: string
    fileUrl: string
    fileSize: number
    mimeType: string
    width?: number | null
    height?: number | null
    createdAt?: Date | string
    document: DocumentCreateNestedOneWithoutImagesInput
  }

  export type DocumentImageUncheckedCreateInput = {
    id?: string
    documentId: string
    fileName: string
    originalName: string
    fileUrl: string
    fileSize: number
    mimeType: string
    width?: number | null
    height?: number | null
    createdAt?: Date | string
  }

  export type DocumentImageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    mimeType?: StringFieldUpdateOperationsInput | string
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    document?: DocumentUpdateOneRequiredWithoutImagesNestedInput
  }

  export type DocumentImageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentId?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    mimeType?: StringFieldUpdateOperationsInput | string
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentImageCreateManyInput = {
    id?: string
    documentId: string
    fileName: string
    originalName: string
    fileUrl: string
    fileSize: number
    mimeType: string
    width?: number | null
    height?: number | null
    createdAt?: Date | string
  }

  export type DocumentImageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    mimeType?: StringFieldUpdateOperationsInput | string
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentImageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentId?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    mimeType?: StringFieldUpdateOperationsInput | string
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentVersionCreateInput = {
    id?: string
    content: string
    versionNumber: number
    changeDescription?: string | null
    createdAt?: Date | string
    createdBy: string
    document: DocumentCreateNestedOneWithoutVersionsInput
  }

  export type DocumentVersionUncheckedCreateInput = {
    id?: string
    documentId: string
    content: string
    versionNumber: number
    changeDescription?: string | null
    createdAt?: Date | string
    createdBy: string
  }

  export type DocumentVersionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    versionNumber?: IntFieldUpdateOperationsInput | number
    changeDescription?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    document?: DocumentUpdateOneRequiredWithoutVersionsNestedInput
  }

  export type DocumentVersionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    versionNumber?: IntFieldUpdateOperationsInput | number
    changeDescription?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
  }

  export type DocumentVersionCreateManyInput = {
    id?: string
    documentId: string
    content: string
    versionNumber: number
    changeDescription?: string | null
    createdAt?: Date | string
    createdBy: string
  }

  export type DocumentVersionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    versionNumber?: IntFieldUpdateOperationsInput | number
    changeDescription?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
  }

  export type DocumentVersionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    versionNumber?: IntFieldUpdateOperationsInput | number
    changeDescription?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
  }

  export type DocumentCollaboratorsCreateInput = {
    id?: string
    role?: string
    permissions?: DocumentCollaboratorsCreatepermissionsInput | string[]
    invitedAt?: Date | string
    acceptedAt?: Date | string | null
    document: DocumentCreateNestedOneWithoutCollaboratorsInput
    user: UserCreateNestedOneWithoutCollaborationsInput
  }

  export type DocumentCollaboratorsUncheckedCreateInput = {
    id?: string
    documentId: string
    userId: string
    role?: string
    permissions?: DocumentCollaboratorsCreatepermissionsInput | string[]
    invitedAt?: Date | string
    acceptedAt?: Date | string | null
  }

  export type DocumentCollaboratorsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    permissions?: DocumentCollaboratorsUpdatepermissionsInput | string[]
    invitedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    document?: DocumentUpdateOneRequiredWithoutCollaboratorsNestedInput
    user?: UserUpdateOneRequiredWithoutCollaborationsNestedInput
  }

  export type DocumentCollaboratorsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    permissions?: DocumentCollaboratorsUpdatepermissionsInput | string[]
    invitedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DocumentCollaboratorsCreateManyInput = {
    id?: string
    documentId: string
    userId: string
    role?: string
    permissions?: DocumentCollaboratorsCreatepermissionsInput | string[]
    invitedAt?: Date | string
    acceptedAt?: Date | string | null
  }

  export type DocumentCollaboratorsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    permissions?: DocumentCollaboratorsUpdatepermissionsInput | string[]
    invitedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DocumentCollaboratorsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    permissions?: DocumentCollaboratorsUpdatepermissionsInput | string[]
    invitedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DocumentCommentCreateInput = {
    id?: string
    content: string
    lineNumber?: number | null
    isResolved?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    document: DocumentCreateNestedOneWithoutCommentsInput
    user: UserCreateNestedOneWithoutCommentsInput
  }

  export type DocumentCommentUncheckedCreateInput = {
    id?: string
    documentId: string
    userId: string
    content: string
    lineNumber?: number | null
    isResolved?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DocumentCommentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    lineNumber?: NullableIntFieldUpdateOperationsInput | number | null
    isResolved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    document?: DocumentUpdateOneRequiredWithoutCommentsNestedInput
    user?: UserUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type DocumentCommentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    lineNumber?: NullableIntFieldUpdateOperationsInput | number | null
    isResolved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentCommentCreateManyInput = {
    id?: string
    documentId: string
    userId: string
    content: string
    lineNumber?: number | null
    isResolved?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DocumentCommentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    lineNumber?: NullableIntFieldUpdateOperationsInput | number | null
    isResolved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentCommentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    lineNumber?: NullableIntFieldUpdateOperationsInput | number | null
    isResolved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentShareCreateInput = {
    id?: string
    shareToken: string
    permissions?: DocumentShareCreatepermissionsInput | string[]
    expiresAt?: Date | string | null
    maxUses?: number | null
    useCount?: number
    createdAt?: Date | string
    createdBy: string
    document: DocumentCreateNestedOneWithoutSharesInput
  }

  export type DocumentShareUncheckedCreateInput = {
    id?: string
    documentId: string
    shareToken: string
    permissions?: DocumentShareCreatepermissionsInput | string[]
    expiresAt?: Date | string | null
    maxUses?: number | null
    useCount?: number
    createdAt?: Date | string
    createdBy: string
  }

  export type DocumentShareUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    shareToken?: StringFieldUpdateOperationsInput | string
    permissions?: DocumentShareUpdatepermissionsInput | string[]
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maxUses?: NullableIntFieldUpdateOperationsInput | number | null
    useCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    document?: DocumentUpdateOneRequiredWithoutSharesNestedInput
  }

  export type DocumentShareUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentId?: StringFieldUpdateOperationsInput | string
    shareToken?: StringFieldUpdateOperationsInput | string
    permissions?: DocumentShareUpdatepermissionsInput | string[]
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maxUses?: NullableIntFieldUpdateOperationsInput | number | null
    useCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
  }

  export type DocumentShareCreateManyInput = {
    id?: string
    documentId: string
    shareToken: string
    permissions?: DocumentShareCreatepermissionsInput | string[]
    expiresAt?: Date | string | null
    maxUses?: number | null
    useCount?: number
    createdAt?: Date | string
    createdBy: string
  }

  export type DocumentShareUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    shareToken?: StringFieldUpdateOperationsInput | string
    permissions?: DocumentShareUpdatepermissionsInput | string[]
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maxUses?: NullableIntFieldUpdateOperationsInput | number | null
    useCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
  }

  export type DocumentShareUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentId?: StringFieldUpdateOperationsInput | string
    shareToken?: StringFieldUpdateOperationsInput | string
    permissions?: DocumentShareUpdatepermissionsInput | string[]
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maxUses?: NullableIntFieldUpdateOperationsInput | number | null
    useCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
  }

  export type DocumentTemplateCreateInput = {
    id?: string
    name: string
    description?: string | null
    content: string
    category?: string | null
    isPublic?: boolean
    userId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DocumentTemplateUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    content: string
    category?: string | null
    isPublic?: boolean
    userId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DocumentTemplateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentTemplateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentTemplateCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    content: string
    category?: string | null
    isPublic?: boolean
    userId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DocumentTemplateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentTemplateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSettingsCreateInput = {
    id?: string
    editorTheme?: string
    fontSize?: number
    autoSave?: boolean
    autoSaveInterval?: number
    showLineNumbers?: boolean
    wordWrap?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSettingsInput
  }

  export type UserSettingsUncheckedCreateInput = {
    id?: string
    userId: string
    editorTheme?: string
    fontSize?: number
    autoSave?: boolean
    autoSaveInterval?: number
    showLineNumbers?: boolean
    wordWrap?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserSettingsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    editorTheme?: StringFieldUpdateOperationsInput | string
    fontSize?: IntFieldUpdateOperationsInput | number
    autoSave?: BoolFieldUpdateOperationsInput | boolean
    autoSaveInterval?: IntFieldUpdateOperationsInput | number
    showLineNumbers?: BoolFieldUpdateOperationsInput | boolean
    wordWrap?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSettingsNestedInput
  }

  export type UserSettingsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    editorTheme?: StringFieldUpdateOperationsInput | string
    fontSize?: IntFieldUpdateOperationsInput | number
    autoSave?: BoolFieldUpdateOperationsInput | boolean
    autoSaveInterval?: IntFieldUpdateOperationsInput | number
    showLineNumbers?: BoolFieldUpdateOperationsInput | boolean
    wordWrap?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSettingsCreateManyInput = {
    id?: string
    userId: string
    editorTheme?: string
    fontSize?: number
    autoSave?: boolean
    autoSaveInterval?: number
    showLineNumbers?: boolean
    wordWrap?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserSettingsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    editorTheme?: StringFieldUpdateOperationsInput | string
    fontSize?: IntFieldUpdateOperationsInput | number
    autoSave?: BoolFieldUpdateOperationsInput | boolean
    autoSaveInterval?: IntFieldUpdateOperationsInput | number
    showLineNumbers?: BoolFieldUpdateOperationsInput | boolean
    wordWrap?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSettingsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    editorTheme?: StringFieldUpdateOperationsInput | string
    fontSize?: IntFieldUpdateOperationsInput | number
    autoSave?: BoolFieldUpdateOperationsInput | boolean
    autoSaveInterval?: IntFieldUpdateOperationsInput | number
    showLineNumbers?: BoolFieldUpdateOperationsInput | boolean
    wordWrap?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentActivityCreateInput = {
    id?: string
    userId: string
    action: string
    description?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    document: DocumentCreateNestedOneWithoutActivitiesInput
  }

  export type DocumentActivityUncheckedCreateInput = {
    id?: string
    documentId: string
    userId: string
    action: string
    description?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type DocumentActivityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    document?: DocumentUpdateOneRequiredWithoutActivitiesNestedInput
  }

  export type DocumentActivityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentActivityCreateManyInput = {
    id?: string
    documentId: string
    userId: string
    action: string
    description?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type DocumentActivityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentActivityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DocumentListRelationFilter = {
    every?: DocumentWhereInput
    some?: DocumentWhereInput
    none?: DocumentWhereInput
  }

  export type DocumentCollaboratorsListRelationFilter = {
    every?: DocumentCollaboratorsWhereInput
    some?: DocumentCollaboratorsWhereInput
    none?: DocumentCollaboratorsWhereInput
  }

  export type DocumentCommentListRelationFilter = {
    every?: DocumentCommentWhereInput
    some?: DocumentCommentWhereInput
    none?: DocumentCommentWhereInput
  }

  export type UserSettingsNullableScalarRelationFilter = {
    is?: UserSettingsWhereInput | null
    isNot?: UserSettingsWhereInput | null
  }

  export type RoomUserListRelationFilter = {
    every?: RoomUserWhereInput
    some?: RoomUserWhereInput
    none?: RoomUserWhereInput
  }

  export type RoomListRelationFilter = {
    every?: RoomWhereInput
    some?: RoomWhereInput
    none?: RoomWhereInput
  }

  export type DocumentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DocumentCollaboratorsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DocumentCommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoomUserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoomOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    avatar?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    avatar?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    avatar?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type DocumentNullableScalarRelationFilter = {
    is?: DocumentWhereInput | null
    isNot?: DocumentWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type RoomCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
    documentId?: SortOrder
    shareLink?: SortOrder
    shareLinkExpiresAt?: SortOrder
    allowedEmails?: SortOrder
    isPublic?: SortOrder
  }

  export type RoomMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
    documentId?: SortOrder
    shareLink?: SortOrder
    shareLinkExpiresAt?: SortOrder
    isPublic?: SortOrder
  }

  export type RoomMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
    documentId?: SortOrder
    shareLink?: SortOrder
    shareLinkExpiresAt?: SortOrder
    isPublic?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type RoomScalarRelationFilter = {
    is?: RoomWhereInput
    isNot?: RoomWhereInput
  }

  export type RoomUserRoomIdUserIdCompoundUniqueInput = {
    roomId: string
    userId: string
  }

  export type RoomUserCountOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
    lastActive?: SortOrder
  }

  export type RoomUserMaxOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
    lastActive?: SortOrder
  }

  export type RoomUserMinOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
    lastActive?: SortOrder
  }

  export type DocumentImageListRelationFilter = {
    every?: DocumentImageWhereInput
    some?: DocumentImageWhereInput
    none?: DocumentImageWhereInput
  }

  export type DocumentVersionListRelationFilter = {
    every?: DocumentVersionWhereInput
    some?: DocumentVersionWhereInput
    none?: DocumentVersionWhereInput
  }

  export type DocumentShareListRelationFilter = {
    every?: DocumentShareWhereInput
    some?: DocumentShareWhereInput
    none?: DocumentShareWhereInput
  }

  export type DocumentActivityListRelationFilter = {
    every?: DocumentActivityWhereInput
    some?: DocumentActivityWhereInput
    none?: DocumentActivityWhereInput
  }

  export type DocumentImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DocumentVersionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DocumentShareOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DocumentActivityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DocumentCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    userId?: SortOrder
    isPublic?: SortOrder
    tags?: SortOrder
    allowComments?: SortOrder
    allowSuggestions?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastEditedAt?: SortOrder
  }

  export type DocumentMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    userId?: SortOrder
    isPublic?: SortOrder
    allowComments?: SortOrder
    allowSuggestions?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastEditedAt?: SortOrder
  }

  export type DocumentMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    userId?: SortOrder
    isPublic?: SortOrder
    allowComments?: SortOrder
    allowSuggestions?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastEditedAt?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DocumentScalarRelationFilter = {
    is?: DocumentWhereInput
    isNot?: DocumentWhereInput
  }

  export type DocumentImageCountOrderByAggregateInput = {
    id?: SortOrder
    documentId?: SortOrder
    fileName?: SortOrder
    originalName?: SortOrder
    fileUrl?: SortOrder
    fileSize?: SortOrder
    mimeType?: SortOrder
    width?: SortOrder
    height?: SortOrder
    createdAt?: SortOrder
  }

  export type DocumentImageAvgOrderByAggregateInput = {
    fileSize?: SortOrder
    width?: SortOrder
    height?: SortOrder
  }

  export type DocumentImageMaxOrderByAggregateInput = {
    id?: SortOrder
    documentId?: SortOrder
    fileName?: SortOrder
    originalName?: SortOrder
    fileUrl?: SortOrder
    fileSize?: SortOrder
    mimeType?: SortOrder
    width?: SortOrder
    height?: SortOrder
    createdAt?: SortOrder
  }

  export type DocumentImageMinOrderByAggregateInput = {
    id?: SortOrder
    documentId?: SortOrder
    fileName?: SortOrder
    originalName?: SortOrder
    fileUrl?: SortOrder
    fileSize?: SortOrder
    mimeType?: SortOrder
    width?: SortOrder
    height?: SortOrder
    createdAt?: SortOrder
  }

  export type DocumentImageSumOrderByAggregateInput = {
    fileSize?: SortOrder
    width?: SortOrder
    height?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DocumentVersionCountOrderByAggregateInput = {
    id?: SortOrder
    documentId?: SortOrder
    content?: SortOrder
    versionNumber?: SortOrder
    changeDescription?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
  }

  export type DocumentVersionAvgOrderByAggregateInput = {
    versionNumber?: SortOrder
  }

  export type DocumentVersionMaxOrderByAggregateInput = {
    id?: SortOrder
    documentId?: SortOrder
    content?: SortOrder
    versionNumber?: SortOrder
    changeDescription?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
  }

  export type DocumentVersionMinOrderByAggregateInput = {
    id?: SortOrder
    documentId?: SortOrder
    content?: SortOrder
    versionNumber?: SortOrder
    changeDescription?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
  }

  export type DocumentVersionSumOrderByAggregateInput = {
    versionNumber?: SortOrder
  }

  export type DocumentCollaboratorsDocumentIdUserIdCompoundUniqueInput = {
    documentId: string
    userId: string
  }

  export type DocumentCollaboratorsCountOrderByAggregateInput = {
    id?: SortOrder
    documentId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    permissions?: SortOrder
    invitedAt?: SortOrder
    acceptedAt?: SortOrder
  }

  export type DocumentCollaboratorsMaxOrderByAggregateInput = {
    id?: SortOrder
    documentId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    invitedAt?: SortOrder
    acceptedAt?: SortOrder
  }

  export type DocumentCollaboratorsMinOrderByAggregateInput = {
    id?: SortOrder
    documentId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    invitedAt?: SortOrder
    acceptedAt?: SortOrder
  }

  export type DocumentCommentCountOrderByAggregateInput = {
    id?: SortOrder
    documentId?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    lineNumber?: SortOrder
    isResolved?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DocumentCommentAvgOrderByAggregateInput = {
    lineNumber?: SortOrder
  }

  export type DocumentCommentMaxOrderByAggregateInput = {
    id?: SortOrder
    documentId?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    lineNumber?: SortOrder
    isResolved?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DocumentCommentMinOrderByAggregateInput = {
    id?: SortOrder
    documentId?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    lineNumber?: SortOrder
    isResolved?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DocumentCommentSumOrderByAggregateInput = {
    lineNumber?: SortOrder
  }

  export type DocumentShareCountOrderByAggregateInput = {
    id?: SortOrder
    documentId?: SortOrder
    shareToken?: SortOrder
    permissions?: SortOrder
    expiresAt?: SortOrder
    maxUses?: SortOrder
    useCount?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
  }

  export type DocumentShareAvgOrderByAggregateInput = {
    maxUses?: SortOrder
    useCount?: SortOrder
  }

  export type DocumentShareMaxOrderByAggregateInput = {
    id?: SortOrder
    documentId?: SortOrder
    shareToken?: SortOrder
    expiresAt?: SortOrder
    maxUses?: SortOrder
    useCount?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
  }

  export type DocumentShareMinOrderByAggregateInput = {
    id?: SortOrder
    documentId?: SortOrder
    shareToken?: SortOrder
    expiresAt?: SortOrder
    maxUses?: SortOrder
    useCount?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
  }

  export type DocumentShareSumOrderByAggregateInput = {
    maxUses?: SortOrder
    useCount?: SortOrder
  }

  export type DocumentTemplateCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    content?: SortOrder
    category?: SortOrder
    isPublic?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DocumentTemplateMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    content?: SortOrder
    category?: SortOrder
    isPublic?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DocumentTemplateMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    content?: SortOrder
    category?: SortOrder
    isPublic?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSettingsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    editorTheme?: SortOrder
    fontSize?: SortOrder
    autoSave?: SortOrder
    autoSaveInterval?: SortOrder
    showLineNumbers?: SortOrder
    wordWrap?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSettingsAvgOrderByAggregateInput = {
    fontSize?: SortOrder
    autoSaveInterval?: SortOrder
  }

  export type UserSettingsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    editorTheme?: SortOrder
    fontSize?: SortOrder
    autoSave?: SortOrder
    autoSaveInterval?: SortOrder
    showLineNumbers?: SortOrder
    wordWrap?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSettingsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    editorTheme?: SortOrder
    fontSize?: SortOrder
    autoSave?: SortOrder
    autoSaveInterval?: SortOrder
    showLineNumbers?: SortOrder
    wordWrap?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSettingsSumOrderByAggregateInput = {
    fontSize?: SortOrder
    autoSaveInterval?: SortOrder
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type DocumentActivityCountOrderByAggregateInput = {
    id?: SortOrder
    documentId?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    description?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
  }

  export type DocumentActivityMaxOrderByAggregateInput = {
    id?: SortOrder
    documentId?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type DocumentActivityMinOrderByAggregateInput = {
    id?: SortOrder
    documentId?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type DocumentCreateNestedManyWithoutUserInput = {
    create?: XOR<DocumentCreateWithoutUserInput, DocumentUncheckedCreateWithoutUserInput> | DocumentCreateWithoutUserInput[] | DocumentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutUserInput | DocumentCreateOrConnectWithoutUserInput[]
    createMany?: DocumentCreateManyUserInputEnvelope
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
  }

  export type DocumentCollaboratorsCreateNestedManyWithoutUserInput = {
    create?: XOR<DocumentCollaboratorsCreateWithoutUserInput, DocumentCollaboratorsUncheckedCreateWithoutUserInput> | DocumentCollaboratorsCreateWithoutUserInput[] | DocumentCollaboratorsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DocumentCollaboratorsCreateOrConnectWithoutUserInput | DocumentCollaboratorsCreateOrConnectWithoutUserInput[]
    createMany?: DocumentCollaboratorsCreateManyUserInputEnvelope
    connect?: DocumentCollaboratorsWhereUniqueInput | DocumentCollaboratorsWhereUniqueInput[]
  }

  export type DocumentCommentCreateNestedManyWithoutUserInput = {
    create?: XOR<DocumentCommentCreateWithoutUserInput, DocumentCommentUncheckedCreateWithoutUserInput> | DocumentCommentCreateWithoutUserInput[] | DocumentCommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DocumentCommentCreateOrConnectWithoutUserInput | DocumentCommentCreateOrConnectWithoutUserInput[]
    createMany?: DocumentCommentCreateManyUserInputEnvelope
    connect?: DocumentCommentWhereUniqueInput | DocumentCommentWhereUniqueInput[]
  }

  export type UserSettingsCreateNestedOneWithoutUserInput = {
    create?: XOR<UserSettingsCreateWithoutUserInput, UserSettingsUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserSettingsCreateOrConnectWithoutUserInput
    connect?: UserSettingsWhereUniqueInput
  }

  export type RoomUserCreateNestedManyWithoutUserInput = {
    create?: XOR<RoomUserCreateWithoutUserInput, RoomUserUncheckedCreateWithoutUserInput> | RoomUserCreateWithoutUserInput[] | RoomUserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RoomUserCreateOrConnectWithoutUserInput | RoomUserCreateOrConnectWithoutUserInput[]
    createMany?: RoomUserCreateManyUserInputEnvelope
    connect?: RoomUserWhereUniqueInput | RoomUserWhereUniqueInput[]
  }

  export type RoomCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<RoomCreateWithoutCreatedByInput, RoomUncheckedCreateWithoutCreatedByInput> | RoomCreateWithoutCreatedByInput[] | RoomUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutCreatedByInput | RoomCreateOrConnectWithoutCreatedByInput[]
    createMany?: RoomCreateManyCreatedByInputEnvelope
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
  }

  export type DocumentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DocumentCreateWithoutUserInput, DocumentUncheckedCreateWithoutUserInput> | DocumentCreateWithoutUserInput[] | DocumentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutUserInput | DocumentCreateOrConnectWithoutUserInput[]
    createMany?: DocumentCreateManyUserInputEnvelope
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
  }

  export type DocumentCollaboratorsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DocumentCollaboratorsCreateWithoutUserInput, DocumentCollaboratorsUncheckedCreateWithoutUserInput> | DocumentCollaboratorsCreateWithoutUserInput[] | DocumentCollaboratorsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DocumentCollaboratorsCreateOrConnectWithoutUserInput | DocumentCollaboratorsCreateOrConnectWithoutUserInput[]
    createMany?: DocumentCollaboratorsCreateManyUserInputEnvelope
    connect?: DocumentCollaboratorsWhereUniqueInput | DocumentCollaboratorsWhereUniqueInput[]
  }

  export type DocumentCommentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DocumentCommentCreateWithoutUserInput, DocumentCommentUncheckedCreateWithoutUserInput> | DocumentCommentCreateWithoutUserInput[] | DocumentCommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DocumentCommentCreateOrConnectWithoutUserInput | DocumentCommentCreateOrConnectWithoutUserInput[]
    createMany?: DocumentCommentCreateManyUserInputEnvelope
    connect?: DocumentCommentWhereUniqueInput | DocumentCommentWhereUniqueInput[]
  }

  export type UserSettingsUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<UserSettingsCreateWithoutUserInput, UserSettingsUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserSettingsCreateOrConnectWithoutUserInput
    connect?: UserSettingsWhereUniqueInput
  }

  export type RoomUserUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RoomUserCreateWithoutUserInput, RoomUserUncheckedCreateWithoutUserInput> | RoomUserCreateWithoutUserInput[] | RoomUserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RoomUserCreateOrConnectWithoutUserInput | RoomUserCreateOrConnectWithoutUserInput[]
    createMany?: RoomUserCreateManyUserInputEnvelope
    connect?: RoomUserWhereUniqueInput | RoomUserWhereUniqueInput[]
  }

  export type RoomUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<RoomCreateWithoutCreatedByInput, RoomUncheckedCreateWithoutCreatedByInput> | RoomCreateWithoutCreatedByInput[] | RoomUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutCreatedByInput | RoomCreateOrConnectWithoutCreatedByInput[]
    createMany?: RoomCreateManyCreatedByInputEnvelope
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type DocumentUpdateManyWithoutUserNestedInput = {
    create?: XOR<DocumentCreateWithoutUserInput, DocumentUncheckedCreateWithoutUserInput> | DocumentCreateWithoutUserInput[] | DocumentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutUserInput | DocumentCreateOrConnectWithoutUserInput[]
    upsert?: DocumentUpsertWithWhereUniqueWithoutUserInput | DocumentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DocumentCreateManyUserInputEnvelope
    set?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    disconnect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    delete?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    update?: DocumentUpdateWithWhereUniqueWithoutUserInput | DocumentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DocumentUpdateManyWithWhereWithoutUserInput | DocumentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
  }

  export type DocumentCollaboratorsUpdateManyWithoutUserNestedInput = {
    create?: XOR<DocumentCollaboratorsCreateWithoutUserInput, DocumentCollaboratorsUncheckedCreateWithoutUserInput> | DocumentCollaboratorsCreateWithoutUserInput[] | DocumentCollaboratorsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DocumentCollaboratorsCreateOrConnectWithoutUserInput | DocumentCollaboratorsCreateOrConnectWithoutUserInput[]
    upsert?: DocumentCollaboratorsUpsertWithWhereUniqueWithoutUserInput | DocumentCollaboratorsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DocumentCollaboratorsCreateManyUserInputEnvelope
    set?: DocumentCollaboratorsWhereUniqueInput | DocumentCollaboratorsWhereUniqueInput[]
    disconnect?: DocumentCollaboratorsWhereUniqueInput | DocumentCollaboratorsWhereUniqueInput[]
    delete?: DocumentCollaboratorsWhereUniqueInput | DocumentCollaboratorsWhereUniqueInput[]
    connect?: DocumentCollaboratorsWhereUniqueInput | DocumentCollaboratorsWhereUniqueInput[]
    update?: DocumentCollaboratorsUpdateWithWhereUniqueWithoutUserInput | DocumentCollaboratorsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DocumentCollaboratorsUpdateManyWithWhereWithoutUserInput | DocumentCollaboratorsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DocumentCollaboratorsScalarWhereInput | DocumentCollaboratorsScalarWhereInput[]
  }

  export type DocumentCommentUpdateManyWithoutUserNestedInput = {
    create?: XOR<DocumentCommentCreateWithoutUserInput, DocumentCommentUncheckedCreateWithoutUserInput> | DocumentCommentCreateWithoutUserInput[] | DocumentCommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DocumentCommentCreateOrConnectWithoutUserInput | DocumentCommentCreateOrConnectWithoutUserInput[]
    upsert?: DocumentCommentUpsertWithWhereUniqueWithoutUserInput | DocumentCommentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DocumentCommentCreateManyUserInputEnvelope
    set?: DocumentCommentWhereUniqueInput | DocumentCommentWhereUniqueInput[]
    disconnect?: DocumentCommentWhereUniqueInput | DocumentCommentWhereUniqueInput[]
    delete?: DocumentCommentWhereUniqueInput | DocumentCommentWhereUniqueInput[]
    connect?: DocumentCommentWhereUniqueInput | DocumentCommentWhereUniqueInput[]
    update?: DocumentCommentUpdateWithWhereUniqueWithoutUserInput | DocumentCommentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DocumentCommentUpdateManyWithWhereWithoutUserInput | DocumentCommentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DocumentCommentScalarWhereInput | DocumentCommentScalarWhereInput[]
  }

  export type UserSettingsUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserSettingsCreateWithoutUserInput, UserSettingsUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserSettingsCreateOrConnectWithoutUserInput
    upsert?: UserSettingsUpsertWithoutUserInput
    disconnect?: UserSettingsWhereInput | boolean
    delete?: UserSettingsWhereInput | boolean
    connect?: UserSettingsWhereUniqueInput
    update?: XOR<XOR<UserSettingsUpdateToOneWithWhereWithoutUserInput, UserSettingsUpdateWithoutUserInput>, UserSettingsUncheckedUpdateWithoutUserInput>
  }

  export type RoomUserUpdateManyWithoutUserNestedInput = {
    create?: XOR<RoomUserCreateWithoutUserInput, RoomUserUncheckedCreateWithoutUserInput> | RoomUserCreateWithoutUserInput[] | RoomUserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RoomUserCreateOrConnectWithoutUserInput | RoomUserCreateOrConnectWithoutUserInput[]
    upsert?: RoomUserUpsertWithWhereUniqueWithoutUserInput | RoomUserUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RoomUserCreateManyUserInputEnvelope
    set?: RoomUserWhereUniqueInput | RoomUserWhereUniqueInput[]
    disconnect?: RoomUserWhereUniqueInput | RoomUserWhereUniqueInput[]
    delete?: RoomUserWhereUniqueInput | RoomUserWhereUniqueInput[]
    connect?: RoomUserWhereUniqueInput | RoomUserWhereUniqueInput[]
    update?: RoomUserUpdateWithWhereUniqueWithoutUserInput | RoomUserUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RoomUserUpdateManyWithWhereWithoutUserInput | RoomUserUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RoomUserScalarWhereInput | RoomUserScalarWhereInput[]
  }

  export type RoomUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<RoomCreateWithoutCreatedByInput, RoomUncheckedCreateWithoutCreatedByInput> | RoomCreateWithoutCreatedByInput[] | RoomUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutCreatedByInput | RoomCreateOrConnectWithoutCreatedByInput[]
    upsert?: RoomUpsertWithWhereUniqueWithoutCreatedByInput | RoomUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: RoomCreateManyCreatedByInputEnvelope
    set?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    disconnect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    delete?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    update?: RoomUpdateWithWhereUniqueWithoutCreatedByInput | RoomUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: RoomUpdateManyWithWhereWithoutCreatedByInput | RoomUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: RoomScalarWhereInput | RoomScalarWhereInput[]
  }

  export type DocumentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DocumentCreateWithoutUserInput, DocumentUncheckedCreateWithoutUserInput> | DocumentCreateWithoutUserInput[] | DocumentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutUserInput | DocumentCreateOrConnectWithoutUserInput[]
    upsert?: DocumentUpsertWithWhereUniqueWithoutUserInput | DocumentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DocumentCreateManyUserInputEnvelope
    set?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    disconnect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    delete?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    update?: DocumentUpdateWithWhereUniqueWithoutUserInput | DocumentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DocumentUpdateManyWithWhereWithoutUserInput | DocumentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
  }

  export type DocumentCollaboratorsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DocumentCollaboratorsCreateWithoutUserInput, DocumentCollaboratorsUncheckedCreateWithoutUserInput> | DocumentCollaboratorsCreateWithoutUserInput[] | DocumentCollaboratorsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DocumentCollaboratorsCreateOrConnectWithoutUserInput | DocumentCollaboratorsCreateOrConnectWithoutUserInput[]
    upsert?: DocumentCollaboratorsUpsertWithWhereUniqueWithoutUserInput | DocumentCollaboratorsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DocumentCollaboratorsCreateManyUserInputEnvelope
    set?: DocumentCollaboratorsWhereUniqueInput | DocumentCollaboratorsWhereUniqueInput[]
    disconnect?: DocumentCollaboratorsWhereUniqueInput | DocumentCollaboratorsWhereUniqueInput[]
    delete?: DocumentCollaboratorsWhereUniqueInput | DocumentCollaboratorsWhereUniqueInput[]
    connect?: DocumentCollaboratorsWhereUniqueInput | DocumentCollaboratorsWhereUniqueInput[]
    update?: DocumentCollaboratorsUpdateWithWhereUniqueWithoutUserInput | DocumentCollaboratorsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DocumentCollaboratorsUpdateManyWithWhereWithoutUserInput | DocumentCollaboratorsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DocumentCollaboratorsScalarWhereInput | DocumentCollaboratorsScalarWhereInput[]
  }

  export type DocumentCommentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DocumentCommentCreateWithoutUserInput, DocumentCommentUncheckedCreateWithoutUserInput> | DocumentCommentCreateWithoutUserInput[] | DocumentCommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DocumentCommentCreateOrConnectWithoutUserInput | DocumentCommentCreateOrConnectWithoutUserInput[]
    upsert?: DocumentCommentUpsertWithWhereUniqueWithoutUserInput | DocumentCommentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DocumentCommentCreateManyUserInputEnvelope
    set?: DocumentCommentWhereUniqueInput | DocumentCommentWhereUniqueInput[]
    disconnect?: DocumentCommentWhereUniqueInput | DocumentCommentWhereUniqueInput[]
    delete?: DocumentCommentWhereUniqueInput | DocumentCommentWhereUniqueInput[]
    connect?: DocumentCommentWhereUniqueInput | DocumentCommentWhereUniqueInput[]
    update?: DocumentCommentUpdateWithWhereUniqueWithoutUserInput | DocumentCommentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DocumentCommentUpdateManyWithWhereWithoutUserInput | DocumentCommentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DocumentCommentScalarWhereInput | DocumentCommentScalarWhereInput[]
  }

  export type UserSettingsUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserSettingsCreateWithoutUserInput, UserSettingsUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserSettingsCreateOrConnectWithoutUserInput
    upsert?: UserSettingsUpsertWithoutUserInput
    disconnect?: UserSettingsWhereInput | boolean
    delete?: UserSettingsWhereInput | boolean
    connect?: UserSettingsWhereUniqueInput
    update?: XOR<XOR<UserSettingsUpdateToOneWithWhereWithoutUserInput, UserSettingsUpdateWithoutUserInput>, UserSettingsUncheckedUpdateWithoutUserInput>
  }

  export type RoomUserUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RoomUserCreateWithoutUserInput, RoomUserUncheckedCreateWithoutUserInput> | RoomUserCreateWithoutUserInput[] | RoomUserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RoomUserCreateOrConnectWithoutUserInput | RoomUserCreateOrConnectWithoutUserInput[]
    upsert?: RoomUserUpsertWithWhereUniqueWithoutUserInput | RoomUserUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RoomUserCreateManyUserInputEnvelope
    set?: RoomUserWhereUniqueInput | RoomUserWhereUniqueInput[]
    disconnect?: RoomUserWhereUniqueInput | RoomUserWhereUniqueInput[]
    delete?: RoomUserWhereUniqueInput | RoomUserWhereUniqueInput[]
    connect?: RoomUserWhereUniqueInput | RoomUserWhereUniqueInput[]
    update?: RoomUserUpdateWithWhereUniqueWithoutUserInput | RoomUserUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RoomUserUpdateManyWithWhereWithoutUserInput | RoomUserUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RoomUserScalarWhereInput | RoomUserScalarWhereInput[]
  }

  export type RoomUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<RoomCreateWithoutCreatedByInput, RoomUncheckedCreateWithoutCreatedByInput> | RoomCreateWithoutCreatedByInput[] | RoomUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutCreatedByInput | RoomCreateOrConnectWithoutCreatedByInput[]
    upsert?: RoomUpsertWithWhereUniqueWithoutCreatedByInput | RoomUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: RoomCreateManyCreatedByInputEnvelope
    set?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    disconnect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    delete?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    update?: RoomUpdateWithWhereUniqueWithoutCreatedByInput | RoomUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: RoomUpdateManyWithWhereWithoutCreatedByInput | RoomUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: RoomScalarWhereInput | RoomScalarWhereInput[]
  }

  export type RoomCreateallowedEmailsInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutCreatedRoomsInput = {
    create?: XOR<UserCreateWithoutCreatedRoomsInput, UserUncheckedCreateWithoutCreatedRoomsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedRoomsInput
    connect?: UserWhereUniqueInput
  }

  export type DocumentCreateNestedOneWithoutRoomInput = {
    create?: XOR<DocumentCreateWithoutRoomInput, DocumentUncheckedCreateWithoutRoomInput>
    connectOrCreate?: DocumentCreateOrConnectWithoutRoomInput
    connect?: DocumentWhereUniqueInput
  }

  export type RoomUserCreateNestedManyWithoutRoomInput = {
    create?: XOR<RoomUserCreateWithoutRoomInput, RoomUserUncheckedCreateWithoutRoomInput> | RoomUserCreateWithoutRoomInput[] | RoomUserUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: RoomUserCreateOrConnectWithoutRoomInput | RoomUserCreateOrConnectWithoutRoomInput[]
    createMany?: RoomUserCreateManyRoomInputEnvelope
    connect?: RoomUserWhereUniqueInput | RoomUserWhereUniqueInput[]
  }

  export type RoomUserUncheckedCreateNestedManyWithoutRoomInput = {
    create?: XOR<RoomUserCreateWithoutRoomInput, RoomUserUncheckedCreateWithoutRoomInput> | RoomUserCreateWithoutRoomInput[] | RoomUserUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: RoomUserCreateOrConnectWithoutRoomInput | RoomUserCreateOrConnectWithoutRoomInput[]
    createMany?: RoomUserCreateManyRoomInputEnvelope
    connect?: RoomUserWhereUniqueInput | RoomUserWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type RoomUpdateallowedEmailsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateOneRequiredWithoutCreatedRoomsNestedInput = {
    create?: XOR<UserCreateWithoutCreatedRoomsInput, UserUncheckedCreateWithoutCreatedRoomsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedRoomsInput
    upsert?: UserUpsertWithoutCreatedRoomsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedRoomsInput, UserUpdateWithoutCreatedRoomsInput>, UserUncheckedUpdateWithoutCreatedRoomsInput>
  }

  export type DocumentUpdateOneWithoutRoomNestedInput = {
    create?: XOR<DocumentCreateWithoutRoomInput, DocumentUncheckedCreateWithoutRoomInput>
    connectOrCreate?: DocumentCreateOrConnectWithoutRoomInput
    upsert?: DocumentUpsertWithoutRoomInput
    disconnect?: DocumentWhereInput | boolean
    delete?: DocumentWhereInput | boolean
    connect?: DocumentWhereUniqueInput
    update?: XOR<XOR<DocumentUpdateToOneWithWhereWithoutRoomInput, DocumentUpdateWithoutRoomInput>, DocumentUncheckedUpdateWithoutRoomInput>
  }

  export type RoomUserUpdateManyWithoutRoomNestedInput = {
    create?: XOR<RoomUserCreateWithoutRoomInput, RoomUserUncheckedCreateWithoutRoomInput> | RoomUserCreateWithoutRoomInput[] | RoomUserUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: RoomUserCreateOrConnectWithoutRoomInput | RoomUserCreateOrConnectWithoutRoomInput[]
    upsert?: RoomUserUpsertWithWhereUniqueWithoutRoomInput | RoomUserUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: RoomUserCreateManyRoomInputEnvelope
    set?: RoomUserWhereUniqueInput | RoomUserWhereUniqueInput[]
    disconnect?: RoomUserWhereUniqueInput | RoomUserWhereUniqueInput[]
    delete?: RoomUserWhereUniqueInput | RoomUserWhereUniqueInput[]
    connect?: RoomUserWhereUniqueInput | RoomUserWhereUniqueInput[]
    update?: RoomUserUpdateWithWhereUniqueWithoutRoomInput | RoomUserUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: RoomUserUpdateManyWithWhereWithoutRoomInput | RoomUserUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: RoomUserScalarWhereInput | RoomUserScalarWhereInput[]
  }

  export type RoomUserUncheckedUpdateManyWithoutRoomNestedInput = {
    create?: XOR<RoomUserCreateWithoutRoomInput, RoomUserUncheckedCreateWithoutRoomInput> | RoomUserCreateWithoutRoomInput[] | RoomUserUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: RoomUserCreateOrConnectWithoutRoomInput | RoomUserCreateOrConnectWithoutRoomInput[]
    upsert?: RoomUserUpsertWithWhereUniqueWithoutRoomInput | RoomUserUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: RoomUserCreateManyRoomInputEnvelope
    set?: RoomUserWhereUniqueInput | RoomUserWhereUniqueInput[]
    disconnect?: RoomUserWhereUniqueInput | RoomUserWhereUniqueInput[]
    delete?: RoomUserWhereUniqueInput | RoomUserWhereUniqueInput[]
    connect?: RoomUserWhereUniqueInput | RoomUserWhereUniqueInput[]
    update?: RoomUserUpdateWithWhereUniqueWithoutRoomInput | RoomUserUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: RoomUserUpdateManyWithWhereWithoutRoomInput | RoomUserUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: RoomUserScalarWhereInput | RoomUserScalarWhereInput[]
  }

  export type RoomCreateNestedOneWithoutParticipantsInput = {
    create?: XOR<RoomCreateWithoutParticipantsInput, RoomUncheckedCreateWithoutParticipantsInput>
    connectOrCreate?: RoomCreateOrConnectWithoutParticipantsInput
    connect?: RoomWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutRoomsInput = {
    create?: XOR<UserCreateWithoutRoomsInput, UserUncheckedCreateWithoutRoomsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRoomsInput
    connect?: UserWhereUniqueInput
  }

  export type RoomUpdateOneRequiredWithoutParticipantsNestedInput = {
    create?: XOR<RoomCreateWithoutParticipantsInput, RoomUncheckedCreateWithoutParticipantsInput>
    connectOrCreate?: RoomCreateOrConnectWithoutParticipantsInput
    upsert?: RoomUpsertWithoutParticipantsInput
    connect?: RoomWhereUniqueInput
    update?: XOR<XOR<RoomUpdateToOneWithWhereWithoutParticipantsInput, RoomUpdateWithoutParticipantsInput>, RoomUncheckedUpdateWithoutParticipantsInput>
  }

  export type UserUpdateOneRequiredWithoutRoomsNestedInput = {
    create?: XOR<UserCreateWithoutRoomsInput, UserUncheckedCreateWithoutRoomsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRoomsInput
    upsert?: UserUpsertWithoutRoomsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRoomsInput, UserUpdateWithoutRoomsInput>, UserUncheckedUpdateWithoutRoomsInput>
  }

  export type DocumentCreatetagsInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutDocumentsInput = {
    create?: XOR<UserCreateWithoutDocumentsInput, UserUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDocumentsInput
    connect?: UserWhereUniqueInput
  }

  export type DocumentImageCreateNestedManyWithoutDocumentInput = {
    create?: XOR<DocumentImageCreateWithoutDocumentInput, DocumentImageUncheckedCreateWithoutDocumentInput> | DocumentImageCreateWithoutDocumentInput[] | DocumentImageUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: DocumentImageCreateOrConnectWithoutDocumentInput | DocumentImageCreateOrConnectWithoutDocumentInput[]
    createMany?: DocumentImageCreateManyDocumentInputEnvelope
    connect?: DocumentImageWhereUniqueInput | DocumentImageWhereUniqueInput[]
  }

  export type DocumentVersionCreateNestedManyWithoutDocumentInput = {
    create?: XOR<DocumentVersionCreateWithoutDocumentInput, DocumentVersionUncheckedCreateWithoutDocumentInput> | DocumentVersionCreateWithoutDocumentInput[] | DocumentVersionUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: DocumentVersionCreateOrConnectWithoutDocumentInput | DocumentVersionCreateOrConnectWithoutDocumentInput[]
    createMany?: DocumentVersionCreateManyDocumentInputEnvelope
    connect?: DocumentVersionWhereUniqueInput | DocumentVersionWhereUniqueInput[]
  }

  export type DocumentCollaboratorsCreateNestedManyWithoutDocumentInput = {
    create?: XOR<DocumentCollaboratorsCreateWithoutDocumentInput, DocumentCollaboratorsUncheckedCreateWithoutDocumentInput> | DocumentCollaboratorsCreateWithoutDocumentInput[] | DocumentCollaboratorsUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: DocumentCollaboratorsCreateOrConnectWithoutDocumentInput | DocumentCollaboratorsCreateOrConnectWithoutDocumentInput[]
    createMany?: DocumentCollaboratorsCreateManyDocumentInputEnvelope
    connect?: DocumentCollaboratorsWhereUniqueInput | DocumentCollaboratorsWhereUniqueInput[]
  }

  export type DocumentCommentCreateNestedManyWithoutDocumentInput = {
    create?: XOR<DocumentCommentCreateWithoutDocumentInput, DocumentCommentUncheckedCreateWithoutDocumentInput> | DocumentCommentCreateWithoutDocumentInput[] | DocumentCommentUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: DocumentCommentCreateOrConnectWithoutDocumentInput | DocumentCommentCreateOrConnectWithoutDocumentInput[]
    createMany?: DocumentCommentCreateManyDocumentInputEnvelope
    connect?: DocumentCommentWhereUniqueInput | DocumentCommentWhereUniqueInput[]
  }

  export type DocumentShareCreateNestedManyWithoutDocumentInput = {
    create?: XOR<DocumentShareCreateWithoutDocumentInput, DocumentShareUncheckedCreateWithoutDocumentInput> | DocumentShareCreateWithoutDocumentInput[] | DocumentShareUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: DocumentShareCreateOrConnectWithoutDocumentInput | DocumentShareCreateOrConnectWithoutDocumentInput[]
    createMany?: DocumentShareCreateManyDocumentInputEnvelope
    connect?: DocumentShareWhereUniqueInput | DocumentShareWhereUniqueInput[]
  }

  export type DocumentActivityCreateNestedManyWithoutDocumentInput = {
    create?: XOR<DocumentActivityCreateWithoutDocumentInput, DocumentActivityUncheckedCreateWithoutDocumentInput> | DocumentActivityCreateWithoutDocumentInput[] | DocumentActivityUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: DocumentActivityCreateOrConnectWithoutDocumentInput | DocumentActivityCreateOrConnectWithoutDocumentInput[]
    createMany?: DocumentActivityCreateManyDocumentInputEnvelope
    connect?: DocumentActivityWhereUniqueInput | DocumentActivityWhereUniqueInput[]
  }

  export type RoomCreateNestedManyWithoutDocumentInput = {
    create?: XOR<RoomCreateWithoutDocumentInput, RoomUncheckedCreateWithoutDocumentInput> | RoomCreateWithoutDocumentInput[] | RoomUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutDocumentInput | RoomCreateOrConnectWithoutDocumentInput[]
    createMany?: RoomCreateManyDocumentInputEnvelope
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
  }

  export type DocumentImageUncheckedCreateNestedManyWithoutDocumentInput = {
    create?: XOR<DocumentImageCreateWithoutDocumentInput, DocumentImageUncheckedCreateWithoutDocumentInput> | DocumentImageCreateWithoutDocumentInput[] | DocumentImageUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: DocumentImageCreateOrConnectWithoutDocumentInput | DocumentImageCreateOrConnectWithoutDocumentInput[]
    createMany?: DocumentImageCreateManyDocumentInputEnvelope
    connect?: DocumentImageWhereUniqueInput | DocumentImageWhereUniqueInput[]
  }

  export type DocumentVersionUncheckedCreateNestedManyWithoutDocumentInput = {
    create?: XOR<DocumentVersionCreateWithoutDocumentInput, DocumentVersionUncheckedCreateWithoutDocumentInput> | DocumentVersionCreateWithoutDocumentInput[] | DocumentVersionUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: DocumentVersionCreateOrConnectWithoutDocumentInput | DocumentVersionCreateOrConnectWithoutDocumentInput[]
    createMany?: DocumentVersionCreateManyDocumentInputEnvelope
    connect?: DocumentVersionWhereUniqueInput | DocumentVersionWhereUniqueInput[]
  }

  export type DocumentCollaboratorsUncheckedCreateNestedManyWithoutDocumentInput = {
    create?: XOR<DocumentCollaboratorsCreateWithoutDocumentInput, DocumentCollaboratorsUncheckedCreateWithoutDocumentInput> | DocumentCollaboratorsCreateWithoutDocumentInput[] | DocumentCollaboratorsUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: DocumentCollaboratorsCreateOrConnectWithoutDocumentInput | DocumentCollaboratorsCreateOrConnectWithoutDocumentInput[]
    createMany?: DocumentCollaboratorsCreateManyDocumentInputEnvelope
    connect?: DocumentCollaboratorsWhereUniqueInput | DocumentCollaboratorsWhereUniqueInput[]
  }

  export type DocumentCommentUncheckedCreateNestedManyWithoutDocumentInput = {
    create?: XOR<DocumentCommentCreateWithoutDocumentInput, DocumentCommentUncheckedCreateWithoutDocumentInput> | DocumentCommentCreateWithoutDocumentInput[] | DocumentCommentUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: DocumentCommentCreateOrConnectWithoutDocumentInput | DocumentCommentCreateOrConnectWithoutDocumentInput[]
    createMany?: DocumentCommentCreateManyDocumentInputEnvelope
    connect?: DocumentCommentWhereUniqueInput | DocumentCommentWhereUniqueInput[]
  }

  export type DocumentShareUncheckedCreateNestedManyWithoutDocumentInput = {
    create?: XOR<DocumentShareCreateWithoutDocumentInput, DocumentShareUncheckedCreateWithoutDocumentInput> | DocumentShareCreateWithoutDocumentInput[] | DocumentShareUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: DocumentShareCreateOrConnectWithoutDocumentInput | DocumentShareCreateOrConnectWithoutDocumentInput[]
    createMany?: DocumentShareCreateManyDocumentInputEnvelope
    connect?: DocumentShareWhereUniqueInput | DocumentShareWhereUniqueInput[]
  }

  export type DocumentActivityUncheckedCreateNestedManyWithoutDocumentInput = {
    create?: XOR<DocumentActivityCreateWithoutDocumentInput, DocumentActivityUncheckedCreateWithoutDocumentInput> | DocumentActivityCreateWithoutDocumentInput[] | DocumentActivityUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: DocumentActivityCreateOrConnectWithoutDocumentInput | DocumentActivityCreateOrConnectWithoutDocumentInput[]
    createMany?: DocumentActivityCreateManyDocumentInputEnvelope
    connect?: DocumentActivityWhereUniqueInput | DocumentActivityWhereUniqueInput[]
  }

  export type RoomUncheckedCreateNestedManyWithoutDocumentInput = {
    create?: XOR<RoomCreateWithoutDocumentInput, RoomUncheckedCreateWithoutDocumentInput> | RoomCreateWithoutDocumentInput[] | RoomUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutDocumentInput | RoomCreateOrConnectWithoutDocumentInput[]
    createMany?: RoomCreateManyDocumentInputEnvelope
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
  }

  export type DocumentUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateOneRequiredWithoutDocumentsNestedInput = {
    create?: XOR<UserCreateWithoutDocumentsInput, UserUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDocumentsInput
    upsert?: UserUpsertWithoutDocumentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDocumentsInput, UserUpdateWithoutDocumentsInput>, UserUncheckedUpdateWithoutDocumentsInput>
  }

  export type DocumentImageUpdateManyWithoutDocumentNestedInput = {
    create?: XOR<DocumentImageCreateWithoutDocumentInput, DocumentImageUncheckedCreateWithoutDocumentInput> | DocumentImageCreateWithoutDocumentInput[] | DocumentImageUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: DocumentImageCreateOrConnectWithoutDocumentInput | DocumentImageCreateOrConnectWithoutDocumentInput[]
    upsert?: DocumentImageUpsertWithWhereUniqueWithoutDocumentInput | DocumentImageUpsertWithWhereUniqueWithoutDocumentInput[]
    createMany?: DocumentImageCreateManyDocumentInputEnvelope
    set?: DocumentImageWhereUniqueInput | DocumentImageWhereUniqueInput[]
    disconnect?: DocumentImageWhereUniqueInput | DocumentImageWhereUniqueInput[]
    delete?: DocumentImageWhereUniqueInput | DocumentImageWhereUniqueInput[]
    connect?: DocumentImageWhereUniqueInput | DocumentImageWhereUniqueInput[]
    update?: DocumentImageUpdateWithWhereUniqueWithoutDocumentInput | DocumentImageUpdateWithWhereUniqueWithoutDocumentInput[]
    updateMany?: DocumentImageUpdateManyWithWhereWithoutDocumentInput | DocumentImageUpdateManyWithWhereWithoutDocumentInput[]
    deleteMany?: DocumentImageScalarWhereInput | DocumentImageScalarWhereInput[]
  }

  export type DocumentVersionUpdateManyWithoutDocumentNestedInput = {
    create?: XOR<DocumentVersionCreateWithoutDocumentInput, DocumentVersionUncheckedCreateWithoutDocumentInput> | DocumentVersionCreateWithoutDocumentInput[] | DocumentVersionUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: DocumentVersionCreateOrConnectWithoutDocumentInput | DocumentVersionCreateOrConnectWithoutDocumentInput[]
    upsert?: DocumentVersionUpsertWithWhereUniqueWithoutDocumentInput | DocumentVersionUpsertWithWhereUniqueWithoutDocumentInput[]
    createMany?: DocumentVersionCreateManyDocumentInputEnvelope
    set?: DocumentVersionWhereUniqueInput | DocumentVersionWhereUniqueInput[]
    disconnect?: DocumentVersionWhereUniqueInput | DocumentVersionWhereUniqueInput[]
    delete?: DocumentVersionWhereUniqueInput | DocumentVersionWhereUniqueInput[]
    connect?: DocumentVersionWhereUniqueInput | DocumentVersionWhereUniqueInput[]
    update?: DocumentVersionUpdateWithWhereUniqueWithoutDocumentInput | DocumentVersionUpdateWithWhereUniqueWithoutDocumentInput[]
    updateMany?: DocumentVersionUpdateManyWithWhereWithoutDocumentInput | DocumentVersionUpdateManyWithWhereWithoutDocumentInput[]
    deleteMany?: DocumentVersionScalarWhereInput | DocumentVersionScalarWhereInput[]
  }

  export type DocumentCollaboratorsUpdateManyWithoutDocumentNestedInput = {
    create?: XOR<DocumentCollaboratorsCreateWithoutDocumentInput, DocumentCollaboratorsUncheckedCreateWithoutDocumentInput> | DocumentCollaboratorsCreateWithoutDocumentInput[] | DocumentCollaboratorsUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: DocumentCollaboratorsCreateOrConnectWithoutDocumentInput | DocumentCollaboratorsCreateOrConnectWithoutDocumentInput[]
    upsert?: DocumentCollaboratorsUpsertWithWhereUniqueWithoutDocumentInput | DocumentCollaboratorsUpsertWithWhereUniqueWithoutDocumentInput[]
    createMany?: DocumentCollaboratorsCreateManyDocumentInputEnvelope
    set?: DocumentCollaboratorsWhereUniqueInput | DocumentCollaboratorsWhereUniqueInput[]
    disconnect?: DocumentCollaboratorsWhereUniqueInput | DocumentCollaboratorsWhereUniqueInput[]
    delete?: DocumentCollaboratorsWhereUniqueInput | DocumentCollaboratorsWhereUniqueInput[]
    connect?: DocumentCollaboratorsWhereUniqueInput | DocumentCollaboratorsWhereUniqueInput[]
    update?: DocumentCollaboratorsUpdateWithWhereUniqueWithoutDocumentInput | DocumentCollaboratorsUpdateWithWhereUniqueWithoutDocumentInput[]
    updateMany?: DocumentCollaboratorsUpdateManyWithWhereWithoutDocumentInput | DocumentCollaboratorsUpdateManyWithWhereWithoutDocumentInput[]
    deleteMany?: DocumentCollaboratorsScalarWhereInput | DocumentCollaboratorsScalarWhereInput[]
  }

  export type DocumentCommentUpdateManyWithoutDocumentNestedInput = {
    create?: XOR<DocumentCommentCreateWithoutDocumentInput, DocumentCommentUncheckedCreateWithoutDocumentInput> | DocumentCommentCreateWithoutDocumentInput[] | DocumentCommentUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: DocumentCommentCreateOrConnectWithoutDocumentInput | DocumentCommentCreateOrConnectWithoutDocumentInput[]
    upsert?: DocumentCommentUpsertWithWhereUniqueWithoutDocumentInput | DocumentCommentUpsertWithWhereUniqueWithoutDocumentInput[]
    createMany?: DocumentCommentCreateManyDocumentInputEnvelope
    set?: DocumentCommentWhereUniqueInput | DocumentCommentWhereUniqueInput[]
    disconnect?: DocumentCommentWhereUniqueInput | DocumentCommentWhereUniqueInput[]
    delete?: DocumentCommentWhereUniqueInput | DocumentCommentWhereUniqueInput[]
    connect?: DocumentCommentWhereUniqueInput | DocumentCommentWhereUniqueInput[]
    update?: DocumentCommentUpdateWithWhereUniqueWithoutDocumentInput | DocumentCommentUpdateWithWhereUniqueWithoutDocumentInput[]
    updateMany?: DocumentCommentUpdateManyWithWhereWithoutDocumentInput | DocumentCommentUpdateManyWithWhereWithoutDocumentInput[]
    deleteMany?: DocumentCommentScalarWhereInput | DocumentCommentScalarWhereInput[]
  }

  export type DocumentShareUpdateManyWithoutDocumentNestedInput = {
    create?: XOR<DocumentShareCreateWithoutDocumentInput, DocumentShareUncheckedCreateWithoutDocumentInput> | DocumentShareCreateWithoutDocumentInput[] | DocumentShareUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: DocumentShareCreateOrConnectWithoutDocumentInput | DocumentShareCreateOrConnectWithoutDocumentInput[]
    upsert?: DocumentShareUpsertWithWhereUniqueWithoutDocumentInput | DocumentShareUpsertWithWhereUniqueWithoutDocumentInput[]
    createMany?: DocumentShareCreateManyDocumentInputEnvelope
    set?: DocumentShareWhereUniqueInput | DocumentShareWhereUniqueInput[]
    disconnect?: DocumentShareWhereUniqueInput | DocumentShareWhereUniqueInput[]
    delete?: DocumentShareWhereUniqueInput | DocumentShareWhereUniqueInput[]
    connect?: DocumentShareWhereUniqueInput | DocumentShareWhereUniqueInput[]
    update?: DocumentShareUpdateWithWhereUniqueWithoutDocumentInput | DocumentShareUpdateWithWhereUniqueWithoutDocumentInput[]
    updateMany?: DocumentShareUpdateManyWithWhereWithoutDocumentInput | DocumentShareUpdateManyWithWhereWithoutDocumentInput[]
    deleteMany?: DocumentShareScalarWhereInput | DocumentShareScalarWhereInput[]
  }

  export type DocumentActivityUpdateManyWithoutDocumentNestedInput = {
    create?: XOR<DocumentActivityCreateWithoutDocumentInput, DocumentActivityUncheckedCreateWithoutDocumentInput> | DocumentActivityCreateWithoutDocumentInput[] | DocumentActivityUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: DocumentActivityCreateOrConnectWithoutDocumentInput | DocumentActivityCreateOrConnectWithoutDocumentInput[]
    upsert?: DocumentActivityUpsertWithWhereUniqueWithoutDocumentInput | DocumentActivityUpsertWithWhereUniqueWithoutDocumentInput[]
    createMany?: DocumentActivityCreateManyDocumentInputEnvelope
    set?: DocumentActivityWhereUniqueInput | DocumentActivityWhereUniqueInput[]
    disconnect?: DocumentActivityWhereUniqueInput | DocumentActivityWhereUniqueInput[]
    delete?: DocumentActivityWhereUniqueInput | DocumentActivityWhereUniqueInput[]
    connect?: DocumentActivityWhereUniqueInput | DocumentActivityWhereUniqueInput[]
    update?: DocumentActivityUpdateWithWhereUniqueWithoutDocumentInput | DocumentActivityUpdateWithWhereUniqueWithoutDocumentInput[]
    updateMany?: DocumentActivityUpdateManyWithWhereWithoutDocumentInput | DocumentActivityUpdateManyWithWhereWithoutDocumentInput[]
    deleteMany?: DocumentActivityScalarWhereInput | DocumentActivityScalarWhereInput[]
  }

  export type RoomUpdateManyWithoutDocumentNestedInput = {
    create?: XOR<RoomCreateWithoutDocumentInput, RoomUncheckedCreateWithoutDocumentInput> | RoomCreateWithoutDocumentInput[] | RoomUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutDocumentInput | RoomCreateOrConnectWithoutDocumentInput[]
    upsert?: RoomUpsertWithWhereUniqueWithoutDocumentInput | RoomUpsertWithWhereUniqueWithoutDocumentInput[]
    createMany?: RoomCreateManyDocumentInputEnvelope
    set?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    disconnect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    delete?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    update?: RoomUpdateWithWhereUniqueWithoutDocumentInput | RoomUpdateWithWhereUniqueWithoutDocumentInput[]
    updateMany?: RoomUpdateManyWithWhereWithoutDocumentInput | RoomUpdateManyWithWhereWithoutDocumentInput[]
    deleteMany?: RoomScalarWhereInput | RoomScalarWhereInput[]
  }

  export type DocumentImageUncheckedUpdateManyWithoutDocumentNestedInput = {
    create?: XOR<DocumentImageCreateWithoutDocumentInput, DocumentImageUncheckedCreateWithoutDocumentInput> | DocumentImageCreateWithoutDocumentInput[] | DocumentImageUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: DocumentImageCreateOrConnectWithoutDocumentInput | DocumentImageCreateOrConnectWithoutDocumentInput[]
    upsert?: DocumentImageUpsertWithWhereUniqueWithoutDocumentInput | DocumentImageUpsertWithWhereUniqueWithoutDocumentInput[]
    createMany?: DocumentImageCreateManyDocumentInputEnvelope
    set?: DocumentImageWhereUniqueInput | DocumentImageWhereUniqueInput[]
    disconnect?: DocumentImageWhereUniqueInput | DocumentImageWhereUniqueInput[]
    delete?: DocumentImageWhereUniqueInput | DocumentImageWhereUniqueInput[]
    connect?: DocumentImageWhereUniqueInput | DocumentImageWhereUniqueInput[]
    update?: DocumentImageUpdateWithWhereUniqueWithoutDocumentInput | DocumentImageUpdateWithWhereUniqueWithoutDocumentInput[]
    updateMany?: DocumentImageUpdateManyWithWhereWithoutDocumentInput | DocumentImageUpdateManyWithWhereWithoutDocumentInput[]
    deleteMany?: DocumentImageScalarWhereInput | DocumentImageScalarWhereInput[]
  }

  export type DocumentVersionUncheckedUpdateManyWithoutDocumentNestedInput = {
    create?: XOR<DocumentVersionCreateWithoutDocumentInput, DocumentVersionUncheckedCreateWithoutDocumentInput> | DocumentVersionCreateWithoutDocumentInput[] | DocumentVersionUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: DocumentVersionCreateOrConnectWithoutDocumentInput | DocumentVersionCreateOrConnectWithoutDocumentInput[]
    upsert?: DocumentVersionUpsertWithWhereUniqueWithoutDocumentInput | DocumentVersionUpsertWithWhereUniqueWithoutDocumentInput[]
    createMany?: DocumentVersionCreateManyDocumentInputEnvelope
    set?: DocumentVersionWhereUniqueInput | DocumentVersionWhereUniqueInput[]
    disconnect?: DocumentVersionWhereUniqueInput | DocumentVersionWhereUniqueInput[]
    delete?: DocumentVersionWhereUniqueInput | DocumentVersionWhereUniqueInput[]
    connect?: DocumentVersionWhereUniqueInput | DocumentVersionWhereUniqueInput[]
    update?: DocumentVersionUpdateWithWhereUniqueWithoutDocumentInput | DocumentVersionUpdateWithWhereUniqueWithoutDocumentInput[]
    updateMany?: DocumentVersionUpdateManyWithWhereWithoutDocumentInput | DocumentVersionUpdateManyWithWhereWithoutDocumentInput[]
    deleteMany?: DocumentVersionScalarWhereInput | DocumentVersionScalarWhereInput[]
  }

  export type DocumentCollaboratorsUncheckedUpdateManyWithoutDocumentNestedInput = {
    create?: XOR<DocumentCollaboratorsCreateWithoutDocumentInput, DocumentCollaboratorsUncheckedCreateWithoutDocumentInput> | DocumentCollaboratorsCreateWithoutDocumentInput[] | DocumentCollaboratorsUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: DocumentCollaboratorsCreateOrConnectWithoutDocumentInput | DocumentCollaboratorsCreateOrConnectWithoutDocumentInput[]
    upsert?: DocumentCollaboratorsUpsertWithWhereUniqueWithoutDocumentInput | DocumentCollaboratorsUpsertWithWhereUniqueWithoutDocumentInput[]
    createMany?: DocumentCollaboratorsCreateManyDocumentInputEnvelope
    set?: DocumentCollaboratorsWhereUniqueInput | DocumentCollaboratorsWhereUniqueInput[]
    disconnect?: DocumentCollaboratorsWhereUniqueInput | DocumentCollaboratorsWhereUniqueInput[]
    delete?: DocumentCollaboratorsWhereUniqueInput | DocumentCollaboratorsWhereUniqueInput[]
    connect?: DocumentCollaboratorsWhereUniqueInput | DocumentCollaboratorsWhereUniqueInput[]
    update?: DocumentCollaboratorsUpdateWithWhereUniqueWithoutDocumentInput | DocumentCollaboratorsUpdateWithWhereUniqueWithoutDocumentInput[]
    updateMany?: DocumentCollaboratorsUpdateManyWithWhereWithoutDocumentInput | DocumentCollaboratorsUpdateManyWithWhereWithoutDocumentInput[]
    deleteMany?: DocumentCollaboratorsScalarWhereInput | DocumentCollaboratorsScalarWhereInput[]
  }

  export type DocumentCommentUncheckedUpdateManyWithoutDocumentNestedInput = {
    create?: XOR<DocumentCommentCreateWithoutDocumentInput, DocumentCommentUncheckedCreateWithoutDocumentInput> | DocumentCommentCreateWithoutDocumentInput[] | DocumentCommentUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: DocumentCommentCreateOrConnectWithoutDocumentInput | DocumentCommentCreateOrConnectWithoutDocumentInput[]
    upsert?: DocumentCommentUpsertWithWhereUniqueWithoutDocumentInput | DocumentCommentUpsertWithWhereUniqueWithoutDocumentInput[]
    createMany?: DocumentCommentCreateManyDocumentInputEnvelope
    set?: DocumentCommentWhereUniqueInput | DocumentCommentWhereUniqueInput[]
    disconnect?: DocumentCommentWhereUniqueInput | DocumentCommentWhereUniqueInput[]
    delete?: DocumentCommentWhereUniqueInput | DocumentCommentWhereUniqueInput[]
    connect?: DocumentCommentWhereUniqueInput | DocumentCommentWhereUniqueInput[]
    update?: DocumentCommentUpdateWithWhereUniqueWithoutDocumentInput | DocumentCommentUpdateWithWhereUniqueWithoutDocumentInput[]
    updateMany?: DocumentCommentUpdateManyWithWhereWithoutDocumentInput | DocumentCommentUpdateManyWithWhereWithoutDocumentInput[]
    deleteMany?: DocumentCommentScalarWhereInput | DocumentCommentScalarWhereInput[]
  }

  export type DocumentShareUncheckedUpdateManyWithoutDocumentNestedInput = {
    create?: XOR<DocumentShareCreateWithoutDocumentInput, DocumentShareUncheckedCreateWithoutDocumentInput> | DocumentShareCreateWithoutDocumentInput[] | DocumentShareUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: DocumentShareCreateOrConnectWithoutDocumentInput | DocumentShareCreateOrConnectWithoutDocumentInput[]
    upsert?: DocumentShareUpsertWithWhereUniqueWithoutDocumentInput | DocumentShareUpsertWithWhereUniqueWithoutDocumentInput[]
    createMany?: DocumentShareCreateManyDocumentInputEnvelope
    set?: DocumentShareWhereUniqueInput | DocumentShareWhereUniqueInput[]
    disconnect?: DocumentShareWhereUniqueInput | DocumentShareWhereUniqueInput[]
    delete?: DocumentShareWhereUniqueInput | DocumentShareWhereUniqueInput[]
    connect?: DocumentShareWhereUniqueInput | DocumentShareWhereUniqueInput[]
    update?: DocumentShareUpdateWithWhereUniqueWithoutDocumentInput | DocumentShareUpdateWithWhereUniqueWithoutDocumentInput[]
    updateMany?: DocumentShareUpdateManyWithWhereWithoutDocumentInput | DocumentShareUpdateManyWithWhereWithoutDocumentInput[]
    deleteMany?: DocumentShareScalarWhereInput | DocumentShareScalarWhereInput[]
  }

  export type DocumentActivityUncheckedUpdateManyWithoutDocumentNestedInput = {
    create?: XOR<DocumentActivityCreateWithoutDocumentInput, DocumentActivityUncheckedCreateWithoutDocumentInput> | DocumentActivityCreateWithoutDocumentInput[] | DocumentActivityUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: DocumentActivityCreateOrConnectWithoutDocumentInput | DocumentActivityCreateOrConnectWithoutDocumentInput[]
    upsert?: DocumentActivityUpsertWithWhereUniqueWithoutDocumentInput | DocumentActivityUpsertWithWhereUniqueWithoutDocumentInput[]
    createMany?: DocumentActivityCreateManyDocumentInputEnvelope
    set?: DocumentActivityWhereUniqueInput | DocumentActivityWhereUniqueInput[]
    disconnect?: DocumentActivityWhereUniqueInput | DocumentActivityWhereUniqueInput[]
    delete?: DocumentActivityWhereUniqueInput | DocumentActivityWhereUniqueInput[]
    connect?: DocumentActivityWhereUniqueInput | DocumentActivityWhereUniqueInput[]
    update?: DocumentActivityUpdateWithWhereUniqueWithoutDocumentInput | DocumentActivityUpdateWithWhereUniqueWithoutDocumentInput[]
    updateMany?: DocumentActivityUpdateManyWithWhereWithoutDocumentInput | DocumentActivityUpdateManyWithWhereWithoutDocumentInput[]
    deleteMany?: DocumentActivityScalarWhereInput | DocumentActivityScalarWhereInput[]
  }

  export type RoomUncheckedUpdateManyWithoutDocumentNestedInput = {
    create?: XOR<RoomCreateWithoutDocumentInput, RoomUncheckedCreateWithoutDocumentInput> | RoomCreateWithoutDocumentInput[] | RoomUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutDocumentInput | RoomCreateOrConnectWithoutDocumentInput[]
    upsert?: RoomUpsertWithWhereUniqueWithoutDocumentInput | RoomUpsertWithWhereUniqueWithoutDocumentInput[]
    createMany?: RoomCreateManyDocumentInputEnvelope
    set?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    disconnect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    delete?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    update?: RoomUpdateWithWhereUniqueWithoutDocumentInput | RoomUpdateWithWhereUniqueWithoutDocumentInput[]
    updateMany?: RoomUpdateManyWithWhereWithoutDocumentInput | RoomUpdateManyWithWhereWithoutDocumentInput[]
    deleteMany?: RoomScalarWhereInput | RoomScalarWhereInput[]
  }

  export type DocumentCreateNestedOneWithoutImagesInput = {
    create?: XOR<DocumentCreateWithoutImagesInput, DocumentUncheckedCreateWithoutImagesInput>
    connectOrCreate?: DocumentCreateOrConnectWithoutImagesInput
    connect?: DocumentWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DocumentUpdateOneRequiredWithoutImagesNestedInput = {
    create?: XOR<DocumentCreateWithoutImagesInput, DocumentUncheckedCreateWithoutImagesInput>
    connectOrCreate?: DocumentCreateOrConnectWithoutImagesInput
    upsert?: DocumentUpsertWithoutImagesInput
    connect?: DocumentWhereUniqueInput
    update?: XOR<XOR<DocumentUpdateToOneWithWhereWithoutImagesInput, DocumentUpdateWithoutImagesInput>, DocumentUncheckedUpdateWithoutImagesInput>
  }

  export type DocumentCreateNestedOneWithoutVersionsInput = {
    create?: XOR<DocumentCreateWithoutVersionsInput, DocumentUncheckedCreateWithoutVersionsInput>
    connectOrCreate?: DocumentCreateOrConnectWithoutVersionsInput
    connect?: DocumentWhereUniqueInput
  }

  export type DocumentUpdateOneRequiredWithoutVersionsNestedInput = {
    create?: XOR<DocumentCreateWithoutVersionsInput, DocumentUncheckedCreateWithoutVersionsInput>
    connectOrCreate?: DocumentCreateOrConnectWithoutVersionsInput
    upsert?: DocumentUpsertWithoutVersionsInput
    connect?: DocumentWhereUniqueInput
    update?: XOR<XOR<DocumentUpdateToOneWithWhereWithoutVersionsInput, DocumentUpdateWithoutVersionsInput>, DocumentUncheckedUpdateWithoutVersionsInput>
  }

  export type DocumentCollaboratorsCreatepermissionsInput = {
    set: string[]
  }

  export type DocumentCreateNestedOneWithoutCollaboratorsInput = {
    create?: XOR<DocumentCreateWithoutCollaboratorsInput, DocumentUncheckedCreateWithoutCollaboratorsInput>
    connectOrCreate?: DocumentCreateOrConnectWithoutCollaboratorsInput
    connect?: DocumentWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCollaborationsInput = {
    create?: XOR<UserCreateWithoutCollaborationsInput, UserUncheckedCreateWithoutCollaborationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCollaborationsInput
    connect?: UserWhereUniqueInput
  }

  export type DocumentCollaboratorsUpdatepermissionsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type DocumentUpdateOneRequiredWithoutCollaboratorsNestedInput = {
    create?: XOR<DocumentCreateWithoutCollaboratorsInput, DocumentUncheckedCreateWithoutCollaboratorsInput>
    connectOrCreate?: DocumentCreateOrConnectWithoutCollaboratorsInput
    upsert?: DocumentUpsertWithoutCollaboratorsInput
    connect?: DocumentWhereUniqueInput
    update?: XOR<XOR<DocumentUpdateToOneWithWhereWithoutCollaboratorsInput, DocumentUpdateWithoutCollaboratorsInput>, DocumentUncheckedUpdateWithoutCollaboratorsInput>
  }

  export type UserUpdateOneRequiredWithoutCollaborationsNestedInput = {
    create?: XOR<UserCreateWithoutCollaborationsInput, UserUncheckedCreateWithoutCollaborationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCollaborationsInput
    upsert?: UserUpsertWithoutCollaborationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCollaborationsInput, UserUpdateWithoutCollaborationsInput>, UserUncheckedUpdateWithoutCollaborationsInput>
  }

  export type DocumentCreateNestedOneWithoutCommentsInput = {
    create?: XOR<DocumentCreateWithoutCommentsInput, DocumentUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: DocumentCreateOrConnectWithoutCommentsInput
    connect?: DocumentWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCommentsInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    connect?: UserWhereUniqueInput
  }

  export type DocumentUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<DocumentCreateWithoutCommentsInput, DocumentUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: DocumentCreateOrConnectWithoutCommentsInput
    upsert?: DocumentUpsertWithoutCommentsInput
    connect?: DocumentWhereUniqueInput
    update?: XOR<XOR<DocumentUpdateToOneWithWhereWithoutCommentsInput, DocumentUpdateWithoutCommentsInput>, DocumentUncheckedUpdateWithoutCommentsInput>
  }

  export type UserUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    upsert?: UserUpsertWithoutCommentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCommentsInput, UserUpdateWithoutCommentsInput>, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type DocumentShareCreatepermissionsInput = {
    set: string[]
  }

  export type DocumentCreateNestedOneWithoutSharesInput = {
    create?: XOR<DocumentCreateWithoutSharesInput, DocumentUncheckedCreateWithoutSharesInput>
    connectOrCreate?: DocumentCreateOrConnectWithoutSharesInput
    connect?: DocumentWhereUniqueInput
  }

  export type DocumentShareUpdatepermissionsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type DocumentUpdateOneRequiredWithoutSharesNestedInput = {
    create?: XOR<DocumentCreateWithoutSharesInput, DocumentUncheckedCreateWithoutSharesInput>
    connectOrCreate?: DocumentCreateOrConnectWithoutSharesInput
    upsert?: DocumentUpsertWithoutSharesInput
    connect?: DocumentWhereUniqueInput
    update?: XOR<XOR<DocumentUpdateToOneWithWhereWithoutSharesInput, DocumentUpdateWithoutSharesInput>, DocumentUncheckedUpdateWithoutSharesInput>
  }

  export type UserCreateNestedOneWithoutSettingsInput = {
    create?: XOR<UserCreateWithoutSettingsInput, UserUncheckedCreateWithoutSettingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSettingsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSettingsNestedInput = {
    create?: XOR<UserCreateWithoutSettingsInput, UserUncheckedCreateWithoutSettingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSettingsInput
    upsert?: UserUpsertWithoutSettingsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSettingsInput, UserUpdateWithoutSettingsInput>, UserUncheckedUpdateWithoutSettingsInput>
  }

  export type DocumentCreateNestedOneWithoutActivitiesInput = {
    create?: XOR<DocumentCreateWithoutActivitiesInput, DocumentUncheckedCreateWithoutActivitiesInput>
    connectOrCreate?: DocumentCreateOrConnectWithoutActivitiesInput
    connect?: DocumentWhereUniqueInput
  }

  export type DocumentUpdateOneRequiredWithoutActivitiesNestedInput = {
    create?: XOR<DocumentCreateWithoutActivitiesInput, DocumentUncheckedCreateWithoutActivitiesInput>
    connectOrCreate?: DocumentCreateOrConnectWithoutActivitiesInput
    upsert?: DocumentUpsertWithoutActivitiesInput
    connect?: DocumentWhereUniqueInput
    update?: XOR<XOR<DocumentUpdateToOneWithWhereWithoutActivitiesInput, DocumentUpdateWithoutActivitiesInput>, DocumentUncheckedUpdateWithoutActivitiesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type DocumentCreateWithoutUserInput = {
    id?: string
    title: string
    content: string
    isPublic?: boolean
    tags?: DocumentCreatetagsInput | string[]
    allowComments?: boolean
    allowSuggestions?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lastEditedAt?: Date | string
    images?: DocumentImageCreateNestedManyWithoutDocumentInput
    versions?: DocumentVersionCreateNestedManyWithoutDocumentInput
    collaborators?: DocumentCollaboratorsCreateNestedManyWithoutDocumentInput
    comments?: DocumentCommentCreateNestedManyWithoutDocumentInput
    shares?: DocumentShareCreateNestedManyWithoutDocumentInput
    activities?: DocumentActivityCreateNestedManyWithoutDocumentInput
    Room?: RoomCreateNestedManyWithoutDocumentInput
  }

  export type DocumentUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    content: string
    isPublic?: boolean
    tags?: DocumentCreatetagsInput | string[]
    allowComments?: boolean
    allowSuggestions?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lastEditedAt?: Date | string
    images?: DocumentImageUncheckedCreateNestedManyWithoutDocumentInput
    versions?: DocumentVersionUncheckedCreateNestedManyWithoutDocumentInput
    collaborators?: DocumentCollaboratorsUncheckedCreateNestedManyWithoutDocumentInput
    comments?: DocumentCommentUncheckedCreateNestedManyWithoutDocumentInput
    shares?: DocumentShareUncheckedCreateNestedManyWithoutDocumentInput
    activities?: DocumentActivityUncheckedCreateNestedManyWithoutDocumentInput
    Room?: RoomUncheckedCreateNestedManyWithoutDocumentInput
  }

  export type DocumentCreateOrConnectWithoutUserInput = {
    where: DocumentWhereUniqueInput
    create: XOR<DocumentCreateWithoutUserInput, DocumentUncheckedCreateWithoutUserInput>
  }

  export type DocumentCreateManyUserInputEnvelope = {
    data: DocumentCreateManyUserInput | DocumentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type DocumentCollaboratorsCreateWithoutUserInput = {
    id?: string
    role?: string
    permissions?: DocumentCollaboratorsCreatepermissionsInput | string[]
    invitedAt?: Date | string
    acceptedAt?: Date | string | null
    document: DocumentCreateNestedOneWithoutCollaboratorsInput
  }

  export type DocumentCollaboratorsUncheckedCreateWithoutUserInput = {
    id?: string
    documentId: string
    role?: string
    permissions?: DocumentCollaboratorsCreatepermissionsInput | string[]
    invitedAt?: Date | string
    acceptedAt?: Date | string | null
  }

  export type DocumentCollaboratorsCreateOrConnectWithoutUserInput = {
    where: DocumentCollaboratorsWhereUniqueInput
    create: XOR<DocumentCollaboratorsCreateWithoutUserInput, DocumentCollaboratorsUncheckedCreateWithoutUserInput>
  }

  export type DocumentCollaboratorsCreateManyUserInputEnvelope = {
    data: DocumentCollaboratorsCreateManyUserInput | DocumentCollaboratorsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type DocumentCommentCreateWithoutUserInput = {
    id?: string
    content: string
    lineNumber?: number | null
    isResolved?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    document: DocumentCreateNestedOneWithoutCommentsInput
  }

  export type DocumentCommentUncheckedCreateWithoutUserInput = {
    id?: string
    documentId: string
    content: string
    lineNumber?: number | null
    isResolved?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DocumentCommentCreateOrConnectWithoutUserInput = {
    where: DocumentCommentWhereUniqueInput
    create: XOR<DocumentCommentCreateWithoutUserInput, DocumentCommentUncheckedCreateWithoutUserInput>
  }

  export type DocumentCommentCreateManyUserInputEnvelope = {
    data: DocumentCommentCreateManyUserInput | DocumentCommentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserSettingsCreateWithoutUserInput = {
    id?: string
    editorTheme?: string
    fontSize?: number
    autoSave?: boolean
    autoSaveInterval?: number
    showLineNumbers?: boolean
    wordWrap?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserSettingsUncheckedCreateWithoutUserInput = {
    id?: string
    editorTheme?: string
    fontSize?: number
    autoSave?: boolean
    autoSaveInterval?: number
    showLineNumbers?: boolean
    wordWrap?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserSettingsCreateOrConnectWithoutUserInput = {
    where: UserSettingsWhereUniqueInput
    create: XOR<UserSettingsCreateWithoutUserInput, UserSettingsUncheckedCreateWithoutUserInput>
  }

  export type RoomUserCreateWithoutUserInput = {
    id?: string
    role?: string
    joinedAt?: Date | string
    lastActive?: Date | string
    room: RoomCreateNestedOneWithoutParticipantsInput
  }

  export type RoomUserUncheckedCreateWithoutUserInput = {
    id?: string
    roomId: string
    role?: string
    joinedAt?: Date | string
    lastActive?: Date | string
  }

  export type RoomUserCreateOrConnectWithoutUserInput = {
    where: RoomUserWhereUniqueInput
    create: XOR<RoomUserCreateWithoutUserInput, RoomUserUncheckedCreateWithoutUserInput>
  }

  export type RoomUserCreateManyUserInputEnvelope = {
    data: RoomUserCreateManyUserInput | RoomUserCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RoomCreateWithoutCreatedByInput = {
    id?: string
    name: string
    code: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    shareLink?: string | null
    shareLinkExpiresAt?: Date | string | null
    allowedEmails?: RoomCreateallowedEmailsInput | string[]
    isPublic?: boolean
    document?: DocumentCreateNestedOneWithoutRoomInput
    participants?: RoomUserCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateWithoutCreatedByInput = {
    id?: string
    name: string
    code: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    documentId?: string | null
    shareLink?: string | null
    shareLinkExpiresAt?: Date | string | null
    allowedEmails?: RoomCreateallowedEmailsInput | string[]
    isPublic?: boolean
    participants?: RoomUserUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutCreatedByInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutCreatedByInput, RoomUncheckedCreateWithoutCreatedByInput>
  }

  export type RoomCreateManyCreatedByInputEnvelope = {
    data: RoomCreateManyCreatedByInput | RoomCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type DocumentUpsertWithWhereUniqueWithoutUserInput = {
    where: DocumentWhereUniqueInput
    update: XOR<DocumentUpdateWithoutUserInput, DocumentUncheckedUpdateWithoutUserInput>
    create: XOR<DocumentCreateWithoutUserInput, DocumentUncheckedCreateWithoutUserInput>
  }

  export type DocumentUpdateWithWhereUniqueWithoutUserInput = {
    where: DocumentWhereUniqueInput
    data: XOR<DocumentUpdateWithoutUserInput, DocumentUncheckedUpdateWithoutUserInput>
  }

  export type DocumentUpdateManyWithWhereWithoutUserInput = {
    where: DocumentScalarWhereInput
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyWithoutUserInput>
  }

  export type DocumentScalarWhereInput = {
    AND?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
    OR?: DocumentScalarWhereInput[]
    NOT?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
    id?: StringFilter<"Document"> | string
    title?: StringFilter<"Document"> | string
    content?: StringFilter<"Document"> | string
    userId?: StringFilter<"Document"> | string
    isPublic?: BoolFilter<"Document"> | boolean
    tags?: StringNullableListFilter<"Document">
    allowComments?: BoolFilter<"Document"> | boolean
    allowSuggestions?: BoolFilter<"Document"> | boolean
    createdAt?: DateTimeFilter<"Document"> | Date | string
    updatedAt?: DateTimeFilter<"Document"> | Date | string
    lastEditedAt?: DateTimeFilter<"Document"> | Date | string
  }

  export type DocumentCollaboratorsUpsertWithWhereUniqueWithoutUserInput = {
    where: DocumentCollaboratorsWhereUniqueInput
    update: XOR<DocumentCollaboratorsUpdateWithoutUserInput, DocumentCollaboratorsUncheckedUpdateWithoutUserInput>
    create: XOR<DocumentCollaboratorsCreateWithoutUserInput, DocumentCollaboratorsUncheckedCreateWithoutUserInput>
  }

  export type DocumentCollaboratorsUpdateWithWhereUniqueWithoutUserInput = {
    where: DocumentCollaboratorsWhereUniqueInput
    data: XOR<DocumentCollaboratorsUpdateWithoutUserInput, DocumentCollaboratorsUncheckedUpdateWithoutUserInput>
  }

  export type DocumentCollaboratorsUpdateManyWithWhereWithoutUserInput = {
    where: DocumentCollaboratorsScalarWhereInput
    data: XOR<DocumentCollaboratorsUpdateManyMutationInput, DocumentCollaboratorsUncheckedUpdateManyWithoutUserInput>
  }

  export type DocumentCollaboratorsScalarWhereInput = {
    AND?: DocumentCollaboratorsScalarWhereInput | DocumentCollaboratorsScalarWhereInput[]
    OR?: DocumentCollaboratorsScalarWhereInput[]
    NOT?: DocumentCollaboratorsScalarWhereInput | DocumentCollaboratorsScalarWhereInput[]
    id?: StringFilter<"DocumentCollaborators"> | string
    documentId?: StringFilter<"DocumentCollaborators"> | string
    userId?: StringFilter<"DocumentCollaborators"> | string
    role?: StringFilter<"DocumentCollaborators"> | string
    permissions?: StringNullableListFilter<"DocumentCollaborators">
    invitedAt?: DateTimeFilter<"DocumentCollaborators"> | Date | string
    acceptedAt?: DateTimeNullableFilter<"DocumentCollaborators"> | Date | string | null
  }

  export type DocumentCommentUpsertWithWhereUniqueWithoutUserInput = {
    where: DocumentCommentWhereUniqueInput
    update: XOR<DocumentCommentUpdateWithoutUserInput, DocumentCommentUncheckedUpdateWithoutUserInput>
    create: XOR<DocumentCommentCreateWithoutUserInput, DocumentCommentUncheckedCreateWithoutUserInput>
  }

  export type DocumentCommentUpdateWithWhereUniqueWithoutUserInput = {
    where: DocumentCommentWhereUniqueInput
    data: XOR<DocumentCommentUpdateWithoutUserInput, DocumentCommentUncheckedUpdateWithoutUserInput>
  }

  export type DocumentCommentUpdateManyWithWhereWithoutUserInput = {
    where: DocumentCommentScalarWhereInput
    data: XOR<DocumentCommentUpdateManyMutationInput, DocumentCommentUncheckedUpdateManyWithoutUserInput>
  }

  export type DocumentCommentScalarWhereInput = {
    AND?: DocumentCommentScalarWhereInput | DocumentCommentScalarWhereInput[]
    OR?: DocumentCommentScalarWhereInput[]
    NOT?: DocumentCommentScalarWhereInput | DocumentCommentScalarWhereInput[]
    id?: StringFilter<"DocumentComment"> | string
    documentId?: StringFilter<"DocumentComment"> | string
    userId?: StringFilter<"DocumentComment"> | string
    content?: StringFilter<"DocumentComment"> | string
    lineNumber?: IntNullableFilter<"DocumentComment"> | number | null
    isResolved?: BoolFilter<"DocumentComment"> | boolean
    createdAt?: DateTimeFilter<"DocumentComment"> | Date | string
    updatedAt?: DateTimeFilter<"DocumentComment"> | Date | string
  }

  export type UserSettingsUpsertWithoutUserInput = {
    update: XOR<UserSettingsUpdateWithoutUserInput, UserSettingsUncheckedUpdateWithoutUserInput>
    create: XOR<UserSettingsCreateWithoutUserInput, UserSettingsUncheckedCreateWithoutUserInput>
    where?: UserSettingsWhereInput
  }

  export type UserSettingsUpdateToOneWithWhereWithoutUserInput = {
    where?: UserSettingsWhereInput
    data: XOR<UserSettingsUpdateWithoutUserInput, UserSettingsUncheckedUpdateWithoutUserInput>
  }

  export type UserSettingsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    editorTheme?: StringFieldUpdateOperationsInput | string
    fontSize?: IntFieldUpdateOperationsInput | number
    autoSave?: BoolFieldUpdateOperationsInput | boolean
    autoSaveInterval?: IntFieldUpdateOperationsInput | number
    showLineNumbers?: BoolFieldUpdateOperationsInput | boolean
    wordWrap?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSettingsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    editorTheme?: StringFieldUpdateOperationsInput | string
    fontSize?: IntFieldUpdateOperationsInput | number
    autoSave?: BoolFieldUpdateOperationsInput | boolean
    autoSaveInterval?: IntFieldUpdateOperationsInput | number
    showLineNumbers?: BoolFieldUpdateOperationsInput | boolean
    wordWrap?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomUserUpsertWithWhereUniqueWithoutUserInput = {
    where: RoomUserWhereUniqueInput
    update: XOR<RoomUserUpdateWithoutUserInput, RoomUserUncheckedUpdateWithoutUserInput>
    create: XOR<RoomUserCreateWithoutUserInput, RoomUserUncheckedCreateWithoutUserInput>
  }

  export type RoomUserUpdateWithWhereUniqueWithoutUserInput = {
    where: RoomUserWhereUniqueInput
    data: XOR<RoomUserUpdateWithoutUserInput, RoomUserUncheckedUpdateWithoutUserInput>
  }

  export type RoomUserUpdateManyWithWhereWithoutUserInput = {
    where: RoomUserScalarWhereInput
    data: XOR<RoomUserUpdateManyMutationInput, RoomUserUncheckedUpdateManyWithoutUserInput>
  }

  export type RoomUserScalarWhereInput = {
    AND?: RoomUserScalarWhereInput | RoomUserScalarWhereInput[]
    OR?: RoomUserScalarWhereInput[]
    NOT?: RoomUserScalarWhereInput | RoomUserScalarWhereInput[]
    id?: StringFilter<"RoomUser"> | string
    roomId?: StringFilter<"RoomUser"> | string
    userId?: StringFilter<"RoomUser"> | string
    role?: StringFilter<"RoomUser"> | string
    joinedAt?: DateTimeFilter<"RoomUser"> | Date | string
    lastActive?: DateTimeFilter<"RoomUser"> | Date | string
  }

  export type RoomUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: RoomWhereUniqueInput
    update: XOR<RoomUpdateWithoutCreatedByInput, RoomUncheckedUpdateWithoutCreatedByInput>
    create: XOR<RoomCreateWithoutCreatedByInput, RoomUncheckedCreateWithoutCreatedByInput>
  }

  export type RoomUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: RoomWhereUniqueInput
    data: XOR<RoomUpdateWithoutCreatedByInput, RoomUncheckedUpdateWithoutCreatedByInput>
  }

  export type RoomUpdateManyWithWhereWithoutCreatedByInput = {
    where: RoomScalarWhereInput
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type RoomScalarWhereInput = {
    AND?: RoomScalarWhereInput | RoomScalarWhereInput[]
    OR?: RoomScalarWhereInput[]
    NOT?: RoomScalarWhereInput | RoomScalarWhereInput[]
    id?: StringFilter<"Room"> | string
    name?: StringFilter<"Room"> | string
    code?: StringFilter<"Room"> | string
    isActive?: BoolFilter<"Room"> | boolean
    createdAt?: DateTimeFilter<"Room"> | Date | string
    updatedAt?: DateTimeFilter<"Room"> | Date | string
    createdById?: StringFilter<"Room"> | string
    documentId?: StringNullableFilter<"Room"> | string | null
    shareLink?: StringNullableFilter<"Room"> | string | null
    shareLinkExpiresAt?: DateTimeNullableFilter<"Room"> | Date | string | null
    allowedEmails?: StringNullableListFilter<"Room">
    isPublic?: BoolFilter<"Room"> | boolean
  }

  export type UserCreateWithoutCreatedRoomsInput = {
    id?: string
    avatar?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: DocumentCreateNestedManyWithoutUserInput
    collaborations?: DocumentCollaboratorsCreateNestedManyWithoutUserInput
    comments?: DocumentCommentCreateNestedManyWithoutUserInput
    settings?: UserSettingsCreateNestedOneWithoutUserInput
    rooms?: RoomUserCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCreatedRoomsInput = {
    id?: string
    avatar?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: DocumentUncheckedCreateNestedManyWithoutUserInput
    collaborations?: DocumentCollaboratorsUncheckedCreateNestedManyWithoutUserInput
    comments?: DocumentCommentUncheckedCreateNestedManyWithoutUserInput
    settings?: UserSettingsUncheckedCreateNestedOneWithoutUserInput
    rooms?: RoomUserUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCreatedRoomsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedRoomsInput, UserUncheckedCreateWithoutCreatedRoomsInput>
  }

  export type DocumentCreateWithoutRoomInput = {
    id?: string
    title: string
    content: string
    isPublic?: boolean
    tags?: DocumentCreatetagsInput | string[]
    allowComments?: boolean
    allowSuggestions?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lastEditedAt?: Date | string
    user: UserCreateNestedOneWithoutDocumentsInput
    images?: DocumentImageCreateNestedManyWithoutDocumentInput
    versions?: DocumentVersionCreateNestedManyWithoutDocumentInput
    collaborators?: DocumentCollaboratorsCreateNestedManyWithoutDocumentInput
    comments?: DocumentCommentCreateNestedManyWithoutDocumentInput
    shares?: DocumentShareCreateNestedManyWithoutDocumentInput
    activities?: DocumentActivityCreateNestedManyWithoutDocumentInput
  }

  export type DocumentUncheckedCreateWithoutRoomInput = {
    id?: string
    title: string
    content: string
    userId: string
    isPublic?: boolean
    tags?: DocumentCreatetagsInput | string[]
    allowComments?: boolean
    allowSuggestions?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lastEditedAt?: Date | string
    images?: DocumentImageUncheckedCreateNestedManyWithoutDocumentInput
    versions?: DocumentVersionUncheckedCreateNestedManyWithoutDocumentInput
    collaborators?: DocumentCollaboratorsUncheckedCreateNestedManyWithoutDocumentInput
    comments?: DocumentCommentUncheckedCreateNestedManyWithoutDocumentInput
    shares?: DocumentShareUncheckedCreateNestedManyWithoutDocumentInput
    activities?: DocumentActivityUncheckedCreateNestedManyWithoutDocumentInput
  }

  export type DocumentCreateOrConnectWithoutRoomInput = {
    where: DocumentWhereUniqueInput
    create: XOR<DocumentCreateWithoutRoomInput, DocumentUncheckedCreateWithoutRoomInput>
  }

  export type RoomUserCreateWithoutRoomInput = {
    id?: string
    role?: string
    joinedAt?: Date | string
    lastActive?: Date | string
    user: UserCreateNestedOneWithoutRoomsInput
  }

  export type RoomUserUncheckedCreateWithoutRoomInput = {
    id?: string
    userId: string
    role?: string
    joinedAt?: Date | string
    lastActive?: Date | string
  }

  export type RoomUserCreateOrConnectWithoutRoomInput = {
    where: RoomUserWhereUniqueInput
    create: XOR<RoomUserCreateWithoutRoomInput, RoomUserUncheckedCreateWithoutRoomInput>
  }

  export type RoomUserCreateManyRoomInputEnvelope = {
    data: RoomUserCreateManyRoomInput | RoomUserCreateManyRoomInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCreatedRoomsInput = {
    update: XOR<UserUpdateWithoutCreatedRoomsInput, UserUncheckedUpdateWithoutCreatedRoomsInput>
    create: XOR<UserCreateWithoutCreatedRoomsInput, UserUncheckedCreateWithoutCreatedRoomsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedRoomsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedRoomsInput, UserUncheckedUpdateWithoutCreatedRoomsInput>
  }

  export type UserUpdateWithoutCreatedRoomsInput = {
    id?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: DocumentUpdateManyWithoutUserNestedInput
    collaborations?: DocumentCollaboratorsUpdateManyWithoutUserNestedInput
    comments?: DocumentCommentUpdateManyWithoutUserNestedInput
    settings?: UserSettingsUpdateOneWithoutUserNestedInput
    rooms?: RoomUserUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedRoomsInput = {
    id?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: DocumentUncheckedUpdateManyWithoutUserNestedInput
    collaborations?: DocumentCollaboratorsUncheckedUpdateManyWithoutUserNestedInput
    comments?: DocumentCommentUncheckedUpdateManyWithoutUserNestedInput
    settings?: UserSettingsUncheckedUpdateOneWithoutUserNestedInput
    rooms?: RoomUserUncheckedUpdateManyWithoutUserNestedInput
  }

  export type DocumentUpsertWithoutRoomInput = {
    update: XOR<DocumentUpdateWithoutRoomInput, DocumentUncheckedUpdateWithoutRoomInput>
    create: XOR<DocumentCreateWithoutRoomInput, DocumentUncheckedCreateWithoutRoomInput>
    where?: DocumentWhereInput
  }

  export type DocumentUpdateToOneWithWhereWithoutRoomInput = {
    where?: DocumentWhereInput
    data: XOR<DocumentUpdateWithoutRoomInput, DocumentUncheckedUpdateWithoutRoomInput>
  }

  export type DocumentUpdateWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    tags?: DocumentUpdatetagsInput | string[]
    allowComments?: BoolFieldUpdateOperationsInput | boolean
    allowSuggestions?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastEditedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDocumentsNestedInput
    images?: DocumentImageUpdateManyWithoutDocumentNestedInput
    versions?: DocumentVersionUpdateManyWithoutDocumentNestedInput
    collaborators?: DocumentCollaboratorsUpdateManyWithoutDocumentNestedInput
    comments?: DocumentCommentUpdateManyWithoutDocumentNestedInput
    shares?: DocumentShareUpdateManyWithoutDocumentNestedInput
    activities?: DocumentActivityUpdateManyWithoutDocumentNestedInput
  }

  export type DocumentUncheckedUpdateWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    tags?: DocumentUpdatetagsInput | string[]
    allowComments?: BoolFieldUpdateOperationsInput | boolean
    allowSuggestions?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastEditedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: DocumentImageUncheckedUpdateManyWithoutDocumentNestedInput
    versions?: DocumentVersionUncheckedUpdateManyWithoutDocumentNestedInput
    collaborators?: DocumentCollaboratorsUncheckedUpdateManyWithoutDocumentNestedInput
    comments?: DocumentCommentUncheckedUpdateManyWithoutDocumentNestedInput
    shares?: DocumentShareUncheckedUpdateManyWithoutDocumentNestedInput
    activities?: DocumentActivityUncheckedUpdateManyWithoutDocumentNestedInput
  }

  export type RoomUserUpsertWithWhereUniqueWithoutRoomInput = {
    where: RoomUserWhereUniqueInput
    update: XOR<RoomUserUpdateWithoutRoomInput, RoomUserUncheckedUpdateWithoutRoomInput>
    create: XOR<RoomUserCreateWithoutRoomInput, RoomUserUncheckedCreateWithoutRoomInput>
  }

  export type RoomUserUpdateWithWhereUniqueWithoutRoomInput = {
    where: RoomUserWhereUniqueInput
    data: XOR<RoomUserUpdateWithoutRoomInput, RoomUserUncheckedUpdateWithoutRoomInput>
  }

  export type RoomUserUpdateManyWithWhereWithoutRoomInput = {
    where: RoomUserScalarWhereInput
    data: XOR<RoomUserUpdateManyMutationInput, RoomUserUncheckedUpdateManyWithoutRoomInput>
  }

  export type RoomCreateWithoutParticipantsInput = {
    id?: string
    name: string
    code: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    shareLink?: string | null
    shareLinkExpiresAt?: Date | string | null
    allowedEmails?: RoomCreateallowedEmailsInput | string[]
    isPublic?: boolean
    createdBy: UserCreateNestedOneWithoutCreatedRoomsInput
    document?: DocumentCreateNestedOneWithoutRoomInput
  }

  export type RoomUncheckedCreateWithoutParticipantsInput = {
    id?: string
    name: string
    code: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById: string
    documentId?: string | null
    shareLink?: string | null
    shareLinkExpiresAt?: Date | string | null
    allowedEmails?: RoomCreateallowedEmailsInput | string[]
    isPublic?: boolean
  }

  export type RoomCreateOrConnectWithoutParticipantsInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutParticipantsInput, RoomUncheckedCreateWithoutParticipantsInput>
  }

  export type UserCreateWithoutRoomsInput = {
    id?: string
    avatar?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: DocumentCreateNestedManyWithoutUserInput
    collaborations?: DocumentCollaboratorsCreateNestedManyWithoutUserInput
    comments?: DocumentCommentCreateNestedManyWithoutUserInput
    settings?: UserSettingsCreateNestedOneWithoutUserInput
    createdRooms?: RoomCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutRoomsInput = {
    id?: string
    avatar?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: DocumentUncheckedCreateNestedManyWithoutUserInput
    collaborations?: DocumentCollaboratorsUncheckedCreateNestedManyWithoutUserInput
    comments?: DocumentCommentUncheckedCreateNestedManyWithoutUserInput
    settings?: UserSettingsUncheckedCreateNestedOneWithoutUserInput
    createdRooms?: RoomUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutRoomsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRoomsInput, UserUncheckedCreateWithoutRoomsInput>
  }

  export type RoomUpsertWithoutParticipantsInput = {
    update: XOR<RoomUpdateWithoutParticipantsInput, RoomUncheckedUpdateWithoutParticipantsInput>
    create: XOR<RoomCreateWithoutParticipantsInput, RoomUncheckedCreateWithoutParticipantsInput>
    where?: RoomWhereInput
  }

  export type RoomUpdateToOneWithWhereWithoutParticipantsInput = {
    where?: RoomWhereInput
    data: XOR<RoomUpdateWithoutParticipantsInput, RoomUncheckedUpdateWithoutParticipantsInput>
  }

  export type RoomUpdateWithoutParticipantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shareLink?: NullableStringFieldUpdateOperationsInput | string | null
    shareLinkExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    allowedEmails?: RoomUpdateallowedEmailsInput | string[]
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: UserUpdateOneRequiredWithoutCreatedRoomsNestedInput
    document?: DocumentUpdateOneWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutParticipantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
    documentId?: NullableStringFieldUpdateOperationsInput | string | null
    shareLink?: NullableStringFieldUpdateOperationsInput | string | null
    shareLinkExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    allowedEmails?: RoomUpdateallowedEmailsInput | string[]
    isPublic?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserUpsertWithoutRoomsInput = {
    update: XOR<UserUpdateWithoutRoomsInput, UserUncheckedUpdateWithoutRoomsInput>
    create: XOR<UserCreateWithoutRoomsInput, UserUncheckedCreateWithoutRoomsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRoomsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRoomsInput, UserUncheckedUpdateWithoutRoomsInput>
  }

  export type UserUpdateWithoutRoomsInput = {
    id?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: DocumentUpdateManyWithoutUserNestedInput
    collaborations?: DocumentCollaboratorsUpdateManyWithoutUserNestedInput
    comments?: DocumentCommentUpdateManyWithoutUserNestedInput
    settings?: UserSettingsUpdateOneWithoutUserNestedInput
    createdRooms?: RoomUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutRoomsInput = {
    id?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: DocumentUncheckedUpdateManyWithoutUserNestedInput
    collaborations?: DocumentCollaboratorsUncheckedUpdateManyWithoutUserNestedInput
    comments?: DocumentCommentUncheckedUpdateManyWithoutUserNestedInput
    settings?: UserSettingsUncheckedUpdateOneWithoutUserNestedInput
    createdRooms?: RoomUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type UserCreateWithoutDocumentsInput = {
    id?: string
    avatar?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    collaborations?: DocumentCollaboratorsCreateNestedManyWithoutUserInput
    comments?: DocumentCommentCreateNestedManyWithoutUserInput
    settings?: UserSettingsCreateNestedOneWithoutUserInput
    rooms?: RoomUserCreateNestedManyWithoutUserInput
    createdRooms?: RoomCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutDocumentsInput = {
    id?: string
    avatar?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    collaborations?: DocumentCollaboratorsUncheckedCreateNestedManyWithoutUserInput
    comments?: DocumentCommentUncheckedCreateNestedManyWithoutUserInput
    settings?: UserSettingsUncheckedCreateNestedOneWithoutUserInput
    rooms?: RoomUserUncheckedCreateNestedManyWithoutUserInput
    createdRooms?: RoomUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutDocumentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDocumentsInput, UserUncheckedCreateWithoutDocumentsInput>
  }

  export type DocumentImageCreateWithoutDocumentInput = {
    id?: string
    fileName: string
    originalName: string
    fileUrl: string
    fileSize: number
    mimeType: string
    width?: number | null
    height?: number | null
    createdAt?: Date | string
  }

  export type DocumentImageUncheckedCreateWithoutDocumentInput = {
    id?: string
    fileName: string
    originalName: string
    fileUrl: string
    fileSize: number
    mimeType: string
    width?: number | null
    height?: number | null
    createdAt?: Date | string
  }

  export type DocumentImageCreateOrConnectWithoutDocumentInput = {
    where: DocumentImageWhereUniqueInput
    create: XOR<DocumentImageCreateWithoutDocumentInput, DocumentImageUncheckedCreateWithoutDocumentInput>
  }

  export type DocumentImageCreateManyDocumentInputEnvelope = {
    data: DocumentImageCreateManyDocumentInput | DocumentImageCreateManyDocumentInput[]
    skipDuplicates?: boolean
  }

  export type DocumentVersionCreateWithoutDocumentInput = {
    id?: string
    content: string
    versionNumber: number
    changeDescription?: string | null
    createdAt?: Date | string
    createdBy: string
  }

  export type DocumentVersionUncheckedCreateWithoutDocumentInput = {
    id?: string
    content: string
    versionNumber: number
    changeDescription?: string | null
    createdAt?: Date | string
    createdBy: string
  }

  export type DocumentVersionCreateOrConnectWithoutDocumentInput = {
    where: DocumentVersionWhereUniqueInput
    create: XOR<DocumentVersionCreateWithoutDocumentInput, DocumentVersionUncheckedCreateWithoutDocumentInput>
  }

  export type DocumentVersionCreateManyDocumentInputEnvelope = {
    data: DocumentVersionCreateManyDocumentInput | DocumentVersionCreateManyDocumentInput[]
    skipDuplicates?: boolean
  }

  export type DocumentCollaboratorsCreateWithoutDocumentInput = {
    id?: string
    role?: string
    permissions?: DocumentCollaboratorsCreatepermissionsInput | string[]
    invitedAt?: Date | string
    acceptedAt?: Date | string | null
    user: UserCreateNestedOneWithoutCollaborationsInput
  }

  export type DocumentCollaboratorsUncheckedCreateWithoutDocumentInput = {
    id?: string
    userId: string
    role?: string
    permissions?: DocumentCollaboratorsCreatepermissionsInput | string[]
    invitedAt?: Date | string
    acceptedAt?: Date | string | null
  }

  export type DocumentCollaboratorsCreateOrConnectWithoutDocumentInput = {
    where: DocumentCollaboratorsWhereUniqueInput
    create: XOR<DocumentCollaboratorsCreateWithoutDocumentInput, DocumentCollaboratorsUncheckedCreateWithoutDocumentInput>
  }

  export type DocumentCollaboratorsCreateManyDocumentInputEnvelope = {
    data: DocumentCollaboratorsCreateManyDocumentInput | DocumentCollaboratorsCreateManyDocumentInput[]
    skipDuplicates?: boolean
  }

  export type DocumentCommentCreateWithoutDocumentInput = {
    id?: string
    content: string
    lineNumber?: number | null
    isResolved?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCommentsInput
  }

  export type DocumentCommentUncheckedCreateWithoutDocumentInput = {
    id?: string
    userId: string
    content: string
    lineNumber?: number | null
    isResolved?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DocumentCommentCreateOrConnectWithoutDocumentInput = {
    where: DocumentCommentWhereUniqueInput
    create: XOR<DocumentCommentCreateWithoutDocumentInput, DocumentCommentUncheckedCreateWithoutDocumentInput>
  }

  export type DocumentCommentCreateManyDocumentInputEnvelope = {
    data: DocumentCommentCreateManyDocumentInput | DocumentCommentCreateManyDocumentInput[]
    skipDuplicates?: boolean
  }

  export type DocumentShareCreateWithoutDocumentInput = {
    id?: string
    shareToken: string
    permissions?: DocumentShareCreatepermissionsInput | string[]
    expiresAt?: Date | string | null
    maxUses?: number | null
    useCount?: number
    createdAt?: Date | string
    createdBy: string
  }

  export type DocumentShareUncheckedCreateWithoutDocumentInput = {
    id?: string
    shareToken: string
    permissions?: DocumentShareCreatepermissionsInput | string[]
    expiresAt?: Date | string | null
    maxUses?: number | null
    useCount?: number
    createdAt?: Date | string
    createdBy: string
  }

  export type DocumentShareCreateOrConnectWithoutDocumentInput = {
    where: DocumentShareWhereUniqueInput
    create: XOR<DocumentShareCreateWithoutDocumentInput, DocumentShareUncheckedCreateWithoutDocumentInput>
  }

  export type DocumentShareCreateManyDocumentInputEnvelope = {
    data: DocumentShareCreateManyDocumentInput | DocumentShareCreateManyDocumentInput[]
    skipDuplicates?: boolean
  }

  export type DocumentActivityCreateWithoutDocumentInput = {
    id?: string
    userId: string
    action: string
    description?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type DocumentActivityUncheckedCreateWithoutDocumentInput = {
    id?: string
    userId: string
    action: string
    description?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type DocumentActivityCreateOrConnectWithoutDocumentInput = {
    where: DocumentActivityWhereUniqueInput
    create: XOR<DocumentActivityCreateWithoutDocumentInput, DocumentActivityUncheckedCreateWithoutDocumentInput>
  }

  export type DocumentActivityCreateManyDocumentInputEnvelope = {
    data: DocumentActivityCreateManyDocumentInput | DocumentActivityCreateManyDocumentInput[]
    skipDuplicates?: boolean
  }

  export type RoomCreateWithoutDocumentInput = {
    id?: string
    name: string
    code: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    shareLink?: string | null
    shareLinkExpiresAt?: Date | string | null
    allowedEmails?: RoomCreateallowedEmailsInput | string[]
    isPublic?: boolean
    createdBy: UserCreateNestedOneWithoutCreatedRoomsInput
    participants?: RoomUserCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateWithoutDocumentInput = {
    id?: string
    name: string
    code: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById: string
    shareLink?: string | null
    shareLinkExpiresAt?: Date | string | null
    allowedEmails?: RoomCreateallowedEmailsInput | string[]
    isPublic?: boolean
    participants?: RoomUserUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutDocumentInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutDocumentInput, RoomUncheckedCreateWithoutDocumentInput>
  }

  export type RoomCreateManyDocumentInputEnvelope = {
    data: RoomCreateManyDocumentInput | RoomCreateManyDocumentInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutDocumentsInput = {
    update: XOR<UserUpdateWithoutDocumentsInput, UserUncheckedUpdateWithoutDocumentsInput>
    create: XOR<UserCreateWithoutDocumentsInput, UserUncheckedCreateWithoutDocumentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDocumentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDocumentsInput, UserUncheckedUpdateWithoutDocumentsInput>
  }

  export type UserUpdateWithoutDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    collaborations?: DocumentCollaboratorsUpdateManyWithoutUserNestedInput
    comments?: DocumentCommentUpdateManyWithoutUserNestedInput
    settings?: UserSettingsUpdateOneWithoutUserNestedInput
    rooms?: RoomUserUpdateManyWithoutUserNestedInput
    createdRooms?: RoomUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    collaborations?: DocumentCollaboratorsUncheckedUpdateManyWithoutUserNestedInput
    comments?: DocumentCommentUncheckedUpdateManyWithoutUserNestedInput
    settings?: UserSettingsUncheckedUpdateOneWithoutUserNestedInput
    rooms?: RoomUserUncheckedUpdateManyWithoutUserNestedInput
    createdRooms?: RoomUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type DocumentImageUpsertWithWhereUniqueWithoutDocumentInput = {
    where: DocumentImageWhereUniqueInput
    update: XOR<DocumentImageUpdateWithoutDocumentInput, DocumentImageUncheckedUpdateWithoutDocumentInput>
    create: XOR<DocumentImageCreateWithoutDocumentInput, DocumentImageUncheckedCreateWithoutDocumentInput>
  }

  export type DocumentImageUpdateWithWhereUniqueWithoutDocumentInput = {
    where: DocumentImageWhereUniqueInput
    data: XOR<DocumentImageUpdateWithoutDocumentInput, DocumentImageUncheckedUpdateWithoutDocumentInput>
  }

  export type DocumentImageUpdateManyWithWhereWithoutDocumentInput = {
    where: DocumentImageScalarWhereInput
    data: XOR<DocumentImageUpdateManyMutationInput, DocumentImageUncheckedUpdateManyWithoutDocumentInput>
  }

  export type DocumentImageScalarWhereInput = {
    AND?: DocumentImageScalarWhereInput | DocumentImageScalarWhereInput[]
    OR?: DocumentImageScalarWhereInput[]
    NOT?: DocumentImageScalarWhereInput | DocumentImageScalarWhereInput[]
    id?: StringFilter<"DocumentImage"> | string
    documentId?: StringFilter<"DocumentImage"> | string
    fileName?: StringFilter<"DocumentImage"> | string
    originalName?: StringFilter<"DocumentImage"> | string
    fileUrl?: StringFilter<"DocumentImage"> | string
    fileSize?: IntFilter<"DocumentImage"> | number
    mimeType?: StringFilter<"DocumentImage"> | string
    width?: IntNullableFilter<"DocumentImage"> | number | null
    height?: IntNullableFilter<"DocumentImage"> | number | null
    createdAt?: DateTimeFilter<"DocumentImage"> | Date | string
  }

  export type DocumentVersionUpsertWithWhereUniqueWithoutDocumentInput = {
    where: DocumentVersionWhereUniqueInput
    update: XOR<DocumentVersionUpdateWithoutDocumentInput, DocumentVersionUncheckedUpdateWithoutDocumentInput>
    create: XOR<DocumentVersionCreateWithoutDocumentInput, DocumentVersionUncheckedCreateWithoutDocumentInput>
  }

  export type DocumentVersionUpdateWithWhereUniqueWithoutDocumentInput = {
    where: DocumentVersionWhereUniqueInput
    data: XOR<DocumentVersionUpdateWithoutDocumentInput, DocumentVersionUncheckedUpdateWithoutDocumentInput>
  }

  export type DocumentVersionUpdateManyWithWhereWithoutDocumentInput = {
    where: DocumentVersionScalarWhereInput
    data: XOR<DocumentVersionUpdateManyMutationInput, DocumentVersionUncheckedUpdateManyWithoutDocumentInput>
  }

  export type DocumentVersionScalarWhereInput = {
    AND?: DocumentVersionScalarWhereInput | DocumentVersionScalarWhereInput[]
    OR?: DocumentVersionScalarWhereInput[]
    NOT?: DocumentVersionScalarWhereInput | DocumentVersionScalarWhereInput[]
    id?: StringFilter<"DocumentVersion"> | string
    documentId?: StringFilter<"DocumentVersion"> | string
    content?: StringFilter<"DocumentVersion"> | string
    versionNumber?: IntFilter<"DocumentVersion"> | number
    changeDescription?: StringNullableFilter<"DocumentVersion"> | string | null
    createdAt?: DateTimeFilter<"DocumentVersion"> | Date | string
    createdBy?: StringFilter<"DocumentVersion"> | string
  }

  export type DocumentCollaboratorsUpsertWithWhereUniqueWithoutDocumentInput = {
    where: DocumentCollaboratorsWhereUniqueInput
    update: XOR<DocumentCollaboratorsUpdateWithoutDocumentInput, DocumentCollaboratorsUncheckedUpdateWithoutDocumentInput>
    create: XOR<DocumentCollaboratorsCreateWithoutDocumentInput, DocumentCollaboratorsUncheckedCreateWithoutDocumentInput>
  }

  export type DocumentCollaboratorsUpdateWithWhereUniqueWithoutDocumentInput = {
    where: DocumentCollaboratorsWhereUniqueInput
    data: XOR<DocumentCollaboratorsUpdateWithoutDocumentInput, DocumentCollaboratorsUncheckedUpdateWithoutDocumentInput>
  }

  export type DocumentCollaboratorsUpdateManyWithWhereWithoutDocumentInput = {
    where: DocumentCollaboratorsScalarWhereInput
    data: XOR<DocumentCollaboratorsUpdateManyMutationInput, DocumentCollaboratorsUncheckedUpdateManyWithoutDocumentInput>
  }

  export type DocumentCommentUpsertWithWhereUniqueWithoutDocumentInput = {
    where: DocumentCommentWhereUniqueInput
    update: XOR<DocumentCommentUpdateWithoutDocumentInput, DocumentCommentUncheckedUpdateWithoutDocumentInput>
    create: XOR<DocumentCommentCreateWithoutDocumentInput, DocumentCommentUncheckedCreateWithoutDocumentInput>
  }

  export type DocumentCommentUpdateWithWhereUniqueWithoutDocumentInput = {
    where: DocumentCommentWhereUniqueInput
    data: XOR<DocumentCommentUpdateWithoutDocumentInput, DocumentCommentUncheckedUpdateWithoutDocumentInput>
  }

  export type DocumentCommentUpdateManyWithWhereWithoutDocumentInput = {
    where: DocumentCommentScalarWhereInput
    data: XOR<DocumentCommentUpdateManyMutationInput, DocumentCommentUncheckedUpdateManyWithoutDocumentInput>
  }

  export type DocumentShareUpsertWithWhereUniqueWithoutDocumentInput = {
    where: DocumentShareWhereUniqueInput
    update: XOR<DocumentShareUpdateWithoutDocumentInput, DocumentShareUncheckedUpdateWithoutDocumentInput>
    create: XOR<DocumentShareCreateWithoutDocumentInput, DocumentShareUncheckedCreateWithoutDocumentInput>
  }

  export type DocumentShareUpdateWithWhereUniqueWithoutDocumentInput = {
    where: DocumentShareWhereUniqueInput
    data: XOR<DocumentShareUpdateWithoutDocumentInput, DocumentShareUncheckedUpdateWithoutDocumentInput>
  }

  export type DocumentShareUpdateManyWithWhereWithoutDocumentInput = {
    where: DocumentShareScalarWhereInput
    data: XOR<DocumentShareUpdateManyMutationInput, DocumentShareUncheckedUpdateManyWithoutDocumentInput>
  }

  export type DocumentShareScalarWhereInput = {
    AND?: DocumentShareScalarWhereInput | DocumentShareScalarWhereInput[]
    OR?: DocumentShareScalarWhereInput[]
    NOT?: DocumentShareScalarWhereInput | DocumentShareScalarWhereInput[]
    id?: StringFilter<"DocumentShare"> | string
    documentId?: StringFilter<"DocumentShare"> | string
    shareToken?: StringFilter<"DocumentShare"> | string
    permissions?: StringNullableListFilter<"DocumentShare">
    expiresAt?: DateTimeNullableFilter<"DocumentShare"> | Date | string | null
    maxUses?: IntNullableFilter<"DocumentShare"> | number | null
    useCount?: IntFilter<"DocumentShare"> | number
    createdAt?: DateTimeFilter<"DocumentShare"> | Date | string
    createdBy?: StringFilter<"DocumentShare"> | string
  }

  export type DocumentActivityUpsertWithWhereUniqueWithoutDocumentInput = {
    where: DocumentActivityWhereUniqueInput
    update: XOR<DocumentActivityUpdateWithoutDocumentInput, DocumentActivityUncheckedUpdateWithoutDocumentInput>
    create: XOR<DocumentActivityCreateWithoutDocumentInput, DocumentActivityUncheckedCreateWithoutDocumentInput>
  }

  export type DocumentActivityUpdateWithWhereUniqueWithoutDocumentInput = {
    where: DocumentActivityWhereUniqueInput
    data: XOR<DocumentActivityUpdateWithoutDocumentInput, DocumentActivityUncheckedUpdateWithoutDocumentInput>
  }

  export type DocumentActivityUpdateManyWithWhereWithoutDocumentInput = {
    where: DocumentActivityScalarWhereInput
    data: XOR<DocumentActivityUpdateManyMutationInput, DocumentActivityUncheckedUpdateManyWithoutDocumentInput>
  }

  export type DocumentActivityScalarWhereInput = {
    AND?: DocumentActivityScalarWhereInput | DocumentActivityScalarWhereInput[]
    OR?: DocumentActivityScalarWhereInput[]
    NOT?: DocumentActivityScalarWhereInput | DocumentActivityScalarWhereInput[]
    id?: StringFilter<"DocumentActivity"> | string
    documentId?: StringFilter<"DocumentActivity"> | string
    userId?: StringFilter<"DocumentActivity"> | string
    action?: StringFilter<"DocumentActivity"> | string
    description?: StringNullableFilter<"DocumentActivity"> | string | null
    metadata?: JsonNullableFilter<"DocumentActivity">
    createdAt?: DateTimeFilter<"DocumentActivity"> | Date | string
  }

  export type RoomUpsertWithWhereUniqueWithoutDocumentInput = {
    where: RoomWhereUniqueInput
    update: XOR<RoomUpdateWithoutDocumentInput, RoomUncheckedUpdateWithoutDocumentInput>
    create: XOR<RoomCreateWithoutDocumentInput, RoomUncheckedCreateWithoutDocumentInput>
  }

  export type RoomUpdateWithWhereUniqueWithoutDocumentInput = {
    where: RoomWhereUniqueInput
    data: XOR<RoomUpdateWithoutDocumentInput, RoomUncheckedUpdateWithoutDocumentInput>
  }

  export type RoomUpdateManyWithWhereWithoutDocumentInput = {
    where: RoomScalarWhereInput
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyWithoutDocumentInput>
  }

  export type DocumentCreateWithoutImagesInput = {
    id?: string
    title: string
    content: string
    isPublic?: boolean
    tags?: DocumentCreatetagsInput | string[]
    allowComments?: boolean
    allowSuggestions?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lastEditedAt?: Date | string
    user: UserCreateNestedOneWithoutDocumentsInput
    versions?: DocumentVersionCreateNestedManyWithoutDocumentInput
    collaborators?: DocumentCollaboratorsCreateNestedManyWithoutDocumentInput
    comments?: DocumentCommentCreateNestedManyWithoutDocumentInput
    shares?: DocumentShareCreateNestedManyWithoutDocumentInput
    activities?: DocumentActivityCreateNestedManyWithoutDocumentInput
    Room?: RoomCreateNestedManyWithoutDocumentInput
  }

  export type DocumentUncheckedCreateWithoutImagesInput = {
    id?: string
    title: string
    content: string
    userId: string
    isPublic?: boolean
    tags?: DocumentCreatetagsInput | string[]
    allowComments?: boolean
    allowSuggestions?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lastEditedAt?: Date | string
    versions?: DocumentVersionUncheckedCreateNestedManyWithoutDocumentInput
    collaborators?: DocumentCollaboratorsUncheckedCreateNestedManyWithoutDocumentInput
    comments?: DocumentCommentUncheckedCreateNestedManyWithoutDocumentInput
    shares?: DocumentShareUncheckedCreateNestedManyWithoutDocumentInput
    activities?: DocumentActivityUncheckedCreateNestedManyWithoutDocumentInput
    Room?: RoomUncheckedCreateNestedManyWithoutDocumentInput
  }

  export type DocumentCreateOrConnectWithoutImagesInput = {
    where: DocumentWhereUniqueInput
    create: XOR<DocumentCreateWithoutImagesInput, DocumentUncheckedCreateWithoutImagesInput>
  }

  export type DocumentUpsertWithoutImagesInput = {
    update: XOR<DocumentUpdateWithoutImagesInput, DocumentUncheckedUpdateWithoutImagesInput>
    create: XOR<DocumentCreateWithoutImagesInput, DocumentUncheckedCreateWithoutImagesInput>
    where?: DocumentWhereInput
  }

  export type DocumentUpdateToOneWithWhereWithoutImagesInput = {
    where?: DocumentWhereInput
    data: XOR<DocumentUpdateWithoutImagesInput, DocumentUncheckedUpdateWithoutImagesInput>
  }

  export type DocumentUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    tags?: DocumentUpdatetagsInput | string[]
    allowComments?: BoolFieldUpdateOperationsInput | boolean
    allowSuggestions?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastEditedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDocumentsNestedInput
    versions?: DocumentVersionUpdateManyWithoutDocumentNestedInput
    collaborators?: DocumentCollaboratorsUpdateManyWithoutDocumentNestedInput
    comments?: DocumentCommentUpdateManyWithoutDocumentNestedInput
    shares?: DocumentShareUpdateManyWithoutDocumentNestedInput
    activities?: DocumentActivityUpdateManyWithoutDocumentNestedInput
    Room?: RoomUpdateManyWithoutDocumentNestedInput
  }

  export type DocumentUncheckedUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    tags?: DocumentUpdatetagsInput | string[]
    allowComments?: BoolFieldUpdateOperationsInput | boolean
    allowSuggestions?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastEditedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    versions?: DocumentVersionUncheckedUpdateManyWithoutDocumentNestedInput
    collaborators?: DocumentCollaboratorsUncheckedUpdateManyWithoutDocumentNestedInput
    comments?: DocumentCommentUncheckedUpdateManyWithoutDocumentNestedInput
    shares?: DocumentShareUncheckedUpdateManyWithoutDocumentNestedInput
    activities?: DocumentActivityUncheckedUpdateManyWithoutDocumentNestedInput
    Room?: RoomUncheckedUpdateManyWithoutDocumentNestedInput
  }

  export type DocumentCreateWithoutVersionsInput = {
    id?: string
    title: string
    content: string
    isPublic?: boolean
    tags?: DocumentCreatetagsInput | string[]
    allowComments?: boolean
    allowSuggestions?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lastEditedAt?: Date | string
    user: UserCreateNestedOneWithoutDocumentsInput
    images?: DocumentImageCreateNestedManyWithoutDocumentInput
    collaborators?: DocumentCollaboratorsCreateNestedManyWithoutDocumentInput
    comments?: DocumentCommentCreateNestedManyWithoutDocumentInput
    shares?: DocumentShareCreateNestedManyWithoutDocumentInput
    activities?: DocumentActivityCreateNestedManyWithoutDocumentInput
    Room?: RoomCreateNestedManyWithoutDocumentInput
  }

  export type DocumentUncheckedCreateWithoutVersionsInput = {
    id?: string
    title: string
    content: string
    userId: string
    isPublic?: boolean
    tags?: DocumentCreatetagsInput | string[]
    allowComments?: boolean
    allowSuggestions?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lastEditedAt?: Date | string
    images?: DocumentImageUncheckedCreateNestedManyWithoutDocumentInput
    collaborators?: DocumentCollaboratorsUncheckedCreateNestedManyWithoutDocumentInput
    comments?: DocumentCommentUncheckedCreateNestedManyWithoutDocumentInput
    shares?: DocumentShareUncheckedCreateNestedManyWithoutDocumentInput
    activities?: DocumentActivityUncheckedCreateNestedManyWithoutDocumentInput
    Room?: RoomUncheckedCreateNestedManyWithoutDocumentInput
  }

  export type DocumentCreateOrConnectWithoutVersionsInput = {
    where: DocumentWhereUniqueInput
    create: XOR<DocumentCreateWithoutVersionsInput, DocumentUncheckedCreateWithoutVersionsInput>
  }

  export type DocumentUpsertWithoutVersionsInput = {
    update: XOR<DocumentUpdateWithoutVersionsInput, DocumentUncheckedUpdateWithoutVersionsInput>
    create: XOR<DocumentCreateWithoutVersionsInput, DocumentUncheckedCreateWithoutVersionsInput>
    where?: DocumentWhereInput
  }

  export type DocumentUpdateToOneWithWhereWithoutVersionsInput = {
    where?: DocumentWhereInput
    data: XOR<DocumentUpdateWithoutVersionsInput, DocumentUncheckedUpdateWithoutVersionsInput>
  }

  export type DocumentUpdateWithoutVersionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    tags?: DocumentUpdatetagsInput | string[]
    allowComments?: BoolFieldUpdateOperationsInput | boolean
    allowSuggestions?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastEditedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDocumentsNestedInput
    images?: DocumentImageUpdateManyWithoutDocumentNestedInput
    collaborators?: DocumentCollaboratorsUpdateManyWithoutDocumentNestedInput
    comments?: DocumentCommentUpdateManyWithoutDocumentNestedInput
    shares?: DocumentShareUpdateManyWithoutDocumentNestedInput
    activities?: DocumentActivityUpdateManyWithoutDocumentNestedInput
    Room?: RoomUpdateManyWithoutDocumentNestedInput
  }

  export type DocumentUncheckedUpdateWithoutVersionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    tags?: DocumentUpdatetagsInput | string[]
    allowComments?: BoolFieldUpdateOperationsInput | boolean
    allowSuggestions?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastEditedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: DocumentImageUncheckedUpdateManyWithoutDocumentNestedInput
    collaborators?: DocumentCollaboratorsUncheckedUpdateManyWithoutDocumentNestedInput
    comments?: DocumentCommentUncheckedUpdateManyWithoutDocumentNestedInput
    shares?: DocumentShareUncheckedUpdateManyWithoutDocumentNestedInput
    activities?: DocumentActivityUncheckedUpdateManyWithoutDocumentNestedInput
    Room?: RoomUncheckedUpdateManyWithoutDocumentNestedInput
  }

  export type DocumentCreateWithoutCollaboratorsInput = {
    id?: string
    title: string
    content: string
    isPublic?: boolean
    tags?: DocumentCreatetagsInput | string[]
    allowComments?: boolean
    allowSuggestions?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lastEditedAt?: Date | string
    user: UserCreateNestedOneWithoutDocumentsInput
    images?: DocumentImageCreateNestedManyWithoutDocumentInput
    versions?: DocumentVersionCreateNestedManyWithoutDocumentInput
    comments?: DocumentCommentCreateNestedManyWithoutDocumentInput
    shares?: DocumentShareCreateNestedManyWithoutDocumentInput
    activities?: DocumentActivityCreateNestedManyWithoutDocumentInput
    Room?: RoomCreateNestedManyWithoutDocumentInput
  }

  export type DocumentUncheckedCreateWithoutCollaboratorsInput = {
    id?: string
    title: string
    content: string
    userId: string
    isPublic?: boolean
    tags?: DocumentCreatetagsInput | string[]
    allowComments?: boolean
    allowSuggestions?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lastEditedAt?: Date | string
    images?: DocumentImageUncheckedCreateNestedManyWithoutDocumentInput
    versions?: DocumentVersionUncheckedCreateNestedManyWithoutDocumentInput
    comments?: DocumentCommentUncheckedCreateNestedManyWithoutDocumentInput
    shares?: DocumentShareUncheckedCreateNestedManyWithoutDocumentInput
    activities?: DocumentActivityUncheckedCreateNestedManyWithoutDocumentInput
    Room?: RoomUncheckedCreateNestedManyWithoutDocumentInput
  }

  export type DocumentCreateOrConnectWithoutCollaboratorsInput = {
    where: DocumentWhereUniqueInput
    create: XOR<DocumentCreateWithoutCollaboratorsInput, DocumentUncheckedCreateWithoutCollaboratorsInput>
  }

  export type UserCreateWithoutCollaborationsInput = {
    id?: string
    avatar?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: DocumentCreateNestedManyWithoutUserInput
    comments?: DocumentCommentCreateNestedManyWithoutUserInput
    settings?: UserSettingsCreateNestedOneWithoutUserInput
    rooms?: RoomUserCreateNestedManyWithoutUserInput
    createdRooms?: RoomCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutCollaborationsInput = {
    id?: string
    avatar?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: DocumentUncheckedCreateNestedManyWithoutUserInput
    comments?: DocumentCommentUncheckedCreateNestedManyWithoutUserInput
    settings?: UserSettingsUncheckedCreateNestedOneWithoutUserInput
    rooms?: RoomUserUncheckedCreateNestedManyWithoutUserInput
    createdRooms?: RoomUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutCollaborationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCollaborationsInput, UserUncheckedCreateWithoutCollaborationsInput>
  }

  export type DocumentUpsertWithoutCollaboratorsInput = {
    update: XOR<DocumentUpdateWithoutCollaboratorsInput, DocumentUncheckedUpdateWithoutCollaboratorsInput>
    create: XOR<DocumentCreateWithoutCollaboratorsInput, DocumentUncheckedCreateWithoutCollaboratorsInput>
    where?: DocumentWhereInput
  }

  export type DocumentUpdateToOneWithWhereWithoutCollaboratorsInput = {
    where?: DocumentWhereInput
    data: XOR<DocumentUpdateWithoutCollaboratorsInput, DocumentUncheckedUpdateWithoutCollaboratorsInput>
  }

  export type DocumentUpdateWithoutCollaboratorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    tags?: DocumentUpdatetagsInput | string[]
    allowComments?: BoolFieldUpdateOperationsInput | boolean
    allowSuggestions?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastEditedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDocumentsNestedInput
    images?: DocumentImageUpdateManyWithoutDocumentNestedInput
    versions?: DocumentVersionUpdateManyWithoutDocumentNestedInput
    comments?: DocumentCommentUpdateManyWithoutDocumentNestedInput
    shares?: DocumentShareUpdateManyWithoutDocumentNestedInput
    activities?: DocumentActivityUpdateManyWithoutDocumentNestedInput
    Room?: RoomUpdateManyWithoutDocumentNestedInput
  }

  export type DocumentUncheckedUpdateWithoutCollaboratorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    tags?: DocumentUpdatetagsInput | string[]
    allowComments?: BoolFieldUpdateOperationsInput | boolean
    allowSuggestions?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastEditedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: DocumentImageUncheckedUpdateManyWithoutDocumentNestedInput
    versions?: DocumentVersionUncheckedUpdateManyWithoutDocumentNestedInput
    comments?: DocumentCommentUncheckedUpdateManyWithoutDocumentNestedInput
    shares?: DocumentShareUncheckedUpdateManyWithoutDocumentNestedInput
    activities?: DocumentActivityUncheckedUpdateManyWithoutDocumentNestedInput
    Room?: RoomUncheckedUpdateManyWithoutDocumentNestedInput
  }

  export type UserUpsertWithoutCollaborationsInput = {
    update: XOR<UserUpdateWithoutCollaborationsInput, UserUncheckedUpdateWithoutCollaborationsInput>
    create: XOR<UserCreateWithoutCollaborationsInput, UserUncheckedCreateWithoutCollaborationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCollaborationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCollaborationsInput, UserUncheckedUpdateWithoutCollaborationsInput>
  }

  export type UserUpdateWithoutCollaborationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: DocumentUpdateManyWithoutUserNestedInput
    comments?: DocumentCommentUpdateManyWithoutUserNestedInput
    settings?: UserSettingsUpdateOneWithoutUserNestedInput
    rooms?: RoomUserUpdateManyWithoutUserNestedInput
    createdRooms?: RoomUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutCollaborationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: DocumentUncheckedUpdateManyWithoutUserNestedInput
    comments?: DocumentCommentUncheckedUpdateManyWithoutUserNestedInput
    settings?: UserSettingsUncheckedUpdateOneWithoutUserNestedInput
    rooms?: RoomUserUncheckedUpdateManyWithoutUserNestedInput
    createdRooms?: RoomUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type DocumentCreateWithoutCommentsInput = {
    id?: string
    title: string
    content: string
    isPublic?: boolean
    tags?: DocumentCreatetagsInput | string[]
    allowComments?: boolean
    allowSuggestions?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lastEditedAt?: Date | string
    user: UserCreateNestedOneWithoutDocumentsInput
    images?: DocumentImageCreateNestedManyWithoutDocumentInput
    versions?: DocumentVersionCreateNestedManyWithoutDocumentInput
    collaborators?: DocumentCollaboratorsCreateNestedManyWithoutDocumentInput
    shares?: DocumentShareCreateNestedManyWithoutDocumentInput
    activities?: DocumentActivityCreateNestedManyWithoutDocumentInput
    Room?: RoomCreateNestedManyWithoutDocumentInput
  }

  export type DocumentUncheckedCreateWithoutCommentsInput = {
    id?: string
    title: string
    content: string
    userId: string
    isPublic?: boolean
    tags?: DocumentCreatetagsInput | string[]
    allowComments?: boolean
    allowSuggestions?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lastEditedAt?: Date | string
    images?: DocumentImageUncheckedCreateNestedManyWithoutDocumentInput
    versions?: DocumentVersionUncheckedCreateNestedManyWithoutDocumentInput
    collaborators?: DocumentCollaboratorsUncheckedCreateNestedManyWithoutDocumentInput
    shares?: DocumentShareUncheckedCreateNestedManyWithoutDocumentInput
    activities?: DocumentActivityUncheckedCreateNestedManyWithoutDocumentInput
    Room?: RoomUncheckedCreateNestedManyWithoutDocumentInput
  }

  export type DocumentCreateOrConnectWithoutCommentsInput = {
    where: DocumentWhereUniqueInput
    create: XOR<DocumentCreateWithoutCommentsInput, DocumentUncheckedCreateWithoutCommentsInput>
  }

  export type UserCreateWithoutCommentsInput = {
    id?: string
    avatar?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: DocumentCreateNestedManyWithoutUserInput
    collaborations?: DocumentCollaboratorsCreateNestedManyWithoutUserInput
    settings?: UserSettingsCreateNestedOneWithoutUserInput
    rooms?: RoomUserCreateNestedManyWithoutUserInput
    createdRooms?: RoomCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutCommentsInput = {
    id?: string
    avatar?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: DocumentUncheckedCreateNestedManyWithoutUserInput
    collaborations?: DocumentCollaboratorsUncheckedCreateNestedManyWithoutUserInput
    settings?: UserSettingsUncheckedCreateNestedOneWithoutUserInput
    rooms?: RoomUserUncheckedCreateNestedManyWithoutUserInput
    createdRooms?: RoomUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutCommentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
  }

  export type DocumentUpsertWithoutCommentsInput = {
    update: XOR<DocumentUpdateWithoutCommentsInput, DocumentUncheckedUpdateWithoutCommentsInput>
    create: XOR<DocumentCreateWithoutCommentsInput, DocumentUncheckedCreateWithoutCommentsInput>
    where?: DocumentWhereInput
  }

  export type DocumentUpdateToOneWithWhereWithoutCommentsInput = {
    where?: DocumentWhereInput
    data: XOR<DocumentUpdateWithoutCommentsInput, DocumentUncheckedUpdateWithoutCommentsInput>
  }

  export type DocumentUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    tags?: DocumentUpdatetagsInput | string[]
    allowComments?: BoolFieldUpdateOperationsInput | boolean
    allowSuggestions?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastEditedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDocumentsNestedInput
    images?: DocumentImageUpdateManyWithoutDocumentNestedInput
    versions?: DocumentVersionUpdateManyWithoutDocumentNestedInput
    collaborators?: DocumentCollaboratorsUpdateManyWithoutDocumentNestedInput
    shares?: DocumentShareUpdateManyWithoutDocumentNestedInput
    activities?: DocumentActivityUpdateManyWithoutDocumentNestedInput
    Room?: RoomUpdateManyWithoutDocumentNestedInput
  }

  export type DocumentUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    tags?: DocumentUpdatetagsInput | string[]
    allowComments?: BoolFieldUpdateOperationsInput | boolean
    allowSuggestions?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastEditedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: DocumentImageUncheckedUpdateManyWithoutDocumentNestedInput
    versions?: DocumentVersionUncheckedUpdateManyWithoutDocumentNestedInput
    collaborators?: DocumentCollaboratorsUncheckedUpdateManyWithoutDocumentNestedInput
    shares?: DocumentShareUncheckedUpdateManyWithoutDocumentNestedInput
    activities?: DocumentActivityUncheckedUpdateManyWithoutDocumentNestedInput
    Room?: RoomUncheckedUpdateManyWithoutDocumentNestedInput
  }

  export type UserUpsertWithoutCommentsInput = {
    update: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCommentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type UserUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: DocumentUpdateManyWithoutUserNestedInput
    collaborations?: DocumentCollaboratorsUpdateManyWithoutUserNestedInput
    settings?: UserSettingsUpdateOneWithoutUserNestedInput
    rooms?: RoomUserUpdateManyWithoutUserNestedInput
    createdRooms?: RoomUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: DocumentUncheckedUpdateManyWithoutUserNestedInput
    collaborations?: DocumentCollaboratorsUncheckedUpdateManyWithoutUserNestedInput
    settings?: UserSettingsUncheckedUpdateOneWithoutUserNestedInput
    rooms?: RoomUserUncheckedUpdateManyWithoutUserNestedInput
    createdRooms?: RoomUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type DocumentCreateWithoutSharesInput = {
    id?: string
    title: string
    content: string
    isPublic?: boolean
    tags?: DocumentCreatetagsInput | string[]
    allowComments?: boolean
    allowSuggestions?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lastEditedAt?: Date | string
    user: UserCreateNestedOneWithoutDocumentsInput
    images?: DocumentImageCreateNestedManyWithoutDocumentInput
    versions?: DocumentVersionCreateNestedManyWithoutDocumentInput
    collaborators?: DocumentCollaboratorsCreateNestedManyWithoutDocumentInput
    comments?: DocumentCommentCreateNestedManyWithoutDocumentInput
    activities?: DocumentActivityCreateNestedManyWithoutDocumentInput
    Room?: RoomCreateNestedManyWithoutDocumentInput
  }

  export type DocumentUncheckedCreateWithoutSharesInput = {
    id?: string
    title: string
    content: string
    userId: string
    isPublic?: boolean
    tags?: DocumentCreatetagsInput | string[]
    allowComments?: boolean
    allowSuggestions?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lastEditedAt?: Date | string
    images?: DocumentImageUncheckedCreateNestedManyWithoutDocumentInput
    versions?: DocumentVersionUncheckedCreateNestedManyWithoutDocumentInput
    collaborators?: DocumentCollaboratorsUncheckedCreateNestedManyWithoutDocumentInput
    comments?: DocumentCommentUncheckedCreateNestedManyWithoutDocumentInput
    activities?: DocumentActivityUncheckedCreateNestedManyWithoutDocumentInput
    Room?: RoomUncheckedCreateNestedManyWithoutDocumentInput
  }

  export type DocumentCreateOrConnectWithoutSharesInput = {
    where: DocumentWhereUniqueInput
    create: XOR<DocumentCreateWithoutSharesInput, DocumentUncheckedCreateWithoutSharesInput>
  }

  export type DocumentUpsertWithoutSharesInput = {
    update: XOR<DocumentUpdateWithoutSharesInput, DocumentUncheckedUpdateWithoutSharesInput>
    create: XOR<DocumentCreateWithoutSharesInput, DocumentUncheckedCreateWithoutSharesInput>
    where?: DocumentWhereInput
  }

  export type DocumentUpdateToOneWithWhereWithoutSharesInput = {
    where?: DocumentWhereInput
    data: XOR<DocumentUpdateWithoutSharesInput, DocumentUncheckedUpdateWithoutSharesInput>
  }

  export type DocumentUpdateWithoutSharesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    tags?: DocumentUpdatetagsInput | string[]
    allowComments?: BoolFieldUpdateOperationsInput | boolean
    allowSuggestions?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastEditedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDocumentsNestedInput
    images?: DocumentImageUpdateManyWithoutDocumentNestedInput
    versions?: DocumentVersionUpdateManyWithoutDocumentNestedInput
    collaborators?: DocumentCollaboratorsUpdateManyWithoutDocumentNestedInput
    comments?: DocumentCommentUpdateManyWithoutDocumentNestedInput
    activities?: DocumentActivityUpdateManyWithoutDocumentNestedInput
    Room?: RoomUpdateManyWithoutDocumentNestedInput
  }

  export type DocumentUncheckedUpdateWithoutSharesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    tags?: DocumentUpdatetagsInput | string[]
    allowComments?: BoolFieldUpdateOperationsInput | boolean
    allowSuggestions?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastEditedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: DocumentImageUncheckedUpdateManyWithoutDocumentNestedInput
    versions?: DocumentVersionUncheckedUpdateManyWithoutDocumentNestedInput
    collaborators?: DocumentCollaboratorsUncheckedUpdateManyWithoutDocumentNestedInput
    comments?: DocumentCommentUncheckedUpdateManyWithoutDocumentNestedInput
    activities?: DocumentActivityUncheckedUpdateManyWithoutDocumentNestedInput
    Room?: RoomUncheckedUpdateManyWithoutDocumentNestedInput
  }

  export type UserCreateWithoutSettingsInput = {
    id?: string
    avatar?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: DocumentCreateNestedManyWithoutUserInput
    collaborations?: DocumentCollaboratorsCreateNestedManyWithoutUserInput
    comments?: DocumentCommentCreateNestedManyWithoutUserInput
    rooms?: RoomUserCreateNestedManyWithoutUserInput
    createdRooms?: RoomCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutSettingsInput = {
    id?: string
    avatar?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: DocumentUncheckedCreateNestedManyWithoutUserInput
    collaborations?: DocumentCollaboratorsUncheckedCreateNestedManyWithoutUserInput
    comments?: DocumentCommentUncheckedCreateNestedManyWithoutUserInput
    rooms?: RoomUserUncheckedCreateNestedManyWithoutUserInput
    createdRooms?: RoomUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutSettingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSettingsInput, UserUncheckedCreateWithoutSettingsInput>
  }

  export type UserUpsertWithoutSettingsInput = {
    update: XOR<UserUpdateWithoutSettingsInput, UserUncheckedUpdateWithoutSettingsInput>
    create: XOR<UserCreateWithoutSettingsInput, UserUncheckedCreateWithoutSettingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSettingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSettingsInput, UserUncheckedUpdateWithoutSettingsInput>
  }

  export type UserUpdateWithoutSettingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: DocumentUpdateManyWithoutUserNestedInput
    collaborations?: DocumentCollaboratorsUpdateManyWithoutUserNestedInput
    comments?: DocumentCommentUpdateManyWithoutUserNestedInput
    rooms?: RoomUserUpdateManyWithoutUserNestedInput
    createdRooms?: RoomUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutSettingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: DocumentUncheckedUpdateManyWithoutUserNestedInput
    collaborations?: DocumentCollaboratorsUncheckedUpdateManyWithoutUserNestedInput
    comments?: DocumentCommentUncheckedUpdateManyWithoutUserNestedInput
    rooms?: RoomUserUncheckedUpdateManyWithoutUserNestedInput
    createdRooms?: RoomUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type DocumentCreateWithoutActivitiesInput = {
    id?: string
    title: string
    content: string
    isPublic?: boolean
    tags?: DocumentCreatetagsInput | string[]
    allowComments?: boolean
    allowSuggestions?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lastEditedAt?: Date | string
    user: UserCreateNestedOneWithoutDocumentsInput
    images?: DocumentImageCreateNestedManyWithoutDocumentInput
    versions?: DocumentVersionCreateNestedManyWithoutDocumentInput
    collaborators?: DocumentCollaboratorsCreateNestedManyWithoutDocumentInput
    comments?: DocumentCommentCreateNestedManyWithoutDocumentInput
    shares?: DocumentShareCreateNestedManyWithoutDocumentInput
    Room?: RoomCreateNestedManyWithoutDocumentInput
  }

  export type DocumentUncheckedCreateWithoutActivitiesInput = {
    id?: string
    title: string
    content: string
    userId: string
    isPublic?: boolean
    tags?: DocumentCreatetagsInput | string[]
    allowComments?: boolean
    allowSuggestions?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lastEditedAt?: Date | string
    images?: DocumentImageUncheckedCreateNestedManyWithoutDocumentInput
    versions?: DocumentVersionUncheckedCreateNestedManyWithoutDocumentInput
    collaborators?: DocumentCollaboratorsUncheckedCreateNestedManyWithoutDocumentInput
    comments?: DocumentCommentUncheckedCreateNestedManyWithoutDocumentInput
    shares?: DocumentShareUncheckedCreateNestedManyWithoutDocumentInput
    Room?: RoomUncheckedCreateNestedManyWithoutDocumentInput
  }

  export type DocumentCreateOrConnectWithoutActivitiesInput = {
    where: DocumentWhereUniqueInput
    create: XOR<DocumentCreateWithoutActivitiesInput, DocumentUncheckedCreateWithoutActivitiesInput>
  }

  export type DocumentUpsertWithoutActivitiesInput = {
    update: XOR<DocumentUpdateWithoutActivitiesInput, DocumentUncheckedUpdateWithoutActivitiesInput>
    create: XOR<DocumentCreateWithoutActivitiesInput, DocumentUncheckedCreateWithoutActivitiesInput>
    where?: DocumentWhereInput
  }

  export type DocumentUpdateToOneWithWhereWithoutActivitiesInput = {
    where?: DocumentWhereInput
    data: XOR<DocumentUpdateWithoutActivitiesInput, DocumentUncheckedUpdateWithoutActivitiesInput>
  }

  export type DocumentUpdateWithoutActivitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    tags?: DocumentUpdatetagsInput | string[]
    allowComments?: BoolFieldUpdateOperationsInput | boolean
    allowSuggestions?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastEditedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDocumentsNestedInput
    images?: DocumentImageUpdateManyWithoutDocumentNestedInput
    versions?: DocumentVersionUpdateManyWithoutDocumentNestedInput
    collaborators?: DocumentCollaboratorsUpdateManyWithoutDocumentNestedInput
    comments?: DocumentCommentUpdateManyWithoutDocumentNestedInput
    shares?: DocumentShareUpdateManyWithoutDocumentNestedInput
    Room?: RoomUpdateManyWithoutDocumentNestedInput
  }

  export type DocumentUncheckedUpdateWithoutActivitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    tags?: DocumentUpdatetagsInput | string[]
    allowComments?: BoolFieldUpdateOperationsInput | boolean
    allowSuggestions?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastEditedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: DocumentImageUncheckedUpdateManyWithoutDocumentNestedInput
    versions?: DocumentVersionUncheckedUpdateManyWithoutDocumentNestedInput
    collaborators?: DocumentCollaboratorsUncheckedUpdateManyWithoutDocumentNestedInput
    comments?: DocumentCommentUncheckedUpdateManyWithoutDocumentNestedInput
    shares?: DocumentShareUncheckedUpdateManyWithoutDocumentNestedInput
    Room?: RoomUncheckedUpdateManyWithoutDocumentNestedInput
  }

  export type DocumentCreateManyUserInput = {
    id?: string
    title: string
    content: string
    isPublic?: boolean
    tags?: DocumentCreatetagsInput | string[]
    allowComments?: boolean
    allowSuggestions?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lastEditedAt?: Date | string
  }

  export type DocumentCollaboratorsCreateManyUserInput = {
    id?: string
    documentId: string
    role?: string
    permissions?: DocumentCollaboratorsCreatepermissionsInput | string[]
    invitedAt?: Date | string
    acceptedAt?: Date | string | null
  }

  export type DocumentCommentCreateManyUserInput = {
    id?: string
    documentId: string
    content: string
    lineNumber?: number | null
    isResolved?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoomUserCreateManyUserInput = {
    id?: string
    roomId: string
    role?: string
    joinedAt?: Date | string
    lastActive?: Date | string
  }

  export type RoomCreateManyCreatedByInput = {
    id?: string
    name: string
    code: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    documentId?: string | null
    shareLink?: string | null
    shareLinkExpiresAt?: Date | string | null
    allowedEmails?: RoomCreateallowedEmailsInput | string[]
    isPublic?: boolean
  }

  export type DocumentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    tags?: DocumentUpdatetagsInput | string[]
    allowComments?: BoolFieldUpdateOperationsInput | boolean
    allowSuggestions?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastEditedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: DocumentImageUpdateManyWithoutDocumentNestedInput
    versions?: DocumentVersionUpdateManyWithoutDocumentNestedInput
    collaborators?: DocumentCollaboratorsUpdateManyWithoutDocumentNestedInput
    comments?: DocumentCommentUpdateManyWithoutDocumentNestedInput
    shares?: DocumentShareUpdateManyWithoutDocumentNestedInput
    activities?: DocumentActivityUpdateManyWithoutDocumentNestedInput
    Room?: RoomUpdateManyWithoutDocumentNestedInput
  }

  export type DocumentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    tags?: DocumentUpdatetagsInput | string[]
    allowComments?: BoolFieldUpdateOperationsInput | boolean
    allowSuggestions?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastEditedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: DocumentImageUncheckedUpdateManyWithoutDocumentNestedInput
    versions?: DocumentVersionUncheckedUpdateManyWithoutDocumentNestedInput
    collaborators?: DocumentCollaboratorsUncheckedUpdateManyWithoutDocumentNestedInput
    comments?: DocumentCommentUncheckedUpdateManyWithoutDocumentNestedInput
    shares?: DocumentShareUncheckedUpdateManyWithoutDocumentNestedInput
    activities?: DocumentActivityUncheckedUpdateManyWithoutDocumentNestedInput
    Room?: RoomUncheckedUpdateManyWithoutDocumentNestedInput
  }

  export type DocumentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    tags?: DocumentUpdatetagsInput | string[]
    allowComments?: BoolFieldUpdateOperationsInput | boolean
    allowSuggestions?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastEditedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentCollaboratorsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    permissions?: DocumentCollaboratorsUpdatepermissionsInput | string[]
    invitedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    document?: DocumentUpdateOneRequiredWithoutCollaboratorsNestedInput
  }

  export type DocumentCollaboratorsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    permissions?: DocumentCollaboratorsUpdatepermissionsInput | string[]
    invitedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DocumentCollaboratorsUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    permissions?: DocumentCollaboratorsUpdatepermissionsInput | string[]
    invitedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DocumentCommentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    lineNumber?: NullableIntFieldUpdateOperationsInput | number | null
    isResolved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    document?: DocumentUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type DocumentCommentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    lineNumber?: NullableIntFieldUpdateOperationsInput | number | null
    isResolved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentCommentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    lineNumber?: NullableIntFieldUpdateOperationsInput | number | null
    isResolved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomUserUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActive?: DateTimeFieldUpdateOperationsInput | Date | string
    room?: RoomUpdateOneRequiredWithoutParticipantsNestedInput
  }

  export type RoomUserUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActive?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomUserUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActive?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shareLink?: NullableStringFieldUpdateOperationsInput | string | null
    shareLinkExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    allowedEmails?: RoomUpdateallowedEmailsInput | string[]
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    document?: DocumentUpdateOneWithoutRoomNestedInput
    participants?: RoomUserUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documentId?: NullableStringFieldUpdateOperationsInput | string | null
    shareLink?: NullableStringFieldUpdateOperationsInput | string | null
    shareLinkExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    allowedEmails?: RoomUpdateallowedEmailsInput | string[]
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    participants?: RoomUserUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documentId?: NullableStringFieldUpdateOperationsInput | string | null
    shareLink?: NullableStringFieldUpdateOperationsInput | string | null
    shareLinkExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    allowedEmails?: RoomUpdateallowedEmailsInput | string[]
    isPublic?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RoomUserCreateManyRoomInput = {
    id?: string
    userId: string
    role?: string
    joinedAt?: Date | string
    lastActive?: Date | string
  }

  export type RoomUserUpdateWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActive?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRoomsNestedInput
  }

  export type RoomUserUncheckedUpdateWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActive?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomUserUncheckedUpdateManyWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActive?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentImageCreateManyDocumentInput = {
    id?: string
    fileName: string
    originalName: string
    fileUrl: string
    fileSize: number
    mimeType: string
    width?: number | null
    height?: number | null
    createdAt?: Date | string
  }

  export type DocumentVersionCreateManyDocumentInput = {
    id?: string
    content: string
    versionNumber: number
    changeDescription?: string | null
    createdAt?: Date | string
    createdBy: string
  }

  export type DocumentCollaboratorsCreateManyDocumentInput = {
    id?: string
    userId: string
    role?: string
    permissions?: DocumentCollaboratorsCreatepermissionsInput | string[]
    invitedAt?: Date | string
    acceptedAt?: Date | string | null
  }

  export type DocumentCommentCreateManyDocumentInput = {
    id?: string
    userId: string
    content: string
    lineNumber?: number | null
    isResolved?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DocumentShareCreateManyDocumentInput = {
    id?: string
    shareToken: string
    permissions?: DocumentShareCreatepermissionsInput | string[]
    expiresAt?: Date | string | null
    maxUses?: number | null
    useCount?: number
    createdAt?: Date | string
    createdBy: string
  }

  export type DocumentActivityCreateManyDocumentInput = {
    id?: string
    userId: string
    action: string
    description?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type RoomCreateManyDocumentInput = {
    id?: string
    name: string
    code: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById: string
    shareLink?: string | null
    shareLinkExpiresAt?: Date | string | null
    allowedEmails?: RoomCreateallowedEmailsInput | string[]
    isPublic?: boolean
  }

  export type DocumentImageUpdateWithoutDocumentInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    mimeType?: StringFieldUpdateOperationsInput | string
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentImageUncheckedUpdateWithoutDocumentInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    mimeType?: StringFieldUpdateOperationsInput | string
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentImageUncheckedUpdateManyWithoutDocumentInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    mimeType?: StringFieldUpdateOperationsInput | string
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentVersionUpdateWithoutDocumentInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    versionNumber?: IntFieldUpdateOperationsInput | number
    changeDescription?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
  }

  export type DocumentVersionUncheckedUpdateWithoutDocumentInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    versionNumber?: IntFieldUpdateOperationsInput | number
    changeDescription?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
  }

  export type DocumentVersionUncheckedUpdateManyWithoutDocumentInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    versionNumber?: IntFieldUpdateOperationsInput | number
    changeDescription?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
  }

  export type DocumentCollaboratorsUpdateWithoutDocumentInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    permissions?: DocumentCollaboratorsUpdatepermissionsInput | string[]
    invitedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutCollaborationsNestedInput
  }

  export type DocumentCollaboratorsUncheckedUpdateWithoutDocumentInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    permissions?: DocumentCollaboratorsUpdatepermissionsInput | string[]
    invitedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DocumentCollaboratorsUncheckedUpdateManyWithoutDocumentInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    permissions?: DocumentCollaboratorsUpdatepermissionsInput | string[]
    invitedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DocumentCommentUpdateWithoutDocumentInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    lineNumber?: NullableIntFieldUpdateOperationsInput | number | null
    isResolved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type DocumentCommentUncheckedUpdateWithoutDocumentInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    lineNumber?: NullableIntFieldUpdateOperationsInput | number | null
    isResolved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentCommentUncheckedUpdateManyWithoutDocumentInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    lineNumber?: NullableIntFieldUpdateOperationsInput | number | null
    isResolved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentShareUpdateWithoutDocumentInput = {
    id?: StringFieldUpdateOperationsInput | string
    shareToken?: StringFieldUpdateOperationsInput | string
    permissions?: DocumentShareUpdatepermissionsInput | string[]
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maxUses?: NullableIntFieldUpdateOperationsInput | number | null
    useCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
  }

  export type DocumentShareUncheckedUpdateWithoutDocumentInput = {
    id?: StringFieldUpdateOperationsInput | string
    shareToken?: StringFieldUpdateOperationsInput | string
    permissions?: DocumentShareUpdatepermissionsInput | string[]
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maxUses?: NullableIntFieldUpdateOperationsInput | number | null
    useCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
  }

  export type DocumentShareUncheckedUpdateManyWithoutDocumentInput = {
    id?: StringFieldUpdateOperationsInput | string
    shareToken?: StringFieldUpdateOperationsInput | string
    permissions?: DocumentShareUpdatepermissionsInput | string[]
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maxUses?: NullableIntFieldUpdateOperationsInput | number | null
    useCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
  }

  export type DocumentActivityUpdateWithoutDocumentInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentActivityUncheckedUpdateWithoutDocumentInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentActivityUncheckedUpdateManyWithoutDocumentInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomUpdateWithoutDocumentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shareLink?: NullableStringFieldUpdateOperationsInput | string | null
    shareLinkExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    allowedEmails?: RoomUpdateallowedEmailsInput | string[]
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: UserUpdateOneRequiredWithoutCreatedRoomsNestedInput
    participants?: RoomUserUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutDocumentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
    shareLink?: NullableStringFieldUpdateOperationsInput | string | null
    shareLinkExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    allowedEmails?: RoomUpdateallowedEmailsInput | string[]
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    participants?: RoomUserUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateManyWithoutDocumentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
    shareLink?: NullableStringFieldUpdateOperationsInput | string | null
    shareLinkExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    allowedEmails?: RoomUpdateallowedEmailsInput | string[]
    isPublic?: BoolFieldUpdateOperationsInput | boolean
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