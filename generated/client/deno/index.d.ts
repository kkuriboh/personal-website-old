
/**
 * Client
**/

import * as runtime from '.././runtime/index.d.ts';
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends Prisma.PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model User
 * 
 */
export type User = {
  id: string
  name: string
  role: Role
}

/**
 * Model Post
 * 
 */
export type Post = {
  id: string
  title: string
  slug: string
  summary: string
  tags: string[]
  author_id: string
  created_at: Date
  updated_at: Date
}

/**
 * Model Section
 * 
 */
export type Section = {
  id: string
  heading: string
  sub_heading: string | null
  sumary: string | null
  post_id: string
}

/**
 * Model TextSection
 * 
 */
export type TextSection = {
  id: string
  order_of_priority: number
  content: string
  section_id: string
}

/**
 * Model HeadingSection
 * 
 */
export type HeadingSection = {
  id: string
  order_of_priority: number
  title: string
  subtitle: string | null
  summary: string | null
  section_id: string
}

/**
 * Model MidiaSection
 * 
 */
export type MidiaSection = {
  id: string
  order_of_priority: number
  link: string
  height: number
  width: number
  section_id: string
}

/**
 * Model CodeSection
 * 
 */
export type CodeSection = {
  id: string
  order_of_priority: number
  summary: string | null
  content: string
  section_id: string
}


/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

export const Role: {
  POSTER: 'POSTER',
  REGULAR_USER: 'REGULAR_USER'
};

