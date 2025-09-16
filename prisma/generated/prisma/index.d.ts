
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
 * Model RecurringBills
 * 
 */
export type RecurringBills = $Result.DefaultSelection<Prisma.$RecurringBillsPayload>
/**
 * Model BillInstances
 * 
 */
export type BillInstances = $Result.DefaultSelection<Prisma.$BillInstancesPayload>
/**
 * Model Wallets
 * 
 */
export type Wallets = $Result.DefaultSelection<Prisma.$WalletsPayload>
/**
 * Model Transactions
 * 
 */
export type Transactions = $Result.DefaultSelection<Prisma.$TransactionsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const TransactionType: {
  INCOME: 'INCOME',
  EXPENSE: 'EXPENSE'
};

export type TransactionType = (typeof TransactionType)[keyof typeof TransactionType]


export const RECURRING_INTERVAL: {
  DAILY: 'DAILY',
  WEEKLY: 'WEEKLY',
  MONTHLY: 'MONTHLY',
  YEARLY: 'YEARLY'
};

export type RECURRING_INTERVAL = (typeof RECURRING_INTERVAL)[keyof typeof RECURRING_INTERVAL]


export const TRANSACTION_CATEGORY: {
  SALARY: 'SALARY',
  FREELANCE: 'FREELANCE',
  INVESTMENTS: 'INVESTMENTS',
  GIFTS: 'GIFTS',
  RENTAL_INCOME: 'RENTAL_INCOME',
  BONUS: 'BONUS',
  REIMBURSEMENT: 'REIMBURSEMENT',
  OTHER_INCOME: 'OTHER_INCOME',
  HOUSING: 'HOUSING',
  UTILITIES: 'UTILITIES',
  GROCERIES: 'GROCERIES',
  BAKERY: 'BAKERY',
  MARKET: 'MARKET',
  PHARMACY: 'PHARMACY',
  HEALTHCARE: 'HEALTHCARE',
  TRANSPORTATION: 'TRANSPORTATION',
  FUEL: 'FUEL',
  EDUCATION: 'EDUCATION',
  ENTERTAINMENT: 'ENTERTAINMENT',
  RESTAURANT: 'RESTAURANT',
  CLOTHING: 'CLOTHING',
  INSURANCE: 'INSURANCE',
  SUBSCRIPTIONS: 'SUBSCRIPTIONS',
  TRAVEL: 'TRAVEL',
  TAXES: 'TAXES'
};

export type TRANSACTION_CATEGORY = (typeof TRANSACTION_CATEGORY)[keyof typeof TRANSACTION_CATEGORY]


export const WALLET_TYPE: {
  CASH: 'CASH',
  BANK: 'BANK',
  CREDIT_CARD: 'CREDIT_CARD',
  DIGITAL_WALLET: 'DIGITAL_WALLET',
  VOUCHER: 'VOUCHER'
};

export type WALLET_TYPE = (typeof WALLET_TYPE)[keyof typeof WALLET_TYPE]

}

export type TransactionType = $Enums.TransactionType

export const TransactionType: typeof $Enums.TransactionType

export type RECURRING_INTERVAL = $Enums.RECURRING_INTERVAL

export const RECURRING_INTERVAL: typeof $Enums.RECURRING_INTERVAL

export type TRANSACTION_CATEGORY = $Enums.TRANSACTION_CATEGORY

export const TRANSACTION_CATEGORY: typeof $Enums.TRANSACTION_CATEGORY

export type WALLET_TYPE = $Enums.WALLET_TYPE