export type Role = (typeof Role)[keyof typeof Role]


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
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
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

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<this, "$connect" | "$disconnect" | "$on" | "$transaction" | "$use">) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<GlobalReject>;

  /**
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.PostDelegate<GlobalReject>;

  /**
   * `prisma.section`: Exposes CRUD operations for the **Section** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sections
    * const sections = await prisma.section.findMany()
    * ```
    */
  get section(): Prisma.SectionDelegate<GlobalReject>;

  /**
   * `prisma.textSection`: Exposes CRUD operations for the **TextSection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TextSections
    * const textSections = await prisma.textSection.findMany()
    * ```
    */
  get textSection(): Prisma.TextSectionDelegate<GlobalReject>;

  /**
   * `prisma.headingSection`: Exposes CRUD operations for the **HeadingSection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HeadingSections
    * const headingSections = await prisma.headingSection.findMany()
    * ```
    */
  get headingSection(): Prisma.HeadingSectionDelegate<GlobalReject>;

  /**
   * `prisma.midiaSection`: Exposes CRUD operations for the **MidiaSection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MidiaSections
    * const midiaSections = await prisma.midiaSection.findMany()
    * ```
    */
  get midiaSection(): Prisma.MidiaSectionDelegate<GlobalReject>;

  /**
   * `prisma.codeSection`: Exposes CRUD operations for the **CodeSection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CodeSections
    * const codeSections = await prisma.codeSection.findMany()
    * ```
    */
  get codeSection(): Prisma.CodeSectionDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 4.10.1
   * Query Engine version: aead147aa326ccb985dcfed5b065b4fdabd44b19
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

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
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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

  export function validator<V>(): <S>(select: runtime.Types.Utils.LegacyExact<S, V>) => S;

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
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Post: 'Post',
    Section: 'Section',
    TextSection: 'TextSection',
    HeadingSection: 'HeadingSection',
    MidiaSection: 'MidiaSection',
    CodeSection: 'CodeSection'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

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
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
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
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

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
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

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
    Post: number
  }

  export type UserCountOutputTypeSelect = {
    Post?: boolean
  }

  export type UserCountOutputTypeGetPayload<S extends boolean | null | undefined | UserCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? UserCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (UserCountOutputTypeArgs)
    ? UserCountOutputType 
    : S extends { select: any } & (UserCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof UserCountOutputType ? UserCountOutputType[P] : never
  } 
      : UserCountOutputType




  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect | null
  }



  /**
   * Count Type PostCountOutputType
   */


  export type PostCountOutputType = {
    Section: number
  }

  export type PostCountOutputTypeSelect = {
    Section?: boolean
  }

  export type PostCountOutputTypeGetPayload<S extends boolean | null | undefined | PostCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? PostCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (PostCountOutputTypeArgs)
    ? PostCountOutputType 
    : S extends { select: any } & (PostCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof PostCountOutputType ? PostCountOutputType[P] : never
  } 
      : PostCountOutputType




  // Custom InputTypes

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the PostCountOutputType
     */
    select?: PostCountOutputTypeSelect | null
  }



  /**
   * Count Type SectionCountOutputType
   */


  export type SectionCountOutputType = {
    text_sections: number
    midia_sections: number
    code_sections: number
    heading_sections: number
  }

  export type SectionCountOutputTypeSelect = {
    text_sections?: boolean
    midia_sections?: boolean
    code_sections?: boolean
    heading_sections?: boolean
  }

  export type SectionCountOutputTypeGetPayload<S extends boolean | null | undefined | SectionCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? SectionCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (SectionCountOutputTypeArgs)
    ? SectionCountOutputType 
    : S extends { select: any } & (SectionCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof SectionCountOutputType ? SectionCountOutputType[P] : never
  } 
      : SectionCountOutputType




  // Custom InputTypes

  /**
   * SectionCountOutputType without action
   */
  export type SectionCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the SectionCountOutputType
     */
    select?: SectionCountOutputTypeSelect | null
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
    name: string | null
    role: Role | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    role: Role | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    role: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    role?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    role?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    role?: true
    _all?: true
  }

  export type UserAggregateArgs = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
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




  export type UserGroupByArgs = {
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithAggregationInput>
    by: UserScalarFieldEnum[]
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    id: string
    name: string
    role: Role
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect = {
    id?: boolean
    name?: boolean
    role?: boolean
    Post?: boolean | User$PostArgs
    _count?: boolean | UserCountOutputTypeArgs
  }


  export type UserInclude = {
    Post?: boolean | User$PostArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserGetPayload<S extends boolean | null | undefined | UserArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? User :
    S extends undefined ? never :
    S extends { include: any } & (UserArgs | UserFindManyArgs)
    ? User  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'Post' ? Array < PostGetPayload<S['include'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (UserArgs | UserFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'Post' ? Array < PostGetPayload<S['select'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof User ? User[P] : never
  } 
      : User


  type UserCountArgs = 
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

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
    **/
    findUnique<T extends UserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? Prisma__UserClient<UserGetPayload<T>> : Prisma__UserClient<UserGetPayload<T> | null, null>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

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
    **/
    findFirst<T extends UserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? Prisma__UserClient<UserGetPayload<T>> : Prisma__UserClient<UserGetPayload<T> | null, null>

    /**
     * Find the first User that matches the filter or
     * throw `NotFoundError` if no matches were found.
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
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
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
    **/
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs>
    ): Prisma.PrismaPromise<Array<UserGetPayload<T>>>

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
    **/
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

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
    **/
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

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
    **/
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

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
      T extends _Record<'select', any>
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
      ByFields extends TupleToUnion<T['by']>,
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

  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    Post<T extends User$PostArgs= {}>(args?: Subset<T, User$PostArgs>): Prisma.PrismaPromise<Array<PostGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * User base type for findUnique actions
   */
  export type UserFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUnique
   */
  export interface UserFindUniqueArgs extends UserFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User base type for findFirst actions
   */
  export type UserFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
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
    distinct?: Enumerable<UserScalarFieldEnum>
  }

  /**
   * User findFirst
   */
  export interface UserFindFirstArgs extends UserFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
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
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
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
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs = {
    /**
     * The data used to create many Users.
     */
    data: Enumerable<UserCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
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
  export type UserUpdateManyArgs = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
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
  export type UserDeleteArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.Post
   */
  export type User$PostArgs = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude | null
    where?: PostWhereInput
    orderBy?: Enumerable<PostOrderByWithRelationInput>
    cursor?: PostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<PostScalarFieldEnum>
  }


  /**
   * User without action
   */
  export type UserArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
  }



  /**
   * Model Post
   */


  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  export type PostMinAggregateOutputType = {
    id: string | null
    title: string | null
    slug: string | null
    summary: string | null
    author_id: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PostMaxAggregateOutputType = {
    id: string | null
    title: string | null
    slug: string | null
    summary: string | null
    author_id: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PostCountAggregateOutputType = {
    id: number
    title: number
    slug: number
    summary: number
    tags: number
    author_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type PostMinAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    summary?: true
    author_id?: true
    created_at?: true
    updated_at?: true
  }

  export type PostMaxAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    summary?: true
    author_id?: true
    created_at?: true
    updated_at?: true
  }

  export type PostCountAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    summary?: true
    tags?: true
    author_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type PostAggregateArgs = {
    /**
     * Filter which Post to aggregate.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: Enumerable<PostOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
        [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }




  export type PostGroupByArgs = {
    where?: PostWhereInput
    orderBy?: Enumerable<PostOrderByWithAggregationInput>
    by: PostScalarFieldEnum[]
    having?: PostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCountAggregateInputType | true
    _min?: PostMinAggregateInputType
    _max?: PostMaxAggregateInputType
  }


  export type PostGroupByOutputType = {
    id: string
    title: string
    slug: string
    summary: string
    tags: string[]
    author_id: string
    created_at: Date
    updated_at: Date
    _count: PostCountAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  type GetPostGroupByPayload<T extends PostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<PostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostGroupByOutputType[P]>
            : GetScalarType<T[P], PostGroupByOutputType[P]>
        }
      >
    >


  export type PostSelect = {
    id?: boolean
    title?: boolean
    slug?: boolean
    summary?: boolean
    tags?: boolean
    author?: boolean | UserArgs
    author_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    Section?: boolean | Post$SectionArgs
    _count?: boolean | PostCountOutputTypeArgs
  }


  export type PostInclude = {
    author?: boolean | UserArgs
    Section?: boolean | Post$SectionArgs
    _count?: boolean | PostCountOutputTypeArgs
  }

  export type PostGetPayload<S extends boolean | null | undefined | PostArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Post :
    S extends undefined ? never :
    S extends { include: any } & (PostArgs | PostFindManyArgs)
    ? Post  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'author' ? UserGetPayload<S['include'][P]> :
        P extends 'Section' ? Array < SectionGetPayload<S['include'][P]>>  :
        P extends '_count' ? PostCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (PostArgs | PostFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'author' ? UserGetPayload<S['select'][P]> :
        P extends 'Section' ? Array < SectionGetPayload<S['select'][P]>>  :
        P extends '_count' ? PostCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Post ? Post[P] : never
  } 
      : Post


  type PostCountArgs = 
    Omit<PostFindManyArgs, 'select' | 'include'> & {
      select?: PostCountAggregateInputType | true
    }

  export interface PostDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PostFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PostFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Post'> extends True ? Prisma__PostClient<PostGetPayload<T>> : Prisma__PostClient<PostGetPayload<T> | null, null>

    /**
     * Find one Post that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PostFindUniqueOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PostFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, PostFindUniqueOrThrowArgs>
    ): Prisma__PostClient<PostGetPayload<T>>

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PostFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PostFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Post'> extends True ? Prisma__PostClient<PostGetPayload<T>> : Prisma__PostClient<PostGetPayload<T> | null, null>

    /**
     * Find the first Post that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PostFindFirstOrThrowArgs>(
      args?: SelectSubset<T, PostFindFirstOrThrowArgs>
    ): Prisma__PostClient<PostGetPayload<T>>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PostFindManyArgs>(
      args?: SelectSubset<T, PostFindManyArgs>
    ): Prisma.PrismaPromise<Array<PostGetPayload<T>>>

    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     * 
    **/
    create<T extends PostCreateArgs>(
      args: SelectSubset<T, PostCreateArgs>
    ): Prisma__PostClient<PostGetPayload<T>>

    /**
     * Create many Posts.
     *     @param {PostCreateManyArgs} args - Arguments to create many Posts.
     *     @example
     *     // Create many Posts
     *     const post = await prisma.post.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PostCreateManyArgs>(
      args?: SelectSubset<T, PostCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     * 
    **/
    delete<T extends PostDeleteArgs>(
      args: SelectSubset<T, PostDeleteArgs>
    ): Prisma__PostClient<PostGetPayload<T>>

    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PostUpdateArgs>(
      args: SelectSubset<T, PostUpdateArgs>
    ): Prisma__PostClient<PostGetPayload<T>>

    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PostDeleteManyArgs>(
      args?: SelectSubset<T, PostDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PostUpdateManyArgs>(
      args: SelectSubset<T, PostUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
    **/
    upsert<T extends PostUpsertArgs>(
      args: SelectSubset<T, PostUpsertArgs>
    ): Prisma__PostClient<PostGetPayload<T>>

    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostCountArgs>(
      args?: Subset<T, PostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): Prisma.PrismaPromise<GetPostAggregateType<T>>

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
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
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs['orderBy'] }
        : { orderBy?: PostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PostClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    author<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    Section<T extends Post$SectionArgs= {}>(args?: Subset<T, Post$SectionArgs>): Prisma.PrismaPromise<Array<SectionGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Post base type for findUnique actions
   */
  export type PostFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findUnique
   */
  export interface PostFindUniqueArgs extends PostFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Post findUniqueOrThrow
   */
  export type PostFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }


  /**
   * Post base type for findFirst actions
   */
  export type PostFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: Enumerable<PostOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: Enumerable<PostScalarFieldEnum>
  }

  /**
   * Post findFirst
   */
  export interface PostFindFirstArgs extends PostFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Post findFirstOrThrow
   */
  export type PostFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: Enumerable<PostOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: Enumerable<PostScalarFieldEnum>
  }


  /**
   * Post findMany
   */
  export type PostFindManyArgs = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: Enumerable<PostOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    distinct?: Enumerable<PostScalarFieldEnum>
  }


  /**
   * Post create
   */
  export type PostCreateArgs = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude | null
    /**
     * The data needed to create a Post.
     */
    data: XOR<PostCreateInput, PostUncheckedCreateInput>
  }


  /**
   * Post createMany
   */
  export type PostCreateManyArgs = {
    /**
     * The data used to create many Posts.
     */
    data: Enumerable<PostCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Post update
   */
  export type PostUpdateArgs = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude | null
    /**
     * The data needed to update a Post.
     */
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>
    /**
     * Choose, which Post to update.
     */
    where: PostWhereUniqueInput
  }


  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
  }


  /**
   * Post upsert
   */
  export type PostUpsertArgs = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude | null
    /**
     * The filter to search for the Post to update in case it exists.
     */
    where: PostWhereUniqueInput
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     */
    create: XOR<PostCreateInput, PostUncheckedCreateInput>
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>
  }


  /**
   * Post delete
   */
  export type PostDeleteArgs = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude | null
    /**
     * Filter which Post to delete.
     */
    where: PostWhereUniqueInput
  }


  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs = {
    /**
     * Filter which Posts to delete
     */
    where?: PostWhereInput
  }


  /**
   * Post.Section
   */
  export type Post$SectionArgs = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SectionInclude | null
    where?: SectionWhereInput
    orderBy?: Enumerable<SectionOrderByWithRelationInput>
    cursor?: SectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<SectionScalarFieldEnum>
  }


  /**
   * Post without action
   */
  export type PostArgs = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude | null
  }



  /**
   * Model Section
   */


  export type AggregateSection = {
    _count: SectionCountAggregateOutputType | null
    _min: SectionMinAggregateOutputType | null
    _max: SectionMaxAggregateOutputType | null
  }

  export type SectionMinAggregateOutputType = {
    id: string | null
    heading: string | null
    sub_heading: string | null
    sumary: string | null
    post_id: string | null
  }

  export type SectionMaxAggregateOutputType = {
    id: string | null
    heading: string | null
    sub_heading: string | null
    sumary: string | null
    post_id: string | null
  }

  export type SectionCountAggregateOutputType = {
    id: number
    heading: number
    sub_heading: number
    sumary: number
    post_id: number
    _all: number
  }


  export type SectionMinAggregateInputType = {
    id?: true
    heading?: true
    sub_heading?: true
    sumary?: true
    post_id?: true
  }

  export type SectionMaxAggregateInputType = {
    id?: true
    heading?: true
    sub_heading?: true
    sumary?: true
    post_id?: true
  }

  export type SectionCountAggregateInputType = {
    id?: true
    heading?: true
    sub_heading?: true
    sumary?: true
    post_id?: true
    _all?: true
  }

  export type SectionAggregateArgs = {
    /**
     * Filter which Section to aggregate.
     */
    where?: SectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sections to fetch.
     */
    orderBy?: Enumerable<SectionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sections
    **/
    _count?: true | SectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SectionMaxAggregateInputType
  }

  export type GetSectionAggregateType<T extends SectionAggregateArgs> = {
        [P in keyof T & keyof AggregateSection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSection[P]>
      : GetScalarType<T[P], AggregateSection[P]>
  }




  export type SectionGroupByArgs = {
    where?: SectionWhereInput
    orderBy?: Enumerable<SectionOrderByWithAggregationInput>
    by: SectionScalarFieldEnum[]
    having?: SectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SectionCountAggregateInputType | true
    _min?: SectionMinAggregateInputType
    _max?: SectionMaxAggregateInputType
  }


  export type SectionGroupByOutputType = {
    id: string
    heading: string
    sub_heading: string | null
    sumary: string | null
    post_id: string
    _count: SectionCountAggregateOutputType | null
    _min: SectionMinAggregateOutputType | null
    _max: SectionMaxAggregateOutputType | null
  }

  type GetSectionGroupByPayload<T extends SectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<SectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SectionGroupByOutputType[P]>
            : GetScalarType<T[P], SectionGroupByOutputType[P]>
        }
      >
    >


  export type SectionSelect = {
    id?: boolean
    heading?: boolean
    sub_heading?: boolean
    sumary?: boolean
    post?: boolean | PostArgs
    post_id?: boolean
    text_sections?: boolean | Section$text_sectionsArgs
    midia_sections?: boolean | Section$midia_sectionsArgs
    code_sections?: boolean | Section$code_sectionsArgs
    heading_sections?: boolean | Section$heading_sectionsArgs
    _count?: boolean | SectionCountOutputTypeArgs
  }


  export type SectionInclude = {
    post?: boolean | PostArgs
    text_sections?: boolean | Section$text_sectionsArgs
    midia_sections?: boolean | Section$midia_sectionsArgs
    code_sections?: boolean | Section$code_sectionsArgs
    heading_sections?: boolean | Section$heading_sectionsArgs
    _count?: boolean | SectionCountOutputTypeArgs
  }

  export type SectionGetPayload<S extends boolean | null | undefined | SectionArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Section :
    S extends undefined ? never :
    S extends { include: any } & (SectionArgs | SectionFindManyArgs)
    ? Section  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'post' ? PostGetPayload<S['include'][P]> :
        P extends 'text_sections' ? Array < TextSectionGetPayload<S['include'][P]>>  :
        P extends 'midia_sections' ? Array < MidiaSectionGetPayload<S['include'][P]>>  :
        P extends 'code_sections' ? Array < CodeSectionGetPayload<S['include'][P]>>  :
        P extends 'heading_sections' ? Array < HeadingSectionGetPayload<S['include'][P]>>  :
        P extends '_count' ? SectionCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (SectionArgs | SectionFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'post' ? PostGetPayload<S['select'][P]> :
        P extends 'text_sections' ? Array < TextSectionGetPayload<S['select'][P]>>  :
        P extends 'midia_sections' ? Array < MidiaSectionGetPayload<S['select'][P]>>  :
        P extends 'code_sections' ? Array < CodeSectionGetPayload<S['select'][P]>>  :
        P extends 'heading_sections' ? Array < HeadingSectionGetPayload<S['select'][P]>>  :
        P extends '_count' ? SectionCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Section ? Section[P] : never
  } 
      : Section


  type SectionCountArgs = 
    Omit<SectionFindManyArgs, 'select' | 'include'> & {
      select?: SectionCountAggregateInputType | true
    }

  export interface SectionDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Section that matches the filter.
     * @param {SectionFindUniqueArgs} args - Arguments to find a Section
     * @example
     * // Get one Section
     * const section = await prisma.section.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SectionFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, SectionFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Section'> extends True ? Prisma__SectionClient<SectionGetPayload<T>> : Prisma__SectionClient<SectionGetPayload<T> | null, null>

    /**
     * Find one Section that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SectionFindUniqueOrThrowArgs} args - Arguments to find a Section
     * @example
     * // Get one Section
     * const section = await prisma.section.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SectionFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, SectionFindUniqueOrThrowArgs>
    ): Prisma__SectionClient<SectionGetPayload<T>>

    /**
     * Find the first Section that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionFindFirstArgs} args - Arguments to find a Section
     * @example
     * // Get one Section
     * const section = await prisma.section.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SectionFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, SectionFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Section'> extends True ? Prisma__SectionClient<SectionGetPayload<T>> : Prisma__SectionClient<SectionGetPayload<T> | null, null>

    /**
     * Find the first Section that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionFindFirstOrThrowArgs} args - Arguments to find a Section
     * @example
     * // Get one Section
     * const section = await prisma.section.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SectionFindFirstOrThrowArgs>(
      args?: SelectSubset<T, SectionFindFirstOrThrowArgs>
    ): Prisma__SectionClient<SectionGetPayload<T>>

    /**
     * Find zero or more Sections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sections
     * const sections = await prisma.section.findMany()
     * 
     * // Get first 10 Sections
     * const sections = await prisma.section.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sectionWithIdOnly = await prisma.section.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SectionFindManyArgs>(
      args?: SelectSubset<T, SectionFindManyArgs>
    ): Prisma.PrismaPromise<Array<SectionGetPayload<T>>>

    /**
     * Create a Section.
     * @param {SectionCreateArgs} args - Arguments to create a Section.
     * @example
     * // Create one Section
     * const Section = await prisma.section.create({
     *   data: {
     *     // ... data to create a Section
     *   }
     * })
     * 
    **/
    create<T extends SectionCreateArgs>(
      args: SelectSubset<T, SectionCreateArgs>
    ): Prisma__SectionClient<SectionGetPayload<T>>

    /**
     * Create many Sections.
     *     @param {SectionCreateManyArgs} args - Arguments to create many Sections.
     *     @example
     *     // Create many Sections
     *     const section = await prisma.section.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SectionCreateManyArgs>(
      args?: SelectSubset<T, SectionCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Section.
     * @param {SectionDeleteArgs} args - Arguments to delete one Section.
     * @example
     * // Delete one Section
     * const Section = await prisma.section.delete({
     *   where: {
     *     // ... filter to delete one Section
     *   }
     * })
     * 
    **/
    delete<T extends SectionDeleteArgs>(
      args: SelectSubset<T, SectionDeleteArgs>
    ): Prisma__SectionClient<SectionGetPayload<T>>

    /**
     * Update one Section.
     * @param {SectionUpdateArgs} args - Arguments to update one Section.
     * @example
     * // Update one Section
     * const section = await prisma.section.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SectionUpdateArgs>(
      args: SelectSubset<T, SectionUpdateArgs>
    ): Prisma__SectionClient<SectionGetPayload<T>>

    /**
     * Delete zero or more Sections.
     * @param {SectionDeleteManyArgs} args - Arguments to filter Sections to delete.
     * @example
     * // Delete a few Sections
     * const { count } = await prisma.section.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SectionDeleteManyArgs>(
      args?: SelectSubset<T, SectionDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sections
     * const section = await prisma.section.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SectionUpdateManyArgs>(
      args: SelectSubset<T, SectionUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Section.
     * @param {SectionUpsertArgs} args - Arguments to update or create a Section.
     * @example
     * // Update or create a Section
     * const section = await prisma.section.upsert({
     *   create: {
     *     // ... data to create a Section
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Section we want to update
     *   }
     * })
    **/
    upsert<T extends SectionUpsertArgs>(
      args: SelectSubset<T, SectionUpsertArgs>
    ): Prisma__SectionClient<SectionGetPayload<T>>

    /**
     * Count the number of Sections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionCountArgs} args - Arguments to filter Sections to count.
     * @example
     * // Count the number of Sections
     * const count = await prisma.section.count({
     *   where: {
     *     // ... the filter for the Sections we want to count
     *   }
     * })
    **/
    count<T extends SectionCountArgs>(
      args?: Subset<T, SectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Section.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SectionAggregateArgs>(args: Subset<T, SectionAggregateArgs>): Prisma.PrismaPromise<GetSectionAggregateType<T>>

    /**
     * Group by Section.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionGroupByArgs} args - Group by arguments.
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
      T extends SectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SectionGroupByArgs['orderBy'] }
        : { orderBy?: SectionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, SectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Section.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__SectionClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    post<T extends PostArgs= {}>(args?: Subset<T, PostArgs>): Prisma__PostClient<PostGetPayload<T> | Null>;

    text_sections<T extends Section$text_sectionsArgs= {}>(args?: Subset<T, Section$text_sectionsArgs>): Prisma.PrismaPromise<Array<TextSectionGetPayload<T>>| Null>;

    midia_sections<T extends Section$midia_sectionsArgs= {}>(args?: Subset<T, Section$midia_sectionsArgs>): Prisma.PrismaPromise<Array<MidiaSectionGetPayload<T>>| Null>;

    code_sections<T extends Section$code_sectionsArgs= {}>(args?: Subset<T, Section$code_sectionsArgs>): Prisma.PrismaPromise<Array<CodeSectionGetPayload<T>>| Null>;

    heading_sections<T extends Section$heading_sectionsArgs= {}>(args?: Subset<T, Section$heading_sectionsArgs>): Prisma.PrismaPromise<Array<HeadingSectionGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Section base type for findUnique actions
   */
  export type SectionFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SectionInclude | null
    /**
     * Filter, which Section to fetch.
     */
    where: SectionWhereUniqueInput
  }

  /**
   * Section findUnique
   */
  export interface SectionFindUniqueArgs extends SectionFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Section findUniqueOrThrow
   */
  export type SectionFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SectionInclude | null
    /**
     * Filter, which Section to fetch.
     */
    where: SectionWhereUniqueInput
  }


  /**
   * Section base type for findFirst actions
   */
  export type SectionFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SectionInclude | null
    /**
     * Filter, which Section to fetch.
     */
    where?: SectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sections to fetch.
     */
    orderBy?: Enumerable<SectionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sections.
     */
    cursor?: SectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sections.
     */
    distinct?: Enumerable<SectionScalarFieldEnum>
  }

  /**
   * Section findFirst
   */
  export interface SectionFindFirstArgs extends SectionFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Section findFirstOrThrow
   */
  export type SectionFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SectionInclude | null
    /**
     * Filter, which Section to fetch.
     */
    where?: SectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sections to fetch.
     */
    orderBy?: Enumerable<SectionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sections.
     */
    cursor?: SectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sections.
     */
    distinct?: Enumerable<SectionScalarFieldEnum>
  }


  /**
   * Section findMany
   */
  export type SectionFindManyArgs = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SectionInclude | null
    /**
     * Filter, which Sections to fetch.
     */
    where?: SectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sections to fetch.
     */
    orderBy?: Enumerable<SectionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sections.
     */
    cursor?: SectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sections.
     */
    skip?: number
    distinct?: Enumerable<SectionScalarFieldEnum>
  }


  /**
   * Section create
   */
  export type SectionCreateArgs = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SectionInclude | null
    /**
     * The data needed to create a Section.
     */
    data: XOR<SectionCreateInput, SectionUncheckedCreateInput>
  }


  /**
   * Section createMany
   */
  export type SectionCreateManyArgs = {
    /**
     * The data used to create many Sections.
     */
    data: Enumerable<SectionCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Section update
   */
  export type SectionUpdateArgs = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SectionInclude | null
    /**
     * The data needed to update a Section.
     */
    data: XOR<SectionUpdateInput, SectionUncheckedUpdateInput>
    /**
     * Choose, which Section to update.
     */
    where: SectionWhereUniqueInput
  }


  /**
   * Section updateMany
   */
  export type SectionUpdateManyArgs = {
    /**
     * The data used to update Sections.
     */
    data: XOR<SectionUpdateManyMutationInput, SectionUncheckedUpdateManyInput>
    /**
     * Filter which Sections to update
     */
    where?: SectionWhereInput
  }


  /**
   * Section upsert
   */
  export type SectionUpsertArgs = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SectionInclude | null
    /**
     * The filter to search for the Section to update in case it exists.
     */
    where: SectionWhereUniqueInput
    /**
     * In case the Section found by the `where` argument doesn't exist, create a new Section with this data.
     */
    create: XOR<SectionCreateInput, SectionUncheckedCreateInput>
    /**
     * In case the Section was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SectionUpdateInput, SectionUncheckedUpdateInput>
  }


  /**
   * Section delete
   */
  export type SectionDeleteArgs = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SectionInclude | null
    /**
     * Filter which Section to delete.
     */
    where: SectionWhereUniqueInput
  }


  /**
   * Section deleteMany
   */
  export type SectionDeleteManyArgs = {
    /**
     * Filter which Sections to delete
     */
    where?: SectionWhereInput
  }


  /**
   * Section.text_sections
   */
  export type Section$text_sectionsArgs = {
    /**
     * Select specific fields to fetch from the TextSection
     */
    select?: TextSectionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TextSectionInclude | null
    where?: TextSectionWhereInput
    orderBy?: Enumerable<TextSectionOrderByWithRelationInput>
    cursor?: TextSectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<TextSectionScalarFieldEnum>
  }


  /**
   * Section.midia_sections
   */
  export type Section$midia_sectionsArgs = {
    /**
     * Select specific fields to fetch from the MidiaSection
     */
    select?: MidiaSectionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MidiaSectionInclude | null
    where?: MidiaSectionWhereInput
    orderBy?: Enumerable<MidiaSectionOrderByWithRelationInput>
    cursor?: MidiaSectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<MidiaSectionScalarFieldEnum>
  }


  /**
   * Section.code_sections
   */
  export type Section$code_sectionsArgs = {
    /**
     * Select specific fields to fetch from the CodeSection
     */
    select?: CodeSectionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CodeSectionInclude | null
    where?: CodeSectionWhereInput
    orderBy?: Enumerable<CodeSectionOrderByWithRelationInput>
    cursor?: CodeSectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<CodeSectionScalarFieldEnum>
  }


  /**
   * Section.heading_sections
   */
  export type Section$heading_sectionsArgs = {
    /**
     * Select specific fields to fetch from the HeadingSection
     */
    select?: HeadingSectionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HeadingSectionInclude | null
    where?: HeadingSectionWhereInput
    orderBy?: Enumerable<HeadingSectionOrderByWithRelationInput>
    cursor?: HeadingSectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<HeadingSectionScalarFieldEnum>
  }


  /**
   * Section without action
   */
  export type SectionArgs = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SectionInclude | null
  }



  /**
   * Model TextSection
   */


  export type AggregateTextSection = {
    _count: TextSectionCountAggregateOutputType | null
    _avg: TextSectionAvgAggregateOutputType | null
    _sum: TextSectionSumAggregateOutputType | null
    _min: TextSectionMinAggregateOutputType | null
    _max: TextSectionMaxAggregateOutputType | null
  }

  export type TextSectionAvgAggregateOutputType = {
    order_of_priority: number | null
  }

  export type TextSectionSumAggregateOutputType = {
    order_of_priority: number | null
  }

  export type TextSectionMinAggregateOutputType = {
    id: string | null
    order_of_priority: number | null
    content: string | null
    section_id: string | null
  }

  export type TextSectionMaxAggregateOutputType = {
    id: string | null
    order_of_priority: number | null
    content: string | null
    section_id: string | null
  }

  export type TextSectionCountAggregateOutputType = {
    id: number
    order_of_priority: number
    content: number
    section_id: number
    _all: number
  }


  export type TextSectionAvgAggregateInputType = {
    order_of_priority?: true
  }

  export type TextSectionSumAggregateInputType = {
    order_of_priority?: true
  }

  export type TextSectionMinAggregateInputType = {
    id?: true
    order_of_priority?: true
    content?: true
    section_id?: true
  }

  export type TextSectionMaxAggregateInputType = {
    id?: true
    order_of_priority?: true
    content?: true
    section_id?: true
  }

  export type TextSectionCountAggregateInputType = {
    id?: true
    order_of_priority?: true
    content?: true
    section_id?: true
    _all?: true
  }

  export type TextSectionAggregateArgs = {
    /**
     * Filter which TextSection to aggregate.
     */
    where?: TextSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TextSections to fetch.
     */
    orderBy?: Enumerable<TextSectionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TextSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TextSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TextSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TextSections
    **/
    _count?: true | TextSectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TextSectionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TextSectionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TextSectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TextSectionMaxAggregateInputType
  }

  export type GetTextSectionAggregateType<T extends TextSectionAggregateArgs> = {
        [P in keyof T & keyof AggregateTextSection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTextSection[P]>
      : GetScalarType<T[P], AggregateTextSection[P]>
  }




  export type TextSectionGroupByArgs = {
    where?: TextSectionWhereInput
    orderBy?: Enumerable<TextSectionOrderByWithAggregationInput>
    by: TextSectionScalarFieldEnum[]
    having?: TextSectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TextSectionCountAggregateInputType | true
    _avg?: TextSectionAvgAggregateInputType
    _sum?: TextSectionSumAggregateInputType
    _min?: TextSectionMinAggregateInputType
    _max?: TextSectionMaxAggregateInputType
  }


  export type TextSectionGroupByOutputType = {
    id: string
    order_of_priority: number
    content: string
    section_id: string
    _count: TextSectionCountAggregateOutputType | null
    _avg: TextSectionAvgAggregateOutputType | null
    _sum: TextSectionSumAggregateOutputType | null
    _min: TextSectionMinAggregateOutputType | null
    _max: TextSectionMaxAggregateOutputType | null
  }

  type GetTextSectionGroupByPayload<T extends TextSectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<TextSectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TextSectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TextSectionGroupByOutputType[P]>
            : GetScalarType<T[P], TextSectionGroupByOutputType[P]>
        }
      >
    >


  export type TextSectionSelect = {
    id?: boolean
    order_of_priority?: boolean
    content?: boolean
    section?: boolean | SectionArgs
    section_id?: boolean
  }


  export type TextSectionInclude = {
    section?: boolean | SectionArgs
  }

  export type TextSectionGetPayload<S extends boolean | null | undefined | TextSectionArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? TextSection :
    S extends undefined ? never :
    S extends { include: any } & (TextSectionArgs | TextSectionFindManyArgs)
    ? TextSection  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'section' ? SectionGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (TextSectionArgs | TextSectionFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'section' ? SectionGetPayload<S['select'][P]> :  P extends keyof TextSection ? TextSection[P] : never
  } 
      : TextSection


  type TextSectionCountArgs = 
    Omit<TextSectionFindManyArgs, 'select' | 'include'> & {
      select?: TextSectionCountAggregateInputType | true
    }

  export interface TextSectionDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one TextSection that matches the filter.
     * @param {TextSectionFindUniqueArgs} args - Arguments to find a TextSection
     * @example
     * // Get one TextSection
     * const textSection = await prisma.textSection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TextSectionFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, TextSectionFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'TextSection'> extends True ? Prisma__TextSectionClient<TextSectionGetPayload<T>> : Prisma__TextSectionClient<TextSectionGetPayload<T> | null, null>

    /**
     * Find one TextSection that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TextSectionFindUniqueOrThrowArgs} args - Arguments to find a TextSection
     * @example
     * // Get one TextSection
     * const textSection = await prisma.textSection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TextSectionFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, TextSectionFindUniqueOrThrowArgs>
    ): Prisma__TextSectionClient<TextSectionGetPayload<T>>

    /**
     * Find the first TextSection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TextSectionFindFirstArgs} args - Arguments to find a TextSection
     * @example
     * // Get one TextSection
     * const textSection = await prisma.textSection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TextSectionFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, TextSectionFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'TextSection'> extends True ? Prisma__TextSectionClient<TextSectionGetPayload<T>> : Prisma__TextSectionClient<TextSectionGetPayload<T> | null, null>

    /**
     * Find the first TextSection that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TextSectionFindFirstOrThrowArgs} args - Arguments to find a TextSection
     * @example
     * // Get one TextSection
     * const textSection = await prisma.textSection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TextSectionFindFirstOrThrowArgs>(
      args?: SelectSubset<T, TextSectionFindFirstOrThrowArgs>
    ): Prisma__TextSectionClient<TextSectionGetPayload<T>>

    /**
     * Find zero or more TextSections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TextSectionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TextSections
     * const textSections = await prisma.textSection.findMany()
     * 
     * // Get first 10 TextSections
     * const textSections = await prisma.textSection.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const textSectionWithIdOnly = await prisma.textSection.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TextSectionFindManyArgs>(
      args?: SelectSubset<T, TextSectionFindManyArgs>
    ): Prisma.PrismaPromise<Array<TextSectionGetPayload<T>>>

    /**
     * Create a TextSection.
     * @param {TextSectionCreateArgs} args - Arguments to create a TextSection.
     * @example
     * // Create one TextSection
     * const TextSection = await prisma.textSection.create({
     *   data: {
     *     // ... data to create a TextSection
     *   }
     * })
     * 
    **/
    create<T extends TextSectionCreateArgs>(
      args: SelectSubset<T, TextSectionCreateArgs>
    ): Prisma__TextSectionClient<TextSectionGetPayload<T>>

    /**
     * Create many TextSections.
     *     @param {TextSectionCreateManyArgs} args - Arguments to create many TextSections.
     *     @example
     *     // Create many TextSections
     *     const textSection = await prisma.textSection.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TextSectionCreateManyArgs>(
      args?: SelectSubset<T, TextSectionCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TextSection.
     * @param {TextSectionDeleteArgs} args - Arguments to delete one TextSection.
     * @example
     * // Delete one TextSection
     * const TextSection = await prisma.textSection.delete({
     *   where: {
     *     // ... filter to delete one TextSection
     *   }
     * })
     * 
    **/
    delete<T extends TextSectionDeleteArgs>(
      args: SelectSubset<T, TextSectionDeleteArgs>
    ): Prisma__TextSectionClient<TextSectionGetPayload<T>>

    /**
     * Update one TextSection.
     * @param {TextSectionUpdateArgs} args - Arguments to update one TextSection.
     * @example
     * // Update one TextSection
     * const textSection = await prisma.textSection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TextSectionUpdateArgs>(
      args: SelectSubset<T, TextSectionUpdateArgs>
    ): Prisma__TextSectionClient<TextSectionGetPayload<T>>

    /**
     * Delete zero or more TextSections.
     * @param {TextSectionDeleteManyArgs} args - Arguments to filter TextSections to delete.
     * @example
     * // Delete a few TextSections
     * const { count } = await prisma.textSection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TextSectionDeleteManyArgs>(
      args?: SelectSubset<T, TextSectionDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TextSections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TextSectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TextSections
     * const textSection = await prisma.textSection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TextSectionUpdateManyArgs>(
      args: SelectSubset<T, TextSectionUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TextSection.
     * @param {TextSectionUpsertArgs} args - Arguments to update or create a TextSection.
     * @example
     * // Update or create a TextSection
     * const textSection = await prisma.textSection.upsert({
     *   create: {
     *     // ... data to create a TextSection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TextSection we want to update
     *   }
     * })
    **/
    upsert<T extends TextSectionUpsertArgs>(
      args: SelectSubset<T, TextSectionUpsertArgs>
    ): Prisma__TextSectionClient<TextSectionGetPayload<T>>

    /**
     * Count the number of TextSections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TextSectionCountArgs} args - Arguments to filter TextSections to count.
     * @example
     * // Count the number of TextSections
     * const count = await prisma.textSection.count({
     *   where: {
     *     // ... the filter for the TextSections we want to count
     *   }
     * })
    **/
    count<T extends TextSectionCountArgs>(
      args?: Subset<T, TextSectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TextSectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TextSection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TextSectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TextSectionAggregateArgs>(args: Subset<T, TextSectionAggregateArgs>): Prisma.PrismaPromise<GetTextSectionAggregateType<T>>

    /**
     * Group by TextSection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TextSectionGroupByArgs} args - Group by arguments.
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
      T extends TextSectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TextSectionGroupByArgs['orderBy'] }
        : { orderBy?: TextSectionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, TextSectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTextSectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for TextSection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TextSectionClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    section<T extends SectionArgs= {}>(args?: Subset<T, SectionArgs>): Prisma__SectionClient<SectionGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * TextSection base type for findUnique actions
   */
  export type TextSectionFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the TextSection
     */
    select?: TextSectionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TextSectionInclude | null
    /**
     * Filter, which TextSection to fetch.
     */
    where: TextSectionWhereUniqueInput
  }

  /**
   * TextSection findUnique
   */
  export interface TextSectionFindUniqueArgs extends TextSectionFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * TextSection findUniqueOrThrow
   */
  export type TextSectionFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the TextSection
     */
    select?: TextSectionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TextSectionInclude | null
    /**
     * Filter, which TextSection to fetch.
     */
    where: TextSectionWhereUniqueInput
  }


  /**
   * TextSection base type for findFirst actions
   */
  export type TextSectionFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the TextSection
     */
    select?: TextSectionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TextSectionInclude | null
    /**
     * Filter, which TextSection to fetch.
     */
    where?: TextSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TextSections to fetch.
     */
    orderBy?: Enumerable<TextSectionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TextSections.
     */
    cursor?: TextSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TextSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TextSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TextSections.
     */
    distinct?: Enumerable<TextSectionScalarFieldEnum>
  }

  /**
   * TextSection findFirst
   */
  export interface TextSectionFindFirstArgs extends TextSectionFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * TextSection findFirstOrThrow
   */
  export type TextSectionFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the TextSection
     */
    select?: TextSectionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TextSectionInclude | null
    /**
     * Filter, which TextSection to fetch.
     */
    where?: TextSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TextSections to fetch.
     */
    orderBy?: Enumerable<TextSectionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TextSections.
     */
    cursor?: TextSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TextSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TextSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TextSections.
     */
    distinct?: Enumerable<TextSectionScalarFieldEnum>
  }


  /**
   * TextSection findMany
   */
  export type TextSectionFindManyArgs = {
    /**
     * Select specific fields to fetch from the TextSection
     */
    select?: TextSectionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TextSectionInclude | null
    /**
     * Filter, which TextSections to fetch.
     */
    where?: TextSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TextSections to fetch.
     */
    orderBy?: Enumerable<TextSectionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TextSections.
     */
    cursor?: TextSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TextSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TextSections.
     */
    skip?: number
    distinct?: Enumerable<TextSectionScalarFieldEnum>
  }


  /**
   * TextSection create
   */
  export type TextSectionCreateArgs = {
    /**
     * Select specific fields to fetch from the TextSection
     */
    select?: TextSectionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TextSectionInclude | null
    /**
     * The data needed to create a TextSection.
     */
    data: XOR<TextSectionCreateInput, TextSectionUncheckedCreateInput>
  }


  /**
   * TextSection createMany
   */
  export type TextSectionCreateManyArgs = {
    /**
     * The data used to create many TextSections.
     */
    data: Enumerable<TextSectionCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * TextSection update
   */
  export type TextSectionUpdateArgs = {
    /**
     * Select specific fields to fetch from the TextSection
     */
    select?: TextSectionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TextSectionInclude | null
    /**
     * The data needed to update a TextSection.
     */
    data: XOR<TextSectionUpdateInput, TextSectionUncheckedUpdateInput>
    /**
     * Choose, which TextSection to update.
     */
    where: TextSectionWhereUniqueInput
  }


  /**
   * TextSection updateMany
   */
  export type TextSectionUpdateManyArgs = {
    /**
     * The data used to update TextSections.
     */
    data: XOR<TextSectionUpdateManyMutationInput, TextSectionUncheckedUpdateManyInput>
    /**
     * Filter which TextSections to update
     */
    where?: TextSectionWhereInput
  }


  /**
   * TextSection upsert
   */
  export type TextSectionUpsertArgs = {
    /**
     * Select specific fields to fetch from the TextSection
     */
    select?: TextSectionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TextSectionInclude | null
    /**
     * The filter to search for the TextSection to update in case it exists.
     */
    where: TextSectionWhereUniqueInput
    /**
     * In case the TextSection found by the `where` argument doesn't exist, create a new TextSection with this data.
     */
    create: XOR<TextSectionCreateInput, TextSectionUncheckedCreateInput>
    /**
     * In case the TextSection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TextSectionUpdateInput, TextSectionUncheckedUpdateInput>
  }


  /**
   * TextSection delete
   */
  export type TextSectionDeleteArgs = {
    /**
     * Select specific fields to fetch from the TextSection
     */
    select?: TextSectionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TextSectionInclude | null
    /**
     * Filter which TextSection to delete.
     */
    where: TextSectionWhereUniqueInput
  }


  /**
   * TextSection deleteMany
   */
  export type TextSectionDeleteManyArgs = {
    /**
     * Filter which TextSections to delete
     */
    where?: TextSectionWhereInput
  }


  /**
   * TextSection without action
   */
  export type TextSectionArgs = {
    /**
     * Select specific fields to fetch from the TextSection
     */
    select?: TextSectionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TextSectionInclude | null
  }



  /**
   * Model HeadingSection
   */


  export type AggregateHeadingSection = {
    _count: HeadingSectionCountAggregateOutputType | null
    _avg: HeadingSectionAvgAggregateOutputType | null
    _sum: HeadingSectionSumAggregateOutputType | null
    _min: HeadingSectionMinAggregateOutputType | null
    _max: HeadingSectionMaxAggregateOutputType | null
  }

  export type HeadingSectionAvgAggregateOutputType = {
    order_of_priority: number | null
  }

  export type HeadingSectionSumAggregateOutputType = {
    order_of_priority: number | null
  }

  export type HeadingSectionMinAggregateOutputType = {
    id: string | null
    order_of_priority: number | null
    title: string | null
    subtitle: string | null
    summary: string | null
    section_id: string | null
  }

  export type HeadingSectionMaxAggregateOutputType = {
    id: string | null
    order_of_priority: number | null
    title: string | null
    subtitle: string | null
    summary: string | null
    section_id: string | null
  }

  export type HeadingSectionCountAggregateOutputType = {
    id: number
    order_of_priority: number
    title: number
    subtitle: number
    summary: number
    section_id: number
    _all: number
  }


  export type HeadingSectionAvgAggregateInputType = {
    order_of_priority?: true
  }

  export type HeadingSectionSumAggregateInputType = {
    order_of_priority?: true
  }

  export type HeadingSectionMinAggregateInputType = {
    id?: true
    order_of_priority?: true
    title?: true
    subtitle?: true
    summary?: true
    section_id?: true
  }

  export type HeadingSectionMaxAggregateInputType = {
    id?: true
    order_of_priority?: true
    title?: true
    subtitle?: true
    summary?: true
    section_id?: true
  }

  export type HeadingSectionCountAggregateInputType = {
    id?: true
    order_of_priority?: true
    title?: true
    subtitle?: true
    summary?: true
    section_id?: true
    _all?: true
  }

  export type HeadingSectionAggregateArgs = {
    /**
     * Filter which HeadingSection to aggregate.
     */
    where?: HeadingSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HeadingSections to fetch.
     */
    orderBy?: Enumerable<HeadingSectionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HeadingSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HeadingSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HeadingSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HeadingSections
    **/
    _count?: true | HeadingSectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HeadingSectionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HeadingSectionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HeadingSectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HeadingSectionMaxAggregateInputType
  }

  export type GetHeadingSectionAggregateType<T extends HeadingSectionAggregateArgs> = {
        [P in keyof T & keyof AggregateHeadingSection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHeadingSection[P]>
      : GetScalarType<T[P], AggregateHeadingSection[P]>
  }




  export type HeadingSectionGroupByArgs = {
    where?: HeadingSectionWhereInput
    orderBy?: Enumerable<HeadingSectionOrderByWithAggregationInput>
    by: HeadingSectionScalarFieldEnum[]
    having?: HeadingSectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HeadingSectionCountAggregateInputType | true
    _avg?: HeadingSectionAvgAggregateInputType
    _sum?: HeadingSectionSumAggregateInputType
    _min?: HeadingSectionMinAggregateInputType
    _max?: HeadingSectionMaxAggregateInputType
  }


  export type HeadingSectionGroupByOutputType = {
    id: string
    order_of_priority: number
    title: string
    subtitle: string | null
    summary: string | null
    section_id: string
    _count: HeadingSectionCountAggregateOutputType | null
    _avg: HeadingSectionAvgAggregateOutputType | null
    _sum: HeadingSectionSumAggregateOutputType | null
    _min: HeadingSectionMinAggregateOutputType | null
    _max: HeadingSectionMaxAggregateOutputType | null
  }

  type GetHeadingSectionGroupByPayload<T extends HeadingSectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<HeadingSectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HeadingSectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HeadingSectionGroupByOutputType[P]>
            : GetScalarType<T[P], HeadingSectionGroupByOutputType[P]>
        }
      >
    >


  export type HeadingSectionSelect = {
    id?: boolean
    order_of_priority?: boolean
    title?: boolean
    subtitle?: boolean
    summary?: boolean
    section?: boolean | SectionArgs
    section_id?: boolean
  }


  export type HeadingSectionInclude = {
    section?: boolean | SectionArgs
  }

  export type HeadingSectionGetPayload<S extends boolean | null | undefined | HeadingSectionArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? HeadingSection :
    S extends undefined ? never :
    S extends { include: any } & (HeadingSectionArgs | HeadingSectionFindManyArgs)
    ? HeadingSection  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'section' ? SectionGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (HeadingSectionArgs | HeadingSectionFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'section' ? SectionGetPayload<S['select'][P]> :  P extends keyof HeadingSection ? HeadingSection[P] : never
  } 
      : HeadingSection


  type HeadingSectionCountArgs = 
    Omit<HeadingSectionFindManyArgs, 'select' | 'include'> & {
      select?: HeadingSectionCountAggregateInputType | true
    }

  export interface HeadingSectionDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one HeadingSection that matches the filter.
     * @param {HeadingSectionFindUniqueArgs} args - Arguments to find a HeadingSection
     * @example
     * // Get one HeadingSection
     * const headingSection = await prisma.headingSection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends HeadingSectionFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, HeadingSectionFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'HeadingSection'> extends True ? Prisma__HeadingSectionClient<HeadingSectionGetPayload<T>> : Prisma__HeadingSectionClient<HeadingSectionGetPayload<T> | null, null>

    /**
     * Find one HeadingSection that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {HeadingSectionFindUniqueOrThrowArgs} args - Arguments to find a HeadingSection
     * @example
     * // Get one HeadingSection
     * const headingSection = await prisma.headingSection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends HeadingSectionFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, HeadingSectionFindUniqueOrThrowArgs>
    ): Prisma__HeadingSectionClient<HeadingSectionGetPayload<T>>

    /**
     * Find the first HeadingSection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeadingSectionFindFirstArgs} args - Arguments to find a HeadingSection
     * @example
     * // Get one HeadingSection
     * const headingSection = await prisma.headingSection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends HeadingSectionFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, HeadingSectionFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'HeadingSection'> extends True ? Prisma__HeadingSectionClient<HeadingSectionGetPayload<T>> : Prisma__HeadingSectionClient<HeadingSectionGetPayload<T> | null, null>

    /**
     * Find the first HeadingSection that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeadingSectionFindFirstOrThrowArgs} args - Arguments to find a HeadingSection
     * @example
     * // Get one HeadingSection
     * const headingSection = await prisma.headingSection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends HeadingSectionFindFirstOrThrowArgs>(
      args?: SelectSubset<T, HeadingSectionFindFirstOrThrowArgs>
    ): Prisma__HeadingSectionClient<HeadingSectionGetPayload<T>>

    /**
     * Find zero or more HeadingSections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeadingSectionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HeadingSections
     * const headingSections = await prisma.headingSection.findMany()
     * 
     * // Get first 10 HeadingSections
     * const headingSections = await prisma.headingSection.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const headingSectionWithIdOnly = await prisma.headingSection.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends HeadingSectionFindManyArgs>(
      args?: SelectSubset<T, HeadingSectionFindManyArgs>
    ): Prisma.PrismaPromise<Array<HeadingSectionGetPayload<T>>>

    /**
     * Create a HeadingSection.
     * @param {HeadingSectionCreateArgs} args - Arguments to create a HeadingSection.
     * @example
     * // Create one HeadingSection
     * const HeadingSection = await prisma.headingSection.create({
     *   data: {
     *     // ... data to create a HeadingSection
     *   }
     * })
     * 
    **/
    create<T extends HeadingSectionCreateArgs>(
      args: SelectSubset<T, HeadingSectionCreateArgs>
    ): Prisma__HeadingSectionClient<HeadingSectionGetPayload<T>>

    /**
     * Create many HeadingSections.
     *     @param {HeadingSectionCreateManyArgs} args - Arguments to create many HeadingSections.
     *     @example
     *     // Create many HeadingSections
     *     const headingSection = await prisma.headingSection.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends HeadingSectionCreateManyArgs>(
      args?: SelectSubset<T, HeadingSectionCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a HeadingSection.
     * @param {HeadingSectionDeleteArgs} args - Arguments to delete one HeadingSection.
     * @example
     * // Delete one HeadingSection
     * const HeadingSection = await prisma.headingSection.delete({
     *   where: {
     *     // ... filter to delete one HeadingSection
     *   }
     * })
     * 
    **/
    delete<T extends HeadingSectionDeleteArgs>(
      args: SelectSubset<T, HeadingSectionDeleteArgs>
    ): Prisma__HeadingSectionClient<HeadingSectionGetPayload<T>>

    /**
     * Update one HeadingSection.
     * @param {HeadingSectionUpdateArgs} args - Arguments to update one HeadingSection.
     * @example
     * // Update one HeadingSection
     * const headingSection = await prisma.headingSection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends HeadingSectionUpdateArgs>(
      args: SelectSubset<T, HeadingSectionUpdateArgs>
    ): Prisma__HeadingSectionClient<HeadingSectionGetPayload<T>>

    /**
     * Delete zero or more HeadingSections.
     * @param {HeadingSectionDeleteManyArgs} args - Arguments to filter HeadingSections to delete.
     * @example
     * // Delete a few HeadingSections
     * const { count } = await prisma.headingSection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends HeadingSectionDeleteManyArgs>(
      args?: SelectSubset<T, HeadingSectionDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HeadingSections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeadingSectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HeadingSections
     * const headingSection = await prisma.headingSection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends HeadingSectionUpdateManyArgs>(
      args: SelectSubset<T, HeadingSectionUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one HeadingSection.
     * @param {HeadingSectionUpsertArgs} args - Arguments to update or create a HeadingSection.
     * @example
     * // Update or create a HeadingSection
     * const headingSection = await prisma.headingSection.upsert({
     *   create: {
     *     // ... data to create a HeadingSection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HeadingSection we want to update
     *   }
     * })
    **/
    upsert<T extends HeadingSectionUpsertArgs>(
      args: SelectSubset<T, HeadingSectionUpsertArgs>
    ): Prisma__HeadingSectionClient<HeadingSectionGetPayload<T>>

    /**
     * Count the number of HeadingSections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeadingSectionCountArgs} args - Arguments to filter HeadingSections to count.
     * @example
     * // Count the number of HeadingSections
     * const count = await prisma.headingSection.count({
     *   where: {
     *     // ... the filter for the HeadingSections we want to count
     *   }
     * })
    **/
    count<T extends HeadingSectionCountArgs>(
      args?: Subset<T, HeadingSectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HeadingSectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HeadingSection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeadingSectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HeadingSectionAggregateArgs>(args: Subset<T, HeadingSectionAggregateArgs>): Prisma.PrismaPromise<GetHeadingSectionAggregateType<T>>

    /**
     * Group by HeadingSection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeadingSectionGroupByArgs} args - Group by arguments.
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
      T extends HeadingSectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HeadingSectionGroupByArgs['orderBy'] }
        : { orderBy?: HeadingSectionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, HeadingSectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHeadingSectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for HeadingSection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__HeadingSectionClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    section<T extends SectionArgs= {}>(args?: Subset<T, SectionArgs>): Prisma__SectionClient<SectionGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * HeadingSection base type for findUnique actions
   */
  export type HeadingSectionFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the HeadingSection
     */
    select?: HeadingSectionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HeadingSectionInclude | null
    /**
     * Filter, which HeadingSection to fetch.
     */
    where: HeadingSectionWhereUniqueInput
  }

  /**
   * HeadingSection findUnique
   */
  export interface HeadingSectionFindUniqueArgs extends HeadingSectionFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * HeadingSection findUniqueOrThrow
   */
  export type HeadingSectionFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the HeadingSection
     */
    select?: HeadingSectionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HeadingSectionInclude | null
    /**
     * Filter, which HeadingSection to fetch.
     */
    where: HeadingSectionWhereUniqueInput
  }


  /**
   * HeadingSection base type for findFirst actions
   */
  export type HeadingSectionFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the HeadingSection
     */
    select?: HeadingSectionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HeadingSectionInclude | null
    /**
     * Filter, which HeadingSection to fetch.
     */
    where?: HeadingSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HeadingSections to fetch.
     */
    orderBy?: Enumerable<HeadingSectionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HeadingSections.
     */
    cursor?: HeadingSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HeadingSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HeadingSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HeadingSections.
     */
    distinct?: Enumerable<HeadingSectionScalarFieldEnum>
  }

  /**
   * HeadingSection findFirst
   */
  export interface HeadingSectionFindFirstArgs extends HeadingSectionFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * HeadingSection findFirstOrThrow
   */
  export type HeadingSectionFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the HeadingSection
     */
    select?: HeadingSectionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HeadingSectionInclude | null
    /**
     * Filter, which HeadingSection to fetch.
     */
    where?: HeadingSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HeadingSections to fetch.
     */
    orderBy?: Enumerable<HeadingSectionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HeadingSections.
     */
    cursor?: HeadingSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HeadingSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HeadingSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HeadingSections.
     */
    distinct?: Enumerable<HeadingSectionScalarFieldEnum>
  }


  /**
   * HeadingSection findMany
   */
  export type HeadingSectionFindManyArgs = {
    /**
     * Select specific fields to fetch from the HeadingSection
     */
    select?: HeadingSectionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HeadingSectionInclude | null
    /**
     * Filter, which HeadingSections to fetch.
     */
    where?: HeadingSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HeadingSections to fetch.
     */
    orderBy?: Enumerable<HeadingSectionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HeadingSections.
     */
    cursor?: HeadingSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HeadingSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HeadingSections.
     */
    skip?: number
    distinct?: Enumerable<HeadingSectionScalarFieldEnum>
  }


  /**
   * HeadingSection create
   */
  export type HeadingSectionCreateArgs = {
    /**
     * Select specific fields to fetch from the HeadingSection
     */
    select?: HeadingSectionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HeadingSectionInclude | null
    /**
     * The data needed to create a HeadingSection.
     */
    data: XOR<HeadingSectionCreateInput, HeadingSectionUncheckedCreateInput>
  }


  /**
   * HeadingSection createMany
   */
  export type HeadingSectionCreateManyArgs = {
    /**
     * The data used to create many HeadingSections.
     */
    data: Enumerable<HeadingSectionCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * HeadingSection update
   */
  export type HeadingSectionUpdateArgs = {
    /**
     * Select specific fields to fetch from the HeadingSection
     */
    select?: HeadingSectionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HeadingSectionInclude | null
    /**
     * The data needed to update a HeadingSection.
     */
    data: XOR<HeadingSectionUpdateInput, HeadingSectionUncheckedUpdateInput>
    /**
     * Choose, which HeadingSection to update.
     */
    where: HeadingSectionWhereUniqueInput
  }


  /**
   * HeadingSection updateMany
   */
  export type HeadingSectionUpdateManyArgs = {
    /**
     * The data used to update HeadingSections.
     */
    data: XOR<HeadingSectionUpdateManyMutationInput, HeadingSectionUncheckedUpdateManyInput>
    /**
     * Filter which HeadingSections to update
     */
    where?: HeadingSectionWhereInput
  }


  /**
   * HeadingSection upsert
   */
  export type HeadingSectionUpsertArgs = {
    /**
     * Select specific fields to fetch from the HeadingSection
     */
    select?: HeadingSectionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HeadingSectionInclude | null
    /**
     * The filter to search for the HeadingSection to update in case it exists.
     */
    where: HeadingSectionWhereUniqueInput
    /**
     * In case the HeadingSection found by the `where` argument doesn't exist, create a new HeadingSection with this data.
     */
    create: XOR<HeadingSectionCreateInput, HeadingSectionUncheckedCreateInput>
    /**
     * In case the HeadingSection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HeadingSectionUpdateInput, HeadingSectionUncheckedUpdateInput>
  }


  /**
   * HeadingSection delete
   */
  export type HeadingSectionDeleteArgs = {
    /**
     * Select specific fields to fetch from the HeadingSection
     */
    select?: HeadingSectionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HeadingSectionInclude | null
    /**
     * Filter which HeadingSection to delete.
     */
    where: HeadingSectionWhereUniqueInput
  }


  /**
   * HeadingSection deleteMany
   */
  export type HeadingSectionDeleteManyArgs = {
    /**
     * Filter which HeadingSections to delete
     */
    where?: HeadingSectionWhereInput
  }


  /**
   * HeadingSection without action
   */
  export type HeadingSectionArgs = {
    /**
     * Select specific fields to fetch from the HeadingSection
     */
    select?: HeadingSectionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HeadingSectionInclude | null
  }



  /**
   * Model MidiaSection
   */


  export type AggregateMidiaSection = {
    _count: MidiaSectionCountAggregateOutputType | null
    _avg: MidiaSectionAvgAggregateOutputType | null
    _sum: MidiaSectionSumAggregateOutputType | null
    _min: MidiaSectionMinAggregateOutputType | null
    _max: MidiaSectionMaxAggregateOutputType | null
  }

  export type MidiaSectionAvgAggregateOutputType = {
    order_of_priority: number | null
    height: number | null
    width: number | null
  }

  export type MidiaSectionSumAggregateOutputType = {
    order_of_priority: number | null
    height: number | null
    width: number | null
  }

  export type MidiaSectionMinAggregateOutputType = {
    id: string | null
    order_of_priority: number | null
    link: string | null
    height: number | null
    width: number | null
    section_id: string | null
  }

  export type MidiaSectionMaxAggregateOutputType = {
    id: string | null
    order_of_priority: number | null
    link: string | null
    height: number | null
    width: number | null
    section_id: string | null
  }

  export type MidiaSectionCountAggregateOutputType = {
    id: number
    order_of_priority: number
    link: number
    height: number
    width: number
    section_id: number
    _all: number
  }


  export type MidiaSectionAvgAggregateInputType = {
    order_of_priority?: true
    height?: true
    width?: true
  }

  export type MidiaSectionSumAggregateInputType = {
    order_of_priority?: true
    height?: true
    width?: true
  }

  export type MidiaSectionMinAggregateInputType = {
    id?: true
    order_of_priority?: true
    link?: true
    height?: true
    width?: true
    section_id?: true
  }

  export type MidiaSectionMaxAggregateInputType = {
    id?: true
    order_of_priority?: true
    link?: true
    height?: true
    width?: true
    section_id?: true
  }

  export type MidiaSectionCountAggregateInputType = {
    id?: true
    order_of_priority?: true
    link?: true
    height?: true
    width?: true
    section_id?: true
    _all?: true
  }

  export type MidiaSectionAggregateArgs = {
    /**
     * Filter which MidiaSection to aggregate.
     */
    where?: MidiaSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MidiaSections to fetch.
     */
    orderBy?: Enumerable<MidiaSectionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MidiaSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MidiaSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MidiaSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MidiaSections
    **/
    _count?: true | MidiaSectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MidiaSectionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MidiaSectionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MidiaSectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MidiaSectionMaxAggregateInputType
  }

  export type GetMidiaSectionAggregateType<T extends MidiaSectionAggregateArgs> = {
        [P in keyof T & keyof AggregateMidiaSection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMidiaSection[P]>
      : GetScalarType<T[P], AggregateMidiaSection[P]>
  }




  export type MidiaSectionGroupByArgs = {
    where?: MidiaSectionWhereInput
    orderBy?: Enumerable<MidiaSectionOrderByWithAggregationInput>
    by: MidiaSectionScalarFieldEnum[]
    having?: MidiaSectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MidiaSectionCountAggregateInputType | true
    _avg?: MidiaSectionAvgAggregateInputType
    _sum?: MidiaSectionSumAggregateInputType
    _min?: MidiaSectionMinAggregateInputType
    _max?: MidiaSectionMaxAggregateInputType
  }


  export type MidiaSectionGroupByOutputType = {
    id: string
    order_of_priority: number
    link: string
    height: number
    width: number
    section_id: string
    _count: MidiaSectionCountAggregateOutputType | null
    _avg: MidiaSectionAvgAggregateOutputType | null
    _sum: MidiaSectionSumAggregateOutputType | null
    _min: MidiaSectionMinAggregateOutputType | null
    _max: MidiaSectionMaxAggregateOutputType | null
  }

  type GetMidiaSectionGroupByPayload<T extends MidiaSectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<MidiaSectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MidiaSectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MidiaSectionGroupByOutputType[P]>
            : GetScalarType<T[P], MidiaSectionGroupByOutputType[P]>
        }
      >
    >


  export type MidiaSectionSelect = {
    id?: boolean
    order_of_priority?: boolean
    link?: boolean
    height?: boolean
    width?: boolean
    section?: boolean | SectionArgs
    section_id?: boolean
  }


  export type MidiaSectionInclude = {
    section?: boolean | SectionArgs
  }

  export type MidiaSectionGetPayload<S extends boolean | null | undefined | MidiaSectionArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? MidiaSection :
    S extends undefined ? never :
    S extends { include: any } & (MidiaSectionArgs | MidiaSectionFindManyArgs)
    ? MidiaSection  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'section' ? SectionGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (MidiaSectionArgs | MidiaSectionFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'section' ? SectionGetPayload<S['select'][P]> :  P extends keyof MidiaSection ? MidiaSection[P] : never
  } 
      : MidiaSection


  type MidiaSectionCountArgs = 
    Omit<MidiaSectionFindManyArgs, 'select' | 'include'> & {
      select?: MidiaSectionCountAggregateInputType | true
    }

  export interface MidiaSectionDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one MidiaSection that matches the filter.
     * @param {MidiaSectionFindUniqueArgs} args - Arguments to find a MidiaSection
     * @example
     * // Get one MidiaSection
     * const midiaSection = await prisma.midiaSection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MidiaSectionFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, MidiaSectionFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'MidiaSection'> extends True ? Prisma__MidiaSectionClient<MidiaSectionGetPayload<T>> : Prisma__MidiaSectionClient<MidiaSectionGetPayload<T> | null, null>

    /**
     * Find one MidiaSection that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {MidiaSectionFindUniqueOrThrowArgs} args - Arguments to find a MidiaSection
     * @example
     * // Get one MidiaSection
     * const midiaSection = await prisma.midiaSection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MidiaSectionFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, MidiaSectionFindUniqueOrThrowArgs>
    ): Prisma__MidiaSectionClient<MidiaSectionGetPayload<T>>

    /**
     * Find the first MidiaSection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MidiaSectionFindFirstArgs} args - Arguments to find a MidiaSection
     * @example
     * // Get one MidiaSection
     * const midiaSection = await prisma.midiaSection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MidiaSectionFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, MidiaSectionFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'MidiaSection'> extends True ? Prisma__MidiaSectionClient<MidiaSectionGetPayload<T>> : Prisma__MidiaSectionClient<MidiaSectionGetPayload<T> | null, null>

    /**
     * Find the first MidiaSection that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MidiaSectionFindFirstOrThrowArgs} args - Arguments to find a MidiaSection
     * @example
     * // Get one MidiaSection
     * const midiaSection = await prisma.midiaSection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MidiaSectionFindFirstOrThrowArgs>(
      args?: SelectSubset<T, MidiaSectionFindFirstOrThrowArgs>
    ): Prisma__MidiaSectionClient<MidiaSectionGetPayload<T>>

    /**
     * Find zero or more MidiaSections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MidiaSectionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MidiaSections
     * const midiaSections = await prisma.midiaSection.findMany()
     * 
     * // Get first 10 MidiaSections
     * const midiaSections = await prisma.midiaSection.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const midiaSectionWithIdOnly = await prisma.midiaSection.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MidiaSectionFindManyArgs>(
      args?: SelectSubset<T, MidiaSectionFindManyArgs>
    ): Prisma.PrismaPromise<Array<MidiaSectionGetPayload<T>>>

    /**
     * Create a MidiaSection.
     * @param {MidiaSectionCreateArgs} args - Arguments to create a MidiaSection.
     * @example
     * // Create one MidiaSection
     * const MidiaSection = await prisma.midiaSection.create({
     *   data: {
     *     // ... data to create a MidiaSection
     *   }
     * })
     * 
    **/
    create<T extends MidiaSectionCreateArgs>(
      args: SelectSubset<T, MidiaSectionCreateArgs>
    ): Prisma__MidiaSectionClient<MidiaSectionGetPayload<T>>

    /**
     * Create many MidiaSections.
     *     @param {MidiaSectionCreateManyArgs} args - Arguments to create many MidiaSections.
     *     @example
     *     // Create many MidiaSections
     *     const midiaSection = await prisma.midiaSection.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MidiaSectionCreateManyArgs>(
      args?: SelectSubset<T, MidiaSectionCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MidiaSection.
     * @param {MidiaSectionDeleteArgs} args - Arguments to delete one MidiaSection.
     * @example
     * // Delete one MidiaSection
     * const MidiaSection = await prisma.midiaSection.delete({
     *   where: {
     *     // ... filter to delete one MidiaSection
     *   }
     * })
     * 
    **/
    delete<T extends MidiaSectionDeleteArgs>(
      args: SelectSubset<T, MidiaSectionDeleteArgs>
    ): Prisma__MidiaSectionClient<MidiaSectionGetPayload<T>>

    /**
     * Update one MidiaSection.
     * @param {MidiaSectionUpdateArgs} args - Arguments to update one MidiaSection.
     * @example
     * // Update one MidiaSection
     * const midiaSection = await prisma.midiaSection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MidiaSectionUpdateArgs>(
      args: SelectSubset<T, MidiaSectionUpdateArgs>
    ): Prisma__MidiaSectionClient<MidiaSectionGetPayload<T>>

    /**
     * Delete zero or more MidiaSections.
     * @param {MidiaSectionDeleteManyArgs} args - Arguments to filter MidiaSections to delete.
     * @example
     * // Delete a few MidiaSections
     * const { count } = await prisma.midiaSection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MidiaSectionDeleteManyArgs>(
      args?: SelectSubset<T, MidiaSectionDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MidiaSections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MidiaSectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MidiaSections
     * const midiaSection = await prisma.midiaSection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MidiaSectionUpdateManyArgs>(
      args: SelectSubset<T, MidiaSectionUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MidiaSection.
     * @param {MidiaSectionUpsertArgs} args - Arguments to update or create a MidiaSection.
     * @example
     * // Update or create a MidiaSection
     * const midiaSection = await prisma.midiaSection.upsert({
     *   create: {
     *     // ... data to create a MidiaSection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MidiaSection we want to update
     *   }
     * })
    **/
    upsert<T extends MidiaSectionUpsertArgs>(
      args: SelectSubset<T, MidiaSectionUpsertArgs>
    ): Prisma__MidiaSectionClient<MidiaSectionGetPayload<T>>

    /**
     * Count the number of MidiaSections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MidiaSectionCountArgs} args - Arguments to filter MidiaSections to count.
     * @example
     * // Count the number of MidiaSections
     * const count = await prisma.midiaSection.count({
     *   where: {
     *     // ... the filter for the MidiaSections we want to count
     *   }
     * })
    **/
    count<T extends MidiaSectionCountArgs>(
      args?: Subset<T, MidiaSectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MidiaSectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MidiaSection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MidiaSectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MidiaSectionAggregateArgs>(args: Subset<T, MidiaSectionAggregateArgs>): Prisma.PrismaPromise<GetMidiaSectionAggregateType<T>>

    /**
     * Group by MidiaSection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MidiaSectionGroupByArgs} args - Group by arguments.
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
      T extends MidiaSectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MidiaSectionGroupByArgs['orderBy'] }
        : { orderBy?: MidiaSectionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, MidiaSectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMidiaSectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for MidiaSection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__MidiaSectionClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    section<T extends SectionArgs= {}>(args?: Subset<T, SectionArgs>): Prisma__SectionClient<SectionGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * MidiaSection base type for findUnique actions
   */
  export type MidiaSectionFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the MidiaSection
     */
    select?: MidiaSectionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MidiaSectionInclude | null
    /**
     * Filter, which MidiaSection to fetch.
     */
    where: MidiaSectionWhereUniqueInput
  }

  /**
   * MidiaSection findUnique
   */
  export interface MidiaSectionFindUniqueArgs extends MidiaSectionFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * MidiaSection findUniqueOrThrow
   */
  export type MidiaSectionFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the MidiaSection
     */
    select?: MidiaSectionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MidiaSectionInclude | null
    /**
     * Filter, which MidiaSection to fetch.
     */
    where: MidiaSectionWhereUniqueInput
  }


  /**
   * MidiaSection base type for findFirst actions
   */
  export type MidiaSectionFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the MidiaSection
     */
    select?: MidiaSectionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MidiaSectionInclude | null
    /**
     * Filter, which MidiaSection to fetch.
     */
    where?: MidiaSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MidiaSections to fetch.
     */
    orderBy?: Enumerable<MidiaSectionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MidiaSections.
     */
    cursor?: MidiaSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MidiaSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MidiaSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MidiaSections.
     */
    distinct?: Enumerable<MidiaSectionScalarFieldEnum>
  }

  /**
   * MidiaSection findFirst
   */
  export interface MidiaSectionFindFirstArgs extends MidiaSectionFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * MidiaSection findFirstOrThrow
   */
  export type MidiaSectionFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the MidiaSection
     */
    select?: MidiaSectionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MidiaSectionInclude | null
    /**
     * Filter, which MidiaSection to fetch.
     */
    where?: MidiaSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MidiaSections to fetch.
     */
    orderBy?: Enumerable<MidiaSectionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MidiaSections.
     */
    cursor?: MidiaSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MidiaSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MidiaSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MidiaSections.
     */
    distinct?: Enumerable<MidiaSectionScalarFieldEnum>
  }


  /**
   * MidiaSection findMany
   */
  export type MidiaSectionFindManyArgs = {
    /**
     * Select specific fields to fetch from the MidiaSection
     */
    select?: MidiaSectionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MidiaSectionInclude | null
    /**
     * Filter, which MidiaSections to fetch.
     */
    where?: MidiaSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MidiaSections to fetch.
     */
    orderBy?: Enumerable<MidiaSectionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MidiaSections.
     */
    cursor?: MidiaSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MidiaSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MidiaSections.
     */
    skip?: number
    distinct?: Enumerable<MidiaSectionScalarFieldEnum>
  }


  /**
   * MidiaSection create
   */
  export type MidiaSectionCreateArgs = {
    /**
     * Select specific fields to fetch from the MidiaSection
     */
    select?: MidiaSectionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MidiaSectionInclude | null
    /**
     * The data needed to create a MidiaSection.
     */
    data: XOR<MidiaSectionCreateInput, MidiaSectionUncheckedCreateInput>
  }


  /**
   * MidiaSection createMany
   */
  export type MidiaSectionCreateManyArgs = {
    /**
     * The data used to create many MidiaSections.
     */
    data: Enumerable<MidiaSectionCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * MidiaSection update
   */
  export type MidiaSectionUpdateArgs = {
    /**
     * Select specific fields to fetch from the MidiaSection
     */
    select?: MidiaSectionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MidiaSectionInclude | null
    /**
     * The data needed to update a MidiaSection.
     */
    data: XOR<MidiaSectionUpdateInput, MidiaSectionUncheckedUpdateInput>
    /**
     * Choose, which MidiaSection to update.
     */
    where: MidiaSectionWhereUniqueInput
  }


  /**
   * MidiaSection updateMany
   */
  export type MidiaSectionUpdateManyArgs = {
    /**
     * The data used to update MidiaSections.
     */
    data: XOR<MidiaSectionUpdateManyMutationInput, MidiaSectionUncheckedUpdateManyInput>
    /**
     * Filter which MidiaSections to update
     */
    where?: MidiaSectionWhereInput
  }


  /**
   * MidiaSection upsert
   */
  export type MidiaSectionUpsertArgs = {
    /**
     * Select specific fields to fetch from the MidiaSection
     */
    select?: MidiaSectionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MidiaSectionInclude | null
    /**
     * The filter to search for the MidiaSection to update in case it exists.
     */
    where: MidiaSectionWhereUniqueInput
    /**
     * In case the MidiaSection found by the `where` argument doesn't exist, create a new MidiaSection with this data.
     */
    create: XOR<MidiaSectionCreateInput, MidiaSectionUncheckedCreateInput>
    /**
     * In case the MidiaSection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MidiaSectionUpdateInput, MidiaSectionUncheckedUpdateInput>
  }


  /**
   * MidiaSection delete
   */
  export type MidiaSectionDeleteArgs = {
    /**
     * Select specific fields to fetch from the MidiaSection
     */
    select?: MidiaSectionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MidiaSectionInclude | null
    /**
     * Filter which MidiaSection to delete.
     */
    where: MidiaSectionWhereUniqueInput
  }


  /**
   * MidiaSection deleteMany
   */
  export type MidiaSectionDeleteManyArgs = {
    /**
     * Filter which MidiaSections to delete
     */
    where?: MidiaSectionWhereInput
  }


  /**
   * MidiaSection without action
   */
  export type MidiaSectionArgs = {
    /**
     * Select specific fields to fetch from the MidiaSection
     */
    select?: MidiaSectionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MidiaSectionInclude | null
  }



  /**
   * Model CodeSection
   */


  export type AggregateCodeSection = {
    _count: CodeSectionCountAggregateOutputType | null
    _avg: CodeSectionAvgAggregateOutputType | null
    _sum: CodeSectionSumAggregateOutputType | null
    _min: CodeSectionMinAggregateOutputType | null
    _max: CodeSectionMaxAggregateOutputType | null
  }

  export type CodeSectionAvgAggregateOutputType = {
    order_of_priority: number | null
  }

  export type CodeSectionSumAggregateOutputType = {
    order_of_priority: number | null
  }

  export type CodeSectionMinAggregateOutputType = {
    id: string | null
    order_of_priority: number | null
    summary: string | null
    content: string | null
    section_id: string | null
  }

  export type CodeSectionMaxAggregateOutputType = {
    id: string | null
    order_of_priority: number | null
    summary: string | null
    content: string | null
    section_id: string | null
  }

  export type CodeSectionCountAggregateOutputType = {
    id: number
    order_of_priority: number
    summary: number
    content: number
    section_id: number
    _all: number
  }


  export type CodeSectionAvgAggregateInputType = {
    order_of_priority?: true
  }

  export type CodeSectionSumAggregateInputType = {
    order_of_priority?: true
  }

  export type CodeSectionMinAggregateInputType = {
    id?: true
    order_of_priority?: true
    summary?: true
    content?: true
    section_id?: true
  }

  export type CodeSectionMaxAggregateInputType = {
    id?: true
    order_of_priority?: true
    summary?: true
    content?: true
    section_id?: true
  }

  export type CodeSectionCountAggregateInputType = {
    id?: true
    order_of_priority?: true
    summary?: true
    content?: true
    section_id?: true
    _all?: true
  }

  export type CodeSectionAggregateArgs = {
    /**
     * Filter which CodeSection to aggregate.
     */
    where?: CodeSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CodeSections to fetch.
     */
    orderBy?: Enumerable<CodeSectionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CodeSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CodeSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CodeSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CodeSections
    **/
    _count?: true | CodeSectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CodeSectionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CodeSectionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CodeSectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CodeSectionMaxAggregateInputType
  }

  export type GetCodeSectionAggregateType<T extends CodeSectionAggregateArgs> = {
        [P in keyof T & keyof AggregateCodeSection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCodeSection[P]>
      : GetScalarType<T[P], AggregateCodeSection[P]>
  }




  export type CodeSectionGroupByArgs = {
    where?: CodeSectionWhereInput
    orderBy?: Enumerable<CodeSectionOrderByWithAggregationInput>
    by: CodeSectionScalarFieldEnum[]
    having?: CodeSectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CodeSectionCountAggregateInputType | true
    _avg?: CodeSectionAvgAggregateInputType
    _sum?: CodeSectionSumAggregateInputType
    _min?: CodeSectionMinAggregateInputType
    _max?: CodeSectionMaxAggregateInputType
  }


  export type CodeSectionGroupByOutputType = {
    id: string
    order_of_priority: number
    summary: string | null
    content: string
    section_id: string
    _count: CodeSectionCountAggregateOutputType | null
    _avg: CodeSectionAvgAggregateOutputType | null
    _sum: CodeSectionSumAggregateOutputType | null
    _min: CodeSectionMinAggregateOutputType | null
    _max: CodeSectionMaxAggregateOutputType | null
  }

  type GetCodeSectionGroupByPayload<T extends CodeSectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<CodeSectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CodeSectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CodeSectionGroupByOutputType[P]>
            : GetScalarType<T[P], CodeSectionGroupByOutputType[P]>
        }
      >
    >


  export type CodeSectionSelect = {
    id?: boolean
    order_of_priority?: boolean
    summary?: boolean
    content?: boolean
    section?: boolean | SectionArgs
    section_id?: boolean
  }


  export type CodeSectionInclude = {
    section?: boolean | SectionArgs
  }

  export type CodeSectionGetPayload<S extends boolean | null | undefined | CodeSectionArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? CodeSection :
    S extends undefined ? never :
    S extends { include: any } & (CodeSectionArgs | CodeSectionFindManyArgs)
    ? CodeSection  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'section' ? SectionGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (CodeSectionArgs | CodeSectionFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'section' ? SectionGetPayload<S['select'][P]> :  P extends keyof CodeSection ? CodeSection[P] : never
  } 
      : CodeSection


  type CodeSectionCountArgs = 
    Omit<CodeSectionFindManyArgs, 'select' | 'include'> & {
      select?: CodeSectionCountAggregateInputType | true
    }

  export interface CodeSectionDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one CodeSection that matches the filter.
     * @param {CodeSectionFindUniqueArgs} args - Arguments to find a CodeSection
     * @example
     * // Get one CodeSection
     * const codeSection = await prisma.codeSection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CodeSectionFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CodeSectionFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'CodeSection'> extends True ? Prisma__CodeSectionClient<CodeSectionGetPayload<T>> : Prisma__CodeSectionClient<CodeSectionGetPayload<T> | null, null>

    /**
     * Find one CodeSection that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CodeSectionFindUniqueOrThrowArgs} args - Arguments to find a CodeSection
     * @example
     * // Get one CodeSection
     * const codeSection = await prisma.codeSection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CodeSectionFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, CodeSectionFindUniqueOrThrowArgs>
    ): Prisma__CodeSectionClient<CodeSectionGetPayload<T>>

    /**
     * Find the first CodeSection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodeSectionFindFirstArgs} args - Arguments to find a CodeSection
     * @example
     * // Get one CodeSection
     * const codeSection = await prisma.codeSection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CodeSectionFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CodeSectionFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'CodeSection'> extends True ? Prisma__CodeSectionClient<CodeSectionGetPayload<T>> : Prisma__CodeSectionClient<CodeSectionGetPayload<T> | null, null>

    /**
     * Find the first CodeSection that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodeSectionFindFirstOrThrowArgs} args - Arguments to find a CodeSection
     * @example
     * // Get one CodeSection
     * const codeSection = await prisma.codeSection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CodeSectionFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CodeSectionFindFirstOrThrowArgs>
    ): Prisma__CodeSectionClient<CodeSectionGetPayload<T>>

    /**
     * Find zero or more CodeSections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodeSectionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CodeSections
     * const codeSections = await prisma.codeSection.findMany()
     * 
     * // Get first 10 CodeSections
     * const codeSections = await prisma.codeSection.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const codeSectionWithIdOnly = await prisma.codeSection.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CodeSectionFindManyArgs>(
      args?: SelectSubset<T, CodeSectionFindManyArgs>
    ): Prisma.PrismaPromise<Array<CodeSectionGetPayload<T>>>

    /**
     * Create a CodeSection.
     * @param {CodeSectionCreateArgs} args - Arguments to create a CodeSection.
     * @example
     * // Create one CodeSection
     * const CodeSection = await prisma.codeSection.create({
     *   data: {
     *     // ... data to create a CodeSection
     *   }
     * })
     * 
    **/
    create<T extends CodeSectionCreateArgs>(
      args: SelectSubset<T, CodeSectionCreateArgs>
    ): Prisma__CodeSectionClient<CodeSectionGetPayload<T>>

    /**
     * Create many CodeSections.
     *     @param {CodeSectionCreateManyArgs} args - Arguments to create many CodeSections.
     *     @example
     *     // Create many CodeSections
     *     const codeSection = await prisma.codeSection.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CodeSectionCreateManyArgs>(
      args?: SelectSubset<T, CodeSectionCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CodeSection.
     * @param {CodeSectionDeleteArgs} args - Arguments to delete one CodeSection.
     * @example
     * // Delete one CodeSection
     * const CodeSection = await prisma.codeSection.delete({
     *   where: {
     *     // ... filter to delete one CodeSection
     *   }
     * })
     * 
    **/
    delete<T extends CodeSectionDeleteArgs>(
      args: SelectSubset<T, CodeSectionDeleteArgs>
    ): Prisma__CodeSectionClient<CodeSectionGetPayload<T>>

    /**
     * Update one CodeSection.
     * @param {CodeSectionUpdateArgs} args - Arguments to update one CodeSection.
     * @example
     * // Update one CodeSection
     * const codeSection = await prisma.codeSection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CodeSectionUpdateArgs>(
      args: SelectSubset<T, CodeSectionUpdateArgs>
    ): Prisma__CodeSectionClient<CodeSectionGetPayload<T>>

    /**
     * Delete zero or more CodeSections.
     * @param {CodeSectionDeleteManyArgs} args - Arguments to filter CodeSections to delete.
     * @example
     * // Delete a few CodeSections
     * const { count } = await prisma.codeSection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CodeSectionDeleteManyArgs>(
      args?: SelectSubset<T, CodeSectionDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CodeSections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodeSectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CodeSections
     * const codeSection = await prisma.codeSection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CodeSectionUpdateManyArgs>(
      args: SelectSubset<T, CodeSectionUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CodeSection.
     * @param {CodeSectionUpsertArgs} args - Arguments to update or create a CodeSection.
     * @example
     * // Update or create a CodeSection
     * const codeSection = await prisma.codeSection.upsert({
     *   create: {
     *     // ... data to create a CodeSection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CodeSection we want to update
     *   }
     * })
    **/
    upsert<T extends CodeSectionUpsertArgs>(
      args: SelectSubset<T, CodeSectionUpsertArgs>
    ): Prisma__CodeSectionClient<CodeSectionGetPayload<T>>

    /**
     * Count the number of CodeSections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodeSectionCountArgs} args - Arguments to filter CodeSections to count.
     * @example
     * // Count the number of CodeSections
     * const count = await prisma.codeSection.count({
     *   where: {
     *     // ... the filter for the CodeSections we want to count
     *   }
     * })
    **/
    count<T extends CodeSectionCountArgs>(
      args?: Subset<T, CodeSectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CodeSectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CodeSection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodeSectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CodeSectionAggregateArgs>(args: Subset<T, CodeSectionAggregateArgs>): Prisma.PrismaPromise<GetCodeSectionAggregateType<T>>

    /**
     * Group by CodeSection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodeSectionGroupByArgs} args - Group by arguments.
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
      T extends CodeSectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CodeSectionGroupByArgs['orderBy'] }
        : { orderBy?: CodeSectionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, CodeSectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCodeSectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for CodeSection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CodeSectionClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    section<T extends SectionArgs= {}>(args?: Subset<T, SectionArgs>): Prisma__SectionClient<SectionGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * CodeSection base type for findUnique actions
   */
  export type CodeSectionFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the CodeSection
     */
    select?: CodeSectionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CodeSectionInclude | null
    /**
     * Filter, which CodeSection to fetch.
     */
    where: CodeSectionWhereUniqueInput
  }

  /**
   * CodeSection findUnique
   */
  export interface CodeSectionFindUniqueArgs extends CodeSectionFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * CodeSection findUniqueOrThrow
   */
  export type CodeSectionFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the CodeSection
     */
    select?: CodeSectionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CodeSectionInclude | null
    /**
     * Filter, which CodeSection to fetch.
     */
    where: CodeSectionWhereUniqueInput
  }


  /**
   * CodeSection base type for findFirst actions
   */
  export type CodeSectionFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the CodeSection
     */
    select?: CodeSectionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CodeSectionInclude | null
    /**
     * Filter, which CodeSection to fetch.
     */
    where?: CodeSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CodeSections to fetch.
     */
    orderBy?: Enumerable<CodeSectionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CodeSections.
     */
    cursor?: CodeSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CodeSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CodeSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CodeSections.
     */
    distinct?: Enumerable<CodeSectionScalarFieldEnum>
  }

  /**
   * CodeSection findFirst
   */
  export interface CodeSectionFindFirstArgs extends CodeSectionFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * CodeSection findFirstOrThrow
   */
  export type CodeSectionFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the CodeSection
     */
    select?: CodeSectionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CodeSectionInclude | null
    /**
     * Filter, which CodeSection to fetch.
     */
    where?: CodeSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CodeSections to fetch.
     */
    orderBy?: Enumerable<CodeSectionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CodeSections.
     */
    cursor?: CodeSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CodeSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CodeSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CodeSections.
     */
    distinct?: Enumerable<CodeSectionScalarFieldEnum>
  }


  /**
   * CodeSection findMany
   */
  export type CodeSectionFindManyArgs = {
    /**
     * Select specific fields to fetch from the CodeSection
     */
    select?: CodeSectionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CodeSectionInclude | null
    /**
     * Filter, which CodeSections to fetch.
     */
    where?: CodeSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CodeSections to fetch.
     */
    orderBy?: Enumerable<CodeSectionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CodeSections.
     */
    cursor?: CodeSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CodeSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CodeSections.
     */
    skip?: number
    distinct?: Enumerable<CodeSectionScalarFieldEnum>
  }


  /**
   * CodeSection create
   */
  export type CodeSectionCreateArgs = {
    /**
     * Select specific fields to fetch from the CodeSection
     */
    select?: CodeSectionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CodeSectionInclude | null
    /**
     * The data needed to create a CodeSection.
     */
    data: XOR<CodeSectionCreateInput, CodeSectionUncheckedCreateInput>
  }


  /**
   * CodeSection createMany
   */
  export type CodeSectionCreateManyArgs = {
    /**
     * The data used to create many CodeSections.
     */
    data: Enumerable<CodeSectionCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * CodeSection update
   */
  export type CodeSectionUpdateArgs = {
    /**
     * Select specific fields to fetch from the CodeSection
     */
    select?: CodeSectionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CodeSectionInclude | null
    /**
     * The data needed to update a CodeSection.
     */
    data: XOR<CodeSectionUpdateInput, CodeSectionUncheckedUpdateInput>
    /**
     * Choose, which CodeSection to update.
     */
    where: CodeSectionWhereUniqueInput
  }


  /**
   * CodeSection updateMany
   */
  export type CodeSectionUpdateManyArgs = {
    /**
     * The data used to update CodeSections.
     */
    data: XOR<CodeSectionUpdateManyMutationInput, CodeSectionUncheckedUpdateManyInput>
    /**
     * Filter which CodeSections to update
     */
    where?: CodeSectionWhereInput
  }


  /**
   * CodeSection upsert
   */
  export type CodeSectionUpsertArgs = {
    /**
     * Select specific fields to fetch from the CodeSection
     */
    select?: CodeSectionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CodeSectionInclude | null
    /**
     * The filter to search for the CodeSection to update in case it exists.
     */
    where: CodeSectionWhereUniqueInput
    /**
     * In case the CodeSection found by the `where` argument doesn't exist, create a new CodeSection with this data.
     */
    create: XOR<CodeSectionCreateInput, CodeSectionUncheckedCreateInput>
    /**
     * In case the CodeSection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CodeSectionUpdateInput, CodeSectionUncheckedUpdateInput>
  }


  /**
   * CodeSection delete
   */
  export type CodeSectionDeleteArgs = {
    /**
     * Select specific fields to fetch from the CodeSection
     */
    select?: CodeSectionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CodeSectionInclude | null
    /**
     * Filter which CodeSection to delete.
     */
    where: CodeSectionWhereUniqueInput
  }


  /**
   * CodeSection deleteMany
   */
  export type CodeSectionDeleteManyArgs = {
    /**
     * Filter which CodeSections to delete
     */
    where?: CodeSectionWhereInput
  }


  /**
   * CodeSection without action
   */
  export type CodeSectionArgs = {
    /**
     * Select specific fields to fetch from the CodeSection
     */
    select?: CodeSectionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CodeSectionInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const CodeSectionScalarFieldEnum: {
    id: 'id',
    order_of_priority: 'order_of_priority',
    summary: 'summary',
    content: 'content',
    section_id: 'section_id'
  };

  export type CodeSectionScalarFieldEnum = (typeof CodeSectionScalarFieldEnum)[keyof typeof CodeSectionScalarFieldEnum]


  export const HeadingSectionScalarFieldEnum: {
    id: 'id',
    order_of_priority: 'order_of_priority',
    title: 'title',
    subtitle: 'subtitle',
    summary: 'summary',
    section_id: 'section_id'
  };

  export type HeadingSectionScalarFieldEnum = (typeof HeadingSectionScalarFieldEnum)[keyof typeof HeadingSectionScalarFieldEnum]


  export const MidiaSectionScalarFieldEnum: {
    id: 'id',
    order_of_priority: 'order_of_priority',
    link: 'link',
    height: 'height',
    width: 'width',
    section_id: 'section_id'
  };

  export type MidiaSectionScalarFieldEnum = (typeof MidiaSectionScalarFieldEnum)[keyof typeof MidiaSectionScalarFieldEnum]


  export const PostScalarFieldEnum: {
    id: 'id',
    title: 'title',
    slug: 'slug',
    summary: 'summary',
    tags: 'tags',
    author_id: 'author_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const SectionScalarFieldEnum: {
    id: 'id',
    heading: 'heading',
    sub_heading: 'sub_heading',
    sumary: 'sumary',
    post_id: 'post_id'
  };

  export type SectionScalarFieldEnum = (typeof SectionScalarFieldEnum)[keyof typeof SectionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TextSectionScalarFieldEnum: {
    id: 'id',
    order_of_priority: 'order_of_priority',
    content: 'content',
    section_id: 'section_id'
  };

  export type TextSectionScalarFieldEnum = (typeof TextSectionScalarFieldEnum)[keyof typeof TextSectionScalarFieldEnum]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    role: 'role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    role?: EnumRoleFilter | Role
    Post?: PostListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    role?: SortOrder
    Post?: PostOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = {
    id?: string
  }

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    role?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    role?: EnumRoleWithAggregatesFilter | Role
  }

  export type PostWhereInput = {
    AND?: Enumerable<PostWhereInput>
    OR?: Enumerable<PostWhereInput>
    NOT?: Enumerable<PostWhereInput>
    id?: StringFilter | string
    title?: StringFilter | string
    slug?: StringFilter | string
    summary?: StringFilter | string
    tags?: StringNullableListFilter
    author?: XOR<UserRelationFilter, UserWhereInput>
    author_id?: StringFilter | string
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
    Section?: SectionListRelationFilter
  }

  export type PostOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    summary?: SortOrder
    tags?: SortOrder
    author?: UserOrderByWithRelationInput
    author_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    Section?: SectionOrderByRelationAggregateInput
  }

  export type PostWhereUniqueInput = {
    id?: string
    slug?: string
  }

  export type PostOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    summary?: SortOrder
    tags?: SortOrder
    author_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: PostCountOrderByAggregateInput
    _max?: PostMaxOrderByAggregateInput
    _min?: PostMinOrderByAggregateInput
  }

  export type PostScalarWhereWithAggregatesInput = {
    AND?: Enumerable<PostScalarWhereWithAggregatesInput>
    OR?: Enumerable<PostScalarWhereWithAggregatesInput>
    NOT?: Enumerable<PostScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    title?: StringWithAggregatesFilter | string
    slug?: StringWithAggregatesFilter | string
    summary?: StringWithAggregatesFilter | string
    tags?: StringNullableListFilter
    author_id?: StringWithAggregatesFilter | string
    created_at?: DateTimeWithAggregatesFilter | Date | string
    updated_at?: DateTimeWithAggregatesFilter | Date | string
  }

  export type SectionWhereInput = {
    AND?: Enumerable<SectionWhereInput>
    OR?: Enumerable<SectionWhereInput>
    NOT?: Enumerable<SectionWhereInput>
    id?: StringFilter | string
    heading?: StringFilter | string
    sub_heading?: StringNullableFilter | string | null
    sumary?: StringNullableFilter | string | null
    post?: XOR<PostRelationFilter, PostWhereInput>
    post_id?: StringFilter | string
    text_sections?: TextSectionListRelationFilter
    midia_sections?: MidiaSectionListRelationFilter
    code_sections?: CodeSectionListRelationFilter
    heading_sections?: HeadingSectionListRelationFilter
  }

  export type SectionOrderByWithRelationInput = {
    id?: SortOrder
    heading?: SortOrder
    sub_heading?: SortOrder
    sumary?: SortOrder
    post?: PostOrderByWithRelationInput
    post_id?: SortOrder
    text_sections?: TextSectionOrderByRelationAggregateInput
    midia_sections?: MidiaSectionOrderByRelationAggregateInput
    code_sections?: CodeSectionOrderByRelationAggregateInput
    heading_sections?: HeadingSectionOrderByRelationAggregateInput
  }

  export type SectionWhereUniqueInput = {
    id?: string
  }

  export type SectionOrderByWithAggregationInput = {
    id?: SortOrder
    heading?: SortOrder
    sub_heading?: SortOrder
    sumary?: SortOrder
    post_id?: SortOrder
    _count?: SectionCountOrderByAggregateInput
    _max?: SectionMaxOrderByAggregateInput
    _min?: SectionMinOrderByAggregateInput
  }

  export type SectionScalarWhereWithAggregatesInput = {
    AND?: Enumerable<SectionScalarWhereWithAggregatesInput>
    OR?: Enumerable<SectionScalarWhereWithAggregatesInput>
    NOT?: Enumerable<SectionScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    heading?: StringWithAggregatesFilter | string
    sub_heading?: StringNullableWithAggregatesFilter | string | null
    sumary?: StringNullableWithAggregatesFilter | string | null
    post_id?: StringWithAggregatesFilter | string
  }

  export type TextSectionWhereInput = {
    AND?: Enumerable<TextSectionWhereInput>
    OR?: Enumerable<TextSectionWhereInput>
    NOT?: Enumerable<TextSectionWhereInput>
    id?: StringFilter | string
    order_of_priority?: IntFilter | number
    content?: StringFilter | string
    section?: XOR<SectionRelationFilter, SectionWhereInput>
    section_id?: StringFilter | string
  }

  export type TextSectionOrderByWithRelationInput = {
    id?: SortOrder
    order_of_priority?: SortOrder
    content?: SortOrder
    section?: SectionOrderByWithRelationInput
    section_id?: SortOrder
  }

  export type TextSectionWhereUniqueInput = {
    id?: string
  }

  export type TextSectionOrderByWithAggregationInput = {
    id?: SortOrder
    order_of_priority?: SortOrder
    content?: SortOrder
    section_id?: SortOrder
    _count?: TextSectionCountOrderByAggregateInput
    _avg?: TextSectionAvgOrderByAggregateInput
    _max?: TextSectionMaxOrderByAggregateInput
    _min?: TextSectionMinOrderByAggregateInput
    _sum?: TextSectionSumOrderByAggregateInput
  }

  export type TextSectionScalarWhereWithAggregatesInput = {
    AND?: Enumerable<TextSectionScalarWhereWithAggregatesInput>
    OR?: Enumerable<TextSectionScalarWhereWithAggregatesInput>
    NOT?: Enumerable<TextSectionScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    order_of_priority?: IntWithAggregatesFilter | number
    content?: StringWithAggregatesFilter | string
    section_id?: StringWithAggregatesFilter | string
  }

  export type HeadingSectionWhereInput = {
    AND?: Enumerable<HeadingSectionWhereInput>
    OR?: Enumerable<HeadingSectionWhereInput>
    NOT?: Enumerable<HeadingSectionWhereInput>
    id?: StringFilter | string
    order_of_priority?: IntFilter | number
    title?: StringFilter | string
    subtitle?: StringNullableFilter | string | null
    summary?: StringNullableFilter | string | null
    section?: XOR<SectionRelationFilter, SectionWhereInput>
    section_id?: StringFilter | string
  }

  export type HeadingSectionOrderByWithRelationInput = {
    id?: SortOrder
    order_of_priority?: SortOrder
    title?: SortOrder
    subtitle?: SortOrder
    summary?: SortOrder
    section?: SectionOrderByWithRelationInput
    section_id?: SortOrder
  }

  export type HeadingSectionWhereUniqueInput = {
    id?: string
  }

  export type HeadingSectionOrderByWithAggregationInput = {
    id?: SortOrder
    order_of_priority?: SortOrder
    title?: SortOrder
    subtitle?: SortOrder
    summary?: SortOrder
    section_id?: SortOrder
    _count?: HeadingSectionCountOrderByAggregateInput
    _avg?: HeadingSectionAvgOrderByAggregateInput
    _max?: HeadingSectionMaxOrderByAggregateInput
    _min?: HeadingSectionMinOrderByAggregateInput
    _sum?: HeadingSectionSumOrderByAggregateInput
  }

  export type HeadingSectionScalarWhereWithAggregatesInput = {
    AND?: Enumerable<HeadingSectionScalarWhereWithAggregatesInput>
    OR?: Enumerable<HeadingSectionScalarWhereWithAggregatesInput>
    NOT?: Enumerable<HeadingSectionScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    order_of_priority?: IntWithAggregatesFilter | number
    title?: StringWithAggregatesFilter | string
    subtitle?: StringNullableWithAggregatesFilter | string | null
    summary?: StringNullableWithAggregatesFilter | string | null
    section_id?: StringWithAggregatesFilter | string
  }

  export type MidiaSectionWhereInput = {
    AND?: Enumerable<MidiaSectionWhereInput>
    OR?: Enumerable<MidiaSectionWhereInput>
    NOT?: Enumerable<MidiaSectionWhereInput>
    id?: StringFilter | string
    order_of_priority?: IntFilter | number
    link?: StringFilter | string
    height?: IntFilter | number
    width?: IntFilter | number
    section?: XOR<SectionRelationFilter, SectionWhereInput>
    section_id?: StringFilter | string
  }

  export type MidiaSectionOrderByWithRelationInput = {
    id?: SortOrder
    order_of_priority?: SortOrder
    link?: SortOrder
    height?: SortOrder
    width?: SortOrder
    section?: SectionOrderByWithRelationInput
    section_id?: SortOrder
  }

  export type MidiaSectionWhereUniqueInput = {
    id?: string
  }

  export type MidiaSectionOrderByWithAggregationInput = {
    id?: SortOrder
    order_of_priority?: SortOrder
    link?: SortOrder
    height?: SortOrder
    width?: SortOrder
    section_id?: SortOrder
    _count?: MidiaSectionCountOrderByAggregateInput
    _avg?: MidiaSectionAvgOrderByAggregateInput
    _max?: MidiaSectionMaxOrderByAggregateInput
    _min?: MidiaSectionMinOrderByAggregateInput
    _sum?: MidiaSectionSumOrderByAggregateInput
  }

  export type MidiaSectionScalarWhereWithAggregatesInput = {
    AND?: Enumerable<MidiaSectionScalarWhereWithAggregatesInput>
    OR?: Enumerable<MidiaSectionScalarWhereWithAggregatesInput>
    NOT?: Enumerable<MidiaSectionScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    order_of_priority?: IntWithAggregatesFilter | number
    link?: StringWithAggregatesFilter | string
    height?: IntWithAggregatesFilter | number
    width?: IntWithAggregatesFilter | number
    section_id?: StringWithAggregatesFilter | string
  }

  export type CodeSectionWhereInput = {
    AND?: Enumerable<CodeSectionWhereInput>
    OR?: Enumerable<CodeSectionWhereInput>
    NOT?: Enumerable<CodeSectionWhereInput>
    id?: StringFilter | string
    order_of_priority?: IntFilter | number
    summary?: StringNullableFilter | string | null
    content?: StringFilter | string
    section?: XOR<SectionRelationFilter, SectionWhereInput>
    section_id?: StringFilter | string
  }

  export type CodeSectionOrderByWithRelationInput = {
    id?: SortOrder
    order_of_priority?: SortOrder
    summary?: SortOrder
    content?: SortOrder
    section?: SectionOrderByWithRelationInput
    section_id?: SortOrder
  }

  export type CodeSectionWhereUniqueInput = {
    id?: string
  }

  export type CodeSectionOrderByWithAggregationInput = {
    id?: SortOrder
    order_of_priority?: SortOrder
    summary?: SortOrder
    content?: SortOrder
    section_id?: SortOrder
    _count?: CodeSectionCountOrderByAggregateInput
    _avg?: CodeSectionAvgOrderByAggregateInput
    _max?: CodeSectionMaxOrderByAggregateInput
    _min?: CodeSectionMinOrderByAggregateInput
    _sum?: CodeSectionSumOrderByAggregateInput
  }

  export type CodeSectionScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CodeSectionScalarWhereWithAggregatesInput>
    OR?: Enumerable<CodeSectionScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CodeSectionScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    order_of_priority?: IntWithAggregatesFilter | number
    summary?: StringNullableWithAggregatesFilter | string | null
    content?: StringWithAggregatesFilter | string
    section_id?: StringWithAggregatesFilter | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    role: Role
    Post?: PostCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    role: Role
    Post?: PostUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    Post?: PostUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    Post?: PostUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    role: Role
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
  }

  export type PostCreateInput = {
    id?: string
    title: string
    slug: string
    summary: string
    tags?: PostCreatetagsInput | Enumerable<string>
    author: UserCreateNestedOneWithoutPostInput
    created_at?: Date | string
    updated_at?: Date | string
    Section?: SectionCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateInput = {
    id?: string
    title: string
    slug: string
    summary: string
    tags?: PostCreatetagsInput | Enumerable<string>
    author_id: string
    created_at?: Date | string
    updated_at?: Date | string
    Section?: SectionUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    tags?: PostUpdatetagsInput | Enumerable<string>
    author?: UserUpdateOneRequiredWithoutPostNestedInput
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Section?: SectionUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    tags?: PostUpdatetagsInput | Enumerable<string>
    author_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Section?: SectionUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostCreateManyInput = {
    id?: string
    title: string
    slug: string
    summary: string
    tags?: PostCreatetagsInput | Enumerable<string>
    author_id: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PostUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    tags?: PostUpdatetagsInput | Enumerable<string>
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    tags?: PostUpdatetagsInput | Enumerable<string>
    author_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SectionCreateInput = {
    id?: string
    heading: string
    sub_heading?: string | null
    sumary?: string | null
    post: PostCreateNestedOneWithoutSectionInput
    text_sections?: TextSectionCreateNestedManyWithoutSectionInput
    midia_sections?: MidiaSectionCreateNestedManyWithoutSectionInput
    code_sections?: CodeSectionCreateNestedManyWithoutSectionInput
    heading_sections?: HeadingSectionCreateNestedManyWithoutSectionInput
  }

  export type SectionUncheckedCreateInput = {
    id?: string
    heading: string
    sub_heading?: string | null
    sumary?: string | null
    post_id: string
    text_sections?: TextSectionUncheckedCreateNestedManyWithoutSectionInput
    midia_sections?: MidiaSectionUncheckedCreateNestedManyWithoutSectionInput
    code_sections?: CodeSectionUncheckedCreateNestedManyWithoutSectionInput
    heading_sections?: HeadingSectionUncheckedCreateNestedManyWithoutSectionInput
  }

  export type SectionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    heading?: StringFieldUpdateOperationsInput | string
    sub_heading?: NullableStringFieldUpdateOperationsInput | string | null
    sumary?: NullableStringFieldUpdateOperationsInput | string | null
    post?: PostUpdateOneRequiredWithoutSectionNestedInput
    text_sections?: TextSectionUpdateManyWithoutSectionNestedInput
    midia_sections?: MidiaSectionUpdateManyWithoutSectionNestedInput
    code_sections?: CodeSectionUpdateManyWithoutSectionNestedInput
    heading_sections?: HeadingSectionUpdateManyWithoutSectionNestedInput
  }

  export type SectionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    heading?: StringFieldUpdateOperationsInput | string
    sub_heading?: NullableStringFieldUpdateOperationsInput | string | null
    sumary?: NullableStringFieldUpdateOperationsInput | string | null
    post_id?: StringFieldUpdateOperationsInput | string
    text_sections?: TextSectionUncheckedUpdateManyWithoutSectionNestedInput
    midia_sections?: MidiaSectionUncheckedUpdateManyWithoutSectionNestedInput
    code_sections?: CodeSectionUncheckedUpdateManyWithoutSectionNestedInput
    heading_sections?: HeadingSectionUncheckedUpdateManyWithoutSectionNestedInput
  }

  export type SectionCreateManyInput = {
    id?: string
    heading: string
    sub_heading?: string | null
    sumary?: string | null
    post_id: string
  }

  export type SectionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    heading?: StringFieldUpdateOperationsInput | string
    sub_heading?: NullableStringFieldUpdateOperationsInput | string | null
    sumary?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SectionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    heading?: StringFieldUpdateOperationsInput | string
    sub_heading?: NullableStringFieldUpdateOperationsInput | string | null
    sumary?: NullableStringFieldUpdateOperationsInput | string | null
    post_id?: StringFieldUpdateOperationsInput | string
  }

  export type TextSectionCreateInput = {
    id?: string
    order_of_priority: number
    content: string
    section: SectionCreateNestedOneWithoutText_sectionsInput
  }

  export type TextSectionUncheckedCreateInput = {
    id?: string
    order_of_priority: number
    content: string
    section_id: string
  }

  export type TextSectionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_of_priority?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    section?: SectionUpdateOneRequiredWithoutText_sectionsNestedInput
  }

  export type TextSectionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_of_priority?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    section_id?: StringFieldUpdateOperationsInput | string
  }

  export type TextSectionCreateManyInput = {
    id?: string
    order_of_priority: number
    content: string
    section_id: string
  }

  export type TextSectionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_of_priority?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
  }

  export type TextSectionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_of_priority?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    section_id?: StringFieldUpdateOperationsInput | string
  }

  export type HeadingSectionCreateInput = {
    id?: string
    order_of_priority: number
    title: string
    subtitle?: string | null
    summary?: string | null
    section: SectionCreateNestedOneWithoutHeading_sectionsInput
  }

  export type HeadingSectionUncheckedCreateInput = {
    id?: string
    order_of_priority: number
    title: string
    subtitle?: string | null
    summary?: string | null
    section_id: string
  }

  export type HeadingSectionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_of_priority?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    section?: SectionUpdateOneRequiredWithoutHeading_sectionsNestedInput
  }

  export type HeadingSectionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_of_priority?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    section_id?: StringFieldUpdateOperationsInput | string
  }

  export type HeadingSectionCreateManyInput = {
    id?: string
    order_of_priority: number
    title: string
    subtitle?: string | null
    summary?: string | null
    section_id: string
  }

  export type HeadingSectionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_of_priority?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type HeadingSectionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_of_priority?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    section_id?: StringFieldUpdateOperationsInput | string
  }

  export type MidiaSectionCreateInput = {
    id?: string
    order_of_priority: number
    link: string
    height: number
    width: number
    section: SectionCreateNestedOneWithoutMidia_sectionsInput
  }

  export type MidiaSectionUncheckedCreateInput = {
    id?: string
    order_of_priority: number
    link: string
    height: number
    width: number
    section_id: string
  }

  export type MidiaSectionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_of_priority?: IntFieldUpdateOperationsInput | number
    link?: StringFieldUpdateOperationsInput | string
    height?: IntFieldUpdateOperationsInput | number
    width?: IntFieldUpdateOperationsInput | number
    section?: SectionUpdateOneRequiredWithoutMidia_sectionsNestedInput
  }

  export type MidiaSectionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_of_priority?: IntFieldUpdateOperationsInput | number
    link?: StringFieldUpdateOperationsInput | string
    height?: IntFieldUpdateOperationsInput | number
    width?: IntFieldUpdateOperationsInput | number
    section_id?: StringFieldUpdateOperationsInput | string
  }

  export type MidiaSectionCreateManyInput = {
    id?: string
    order_of_priority: number
    link: string
    height: number
    width: number
    section_id: string
  }

  export type MidiaSectionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_of_priority?: IntFieldUpdateOperationsInput | number
    link?: StringFieldUpdateOperationsInput | string
    height?: IntFieldUpdateOperationsInput | number
    width?: IntFieldUpdateOperationsInput | number
  }

  export type MidiaSectionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_of_priority?: IntFieldUpdateOperationsInput | number
    link?: StringFieldUpdateOperationsInput | string
    height?: IntFieldUpdateOperationsInput | number
    width?: IntFieldUpdateOperationsInput | number
    section_id?: StringFieldUpdateOperationsInput | string
  }

  export type CodeSectionCreateInput = {
    id?: string
    order_of_priority: number
    summary?: string | null
    content: string
    section: SectionCreateNestedOneWithoutCode_sectionsInput
  }

  export type CodeSectionUncheckedCreateInput = {
    id?: string
    order_of_priority: number
    summary?: string | null
    content: string
    section_id: string
  }

  export type CodeSectionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_of_priority?: IntFieldUpdateOperationsInput | number
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    section?: SectionUpdateOneRequiredWithoutCode_sectionsNestedInput
  }

  export type CodeSectionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_of_priority?: IntFieldUpdateOperationsInput | number
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    section_id?: StringFieldUpdateOperationsInput | string
  }

  export type CodeSectionCreateManyInput = {
    id?: string
    order_of_priority: number
    summary?: string | null
    content: string
    section_id: string
  }

  export type CodeSectionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_of_priority?: IntFieldUpdateOperationsInput | number
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
  }

  export type CodeSectionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_of_priority?: IntFieldUpdateOperationsInput | number
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    section_id?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type EnumRoleFilter = {
    equals?: Role
    in?: Enumerable<Role>
    notIn?: Enumerable<Role>
    not?: NestedEnumRoleFilter | Role
  }

  export type PostListRelationFilter = {
    every?: PostWhereInput
    some?: PostWhereInput
    none?: PostWhereInput
  }

  export type PostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    role?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    role?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    role?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type EnumRoleWithAggregatesFilter = {
    equals?: Role
    in?: Enumerable<Role>
    notIn?: Enumerable<Role>
    not?: NestedEnumRoleWithAggregatesFilter | Role
    _count?: NestedIntFilter
    _min?: NestedEnumRoleFilter
    _max?: NestedEnumRoleFilter
  }

  export type StringNullableListFilter = {
    equals?: Enumerable<string> | null
    has?: string | null
    hasEvery?: Enumerable<string>
    hasSome?: Enumerable<string>
    isEmpty?: boolean
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type SectionListRelationFilter = {
    every?: SectionWhereInput
    some?: SectionWhereInput
    none?: SectionWhereInput
  }

  export type SectionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    summary?: SortOrder
    tags?: SortOrder
    author_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type PostMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    summary?: SortOrder
    author_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type PostMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    summary?: SortOrder
    author_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
  }

  export type PostRelationFilter = {
    is?: PostWhereInput
    isNot?: PostWhereInput
  }

  export type TextSectionListRelationFilter = {
    every?: TextSectionWhereInput
    some?: TextSectionWhereInput
    none?: TextSectionWhereInput
  }

  export type MidiaSectionListRelationFilter = {
    every?: MidiaSectionWhereInput
    some?: MidiaSectionWhereInput
    none?: MidiaSectionWhereInput
  }

  export type CodeSectionListRelationFilter = {
    every?: CodeSectionWhereInput
    some?: CodeSectionWhereInput
    none?: CodeSectionWhereInput
  }

  export type HeadingSectionListRelationFilter = {
    every?: HeadingSectionWhereInput
    some?: HeadingSectionWhereInput
    none?: HeadingSectionWhereInput
  }

  export type TextSectionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MidiaSectionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CodeSectionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HeadingSectionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SectionCountOrderByAggregateInput = {
    id?: SortOrder
    heading?: SortOrder
    sub_heading?: SortOrder
    sumary?: SortOrder
    post_id?: SortOrder
  }

  export type SectionMaxOrderByAggregateInput = {
    id?: SortOrder
    heading?: SortOrder
    sub_heading?: SortOrder
    sumary?: SortOrder
    post_id?: SortOrder
  }

  export type SectionMinOrderByAggregateInput = {
    id?: SortOrder
    heading?: SortOrder
    sub_heading?: SortOrder
    sumary?: SortOrder
    post_id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type SectionRelationFilter = {
    is?: SectionWhereInput
    isNot?: SectionWhereInput
  }

  export type TextSectionCountOrderByAggregateInput = {
    id?: SortOrder
    order_of_priority?: SortOrder
    content?: SortOrder
    section_id?: SortOrder
  }

  export type TextSectionAvgOrderByAggregateInput = {
    order_of_priority?: SortOrder
  }

  export type TextSectionMaxOrderByAggregateInput = {
    id?: SortOrder
    order_of_priority?: SortOrder
    content?: SortOrder
    section_id?: SortOrder
  }

  export type TextSectionMinOrderByAggregateInput = {
    id?: SortOrder
    order_of_priority?: SortOrder
    content?: SortOrder
    section_id?: SortOrder
  }

  export type TextSectionSumOrderByAggregateInput = {
    order_of_priority?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type HeadingSectionCountOrderByAggregateInput = {
    id?: SortOrder
    order_of_priority?: SortOrder
    title?: SortOrder
    subtitle?: SortOrder
    summary?: SortOrder
    section_id?: SortOrder
  }

  export type HeadingSectionAvgOrderByAggregateInput = {
    order_of_priority?: SortOrder
  }

  export type HeadingSectionMaxOrderByAggregateInput = {
    id?: SortOrder
    order_of_priority?: SortOrder
    title?: SortOrder
    subtitle?: SortOrder
    summary?: SortOrder
    section_id?: SortOrder
  }

  export type HeadingSectionMinOrderByAggregateInput = {
    id?: SortOrder
    order_of_priority?: SortOrder
    title?: SortOrder
    subtitle?: SortOrder
    summary?: SortOrder
    section_id?: SortOrder
  }

  export type HeadingSectionSumOrderByAggregateInput = {
    order_of_priority?: SortOrder
  }

  export type MidiaSectionCountOrderByAggregateInput = {
    id?: SortOrder
    order_of_priority?: SortOrder
    link?: SortOrder
    height?: SortOrder
    width?: SortOrder
    section_id?: SortOrder
  }

  export type MidiaSectionAvgOrderByAggregateInput = {
    order_of_priority?: SortOrder
    height?: SortOrder
    width?: SortOrder
  }

  export type MidiaSectionMaxOrderByAggregateInput = {
    id?: SortOrder
    order_of_priority?: SortOrder
    link?: SortOrder
    height?: SortOrder
    width?: SortOrder
    section_id?: SortOrder
  }

  export type MidiaSectionMinOrderByAggregateInput = {
    id?: SortOrder
    order_of_priority?: SortOrder
    link?: SortOrder
    height?: SortOrder
    width?: SortOrder
    section_id?: SortOrder
  }

  export type MidiaSectionSumOrderByAggregateInput = {
    order_of_priority?: SortOrder
    height?: SortOrder
    width?: SortOrder
  }

  export type CodeSectionCountOrderByAggregateInput = {
    id?: SortOrder
    order_of_priority?: SortOrder
    summary?: SortOrder
    content?: SortOrder
    section_id?: SortOrder
  }

  export type CodeSectionAvgOrderByAggregateInput = {
    order_of_priority?: SortOrder
  }

  export type CodeSectionMaxOrderByAggregateInput = {
    id?: SortOrder
    order_of_priority?: SortOrder
    summary?: SortOrder
    content?: SortOrder
    section_id?: SortOrder
  }

  export type CodeSectionMinOrderByAggregateInput = {
    id?: SortOrder
    order_of_priority?: SortOrder
    summary?: SortOrder
    content?: SortOrder
    section_id?: SortOrder
  }

  export type CodeSectionSumOrderByAggregateInput = {
    order_of_priority?: SortOrder
  }

  export type PostCreateNestedManyWithoutAuthorInput = {
    create?: XOR<Enumerable<PostCreateWithoutAuthorInput>, Enumerable<PostUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<PostCreateOrConnectWithoutAuthorInput>
    createMany?: PostCreateManyAuthorInputEnvelope
    connect?: Enumerable<PostWhereUniqueInput>
  }

  export type PostUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<Enumerable<PostCreateWithoutAuthorInput>, Enumerable<PostUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<PostCreateOrConnectWithoutAuthorInput>
    createMany?: PostCreateManyAuthorInputEnvelope
    connect?: Enumerable<PostWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: Role
  }

  export type PostUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<Enumerable<PostCreateWithoutAuthorInput>, Enumerable<PostUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<PostCreateOrConnectWithoutAuthorInput>
    upsert?: Enumerable<PostUpsertWithWhereUniqueWithoutAuthorInput>
    createMany?: PostCreateManyAuthorInputEnvelope
    set?: Enumerable<PostWhereUniqueInput>
    disconnect?: Enumerable<PostWhereUniqueInput>
    delete?: Enumerable<PostWhereUniqueInput>
    connect?: Enumerable<PostWhereUniqueInput>
    update?: Enumerable<PostUpdateWithWhereUniqueWithoutAuthorInput>
    updateMany?: Enumerable<PostUpdateManyWithWhereWithoutAuthorInput>
    deleteMany?: Enumerable<PostScalarWhereInput>
  }

  export type PostUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<Enumerable<PostCreateWithoutAuthorInput>, Enumerable<PostUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<PostCreateOrConnectWithoutAuthorInput>
    upsert?: Enumerable<PostUpsertWithWhereUniqueWithoutAuthorInput>
    createMany?: PostCreateManyAuthorInputEnvelope
    set?: Enumerable<PostWhereUniqueInput>
    disconnect?: Enumerable<PostWhereUniqueInput>
    delete?: Enumerable<PostWhereUniqueInput>
    connect?: Enumerable<PostWhereUniqueInput>
    update?: Enumerable<PostUpdateWithWhereUniqueWithoutAuthorInput>
    updateMany?: Enumerable<PostUpdateManyWithWhereWithoutAuthorInput>
    deleteMany?: Enumerable<PostScalarWhereInput>
  }

  export type PostCreatetagsInput = {
    set: Enumerable<string>
  }

  export type UserCreateNestedOneWithoutPostInput = {
    create?: XOR<UserCreateWithoutPostInput, UserUncheckedCreateWithoutPostInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostInput
    connect?: UserWhereUniqueInput
  }

  export type SectionCreateNestedManyWithoutPostInput = {
    create?: XOR<Enumerable<SectionCreateWithoutPostInput>, Enumerable<SectionUncheckedCreateWithoutPostInput>>
    connectOrCreate?: Enumerable<SectionCreateOrConnectWithoutPostInput>
    createMany?: SectionCreateManyPostInputEnvelope
    connect?: Enumerable<SectionWhereUniqueInput>
  }

  export type SectionUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<Enumerable<SectionCreateWithoutPostInput>, Enumerable<SectionUncheckedCreateWithoutPostInput>>
    connectOrCreate?: Enumerable<SectionCreateOrConnectWithoutPostInput>
    createMany?: SectionCreateManyPostInputEnvelope
    connect?: Enumerable<SectionWhereUniqueInput>
  }

  export type PostUpdatetagsInput = {
    set?: Enumerable<string>
    push?: string | Enumerable<string>
  }

  export type UserUpdateOneRequiredWithoutPostNestedInput = {
    create?: XOR<UserCreateWithoutPostInput, UserUncheckedCreateWithoutPostInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostInput
    upsert?: UserUpsertWithoutPostInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutPostInput, UserUncheckedUpdateWithoutPostInput>
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SectionUpdateManyWithoutPostNestedInput = {
    create?: XOR<Enumerable<SectionCreateWithoutPostInput>, Enumerable<SectionUncheckedCreateWithoutPostInput>>
    connectOrCreate?: Enumerable<SectionCreateOrConnectWithoutPostInput>
    upsert?: Enumerable<SectionUpsertWithWhereUniqueWithoutPostInput>
    createMany?: SectionCreateManyPostInputEnvelope
    set?: Enumerable<SectionWhereUniqueInput>
    disconnect?: Enumerable<SectionWhereUniqueInput>
    delete?: Enumerable<SectionWhereUniqueInput>
    connect?: Enumerable<SectionWhereUniqueInput>
    update?: Enumerable<SectionUpdateWithWhereUniqueWithoutPostInput>
    updateMany?: Enumerable<SectionUpdateManyWithWhereWithoutPostInput>
    deleteMany?: Enumerable<SectionScalarWhereInput>
  }

  export type SectionUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<Enumerable<SectionCreateWithoutPostInput>, Enumerable<SectionUncheckedCreateWithoutPostInput>>
    connectOrCreate?: Enumerable<SectionCreateOrConnectWithoutPostInput>
    upsert?: Enumerable<SectionUpsertWithWhereUniqueWithoutPostInput>
    createMany?: SectionCreateManyPostInputEnvelope
    set?: Enumerable<SectionWhereUniqueInput>
    disconnect?: Enumerable<SectionWhereUniqueInput>
    delete?: Enumerable<SectionWhereUniqueInput>
    connect?: Enumerable<SectionWhereUniqueInput>
    update?: Enumerable<SectionUpdateWithWhereUniqueWithoutPostInput>
    updateMany?: Enumerable<SectionUpdateManyWithWhereWithoutPostInput>
    deleteMany?: Enumerable<SectionScalarWhereInput>
  }

  export type PostCreateNestedOneWithoutSectionInput = {
    create?: XOR<PostCreateWithoutSectionInput, PostUncheckedCreateWithoutSectionInput>
    connectOrCreate?: PostCreateOrConnectWithoutSectionInput
    connect?: PostWhereUniqueInput
  }

  export type TextSectionCreateNestedManyWithoutSectionInput = {
    create?: XOR<Enumerable<TextSectionCreateWithoutSectionInput>, Enumerable<TextSectionUncheckedCreateWithoutSectionInput>>
    connectOrCreate?: Enumerable<TextSectionCreateOrConnectWithoutSectionInput>
    createMany?: TextSectionCreateManySectionInputEnvelope
    connect?: Enumerable<TextSectionWhereUniqueInput>
  }

  export type MidiaSectionCreateNestedManyWithoutSectionInput = {
    create?: XOR<Enumerable<MidiaSectionCreateWithoutSectionInput>, Enumerable<MidiaSectionUncheckedCreateWithoutSectionInput>>
    connectOrCreate?: Enumerable<MidiaSectionCreateOrConnectWithoutSectionInput>
    createMany?: MidiaSectionCreateManySectionInputEnvelope
    connect?: Enumerable<MidiaSectionWhereUniqueInput>
  }

  export type CodeSectionCreateNestedManyWithoutSectionInput = {
    create?: XOR<Enumerable<CodeSectionCreateWithoutSectionInput>, Enumerable<CodeSectionUncheckedCreateWithoutSectionInput>>
    connectOrCreate?: Enumerable<CodeSectionCreateOrConnectWithoutSectionInput>
    createMany?: CodeSectionCreateManySectionInputEnvelope
    connect?: Enumerable<CodeSectionWhereUniqueInput>
  }

  export type HeadingSectionCreateNestedManyWithoutSectionInput = {
    create?: XOR<Enumerable<HeadingSectionCreateWithoutSectionInput>, Enumerable<HeadingSectionUncheckedCreateWithoutSectionInput>>
    connectOrCreate?: Enumerable<HeadingSectionCreateOrConnectWithoutSectionInput>
    createMany?: HeadingSectionCreateManySectionInputEnvelope
    connect?: Enumerable<HeadingSectionWhereUniqueInput>
  }

  export type TextSectionUncheckedCreateNestedManyWithoutSectionInput = {
    create?: XOR<Enumerable<TextSectionCreateWithoutSectionInput>, Enumerable<TextSectionUncheckedCreateWithoutSectionInput>>
    connectOrCreate?: Enumerable<TextSectionCreateOrConnectWithoutSectionInput>
    createMany?: TextSectionCreateManySectionInputEnvelope
    connect?: Enumerable<TextSectionWhereUniqueInput>
  }

  export type MidiaSectionUncheckedCreateNestedManyWithoutSectionInput = {
    create?: XOR<Enumerable<MidiaSectionCreateWithoutSectionInput>, Enumerable<MidiaSectionUncheckedCreateWithoutSectionInput>>
    connectOrCreate?: Enumerable<MidiaSectionCreateOrConnectWithoutSectionInput>
    createMany?: MidiaSectionCreateManySectionInputEnvelope
    connect?: Enumerable<MidiaSectionWhereUniqueInput>
  }

  export type CodeSectionUncheckedCreateNestedManyWithoutSectionInput = {
    create?: XOR<Enumerable<CodeSectionCreateWithoutSectionInput>, Enumerable<CodeSectionUncheckedCreateWithoutSectionInput>>
    connectOrCreate?: Enumerable<CodeSectionCreateOrConnectWithoutSectionInput>
    createMany?: CodeSectionCreateManySectionInputEnvelope
    connect?: Enumerable<CodeSectionWhereUniqueInput>
  }

  export type HeadingSectionUncheckedCreateNestedManyWithoutSectionInput = {
    create?: XOR<Enumerable<HeadingSectionCreateWithoutSectionInput>, Enumerable<HeadingSectionUncheckedCreateWithoutSectionInput>>
    connectOrCreate?: Enumerable<HeadingSectionCreateOrConnectWithoutSectionInput>
    createMany?: HeadingSectionCreateManySectionInputEnvelope
    connect?: Enumerable<HeadingSectionWhereUniqueInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type PostUpdateOneRequiredWithoutSectionNestedInput = {
    create?: XOR<PostCreateWithoutSectionInput, PostUncheckedCreateWithoutSectionInput>
    connectOrCreate?: PostCreateOrConnectWithoutSectionInput
    upsert?: PostUpsertWithoutSectionInput
    connect?: PostWhereUniqueInput
    update?: XOR<PostUpdateWithoutSectionInput, PostUncheckedUpdateWithoutSectionInput>
  }

  export type TextSectionUpdateManyWithoutSectionNestedInput = {
    create?: XOR<Enumerable<TextSectionCreateWithoutSectionInput>, Enumerable<TextSectionUncheckedCreateWithoutSectionInput>>
    connectOrCreate?: Enumerable<TextSectionCreateOrConnectWithoutSectionInput>
    upsert?: Enumerable<TextSectionUpsertWithWhereUniqueWithoutSectionInput>
    createMany?: TextSectionCreateManySectionInputEnvelope
    set?: Enumerable<TextSectionWhereUniqueInput>
    disconnect?: Enumerable<TextSectionWhereUniqueInput>
    delete?: Enumerable<TextSectionWhereUniqueInput>
    connect?: Enumerable<TextSectionWhereUniqueInput>
    update?: Enumerable<TextSectionUpdateWithWhereUniqueWithoutSectionInput>
    updateMany?: Enumerable<TextSectionUpdateManyWithWhereWithoutSectionInput>
    deleteMany?: Enumerable<TextSectionScalarWhereInput>
  }

  export type MidiaSectionUpdateManyWithoutSectionNestedInput = {
    create?: XOR<Enumerable<MidiaSectionCreateWithoutSectionInput>, Enumerable<MidiaSectionUncheckedCreateWithoutSectionInput>>
    connectOrCreate?: Enumerable<MidiaSectionCreateOrConnectWithoutSectionInput>
    upsert?: Enumerable<MidiaSectionUpsertWithWhereUniqueWithoutSectionInput>
    createMany?: MidiaSectionCreateManySectionInputEnvelope
    set?: Enumerable<MidiaSectionWhereUniqueInput>
    disconnect?: Enumerable<MidiaSectionWhereUniqueInput>
    delete?: Enumerable<MidiaSectionWhereUniqueInput>
    connect?: Enumerable<MidiaSectionWhereUniqueInput>
    update?: Enumerable<MidiaSectionUpdateWithWhereUniqueWithoutSectionInput>
    updateMany?: Enumerable<MidiaSectionUpdateManyWithWhereWithoutSectionInput>
    deleteMany?: Enumerable<MidiaSectionScalarWhereInput>
  }

  export type CodeSectionUpdateManyWithoutSectionNestedInput = {
    create?: XOR<Enumerable<CodeSectionCreateWithoutSectionInput>, Enumerable<CodeSectionUncheckedCreateWithoutSectionInput>>
    connectOrCreate?: Enumerable<CodeSectionCreateOrConnectWithoutSectionInput>
    upsert?: Enumerable<CodeSectionUpsertWithWhereUniqueWithoutSectionInput>
    createMany?: CodeSectionCreateManySectionInputEnvelope
    set?: Enumerable<CodeSectionWhereUniqueInput>
    disconnect?: Enumerable<CodeSectionWhereUniqueInput>
    delete?: Enumerable<CodeSectionWhereUniqueInput>
    connect?: Enumerable<CodeSectionWhereUniqueInput>
    update?: Enumerable<CodeSectionUpdateWithWhereUniqueWithoutSectionInput>
    updateMany?: Enumerable<CodeSectionUpdateManyWithWhereWithoutSectionInput>
    deleteMany?: Enumerable<CodeSectionScalarWhereInput>
  }

  export type HeadingSectionUpdateManyWithoutSectionNestedInput = {
    create?: XOR<Enumerable<HeadingSectionCreateWithoutSectionInput>, Enumerable<HeadingSectionUncheckedCreateWithoutSectionInput>>
    connectOrCreate?: Enumerable<HeadingSectionCreateOrConnectWithoutSectionInput>
    upsert?: Enumerable<HeadingSectionUpsertWithWhereUniqueWithoutSectionInput>
    createMany?: HeadingSectionCreateManySectionInputEnvelope
    set?: Enumerable<HeadingSectionWhereUniqueInput>
    disconnect?: Enumerable<HeadingSectionWhereUniqueInput>
    delete?: Enumerable<HeadingSectionWhereUniqueInput>
    connect?: Enumerable<HeadingSectionWhereUniqueInput>
    update?: Enumerable<HeadingSectionUpdateWithWhereUniqueWithoutSectionInput>
    updateMany?: Enumerable<HeadingSectionUpdateManyWithWhereWithoutSectionInput>
    deleteMany?: Enumerable<HeadingSectionScalarWhereInput>
  }

  export type TextSectionUncheckedUpdateManyWithoutSectionNestedInput = {
    create?: XOR<Enumerable<TextSectionCreateWithoutSectionInput>, Enumerable<TextSectionUncheckedCreateWithoutSectionInput>>
    connectOrCreate?: Enumerable<TextSectionCreateOrConnectWithoutSectionInput>
    upsert?: Enumerable<TextSectionUpsertWithWhereUniqueWithoutSectionInput>
    createMany?: TextSectionCreateManySectionInputEnvelope
    set?: Enumerable<TextSectionWhereUniqueInput>
    disconnect?: Enumerable<TextSectionWhereUniqueInput>
    delete?: Enumerable<TextSectionWhereUniqueInput>
    connect?: Enumerable<TextSectionWhereUniqueInput>
    update?: Enumerable<TextSectionUpdateWithWhereUniqueWithoutSectionInput>
    updateMany?: Enumerable<TextSectionUpdateManyWithWhereWithoutSectionInput>
    deleteMany?: Enumerable<TextSectionScalarWhereInput>
  }

  export type MidiaSectionUncheckedUpdateManyWithoutSectionNestedInput = {
    create?: XOR<Enumerable<MidiaSectionCreateWithoutSectionInput>, Enumerable<MidiaSectionUncheckedCreateWithoutSectionInput>>
    connectOrCreate?: Enumerable<MidiaSectionCreateOrConnectWithoutSectionInput>
    upsert?: Enumerable<MidiaSectionUpsertWithWhereUniqueWithoutSectionInput>
    createMany?: MidiaSectionCreateManySectionInputEnvelope
    set?: Enumerable<MidiaSectionWhereUniqueInput>
    disconnect?: Enumerable<MidiaSectionWhereUniqueInput>
    delete?: Enumerable<MidiaSectionWhereUniqueInput>
    connect?: Enumerable<MidiaSectionWhereUniqueInput>
    update?: Enumerable<MidiaSectionUpdateWithWhereUniqueWithoutSectionInput>
    updateMany?: Enumerable<MidiaSectionUpdateManyWithWhereWithoutSectionInput>
    deleteMany?: Enumerable<MidiaSectionScalarWhereInput>
  }

  export type CodeSectionUncheckedUpdateManyWithoutSectionNestedInput = {
    create?: XOR<Enumerable<CodeSectionCreateWithoutSectionInput>, Enumerable<CodeSectionUncheckedCreateWithoutSectionInput>>
    connectOrCreate?: Enumerable<CodeSectionCreateOrConnectWithoutSectionInput>
    upsert?: Enumerable<CodeSectionUpsertWithWhereUniqueWithoutSectionInput>
    createMany?: CodeSectionCreateManySectionInputEnvelope
    set?: Enumerable<CodeSectionWhereUniqueInput>
    disconnect?: Enumerable<CodeSectionWhereUniqueInput>
    delete?: Enumerable<CodeSectionWhereUniqueInput>
    connect?: Enumerable<CodeSectionWhereUniqueInput>
    update?: Enumerable<CodeSectionUpdateWithWhereUniqueWithoutSectionInput>
    updateMany?: Enumerable<CodeSectionUpdateManyWithWhereWithoutSectionInput>
    deleteMany?: Enumerable<CodeSectionScalarWhereInput>
  }

  export type HeadingSectionUncheckedUpdateManyWithoutSectionNestedInput = {
    create?: XOR<Enumerable<HeadingSectionCreateWithoutSectionInput>, Enumerable<HeadingSectionUncheckedCreateWithoutSectionInput>>
    connectOrCreate?: Enumerable<HeadingSectionCreateOrConnectWithoutSectionInput>
    upsert?: Enumerable<HeadingSectionUpsertWithWhereUniqueWithoutSectionInput>
    createMany?: HeadingSectionCreateManySectionInputEnvelope
    set?: Enumerable<HeadingSectionWhereUniqueInput>
    disconnect?: Enumerable<HeadingSectionWhereUniqueInput>
    delete?: Enumerable<HeadingSectionWhereUniqueInput>
    connect?: Enumerable<HeadingSectionWhereUniqueInput>
    update?: Enumerable<HeadingSectionUpdateWithWhereUniqueWithoutSectionInput>
    updateMany?: Enumerable<HeadingSectionUpdateManyWithWhereWithoutSectionInput>
    deleteMany?: Enumerable<HeadingSectionScalarWhereInput>
  }

  export type SectionCreateNestedOneWithoutText_sectionsInput = {
    create?: XOR<SectionCreateWithoutText_sectionsInput, SectionUncheckedCreateWithoutText_sectionsInput>
    connectOrCreate?: SectionCreateOrConnectWithoutText_sectionsInput
    connect?: SectionWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SectionUpdateOneRequiredWithoutText_sectionsNestedInput = {
    create?: XOR<SectionCreateWithoutText_sectionsInput, SectionUncheckedCreateWithoutText_sectionsInput>
    connectOrCreate?: SectionCreateOrConnectWithoutText_sectionsInput
    upsert?: SectionUpsertWithoutText_sectionsInput
    connect?: SectionWhereUniqueInput
    update?: XOR<SectionUpdateWithoutText_sectionsInput, SectionUncheckedUpdateWithoutText_sectionsInput>
  }

  export type SectionCreateNestedOneWithoutHeading_sectionsInput = {
    create?: XOR<SectionCreateWithoutHeading_sectionsInput, SectionUncheckedCreateWithoutHeading_sectionsInput>
    connectOrCreate?: SectionCreateOrConnectWithoutHeading_sectionsInput
    connect?: SectionWhereUniqueInput
  }

  export type SectionUpdateOneRequiredWithoutHeading_sectionsNestedInput = {
    create?: XOR<SectionCreateWithoutHeading_sectionsInput, SectionUncheckedCreateWithoutHeading_sectionsInput>
    connectOrCreate?: SectionCreateOrConnectWithoutHeading_sectionsInput
    upsert?: SectionUpsertWithoutHeading_sectionsInput
    connect?: SectionWhereUniqueInput
    update?: XOR<SectionUpdateWithoutHeading_sectionsInput, SectionUncheckedUpdateWithoutHeading_sectionsInput>
  }

  export type SectionCreateNestedOneWithoutMidia_sectionsInput = {
    create?: XOR<SectionCreateWithoutMidia_sectionsInput, SectionUncheckedCreateWithoutMidia_sectionsInput>
    connectOrCreate?: SectionCreateOrConnectWithoutMidia_sectionsInput
    connect?: SectionWhereUniqueInput
  }

  export type SectionUpdateOneRequiredWithoutMidia_sectionsNestedInput = {
    create?: XOR<SectionCreateWithoutMidia_sectionsInput, SectionUncheckedCreateWithoutMidia_sectionsInput>
    connectOrCreate?: SectionCreateOrConnectWithoutMidia_sectionsInput
    upsert?: SectionUpsertWithoutMidia_sectionsInput
    connect?: SectionWhereUniqueInput
    update?: XOR<SectionUpdateWithoutMidia_sectionsInput, SectionUncheckedUpdateWithoutMidia_sectionsInput>
  }

  export type SectionCreateNestedOneWithoutCode_sectionsInput = {
    create?: XOR<SectionCreateWithoutCode_sectionsInput, SectionUncheckedCreateWithoutCode_sectionsInput>
    connectOrCreate?: SectionCreateOrConnectWithoutCode_sectionsInput
    connect?: SectionWhereUniqueInput
  }

  export type SectionUpdateOneRequiredWithoutCode_sectionsNestedInput = {
    create?: XOR<SectionCreateWithoutCode_sectionsInput, SectionUncheckedCreateWithoutCode_sectionsInput>
    connectOrCreate?: SectionCreateOrConnectWithoutCode_sectionsInput
    upsert?: SectionUpsertWithoutCode_sectionsInput
    connect?: SectionWhereUniqueInput
    update?: XOR<SectionUpdateWithoutCode_sectionsInput, SectionUncheckedUpdateWithoutCode_sectionsInput>
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedEnumRoleFilter = {
    equals?: Role
    in?: Enumerable<Role>
    notIn?: Enumerable<Role>
    not?: NestedEnumRoleFilter | Role
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedEnumRoleWithAggregatesFilter = {
    equals?: Role
    in?: Enumerable<Role>
    notIn?: Enumerable<Role>
    not?: NestedEnumRoleWithAggregatesFilter | Role
    _count?: NestedIntFilter
    _min?: NestedEnumRoleFilter
    _max?: NestedEnumRoleFilter
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type PostCreateWithoutAuthorInput = {
    id?: string
    title: string
    slug: string
    summary: string
    tags?: PostCreatetagsInput | Enumerable<string>
    created_at?: Date | string
    updated_at?: Date | string
    Section?: SectionCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutAuthorInput = {
    id?: string
    title: string
    slug: string
    summary: string
    tags?: PostCreatetagsInput | Enumerable<string>
    created_at?: Date | string
    updated_at?: Date | string
    Section?: SectionUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutAuthorInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput>
  }

  export type PostCreateManyAuthorInputEnvelope = {
    data: Enumerable<PostCreateManyAuthorInput>
    skipDuplicates?: boolean
  }

  export type PostUpsertWithWhereUniqueWithoutAuthorInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutAuthorInput, PostUncheckedUpdateWithoutAuthorInput>
    create: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput>
  }

  export type PostUpdateWithWhereUniqueWithoutAuthorInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutAuthorInput, PostUncheckedUpdateWithoutAuthorInput>
  }

  export type PostUpdateManyWithWhereWithoutAuthorInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutPostInput>
  }

  export type PostScalarWhereInput = {
    AND?: Enumerable<PostScalarWhereInput>
    OR?: Enumerable<PostScalarWhereInput>
    NOT?: Enumerable<PostScalarWhereInput>
    id?: StringFilter | string
    title?: StringFilter | string
    slug?: StringFilter | string
    summary?: StringFilter | string
    tags?: StringNullableListFilter
    author_id?: StringFilter | string
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
  }

  export type UserCreateWithoutPostInput = {
    id?: string
    name: string
    role: Role
  }

  export type UserUncheckedCreateWithoutPostInput = {
    id?: string
    name: string
    role: Role
  }

  export type UserCreateOrConnectWithoutPostInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPostInput, UserUncheckedCreateWithoutPostInput>
  }

  export type SectionCreateWithoutPostInput = {
    id?: string
    heading: string
    sub_heading?: string | null
    sumary?: string | null
    text_sections?: TextSectionCreateNestedManyWithoutSectionInput
    midia_sections?: MidiaSectionCreateNestedManyWithoutSectionInput
    code_sections?: CodeSectionCreateNestedManyWithoutSectionInput
    heading_sections?: HeadingSectionCreateNestedManyWithoutSectionInput
  }

  export type SectionUncheckedCreateWithoutPostInput = {
    id?: string
    heading: string
    sub_heading?: string | null
    sumary?: string | null
    text_sections?: TextSectionUncheckedCreateNestedManyWithoutSectionInput
    midia_sections?: MidiaSectionUncheckedCreateNestedManyWithoutSectionInput
    code_sections?: CodeSectionUncheckedCreateNestedManyWithoutSectionInput
    heading_sections?: HeadingSectionUncheckedCreateNestedManyWithoutSectionInput
  }

  export type SectionCreateOrConnectWithoutPostInput = {
    where: SectionWhereUniqueInput
    create: XOR<SectionCreateWithoutPostInput, SectionUncheckedCreateWithoutPostInput>
  }

  export type SectionCreateManyPostInputEnvelope = {
    data: Enumerable<SectionCreateManyPostInput>
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutPostInput = {
    update: XOR<UserUpdateWithoutPostInput, UserUncheckedUpdateWithoutPostInput>
    create: XOR<UserCreateWithoutPostInput, UserUncheckedCreateWithoutPostInput>
  }

  export type UserUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
  }

  export type UserUncheckedUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
  }

  export type SectionUpsertWithWhereUniqueWithoutPostInput = {
    where: SectionWhereUniqueInput
    update: XOR<SectionUpdateWithoutPostInput, SectionUncheckedUpdateWithoutPostInput>
    create: XOR<SectionCreateWithoutPostInput, SectionUncheckedCreateWithoutPostInput>
  }

  export type SectionUpdateWithWhereUniqueWithoutPostInput = {
    where: SectionWhereUniqueInput
    data: XOR<SectionUpdateWithoutPostInput, SectionUncheckedUpdateWithoutPostInput>
  }

  export type SectionUpdateManyWithWhereWithoutPostInput = {
    where: SectionScalarWhereInput
    data: XOR<SectionUpdateManyMutationInput, SectionUncheckedUpdateManyWithoutSectionInput>
  }

  export type SectionScalarWhereInput = {
    AND?: Enumerable<SectionScalarWhereInput>
    OR?: Enumerable<SectionScalarWhereInput>
    NOT?: Enumerable<SectionScalarWhereInput>
    id?: StringFilter | string
    heading?: StringFilter | string
    sub_heading?: StringNullableFilter | string | null
    sumary?: StringNullableFilter | string | null
    post_id?: StringFilter | string
  }

  export type PostCreateWithoutSectionInput = {
    id?: string
    title: string
    slug: string
    summary: string
    tags?: PostCreatetagsInput | Enumerable<string>
    author: UserCreateNestedOneWithoutPostInput
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PostUncheckedCreateWithoutSectionInput = {
    id?: string
    title: string
    slug: string
    summary: string
    tags?: PostCreatetagsInput | Enumerable<string>
    author_id: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PostCreateOrConnectWithoutSectionInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutSectionInput, PostUncheckedCreateWithoutSectionInput>
  }

  export type TextSectionCreateWithoutSectionInput = {
    id?: string
    order_of_priority: number
    content: string
  }

  export type TextSectionUncheckedCreateWithoutSectionInput = {
    id?: string
    order_of_priority: number
    content: string
  }

  export type TextSectionCreateOrConnectWithoutSectionInput = {
    where: TextSectionWhereUniqueInput
    create: XOR<TextSectionCreateWithoutSectionInput, TextSectionUncheckedCreateWithoutSectionInput>
  }

  export type TextSectionCreateManySectionInputEnvelope = {
    data: Enumerable<TextSectionCreateManySectionInput>
    skipDuplicates?: boolean
  }

  export type MidiaSectionCreateWithoutSectionInput = {
    id?: string
    order_of_priority: number
    link: string
    height: number
    width: number
  }

  export type MidiaSectionUncheckedCreateWithoutSectionInput = {
    id?: string
    order_of_priority: number
    link: string
    height: number
    width: number
  }

  export type MidiaSectionCreateOrConnectWithoutSectionInput = {
    where: MidiaSectionWhereUniqueInput
    create: XOR<MidiaSectionCreateWithoutSectionInput, MidiaSectionUncheckedCreateWithoutSectionInput>
  }

  export type MidiaSectionCreateManySectionInputEnvelope = {
    data: Enumerable<MidiaSectionCreateManySectionInput>
    skipDuplicates?: boolean
  }

  export type CodeSectionCreateWithoutSectionInput = {
    id?: string
    order_of_priority: number
    summary?: string | null
    content: string
  }

  export type CodeSectionUncheckedCreateWithoutSectionInput = {
    id?: string
    order_of_priority: number
    summary?: string | null
    content: string
  }

  export type CodeSectionCreateOrConnectWithoutSectionInput = {
    where: CodeSectionWhereUniqueInput
    create: XOR<CodeSectionCreateWithoutSectionInput, CodeSectionUncheckedCreateWithoutSectionInput>
  }

  export type CodeSectionCreateManySectionInputEnvelope = {
    data: Enumerable<CodeSectionCreateManySectionInput>
    skipDuplicates?: boolean
  }

  export type HeadingSectionCreateWithoutSectionInput = {
    id?: string
    order_of_priority: number
    title: string
    subtitle?: string | null
    summary?: string | null
  }

  export type HeadingSectionUncheckedCreateWithoutSectionInput = {
    id?: string
    order_of_priority: number
    title: string
    subtitle?: string | null
    summary?: string | null
  }

  export type HeadingSectionCreateOrConnectWithoutSectionInput = {
    where: HeadingSectionWhereUniqueInput
    create: XOR<HeadingSectionCreateWithoutSectionInput, HeadingSectionUncheckedCreateWithoutSectionInput>
  }

  export type HeadingSectionCreateManySectionInputEnvelope = {
    data: Enumerable<HeadingSectionCreateManySectionInput>
    skipDuplicates?: boolean
  }

  export type PostUpsertWithoutSectionInput = {
    update: XOR<PostUpdateWithoutSectionInput, PostUncheckedUpdateWithoutSectionInput>
    create: XOR<PostCreateWithoutSectionInput, PostUncheckedCreateWithoutSectionInput>
  }

  export type PostUpdateWithoutSectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    tags?: PostUpdatetagsInput | Enumerable<string>
    author?: UserUpdateOneRequiredWithoutPostNestedInput
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateWithoutSectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    tags?: PostUpdatetagsInput | Enumerable<string>
    author_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TextSectionUpsertWithWhereUniqueWithoutSectionInput = {
    where: TextSectionWhereUniqueInput
    update: XOR<TextSectionUpdateWithoutSectionInput, TextSectionUncheckedUpdateWithoutSectionInput>
    create: XOR<TextSectionCreateWithoutSectionInput, TextSectionUncheckedCreateWithoutSectionInput>
  }

  export type TextSectionUpdateWithWhereUniqueWithoutSectionInput = {
    where: TextSectionWhereUniqueInput
    data: XOR<TextSectionUpdateWithoutSectionInput, TextSectionUncheckedUpdateWithoutSectionInput>
  }

  export type TextSectionUpdateManyWithWhereWithoutSectionInput = {
    where: TextSectionScalarWhereInput
    data: XOR<TextSectionUpdateManyMutationInput, TextSectionUncheckedUpdateManyWithoutText_sectionsInput>
  }

  export type TextSectionScalarWhereInput = {
    AND?: Enumerable<TextSectionScalarWhereInput>
    OR?: Enumerable<TextSectionScalarWhereInput>
    NOT?: Enumerable<TextSectionScalarWhereInput>
    id?: StringFilter | string
    order_of_priority?: IntFilter | number
    content?: StringFilter | string
    section_id?: StringFilter | string
  }

  export type MidiaSectionUpsertWithWhereUniqueWithoutSectionInput = {
    where: MidiaSectionWhereUniqueInput
    update: XOR<MidiaSectionUpdateWithoutSectionInput, MidiaSectionUncheckedUpdateWithoutSectionInput>
    create: XOR<MidiaSectionCreateWithoutSectionInput, MidiaSectionUncheckedCreateWithoutSectionInput>
  }

  export type MidiaSectionUpdateWithWhereUniqueWithoutSectionInput = {
    where: MidiaSectionWhereUniqueInput
    data: XOR<MidiaSectionUpdateWithoutSectionInput, MidiaSectionUncheckedUpdateWithoutSectionInput>
  }

  export type MidiaSectionUpdateManyWithWhereWithoutSectionInput = {
    where: MidiaSectionScalarWhereInput
    data: XOR<MidiaSectionUpdateManyMutationInput, MidiaSectionUncheckedUpdateManyWithoutMidia_sectionsInput>
  }

  export type MidiaSectionScalarWhereInput = {
    AND?: Enumerable<MidiaSectionScalarWhereInput>
    OR?: Enumerable<MidiaSectionScalarWhereInput>
    NOT?: Enumerable<MidiaSectionScalarWhereInput>
    id?: StringFilter | string
    order_of_priority?: IntFilter | number
    link?: StringFilter | string
    height?: IntFilter | number
    width?: IntFilter | number
    section_id?: StringFilter | string
  }

  export type CodeSectionUpsertWithWhereUniqueWithoutSectionInput = {
    where: CodeSectionWhereUniqueInput
    update: XOR<CodeSectionUpdateWithoutSectionInput, CodeSectionUncheckedUpdateWithoutSectionInput>
    create: XOR<CodeSectionCreateWithoutSectionInput, CodeSectionUncheckedCreateWithoutSectionInput>
  }

  export type CodeSectionUpdateWithWhereUniqueWithoutSectionInput = {
    where: CodeSectionWhereUniqueInput
    data: XOR<CodeSectionUpdateWithoutSectionInput, CodeSectionUncheckedUpdateWithoutSectionInput>
  }

  export type CodeSectionUpdateManyWithWhereWithoutSectionInput = {
    where: CodeSectionScalarWhereInput
    data: XOR<CodeSectionUpdateManyMutationInput, CodeSectionUncheckedUpdateManyWithoutCode_sectionsInput>
  }

  export type CodeSectionScalarWhereInput = {
    AND?: Enumerable<CodeSectionScalarWhereInput>
    OR?: Enumerable<CodeSectionScalarWhereInput>
    NOT?: Enumerable<CodeSectionScalarWhereInput>
    id?: StringFilter | string
    order_of_priority?: IntFilter | number
    summary?: StringNullableFilter | string | null
    content?: StringFilter | string
    section_id?: StringFilter | string
  }

  export type HeadingSectionUpsertWithWhereUniqueWithoutSectionInput = {
    where: HeadingSectionWhereUniqueInput
    update: XOR<HeadingSectionUpdateWithoutSectionInput, HeadingSectionUncheckedUpdateWithoutSectionInput>
    create: XOR<HeadingSectionCreateWithoutSectionInput, HeadingSectionUncheckedCreateWithoutSectionInput>
  }

  export type HeadingSectionUpdateWithWhereUniqueWithoutSectionInput = {
    where: HeadingSectionWhereUniqueInput
    data: XOR<HeadingSectionUpdateWithoutSectionInput, HeadingSectionUncheckedUpdateWithoutSectionInput>
  }

  export type HeadingSectionUpdateManyWithWhereWithoutSectionInput = {
    where: HeadingSectionScalarWhereInput
    data: XOR<HeadingSectionUpdateManyMutationInput, HeadingSectionUncheckedUpdateManyWithoutHeading_sectionsInput>
  }

  export type HeadingSectionScalarWhereInput = {
    AND?: Enumerable<HeadingSectionScalarWhereInput>
    OR?: Enumerable<HeadingSectionScalarWhereInput>
    NOT?: Enumerable<HeadingSectionScalarWhereInput>
    id?: StringFilter | string
    order_of_priority?: IntFilter | number
    title?: StringFilter | string
    subtitle?: StringNullableFilter | string | null
    summary?: StringNullableFilter | string | null
    section_id?: StringFilter | string
  }

  export type SectionCreateWithoutText_sectionsInput = {
    id?: string
    heading: string
    sub_heading?: string | null
    sumary?: string | null
    post: PostCreateNestedOneWithoutSectionInput
    midia_sections?: MidiaSectionCreateNestedManyWithoutSectionInput
    code_sections?: CodeSectionCreateNestedManyWithoutSectionInput
    heading_sections?: HeadingSectionCreateNestedManyWithoutSectionInput
  }

  export type SectionUncheckedCreateWithoutText_sectionsInput = {
    id?: string
    heading: string
    sub_heading?: string | null
    sumary?: string | null
    post_id: string
    midia_sections?: MidiaSectionUncheckedCreateNestedManyWithoutSectionInput
    code_sections?: CodeSectionUncheckedCreateNestedManyWithoutSectionInput
    heading_sections?: HeadingSectionUncheckedCreateNestedManyWithoutSectionInput
  }

  export type SectionCreateOrConnectWithoutText_sectionsInput = {
    where: SectionWhereUniqueInput
    create: XOR<SectionCreateWithoutText_sectionsInput, SectionUncheckedCreateWithoutText_sectionsInput>
  }

  export type SectionUpsertWithoutText_sectionsInput = {
    update: XOR<SectionUpdateWithoutText_sectionsInput, SectionUncheckedUpdateWithoutText_sectionsInput>
    create: XOR<SectionCreateWithoutText_sectionsInput, SectionUncheckedCreateWithoutText_sectionsInput>
  }

  export type SectionUpdateWithoutText_sectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    heading?: StringFieldUpdateOperationsInput | string
    sub_heading?: NullableStringFieldUpdateOperationsInput | string | null
    sumary?: NullableStringFieldUpdateOperationsInput | string | null
    post?: PostUpdateOneRequiredWithoutSectionNestedInput
    midia_sections?: MidiaSectionUpdateManyWithoutSectionNestedInput
    code_sections?: CodeSectionUpdateManyWithoutSectionNestedInput
    heading_sections?: HeadingSectionUpdateManyWithoutSectionNestedInput
  }

  export type SectionUncheckedUpdateWithoutText_sectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    heading?: StringFieldUpdateOperationsInput | string
    sub_heading?: NullableStringFieldUpdateOperationsInput | string | null
    sumary?: NullableStringFieldUpdateOperationsInput | string | null
    post_id?: StringFieldUpdateOperationsInput | string
    midia_sections?: MidiaSectionUncheckedUpdateManyWithoutSectionNestedInput
    code_sections?: CodeSectionUncheckedUpdateManyWithoutSectionNestedInput
    heading_sections?: HeadingSectionUncheckedUpdateManyWithoutSectionNestedInput
  }

  export type SectionCreateWithoutHeading_sectionsInput = {
    id?: string
    heading: string
    sub_heading?: string | null
    sumary?: string | null
    post: PostCreateNestedOneWithoutSectionInput
    text_sections?: TextSectionCreateNestedManyWithoutSectionInput
    midia_sections?: MidiaSectionCreateNestedManyWithoutSectionInput
    code_sections?: CodeSectionCreateNestedManyWithoutSectionInput
  }

  export type SectionUncheckedCreateWithoutHeading_sectionsInput = {
    id?: string
    heading: string
    sub_heading?: string | null
    sumary?: string | null
    post_id: string
    text_sections?: TextSectionUncheckedCreateNestedManyWithoutSectionInput
    midia_sections?: MidiaSectionUncheckedCreateNestedManyWithoutSectionInput
    code_sections?: CodeSectionUncheckedCreateNestedManyWithoutSectionInput
  }

  export type SectionCreateOrConnectWithoutHeading_sectionsInput = {
    where: SectionWhereUniqueInput
    create: XOR<SectionCreateWithoutHeading_sectionsInput, SectionUncheckedCreateWithoutHeading_sectionsInput>
  }

  export type SectionUpsertWithoutHeading_sectionsInput = {
    update: XOR<SectionUpdateWithoutHeading_sectionsInput, SectionUncheckedUpdateWithoutHeading_sectionsInput>
    create: XOR<SectionCreateWithoutHeading_sectionsInput, SectionUncheckedCreateWithoutHeading_sectionsInput>
  }

  export type SectionUpdateWithoutHeading_sectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    heading?: StringFieldUpdateOperationsInput | string
    sub_heading?: NullableStringFieldUpdateOperationsInput | string | null
    sumary?: NullableStringFieldUpdateOperationsInput | string | null
    post?: PostUpdateOneRequiredWithoutSectionNestedInput
    text_sections?: TextSectionUpdateManyWithoutSectionNestedInput
    midia_sections?: MidiaSectionUpdateManyWithoutSectionNestedInput
    code_sections?: CodeSectionUpdateManyWithoutSectionNestedInput
  }

  export type SectionUncheckedUpdateWithoutHeading_sectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    heading?: StringFieldUpdateOperationsInput | string
    sub_heading?: NullableStringFieldUpdateOperationsInput | string | null
    sumary?: NullableStringFieldUpdateOperationsInput | string | null
    post_id?: StringFieldUpdateOperationsInput | string
    text_sections?: TextSectionUncheckedUpdateManyWithoutSectionNestedInput
    midia_sections?: MidiaSectionUncheckedUpdateManyWithoutSectionNestedInput
    code_sections?: CodeSectionUncheckedUpdateManyWithoutSectionNestedInput
  }

  export type SectionCreateWithoutMidia_sectionsInput = {
    id?: string
    heading: string
    sub_heading?: string | null
    sumary?: string | null
    post: PostCreateNestedOneWithoutSectionInput
    text_sections?: TextSectionCreateNestedManyWithoutSectionInput
    code_sections?: CodeSectionCreateNestedManyWithoutSectionInput
    heading_sections?: HeadingSectionCreateNestedManyWithoutSectionInput
  }

  export type SectionUncheckedCreateWithoutMidia_sectionsInput = {
    id?: string
    heading: string
    sub_heading?: string | null
    sumary?: string | null
    post_id: string
    text_sections?: TextSectionUncheckedCreateNestedManyWithoutSectionInput
    code_sections?: CodeSectionUncheckedCreateNestedManyWithoutSectionInput
    heading_sections?: HeadingSectionUncheckedCreateNestedManyWithoutSectionInput
  }

  export type SectionCreateOrConnectWithoutMidia_sectionsInput = {
    where: SectionWhereUniqueInput
    create: XOR<SectionCreateWithoutMidia_sectionsInput, SectionUncheckedCreateWithoutMidia_sectionsInput>
  }

  export type SectionUpsertWithoutMidia_sectionsInput = {
    update: XOR<SectionUpdateWithoutMidia_sectionsInput, SectionUncheckedUpdateWithoutMidia_sectionsInput>
    create: XOR<SectionCreateWithoutMidia_sectionsInput, SectionUncheckedCreateWithoutMidia_sectionsInput>
  }

  export type SectionUpdateWithoutMidia_sectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    heading?: StringFieldUpdateOperationsInput | string
    sub_heading?: NullableStringFieldUpdateOperationsInput | string | null
    sumary?: NullableStringFieldUpdateOperationsInput | string | null
    post?: PostUpdateOneRequiredWithoutSectionNestedInput
    text_sections?: TextSectionUpdateManyWithoutSectionNestedInput
    code_sections?: CodeSectionUpdateManyWithoutSectionNestedInput
    heading_sections?: HeadingSectionUpdateManyWithoutSectionNestedInput
  }

  export type SectionUncheckedUpdateWithoutMidia_sectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    heading?: StringFieldUpdateOperationsInput | string
    sub_heading?: NullableStringFieldUpdateOperationsInput | string | null
    sumary?: NullableStringFieldUpdateOperationsInput | string | null
    post_id?: StringFieldUpdateOperationsInput | string
    text_sections?: TextSectionUncheckedUpdateManyWithoutSectionNestedInput
    code_sections?: CodeSectionUncheckedUpdateManyWithoutSectionNestedInput
    heading_sections?: HeadingSectionUncheckedUpdateManyWithoutSectionNestedInput
  }

  export type SectionCreateWithoutCode_sectionsInput = {
    id?: string
    heading: string
    sub_heading?: string | null
    sumary?: string | null
    post: PostCreateNestedOneWithoutSectionInput
    text_sections?: TextSectionCreateNestedManyWithoutSectionInput
    midia_sections?: MidiaSectionCreateNestedManyWithoutSectionInput
    heading_sections?: HeadingSectionCreateNestedManyWithoutSectionInput
  }

  export type SectionUncheckedCreateWithoutCode_sectionsInput = {
    id?: string
    heading: string
    sub_heading?: string | null
    sumary?: string | null
    post_id: string
    text_sections?: TextSectionUncheckedCreateNestedManyWithoutSectionInput
    midia_sections?: MidiaSectionUncheckedCreateNestedManyWithoutSectionInput
    heading_sections?: HeadingSectionUncheckedCreateNestedManyWithoutSectionInput
  }

  export type SectionCreateOrConnectWithoutCode_sectionsInput = {
    where: SectionWhereUniqueInput
    create: XOR<SectionCreateWithoutCode_sectionsInput, SectionUncheckedCreateWithoutCode_sectionsInput>
  }

  export type SectionUpsertWithoutCode_sectionsInput = {
    update: XOR<SectionUpdateWithoutCode_sectionsInput, SectionUncheckedUpdateWithoutCode_sectionsInput>
    create: XOR<SectionCreateWithoutCode_sectionsInput, SectionUncheckedCreateWithoutCode_sectionsInput>
  }

  export type SectionUpdateWithoutCode_sectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    heading?: StringFieldUpdateOperationsInput | string
    sub_heading?: NullableStringFieldUpdateOperationsInput | string | null
    sumary?: NullableStringFieldUpdateOperationsInput | string | null
    post?: PostUpdateOneRequiredWithoutSectionNestedInput
    text_sections?: TextSectionUpdateManyWithoutSectionNestedInput
    midia_sections?: MidiaSectionUpdateManyWithoutSectionNestedInput
    heading_sections?: HeadingSectionUpdateManyWithoutSectionNestedInput
  }

  export type SectionUncheckedUpdateWithoutCode_sectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    heading?: StringFieldUpdateOperationsInput | string
    sub_heading?: NullableStringFieldUpdateOperationsInput | string | null
    sumary?: NullableStringFieldUpdateOperationsInput | string | null
    post_id?: StringFieldUpdateOperationsInput | string
    text_sections?: TextSectionUncheckedUpdateManyWithoutSectionNestedInput
    midia_sections?: MidiaSectionUncheckedUpdateManyWithoutSectionNestedInput
    heading_sections?: HeadingSectionUncheckedUpdateManyWithoutSectionNestedInput
  }

  export type PostCreateManyAuthorInput = {
    id?: string
    title: string
    slug: string
    summary: string
    tags?: PostCreatetagsInput | Enumerable<string>
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PostUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    tags?: PostUpdatetagsInput | Enumerable<string>
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Section?: SectionUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    tags?: PostUpdatetagsInput | Enumerable<string>
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Section?: SectionUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateManyWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    tags?: PostUpdatetagsInput | Enumerable<string>
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SectionCreateManyPostInput = {
    id?: string
    heading: string
    sub_heading?: string | null
    sumary?: string | null
  }

  export type SectionUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    heading?: StringFieldUpdateOperationsInput | string
    sub_heading?: NullableStringFieldUpdateOperationsInput | string | null
    sumary?: NullableStringFieldUpdateOperationsInput | string | null
    text_sections?: TextSectionUpdateManyWithoutSectionNestedInput
    midia_sections?: MidiaSectionUpdateManyWithoutSectionNestedInput
    code_sections?: CodeSectionUpdateManyWithoutSectionNestedInput
    heading_sections?: HeadingSectionUpdateManyWithoutSectionNestedInput
  }

  export type SectionUncheckedUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    heading?: StringFieldUpdateOperationsInput | string
    sub_heading?: NullableStringFieldUpdateOperationsInput | string | null
    sumary?: NullableStringFieldUpdateOperationsInput | string | null
    text_sections?: TextSectionUncheckedUpdateManyWithoutSectionNestedInput
    midia_sections?: MidiaSectionUncheckedUpdateManyWithoutSectionNestedInput
    code_sections?: CodeSectionUncheckedUpdateManyWithoutSectionNestedInput
    heading_sections?: HeadingSectionUncheckedUpdateManyWithoutSectionNestedInput
  }

  export type SectionUncheckedUpdateManyWithoutSectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    heading?: StringFieldUpdateOperationsInput | string
    sub_heading?: NullableStringFieldUpdateOperationsInput | string | null
    sumary?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TextSectionCreateManySectionInput = {
    id?: string
    order_of_priority: number
    content: string
  }

  export type MidiaSectionCreateManySectionInput = {
    id?: string
    order_of_priority: number
    link: string
    height: number
    width: number
  }

  export type CodeSectionCreateManySectionInput = {
    id?: string
    order_of_priority: number
    summary?: string | null
    content: string
  }

  export type HeadingSectionCreateManySectionInput = {
    id?: string
    order_of_priority: number
    title: string
    subtitle?: string | null
    summary?: string | null
  }

  export type TextSectionUpdateWithoutSectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_of_priority?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
  }

  export type TextSectionUncheckedUpdateWithoutSectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_of_priority?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
  }

  export type TextSectionUncheckedUpdateManyWithoutText_sectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_of_priority?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
  }

  export type MidiaSectionUpdateWithoutSectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_of_priority?: IntFieldUpdateOperationsInput | number
    link?: StringFieldUpdateOperationsInput | string
    height?: IntFieldUpdateOperationsInput | number
    width?: IntFieldUpdateOperationsInput | number
  }

  export type MidiaSectionUncheckedUpdateWithoutSectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_of_priority?: IntFieldUpdateOperationsInput | number
    link?: StringFieldUpdateOperationsInput | string
    height?: IntFieldUpdateOperationsInput | number
    width?: IntFieldUpdateOperationsInput | number
  }

  export type MidiaSectionUncheckedUpdateManyWithoutMidia_sectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_of_priority?: IntFieldUpdateOperationsInput | number
    link?: StringFieldUpdateOperationsInput | string
    height?: IntFieldUpdateOperationsInput | number
    width?: IntFieldUpdateOperationsInput | number
  }

  export type CodeSectionUpdateWithoutSectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_of_priority?: IntFieldUpdateOperationsInput | number
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
  }

  export type CodeSectionUncheckedUpdateWithoutSectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_of_priority?: IntFieldUpdateOperationsInput | number
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
  }

  export type CodeSectionUncheckedUpdateManyWithoutCode_sectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_of_priority?: IntFieldUpdateOperationsInput | number
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
  }

  export type HeadingSectionUpdateWithoutSectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_of_priority?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type HeadingSectionUncheckedUpdateWithoutSectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_of_priority?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type HeadingSectionUncheckedUpdateManyWithoutHeading_sectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_of_priority?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
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