export const WALLET_TYPE: typeof $Enums.WALLET_TYPE

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more RecurringBills
 * const recurringBills = await prisma.recurringBills.findMany()
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
   * // Fetch zero or more RecurringBills
   * const recurringBills = await prisma.recurringBills.findMany()
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
   * `prisma.recurringBills`: Exposes CRUD operations for the **RecurringBills** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RecurringBills
    * const recurringBills = await prisma.recurringBills.findMany()
    * ```
    */
  get recurringBills(): Prisma.RecurringBillsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.billInstances`: Exposes CRUD operations for the **BillInstances** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BillInstances
    * const billInstances = await prisma.billInstances.findMany()
    * ```
    */
  get billInstances(): Prisma.BillInstancesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.wallets`: Exposes CRUD operations for the **Wallets** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Wallets
    * const wallets = await prisma.wallets.findMany()
    * ```
    */
  get wallets(): Prisma.WalletsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transactions`: Exposes CRUD operations for the **Transactions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transactions.findMany()
    * ```
    */
  get transactions(): Prisma.TransactionsDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.13.0
   * Query Engine version: 361e86d0ea4987e9f53a565309b3eed797a6bcbd
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
    RecurringBills: 'RecurringBills',
    BillInstances: 'BillInstances',
    Wallets: 'Wallets',
    Transactions: 'Transactions'
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
      modelProps: "recurringBills" | "billInstances" | "wallets" | "transactions"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      RecurringBills: {
        payload: Prisma.$RecurringBillsPayload<ExtArgs>
        fields: Prisma.RecurringBillsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RecurringBillsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurringBillsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RecurringBillsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurringBillsPayload>
          }
          findFirst: {
            args: Prisma.RecurringBillsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurringBillsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RecurringBillsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurringBillsPayload>
          }
          findMany: {
            args: Prisma.RecurringBillsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurringBillsPayload>[]
          }
          create: {
            args: Prisma.RecurringBillsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurringBillsPayload>
          }
          createMany: {
            args: Prisma.RecurringBillsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RecurringBillsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurringBillsPayload>[]
          }
          delete: {
            args: Prisma.RecurringBillsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurringBillsPayload>
          }
          update: {
            args: Prisma.RecurringBillsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurringBillsPayload>
          }
          deleteMany: {
            args: Prisma.RecurringBillsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RecurringBillsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RecurringBillsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurringBillsPayload>[]
          }
          upsert: {
            args: Prisma.RecurringBillsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurringBillsPayload>
          }
          aggregate: {
            args: Prisma.RecurringBillsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecurringBills>
          }
          groupBy: {
            args: Prisma.RecurringBillsGroupByArgs<ExtArgs>
            result: $Utils.Optional<RecurringBillsGroupByOutputType>[]
          }
          count: {
            args: Prisma.RecurringBillsCountArgs<ExtArgs>
            result: $Utils.Optional<RecurringBillsCountAggregateOutputType> | number
          }
        }
      }
      BillInstances: {
        payload: Prisma.$BillInstancesPayload<ExtArgs>
        fields: Prisma.BillInstancesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BillInstancesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillInstancesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BillInstancesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillInstancesPayload>
          }
          findFirst: {
            args: Prisma.BillInstancesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillInstancesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BillInstancesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillInstancesPayload>
          }
          findMany: {
            args: Prisma.BillInstancesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillInstancesPayload>[]
          }
          create: {
            args: Prisma.BillInstancesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillInstancesPayload>
          }
          createMany: {
            args: Prisma.BillInstancesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BillInstancesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillInstancesPayload>[]
          }
          delete: {
            args: Prisma.BillInstancesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillInstancesPayload>
          }
          update: {
            args: Prisma.BillInstancesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillInstancesPayload>
          }
          deleteMany: {
            args: Prisma.BillInstancesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BillInstancesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BillInstancesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillInstancesPayload>[]
          }
          upsert: {
            args: Prisma.BillInstancesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillInstancesPayload>
          }
          aggregate: {
            args: Prisma.BillInstancesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBillInstances>
          }
          groupBy: {
            args: Prisma.BillInstancesGroupByArgs<ExtArgs>
            result: $Utils.Optional<BillInstancesGroupByOutputType>[]
          }
          count: {
            args: Prisma.BillInstancesCountArgs<ExtArgs>
            result: $Utils.Optional<BillInstancesCountAggregateOutputType> | number
          }
        }
      }
      Wallets: {
        payload: Prisma.$WalletsPayload<ExtArgs>
        fields: Prisma.WalletsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WalletsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WalletsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletsPayload>
          }
          findFirst: {
            args: Prisma.WalletsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WalletsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletsPayload>
          }
          findMany: {
            args: Prisma.WalletsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletsPayload>[]
          }
          create: {
            args: Prisma.WalletsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletsPayload>
          }
          createMany: {
            args: Prisma.WalletsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WalletsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletsPayload>[]
          }
          delete: {
            args: Prisma.WalletsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletsPayload>
          }
          update: {
            args: Prisma.WalletsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletsPayload>
          }
          deleteMany: {
            args: Prisma.WalletsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WalletsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WalletsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletsPayload>[]
          }
          upsert: {
            args: Prisma.WalletsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletsPayload>
          }
          aggregate: {
            args: Prisma.WalletsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWallets>
          }
          groupBy: {
            args: Prisma.WalletsGroupByArgs<ExtArgs>
            result: $Utils.Optional<WalletsGroupByOutputType>[]
          }
          count: {
            args: Prisma.WalletsCountArgs<ExtArgs>
            result: $Utils.Optional<WalletsCountAggregateOutputType> | number
          }
        }
      }
      Transactions: {
        payload: Prisma.$TransactionsPayload<ExtArgs>
        fields: Prisma.TransactionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransactionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransactionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload>
          }
          findFirst: {
            args: Prisma.TransactionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransactionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload>
          }
          findMany: {
            args: Prisma.TransactionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload>[]
          }
          create: {
            args: Prisma.TransactionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload>
          }
          createMany: {
            args: Prisma.TransactionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransactionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload>[]
          }
          delete: {
            args: Prisma.TransactionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload>
          }
          update: {
            args: Prisma.TransactionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload>
          }
          deleteMany: {
            args: Prisma.TransactionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransactionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TransactionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload>[]
          }
          upsert: {
            args: Prisma.TransactionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload>
          }
          aggregate: {
            args: Prisma.TransactionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransactions>
          }
          groupBy: {
            args: Prisma.TransactionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransactionsCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionsCountAggregateOutputType> | number
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
    recurringBills?: RecurringBillsOmit
    billInstances?: BillInstancesOmit
    wallets?: WalletsOmit
    transactions?: TransactionsOmit
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
   * Count Type RecurringBillsCountOutputType
   */

  export type RecurringBillsCountOutputType = {
    instances: number
  }

  export type RecurringBillsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instances?: boolean | RecurringBillsCountOutputTypeCountInstancesArgs
  }

  // Custom InputTypes
  /**
   * RecurringBillsCountOutputType without action
   */
  export type RecurringBillsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringBillsCountOutputType
     */
    select?: RecurringBillsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RecurringBillsCountOutputType without action
   */
  export type RecurringBillsCountOutputTypeCountInstancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BillInstancesWhereInput
  }


  /**
   * Count Type WalletsCountOutputType
   */

  export type WalletsCountOutputType = {
    Transaction: number
  }

  export type WalletsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Transaction?: boolean | WalletsCountOutputTypeCountTransactionArgs
  }

  // Custom InputTypes
  /**
   * WalletsCountOutputType without action
   */
  export type WalletsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletsCountOutputType
     */
    select?: WalletsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WalletsCountOutputType without action
   */
  export type WalletsCountOutputTypeCountTransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model RecurringBills
   */

  export type AggregateRecurringBills = {
    _count: RecurringBillsCountAggregateOutputType | null
    _avg: RecurringBillsAvgAggregateOutputType | null
    _sum: RecurringBillsSumAggregateOutputType | null
    _min: RecurringBillsMinAggregateOutputType | null
    _max: RecurringBillsMaxAggregateOutputType | null
  }

  export type RecurringBillsAvgAggregateOutputType = {
    dueDay: number | null
  }

  export type RecurringBillsSumAggregateOutputType = {
    dueDay: number | null
  }

  export type RecurringBillsMinAggregateOutputType = {
    id: string | null
    name: string | null
    category: $Enums.TRANSACTION_CATEGORY | null
    dueDay: number | null
    interval: $Enums.RECURRING_INTERVAL | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RecurringBillsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    category: $Enums.TRANSACTION_CATEGORY | null
    dueDay: number | null
    interval: $Enums.RECURRING_INTERVAL | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RecurringBillsCountAggregateOutputType = {
    id: number
    name: number
    category: number
    dueDay: number
    interval: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RecurringBillsAvgAggregateInputType = {
    dueDay?: true
  }

  export type RecurringBillsSumAggregateInputType = {
    dueDay?: true
  }

  export type RecurringBillsMinAggregateInputType = {
    id?: true
    name?: true
    category?: true
    dueDay?: true
    interval?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RecurringBillsMaxAggregateInputType = {
    id?: true
    name?: true
    category?: true
    dueDay?: true
    interval?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RecurringBillsCountAggregateInputType = {
    id?: true
    name?: true
    category?: true
    dueDay?: true
    interval?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RecurringBillsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RecurringBills to aggregate.
     */
    where?: RecurringBillsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecurringBills to fetch.
     */
    orderBy?: RecurringBillsOrderByWithRelationInput | RecurringBillsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RecurringBillsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecurringBills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecurringBills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RecurringBills
    **/
    _count?: true | RecurringBillsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RecurringBillsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RecurringBillsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecurringBillsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecurringBillsMaxAggregateInputType
  }

  export type GetRecurringBillsAggregateType<T extends RecurringBillsAggregateArgs> = {
        [P in keyof T & keyof AggregateRecurringBills]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecurringBills[P]>
      : GetScalarType<T[P], AggregateRecurringBills[P]>
  }




  export type RecurringBillsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecurringBillsWhereInput
    orderBy?: RecurringBillsOrderByWithAggregationInput | RecurringBillsOrderByWithAggregationInput[]
    by: RecurringBillsScalarFieldEnum[] | RecurringBillsScalarFieldEnum
    having?: RecurringBillsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecurringBillsCountAggregateInputType | true
    _avg?: RecurringBillsAvgAggregateInputType
    _sum?: RecurringBillsSumAggregateInputType
    _min?: RecurringBillsMinAggregateInputType
    _max?: RecurringBillsMaxAggregateInputType
  }

  export type RecurringBillsGroupByOutputType = {
    id: string
    name: string
    category: $Enums.TRANSACTION_CATEGORY | null
    dueDay: number
    interval: $Enums.RECURRING_INTERVAL
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: RecurringBillsCountAggregateOutputType | null
    _avg: RecurringBillsAvgAggregateOutputType | null
    _sum: RecurringBillsSumAggregateOutputType | null
    _min: RecurringBillsMinAggregateOutputType | null
    _max: RecurringBillsMaxAggregateOutputType | null
  }

  type GetRecurringBillsGroupByPayload<T extends RecurringBillsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecurringBillsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecurringBillsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecurringBillsGroupByOutputType[P]>
            : GetScalarType<T[P], RecurringBillsGroupByOutputType[P]>
        }
      >
    >


  export type RecurringBillsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category?: boolean
    dueDay?: boolean
    interval?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    instances?: boolean | RecurringBills$instancesArgs<ExtArgs>
    _count?: boolean | RecurringBillsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recurringBills"]>

  export type RecurringBillsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category?: boolean
    dueDay?: boolean
    interval?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["recurringBills"]>

  export type RecurringBillsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category?: boolean
    dueDay?: boolean
    interval?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["recurringBills"]>

  export type RecurringBillsSelectScalar = {
    id?: boolean
    name?: boolean
    category?: boolean
    dueDay?: boolean
    interval?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RecurringBillsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "category" | "dueDay" | "interval" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["recurringBills"]>
  export type RecurringBillsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instances?: boolean | RecurringBills$instancesArgs<ExtArgs>
    _count?: boolean | RecurringBillsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RecurringBillsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RecurringBillsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RecurringBillsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RecurringBills"
    objects: {
      instances: Prisma.$BillInstancesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      category: $Enums.TRANSACTION_CATEGORY | null
      dueDay: number
      interval: $Enums.RECURRING_INTERVAL
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["recurringBills"]>
    composites: {}
  }

  type RecurringBillsGetPayload<S extends boolean | null | undefined | RecurringBillsDefaultArgs> = $Result.GetResult<Prisma.$RecurringBillsPayload, S>

  type RecurringBillsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RecurringBillsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RecurringBillsCountAggregateInputType | true
    }

  export interface RecurringBillsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RecurringBills'], meta: { name: 'RecurringBills' } }
    /**
     * Find zero or one RecurringBills that matches the filter.
     * @param {RecurringBillsFindUniqueArgs} args - Arguments to find a RecurringBills
     * @example
     * // Get one RecurringBills
     * const recurringBills = await prisma.recurringBills.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RecurringBillsFindUniqueArgs>(args: SelectSubset<T, RecurringBillsFindUniqueArgs<ExtArgs>>): Prisma__RecurringBillsClient<$Result.GetResult<Prisma.$RecurringBillsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RecurringBills that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RecurringBillsFindUniqueOrThrowArgs} args - Arguments to find a RecurringBills
     * @example
     * // Get one RecurringBills
     * const recurringBills = await prisma.recurringBills.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RecurringBillsFindUniqueOrThrowArgs>(args: SelectSubset<T, RecurringBillsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RecurringBillsClient<$Result.GetResult<Prisma.$RecurringBillsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RecurringBills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecurringBillsFindFirstArgs} args - Arguments to find a RecurringBills
     * @example
     * // Get one RecurringBills
     * const recurringBills = await prisma.recurringBills.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RecurringBillsFindFirstArgs>(args?: SelectSubset<T, RecurringBillsFindFirstArgs<ExtArgs>>): Prisma__RecurringBillsClient<$Result.GetResult<Prisma.$RecurringBillsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RecurringBills that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecurringBillsFindFirstOrThrowArgs} args - Arguments to find a RecurringBills
     * @example
     * // Get one RecurringBills
     * const recurringBills = await prisma.recurringBills.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RecurringBillsFindFirstOrThrowArgs>(args?: SelectSubset<T, RecurringBillsFindFirstOrThrowArgs<ExtArgs>>): Prisma__RecurringBillsClient<$Result.GetResult<Prisma.$RecurringBillsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RecurringBills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecurringBillsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RecurringBills
     * const recurringBills = await prisma.recurringBills.findMany()
     * 
     * // Get first 10 RecurringBills
     * const recurringBills = await prisma.recurringBills.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recurringBillsWithIdOnly = await prisma.recurringBills.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RecurringBillsFindManyArgs>(args?: SelectSubset<T, RecurringBillsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecurringBillsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RecurringBills.
     * @param {RecurringBillsCreateArgs} args - Arguments to create a RecurringBills.
     * @example
     * // Create one RecurringBills
     * const RecurringBills = await prisma.recurringBills.create({
     *   data: {
     *     // ... data to create a RecurringBills
     *   }
     * })
     * 
     */
    create<T extends RecurringBillsCreateArgs>(args: SelectSubset<T, RecurringBillsCreateArgs<ExtArgs>>): Prisma__RecurringBillsClient<$Result.GetResult<Prisma.$RecurringBillsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RecurringBills.
     * @param {RecurringBillsCreateManyArgs} args - Arguments to create many RecurringBills.
     * @example
     * // Create many RecurringBills
     * const recurringBills = await prisma.recurringBills.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RecurringBillsCreateManyArgs>(args?: SelectSubset<T, RecurringBillsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RecurringBills and returns the data saved in the database.
     * @param {RecurringBillsCreateManyAndReturnArgs} args - Arguments to create many RecurringBills.
     * @example
     * // Create many RecurringBills
     * const recurringBills = await prisma.recurringBills.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RecurringBills and only return the `id`
     * const recurringBillsWithIdOnly = await prisma.recurringBills.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RecurringBillsCreateManyAndReturnArgs>(args?: SelectSubset<T, RecurringBillsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecurringBillsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RecurringBills.
     * @param {RecurringBillsDeleteArgs} args - Arguments to delete one RecurringBills.
     * @example
     * // Delete one RecurringBills
     * const RecurringBills = await prisma.recurringBills.delete({
     *   where: {
     *     // ... filter to delete one RecurringBills
     *   }
     * })
     * 
     */
    delete<T extends RecurringBillsDeleteArgs>(args: SelectSubset<T, RecurringBillsDeleteArgs<ExtArgs>>): Prisma__RecurringBillsClient<$Result.GetResult<Prisma.$RecurringBillsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RecurringBills.
     * @param {RecurringBillsUpdateArgs} args - Arguments to update one RecurringBills.
     * @example
     * // Update one RecurringBills
     * const recurringBills = await prisma.recurringBills.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RecurringBillsUpdateArgs>(args: SelectSubset<T, RecurringBillsUpdateArgs<ExtArgs>>): Prisma__RecurringBillsClient<$Result.GetResult<Prisma.$RecurringBillsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RecurringBills.
     * @param {RecurringBillsDeleteManyArgs} args - Arguments to filter RecurringBills to delete.
     * @example
     * // Delete a few RecurringBills
     * const { count } = await prisma.recurringBills.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RecurringBillsDeleteManyArgs>(args?: SelectSubset<T, RecurringBillsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RecurringBills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecurringBillsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RecurringBills
     * const recurringBills = await prisma.recurringBills.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RecurringBillsUpdateManyArgs>(args: SelectSubset<T, RecurringBillsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RecurringBills and returns the data updated in the database.
     * @param {RecurringBillsUpdateManyAndReturnArgs} args - Arguments to update many RecurringBills.
     * @example
     * // Update many RecurringBills
     * const recurringBills = await prisma.recurringBills.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RecurringBills and only return the `id`
     * const recurringBillsWithIdOnly = await prisma.recurringBills.updateManyAndReturn({
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
    updateManyAndReturn<T extends RecurringBillsUpdateManyAndReturnArgs>(args: SelectSubset<T, RecurringBillsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecurringBillsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RecurringBills.
     * @param {RecurringBillsUpsertArgs} args - Arguments to update or create a RecurringBills.
     * @example
     * // Update or create a RecurringBills
     * const recurringBills = await prisma.recurringBills.upsert({
     *   create: {
     *     // ... data to create a RecurringBills
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RecurringBills we want to update
     *   }
     * })
     */
    upsert<T extends RecurringBillsUpsertArgs>(args: SelectSubset<T, RecurringBillsUpsertArgs<ExtArgs>>): Prisma__RecurringBillsClient<$Result.GetResult<Prisma.$RecurringBillsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RecurringBills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecurringBillsCountArgs} args - Arguments to filter RecurringBills to count.
     * @example
     * // Count the number of RecurringBills
     * const count = await prisma.recurringBills.count({
     *   where: {
     *     // ... the filter for the RecurringBills we want to count
     *   }
     * })
    **/
    count<T extends RecurringBillsCountArgs>(
      args?: Subset<T, RecurringBillsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecurringBillsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RecurringBills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecurringBillsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RecurringBillsAggregateArgs>(args: Subset<T, RecurringBillsAggregateArgs>): Prisma.PrismaPromise<GetRecurringBillsAggregateType<T>>

    /**
     * Group by RecurringBills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecurringBillsGroupByArgs} args - Group by arguments.
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
      T extends RecurringBillsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecurringBillsGroupByArgs['orderBy'] }
        : { orderBy?: RecurringBillsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RecurringBillsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecurringBillsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RecurringBills model
   */
  readonly fields: RecurringBillsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RecurringBills.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RecurringBillsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    instances<T extends RecurringBills$instancesArgs<ExtArgs> = {}>(args?: Subset<T, RecurringBills$instancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BillInstancesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the RecurringBills model
   */
  interface RecurringBillsFieldRefs {
    readonly id: FieldRef<"RecurringBills", 'String'>
    readonly name: FieldRef<"RecurringBills", 'String'>
    readonly category: FieldRef<"RecurringBills", 'TRANSACTION_CATEGORY'>
    readonly dueDay: FieldRef<"RecurringBills", 'Int'>
    readonly interval: FieldRef<"RecurringBills", 'RECURRING_INTERVAL'>
    readonly isActive: FieldRef<"RecurringBills", 'Boolean'>
    readonly createdAt: FieldRef<"RecurringBills", 'DateTime'>
    readonly updatedAt: FieldRef<"RecurringBills", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RecurringBills findUnique
   */
  export type RecurringBillsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringBills
     */
    select?: RecurringBillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecurringBills
     */
    omit?: RecurringBillsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurringBillsInclude<ExtArgs> | null
    /**
     * Filter, which RecurringBills to fetch.
     */
    where: RecurringBillsWhereUniqueInput
  }

  /**
   * RecurringBills findUniqueOrThrow
   */
  export type RecurringBillsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringBills
     */
    select?: RecurringBillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecurringBills
     */
    omit?: RecurringBillsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurringBillsInclude<ExtArgs> | null
    /**
     * Filter, which RecurringBills to fetch.
     */
    where: RecurringBillsWhereUniqueInput
  }

  /**
   * RecurringBills findFirst
   */
  export type RecurringBillsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringBills
     */
    select?: RecurringBillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecurringBills
     */
    omit?: RecurringBillsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurringBillsInclude<ExtArgs> | null
    /**
     * Filter, which RecurringBills to fetch.
     */
    where?: RecurringBillsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecurringBills to fetch.
     */
    orderBy?: RecurringBillsOrderByWithRelationInput | RecurringBillsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RecurringBills.
     */
    cursor?: RecurringBillsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecurringBills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecurringBills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RecurringBills.
     */
    distinct?: RecurringBillsScalarFieldEnum | RecurringBillsScalarFieldEnum[]
  }

  /**
   * RecurringBills findFirstOrThrow
   */
  export type RecurringBillsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringBills
     */
    select?: RecurringBillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecurringBills
     */
    omit?: RecurringBillsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurringBillsInclude<ExtArgs> | null
    /**
     * Filter, which RecurringBills to fetch.
     */
    where?: RecurringBillsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecurringBills to fetch.
     */
    orderBy?: RecurringBillsOrderByWithRelationInput | RecurringBillsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RecurringBills.
     */
    cursor?: RecurringBillsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecurringBills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecurringBills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RecurringBills.
     */
    distinct?: RecurringBillsScalarFieldEnum | RecurringBillsScalarFieldEnum[]
  }

  /**
   * RecurringBills findMany
   */
  export type RecurringBillsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringBills
     */
    select?: RecurringBillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecurringBills
     */
    omit?: RecurringBillsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurringBillsInclude<ExtArgs> | null
    /**
     * Filter, which RecurringBills to fetch.
     */
    where?: RecurringBillsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecurringBills to fetch.
     */
    orderBy?: RecurringBillsOrderByWithRelationInput | RecurringBillsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RecurringBills.
     */
    cursor?: RecurringBillsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecurringBills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecurringBills.
     */
    skip?: number
    distinct?: RecurringBillsScalarFieldEnum | RecurringBillsScalarFieldEnum[]
  }

  /**
   * RecurringBills create
   */
  export type RecurringBillsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringBills
     */
    select?: RecurringBillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecurringBills
     */
    omit?: RecurringBillsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurringBillsInclude<ExtArgs> | null
    /**
     * The data needed to create a RecurringBills.
     */
    data: XOR<RecurringBillsCreateInput, RecurringBillsUncheckedCreateInput>
  }

  /**
   * RecurringBills createMany
   */
  export type RecurringBillsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RecurringBills.
     */
    data: RecurringBillsCreateManyInput | RecurringBillsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RecurringBills createManyAndReturn
   */
  export type RecurringBillsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringBills
     */
    select?: RecurringBillsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RecurringBills
     */
    omit?: RecurringBillsOmit<ExtArgs> | null
    /**
     * The data used to create many RecurringBills.
     */
    data: RecurringBillsCreateManyInput | RecurringBillsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RecurringBills update
   */
  export type RecurringBillsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringBills
     */
    select?: RecurringBillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecurringBills
     */
    omit?: RecurringBillsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurringBillsInclude<ExtArgs> | null
    /**
     * The data needed to update a RecurringBills.
     */
    data: XOR<RecurringBillsUpdateInput, RecurringBillsUncheckedUpdateInput>
    /**
     * Choose, which RecurringBills to update.
     */
    where: RecurringBillsWhereUniqueInput
  }

  /**
   * RecurringBills updateMany
   */
  export type RecurringBillsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RecurringBills.
     */
    data: XOR<RecurringBillsUpdateManyMutationInput, RecurringBillsUncheckedUpdateManyInput>
    /**
     * Filter which RecurringBills to update
     */
    where?: RecurringBillsWhereInput
    /**
     * Limit how many RecurringBills to update.
     */
    limit?: number
  }

  /**
   * RecurringBills updateManyAndReturn
   */
  export type RecurringBillsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringBills
     */
    select?: RecurringBillsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RecurringBills
     */
    omit?: RecurringBillsOmit<ExtArgs> | null
    /**
     * The data used to update RecurringBills.
     */
    data: XOR<RecurringBillsUpdateManyMutationInput, RecurringBillsUncheckedUpdateManyInput>
    /**
     * Filter which RecurringBills to update
     */
    where?: RecurringBillsWhereInput
    /**
     * Limit how many RecurringBills to update.
     */
    limit?: number
  }

  /**
   * RecurringBills upsert
   */
  export type RecurringBillsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringBills
     */
    select?: RecurringBillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecurringBills
     */
    omit?: RecurringBillsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurringBillsInclude<ExtArgs> | null
    /**
     * The filter to search for the RecurringBills to update in case it exists.
     */
    where: RecurringBillsWhereUniqueInput
    /**
     * In case the RecurringBills found by the `where` argument doesn't exist, create a new RecurringBills with this data.
     */
    create: XOR<RecurringBillsCreateInput, RecurringBillsUncheckedCreateInput>
    /**
     * In case the RecurringBills was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RecurringBillsUpdateInput, RecurringBillsUncheckedUpdateInput>
  }

  /**
   * RecurringBills delete
   */
  export type RecurringBillsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringBills
     */
    select?: RecurringBillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecurringBills
     */
    omit?: RecurringBillsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurringBillsInclude<ExtArgs> | null
    /**
     * Filter which RecurringBills to delete.
     */
    where: RecurringBillsWhereUniqueInput
  }

  /**
   * RecurringBills deleteMany
   */
  export type RecurringBillsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RecurringBills to delete
     */
    where?: RecurringBillsWhereInput
    /**
     * Limit how many RecurringBills to delete.
     */
    limit?: number
  }

  /**
   * RecurringBills.instances
   */
  export type RecurringBills$instancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillInstances
     */
    select?: BillInstancesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillInstances
     */
    omit?: BillInstancesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillInstancesInclude<ExtArgs> | null
    where?: BillInstancesWhereInput
    orderBy?: BillInstancesOrderByWithRelationInput | BillInstancesOrderByWithRelationInput[]
    cursor?: BillInstancesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BillInstancesScalarFieldEnum | BillInstancesScalarFieldEnum[]
  }

  /**
   * RecurringBills without action
   */
  export type RecurringBillsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringBills
     */
    select?: RecurringBillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecurringBills
     */
    omit?: RecurringBillsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurringBillsInclude<ExtArgs> | null
  }


  /**
   * Model BillInstances
   */

  export type AggregateBillInstances = {
    _count: BillInstancesCountAggregateOutputType | null
    _avg: BillInstancesAvgAggregateOutputType | null
    _sum: BillInstancesSumAggregateOutputType | null
    _min: BillInstancesMinAggregateOutputType | null
    _max: BillInstancesMaxAggregateOutputType | null
  }

  export type BillInstancesAvgAggregateOutputType = {
    amount: number | null
  }

  export type BillInstancesSumAggregateOutputType = {
    amount: number | null
  }

  export type BillInstancesMinAggregateOutputType = {
    id: string | null
    recurringBillId: string | null
    referenceMonth: Date | null
    amount: number | null
    dueDate: Date | null
    isPaid: boolean | null
    paidAt: Date | null
    createdAt: Date | null
  }

  export type BillInstancesMaxAggregateOutputType = {
    id: string | null
    recurringBillId: string | null
    referenceMonth: Date | null
    amount: number | null
    dueDate: Date | null
    isPaid: boolean | null
    paidAt: Date | null
    createdAt: Date | null
  }

  export type BillInstancesCountAggregateOutputType = {
    id: number
    recurringBillId: number
    referenceMonth: number
    amount: number
    dueDate: number
    isPaid: number
    paidAt: number
    createdAt: number
    _all: number
  }


  export type BillInstancesAvgAggregateInputType = {
    amount?: true
  }

  export type BillInstancesSumAggregateInputType = {
    amount?: true
  }

  export type BillInstancesMinAggregateInputType = {
    id?: true
    recurringBillId?: true
    referenceMonth?: true
    amount?: true
    dueDate?: true
    isPaid?: true
    paidAt?: true
    createdAt?: true
  }

  export type BillInstancesMaxAggregateInputType = {
    id?: true
    recurringBillId?: true
    referenceMonth?: true
    amount?: true
    dueDate?: true
    isPaid?: true
    paidAt?: true
    createdAt?: true
  }

  export type BillInstancesCountAggregateInputType = {
    id?: true
    recurringBillId?: true
    referenceMonth?: true
    amount?: true
    dueDate?: true
    isPaid?: true
    paidAt?: true
    createdAt?: true
    _all?: true
  }

  export type BillInstancesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BillInstances to aggregate.
     */
    where?: BillInstancesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BillInstances to fetch.
     */
    orderBy?: BillInstancesOrderByWithRelationInput | BillInstancesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BillInstancesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BillInstances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BillInstances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BillInstances
    **/
    _count?: true | BillInstancesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BillInstancesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BillInstancesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BillInstancesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BillInstancesMaxAggregateInputType
  }

  export type GetBillInstancesAggregateType<T extends BillInstancesAggregateArgs> = {
        [P in keyof T & keyof AggregateBillInstances]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBillInstances[P]>
      : GetScalarType<T[P], AggregateBillInstances[P]>
  }




  export type BillInstancesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BillInstancesWhereInput
    orderBy?: BillInstancesOrderByWithAggregationInput | BillInstancesOrderByWithAggregationInput[]
    by: BillInstancesScalarFieldEnum[] | BillInstancesScalarFieldEnum
    having?: BillInstancesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BillInstancesCountAggregateInputType | true
    _avg?: BillInstancesAvgAggregateInputType
    _sum?: BillInstancesSumAggregateInputType
    _min?: BillInstancesMinAggregateInputType
    _max?: BillInstancesMaxAggregateInputType
  }

  export type BillInstancesGroupByOutputType = {
    id: string
    recurringBillId: string
    referenceMonth: Date
    amount: number | null
    dueDate: Date
    isPaid: boolean
    paidAt: Date | null
    createdAt: Date
    _count: BillInstancesCountAggregateOutputType | null
    _avg: BillInstancesAvgAggregateOutputType | null
    _sum: BillInstancesSumAggregateOutputType | null
    _min: BillInstancesMinAggregateOutputType | null
    _max: BillInstancesMaxAggregateOutputType | null
  }

  type GetBillInstancesGroupByPayload<T extends BillInstancesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BillInstancesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BillInstancesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BillInstancesGroupByOutputType[P]>
            : GetScalarType<T[P], BillInstancesGroupByOutputType[P]>
        }
      >
    >


  export type BillInstancesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    recurringBillId?: boolean
    referenceMonth?: boolean
    amount?: boolean
    dueDate?: boolean
    isPaid?: boolean
    paidAt?: boolean
    createdAt?: boolean
    recurringBill?: boolean | RecurringBillsDefaultArgs<ExtArgs>
    transaction?: boolean | BillInstances$transactionArgs<ExtArgs>
  }, ExtArgs["result"]["billInstances"]>

  export type BillInstancesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    recurringBillId?: boolean
    referenceMonth?: boolean
    amount?: boolean
    dueDate?: boolean
    isPaid?: boolean
    paidAt?: boolean
    createdAt?: boolean
    recurringBill?: boolean | RecurringBillsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["billInstances"]>

  export type BillInstancesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    recurringBillId?: boolean
    referenceMonth?: boolean
    amount?: boolean
    dueDate?: boolean
    isPaid?: boolean
    paidAt?: boolean
    createdAt?: boolean
    recurringBill?: boolean | RecurringBillsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["billInstances"]>

  export type BillInstancesSelectScalar = {
    id?: boolean
    recurringBillId?: boolean
    referenceMonth?: boolean
    amount?: boolean
    dueDate?: boolean
    isPaid?: boolean
    paidAt?: boolean
    createdAt?: boolean
  }

  export type BillInstancesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "recurringBillId" | "referenceMonth" | "amount" | "dueDate" | "isPaid" | "paidAt" | "createdAt", ExtArgs["result"]["billInstances"]>
  export type BillInstancesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recurringBill?: boolean | RecurringBillsDefaultArgs<ExtArgs>
    transaction?: boolean | BillInstances$transactionArgs<ExtArgs>
  }
  export type BillInstancesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recurringBill?: boolean | RecurringBillsDefaultArgs<ExtArgs>
  }
  export type BillInstancesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recurringBill?: boolean | RecurringBillsDefaultArgs<ExtArgs>
  }

  export type $BillInstancesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BillInstances"
    objects: {
      recurringBill: Prisma.$RecurringBillsPayload<ExtArgs>
      transaction: Prisma.$TransactionsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      recurringBillId: string
      referenceMonth: Date
      amount: number | null
      dueDate: Date
      isPaid: boolean
      paidAt: Date | null
      createdAt: Date
    }, ExtArgs["result"]["billInstances"]>
    composites: {}
  }

  type BillInstancesGetPayload<S extends boolean | null | undefined | BillInstancesDefaultArgs> = $Result.GetResult<Prisma.$BillInstancesPayload, S>

  type BillInstancesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BillInstancesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BillInstancesCountAggregateInputType | true
    }

  export interface BillInstancesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BillInstances'], meta: { name: 'BillInstances' } }
    /**
     * Find zero or one BillInstances that matches the filter.
     * @param {BillInstancesFindUniqueArgs} args - Arguments to find a BillInstances
     * @example
     * // Get one BillInstances
     * const billInstances = await prisma.billInstances.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BillInstancesFindUniqueArgs>(args: SelectSubset<T, BillInstancesFindUniqueArgs<ExtArgs>>): Prisma__BillInstancesClient<$Result.GetResult<Prisma.$BillInstancesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BillInstances that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BillInstancesFindUniqueOrThrowArgs} args - Arguments to find a BillInstances
     * @example
     * // Get one BillInstances
     * const billInstances = await prisma.billInstances.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BillInstancesFindUniqueOrThrowArgs>(args: SelectSubset<T, BillInstancesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BillInstancesClient<$Result.GetResult<Prisma.$BillInstancesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BillInstances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillInstancesFindFirstArgs} args - Arguments to find a BillInstances
     * @example
     * // Get one BillInstances
     * const billInstances = await prisma.billInstances.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BillInstancesFindFirstArgs>(args?: SelectSubset<T, BillInstancesFindFirstArgs<ExtArgs>>): Prisma__BillInstancesClient<$Result.GetResult<Prisma.$BillInstancesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BillInstances that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillInstancesFindFirstOrThrowArgs} args - Arguments to find a BillInstances
     * @example
     * // Get one BillInstances
     * const billInstances = await prisma.billInstances.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BillInstancesFindFirstOrThrowArgs>(args?: SelectSubset<T, BillInstancesFindFirstOrThrowArgs<ExtArgs>>): Prisma__BillInstancesClient<$Result.GetResult<Prisma.$BillInstancesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BillInstances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillInstancesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BillInstances
     * const billInstances = await prisma.billInstances.findMany()
     * 
     * // Get first 10 BillInstances
     * const billInstances = await prisma.billInstances.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const billInstancesWithIdOnly = await prisma.billInstances.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BillInstancesFindManyArgs>(args?: SelectSubset<T, BillInstancesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BillInstancesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BillInstances.
     * @param {BillInstancesCreateArgs} args - Arguments to create a BillInstances.
     * @example
     * // Create one BillInstances
     * const BillInstances = await prisma.billInstances.create({
     *   data: {
     *     // ... data to create a BillInstances
     *   }
     * })
     * 
     */
    create<T extends BillInstancesCreateArgs>(args: SelectSubset<T, BillInstancesCreateArgs<ExtArgs>>): Prisma__BillInstancesClient<$Result.GetResult<Prisma.$BillInstancesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BillInstances.
     * @param {BillInstancesCreateManyArgs} args - Arguments to create many BillInstances.
     * @example
     * // Create many BillInstances
     * const billInstances = await prisma.billInstances.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BillInstancesCreateManyArgs>(args?: SelectSubset<T, BillInstancesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BillInstances and returns the data saved in the database.
     * @param {BillInstancesCreateManyAndReturnArgs} args - Arguments to create many BillInstances.
     * @example
     * // Create many BillInstances
     * const billInstances = await prisma.billInstances.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BillInstances and only return the `id`
     * const billInstancesWithIdOnly = await prisma.billInstances.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BillInstancesCreateManyAndReturnArgs>(args?: SelectSubset<T, BillInstancesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BillInstancesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BillInstances.
     * @param {BillInstancesDeleteArgs} args - Arguments to delete one BillInstances.
     * @example
     * // Delete one BillInstances
     * const BillInstances = await prisma.billInstances.delete({
     *   where: {
     *     // ... filter to delete one BillInstances
     *   }
     * })
     * 
     */
    delete<T extends BillInstancesDeleteArgs>(args: SelectSubset<T, BillInstancesDeleteArgs<ExtArgs>>): Prisma__BillInstancesClient<$Result.GetResult<Prisma.$BillInstancesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BillInstances.
     * @param {BillInstancesUpdateArgs} args - Arguments to update one BillInstances.
     * @example
     * // Update one BillInstances
     * const billInstances = await prisma.billInstances.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BillInstancesUpdateArgs>(args: SelectSubset<T, BillInstancesUpdateArgs<ExtArgs>>): Prisma__BillInstancesClient<$Result.GetResult<Prisma.$BillInstancesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BillInstances.
     * @param {BillInstancesDeleteManyArgs} args - Arguments to filter BillInstances to delete.
     * @example
     * // Delete a few BillInstances
     * const { count } = await prisma.billInstances.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BillInstancesDeleteManyArgs>(args?: SelectSubset<T, BillInstancesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BillInstances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillInstancesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BillInstances
     * const billInstances = await prisma.billInstances.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BillInstancesUpdateManyArgs>(args: SelectSubset<T, BillInstancesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BillInstances and returns the data updated in the database.
     * @param {BillInstancesUpdateManyAndReturnArgs} args - Arguments to update many BillInstances.
     * @example
     * // Update many BillInstances
     * const billInstances = await prisma.billInstances.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BillInstances and only return the `id`
     * const billInstancesWithIdOnly = await prisma.billInstances.updateManyAndReturn({
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
    updateManyAndReturn<T extends BillInstancesUpdateManyAndReturnArgs>(args: SelectSubset<T, BillInstancesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BillInstancesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BillInstances.
     * @param {BillInstancesUpsertArgs} args - Arguments to update or create a BillInstances.
     * @example
     * // Update or create a BillInstances
     * const billInstances = await prisma.billInstances.upsert({
     *   create: {
     *     // ... data to create a BillInstances
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BillInstances we want to update
     *   }
     * })
     */
    upsert<T extends BillInstancesUpsertArgs>(args: SelectSubset<T, BillInstancesUpsertArgs<ExtArgs>>): Prisma__BillInstancesClient<$Result.GetResult<Prisma.$BillInstancesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BillInstances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillInstancesCountArgs} args - Arguments to filter BillInstances to count.
     * @example
     * // Count the number of BillInstances
     * const count = await prisma.billInstances.count({
     *   where: {
     *     // ... the filter for the BillInstances we want to count
     *   }
     * })
    **/
    count<T extends BillInstancesCountArgs>(
      args?: Subset<T, BillInstancesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BillInstancesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BillInstances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillInstancesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BillInstancesAggregateArgs>(args: Subset<T, BillInstancesAggregateArgs>): Prisma.PrismaPromise<GetBillInstancesAggregateType<T>>

    /**
     * Group by BillInstances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillInstancesGroupByArgs} args - Group by arguments.
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
      T extends BillInstancesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BillInstancesGroupByArgs['orderBy'] }
        : { orderBy?: BillInstancesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BillInstancesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBillInstancesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BillInstances model
   */
  readonly fields: BillInstancesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BillInstances.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BillInstancesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    recurringBill<T extends RecurringBillsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RecurringBillsDefaultArgs<ExtArgs>>): Prisma__RecurringBillsClient<$Result.GetResult<Prisma.$RecurringBillsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    transaction<T extends BillInstances$transactionArgs<ExtArgs> = {}>(args?: Subset<T, BillInstances$transactionArgs<ExtArgs>>): Prisma__TransactionsClient<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the BillInstances model
   */
  interface BillInstancesFieldRefs {
    readonly id: FieldRef<"BillInstances", 'String'>
    readonly recurringBillId: FieldRef<"BillInstances", 'String'>
    readonly referenceMonth: FieldRef<"BillInstances", 'DateTime'>
    readonly amount: FieldRef<"BillInstances", 'Int'>
    readonly dueDate: FieldRef<"BillInstances", 'DateTime'>
    readonly isPaid: FieldRef<"BillInstances", 'Boolean'>
    readonly paidAt: FieldRef<"BillInstances", 'DateTime'>
    readonly createdAt: FieldRef<"BillInstances", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BillInstances findUnique
   */
  export type BillInstancesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillInstances
     */
    select?: BillInstancesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillInstances
     */
    omit?: BillInstancesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillInstancesInclude<ExtArgs> | null
    /**
     * Filter, which BillInstances to fetch.
     */
    where: BillInstancesWhereUniqueInput
  }

  /**
   * BillInstances findUniqueOrThrow
   */
  export type BillInstancesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillInstances
     */
    select?: BillInstancesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillInstances
     */
    omit?: BillInstancesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillInstancesInclude<ExtArgs> | null
    /**
     * Filter, which BillInstances to fetch.
     */
    where: BillInstancesWhereUniqueInput
  }

  /**
   * BillInstances findFirst
   */
  export type BillInstancesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillInstances
     */
    select?: BillInstancesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillInstances
     */
    omit?: BillInstancesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillInstancesInclude<ExtArgs> | null
    /**
     * Filter, which BillInstances to fetch.
     */
    where?: BillInstancesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BillInstances to fetch.
     */
    orderBy?: BillInstancesOrderByWithRelationInput | BillInstancesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BillInstances.
     */
    cursor?: BillInstancesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BillInstances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BillInstances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BillInstances.
     */
    distinct?: BillInstancesScalarFieldEnum | BillInstancesScalarFieldEnum[]
  }

  /**
   * BillInstances findFirstOrThrow
   */
  export type BillInstancesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillInstances
     */
    select?: BillInstancesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillInstances
     */
    omit?: BillInstancesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillInstancesInclude<ExtArgs> | null
    /**
     * Filter, which BillInstances to fetch.
     */
    where?: BillInstancesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BillInstances to fetch.
     */
    orderBy?: BillInstancesOrderByWithRelationInput | BillInstancesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BillInstances.
     */
    cursor?: BillInstancesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BillInstances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BillInstances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BillInstances.
     */
    distinct?: BillInstancesScalarFieldEnum | BillInstancesScalarFieldEnum[]
  }

  /**
   * BillInstances findMany
   */
  export type BillInstancesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillInstances
     */
    select?: BillInstancesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillInstances
     */
    omit?: BillInstancesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillInstancesInclude<ExtArgs> | null
    /**
     * Filter, which BillInstances to fetch.
     */
    where?: BillInstancesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BillInstances to fetch.
     */
    orderBy?: BillInstancesOrderByWithRelationInput | BillInstancesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BillInstances.
     */
    cursor?: BillInstancesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BillInstances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BillInstances.
     */
    skip?: number
    distinct?: BillInstancesScalarFieldEnum | BillInstancesScalarFieldEnum[]
  }

  /**
   * BillInstances create
   */
  export type BillInstancesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillInstances
     */
    select?: BillInstancesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillInstances
     */
    omit?: BillInstancesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillInstancesInclude<ExtArgs> | null
    /**
     * The data needed to create a BillInstances.
     */
    data: XOR<BillInstancesCreateInput, BillInstancesUncheckedCreateInput>
  }

  /**
   * BillInstances createMany
   */
  export type BillInstancesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BillInstances.
     */
    data: BillInstancesCreateManyInput | BillInstancesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BillInstances createManyAndReturn
   */
  export type BillInstancesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillInstances
     */
    select?: BillInstancesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BillInstances
     */
    omit?: BillInstancesOmit<ExtArgs> | null
    /**
     * The data used to create many BillInstances.
     */
    data: BillInstancesCreateManyInput | BillInstancesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillInstancesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BillInstances update
   */
  export type BillInstancesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillInstances
     */
    select?: BillInstancesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillInstances
     */
    omit?: BillInstancesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillInstancesInclude<ExtArgs> | null
    /**
     * The data needed to update a BillInstances.
     */
    data: XOR<BillInstancesUpdateInput, BillInstancesUncheckedUpdateInput>
    /**
     * Choose, which BillInstances to update.
     */
    where: BillInstancesWhereUniqueInput
  }

  /**
   * BillInstances updateMany
   */
  export type BillInstancesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BillInstances.
     */
    data: XOR<BillInstancesUpdateManyMutationInput, BillInstancesUncheckedUpdateManyInput>
    /**
     * Filter which BillInstances to update
     */
    where?: BillInstancesWhereInput
    /**
     * Limit how many BillInstances to update.
     */
    limit?: number
  }

  /**
   * BillInstances updateManyAndReturn
   */
  export type BillInstancesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillInstances
     */
    select?: BillInstancesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BillInstances
     */
    omit?: BillInstancesOmit<ExtArgs> | null
    /**
     * The data used to update BillInstances.
     */
    data: XOR<BillInstancesUpdateManyMutationInput, BillInstancesUncheckedUpdateManyInput>
    /**
     * Filter which BillInstances to update
     */
    where?: BillInstancesWhereInput
    /**
     * Limit how many BillInstances to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillInstancesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BillInstances upsert
   */
  export type BillInstancesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillInstances
     */
    select?: BillInstancesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillInstances
     */
    omit?: BillInstancesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillInstancesInclude<ExtArgs> | null
    /**
     * The filter to search for the BillInstances to update in case it exists.
     */
    where: BillInstancesWhereUniqueInput
    /**
     * In case the BillInstances found by the `where` argument doesn't exist, create a new BillInstances with this data.
     */
    create: XOR<BillInstancesCreateInput, BillInstancesUncheckedCreateInput>
    /**
     * In case the BillInstances was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BillInstancesUpdateInput, BillInstancesUncheckedUpdateInput>
  }

  /**
   * BillInstances delete
   */
  export type BillInstancesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillInstances
     */
    select?: BillInstancesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillInstances
     */
    omit?: BillInstancesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillInstancesInclude<ExtArgs> | null
    /**
     * Filter which BillInstances to delete.
     */
    where: BillInstancesWhereUniqueInput
  }

  /**
   * BillInstances deleteMany
   */
  export type BillInstancesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BillInstances to delete
     */
    where?: BillInstancesWhereInput
    /**
     * Limit how many BillInstances to delete.
     */
    limit?: number
  }

  /**
   * BillInstances.transaction
   */
  export type BillInstances$transactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transactions
     */
    omit?: TransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    where?: TransactionsWhereInput
  }

  /**
   * BillInstances without action
   */
  export type BillInstancesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillInstances
     */
    select?: BillInstancesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillInstances
     */
    omit?: BillInstancesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillInstancesInclude<ExtArgs> | null
  }


  /**
   * Model Wallets
   */

  export type AggregateWallets = {
    _count: WalletsCountAggregateOutputType | null
    _avg: WalletsAvgAggregateOutputType | null
    _sum: WalletsSumAggregateOutputType | null
    _min: WalletsMinAggregateOutputType | null
    _max: WalletsMaxAggregateOutputType | null
  }

  export type WalletsAvgAggregateOutputType = {
    balance: number | null
  }

  export type WalletsSumAggregateOutputType = {
    balance: number | null
  }

  export type WalletsMinAggregateOutputType = {
    id: string | null
    name: string | null
    balance: number | null
    walletType: $Enums.WALLET_TYPE | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WalletsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    balance: number | null
    walletType: $Enums.WALLET_TYPE | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WalletsCountAggregateOutputType = {
    id: number
    name: number
    balance: number
    walletType: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WalletsAvgAggregateInputType = {
    balance?: true
  }

  export type WalletsSumAggregateInputType = {
    balance?: true
  }

  export type WalletsMinAggregateInputType = {
    id?: true
    name?: true
    balance?: true
    walletType?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WalletsMaxAggregateInputType = {
    id?: true
    name?: true
    balance?: true
    walletType?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WalletsCountAggregateInputType = {
    id?: true
    name?: true
    balance?: true
    walletType?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WalletsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Wallets to aggregate.
     */
    where?: WalletsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wallets to fetch.
     */
    orderBy?: WalletsOrderByWithRelationInput | WalletsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WalletsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wallets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Wallets
    **/
    _count?: true | WalletsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WalletsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WalletsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WalletsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WalletsMaxAggregateInputType
  }

  export type GetWalletsAggregateType<T extends WalletsAggregateArgs> = {
        [P in keyof T & keyof AggregateWallets]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWallets[P]>
      : GetScalarType<T[P], AggregateWallets[P]>
  }




  export type WalletsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WalletsWhereInput
    orderBy?: WalletsOrderByWithAggregationInput | WalletsOrderByWithAggregationInput[]
    by: WalletsScalarFieldEnum[] | WalletsScalarFieldEnum
    having?: WalletsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WalletsCountAggregateInputType | true
    _avg?: WalletsAvgAggregateInputType
    _sum?: WalletsSumAggregateInputType
    _min?: WalletsMinAggregateInputType
    _max?: WalletsMaxAggregateInputType
  }

  export type WalletsGroupByOutputType = {
    id: string
    name: string
    balance: number
    walletType: $Enums.WALLET_TYPE
    createdAt: Date
    updatedAt: Date
    _count: WalletsCountAggregateOutputType | null
    _avg: WalletsAvgAggregateOutputType | null
    _sum: WalletsSumAggregateOutputType | null
    _min: WalletsMinAggregateOutputType | null
    _max: WalletsMaxAggregateOutputType | null
  }

  type GetWalletsGroupByPayload<T extends WalletsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WalletsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WalletsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WalletsGroupByOutputType[P]>
            : GetScalarType<T[P], WalletsGroupByOutputType[P]>
        }
      >
    >


  export type WalletsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    balance?: boolean
    walletType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Transaction?: boolean | Wallets$TransactionArgs<ExtArgs>
    _count?: boolean | WalletsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wallets"]>

  export type WalletsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    balance?: boolean
    walletType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["wallets"]>

  export type WalletsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    balance?: boolean
    walletType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["wallets"]>

  export type WalletsSelectScalar = {
    id?: boolean
    name?: boolean
    balance?: boolean
    walletType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WalletsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "balance" | "walletType" | "createdAt" | "updatedAt", ExtArgs["result"]["wallets"]>
  export type WalletsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Transaction?: boolean | Wallets$TransactionArgs<ExtArgs>
    _count?: boolean | WalletsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WalletsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type WalletsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $WalletsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Wallets"
    objects: {
      Transaction: Prisma.$TransactionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      balance: number
      walletType: $Enums.WALLET_TYPE
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["wallets"]>
    composites: {}
  }

  type WalletsGetPayload<S extends boolean | null | undefined | WalletsDefaultArgs> = $Result.GetResult<Prisma.$WalletsPayload, S>

  type WalletsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WalletsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WalletsCountAggregateInputType | true
    }

  export interface WalletsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Wallets'], meta: { name: 'Wallets' } }
    /**
     * Find zero or one Wallets that matches the filter.
     * @param {WalletsFindUniqueArgs} args - Arguments to find a Wallets
     * @example
     * // Get one Wallets
     * const wallets = await prisma.wallets.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WalletsFindUniqueArgs>(args: SelectSubset<T, WalletsFindUniqueArgs<ExtArgs>>): Prisma__WalletsClient<$Result.GetResult<Prisma.$WalletsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Wallets that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WalletsFindUniqueOrThrowArgs} args - Arguments to find a Wallets
     * @example
     * // Get one Wallets
     * const wallets = await prisma.wallets.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WalletsFindUniqueOrThrowArgs>(args: SelectSubset<T, WalletsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WalletsClient<$Result.GetResult<Prisma.$WalletsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Wallets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletsFindFirstArgs} args - Arguments to find a Wallets
     * @example
     * // Get one Wallets
     * const wallets = await prisma.wallets.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WalletsFindFirstArgs>(args?: SelectSubset<T, WalletsFindFirstArgs<ExtArgs>>): Prisma__WalletsClient<$Result.GetResult<Prisma.$WalletsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Wallets that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletsFindFirstOrThrowArgs} args - Arguments to find a Wallets
     * @example
     * // Get one Wallets
     * const wallets = await prisma.wallets.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WalletsFindFirstOrThrowArgs>(args?: SelectSubset<T, WalletsFindFirstOrThrowArgs<ExtArgs>>): Prisma__WalletsClient<$Result.GetResult<Prisma.$WalletsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Wallets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Wallets
     * const wallets = await prisma.wallets.findMany()
     * 
     * // Get first 10 Wallets
     * const wallets = await prisma.wallets.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const walletsWithIdOnly = await prisma.wallets.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WalletsFindManyArgs>(args?: SelectSubset<T, WalletsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WalletsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Wallets.
     * @param {WalletsCreateArgs} args - Arguments to create a Wallets.
     * @example
     * // Create one Wallets
     * const Wallets = await prisma.wallets.create({
     *   data: {
     *     // ... data to create a Wallets
     *   }
     * })
     * 
     */
    create<T extends WalletsCreateArgs>(args: SelectSubset<T, WalletsCreateArgs<ExtArgs>>): Prisma__WalletsClient<$Result.GetResult<Prisma.$WalletsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Wallets.
     * @param {WalletsCreateManyArgs} args - Arguments to create many Wallets.
     * @example
     * // Create many Wallets
     * const wallets = await prisma.wallets.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WalletsCreateManyArgs>(args?: SelectSubset<T, WalletsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Wallets and returns the data saved in the database.
     * @param {WalletsCreateManyAndReturnArgs} args - Arguments to create many Wallets.
     * @example
     * // Create many Wallets
     * const wallets = await prisma.wallets.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Wallets and only return the `id`
     * const walletsWithIdOnly = await prisma.wallets.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WalletsCreateManyAndReturnArgs>(args?: SelectSubset<T, WalletsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WalletsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Wallets.
     * @param {WalletsDeleteArgs} args - Arguments to delete one Wallets.
     * @example
     * // Delete one Wallets
     * const Wallets = await prisma.wallets.delete({
     *   where: {
     *     // ... filter to delete one Wallets
     *   }
     * })
     * 
     */
    delete<T extends WalletsDeleteArgs>(args: SelectSubset<T, WalletsDeleteArgs<ExtArgs>>): Prisma__WalletsClient<$Result.GetResult<Prisma.$WalletsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Wallets.
     * @param {WalletsUpdateArgs} args - Arguments to update one Wallets.
     * @example
     * // Update one Wallets
     * const wallets = await prisma.wallets.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WalletsUpdateArgs>(args: SelectSubset<T, WalletsUpdateArgs<ExtArgs>>): Prisma__WalletsClient<$Result.GetResult<Prisma.$WalletsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Wallets.
     * @param {WalletsDeleteManyArgs} args - Arguments to filter Wallets to delete.
     * @example
     * // Delete a few Wallets
     * const { count } = await prisma.wallets.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WalletsDeleteManyArgs>(args?: SelectSubset<T, WalletsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Wallets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Wallets
     * const wallets = await prisma.wallets.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WalletsUpdateManyArgs>(args: SelectSubset<T, WalletsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Wallets and returns the data updated in the database.
     * @param {WalletsUpdateManyAndReturnArgs} args - Arguments to update many Wallets.
     * @example
     * // Update many Wallets
     * const wallets = await prisma.wallets.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Wallets and only return the `id`
     * const walletsWithIdOnly = await prisma.wallets.updateManyAndReturn({
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
    updateManyAndReturn<T extends WalletsUpdateManyAndReturnArgs>(args: SelectSubset<T, WalletsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WalletsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Wallets.
     * @param {WalletsUpsertArgs} args - Arguments to update or create a Wallets.
     * @example
     * // Update or create a Wallets
     * const wallets = await prisma.wallets.upsert({
     *   create: {
     *     // ... data to create a Wallets
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Wallets we want to update
     *   }
     * })
     */
    upsert<T extends WalletsUpsertArgs>(args: SelectSubset<T, WalletsUpsertArgs<ExtArgs>>): Prisma__WalletsClient<$Result.GetResult<Prisma.$WalletsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Wallets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletsCountArgs} args - Arguments to filter Wallets to count.
     * @example
     * // Count the number of Wallets
     * const count = await prisma.wallets.count({
     *   where: {
     *     // ... the filter for the Wallets we want to count
     *   }
     * })
    **/
    count<T extends WalletsCountArgs>(
      args?: Subset<T, WalletsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WalletsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Wallets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WalletsAggregateArgs>(args: Subset<T, WalletsAggregateArgs>): Prisma.PrismaPromise<GetWalletsAggregateType<T>>

    /**
     * Group by Wallets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletsGroupByArgs} args - Group by arguments.
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
      T extends WalletsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WalletsGroupByArgs['orderBy'] }
        : { orderBy?: WalletsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WalletsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWalletsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Wallets model
   */
  readonly fields: WalletsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Wallets.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WalletsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Transaction<T extends Wallets$TransactionArgs<ExtArgs> = {}>(args?: Subset<T, Wallets$TransactionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Wallets model
   */
  interface WalletsFieldRefs {
    readonly id: FieldRef<"Wallets", 'String'>
    readonly name: FieldRef<"Wallets", 'String'>
    readonly balance: FieldRef<"Wallets", 'Int'>
    readonly walletType: FieldRef<"Wallets", 'WALLET_TYPE'>
    readonly createdAt: FieldRef<"Wallets", 'DateTime'>
    readonly updatedAt: FieldRef<"Wallets", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Wallets findUnique
   */
  export type WalletsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallets
     */
    select?: WalletsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallets
     */
    omit?: WalletsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletsInclude<ExtArgs> | null
    /**
     * Filter, which Wallets to fetch.
     */
    where: WalletsWhereUniqueInput
  }

  /**
   * Wallets findUniqueOrThrow
   */
  export type WalletsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallets
     */
    select?: WalletsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallets
     */
    omit?: WalletsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletsInclude<ExtArgs> | null
    /**
     * Filter, which Wallets to fetch.
     */
    where: WalletsWhereUniqueInput
  }

  /**
   * Wallets findFirst
   */
  export type WalletsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallets
     */
    select?: WalletsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallets
     */
    omit?: WalletsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletsInclude<ExtArgs> | null
    /**
     * Filter, which Wallets to fetch.
     */
    where?: WalletsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wallets to fetch.
     */
    orderBy?: WalletsOrderByWithRelationInput | WalletsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Wallets.
     */
    cursor?: WalletsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wallets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Wallets.
     */
    distinct?: WalletsScalarFieldEnum | WalletsScalarFieldEnum[]
  }

  /**
   * Wallets findFirstOrThrow
   */
  export type WalletsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallets
     */
    select?: WalletsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallets
     */
    omit?: WalletsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletsInclude<ExtArgs> | null
    /**
     * Filter, which Wallets to fetch.
     */
    where?: WalletsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wallets to fetch.
     */
    orderBy?: WalletsOrderByWithRelationInput | WalletsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Wallets.
     */
    cursor?: WalletsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wallets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Wallets.
     */
    distinct?: WalletsScalarFieldEnum | WalletsScalarFieldEnum[]
  }

  /**
   * Wallets findMany
   */
  export type WalletsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallets
     */
    select?: WalletsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallets
     */
    omit?: WalletsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletsInclude<ExtArgs> | null
    /**
     * Filter, which Wallets to fetch.
     */
    where?: WalletsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wallets to fetch.
     */
    orderBy?: WalletsOrderByWithRelationInput | WalletsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Wallets.
     */
    cursor?: WalletsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wallets.
     */
    skip?: number
    distinct?: WalletsScalarFieldEnum | WalletsScalarFieldEnum[]
  }

  /**
   * Wallets create
   */
  export type WalletsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallets
     */
    select?: WalletsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallets
     */
    omit?: WalletsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletsInclude<ExtArgs> | null
    /**
     * The data needed to create a Wallets.
     */
    data: XOR<WalletsCreateInput, WalletsUncheckedCreateInput>
  }

  /**
   * Wallets createMany
   */
  export type WalletsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Wallets.
     */
    data: WalletsCreateManyInput | WalletsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Wallets createManyAndReturn
   */
  export type WalletsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallets
     */
    select?: WalletsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Wallets
     */
    omit?: WalletsOmit<ExtArgs> | null
    /**
     * The data used to create many Wallets.
     */
    data: WalletsCreateManyInput | WalletsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Wallets update
   */
  export type WalletsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallets
     */
    select?: WalletsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallets
     */
    omit?: WalletsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletsInclude<ExtArgs> | null
    /**
     * The data needed to update a Wallets.
     */
    data: XOR<WalletsUpdateInput, WalletsUncheckedUpdateInput>
    /**
     * Choose, which Wallets to update.
     */
    where: WalletsWhereUniqueInput
  }

  /**
   * Wallets updateMany
   */
  export type WalletsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Wallets.
     */
    data: XOR<WalletsUpdateManyMutationInput, WalletsUncheckedUpdateManyInput>
    /**
     * Filter which Wallets to update
     */
    where?: WalletsWhereInput
    /**
     * Limit how many Wallets to update.
     */
    limit?: number
  }

  /**
   * Wallets updateManyAndReturn
   */
  export type WalletsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallets
     */
    select?: WalletsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Wallets
     */
    omit?: WalletsOmit<ExtArgs> | null
    /**
     * The data used to update Wallets.
     */
    data: XOR<WalletsUpdateManyMutationInput, WalletsUncheckedUpdateManyInput>
    /**
     * Filter which Wallets to update
     */
    where?: WalletsWhereInput
    /**
     * Limit how many Wallets to update.
     */
    limit?: number
  }

  /**
   * Wallets upsert
   */
  export type WalletsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallets
     */
    select?: WalletsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallets
     */
    omit?: WalletsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletsInclude<ExtArgs> | null
    /**
     * The filter to search for the Wallets to update in case it exists.
     */
    where: WalletsWhereUniqueInput
    /**
     * In case the Wallets found by the `where` argument doesn't exist, create a new Wallets with this data.
     */
    create: XOR<WalletsCreateInput, WalletsUncheckedCreateInput>
    /**
     * In case the Wallets was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WalletsUpdateInput, WalletsUncheckedUpdateInput>
  }

  /**
   * Wallets delete
   */
  export type WalletsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallets
     */
    select?: WalletsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallets
     */
    omit?: WalletsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletsInclude<ExtArgs> | null
    /**
     * Filter which Wallets to delete.
     */
    where: WalletsWhereUniqueInput
  }

  /**
   * Wallets deleteMany
   */
  export type WalletsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Wallets to delete
     */
    where?: WalletsWhereInput
    /**
     * Limit how many Wallets to delete.
     */
    limit?: number
  }

  /**
   * Wallets.Transaction
   */
  export type Wallets$TransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transactions
     */
    omit?: TransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    where?: TransactionsWhereInput
    orderBy?: TransactionsOrderByWithRelationInput | TransactionsOrderByWithRelationInput[]
    cursor?: TransactionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[]
  }

  /**
   * Wallets without action
   */
  export type WalletsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallets
     */
    select?: WalletsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallets
     */
    omit?: WalletsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletsInclude<ExtArgs> | null
  }


  /**
   * Model Transactions
   */

  export type AggregateTransactions = {
    _count: TransactionsCountAggregateOutputType | null
    _avg: TransactionsAvgAggregateOutputType | null
    _sum: TransactionsSumAggregateOutputType | null
    _min: TransactionsMinAggregateOutputType | null
    _max: TransactionsMaxAggregateOutputType | null
  }

  export type TransactionsAvgAggregateOutputType = {
    amount: number | null
  }

  export type TransactionsSumAggregateOutputType = {
    amount: number | null
  }

  export type TransactionsMinAggregateOutputType = {
    id: string | null
    walletId: string | null
    billInstanceId: string | null
    amount: number | null
    type: $Enums.TransactionType | null
    category: $Enums.TRANSACTION_CATEGORY | null
    createdAt: Date | null
    updatedAt: Date | null
    description: string | null
  }

  export type TransactionsMaxAggregateOutputType = {
    id: string | null
    walletId: string | null
    billInstanceId: string | null
    amount: number | null
    type: $Enums.TransactionType | null
    category: $Enums.TRANSACTION_CATEGORY | null
    createdAt: Date | null
    updatedAt: Date | null
    description: string | null
  }

  export type TransactionsCountAggregateOutputType = {
    id: number
    walletId: number
    billInstanceId: number
    amount: number
    type: number
    category: number
    createdAt: number
    updatedAt: number
    description: number
    _all: number
  }


  export type TransactionsAvgAggregateInputType = {
    amount?: true
  }

  export type TransactionsSumAggregateInputType = {
    amount?: true
  }

  export type TransactionsMinAggregateInputType = {
    id?: true
    walletId?: true
    billInstanceId?: true
    amount?: true
    type?: true
    category?: true
    createdAt?: true
    updatedAt?: true
    description?: true
  }

  export type TransactionsMaxAggregateInputType = {
    id?: true
    walletId?: true
    billInstanceId?: true
    amount?: true
    type?: true
    category?: true
    createdAt?: true
    updatedAt?: true
    description?: true
  }

  export type TransactionsCountAggregateInputType = {
    id?: true
    walletId?: true
    billInstanceId?: true
    amount?: true
    type?: true
    category?: true
    createdAt?: true
    updatedAt?: true
    description?: true
    _all?: true
  }

  export type TransactionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transactions to aggregate.
     */
    where?: TransactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionsOrderByWithRelationInput | TransactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transactions
    **/
    _count?: true | TransactionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionsMaxAggregateInputType
  }

  export type GetTransactionsAggregateType<T extends TransactionsAggregateArgs> = {
        [P in keyof T & keyof AggregateTransactions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransactions[P]>
      : GetScalarType<T[P], AggregateTransactions[P]>
  }




  export type TransactionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionsWhereInput
    orderBy?: TransactionsOrderByWithAggregationInput | TransactionsOrderByWithAggregationInput[]
    by: TransactionsScalarFieldEnum[] | TransactionsScalarFieldEnum
    having?: TransactionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionsCountAggregateInputType | true
    _avg?: TransactionsAvgAggregateInputType
    _sum?: TransactionsSumAggregateInputType
    _min?: TransactionsMinAggregateInputType
    _max?: TransactionsMaxAggregateInputType
  }

  export type TransactionsGroupByOutputType = {
    id: string
    walletId: string
    billInstanceId: string | null
    amount: number
    type: $Enums.TransactionType
    category: $Enums.TRANSACTION_CATEGORY | null
    createdAt: Date
    updatedAt: Date
    description: string | null
    _count: TransactionsCountAggregateOutputType | null
    _avg: TransactionsAvgAggregateOutputType | null
    _sum: TransactionsSumAggregateOutputType | null
    _min: TransactionsMinAggregateOutputType | null
    _max: TransactionsMaxAggregateOutputType | null
  }

  type GetTransactionsGroupByPayload<T extends TransactionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionsGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionsGroupByOutputType[P]>
        }
      >
    >


  export type TransactionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    walletId?: boolean
    billInstanceId?: boolean
    amount?: boolean
    type?: boolean
    category?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    description?: boolean
    wallet?: boolean | WalletsDefaultArgs<ExtArgs>
    billInstance?: boolean | Transactions$billInstanceArgs<ExtArgs>
  }, ExtArgs["result"]["transactions"]>

  export type TransactionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    walletId?: boolean
    billInstanceId?: boolean
    amount?: boolean
    type?: boolean
    category?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    description?: boolean
    wallet?: boolean | WalletsDefaultArgs<ExtArgs>
    billInstance?: boolean | Transactions$billInstanceArgs<ExtArgs>
  }, ExtArgs["result"]["transactions"]>

  export type TransactionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    walletId?: boolean
    billInstanceId?: boolean
    amount?: boolean
    type?: boolean
    category?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    description?: boolean
    wallet?: boolean | WalletsDefaultArgs<ExtArgs>
    billInstance?: boolean | Transactions$billInstanceArgs<ExtArgs>
  }, ExtArgs["result"]["transactions"]>

  export type TransactionsSelectScalar = {
    id?: boolean
    walletId?: boolean
    billInstanceId?: boolean
    amount?: boolean
    type?: boolean
    category?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    description?: boolean
  }

  export type TransactionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "walletId" | "billInstanceId" | "amount" | "type" | "category" | "createdAt" | "updatedAt" | "description", ExtArgs["result"]["transactions"]>
  export type TransactionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wallet?: boolean | WalletsDefaultArgs<ExtArgs>
    billInstance?: boolean | Transactions$billInstanceArgs<ExtArgs>
  }
  export type TransactionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wallet?: boolean | WalletsDefaultArgs<ExtArgs>
    billInstance?: boolean | Transactions$billInstanceArgs<ExtArgs>
  }
  export type TransactionsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wallet?: boolean | WalletsDefaultArgs<ExtArgs>
    billInstance?: boolean | Transactions$billInstanceArgs<ExtArgs>
  }

  export type $TransactionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transactions"
    objects: {
      wallet: Prisma.$WalletsPayload<ExtArgs>
      billInstance: Prisma.$BillInstancesPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      walletId: string
      billInstanceId: string | null
      amount: number
      type: $Enums.TransactionType
      category: $Enums.TRANSACTION_CATEGORY | null
      createdAt: Date
      updatedAt: Date
      description: string | null
    }, ExtArgs["result"]["transactions"]>
    composites: {}
  }

  type TransactionsGetPayload<S extends boolean | null | undefined | TransactionsDefaultArgs> = $Result.GetResult<Prisma.$TransactionsPayload, S>

  type TransactionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransactionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransactionsCountAggregateInputType | true
    }

  export interface TransactionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transactions'], meta: { name: 'Transactions' } }
    /**
     * Find zero or one Transactions that matches the filter.
     * @param {TransactionsFindUniqueArgs} args - Arguments to find a Transactions
     * @example
     * // Get one Transactions
     * const transactions = await prisma.transactions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransactionsFindUniqueArgs>(args: SelectSubset<T, TransactionsFindUniqueArgs<ExtArgs>>): Prisma__TransactionsClient<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transactions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransactionsFindUniqueOrThrowArgs} args - Arguments to find a Transactions
     * @example
     * // Get one Transactions
     * const transactions = await prisma.transactions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransactionsFindUniqueOrThrowArgs>(args: SelectSubset<T, TransactionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransactionsClient<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionsFindFirstArgs} args - Arguments to find a Transactions
     * @example
     * // Get one Transactions
     * const transactions = await prisma.transactions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransactionsFindFirstArgs>(args?: SelectSubset<T, TransactionsFindFirstArgs<ExtArgs>>): Prisma__TransactionsClient<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transactions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionsFindFirstOrThrowArgs} args - Arguments to find a Transactions
     * @example
     * // Get one Transactions
     * const transactions = await prisma.transactions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransactionsFindFirstOrThrowArgs>(args?: SelectSubset<T, TransactionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransactionsClient<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transactions.findMany()
     * 
     * // Get first 10 Transactions
     * const transactions = await prisma.transactions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionsWithIdOnly = await prisma.transactions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransactionsFindManyArgs>(args?: SelectSubset<T, TransactionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transactions.
     * @param {TransactionsCreateArgs} args - Arguments to create a Transactions.
     * @example
     * // Create one Transactions
     * const Transactions = await prisma.transactions.create({
     *   data: {
     *     // ... data to create a Transactions
     *   }
     * })
     * 
     */
    create<T extends TransactionsCreateArgs>(args: SelectSubset<T, TransactionsCreateArgs<ExtArgs>>): Prisma__TransactionsClient<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transactions.
     * @param {TransactionsCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transactions = await prisma.transactions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransactionsCreateManyArgs>(args?: SelectSubset<T, TransactionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transactions and returns the data saved in the database.
     * @param {TransactionsCreateManyAndReturnArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transactions = await prisma.transactions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transactions and only return the `id`
     * const transactionsWithIdOnly = await prisma.transactions.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransactionsCreateManyAndReturnArgs>(args?: SelectSubset<T, TransactionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Transactions.
     * @param {TransactionsDeleteArgs} args - Arguments to delete one Transactions.
     * @example
     * // Delete one Transactions
     * const Transactions = await prisma.transactions.delete({
     *   where: {
     *     // ... filter to delete one Transactions
     *   }
     * })
     * 
     */
    delete<T extends TransactionsDeleteArgs>(args: SelectSubset<T, TransactionsDeleteArgs<ExtArgs>>): Prisma__TransactionsClient<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transactions.
     * @param {TransactionsUpdateArgs} args - Arguments to update one Transactions.
     * @example
     * // Update one Transactions
     * const transactions = await prisma.transactions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransactionsUpdateArgs>(args: SelectSubset<T, TransactionsUpdateArgs<ExtArgs>>): Prisma__TransactionsClient<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transactions.
     * @param {TransactionsDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transactions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransactionsDeleteManyArgs>(args?: SelectSubset<T, TransactionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transactions = await prisma.transactions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransactionsUpdateManyArgs>(args: SelectSubset<T, TransactionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions and returns the data updated in the database.
     * @param {TransactionsUpdateManyAndReturnArgs} args - Arguments to update many Transactions.
     * @example
     * // Update many Transactions
     * const transactions = await prisma.transactions.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Transactions and only return the `id`
     * const transactionsWithIdOnly = await prisma.transactions.updateManyAndReturn({
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
    updateManyAndReturn<T extends TransactionsUpdateManyAndReturnArgs>(args: SelectSubset<T, TransactionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Transactions.
     * @param {TransactionsUpsertArgs} args - Arguments to update or create a Transactions.
     * @example
     * // Update or create a Transactions
     * const transactions = await prisma.transactions.upsert({
     *   create: {
     *     // ... data to create a Transactions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transactions we want to update
     *   }
     * })
     */
    upsert<T extends TransactionsUpsertArgs>(args: SelectSubset<T, TransactionsUpsertArgs<ExtArgs>>): Prisma__TransactionsClient<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionsCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transactions.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends TransactionsCountArgs>(
      args?: Subset<T, TransactionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TransactionsAggregateArgs>(args: Subset<T, TransactionsAggregateArgs>): Prisma.PrismaPromise<GetTransactionsAggregateType<T>>

    /**
     * Group by Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionsGroupByArgs} args - Group by arguments.
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
      T extends TransactionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionsGroupByArgs['orderBy'] }
        : { orderBy?: TransactionsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TransactionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transactions model
   */
  readonly fields: TransactionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transactions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    wallet<T extends WalletsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WalletsDefaultArgs<ExtArgs>>): Prisma__WalletsClient<$Result.GetResult<Prisma.$WalletsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    billInstance<T extends Transactions$billInstanceArgs<ExtArgs> = {}>(args?: Subset<T, Transactions$billInstanceArgs<ExtArgs>>): Prisma__BillInstancesClient<$Result.GetResult<Prisma.$BillInstancesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Transactions model
   */
  interface TransactionsFieldRefs {
    readonly id: FieldRef<"Transactions", 'String'>
    readonly walletId: FieldRef<"Transactions", 'String'>
    readonly billInstanceId: FieldRef<"Transactions", 'String'>
    readonly amount: FieldRef<"Transactions", 'Int'>
    readonly type: FieldRef<"Transactions", 'TransactionType'>
    readonly category: FieldRef<"Transactions", 'TRANSACTION_CATEGORY'>
    readonly createdAt: FieldRef<"Transactions", 'DateTime'>
    readonly updatedAt: FieldRef<"Transactions", 'DateTime'>
    readonly description: FieldRef<"Transactions", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Transactions findUnique
   */
  export type TransactionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transactions
     */
    omit?: TransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where: TransactionsWhereUniqueInput
  }

  /**
   * Transactions findUniqueOrThrow
   */
  export type TransactionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transactions
     */
    omit?: TransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where: TransactionsWhereUniqueInput
  }

  /**
   * Transactions findFirst
   */
  export type TransactionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transactions
     */
    omit?: TransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionsOrderByWithRelationInput | TransactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[]
  }

  /**
   * Transactions findFirstOrThrow
   */
  export type TransactionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transactions
     */
    omit?: TransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionsOrderByWithRelationInput | TransactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[]
  }

  /**
   * Transactions findMany
   */
  export type TransactionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transactions
     */
    omit?: TransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionsOrderByWithRelationInput | TransactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transactions.
     */
    cursor?: TransactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[]
  }

  /**
   * Transactions create
   */
  export type TransactionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transactions
     */
    omit?: TransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    /**
     * The data needed to create a Transactions.
     */
    data: XOR<TransactionsCreateInput, TransactionsUncheckedCreateInput>
  }

  /**
   * Transactions createMany
   */
  export type TransactionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transactions.
     */
    data: TransactionsCreateManyInput | TransactionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transactions createManyAndReturn
   */
  export type TransactionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transactions
     */
    omit?: TransactionsOmit<ExtArgs> | null
    /**
     * The data used to create many Transactions.
     */
    data: TransactionsCreateManyInput | TransactionsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transactions update
   */
  export type TransactionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transactions
     */
    omit?: TransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    /**
     * The data needed to update a Transactions.
     */
    data: XOR<TransactionsUpdateInput, TransactionsUncheckedUpdateInput>
    /**
     * Choose, which Transactions to update.
     */
    where: TransactionsWhereUniqueInput
  }

  /**
   * Transactions updateMany
   */
  export type TransactionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionsUpdateManyMutationInput, TransactionsUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionsWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
  }

  /**
   * Transactions updateManyAndReturn
   */
  export type TransactionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transactions
     */
    omit?: TransactionsOmit<ExtArgs> | null
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionsUpdateManyMutationInput, TransactionsUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionsWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transactions upsert
   */
  export type TransactionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transactions
     */
    omit?: TransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    /**
     * The filter to search for the Transactions to update in case it exists.
     */
    where: TransactionsWhereUniqueInput
    /**
     * In case the Transactions found by the `where` argument doesn't exist, create a new Transactions with this data.
     */
    create: XOR<TransactionsCreateInput, TransactionsUncheckedCreateInput>
    /**
     * In case the Transactions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionsUpdateInput, TransactionsUncheckedUpdateInput>
  }

  /**
   * Transactions delete
   */
  export type TransactionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transactions
     */
    omit?: TransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    /**
     * Filter which Transactions to delete.
     */
    where: TransactionsWhereUniqueInput
  }

  /**
   * Transactions deleteMany
   */
  export type TransactionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transactions to delete
     */
    where?: TransactionsWhereInput
    /**
     * Limit how many Transactions to delete.
     */
    limit?: number
  }

  /**
   * Transactions.billInstance
   */
  export type Transactions$billInstanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillInstances
     */
    select?: BillInstancesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillInstances
     */
    omit?: BillInstancesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillInstancesInclude<ExtArgs> | null
    where?: BillInstancesWhereInput
  }

  /**
   * Transactions without action
   */
  export type TransactionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transactions
     */
    omit?: TransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
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


  export const RecurringBillsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    category: 'category',
    dueDay: 'dueDay',
    interval: 'interval',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RecurringBillsScalarFieldEnum = (typeof RecurringBillsScalarFieldEnum)[keyof typeof RecurringBillsScalarFieldEnum]


  export const BillInstancesScalarFieldEnum: {
    id: 'id',
    recurringBillId: 'recurringBillId',
    referenceMonth: 'referenceMonth',
    amount: 'amount',
    dueDate: 'dueDate',
    isPaid: 'isPaid',
    paidAt: 'paidAt',
    createdAt: 'createdAt'
  };

  export type BillInstancesScalarFieldEnum = (typeof BillInstancesScalarFieldEnum)[keyof typeof BillInstancesScalarFieldEnum]


  export const WalletsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    balance: 'balance',
    walletType: 'walletType',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WalletsScalarFieldEnum = (typeof WalletsScalarFieldEnum)[keyof typeof WalletsScalarFieldEnum]


  export const TransactionsScalarFieldEnum: {
    id: 'id',
    walletId: 'walletId',
    billInstanceId: 'billInstanceId',
    amount: 'amount',
    type: 'type',
    category: 'category',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    description: 'description'
  };

  export type TransactionsScalarFieldEnum = (typeof TransactionsScalarFieldEnum)[keyof typeof TransactionsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'TRANSACTION_CATEGORY'
   */
  export type EnumTRANSACTION_CATEGORYFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TRANSACTION_CATEGORY'>
    


  /**
   * Reference to a field of type 'TRANSACTION_CATEGORY[]'
   */
  export type ListEnumTRANSACTION_CATEGORYFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TRANSACTION_CATEGORY[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'RECURRING_INTERVAL'
   */
  export type EnumRECURRING_INTERVALFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RECURRING_INTERVAL'>
    


  /**
   * Reference to a field of type 'RECURRING_INTERVAL[]'
   */
  export type ListEnumRECURRING_INTERVALFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RECURRING_INTERVAL[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'WALLET_TYPE'
   */
  export type EnumWALLET_TYPEFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WALLET_TYPE'>
    


  /**
   * Reference to a field of type 'WALLET_TYPE[]'
   */
  export type ListEnumWALLET_TYPEFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WALLET_TYPE[]'>
    


  /**
   * Reference to a field of type 'TransactionType'
   */
  export type EnumTransactionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionType'>
    


  /**
   * Reference to a field of type 'TransactionType[]'
   */
  export type ListEnumTransactionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionType[]'>
    


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


  export type RecurringBillsWhereInput = {
    AND?: RecurringBillsWhereInput | RecurringBillsWhereInput[]
    OR?: RecurringBillsWhereInput[]
    NOT?: RecurringBillsWhereInput | RecurringBillsWhereInput[]
    id?: StringFilter<"RecurringBills"> | string
    name?: StringFilter<"RecurringBills"> | string
    category?: EnumTRANSACTION_CATEGORYNullableFilter<"RecurringBills"> | $Enums.TRANSACTION_CATEGORY | null
    dueDay?: IntFilter<"RecurringBills"> | number
    interval?: EnumRECURRING_INTERVALFilter<"RecurringBills"> | $Enums.RECURRING_INTERVAL
    isActive?: BoolFilter<"RecurringBills"> | boolean
    createdAt?: DateTimeFilter<"RecurringBills"> | Date | string
    updatedAt?: DateTimeFilter<"RecurringBills"> | Date | string
    instances?: BillInstancesListRelationFilter
  }

  export type RecurringBillsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrderInput | SortOrder
    dueDay?: SortOrder
    interval?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    instances?: BillInstancesOrderByRelationAggregateInput
  }

  export type RecurringBillsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RecurringBillsWhereInput | RecurringBillsWhereInput[]
    OR?: RecurringBillsWhereInput[]
    NOT?: RecurringBillsWhereInput | RecurringBillsWhereInput[]
    name?: StringFilter<"RecurringBills"> | string
    category?: EnumTRANSACTION_CATEGORYNullableFilter<"RecurringBills"> | $Enums.TRANSACTION_CATEGORY | null
    dueDay?: IntFilter<"RecurringBills"> | number
    interval?: EnumRECURRING_INTERVALFilter<"RecurringBills"> | $Enums.RECURRING_INTERVAL
    isActive?: BoolFilter<"RecurringBills"> | boolean
    createdAt?: DateTimeFilter<"RecurringBills"> | Date | string
    updatedAt?: DateTimeFilter<"RecurringBills"> | Date | string
    instances?: BillInstancesListRelationFilter
  }, "id">

  export type RecurringBillsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrderInput | SortOrder
    dueDay?: SortOrder
    interval?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RecurringBillsCountOrderByAggregateInput
    _avg?: RecurringBillsAvgOrderByAggregateInput
    _max?: RecurringBillsMaxOrderByAggregateInput
    _min?: RecurringBillsMinOrderByAggregateInput
    _sum?: RecurringBillsSumOrderByAggregateInput
  }

  export type RecurringBillsScalarWhereWithAggregatesInput = {
    AND?: RecurringBillsScalarWhereWithAggregatesInput | RecurringBillsScalarWhereWithAggregatesInput[]
    OR?: RecurringBillsScalarWhereWithAggregatesInput[]
    NOT?: RecurringBillsScalarWhereWithAggregatesInput | RecurringBillsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RecurringBills"> | string
    name?: StringWithAggregatesFilter<"RecurringBills"> | string
    category?: EnumTRANSACTION_CATEGORYNullableWithAggregatesFilter<"RecurringBills"> | $Enums.TRANSACTION_CATEGORY | null
    dueDay?: IntWithAggregatesFilter<"RecurringBills"> | number
    interval?: EnumRECURRING_INTERVALWithAggregatesFilter<"RecurringBills"> | $Enums.RECURRING_INTERVAL
    isActive?: BoolWithAggregatesFilter<"RecurringBills"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"RecurringBills"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"RecurringBills"> | Date | string
  }

  export type BillInstancesWhereInput = {
    AND?: BillInstancesWhereInput | BillInstancesWhereInput[]
    OR?: BillInstancesWhereInput[]
    NOT?: BillInstancesWhereInput | BillInstancesWhereInput[]
    id?: StringFilter<"BillInstances"> | string
    recurringBillId?: StringFilter<"BillInstances"> | string
    referenceMonth?: DateTimeFilter<"BillInstances"> | Date | string
    amount?: IntNullableFilter<"BillInstances"> | number | null
    dueDate?: DateTimeFilter<"BillInstances"> | Date | string
    isPaid?: BoolFilter<"BillInstances"> | boolean
    paidAt?: DateTimeNullableFilter<"BillInstances"> | Date | string | null
    createdAt?: DateTimeFilter<"BillInstances"> | Date | string
    recurringBill?: XOR<RecurringBillsScalarRelationFilter, RecurringBillsWhereInput>
    transaction?: XOR<TransactionsNullableScalarRelationFilter, TransactionsWhereInput> | null
  }

  export type BillInstancesOrderByWithRelationInput = {
    id?: SortOrder
    recurringBillId?: SortOrder
    referenceMonth?: SortOrder
    amount?: SortOrderInput | SortOrder
    dueDate?: SortOrder
    isPaid?: SortOrder
    paidAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    recurringBill?: RecurringBillsOrderByWithRelationInput
    transaction?: TransactionsOrderByWithRelationInput
  }

  export type BillInstancesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BillInstancesWhereInput | BillInstancesWhereInput[]
    OR?: BillInstancesWhereInput[]
    NOT?: BillInstancesWhereInput | BillInstancesWhereInput[]
    recurringBillId?: StringFilter<"BillInstances"> | string
    referenceMonth?: DateTimeFilter<"BillInstances"> | Date | string
    amount?: IntNullableFilter<"BillInstances"> | number | null
    dueDate?: DateTimeFilter<"BillInstances"> | Date | string
    isPaid?: BoolFilter<"BillInstances"> | boolean
    paidAt?: DateTimeNullableFilter<"BillInstances"> | Date | string | null
    createdAt?: DateTimeFilter<"BillInstances"> | Date | string
    recurringBill?: XOR<RecurringBillsScalarRelationFilter, RecurringBillsWhereInput>
    transaction?: XOR<TransactionsNullableScalarRelationFilter, TransactionsWhereInput> | null
  }, "id">

  export type BillInstancesOrderByWithAggregationInput = {
    id?: SortOrder
    recurringBillId?: SortOrder
    referenceMonth?: SortOrder
    amount?: SortOrderInput | SortOrder
    dueDate?: SortOrder
    isPaid?: SortOrder
    paidAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: BillInstancesCountOrderByAggregateInput
    _avg?: BillInstancesAvgOrderByAggregateInput
    _max?: BillInstancesMaxOrderByAggregateInput
    _min?: BillInstancesMinOrderByAggregateInput
    _sum?: BillInstancesSumOrderByAggregateInput
  }

  export type BillInstancesScalarWhereWithAggregatesInput = {
    AND?: BillInstancesScalarWhereWithAggregatesInput | BillInstancesScalarWhereWithAggregatesInput[]
    OR?: BillInstancesScalarWhereWithAggregatesInput[]
    NOT?: BillInstancesScalarWhereWithAggregatesInput | BillInstancesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BillInstances"> | string
    recurringBillId?: StringWithAggregatesFilter<"BillInstances"> | string
    referenceMonth?: DateTimeWithAggregatesFilter<"BillInstances"> | Date | string
    amount?: IntNullableWithAggregatesFilter<"BillInstances"> | number | null
    dueDate?: DateTimeWithAggregatesFilter<"BillInstances"> | Date | string
    isPaid?: BoolWithAggregatesFilter<"BillInstances"> | boolean
    paidAt?: DateTimeNullableWithAggregatesFilter<"BillInstances"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"BillInstances"> | Date | string
  }

  export type WalletsWhereInput = {
    AND?: WalletsWhereInput | WalletsWhereInput[]
    OR?: WalletsWhereInput[]
    NOT?: WalletsWhereInput | WalletsWhereInput[]
    id?: StringFilter<"Wallets"> | string
    name?: StringFilter<"Wallets"> | string
    balance?: IntFilter<"Wallets"> | number
    walletType?: EnumWALLET_TYPEFilter<"Wallets"> | $Enums.WALLET_TYPE
    createdAt?: DateTimeFilter<"Wallets"> | Date | string
    updatedAt?: DateTimeFilter<"Wallets"> | Date | string
    Transaction?: TransactionsListRelationFilter
  }

  export type WalletsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    balance?: SortOrder
    walletType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Transaction?: TransactionsOrderByRelationAggregateInput
  }

  export type WalletsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WalletsWhereInput | WalletsWhereInput[]
    OR?: WalletsWhereInput[]
    NOT?: WalletsWhereInput | WalletsWhereInput[]
    name?: StringFilter<"Wallets"> | string
    balance?: IntFilter<"Wallets"> | number
    walletType?: EnumWALLET_TYPEFilter<"Wallets"> | $Enums.WALLET_TYPE
    createdAt?: DateTimeFilter<"Wallets"> | Date | string
    updatedAt?: DateTimeFilter<"Wallets"> | Date | string
    Transaction?: TransactionsListRelationFilter
  }, "id">

  export type WalletsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    balance?: SortOrder
    walletType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WalletsCountOrderByAggregateInput
    _avg?: WalletsAvgOrderByAggregateInput
    _max?: WalletsMaxOrderByAggregateInput
    _min?: WalletsMinOrderByAggregateInput
    _sum?: WalletsSumOrderByAggregateInput
  }

  export type WalletsScalarWhereWithAggregatesInput = {
    AND?: WalletsScalarWhereWithAggregatesInput | WalletsScalarWhereWithAggregatesInput[]
    OR?: WalletsScalarWhereWithAggregatesInput[]
    NOT?: WalletsScalarWhereWithAggregatesInput | WalletsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Wallets"> | string
    name?: StringWithAggregatesFilter<"Wallets"> | string
    balance?: IntWithAggregatesFilter<"Wallets"> | number
    walletType?: EnumWALLET_TYPEWithAggregatesFilter<"Wallets"> | $Enums.WALLET_TYPE
    createdAt?: DateTimeWithAggregatesFilter<"Wallets"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Wallets"> | Date | string
  }

  export type TransactionsWhereInput = {
    AND?: TransactionsWhereInput | TransactionsWhereInput[]
    OR?: TransactionsWhereInput[]
    NOT?: TransactionsWhereInput | TransactionsWhereInput[]
    id?: StringFilter<"Transactions"> | string
    walletId?: StringFilter<"Transactions"> | string
    billInstanceId?: StringNullableFilter<"Transactions"> | string | null
    amount?: IntFilter<"Transactions"> | number
    type?: EnumTransactionTypeFilter<"Transactions"> | $Enums.TransactionType
    category?: EnumTRANSACTION_CATEGORYNullableFilter<"Transactions"> | $Enums.TRANSACTION_CATEGORY | null
    createdAt?: DateTimeFilter<"Transactions"> | Date | string
    updatedAt?: DateTimeFilter<"Transactions"> | Date | string
    description?: StringNullableFilter<"Transactions"> | string | null
    wallet?: XOR<WalletsScalarRelationFilter, WalletsWhereInput>
    billInstance?: XOR<BillInstancesNullableScalarRelationFilter, BillInstancesWhereInput> | null
  }

  export type TransactionsOrderByWithRelationInput = {
    id?: SortOrder
    walletId?: SortOrder
    billInstanceId?: SortOrderInput | SortOrder
    amount?: SortOrder
    type?: SortOrder
    category?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    description?: SortOrderInput | SortOrder
    wallet?: WalletsOrderByWithRelationInput
    billInstance?: BillInstancesOrderByWithRelationInput
  }

  export type TransactionsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    billInstanceId?: string
    AND?: TransactionsWhereInput | TransactionsWhereInput[]
    OR?: TransactionsWhereInput[]
    NOT?: TransactionsWhereInput | TransactionsWhereInput[]
    walletId?: StringFilter<"Transactions"> | string
    amount?: IntFilter<"Transactions"> | number
    type?: EnumTransactionTypeFilter<"Transactions"> | $Enums.TransactionType
    category?: EnumTRANSACTION_CATEGORYNullableFilter<"Transactions"> | $Enums.TRANSACTION_CATEGORY | null
    createdAt?: DateTimeFilter<"Transactions"> | Date | string
    updatedAt?: DateTimeFilter<"Transactions"> | Date | string
    description?: StringNullableFilter<"Transactions"> | string | null
    wallet?: XOR<WalletsScalarRelationFilter, WalletsWhereInput>
    billInstance?: XOR<BillInstancesNullableScalarRelationFilter, BillInstancesWhereInput> | null
  }, "id" | "billInstanceId">

  export type TransactionsOrderByWithAggregationInput = {
    id?: SortOrder
    walletId?: SortOrder
    billInstanceId?: SortOrderInput | SortOrder
    amount?: SortOrder
    type?: SortOrder
    category?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    description?: SortOrderInput | SortOrder
    _count?: TransactionsCountOrderByAggregateInput
    _avg?: TransactionsAvgOrderByAggregateInput
    _max?: TransactionsMaxOrderByAggregateInput
    _min?: TransactionsMinOrderByAggregateInput
    _sum?: TransactionsSumOrderByAggregateInput
  }

  export type TransactionsScalarWhereWithAggregatesInput = {
    AND?: TransactionsScalarWhereWithAggregatesInput | TransactionsScalarWhereWithAggregatesInput[]
    OR?: TransactionsScalarWhereWithAggregatesInput[]
    NOT?: TransactionsScalarWhereWithAggregatesInput | TransactionsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Transactions"> | string
    walletId?: StringWithAggregatesFilter<"Transactions"> | string
    billInstanceId?: StringNullableWithAggregatesFilter<"Transactions"> | string | null
    amount?: IntWithAggregatesFilter<"Transactions"> | number
    type?: EnumTransactionTypeWithAggregatesFilter<"Transactions"> | $Enums.TransactionType
    category?: EnumTRANSACTION_CATEGORYNullableWithAggregatesFilter<"Transactions"> | $Enums.TRANSACTION_CATEGORY | null
    createdAt?: DateTimeWithAggregatesFilter<"Transactions"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Transactions"> | Date | string
    description?: StringNullableWithAggregatesFilter<"Transactions"> | string | null
  }

  export type RecurringBillsCreateInput = {
    id?: string
    name: string
    category?: $Enums.TRANSACTION_CATEGORY | null
    dueDay: number
    interval?: $Enums.RECURRING_INTERVAL
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    instances?: BillInstancesCreateNestedManyWithoutRecurringBillInput
  }

  export type RecurringBillsUncheckedCreateInput = {
    id?: string
    name: string
    category?: $Enums.TRANSACTION_CATEGORY | null
    dueDay: number
    interval?: $Enums.RECURRING_INTERVAL
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    instances?: BillInstancesUncheckedCreateNestedManyWithoutRecurringBillInput
  }

  export type RecurringBillsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: NullableEnumTRANSACTION_CATEGORYFieldUpdateOperationsInput | $Enums.TRANSACTION_CATEGORY | null
    dueDay?: IntFieldUpdateOperationsInput | number
    interval?: EnumRECURRING_INTERVALFieldUpdateOperationsInput | $Enums.RECURRING_INTERVAL
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instances?: BillInstancesUpdateManyWithoutRecurringBillNestedInput
  }

  export type RecurringBillsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: NullableEnumTRANSACTION_CATEGORYFieldUpdateOperationsInput | $Enums.TRANSACTION_CATEGORY | null
    dueDay?: IntFieldUpdateOperationsInput | number
    interval?: EnumRECURRING_INTERVALFieldUpdateOperationsInput | $Enums.RECURRING_INTERVAL
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instances?: BillInstancesUncheckedUpdateManyWithoutRecurringBillNestedInput
  }

  export type RecurringBillsCreateManyInput = {
    id?: string
    name: string
    category?: $Enums.TRANSACTION_CATEGORY | null
    dueDay: number
    interval?: $Enums.RECURRING_INTERVAL
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RecurringBillsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: NullableEnumTRANSACTION_CATEGORYFieldUpdateOperationsInput | $Enums.TRANSACTION_CATEGORY | null
    dueDay?: IntFieldUpdateOperationsInput | number
    interval?: EnumRECURRING_INTERVALFieldUpdateOperationsInput | $Enums.RECURRING_INTERVAL
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecurringBillsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: NullableEnumTRANSACTION_CATEGORYFieldUpdateOperationsInput | $Enums.TRANSACTION_CATEGORY | null
    dueDay?: IntFieldUpdateOperationsInput | number
    interval?: EnumRECURRING_INTERVALFieldUpdateOperationsInput | $Enums.RECURRING_INTERVAL
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BillInstancesCreateInput = {
    id?: string
    referenceMonth: Date | string
    amount?: number | null
    dueDate: Date | string
    isPaid?: boolean
    paidAt?: Date | string | null
    createdAt?: Date | string
    recurringBill: RecurringBillsCreateNestedOneWithoutInstancesInput
    transaction?: TransactionsCreateNestedOneWithoutBillInstanceInput
  }

  export type BillInstancesUncheckedCreateInput = {
    id?: string
    recurringBillId: string
    referenceMonth: Date | string
    amount?: number | null
    dueDate: Date | string
    isPaid?: boolean
    paidAt?: Date | string | null
    createdAt?: Date | string
    transaction?: TransactionsUncheckedCreateNestedOneWithoutBillInstanceInput
  }

  export type BillInstancesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    referenceMonth?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: NullableIntFieldUpdateOperationsInput | number | null
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recurringBill?: RecurringBillsUpdateOneRequiredWithoutInstancesNestedInput
    transaction?: TransactionsUpdateOneWithoutBillInstanceNestedInput
  }

  export type BillInstancesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    recurringBillId?: StringFieldUpdateOperationsInput | string
    referenceMonth?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: NullableIntFieldUpdateOperationsInput | number | null
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transaction?: TransactionsUncheckedUpdateOneWithoutBillInstanceNestedInput
  }

  export type BillInstancesCreateManyInput = {
    id?: string
    recurringBillId: string
    referenceMonth: Date | string
    amount?: number | null
    dueDate: Date | string
    isPaid?: boolean
    paidAt?: Date | string | null
    createdAt?: Date | string
  }

  export type BillInstancesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    referenceMonth?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: NullableIntFieldUpdateOperationsInput | number | null
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BillInstancesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    recurringBillId?: StringFieldUpdateOperationsInput | string
    referenceMonth?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: NullableIntFieldUpdateOperationsInput | number | null
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WalletsCreateInput = {
    id?: string
    name: string
    balance?: number
    walletType?: $Enums.WALLET_TYPE
    createdAt?: Date | string
    updatedAt?: Date | string
    Transaction?: TransactionsCreateNestedManyWithoutWalletInput
  }

  export type WalletsUncheckedCreateInput = {
    id?: string
    name: string
    balance?: number
    walletType?: $Enums.WALLET_TYPE
    createdAt?: Date | string
    updatedAt?: Date | string
    Transaction?: TransactionsUncheckedCreateNestedManyWithoutWalletInput
  }

  export type WalletsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    walletType?: EnumWALLET_TYPEFieldUpdateOperationsInput | $Enums.WALLET_TYPE
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Transaction?: TransactionsUpdateManyWithoutWalletNestedInput
  }

  export type WalletsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    walletType?: EnumWALLET_TYPEFieldUpdateOperationsInput | $Enums.WALLET_TYPE
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Transaction?: TransactionsUncheckedUpdateManyWithoutWalletNestedInput
  }

  export type WalletsCreateManyInput = {
    id?: string
    name: string
    balance?: number
    walletType?: $Enums.WALLET_TYPE
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WalletsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    walletType?: EnumWALLET_TYPEFieldUpdateOperationsInput | $Enums.WALLET_TYPE
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WalletsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    walletType?: EnumWALLET_TYPEFieldUpdateOperationsInput | $Enums.WALLET_TYPE
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionsCreateInput = {
    id?: string
    amount: number
    type?: $Enums.TransactionType
    category?: $Enums.TRANSACTION_CATEGORY | null
    createdAt?: Date | string
    updatedAt?: Date | string
    description?: string | null
    wallet: WalletsCreateNestedOneWithoutTransactionInput
    billInstance?: BillInstancesCreateNestedOneWithoutTransactionInput
  }

  export type TransactionsUncheckedCreateInput = {
    id?: string
    walletId: string
    billInstanceId?: string | null
    amount: number
    type?: $Enums.TransactionType
    category?: $Enums.TRANSACTION_CATEGORY | null
    createdAt?: Date | string
    updatedAt?: Date | string
    description?: string | null
  }

  export type TransactionsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    category?: NullableEnumTRANSACTION_CATEGORYFieldUpdateOperationsInput | $Enums.TRANSACTION_CATEGORY | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    wallet?: WalletsUpdateOneRequiredWithoutTransactionNestedInput
    billInstance?: BillInstancesUpdateOneWithoutTransactionNestedInput
  }

  export type TransactionsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletId?: StringFieldUpdateOperationsInput | string
    billInstanceId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: IntFieldUpdateOperationsInput | number
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    category?: NullableEnumTRANSACTION_CATEGORYFieldUpdateOperationsInput | $Enums.TRANSACTION_CATEGORY | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TransactionsCreateManyInput = {
    id?: string
    walletId: string
    billInstanceId?: string | null
    amount: number
    type?: $Enums.TransactionType
    category?: $Enums.TRANSACTION_CATEGORY | null
    createdAt?: Date | string
    updatedAt?: Date | string
    description?: string | null
  }

  export type TransactionsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    category?: NullableEnumTRANSACTION_CATEGORYFieldUpdateOperationsInput | $Enums.TRANSACTION_CATEGORY | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TransactionsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletId?: StringFieldUpdateOperationsInput | string
    billInstanceId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: IntFieldUpdateOperationsInput | number
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    category?: NullableEnumTRANSACTION_CATEGORYFieldUpdateOperationsInput | $Enums.TRANSACTION_CATEGORY | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type EnumTRANSACTION_CATEGORYNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.TRANSACTION_CATEGORY | EnumTRANSACTION_CATEGORYFieldRefInput<$PrismaModel> | null
    in?: $Enums.TRANSACTION_CATEGORY[] | ListEnumTRANSACTION_CATEGORYFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.TRANSACTION_CATEGORY[] | ListEnumTRANSACTION_CATEGORYFieldRefInput<$PrismaModel> | null
    not?: NestedEnumTRANSACTION_CATEGORYNullableFilter<$PrismaModel> | $Enums.TRANSACTION_CATEGORY | null
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

  export type EnumRECURRING_INTERVALFilter<$PrismaModel = never> = {
    equals?: $Enums.RECURRING_INTERVAL | EnumRECURRING_INTERVALFieldRefInput<$PrismaModel>
    in?: $Enums.RECURRING_INTERVAL[] | ListEnumRECURRING_INTERVALFieldRefInput<$PrismaModel>
    notIn?: $Enums.RECURRING_INTERVAL[] | ListEnumRECURRING_INTERVALFieldRefInput<$PrismaModel>
    not?: NestedEnumRECURRING_INTERVALFilter<$PrismaModel> | $Enums.RECURRING_INTERVAL
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type BillInstancesListRelationFilter = {
    every?: BillInstancesWhereInput
    some?: BillInstancesWhereInput
    none?: BillInstancesWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BillInstancesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RecurringBillsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    dueDay?: SortOrder
    interval?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RecurringBillsAvgOrderByAggregateInput = {
    dueDay?: SortOrder
  }

  export type RecurringBillsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    dueDay?: SortOrder
    interval?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RecurringBillsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    dueDay?: SortOrder
    interval?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RecurringBillsSumOrderByAggregateInput = {
    dueDay?: SortOrder
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

  export type EnumTRANSACTION_CATEGORYNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TRANSACTION_CATEGORY | EnumTRANSACTION_CATEGORYFieldRefInput<$PrismaModel> | null
    in?: $Enums.TRANSACTION_CATEGORY[] | ListEnumTRANSACTION_CATEGORYFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.TRANSACTION_CATEGORY[] | ListEnumTRANSACTION_CATEGORYFieldRefInput<$PrismaModel> | null
    not?: NestedEnumTRANSACTION_CATEGORYNullableWithAggregatesFilter<$PrismaModel> | $Enums.TRANSACTION_CATEGORY | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumTRANSACTION_CATEGORYNullableFilter<$PrismaModel>
    _max?: NestedEnumTRANSACTION_CATEGORYNullableFilter<$PrismaModel>
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

  export type EnumRECURRING_INTERVALWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RECURRING_INTERVAL | EnumRECURRING_INTERVALFieldRefInput<$PrismaModel>
    in?: $Enums.RECURRING_INTERVAL[] | ListEnumRECURRING_INTERVALFieldRefInput<$PrismaModel>
    notIn?: $Enums.RECURRING_INTERVAL[] | ListEnumRECURRING_INTERVALFieldRefInput<$PrismaModel>
    not?: NestedEnumRECURRING_INTERVALWithAggregatesFilter<$PrismaModel> | $Enums.RECURRING_INTERVAL
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRECURRING_INTERVALFilter<$PrismaModel>
    _max?: NestedEnumRECURRING_INTERVALFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type RecurringBillsScalarRelationFilter = {
    is?: RecurringBillsWhereInput
    isNot?: RecurringBillsWhereInput
  }

  export type TransactionsNullableScalarRelationFilter = {
    is?: TransactionsWhereInput | null
    isNot?: TransactionsWhereInput | null
  }

  export type BillInstancesCountOrderByAggregateInput = {
    id?: SortOrder
    recurringBillId?: SortOrder
    referenceMonth?: SortOrder
    amount?: SortOrder
    dueDate?: SortOrder
    isPaid?: SortOrder
    paidAt?: SortOrder
    createdAt?: SortOrder
  }

  export type BillInstancesAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type BillInstancesMaxOrderByAggregateInput = {
    id?: SortOrder
    recurringBillId?: SortOrder
    referenceMonth?: SortOrder
    amount?: SortOrder
    dueDate?: SortOrder
    isPaid?: SortOrder
    paidAt?: SortOrder
    createdAt?: SortOrder
  }

  export type BillInstancesMinOrderByAggregateInput = {
    id?: SortOrder
    recurringBillId?: SortOrder
    referenceMonth?: SortOrder
    amount?: SortOrder
    dueDate?: SortOrder
    isPaid?: SortOrder
    paidAt?: SortOrder
    createdAt?: SortOrder
  }

  export type BillInstancesSumOrderByAggregateInput = {
    amount?: SortOrder
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

  export type EnumWALLET_TYPEFilter<$PrismaModel = never> = {
    equals?: $Enums.WALLET_TYPE | EnumWALLET_TYPEFieldRefInput<$PrismaModel>
    in?: $Enums.WALLET_TYPE[] | ListEnumWALLET_TYPEFieldRefInput<$PrismaModel>
    notIn?: $Enums.WALLET_TYPE[] | ListEnumWALLET_TYPEFieldRefInput<$PrismaModel>
    not?: NestedEnumWALLET_TYPEFilter<$PrismaModel> | $Enums.WALLET_TYPE
  }

  export type TransactionsListRelationFilter = {
    every?: TransactionsWhereInput
    some?: TransactionsWhereInput
    none?: TransactionsWhereInput
  }

  export type TransactionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WalletsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    balance?: SortOrder
    walletType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WalletsAvgOrderByAggregateInput = {
    balance?: SortOrder
  }

  export type WalletsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    balance?: SortOrder
    walletType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WalletsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    balance?: SortOrder
    walletType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WalletsSumOrderByAggregateInput = {
    balance?: SortOrder
  }

  export type EnumWALLET_TYPEWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WALLET_TYPE | EnumWALLET_TYPEFieldRefInput<$PrismaModel>
    in?: $Enums.WALLET_TYPE[] | ListEnumWALLET_TYPEFieldRefInput<$PrismaModel>
    notIn?: $Enums.WALLET_TYPE[] | ListEnumWALLET_TYPEFieldRefInput<$PrismaModel>
    not?: NestedEnumWALLET_TYPEWithAggregatesFilter<$PrismaModel> | $Enums.WALLET_TYPE
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWALLET_TYPEFilter<$PrismaModel>
    _max?: NestedEnumWALLET_TYPEFilter<$PrismaModel>
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

  export type EnumTransactionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeFilter<$PrismaModel> | $Enums.TransactionType
  }

  export type WalletsScalarRelationFilter = {
    is?: WalletsWhereInput
    isNot?: WalletsWhereInput
  }

  export type BillInstancesNullableScalarRelationFilter = {
    is?: BillInstancesWhereInput | null
    isNot?: BillInstancesWhereInput | null
  }

  export type TransactionsCountOrderByAggregateInput = {
    id?: SortOrder
    walletId?: SortOrder
    billInstanceId?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    description?: SortOrder
  }

  export type TransactionsAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type TransactionsMaxOrderByAggregateInput = {
    id?: SortOrder
    walletId?: SortOrder
    billInstanceId?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    description?: SortOrder
  }

  export type TransactionsMinOrderByAggregateInput = {
    id?: SortOrder
    walletId?: SortOrder
    billInstanceId?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    description?: SortOrder
  }

  export type TransactionsSumOrderByAggregateInput = {
    amount?: SortOrder
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

  export type EnumTransactionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel> | $Enums.TransactionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionTypeFilter<$PrismaModel>
    _max?: NestedEnumTransactionTypeFilter<$PrismaModel>
  }

  export type BillInstancesCreateNestedManyWithoutRecurringBillInput = {
    create?: XOR<BillInstancesCreateWithoutRecurringBillInput, BillInstancesUncheckedCreateWithoutRecurringBillInput> | BillInstancesCreateWithoutRecurringBillInput[] | BillInstancesUncheckedCreateWithoutRecurringBillInput[]
    connectOrCreate?: BillInstancesCreateOrConnectWithoutRecurringBillInput | BillInstancesCreateOrConnectWithoutRecurringBillInput[]
    createMany?: BillInstancesCreateManyRecurringBillInputEnvelope
    connect?: BillInstancesWhereUniqueInput | BillInstancesWhereUniqueInput[]
  }

  export type BillInstancesUncheckedCreateNestedManyWithoutRecurringBillInput = {
    create?: XOR<BillInstancesCreateWithoutRecurringBillInput, BillInstancesUncheckedCreateWithoutRecurringBillInput> | BillInstancesCreateWithoutRecurringBillInput[] | BillInstancesUncheckedCreateWithoutRecurringBillInput[]
    connectOrCreate?: BillInstancesCreateOrConnectWithoutRecurringBillInput | BillInstancesCreateOrConnectWithoutRecurringBillInput[]
    createMany?: BillInstancesCreateManyRecurringBillInputEnvelope
    connect?: BillInstancesWhereUniqueInput | BillInstancesWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableEnumTRANSACTION_CATEGORYFieldUpdateOperationsInput = {
    set?: $Enums.TRANSACTION_CATEGORY | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumRECURRING_INTERVALFieldUpdateOperationsInput = {
    set?: $Enums.RECURRING_INTERVAL
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BillInstancesUpdateManyWithoutRecurringBillNestedInput = {
    create?: XOR<BillInstancesCreateWithoutRecurringBillInput, BillInstancesUncheckedCreateWithoutRecurringBillInput> | BillInstancesCreateWithoutRecurringBillInput[] | BillInstancesUncheckedCreateWithoutRecurringBillInput[]
    connectOrCreate?: BillInstancesCreateOrConnectWithoutRecurringBillInput | BillInstancesCreateOrConnectWithoutRecurringBillInput[]
    upsert?: BillInstancesUpsertWithWhereUniqueWithoutRecurringBillInput | BillInstancesUpsertWithWhereUniqueWithoutRecurringBillInput[]
    createMany?: BillInstancesCreateManyRecurringBillInputEnvelope
    set?: BillInstancesWhereUniqueInput | BillInstancesWhereUniqueInput[]
    disconnect?: BillInstancesWhereUniqueInput | BillInstancesWhereUniqueInput[]
    delete?: BillInstancesWhereUniqueInput | BillInstancesWhereUniqueInput[]
    connect?: BillInstancesWhereUniqueInput | BillInstancesWhereUniqueInput[]
    update?: BillInstancesUpdateWithWhereUniqueWithoutRecurringBillInput | BillInstancesUpdateWithWhereUniqueWithoutRecurringBillInput[]
    updateMany?: BillInstancesUpdateManyWithWhereWithoutRecurringBillInput | BillInstancesUpdateManyWithWhereWithoutRecurringBillInput[]
    deleteMany?: BillInstancesScalarWhereInput | BillInstancesScalarWhereInput[]
  }

  export type BillInstancesUncheckedUpdateManyWithoutRecurringBillNestedInput = {
    create?: XOR<BillInstancesCreateWithoutRecurringBillInput, BillInstancesUncheckedCreateWithoutRecurringBillInput> | BillInstancesCreateWithoutRecurringBillInput[] | BillInstancesUncheckedCreateWithoutRecurringBillInput[]
    connectOrCreate?: BillInstancesCreateOrConnectWithoutRecurringBillInput | BillInstancesCreateOrConnectWithoutRecurringBillInput[]
    upsert?: BillInstancesUpsertWithWhereUniqueWithoutRecurringBillInput | BillInstancesUpsertWithWhereUniqueWithoutRecurringBillInput[]
    createMany?: BillInstancesCreateManyRecurringBillInputEnvelope
    set?: BillInstancesWhereUniqueInput | BillInstancesWhereUniqueInput[]
    disconnect?: BillInstancesWhereUniqueInput | BillInstancesWhereUniqueInput[]
    delete?: BillInstancesWhereUniqueInput | BillInstancesWhereUniqueInput[]
    connect?: BillInstancesWhereUniqueInput | BillInstancesWhereUniqueInput[]
    update?: BillInstancesUpdateWithWhereUniqueWithoutRecurringBillInput | BillInstancesUpdateWithWhereUniqueWithoutRecurringBillInput[]
    updateMany?: BillInstancesUpdateManyWithWhereWithoutRecurringBillInput | BillInstancesUpdateManyWithWhereWithoutRecurringBillInput[]
    deleteMany?: BillInstancesScalarWhereInput | BillInstancesScalarWhereInput[]
  }

  export type RecurringBillsCreateNestedOneWithoutInstancesInput = {
    create?: XOR<RecurringBillsCreateWithoutInstancesInput, RecurringBillsUncheckedCreateWithoutInstancesInput>
    connectOrCreate?: RecurringBillsCreateOrConnectWithoutInstancesInput
    connect?: RecurringBillsWhereUniqueInput
  }

  export type TransactionsCreateNestedOneWithoutBillInstanceInput = {
    create?: XOR<TransactionsCreateWithoutBillInstanceInput, TransactionsUncheckedCreateWithoutBillInstanceInput>
    connectOrCreate?: TransactionsCreateOrConnectWithoutBillInstanceInput
    connect?: TransactionsWhereUniqueInput
  }

  export type TransactionsUncheckedCreateNestedOneWithoutBillInstanceInput = {
    create?: XOR<TransactionsCreateWithoutBillInstanceInput, TransactionsUncheckedCreateWithoutBillInstanceInput>
    connectOrCreate?: TransactionsCreateOrConnectWithoutBillInstanceInput
    connect?: TransactionsWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type RecurringBillsUpdateOneRequiredWithoutInstancesNestedInput = {
    create?: XOR<RecurringBillsCreateWithoutInstancesInput, RecurringBillsUncheckedCreateWithoutInstancesInput>
    connectOrCreate?: RecurringBillsCreateOrConnectWithoutInstancesInput
    upsert?: RecurringBillsUpsertWithoutInstancesInput
    connect?: RecurringBillsWhereUniqueInput
    update?: XOR<XOR<RecurringBillsUpdateToOneWithWhereWithoutInstancesInput, RecurringBillsUpdateWithoutInstancesInput>, RecurringBillsUncheckedUpdateWithoutInstancesInput>
  }

  export type TransactionsUpdateOneWithoutBillInstanceNestedInput = {
    create?: XOR<TransactionsCreateWithoutBillInstanceInput, TransactionsUncheckedCreateWithoutBillInstanceInput>
    connectOrCreate?: TransactionsCreateOrConnectWithoutBillInstanceInput
    upsert?: TransactionsUpsertWithoutBillInstanceInput
    disconnect?: TransactionsWhereInput | boolean
    delete?: TransactionsWhereInput | boolean
    connect?: TransactionsWhereUniqueInput
    update?: XOR<XOR<TransactionsUpdateToOneWithWhereWithoutBillInstanceInput, TransactionsUpdateWithoutBillInstanceInput>, TransactionsUncheckedUpdateWithoutBillInstanceInput>
  }

  export type TransactionsUncheckedUpdateOneWithoutBillInstanceNestedInput = {
    create?: XOR<TransactionsCreateWithoutBillInstanceInput, TransactionsUncheckedCreateWithoutBillInstanceInput>
    connectOrCreate?: TransactionsCreateOrConnectWithoutBillInstanceInput
    upsert?: TransactionsUpsertWithoutBillInstanceInput
    disconnect?: TransactionsWhereInput | boolean
    delete?: TransactionsWhereInput | boolean
    connect?: TransactionsWhereUniqueInput
    update?: XOR<XOR<TransactionsUpdateToOneWithWhereWithoutBillInstanceInput, TransactionsUpdateWithoutBillInstanceInput>, TransactionsUncheckedUpdateWithoutBillInstanceInput>
  }

  export type TransactionsCreateNestedManyWithoutWalletInput = {
    create?: XOR<TransactionsCreateWithoutWalletInput, TransactionsUncheckedCreateWithoutWalletInput> | TransactionsCreateWithoutWalletInput[] | TransactionsUncheckedCreateWithoutWalletInput[]
    connectOrCreate?: TransactionsCreateOrConnectWithoutWalletInput | TransactionsCreateOrConnectWithoutWalletInput[]
    createMany?: TransactionsCreateManyWalletInputEnvelope
    connect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
  }

  export type TransactionsUncheckedCreateNestedManyWithoutWalletInput = {
    create?: XOR<TransactionsCreateWithoutWalletInput, TransactionsUncheckedCreateWithoutWalletInput> | TransactionsCreateWithoutWalletInput[] | TransactionsUncheckedCreateWithoutWalletInput[]
    connectOrCreate?: TransactionsCreateOrConnectWithoutWalletInput | TransactionsCreateOrConnectWithoutWalletInput[]
    createMany?: TransactionsCreateManyWalletInputEnvelope
    connect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
  }

  export type EnumWALLET_TYPEFieldUpdateOperationsInput = {
    set?: $Enums.WALLET_TYPE
  }

  export type TransactionsUpdateManyWithoutWalletNestedInput = {
    create?: XOR<TransactionsCreateWithoutWalletInput, TransactionsUncheckedCreateWithoutWalletInput> | TransactionsCreateWithoutWalletInput[] | TransactionsUncheckedCreateWithoutWalletInput[]
    connectOrCreate?: TransactionsCreateOrConnectWithoutWalletInput | TransactionsCreateOrConnectWithoutWalletInput[]
    upsert?: TransactionsUpsertWithWhereUniqueWithoutWalletInput | TransactionsUpsertWithWhereUniqueWithoutWalletInput[]
    createMany?: TransactionsCreateManyWalletInputEnvelope
    set?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    disconnect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    delete?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    connect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    update?: TransactionsUpdateWithWhereUniqueWithoutWalletInput | TransactionsUpdateWithWhereUniqueWithoutWalletInput[]
    updateMany?: TransactionsUpdateManyWithWhereWithoutWalletInput | TransactionsUpdateManyWithWhereWithoutWalletInput[]
    deleteMany?: TransactionsScalarWhereInput | TransactionsScalarWhereInput[]
  }

  export type TransactionsUncheckedUpdateManyWithoutWalletNestedInput = {
    create?: XOR<TransactionsCreateWithoutWalletInput, TransactionsUncheckedCreateWithoutWalletInput> | TransactionsCreateWithoutWalletInput[] | TransactionsUncheckedCreateWithoutWalletInput[]
    connectOrCreate?: TransactionsCreateOrConnectWithoutWalletInput | TransactionsCreateOrConnectWithoutWalletInput[]
    upsert?: TransactionsUpsertWithWhereUniqueWithoutWalletInput | TransactionsUpsertWithWhereUniqueWithoutWalletInput[]
    createMany?: TransactionsCreateManyWalletInputEnvelope
    set?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    disconnect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    delete?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    connect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    update?: TransactionsUpdateWithWhereUniqueWithoutWalletInput | TransactionsUpdateWithWhereUniqueWithoutWalletInput[]
    updateMany?: TransactionsUpdateManyWithWhereWithoutWalletInput | TransactionsUpdateManyWithWhereWithoutWalletInput[]
    deleteMany?: TransactionsScalarWhereInput | TransactionsScalarWhereInput[]
  }

  export type WalletsCreateNestedOneWithoutTransactionInput = {
    create?: XOR<WalletsCreateWithoutTransactionInput, WalletsUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: WalletsCreateOrConnectWithoutTransactionInput
    connect?: WalletsWhereUniqueInput
  }

  export type BillInstancesCreateNestedOneWithoutTransactionInput = {
    create?: XOR<BillInstancesCreateWithoutTransactionInput, BillInstancesUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: BillInstancesCreateOrConnectWithoutTransactionInput
    connect?: BillInstancesWhereUniqueInput
  }

  export type EnumTransactionTypeFieldUpdateOperationsInput = {
    set?: $Enums.TransactionType
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type WalletsUpdateOneRequiredWithoutTransactionNestedInput = {
    create?: XOR<WalletsCreateWithoutTransactionInput, WalletsUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: WalletsCreateOrConnectWithoutTransactionInput
    upsert?: WalletsUpsertWithoutTransactionInput
    connect?: WalletsWhereUniqueInput
    update?: XOR<XOR<WalletsUpdateToOneWithWhereWithoutTransactionInput, WalletsUpdateWithoutTransactionInput>, WalletsUncheckedUpdateWithoutTransactionInput>
  }

  export type BillInstancesUpdateOneWithoutTransactionNestedInput = {
    create?: XOR<BillInstancesCreateWithoutTransactionInput, BillInstancesUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: BillInstancesCreateOrConnectWithoutTransactionInput
    upsert?: BillInstancesUpsertWithoutTransactionInput
    disconnect?: BillInstancesWhereInput | boolean
    delete?: BillInstancesWhereInput | boolean
    connect?: BillInstancesWhereUniqueInput
    update?: XOR<XOR<BillInstancesUpdateToOneWithWhereWithoutTransactionInput, BillInstancesUpdateWithoutTransactionInput>, BillInstancesUncheckedUpdateWithoutTransactionInput>
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

  export type NestedEnumTRANSACTION_CATEGORYNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.TRANSACTION_CATEGORY | EnumTRANSACTION_CATEGORYFieldRefInput<$PrismaModel> | null
    in?: $Enums.TRANSACTION_CATEGORY[] | ListEnumTRANSACTION_CATEGORYFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.TRANSACTION_CATEGORY[] | ListEnumTRANSACTION_CATEGORYFieldRefInput<$PrismaModel> | null
    not?: NestedEnumTRANSACTION_CATEGORYNullableFilter<$PrismaModel> | $Enums.TRANSACTION_CATEGORY | null
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

  export type NestedEnumRECURRING_INTERVALFilter<$PrismaModel = never> = {
    equals?: $Enums.RECURRING_INTERVAL | EnumRECURRING_INTERVALFieldRefInput<$PrismaModel>
    in?: $Enums.RECURRING_INTERVAL[] | ListEnumRECURRING_INTERVALFieldRefInput<$PrismaModel>
    notIn?: $Enums.RECURRING_INTERVAL[] | ListEnumRECURRING_INTERVALFieldRefInput<$PrismaModel>
    not?: NestedEnumRECURRING_INTERVALFilter<$PrismaModel> | $Enums.RECURRING_INTERVAL
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedEnumTRANSACTION_CATEGORYNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TRANSACTION_CATEGORY | EnumTRANSACTION_CATEGORYFieldRefInput<$PrismaModel> | null
    in?: $Enums.TRANSACTION_CATEGORY[] | ListEnumTRANSACTION_CATEGORYFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.TRANSACTION_CATEGORY[] | ListEnumTRANSACTION_CATEGORYFieldRefInput<$PrismaModel> | null
    not?: NestedEnumTRANSACTION_CATEGORYNullableWithAggregatesFilter<$PrismaModel> | $Enums.TRANSACTION_CATEGORY | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumTRANSACTION_CATEGORYNullableFilter<$PrismaModel>
    _max?: NestedEnumTRANSACTION_CATEGORYNullableFilter<$PrismaModel>
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

  export type NestedEnumRECURRING_INTERVALWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RECURRING_INTERVAL | EnumRECURRING_INTERVALFieldRefInput<$PrismaModel>
    in?: $Enums.RECURRING_INTERVAL[] | ListEnumRECURRING_INTERVALFieldRefInput<$PrismaModel>
    notIn?: $Enums.RECURRING_INTERVAL[] | ListEnumRECURRING_INTERVALFieldRefInput<$PrismaModel>
    not?: NestedEnumRECURRING_INTERVALWithAggregatesFilter<$PrismaModel> | $Enums.RECURRING_INTERVAL
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRECURRING_INTERVALFilter<$PrismaModel>
    _max?: NestedEnumRECURRING_INTERVALFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedEnumWALLET_TYPEFilter<$PrismaModel = never> = {
    equals?: $Enums.WALLET_TYPE | EnumWALLET_TYPEFieldRefInput<$PrismaModel>
    in?: $Enums.WALLET_TYPE[] | ListEnumWALLET_TYPEFieldRefInput<$PrismaModel>
    notIn?: $Enums.WALLET_TYPE[] | ListEnumWALLET_TYPEFieldRefInput<$PrismaModel>
    not?: NestedEnumWALLET_TYPEFilter<$PrismaModel> | $Enums.WALLET_TYPE
  }

  export type NestedEnumWALLET_TYPEWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WALLET_TYPE | EnumWALLET_TYPEFieldRefInput<$PrismaModel>
    in?: $Enums.WALLET_TYPE[] | ListEnumWALLET_TYPEFieldRefInput<$PrismaModel>
    notIn?: $Enums.WALLET_TYPE[] | ListEnumWALLET_TYPEFieldRefInput<$PrismaModel>
    not?: NestedEnumWALLET_TYPEWithAggregatesFilter<$PrismaModel> | $Enums.WALLET_TYPE
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWALLET_TYPEFilter<$PrismaModel>
    _max?: NestedEnumWALLET_TYPEFilter<$PrismaModel>
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

  export type NestedEnumTransactionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeFilter<$PrismaModel> | $Enums.TransactionType
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

  export type NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel> | $Enums.TransactionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionTypeFilter<$PrismaModel>
    _max?: NestedEnumTransactionTypeFilter<$PrismaModel>
  }

  export type BillInstancesCreateWithoutRecurringBillInput = {
    id?: string
    referenceMonth: Date | string
    amount?: number | null
    dueDate: Date | string
    isPaid?: boolean
    paidAt?: Date | string | null
    createdAt?: Date | string
    transaction?: TransactionsCreateNestedOneWithoutBillInstanceInput
  }

  export type BillInstancesUncheckedCreateWithoutRecurringBillInput = {
    id?: string
    referenceMonth: Date | string
    amount?: number | null
    dueDate: Date | string
    isPaid?: boolean
    paidAt?: Date | string | null
    createdAt?: Date | string
    transaction?: TransactionsUncheckedCreateNestedOneWithoutBillInstanceInput
  }

  export type BillInstancesCreateOrConnectWithoutRecurringBillInput = {
    where: BillInstancesWhereUniqueInput
    create: XOR<BillInstancesCreateWithoutRecurringBillInput, BillInstancesUncheckedCreateWithoutRecurringBillInput>
  }

  export type BillInstancesCreateManyRecurringBillInputEnvelope = {
    data: BillInstancesCreateManyRecurringBillInput | BillInstancesCreateManyRecurringBillInput[]
    skipDuplicates?: boolean
  }

  export type BillInstancesUpsertWithWhereUniqueWithoutRecurringBillInput = {
    where: BillInstancesWhereUniqueInput
    update: XOR<BillInstancesUpdateWithoutRecurringBillInput, BillInstancesUncheckedUpdateWithoutRecurringBillInput>
    create: XOR<BillInstancesCreateWithoutRecurringBillInput, BillInstancesUncheckedCreateWithoutRecurringBillInput>
  }

  export type BillInstancesUpdateWithWhereUniqueWithoutRecurringBillInput = {
    where: BillInstancesWhereUniqueInput
    data: XOR<BillInstancesUpdateWithoutRecurringBillInput, BillInstancesUncheckedUpdateWithoutRecurringBillInput>
  }

  export type BillInstancesUpdateManyWithWhereWithoutRecurringBillInput = {
    where: BillInstancesScalarWhereInput
    data: XOR<BillInstancesUpdateManyMutationInput, BillInstancesUncheckedUpdateManyWithoutRecurringBillInput>
  }

  export type BillInstancesScalarWhereInput = {
    AND?: BillInstancesScalarWhereInput | BillInstancesScalarWhereInput[]
    OR?: BillInstancesScalarWhereInput[]
    NOT?: BillInstancesScalarWhereInput | BillInstancesScalarWhereInput[]
    id?: StringFilter<"BillInstances"> | string
    recurringBillId?: StringFilter<"BillInstances"> | string
    referenceMonth?: DateTimeFilter<"BillInstances"> | Date | string
    amount?: IntNullableFilter<"BillInstances"> | number | null
    dueDate?: DateTimeFilter<"BillInstances"> | Date | string
    isPaid?: BoolFilter<"BillInstances"> | boolean
    paidAt?: DateTimeNullableFilter<"BillInstances"> | Date | string | null
    createdAt?: DateTimeFilter<"BillInstances"> | Date | string
  }

  export type RecurringBillsCreateWithoutInstancesInput = {
    id?: string
    name: string
    category?: $Enums.TRANSACTION_CATEGORY | null
    dueDay: number
    interval?: $Enums.RECURRING_INTERVAL
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RecurringBillsUncheckedCreateWithoutInstancesInput = {
    id?: string
    name: string
    category?: $Enums.TRANSACTION_CATEGORY | null
    dueDay: number
    interval?: $Enums.RECURRING_INTERVAL
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RecurringBillsCreateOrConnectWithoutInstancesInput = {
    where: RecurringBillsWhereUniqueInput
    create: XOR<RecurringBillsCreateWithoutInstancesInput, RecurringBillsUncheckedCreateWithoutInstancesInput>
  }

  export type TransactionsCreateWithoutBillInstanceInput = {
    id?: string
    amount: number
    type?: $Enums.TransactionType
    category?: $Enums.TRANSACTION_CATEGORY | null
    createdAt?: Date | string
    updatedAt?: Date | string
    description?: string | null
    wallet: WalletsCreateNestedOneWithoutTransactionInput
  }

  export type TransactionsUncheckedCreateWithoutBillInstanceInput = {
    id?: string
    walletId: string
    amount: number
    type?: $Enums.TransactionType
    category?: $Enums.TRANSACTION_CATEGORY | null
    createdAt?: Date | string
    updatedAt?: Date | string
    description?: string | null
  }

  export type TransactionsCreateOrConnectWithoutBillInstanceInput = {
    where: TransactionsWhereUniqueInput
    create: XOR<TransactionsCreateWithoutBillInstanceInput, TransactionsUncheckedCreateWithoutBillInstanceInput>
  }

  export type RecurringBillsUpsertWithoutInstancesInput = {
    update: XOR<RecurringBillsUpdateWithoutInstancesInput, RecurringBillsUncheckedUpdateWithoutInstancesInput>
    create: XOR<RecurringBillsCreateWithoutInstancesInput, RecurringBillsUncheckedCreateWithoutInstancesInput>
    where?: RecurringBillsWhereInput
  }

  export type RecurringBillsUpdateToOneWithWhereWithoutInstancesInput = {
    where?: RecurringBillsWhereInput
    data: XOR<RecurringBillsUpdateWithoutInstancesInput, RecurringBillsUncheckedUpdateWithoutInstancesInput>
  }

  export type RecurringBillsUpdateWithoutInstancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: NullableEnumTRANSACTION_CATEGORYFieldUpdateOperationsInput | $Enums.TRANSACTION_CATEGORY | null
    dueDay?: IntFieldUpdateOperationsInput | number
    interval?: EnumRECURRING_INTERVALFieldUpdateOperationsInput | $Enums.RECURRING_INTERVAL
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecurringBillsUncheckedUpdateWithoutInstancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: NullableEnumTRANSACTION_CATEGORYFieldUpdateOperationsInput | $Enums.TRANSACTION_CATEGORY | null
    dueDay?: IntFieldUpdateOperationsInput | number
    interval?: EnumRECURRING_INTERVALFieldUpdateOperationsInput | $Enums.RECURRING_INTERVAL
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionsUpsertWithoutBillInstanceInput = {
    update: XOR<TransactionsUpdateWithoutBillInstanceInput, TransactionsUncheckedUpdateWithoutBillInstanceInput>
    create: XOR<TransactionsCreateWithoutBillInstanceInput, TransactionsUncheckedCreateWithoutBillInstanceInput>
    where?: TransactionsWhereInput
  }

  export type TransactionsUpdateToOneWithWhereWithoutBillInstanceInput = {
    where?: TransactionsWhereInput
    data: XOR<TransactionsUpdateWithoutBillInstanceInput, TransactionsUncheckedUpdateWithoutBillInstanceInput>
  }

  export type TransactionsUpdateWithoutBillInstanceInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    category?: NullableEnumTRANSACTION_CATEGORYFieldUpdateOperationsInput | $Enums.TRANSACTION_CATEGORY | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    wallet?: WalletsUpdateOneRequiredWithoutTransactionNestedInput
  }

  export type TransactionsUncheckedUpdateWithoutBillInstanceInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    category?: NullableEnumTRANSACTION_CATEGORYFieldUpdateOperationsInput | $Enums.TRANSACTION_CATEGORY | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TransactionsCreateWithoutWalletInput = {
    id?: string
    amount: number
    type?: $Enums.TransactionType
    category?: $Enums.TRANSACTION_CATEGORY | null
    createdAt?: Date | string
    updatedAt?: Date | string
    description?: string | null
    billInstance?: BillInstancesCreateNestedOneWithoutTransactionInput
  }

  export type TransactionsUncheckedCreateWithoutWalletInput = {
    id?: string
    billInstanceId?: string | null
    amount: number
    type?: $Enums.TransactionType
    category?: $Enums.TRANSACTION_CATEGORY | null
    createdAt?: Date | string
    updatedAt?: Date | string
    description?: string | null
  }

  export type TransactionsCreateOrConnectWithoutWalletInput = {
    where: TransactionsWhereUniqueInput
    create: XOR<TransactionsCreateWithoutWalletInput, TransactionsUncheckedCreateWithoutWalletInput>
  }

  export type TransactionsCreateManyWalletInputEnvelope = {
    data: TransactionsCreateManyWalletInput | TransactionsCreateManyWalletInput[]
    skipDuplicates?: boolean
  }

  export type TransactionsUpsertWithWhereUniqueWithoutWalletInput = {
    where: TransactionsWhereUniqueInput
    update: XOR<TransactionsUpdateWithoutWalletInput, TransactionsUncheckedUpdateWithoutWalletInput>
    create: XOR<TransactionsCreateWithoutWalletInput, TransactionsUncheckedCreateWithoutWalletInput>
  }

  export type TransactionsUpdateWithWhereUniqueWithoutWalletInput = {
    where: TransactionsWhereUniqueInput
    data: XOR<TransactionsUpdateWithoutWalletInput, TransactionsUncheckedUpdateWithoutWalletInput>
  }

  export type TransactionsUpdateManyWithWhereWithoutWalletInput = {
    where: TransactionsScalarWhereInput
    data: XOR<TransactionsUpdateManyMutationInput, TransactionsUncheckedUpdateManyWithoutWalletInput>
  }

  export type TransactionsScalarWhereInput = {
    AND?: TransactionsScalarWhereInput | TransactionsScalarWhereInput[]
    OR?: TransactionsScalarWhereInput[]
    NOT?: TransactionsScalarWhereInput | TransactionsScalarWhereInput[]
    id?: StringFilter<"Transactions"> | string
    walletId?: StringFilter<"Transactions"> | string
    billInstanceId?: StringNullableFilter<"Transactions"> | string | null
    amount?: IntFilter<"Transactions"> | number
    type?: EnumTransactionTypeFilter<"Transactions"> | $Enums.TransactionType
    category?: EnumTRANSACTION_CATEGORYNullableFilter<"Transactions"> | $Enums.TRANSACTION_CATEGORY | null
    createdAt?: DateTimeFilter<"Transactions"> | Date | string
    updatedAt?: DateTimeFilter<"Transactions"> | Date | string
    description?: StringNullableFilter<"Transactions"> | string | null
  }

  export type WalletsCreateWithoutTransactionInput = {
    id?: string
    name: string
    balance?: number
    walletType?: $Enums.WALLET_TYPE
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WalletsUncheckedCreateWithoutTransactionInput = {
    id?: string
    name: string
    balance?: number
    walletType?: $Enums.WALLET_TYPE
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WalletsCreateOrConnectWithoutTransactionInput = {
    where: WalletsWhereUniqueInput
    create: XOR<WalletsCreateWithoutTransactionInput, WalletsUncheckedCreateWithoutTransactionInput>
  }

  export type BillInstancesCreateWithoutTransactionInput = {
    id?: string
    referenceMonth: Date | string
    amount?: number | null
    dueDate: Date | string
    isPaid?: boolean
    paidAt?: Date | string | null
    createdAt?: Date | string
    recurringBill: RecurringBillsCreateNestedOneWithoutInstancesInput
  }

  export type BillInstancesUncheckedCreateWithoutTransactionInput = {
    id?: string
    recurringBillId: string
    referenceMonth: Date | string
    amount?: number | null
    dueDate: Date | string
    isPaid?: boolean
    paidAt?: Date | string | null
    createdAt?: Date | string
  }

  export type BillInstancesCreateOrConnectWithoutTransactionInput = {
    where: BillInstancesWhereUniqueInput
    create: XOR<BillInstancesCreateWithoutTransactionInput, BillInstancesUncheckedCreateWithoutTransactionInput>
  }

  export type WalletsUpsertWithoutTransactionInput = {
    update: XOR<WalletsUpdateWithoutTransactionInput, WalletsUncheckedUpdateWithoutTransactionInput>
    create: XOR<WalletsCreateWithoutTransactionInput, WalletsUncheckedCreateWithoutTransactionInput>
    where?: WalletsWhereInput
  }

  export type WalletsUpdateToOneWithWhereWithoutTransactionInput = {
    where?: WalletsWhereInput
    data: XOR<WalletsUpdateWithoutTransactionInput, WalletsUncheckedUpdateWithoutTransactionInput>
  }

  export type WalletsUpdateWithoutTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    walletType?: EnumWALLET_TYPEFieldUpdateOperationsInput | $Enums.WALLET_TYPE
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WalletsUncheckedUpdateWithoutTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    walletType?: EnumWALLET_TYPEFieldUpdateOperationsInput | $Enums.WALLET_TYPE
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BillInstancesUpsertWithoutTransactionInput = {
    update: XOR<BillInstancesUpdateWithoutTransactionInput, BillInstancesUncheckedUpdateWithoutTransactionInput>
    create: XOR<BillInstancesCreateWithoutTransactionInput, BillInstancesUncheckedCreateWithoutTransactionInput>
    where?: BillInstancesWhereInput
  }

  export type BillInstancesUpdateToOneWithWhereWithoutTransactionInput = {
    where?: BillInstancesWhereInput
    data: XOR<BillInstancesUpdateWithoutTransactionInput, BillInstancesUncheckedUpdateWithoutTransactionInput>
  }

  export type BillInstancesUpdateWithoutTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    referenceMonth?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: NullableIntFieldUpdateOperationsInput | number | null
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recurringBill?: RecurringBillsUpdateOneRequiredWithoutInstancesNestedInput
  }

  export type BillInstancesUncheckedUpdateWithoutTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    recurringBillId?: StringFieldUpdateOperationsInput | string
    referenceMonth?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: NullableIntFieldUpdateOperationsInput | number | null
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BillInstancesCreateManyRecurringBillInput = {
    id?: string
    referenceMonth: Date | string
    amount?: number | null
    dueDate: Date | string
    isPaid?: boolean
    paidAt?: Date | string | null
    createdAt?: Date | string
  }

  export type BillInstancesUpdateWithoutRecurringBillInput = {
    id?: StringFieldUpdateOperationsInput | string
    referenceMonth?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: NullableIntFieldUpdateOperationsInput | number | null
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transaction?: TransactionsUpdateOneWithoutBillInstanceNestedInput
  }

  export type BillInstancesUncheckedUpdateWithoutRecurringBillInput = {
    id?: StringFieldUpdateOperationsInput | string
    referenceMonth?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: NullableIntFieldUpdateOperationsInput | number | null
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transaction?: TransactionsUncheckedUpdateOneWithoutBillInstanceNestedInput
  }

  export type BillInstancesUncheckedUpdateManyWithoutRecurringBillInput = {
    id?: StringFieldUpdateOperationsInput | string
    referenceMonth?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: NullableIntFieldUpdateOperationsInput | number | null
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionsCreateManyWalletInput = {
    id?: string
    billInstanceId?: string | null
    amount: number
    type?: $Enums.TransactionType
    category?: $Enums.TRANSACTION_CATEGORY | null
    createdAt?: Date | string
    updatedAt?: Date | string
    description?: string | null
  }

  export type TransactionsUpdateWithoutWalletInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    category?: NullableEnumTRANSACTION_CATEGORYFieldUpdateOperationsInput | $Enums.TRANSACTION_CATEGORY | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    billInstance?: BillInstancesUpdateOneWithoutTransactionNestedInput
  }

  export type TransactionsUncheckedUpdateWithoutWalletInput = {
    id?: StringFieldUpdateOperationsInput | string
    billInstanceId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: IntFieldUpdateOperationsInput | number
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    category?: NullableEnumTRANSACTION_CATEGORYFieldUpdateOperationsInput | $Enums.TRANSACTION_CATEGORY | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TransactionsUncheckedUpdateManyWithoutWalletInput = {
    id?: StringFieldUpdateOperationsInput | string
    billInstanceId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: IntFieldUpdateOperationsInput | number
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    category?: NullableEnumTRANSACTION_CATEGORYFieldUpdateOperationsInput | $Enums.TRANSACTION_CATEGORY | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
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