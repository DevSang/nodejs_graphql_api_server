const { Prisma } = require('prisma-binding');
const { GraphQLResolveInfo } = require('graphql');

const typeDefs = `
type AggregateAnswerType {
  count: Int!
}

type AggregateAppServerSync {
  count: Int!
}

type AggregateAuthToken {
  count: Int!
}

type AggregateCalibration {
  count: Int!
}

type AggregateCompany {
  count: Int!
}

type AggregateCountry {
  count: Int!
}

type AggregateCup {
  count: Int!
}

type AggregateCupAppSync {
  count: Int!
}

type AggregateCupDataAnswer {
  count: Int!
}

type AggregateCupDataColourCalc {
  count: Int!
}

type AggregateCupDataColourCalib {
  count: Int!
}

type AggregateCupDataManMdate {
  count: Int!
}

type AggregateCupDataProcFlow {
  count: Int!
}

type AggregateCupDataProcMdate {
  count: Int!
}

type AggregateCupDataProcVolume {
  count: Int!
}

type AggregateCupDataQaResponse {
  count: Int!
}

type AggregateCupDataQuestion {
  count: Int!
}

type AggregateCupDataRaw {
  count: Int!
}

type AggregateCupDataRejection {
  count: Int!
}

type AggregateCupDataUserRemove {
  count: Int!
}

type AggregateCupDataUserRemoveExplain {
  count: Int!
}

type AggregateCupDatum {
  count: Int!
}

type AggregateEthnicity {
  count: Int!
}

type AggregateFirmware {
  count: Int!
}

type AggregateHardware {
  count: Int!
}

type AggregatePlatformComp {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type AggregateUserCoinHistory {
  count: Int!
}

type AggregateUserCup {
  count: Int!
}

type AggregateUserInterviewDatum {
  count: Int!
}

type AggregateUserInterviewQuestion {
  count: Int!
}

type AggregateUserRecordDataByDay {
  count: Int!
}

type AggregateUserRecordDataByPeriod {
  count: Int!
}

type AggregateUserRecordDataByTime {
  count: Int!
}

type AggregateUsersDataAnalysis {
  count: Int!
}

type AnswerType {
  id: Int!
  answerType: String!
  userInterviewQuestions(where: UserInterviewQuestionWhereInput, orderBy: UserInterviewQuestionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [UserInterviewQuestion!]
}

"""
A connection to a list of items.
"""
type AnswerTypeConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [AnswerTypeEdge]!
  aggregate: AggregateAnswerType!
}

input AnswerTypeCreateInput {
  answerType: String!
  userInterviewQuestions: UserInterviewQuestionCreateManyWithoutAnswerTypeIdInput
}

input AnswerTypeCreateOneWithoutUserInterviewQuestionsInput {
  create: AnswerTypeCreateWithoutUserInterviewQuestionsInput
  connect: AnswerTypeWhereUniqueInput
}

input AnswerTypeCreateWithoutUserInterviewQuestionsInput {
  answerType: String!
}

"""
An edge in a connection.
"""
type AnswerTypeEdge {
  """
  The item at the end of the edge.
  """
  node: AnswerType!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum AnswerTypeOrderByInput {
  id_ASC
  id_DESC
  answerType_ASC
  answerType_DESC
}

type AnswerTypePreviousValues {
  id: Int!
  answerType: String!
}

type AnswerTypeSubscriptionPayload {
  mutation: MutationType!
  node: AnswerType
  updatedFields: [String!]
  previousValues: AnswerTypePreviousValues
}

input AnswerTypeSubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [AnswerTypeSubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [AnswerTypeSubscriptionWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [AnswerTypeSubscriptionWhereInput!]
  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]
  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String
  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]
  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: AnswerTypeWhereInput
}

input AnswerTypeUpdateInput {
  answerType: String
  userInterviewQuestions: UserInterviewQuestionUpdateManyWithoutAnswerTypeIdInput
}

input AnswerTypeUpdateManyMutationInput {
  answerType: String
}

input AnswerTypeUpdateOneRequiredWithoutUserInterviewQuestionsInput {
  create: AnswerTypeCreateWithoutUserInterviewQuestionsInput
  connect: AnswerTypeWhereUniqueInput
  update: AnswerTypeUpdateWithoutUserInterviewQuestionsDataInput
  upsert: AnswerTypeUpsertWithoutUserInterviewQuestionsInput
}

input AnswerTypeUpdateWithoutUserInterviewQuestionsDataInput {
  answerType: String
}

input AnswerTypeUpsertWithoutUserInterviewQuestionsInput {
  update: AnswerTypeUpdateWithoutUserInterviewQuestionsDataInput!
  create: AnswerTypeCreateWithoutUserInterviewQuestionsInput!
}

input AnswerTypeWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [AnswerTypeWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [AnswerTypeWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [AnswerTypeWhereInput!]
  id: Int
  """
  All values that are not equal to given value.
  """
  id_not: Int
  """
  All values that are contained in given list.
  """
  id_in: [Int!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [Int!]
  """
  All values less than the given value.
  """
  id_lt: Int
  """
  All values less than or equal the given value.
  """
  id_lte: Int
  """
  All values greater than the given value.
  """
  id_gt: Int
  """
  All values greater than or equal the given value.
  """
  id_gte: Int
  answerType: String
  """
  All values that are not equal to given value.
  """
  answerType_not: String
  """
  All values that are contained in given list.
  """
  answerType_in: [String!]
  """
  All values that are not contained in given list.
  """
  answerType_not_in: [String!]
  """
  All values less than the given value.
  """
  answerType_lt: String
  """
  All values less than or equal the given value.
  """
  answerType_lte: String
  """
  All values greater than the given value.
  """
  answerType_gt: String
  """
  All values greater than or equal the given value.
  """
  answerType_gte: String
  """
  All values containing the given string.
  """
  answerType_contains: String
  """
  All values not containing the given string.
  """
  answerType_not_contains: String
  """
  All values starting with the given string.
  """
  answerType_starts_with: String
  """
  All values not starting with the given string.
  """
  answerType_not_starts_with: String
  """
  All values ending with the given string.
  """
  answerType_ends_with: String
  """
  All values not ending with the given string.
  """
  answerType_not_ends_with: String
  userInterviewQuestions_every: UserInterviewQuestionWhereInput
  userInterviewQuestions_some: UserInterviewQuestionWhereInput
  userInterviewQuestions_none: UserInterviewQuestionWhereInput
}

input AnswerTypeWhereUniqueInput {
  id: Int
  answerType: String
}

type AppServerSync {
  id: Int!
  serverSynchTime: DateTime!
  userId: User!
}

"""
A connection to a list of items.
"""
type AppServerSyncConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [AppServerSyncEdge]!
  aggregate: AggregateAppServerSync!
}

input AppServerSyncCreateInput {
  serverSynchTime: DateTime!
  userId: UserCreateOneWithoutAppServerSyncInput!
}

input AppServerSyncCreateManyWithoutUserIdInput {
  create: [AppServerSyncCreateWithoutUserIdInput!]
  connect: [AppServerSyncWhereUniqueInput!]
}

input AppServerSyncCreateWithoutUserIdInput {
  serverSynchTime: DateTime!
}

"""
An edge in a connection.
"""
type AppServerSyncEdge {
  """
  The item at the end of the edge.
  """
  node: AppServerSync!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum AppServerSyncOrderByInput {
  id_ASC
  id_DESC
  serverSynchTime_ASC
  serverSynchTime_DESC
}

type AppServerSyncPreviousValues {
  id: Int!
  serverSynchTime: DateTime!
}

input AppServerSyncScalarWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [AppServerSyncScalarWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [AppServerSyncScalarWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [AppServerSyncScalarWhereInput!]
  id: Int
  """
  All values that are not equal to given value.
  """
  id_not: Int
  """
  All values that are contained in given list.
  """
  id_in: [Int!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [Int!]
  """
  All values less than the given value.
  """
  id_lt: Int
  """
  All values less than or equal the given value.
  """
  id_lte: Int
  """
  All values greater than the given value.
  """
  id_gt: Int
  """
  All values greater than or equal the given value.
  """
  id_gte: Int
  serverSynchTime: DateTime
  """
  All values that are not equal to given value.
  """
  serverSynchTime_not: DateTime
  """
  All values that are contained in given list.
  """
  serverSynchTime_in: [DateTime!]
  """
  All values that are not contained in given list.
  """
  serverSynchTime_not_in: [DateTime!]
  """
  All values less than the given value.
  """
  serverSynchTime_lt: DateTime
  """
  All values less than or equal the given value.
  """
  serverSynchTime_lte: DateTime
  """
  All values greater than the given value.
  """
  serverSynchTime_gt: DateTime
  """
  All values greater than or equal the given value.
  """
  serverSynchTime_gte: DateTime
}

type AppServerSyncSubscriptionPayload {
  mutation: MutationType!
  node: AppServerSync
  updatedFields: [String!]
  previousValues: AppServerSyncPreviousValues
}

input AppServerSyncSubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [AppServerSyncSubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [AppServerSyncSubscriptionWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [AppServerSyncSubscriptionWhereInput!]
  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]
  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String
  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]
  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: AppServerSyncWhereInput
}

input AppServerSyncUpdateInput {
  serverSynchTime: DateTime
  userId: UserUpdateOneRequiredWithoutAppServerSyncInput
}

input AppServerSyncUpdateManyDataInput {
  serverSynchTime: DateTime
}

input AppServerSyncUpdateManyMutationInput {
  serverSynchTime: DateTime
}

input AppServerSyncUpdateManyWithoutUserIdInput {
  create: [AppServerSyncCreateWithoutUserIdInput!]
  connect: [AppServerSyncWhereUniqueInput!]
  set: [AppServerSyncWhereUniqueInput!]
  disconnect: [AppServerSyncWhereUniqueInput!]
  delete: [AppServerSyncWhereUniqueInput!]
  update: [AppServerSyncUpdateWithWhereUniqueWithoutUserIdInput!]
  updateMany: [AppServerSyncUpdateManyWithWhereNestedInput!]
  deleteMany: [AppServerSyncScalarWhereInput!]
  upsert: [AppServerSyncUpsertWithWhereUniqueWithoutUserIdInput!]
}

input AppServerSyncUpdateManyWithWhereNestedInput {
  where: AppServerSyncScalarWhereInput!
  data: AppServerSyncUpdateManyDataInput!
}

input AppServerSyncUpdateWithoutUserIdDataInput {
  serverSynchTime: DateTime
}

input AppServerSyncUpdateWithWhereUniqueWithoutUserIdInput {
  where: AppServerSyncWhereUniqueInput!
  data: AppServerSyncUpdateWithoutUserIdDataInput!
}

input AppServerSyncUpsertWithWhereUniqueWithoutUserIdInput {
  where: AppServerSyncWhereUniqueInput!
  update: AppServerSyncUpdateWithoutUserIdDataInput!
  create: AppServerSyncCreateWithoutUserIdInput!
}

input AppServerSyncWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [AppServerSyncWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [AppServerSyncWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [AppServerSyncWhereInput!]
  id: Int
  """
  All values that are not equal to given value.
  """
  id_not: Int
  """
  All values that are contained in given list.
  """
  id_in: [Int!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [Int!]
  """
  All values less than the given value.
  """
  id_lt: Int
  """
  All values less than or equal the given value.
  """
  id_lte: Int
  """
  All values greater than the given value.
  """
  id_gt: Int
  """
  All values greater than or equal the given value.
  """
  id_gte: Int
  serverSynchTime: DateTime
  """
  All values that are not equal to given value.
  """
  serverSynchTime_not: DateTime
  """
  All values that are contained in given list.
  """
  serverSynchTime_in: [DateTime!]
  """
  All values that are not contained in given list.
  """
  serverSynchTime_not_in: [DateTime!]
  """
  All values less than the given value.
  """
  serverSynchTime_lt: DateTime
  """
  All values less than or equal the given value.
  """
  serverSynchTime_lte: DateTime
  """
  All values greater than the given value.
  """
  serverSynchTime_gt: DateTime
  """
  All values greater than or equal the given value.
  """
  serverSynchTime_gte: DateTime
  userId: UserWhereInput
}

input AppServerSyncWhereUniqueInput {
  id: Int
}

type AuthToken {
  id: Int!
}

"""
A connection to a list of items.
"""
type AuthTokenConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [AuthTokenEdge]!
  aggregate: AggregateAuthToken!
}

"""
An edge in a connection.
"""
type AuthTokenEdge {
  """
  The item at the end of the edge.
  """
  node: AuthToken!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum AuthTokenOrderByInput {
  id_ASC
  id_DESC
}

type AuthTokenPreviousValues {
  id: Int!
}

type AuthTokenSubscriptionPayload {
  mutation: MutationType!
  node: AuthToken
  updatedFields: [String!]
  previousValues: AuthTokenPreviousValues
}

input AuthTokenSubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [AuthTokenSubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [AuthTokenSubscriptionWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [AuthTokenSubscriptionWhereInput!]
  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]
  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String
  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]
  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: AuthTokenWhereInput
}

input AuthTokenWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [AuthTokenWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [AuthTokenWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [AuthTokenWhereInput!]
  id: Int
  """
  All values that are not equal to given value.
  """
  id_not: Int
  """
  All values that are contained in given list.
  """
  id_in: [Int!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [Int!]
  """
  All values less than the given value.
  """
  id_lt: Int
  """
  All values less than or equal the given value.
  """
  id_lte: Int
  """
  All values greater than the given value.
  """
  id_gt: Int
  """
  All values greater than or equal the given value.
  """
  id_gte: Int
}

input AuthTokenWhereUniqueInput {
  id: Int
}

type BatchPayload {
  """
  The number of nodes that have been affected by the Batch operation.
  """
  count: Long!
}

type Calibration {
  id: Int!
  calibVersion: String!
  cup(where: CupWhereInput, orderBy: CupOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Cup!]
}

"""
A connection to a list of items.
"""
type CalibrationConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [CalibrationEdge]!
  aggregate: AggregateCalibration!
}

input CalibrationCreateInput {
  calibVersion: String!
  cup: CupCreateManyWithoutCalibIdInput
}

input CalibrationCreateOneWithoutCupInput {
  create: CalibrationCreateWithoutCupInput
  connect: CalibrationWhereUniqueInput
}

input CalibrationCreateWithoutCupInput {
  calibVersion: String!
}

"""
An edge in a connection.
"""
type CalibrationEdge {
  """
  The item at the end of the edge.
  """
  node: Calibration!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum CalibrationOrderByInput {
  id_ASC
  id_DESC
  calibVersion_ASC
  calibVersion_DESC
}

type CalibrationPreviousValues {
  id: Int!
  calibVersion: String!
}

type CalibrationSubscriptionPayload {
  mutation: MutationType!
  node: Calibration
  updatedFields: [String!]
  previousValues: CalibrationPreviousValues
}

input CalibrationSubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [CalibrationSubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [CalibrationSubscriptionWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [CalibrationSubscriptionWhereInput!]
  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]
  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String
  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]
  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: CalibrationWhereInput
}

input CalibrationUpdateInput {
  calibVersion: String
  cup: CupUpdateManyWithoutCalibIdInput
}

input CalibrationUpdateManyMutationInput {
  calibVersion: String
}

input CalibrationUpdateOneWithoutCupInput {
  create: CalibrationCreateWithoutCupInput
  connect: CalibrationWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: CalibrationUpdateWithoutCupDataInput
  upsert: CalibrationUpsertWithoutCupInput
}

input CalibrationUpdateWithoutCupDataInput {
  calibVersion: String
}

input CalibrationUpsertWithoutCupInput {
  update: CalibrationUpdateWithoutCupDataInput!
  create: CalibrationCreateWithoutCupInput!
}

input CalibrationWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [CalibrationWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [CalibrationWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [CalibrationWhereInput!]
  id: Int
  """
  All values that are not equal to given value.
  """
  id_not: Int
  """
  All values that are contained in given list.
  """
  id_in: [Int!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [Int!]
  """
  All values less than the given value.
  """
  id_lt: Int
  """
  All values less than or equal the given value.
  """
  id_lte: Int
  """
  All values greater than the given value.
  """
  id_gt: Int
  """
  All values greater than or equal the given value.
  """
  id_gte: Int
  calibVersion: String
  """
  All values that are not equal to given value.
  """
  calibVersion_not: String
  """
  All values that are contained in given list.
  """
  calibVersion_in: [String!]
  """
  All values that are not contained in given list.
  """
  calibVersion_not_in: [String!]
  """
  All values less than the given value.
  """
  calibVersion_lt: String
  """
  All values less than or equal the given value.
  """
  calibVersion_lte: String
  """
  All values greater than the given value.
  """
  calibVersion_gt: String
  """
  All values greater than or equal the given value.
  """
  calibVersion_gte: String
  """
  All values containing the given string.
  """
  calibVersion_contains: String
  """
  All values not containing the given string.
  """
  calibVersion_not_contains: String
  """
  All values starting with the given string.
  """
  calibVersion_starts_with: String
  """
  All values not starting with the given string.
  """
  calibVersion_not_starts_with: String
  """
  All values ending with the given string.
  """
  calibVersion_ends_with: String
  """
  All values not ending with the given string.
  """
  calibVersion_not_ends_with: String
  cup_every: CupWhereInput
  cup_some: CupWhereInput
  cup_none: CupWhereInput
}

input CalibrationWhereUniqueInput {
  id: Int
  calibVersion: String
}

type Company {
  id: Int!
  companyName: String!
  cup(where: CupWhereInput, orderBy: CupOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Cup!]
}

"""
A connection to a list of items.
"""
type CompanyConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [CompanyEdge]!
  aggregate: AggregateCompany!
}

input CompanyCreateInput {
  companyName: String!
  cup: CupCreateManyWithoutCompanyIdInput
}

input CompanyCreateOneWithoutCupInput {
  create: CompanyCreateWithoutCupInput
  connect: CompanyWhereUniqueInput
}

input CompanyCreateWithoutCupInput {
  companyName: String!
}

"""
An edge in a connection.
"""
type CompanyEdge {
  """
  The item at the end of the edge.
  """
  node: Company!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum CompanyOrderByInput {
  id_ASC
  id_DESC
  companyName_ASC
  companyName_DESC
}

type CompanyPreviousValues {
  id: Int!
  companyName: String!
}

type CompanySubscriptionPayload {
  mutation: MutationType!
  node: Company
  updatedFields: [String!]
  previousValues: CompanyPreviousValues
}

input CompanySubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [CompanySubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [CompanySubscriptionWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [CompanySubscriptionWhereInput!]
  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]
  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String
  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]
  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: CompanyWhereInput
}

input CompanyUpdateInput {
  companyName: String
  cup: CupUpdateManyWithoutCompanyIdInput
}

input CompanyUpdateManyMutationInput {
  companyName: String
}

input CompanyUpdateOneWithoutCupInput {
  create: CompanyCreateWithoutCupInput
  connect: CompanyWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: CompanyUpdateWithoutCupDataInput
  upsert: CompanyUpsertWithoutCupInput
}

input CompanyUpdateWithoutCupDataInput {
  companyName: String
}

input CompanyUpsertWithoutCupInput {
  update: CompanyUpdateWithoutCupDataInput!
  create: CompanyCreateWithoutCupInput!
}

input CompanyWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [CompanyWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [CompanyWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [CompanyWhereInput!]
  id: Int
  """
  All values that are not equal to given value.
  """
  id_not: Int
  """
  All values that are contained in given list.
  """
  id_in: [Int!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [Int!]
  """
  All values less than the given value.
  """
  id_lt: Int
  """
  All values less than or equal the given value.
  """
  id_lte: Int
  """
  All values greater than the given value.
  """
  id_gt: Int
  """
  All values greater than or equal the given value.
  """
  id_gte: Int
  companyName: String
  """
  All values that are not equal to given value.
  """
  companyName_not: String
  """
  All values that are contained in given list.
  """
  companyName_in: [String!]
  """
  All values that are not contained in given list.
  """
  companyName_not_in: [String!]
  """
  All values less than the given value.
  """
  companyName_lt: String
  """
  All values less than or equal the given value.
  """
  companyName_lte: String
  """
  All values greater than the given value.
  """
  companyName_gt: String
  """
  All values greater than or equal the given value.
  """
  companyName_gte: String
  """
  All values containing the given string.
  """
  companyName_contains: String
  """
  All values not containing the given string.
  """
  companyName_not_contains: String
  """
  All values starting with the given string.
  """
  companyName_starts_with: String
  """
  All values not starting with the given string.
  """
  companyName_not_starts_with: String
  """
  All values ending with the given string.
  """
  companyName_ends_with: String
  """
  All values not ending with the given string.
  """
  companyName_not_ends_with: String
  cup_every: CupWhereInput
  cup_some: CupWhereInput
  cup_none: CupWhereInput
}

input CompanyWhereUniqueInput {
  id: Int
  companyName: String
}

type Country {
  id: Int!
  countryName: String!
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
}

"""
A connection to a list of items.
"""
type CountryConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [CountryEdge]!
  aggregate: AggregateCountry!
}

input CountryCreateInput {
  countryName: String!
  users: UserCreateManyWithoutCountryIdInput
}

input CountryCreateOneWithoutUsersInput {
  create: CountryCreateWithoutUsersInput
  connect: CountryWhereUniqueInput
}

input CountryCreateWithoutUsersInput {
  countryName: String!
}

"""
An edge in a connection.
"""
type CountryEdge {
  """
  The item at the end of the edge.
  """
  node: Country!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum CountryOrderByInput {
  id_ASC
  id_DESC
  countryName_ASC
  countryName_DESC
}

type CountryPreviousValues {
  id: Int!
  countryName: String!
}

type CountrySubscriptionPayload {
  mutation: MutationType!
  node: Country
  updatedFields: [String!]
  previousValues: CountryPreviousValues
}

input CountrySubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [CountrySubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [CountrySubscriptionWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [CountrySubscriptionWhereInput!]
  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]
  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String
  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]
  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: CountryWhereInput
}

input CountryUpdateInput {
  countryName: String
  users: UserUpdateManyWithoutCountryIdInput
}

input CountryUpdateManyMutationInput {
  countryName: String
}

input CountryUpdateOneWithoutUsersInput {
  create: CountryCreateWithoutUsersInput
  connect: CountryWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: CountryUpdateWithoutUsersDataInput
  upsert: CountryUpsertWithoutUsersInput
}

input CountryUpdateWithoutUsersDataInput {
  countryName: String
}

input CountryUpsertWithoutUsersInput {
  update: CountryUpdateWithoutUsersDataInput!
  create: CountryCreateWithoutUsersInput!
}

input CountryWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [CountryWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [CountryWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [CountryWhereInput!]
  id: Int
  """
  All values that are not equal to given value.
  """
  id_not: Int
  """
  All values that are contained in given list.
  """
  id_in: [Int!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [Int!]
  """
  All values less than the given value.
  """
  id_lt: Int
  """
  All values less than or equal the given value.
  """
  id_lte: Int
  """
  All values greater than the given value.
  """
  id_gt: Int
  """
  All values greater than or equal the given value.
  """
  id_gte: Int
  countryName: String
  """
  All values that are not equal to given value.
  """
  countryName_not: String
  """
  All values that are contained in given list.
  """
  countryName_in: [String!]
  """
  All values that are not contained in given list.
  """
  countryName_not_in: [String!]
  """
  All values less than the given value.
  """
  countryName_lt: String
  """
  All values less than or equal the given value.
  """
  countryName_lte: String
  """
  All values greater than the given value.
  """
  countryName_gt: String
  """
  All values greater than or equal the given value.
  """
  countryName_gte: String
  """
  All values containing the given string.
  """
  countryName_contains: String
  """
  All values not containing the given string.
  """
  countryName_not_contains: String
  """
  All values starting with the given string.
  """
  countryName_starts_with: String
  """
  All values not starting with the given string.
  """
  countryName_not_starts_with: String
  """
  All values ending with the given string.
  """
  countryName_ends_with: String
  """
  All values not ending with the given string.
  """
  countryName_not_ends_with: String
  users_every: UserWhereInput
  users_some: UserWhereInput
  users_none: UserWhereInput
}

input CountryWhereUniqueInput {
  id: Int
  countryName: String
}

type Cup {
  id: Int!
  anonSerialNumber: Int!
  calibId: Calibration
  companyId: Company
  cupAppSync(where: CupAppSyncWhereInput, orderBy: CupAppSyncOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [CupAppSync!]
  cupData(where: CupDatumWhereInput, orderBy: CupDatumOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [CupDatum!]
  cupDataColourCalib(where: CupDataColourCalibWhereInput, orderBy: CupDataColourCalibOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [CupDataColourCalib!]
  cupDataRaw(where: CupDataRawWhereInput, orderBy: CupDataRawOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [CupDataRaw!]
  cupDataUserRemove(where: CupDataUserRemoveWhereInput, orderBy: CupDataUserRemoveOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [CupDataUserRemove!]
  encryptionKey: Int!
  fwId: Firmware
  hwId: Hardware
  userCups(where: UserCupWhereInput, orderBy: UserCupOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [UserCup!]
}

type CupAppSync {
  id: Int!
  appSynchTime: DateTime!
  serialNumber: Cup!
}

"""
A connection to a list of items.
"""
type CupAppSyncConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [CupAppSyncEdge]!
  aggregate: AggregateCupAppSync!
}

input CupAppSyncCreateInput {
  appSynchTime: DateTime!
  serialNumber: CupCreateOneWithoutCupAppSyncInput!
}

input CupAppSyncCreateManyWithoutSerialNumberInput {
  create: [CupAppSyncCreateWithoutSerialNumberInput!]
  connect: [CupAppSyncWhereUniqueInput!]
}

input CupAppSyncCreateWithoutSerialNumberInput {
  appSynchTime: DateTime!
}

"""
An edge in a connection.
"""
type CupAppSyncEdge {
  """
  The item at the end of the edge.
  """
  node: CupAppSync!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum CupAppSyncOrderByInput {
  id_ASC
  id_DESC
  appSynchTime_ASC
  appSynchTime_DESC
}

type CupAppSyncPreviousValues {
  id: Int!
  appSynchTime: DateTime!
}

input CupAppSyncScalarWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [CupAppSyncScalarWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [CupAppSyncScalarWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [CupAppSyncScalarWhereInput!]
  id: Int
  """
  All values that are not equal to given value.
  """
  id_not: Int
  """
  All values that are contained in given list.
  """
  id_in: [Int!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [Int!]
  """
  All values less than the given value.
  """
  id_lt: Int
  """
  All values less than or equal the given value.
  """
  id_lte: Int
  """
  All values greater than the given value.
  """
  id_gt: Int
  """
  All values greater than or equal the given value.
  """
  id_gte: Int
  appSynchTime: DateTime
  """
  All values that are not equal to given value.
  """
  appSynchTime_not: DateTime
  """
  All values that are contained in given list.
  """
  appSynchTime_in: [DateTime!]
  """
  All values that are not contained in given list.
  """
  appSynchTime_not_in: [DateTime!]
  """
  All values less than the given value.
  """
  appSynchTime_lt: DateTime
  """
  All values less than or equal the given value.
  """
  appSynchTime_lte: DateTime
  """
  All values greater than the given value.
  """
  appSynchTime_gt: DateTime
  """
  All values greater than or equal the given value.
  """
  appSynchTime_gte: DateTime
}

type CupAppSyncSubscriptionPayload {
  mutation: MutationType!
  node: CupAppSync
  updatedFields: [String!]
  previousValues: CupAppSyncPreviousValues
}

input CupAppSyncSubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [CupAppSyncSubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [CupAppSyncSubscriptionWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [CupAppSyncSubscriptionWhereInput!]
  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]
  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String
  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]
  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: CupAppSyncWhereInput
}

input CupAppSyncUpdateInput {
  appSynchTime: DateTime
  serialNumber: CupUpdateOneRequiredWithoutCupAppSyncInput
}

input CupAppSyncUpdateManyDataInput {
  appSynchTime: DateTime
}

input CupAppSyncUpdateManyMutationInput {
  appSynchTime: DateTime
}

input CupAppSyncUpdateManyWithoutSerialNumberInput {
  create: [CupAppSyncCreateWithoutSerialNumberInput!]
  connect: [CupAppSyncWhereUniqueInput!]
  set: [CupAppSyncWhereUniqueInput!]
  disconnect: [CupAppSyncWhereUniqueInput!]
  delete: [CupAppSyncWhereUniqueInput!]
  update: [CupAppSyncUpdateWithWhereUniqueWithoutSerialNumberInput!]
  updateMany: [CupAppSyncUpdateManyWithWhereNestedInput!]
  deleteMany: [CupAppSyncScalarWhereInput!]
  upsert: [CupAppSyncUpsertWithWhereUniqueWithoutSerialNumberInput!]
}

input CupAppSyncUpdateManyWithWhereNestedInput {
  where: CupAppSyncScalarWhereInput!
  data: CupAppSyncUpdateManyDataInput!
}

input CupAppSyncUpdateWithoutSerialNumberDataInput {
  appSynchTime: DateTime
}

input CupAppSyncUpdateWithWhereUniqueWithoutSerialNumberInput {
  where: CupAppSyncWhereUniqueInput!
  data: CupAppSyncUpdateWithoutSerialNumberDataInput!
}

input CupAppSyncUpsertWithWhereUniqueWithoutSerialNumberInput {
  where: CupAppSyncWhereUniqueInput!
  update: CupAppSyncUpdateWithoutSerialNumberDataInput!
  create: CupAppSyncCreateWithoutSerialNumberInput!
}

input CupAppSyncWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [CupAppSyncWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [CupAppSyncWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [CupAppSyncWhereInput!]
  id: Int
  """
  All values that are not equal to given value.
  """
  id_not: Int
  """
  All values that are contained in given list.
  """
  id_in: [Int!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [Int!]
  """
  All values less than the given value.
  """
  id_lt: Int
  """
  All values less than or equal the given value.
  """
  id_lte: Int
  """
  All values greater than the given value.
  """
  id_gt: Int
  """
  All values greater than or equal the given value.
  """
  id_gte: Int
  appSynchTime: DateTime
  """
  All values that are not equal to given value.
  """
  appSynchTime_not: DateTime
  """
  All values that are contained in given list.
  """
  appSynchTime_in: [DateTime!]
  """
  All values that are not contained in given list.
  """
  appSynchTime_not_in: [DateTime!]
  """
  All values less than the given value.
  """
  appSynchTime_lt: DateTime
  """
  All values less than or equal the given value.
  """
  appSynchTime_lte: DateTime
  """
  All values greater than the given value.
  """
  appSynchTime_gt: DateTime
  """
  All values greater than or equal the given value.
  """
  appSynchTime_gte: DateTime
  serialNumber: CupWhereInput
}

input CupAppSyncWhereUniqueInput {
  id: Int
}

"""
A connection to a list of items.
"""
type CupConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [CupEdge]!
  aggregate: AggregateCup!
}

input CupCreateInput {
  anonSerialNumber: Int!
  encryptionKey: Int!
  calibId: CalibrationCreateOneWithoutCupInput
  companyId: CompanyCreateOneWithoutCupInput
  cupAppSync: CupAppSyncCreateManyWithoutSerialNumberInput
  cupData: CupDatumCreateManyWithoutSerialNumberInput
  cupDataColourCalib: CupDataColourCalibCreateManyWithoutSerialNumberInput
  cupDataRaw: CupDataRawCreateManyWithoutSerialNumberInput
  cupDataUserRemove: CupDataUserRemoveCreateManyWithoutSerialNumberInput
  fwId: FirmwareCreateOneWithoutCupInput
  hwId: HardwareCreateOneWithoutCupInput
  userCups: UserCupCreateManyWithoutSerialNumberInput
}

input CupCreateManyWithoutCalibIdInput {
  create: [CupCreateWithoutCalibIdInput!]
  connect: [CupWhereUniqueInput!]
}

input CupCreateManyWithoutCompanyIdInput {
  create: [CupCreateWithoutCompanyIdInput!]
  connect: [CupWhereUniqueInput!]
}

input CupCreateManyWithoutFwIdInput {
  create: [CupCreateWithoutFwIdInput!]
  connect: [CupWhereUniqueInput!]
}

input CupCreateManyWithoutHwIdInput {
  create: [CupCreateWithoutHwIdInput!]
  connect: [CupWhereUniqueInput!]
}

input CupCreateOneWithoutCupAppSyncInput {
  create: CupCreateWithoutCupAppSyncInput
  connect: CupWhereUniqueInput
}

input CupCreateOneWithoutCupDataColourCalibInput {
  create: CupCreateWithoutCupDataColourCalibInput
  connect: CupWhereUniqueInput
}

input CupCreateOneWithoutCupDataInput {
  create: CupCreateWithoutCupDataInput
  connect: CupWhereUniqueInput
}

input CupCreateOneWithoutCupDataRawInput {
  create: CupCreateWithoutCupDataRawInput
  connect: CupWhereUniqueInput
}

input CupCreateOneWithoutCupDataUserRemoveInput {
  create: CupCreateWithoutCupDataUserRemoveInput
  connect: CupWhereUniqueInput
}

input CupCreateOneWithoutUserCupsInput {
  create: CupCreateWithoutUserCupsInput
  connect: CupWhereUniqueInput
}

input CupCreateWithoutCalibIdInput {
  anonSerialNumber: Int!
  encryptionKey: Int!
  companyId: CompanyCreateOneWithoutCupInput
  cupAppSync: CupAppSyncCreateManyWithoutSerialNumberInput
  cupData: CupDatumCreateManyWithoutSerialNumberInput
  cupDataColourCalib: CupDataColourCalibCreateManyWithoutSerialNumberInput
  cupDataRaw: CupDataRawCreateManyWithoutSerialNumberInput
  cupDataUserRemove: CupDataUserRemoveCreateManyWithoutSerialNumberInput
  fwId: FirmwareCreateOneWithoutCupInput
  hwId: HardwareCreateOneWithoutCupInput
  userCups: UserCupCreateManyWithoutSerialNumberInput
}

input CupCreateWithoutCompanyIdInput {
  anonSerialNumber: Int!
  encryptionKey: Int!
  calibId: CalibrationCreateOneWithoutCupInput
  cupAppSync: CupAppSyncCreateManyWithoutSerialNumberInput
  cupData: CupDatumCreateManyWithoutSerialNumberInput
  cupDataColourCalib: CupDataColourCalibCreateManyWithoutSerialNumberInput
  cupDataRaw: CupDataRawCreateManyWithoutSerialNumberInput
  cupDataUserRemove: CupDataUserRemoveCreateManyWithoutSerialNumberInput
  fwId: FirmwareCreateOneWithoutCupInput
  hwId: HardwareCreateOneWithoutCupInput
  userCups: UserCupCreateManyWithoutSerialNumberInput
}

input CupCreateWithoutCupAppSyncInput {
  anonSerialNumber: Int!
  encryptionKey: Int!
  calibId: CalibrationCreateOneWithoutCupInput
  companyId: CompanyCreateOneWithoutCupInput
  cupData: CupDatumCreateManyWithoutSerialNumberInput
  cupDataColourCalib: CupDataColourCalibCreateManyWithoutSerialNumberInput
  cupDataRaw: CupDataRawCreateManyWithoutSerialNumberInput
  cupDataUserRemove: CupDataUserRemoveCreateManyWithoutSerialNumberInput
  fwId: FirmwareCreateOneWithoutCupInput
  hwId: HardwareCreateOneWithoutCupInput
  userCups: UserCupCreateManyWithoutSerialNumberInput
}

input CupCreateWithoutCupDataColourCalibInput {
  anonSerialNumber: Int!
  encryptionKey: Int!
  calibId: CalibrationCreateOneWithoutCupInput
  companyId: CompanyCreateOneWithoutCupInput
  cupAppSync: CupAppSyncCreateManyWithoutSerialNumberInput
  cupData: CupDatumCreateManyWithoutSerialNumberInput
  cupDataRaw: CupDataRawCreateManyWithoutSerialNumberInput
  cupDataUserRemove: CupDataUserRemoveCreateManyWithoutSerialNumberInput
  fwId: FirmwareCreateOneWithoutCupInput
  hwId: HardwareCreateOneWithoutCupInput
  userCups: UserCupCreateManyWithoutSerialNumberInput
}

input CupCreateWithoutCupDataInput {
  anonSerialNumber: Int!
  encryptionKey: Int!
  calibId: CalibrationCreateOneWithoutCupInput
  companyId: CompanyCreateOneWithoutCupInput
  cupAppSync: CupAppSyncCreateManyWithoutSerialNumberInput
  cupDataColourCalib: CupDataColourCalibCreateManyWithoutSerialNumberInput
  cupDataRaw: CupDataRawCreateManyWithoutSerialNumberInput
  cupDataUserRemove: CupDataUserRemoveCreateManyWithoutSerialNumberInput
  fwId: FirmwareCreateOneWithoutCupInput
  hwId: HardwareCreateOneWithoutCupInput
  userCups: UserCupCreateManyWithoutSerialNumberInput
}

input CupCreateWithoutCupDataRawInput {
  anonSerialNumber: Int!
  encryptionKey: Int!
  calibId: CalibrationCreateOneWithoutCupInput
  companyId: CompanyCreateOneWithoutCupInput
  cupAppSync: CupAppSyncCreateManyWithoutSerialNumberInput
  cupData: CupDatumCreateManyWithoutSerialNumberInput
  cupDataColourCalib: CupDataColourCalibCreateManyWithoutSerialNumberInput
  cupDataUserRemove: CupDataUserRemoveCreateManyWithoutSerialNumberInput
  fwId: FirmwareCreateOneWithoutCupInput
  hwId: HardwareCreateOneWithoutCupInput
  userCups: UserCupCreateManyWithoutSerialNumberInput
}

input CupCreateWithoutCupDataUserRemoveInput {
  anonSerialNumber: Int!
  encryptionKey: Int!
  calibId: CalibrationCreateOneWithoutCupInput
  companyId: CompanyCreateOneWithoutCupInput
  cupAppSync: CupAppSyncCreateManyWithoutSerialNumberInput
  cupData: CupDatumCreateManyWithoutSerialNumberInput
  cupDataColourCalib: CupDataColourCalibCreateManyWithoutSerialNumberInput
  cupDataRaw: CupDataRawCreateManyWithoutSerialNumberInput
  fwId: FirmwareCreateOneWithoutCupInput
  hwId: HardwareCreateOneWithoutCupInput
  userCups: UserCupCreateManyWithoutSerialNumberInput
}

input CupCreateWithoutFwIdInput {
  anonSerialNumber: Int!
  encryptionKey: Int!
  calibId: CalibrationCreateOneWithoutCupInput
  companyId: CompanyCreateOneWithoutCupInput
  cupAppSync: CupAppSyncCreateManyWithoutSerialNumberInput
  cupData: CupDatumCreateManyWithoutSerialNumberInput
  cupDataColourCalib: CupDataColourCalibCreateManyWithoutSerialNumberInput
  cupDataRaw: CupDataRawCreateManyWithoutSerialNumberInput
  cupDataUserRemove: CupDataUserRemoveCreateManyWithoutSerialNumberInput
  hwId: HardwareCreateOneWithoutCupInput
  userCups: UserCupCreateManyWithoutSerialNumberInput
}

input CupCreateWithoutHwIdInput {
  anonSerialNumber: Int!
  encryptionKey: Int!
  calibId: CalibrationCreateOneWithoutCupInput
  companyId: CompanyCreateOneWithoutCupInput
  cupAppSync: CupAppSyncCreateManyWithoutSerialNumberInput
  cupData: CupDatumCreateManyWithoutSerialNumberInput
  cupDataColourCalib: CupDataColourCalibCreateManyWithoutSerialNumberInput
  cupDataRaw: CupDataRawCreateManyWithoutSerialNumberInput
  cupDataUserRemove: CupDataUserRemoveCreateManyWithoutSerialNumberInput
  fwId: FirmwareCreateOneWithoutCupInput
  userCups: UserCupCreateManyWithoutSerialNumberInput
}

input CupCreateWithoutUserCupsInput {
  anonSerialNumber: Int!
  encryptionKey: Int!
  calibId: CalibrationCreateOneWithoutCupInput
  companyId: CompanyCreateOneWithoutCupInput
  cupAppSync: CupAppSyncCreateManyWithoutSerialNumberInput
  cupData: CupDatumCreateManyWithoutSerialNumberInput
  cupDataColourCalib: CupDataColourCalibCreateManyWithoutSerialNumberInput
  cupDataRaw: CupDataRawCreateManyWithoutSerialNumberInput
  cupDataUserRemove: CupDataUserRemoveCreateManyWithoutSerialNumberInput
  fwId: FirmwareCreateOneWithoutCupInput
  hwId: HardwareCreateOneWithoutCupInput
}

type CupDataAnswer {
  id: Int!
  answerText: String!
  cupDataQaResponse(where: CupDataQaResponseWhereInput, orderBy: CupDataQaResponseOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [CupDataQaResponse!]
  questionId: CupDataQuestion!
}

"""
A connection to a list of items.
"""
type CupDataAnswerConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [CupDataAnswerEdge]!
  aggregate: AggregateCupDataAnswer!
}

input CupDataAnswerCreateInput {
  answerText: String!
  cupDataQaResponse: CupDataQaResponseCreateManyWithoutAnswerIdInput
  questionId: CupDataQuestionCreateOneWithoutCupDataAnswerInput!
}

input CupDataAnswerCreateManyWithoutQuestionIdInput {
  create: [CupDataAnswerCreateWithoutQuestionIdInput!]
  connect: [CupDataAnswerWhereUniqueInput!]
}

input CupDataAnswerCreateOneWithoutCupDataQaResponseInput {
  create: CupDataAnswerCreateWithoutCupDataQaResponseInput
  connect: CupDataAnswerWhereUniqueInput
}

input CupDataAnswerCreateWithoutCupDataQaResponseInput {
  answerText: String!
  questionId: CupDataQuestionCreateOneWithoutCupDataAnswerInput!
}

input CupDataAnswerCreateWithoutQuestionIdInput {
  answerText: String!
  cupDataQaResponse: CupDataQaResponseCreateManyWithoutAnswerIdInput
}

"""
An edge in a connection.
"""
type CupDataAnswerEdge {
  """
  The item at the end of the edge.
  """
  node: CupDataAnswer!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum CupDataAnswerOrderByInput {
  id_ASC
  id_DESC
  answerText_ASC
  answerText_DESC
}

type CupDataAnswerPreviousValues {
  id: Int!
  answerText: String!
}

input CupDataAnswerScalarWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [CupDataAnswerScalarWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [CupDataAnswerScalarWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [CupDataAnswerScalarWhereInput!]
  id: Int
  """
  All values that are not equal to given value.
  """
  id_not: Int
  """
  All values that are contained in given list.
  """
  id_in: [Int!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [Int!]
  """
  All values less than the given value.
  """
  id_lt: Int
  """
  All values less than or equal the given value.
  """
  id_lte: Int
  """
  All values greater than the given value.
  """
  id_gt: Int
  """
  All values greater than or equal the given value.
  """
  id_gte: Int
  answerText: String
  """
  All values that are not equal to given value.
  """
  answerText_not: String
  """
  All values that are contained in given list.
  """
  answerText_in: [String!]
  """
  All values that are not contained in given list.
  """
  answerText_not_in: [String!]
  """
  All values less than the given value.
  """
  answerText_lt: String
  """
  All values less than or equal the given value.
  """
  answerText_lte: String
  """
  All values greater than the given value.
  """
  answerText_gt: String
  """
  All values greater than or equal the given value.
  """
  answerText_gte: String
  """
  All values containing the given string.
  """
  answerText_contains: String
  """
  All values not containing the given string.
  """
  answerText_not_contains: String
  """
  All values starting with the given string.
  """
  answerText_starts_with: String
  """
  All values not starting with the given string.
  """
  answerText_not_starts_with: String
  """
  All values ending with the given string.
  """
  answerText_ends_with: String
  """
  All values not ending with the given string.
  """
  answerText_not_ends_with: String
}

type CupDataAnswerSubscriptionPayload {
  mutation: MutationType!
  node: CupDataAnswer
  updatedFields: [String!]
  previousValues: CupDataAnswerPreviousValues
}

input CupDataAnswerSubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [CupDataAnswerSubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [CupDataAnswerSubscriptionWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [CupDataAnswerSubscriptionWhereInput!]
  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]
  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String
  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]
  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: CupDataAnswerWhereInput
}

input CupDataAnswerUpdateInput {
  answerText: String
  cupDataQaResponse: CupDataQaResponseUpdateManyWithoutAnswerIdInput
  questionId: CupDataQuestionUpdateOneRequiredWithoutCupDataAnswerInput
}

input CupDataAnswerUpdateManyDataInput {
  answerText: String
}

input CupDataAnswerUpdateManyMutationInput {
  answerText: String
}

input CupDataAnswerUpdateManyWithoutQuestionIdInput {
  create: [CupDataAnswerCreateWithoutQuestionIdInput!]
  connect: [CupDataAnswerWhereUniqueInput!]
  set: [CupDataAnswerWhereUniqueInput!]
  disconnect: [CupDataAnswerWhereUniqueInput!]
  delete: [CupDataAnswerWhereUniqueInput!]
  update: [CupDataAnswerUpdateWithWhereUniqueWithoutQuestionIdInput!]
  updateMany: [CupDataAnswerUpdateManyWithWhereNestedInput!]
  deleteMany: [CupDataAnswerScalarWhereInput!]
  upsert: [CupDataAnswerUpsertWithWhereUniqueWithoutQuestionIdInput!]
}

input CupDataAnswerUpdateManyWithWhereNestedInput {
  where: CupDataAnswerScalarWhereInput!
  data: CupDataAnswerUpdateManyDataInput!
}

input CupDataAnswerUpdateOneRequiredWithoutCupDataQaResponseInput {
  create: CupDataAnswerCreateWithoutCupDataQaResponseInput
  connect: CupDataAnswerWhereUniqueInput
  update: CupDataAnswerUpdateWithoutCupDataQaResponseDataInput
  upsert: CupDataAnswerUpsertWithoutCupDataQaResponseInput
}

input CupDataAnswerUpdateWithoutCupDataQaResponseDataInput {
  answerText: String
  questionId: CupDataQuestionUpdateOneRequiredWithoutCupDataAnswerInput
}

input CupDataAnswerUpdateWithoutQuestionIdDataInput {
  answerText: String
  cupDataQaResponse: CupDataQaResponseUpdateManyWithoutAnswerIdInput
}

input CupDataAnswerUpdateWithWhereUniqueWithoutQuestionIdInput {
  where: CupDataAnswerWhereUniqueInput!
  data: CupDataAnswerUpdateWithoutQuestionIdDataInput!
}

input CupDataAnswerUpsertWithoutCupDataQaResponseInput {
  update: CupDataAnswerUpdateWithoutCupDataQaResponseDataInput!
  create: CupDataAnswerCreateWithoutCupDataQaResponseInput!
}

input CupDataAnswerUpsertWithWhereUniqueWithoutQuestionIdInput {
  where: CupDataAnswerWhereUniqueInput!
  update: CupDataAnswerUpdateWithoutQuestionIdDataInput!
  create: CupDataAnswerCreateWithoutQuestionIdInput!
}

input CupDataAnswerWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [CupDataAnswerWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [CupDataAnswerWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [CupDataAnswerWhereInput!]
  id: Int
  """
  All values that are not equal to given value.
  """
  id_not: Int
  """
  All values that are contained in given list.
  """
  id_in: [Int!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [Int!]
  """
  All values less than the given value.
  """
  id_lt: Int
  """
  All values less than or equal the given value.
  """
  id_lte: Int
  """
  All values greater than the given value.
  """
  id_gt: Int
  """
  All values greater than or equal the given value.
  """
  id_gte: Int
  answerText: String
  """
  All values that are not equal to given value.
  """
  answerText_not: String
  """
  All values that are contained in given list.
  """
  answerText_in: [String!]
  """
  All values that are not contained in given list.
  """
  answerText_not_in: [String!]
  """
  All values less than the given value.
  """
  answerText_lt: String
  """
  All values less than or equal the given value.
  """
  answerText_lte: String
  """
  All values greater than the given value.
  """
  answerText_gt: String
  """
  All values greater than or equal the given value.
  """
  answerText_gte: String
  """
  All values containing the given string.
  """
  answerText_contains: String
  """
  All values not containing the given string.
  """
  answerText_not_contains: String
  """
  All values starting with the given string.
  """
  answerText_starts_with: String
  """
  All values not starting with the given string.
  """
  answerText_not_starts_with: String
  """
  All values ending with the given string.
  """
  answerText_ends_with: String
  """
  All values not ending with the given string.
  """
  answerText_not_ends_with: String
  cupDataQaResponse_every: CupDataQaResponseWhereInput
  cupDataQaResponse_some: CupDataQaResponseWhereInput
  cupDataQaResponse_none: CupDataQaResponseWhereInput
  questionId: CupDataQuestionWhereInput
}

input CupDataAnswerWhereUniqueInput {
  id: Int
}

type CupDataColourCalc {
  id: Int!
  blue: Int!
  cupDataRowId: CupDatum!
  green: Int!
  red: Int!
}

"""
A connection to a list of items.
"""
type CupDataColourCalcConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [CupDataColourCalcEdge]!
  aggregate: AggregateCupDataColourCalc!
}

input CupDataColourCalcCreateInput {
  blue: Int!
  green: Int!
  red: Int!
  cupDataRowId: CupDatumCreateOneWithoutCupDataColourCalcInput!
}

input CupDataColourCalcCreateManyWithoutCupDataRowIdInput {
  create: [CupDataColourCalcCreateWithoutCupDataRowIdInput!]
  connect: [CupDataColourCalcWhereUniqueInput!]
}

input CupDataColourCalcCreateWithoutCupDataRowIdInput {
  blue: Int!
  green: Int!
  red: Int!
}

"""
An edge in a connection.
"""
type CupDataColourCalcEdge {
  """
  The item at the end of the edge.
  """
  node: CupDataColourCalc!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum CupDataColourCalcOrderByInput {
  id_ASC
  id_DESC
  blue_ASC
  blue_DESC
  green_ASC
  green_DESC
  red_ASC
  red_DESC
}

type CupDataColourCalcPreviousValues {
  id: Int!
  blue: Int!
  green: Int!
  red: Int!
}

input CupDataColourCalcScalarWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [CupDataColourCalcScalarWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [CupDataColourCalcScalarWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [CupDataColourCalcScalarWhereInput!]
  id: Int
  """
  All values that are not equal to given value.
  """
  id_not: Int
  """
  All values that are contained in given list.
  """
  id_in: [Int!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [Int!]
  """
  All values less than the given value.
  """
  id_lt: Int
  """
  All values less than or equal the given value.
  """
  id_lte: Int
  """
  All values greater than the given value.
  """
  id_gt: Int
  """
  All values greater than or equal the given value.
  """
  id_gte: Int
  blue: Int
  """
  All values that are not equal to given value.
  """
  blue_not: Int
  """
  All values that are contained in given list.
  """
  blue_in: [Int!]
  """
  All values that are not contained in given list.
  """
  blue_not_in: [Int!]
  """
  All values less than the given value.
  """
  blue_lt: Int
  """
  All values less than or equal the given value.
  """
  blue_lte: Int
  """
  All values greater than the given value.
  """
  blue_gt: Int
  """
  All values greater than or equal the given value.
  """
  blue_gte: Int
  green: Int
  """
  All values that are not equal to given value.
  """
  green_not: Int
  """
  All values that are contained in given list.
  """
  green_in: [Int!]
  """
  All values that are not contained in given list.
  """
  green_not_in: [Int!]
  """
  All values less than the given value.
  """
  green_lt: Int
  """
  All values less than or equal the given value.
  """
  green_lte: Int
  """
  All values greater than the given value.
  """
  green_gt: Int
  """
  All values greater than or equal the given value.
  """
  green_gte: Int
  red: Int
  """
  All values that are not equal to given value.
  """
  red_not: Int
  """
  All values that are contained in given list.
  """
  red_in: [Int!]
  """
  All values that are not contained in given list.
  """
  red_not_in: [Int!]
  """
  All values less than the given value.
  """
  red_lt: Int
  """
  All values less than or equal the given value.
  """
  red_lte: Int
  """
  All values greater than the given value.
  """
  red_gt: Int
  """
  All values greater than or equal the given value.
  """
  red_gte: Int
}

type CupDataColourCalcSubscriptionPayload {
  mutation: MutationType!
  node: CupDataColourCalc
  updatedFields: [String!]
  previousValues: CupDataColourCalcPreviousValues
}

input CupDataColourCalcSubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [CupDataColourCalcSubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [CupDataColourCalcSubscriptionWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [CupDataColourCalcSubscriptionWhereInput!]
  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]
  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String
  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]
  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: CupDataColourCalcWhereInput
}

input CupDataColourCalcUpdateInput {
  blue: Int
  green: Int
  red: Int
  cupDataRowId: CupDatumUpdateOneRequiredWithoutCupDataColourCalcInput
}

input CupDataColourCalcUpdateManyDataInput {
  blue: Int
  green: Int
  red: Int
}

input CupDataColourCalcUpdateManyMutationInput {
  blue: Int
  green: Int
  red: Int
}

input CupDataColourCalcUpdateManyWithoutCupDataRowIdInput {
  create: [CupDataColourCalcCreateWithoutCupDataRowIdInput!]
  connect: [CupDataColourCalcWhereUniqueInput!]
  set: [CupDataColourCalcWhereUniqueInput!]
  disconnect: [CupDataColourCalcWhereUniqueInput!]
  delete: [CupDataColourCalcWhereUniqueInput!]
  update: [CupDataColourCalcUpdateWithWhereUniqueWithoutCupDataRowIdInput!]
  updateMany: [CupDataColourCalcUpdateManyWithWhereNestedInput!]
  deleteMany: [CupDataColourCalcScalarWhereInput!]
  upsert: [CupDataColourCalcUpsertWithWhereUniqueWithoutCupDataRowIdInput!]
}

input CupDataColourCalcUpdateManyWithWhereNestedInput {
  where: CupDataColourCalcScalarWhereInput!
  data: CupDataColourCalcUpdateManyDataInput!
}

input CupDataColourCalcUpdateWithoutCupDataRowIdDataInput {
  blue: Int
  green: Int
  red: Int
}

input CupDataColourCalcUpdateWithWhereUniqueWithoutCupDataRowIdInput {
  where: CupDataColourCalcWhereUniqueInput!
  data: CupDataColourCalcUpdateWithoutCupDataRowIdDataInput!
}

input CupDataColourCalcUpsertWithWhereUniqueWithoutCupDataRowIdInput {
  where: CupDataColourCalcWhereUniqueInput!
  update: CupDataColourCalcUpdateWithoutCupDataRowIdDataInput!
  create: CupDataColourCalcCreateWithoutCupDataRowIdInput!
}

input CupDataColourCalcWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [CupDataColourCalcWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [CupDataColourCalcWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [CupDataColourCalcWhereInput!]
  id: Int
  """
  All values that are not equal to given value.
  """
  id_not: Int
  """
  All values that are contained in given list.
  """
  id_in: [Int!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [Int!]
  """
  All values less than the given value.
  """
  id_lt: Int
  """
  All values less than or equal the given value.
  """
  id_lte: Int
  """
  All values greater than the given value.
  """
  id_gt: Int
  """
  All values greater than or equal the given value.
  """
  id_gte: Int
  blue: Int
  """
  All values that are not equal to given value.
  """
  blue_not: Int
  """
  All values that are contained in given list.
  """
  blue_in: [Int!]
  """
  All values that are not contained in given list.
  """
  blue_not_in: [Int!]
  """
  All values less than the given value.
  """
  blue_lt: Int
  """
  All values less than or equal the given value.
  """
  blue_lte: Int
  """
  All values greater than the given value.
  """
  blue_gt: Int
  """
  All values greater than or equal the given value.
  """
  blue_gte: Int
  green: Int
  """
  All values that are not equal to given value.
  """
  green_not: Int
  """
  All values that are contained in given list.
  """
  green_in: [Int!]
  """
  All values that are not contained in given list.
  """
  green_not_in: [Int!]
  """
  All values less than the given value.
  """
  green_lt: Int
  """
  All values less than or equal the given value.
  """
  green_lte: Int
  """
  All values greater than the given value.
  """
  green_gt: Int
  """
  All values greater than or equal the given value.
  """
  green_gte: Int
  red: Int
  """
  All values that are not equal to given value.
  """
  red_not: Int
  """
  All values that are contained in given list.
  """
  red_in: [Int!]
  """
  All values that are not contained in given list.
  """
  red_not_in: [Int!]
  """
  All values less than the given value.
  """
  red_lt: Int
  """
  All values less than or equal the given value.
  """
  red_lte: Int
  """
  All values greater than the given value.
  """
  red_gt: Int
  """
  All values greater than or equal the given value.
  """
  red_gte: Int
  cupDataRowId: CupDatumWhereInput
}

input CupDataColourCalcWhereUniqueInput {
  id: Int
}

type CupDataColourCalib {
  id: Int!
  blue: Int!
  c: Int!
  green: Int!
  red: Int!
  serialNumber: Cup!
}

"""
A connection to a list of items.
"""
type CupDataColourCalibConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [CupDataColourCalibEdge]!
  aggregate: AggregateCupDataColourCalib!
}

input CupDataColourCalibCreateInput {
  blue: Int!
  c: Int!
  green: Int!
  red: Int!
  serialNumber: CupCreateOneWithoutCupDataColourCalibInput!
}

input CupDataColourCalibCreateManyWithoutSerialNumberInput {
  create: [CupDataColourCalibCreateWithoutSerialNumberInput!]
  connect: [CupDataColourCalibWhereUniqueInput!]
}

input CupDataColourCalibCreateWithoutSerialNumberInput {
  blue: Int!
  c: Int!
  green: Int!
  red: Int!
}

"""
An edge in a connection.
"""
type CupDataColourCalibEdge {
  """
  The item at the end of the edge.
  """
  node: CupDataColourCalib!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum CupDataColourCalibOrderByInput {
  id_ASC
  id_DESC
  blue_ASC
  blue_DESC
  c_ASC
  c_DESC
  green_ASC
  green_DESC
  red_ASC
  red_DESC
}

type CupDataColourCalibPreviousValues {
  id: Int!
  blue: Int!
  c: Int!
  green: Int!
  red: Int!
}

input CupDataColourCalibScalarWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [CupDataColourCalibScalarWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [CupDataColourCalibScalarWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [CupDataColourCalibScalarWhereInput!]
  id: Int
  """
  All values that are not equal to given value.
  """
  id_not: Int
  """
  All values that are contained in given list.
  """
  id_in: [Int!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [Int!]
  """
  All values less than the given value.
  """
  id_lt: Int
  """
  All values less than or equal the given value.
  """
  id_lte: Int
  """
  All values greater than the given value.
  """
  id_gt: Int
  """
  All values greater than or equal the given value.
  """
  id_gte: Int
  blue: Int
  """
  All values that are not equal to given value.
  """
  blue_not: Int
  """
  All values that are contained in given list.
  """
  blue_in: [Int!]
  """
  All values that are not contained in given list.
  """
  blue_not_in: [Int!]
  """
  All values less than the given value.
  """
  blue_lt: Int
  """
  All values less than or equal the given value.
  """
  blue_lte: Int
  """
  All values greater than the given value.
  """
  blue_gt: Int
  """
  All values greater than or equal the given value.
  """
  blue_gte: Int
  c: Int
  """
  All values that are not equal to given value.
  """
  c_not: Int
  """
  All values that are contained in given list.
  """
  c_in: [Int!]
  """
  All values that are not contained in given list.
  """
  c_not_in: [Int!]
  """
  All values less than the given value.
  """
  c_lt: Int
  """
  All values less than or equal the given value.
  """
  c_lte: Int
  """
  All values greater than the given value.
  """
  c_gt: Int
  """
  All values greater than or equal the given value.
  """
  c_gte: Int
  green: Int
  """
  All values that are not equal to given value.
  """
  green_not: Int
  """
  All values that are contained in given list.
  """
  green_in: [Int!]
  """
  All values that are not contained in given list.
  """
  green_not_in: [Int!]
  """
  All values less than the given value.
  """
  green_lt: Int
  """
  All values less than or equal the given value.
  """
  green_lte: Int
  """
  All values greater than the given value.
  """
  green_gt: Int
  """
  All values greater than or equal the given value.
  """
  green_gte: Int
  red: Int
  """
  All values that are not equal to given value.
  """
  red_not: Int
  """
  All values that are contained in given list.
  """
  red_in: [Int!]
  """
  All values that are not contained in given list.
  """
  red_not_in: [Int!]
  """
  All values less than the given value.
  """
  red_lt: Int
  """
  All values less than or equal the given value.
  """
  red_lte: Int
  """
  All values greater than the given value.
  """
  red_gt: Int
  """
  All values greater than or equal the given value.
  """
  red_gte: Int
}

type CupDataColourCalibSubscriptionPayload {
  mutation: MutationType!
  node: CupDataColourCalib
  updatedFields: [String!]
  previousValues: CupDataColourCalibPreviousValues
}

input CupDataColourCalibSubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [CupDataColourCalibSubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [CupDataColourCalibSubscriptionWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [CupDataColourCalibSubscriptionWhereInput!]
  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]
  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String
  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]
  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: CupDataColourCalibWhereInput
}

input CupDataColourCalibUpdateInput {
  blue: Int
  c: Int
  green: Int
  red: Int
  serialNumber: CupUpdateOneRequiredWithoutCupDataColourCalibInput
}

input CupDataColourCalibUpdateManyDataInput {
  blue: Int
  c: Int
  green: Int
  red: Int
}

input CupDataColourCalibUpdateManyMutationInput {
  blue: Int
  c: Int
  green: Int
  red: Int
}

input CupDataColourCalibUpdateManyWithoutSerialNumberInput {
  create: [CupDataColourCalibCreateWithoutSerialNumberInput!]
  connect: [CupDataColourCalibWhereUniqueInput!]
  set: [CupDataColourCalibWhereUniqueInput!]
  disconnect: [CupDataColourCalibWhereUniqueInput!]
  delete: [CupDataColourCalibWhereUniqueInput!]
  update: [CupDataColourCalibUpdateWithWhereUniqueWithoutSerialNumberInput!]
  updateMany: [CupDataColourCalibUpdateManyWithWhereNestedInput!]
  deleteMany: [CupDataColourCalibScalarWhereInput!]
  upsert: [CupDataColourCalibUpsertWithWhereUniqueWithoutSerialNumberInput!]
}

input CupDataColourCalibUpdateManyWithWhereNestedInput {
  where: CupDataColourCalibScalarWhereInput!
  data: CupDataColourCalibUpdateManyDataInput!
}

input CupDataColourCalibUpdateWithoutSerialNumberDataInput {
  blue: Int
  c: Int
  green: Int
  red: Int
}

input CupDataColourCalibUpdateWithWhereUniqueWithoutSerialNumberInput {
  where: CupDataColourCalibWhereUniqueInput!
  data: CupDataColourCalibUpdateWithoutSerialNumberDataInput!
}

input CupDataColourCalibUpsertWithWhereUniqueWithoutSerialNumberInput {
  where: CupDataColourCalibWhereUniqueInput!
  update: CupDataColourCalibUpdateWithoutSerialNumberDataInput!
  create: CupDataColourCalibCreateWithoutSerialNumberInput!
}

input CupDataColourCalibWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [CupDataColourCalibWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [CupDataColourCalibWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [CupDataColourCalibWhereInput!]
  id: Int
  """
  All values that are not equal to given value.
  """
  id_not: Int
  """
  All values that are contained in given list.
  """
  id_in: [Int!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [Int!]
  """
  All values less than the given value.
  """
  id_lt: Int
  """
  All values less than or equal the given value.
  """
  id_lte: Int
  """
  All values greater than the given value.
  """
  id_gt: Int
  """
  All values greater than or equal the given value.
  """
  id_gte: Int
  blue: Int
  """
  All values that are not equal to given value.
  """
  blue_not: Int
  """
  All values that are contained in given list.
  """
  blue_in: [Int!]
  """
  All values that are not contained in given list.
  """
  blue_not_in: [Int!]
  """
  All values less than the given value.
  """
  blue_lt: Int
  """
  All values less than or equal the given value.
  """
  blue_lte: Int
  """
  All values greater than the given value.
  """
  blue_gt: Int
  """
  All values greater than or equal the given value.
  """
  blue_gte: Int
  c: Int
  """
  All values that are not equal to given value.
  """
  c_not: Int
  """
  All values that are contained in given list.
  """
  c_in: [Int!]
  """
  All values that are not contained in given list.
  """
  c_not_in: [Int!]
  """
  All values less than the given value.
  """
  c_lt: Int
  """
  All values less than or equal the given value.
  """
  c_lte: Int
  """
  All values greater than the given value.
  """
  c_gt: Int
  """
  All values greater than or equal the given value.
  """
  c_gte: Int
  green: Int
  """
  All values that are not equal to given value.
  """
  green_not: Int
  """
  All values that are contained in given list.
  """
  green_in: [Int!]
  """
  All values that are not contained in given list.
  """
  green_not_in: [Int!]
  """
  All values less than the given value.
  """
  green_lt: Int
  """
  All values less than or equal the given value.
  """
  green_lte: Int
  """
  All values greater than the given value.
  """
  green_gt: Int
  """
  All values greater than or equal the given value.
  """
  green_gte: Int
  red: Int
  """
  All values that are not equal to given value.
  """
  red_not: Int
  """
  All values that are contained in given list.
  """
  red_in: [Int!]
  """
  All values that are not contained in given list.
  """
  red_not_in: [Int!]
  """
  All values less than the given value.
  """
  red_lt: Int
  """
  All values less than or equal the given value.
  """
  red_lte: Int
  """
  All values greater than the given value.
  """
  red_gt: Int
  """
  All values greater than or equal the given value.
  """
  red_gte: Int
  serialNumber: CupWhereInput
}

input CupDataColourCalibWhereUniqueInput {
  id: Int
}

type CupDataManMdate {
  id: Int!
  mdateRowId: CupDataProcMdate!
  menFinish: DateTime
  menStart: DateTime
}

"""
A connection to a list of items.
"""
type CupDataManMdateConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [CupDataManMdateEdge]!
  aggregate: AggregateCupDataManMdate!
}

input CupDataManMdateCreateInput {
  menFinish: DateTime
  menStart: DateTime
  mdateRowId: CupDataProcMdateCreateOneWithoutCupDataManMdatesInput!
}

input CupDataManMdateCreateManyWithoutMdateRowIdInput {
  create: [CupDataManMdateCreateWithoutMdateRowIdInput!]
  connect: [CupDataManMdateWhereUniqueInput!]
}

input CupDataManMdateCreateWithoutMdateRowIdInput {
  menFinish: DateTime
  menStart: DateTime
}

"""
An edge in a connection.
"""
type CupDataManMdateEdge {
  """
  The item at the end of the edge.
  """
  node: CupDataManMdate!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum CupDataManMdateOrderByInput {
  id_ASC
  id_DESC
  menFinish_ASC
  menFinish_DESC
  menStart_ASC
  menStart_DESC
}

type CupDataManMdatePreviousValues {
  id: Int!
  menFinish: DateTime
  menStart: DateTime
}

input CupDataManMdateScalarWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [CupDataManMdateScalarWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [CupDataManMdateScalarWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [CupDataManMdateScalarWhereInput!]
  id: Int
  """
  All values that are not equal to given value.
  """
  id_not: Int
  """
  All values that are contained in given list.
  """
  id_in: [Int!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [Int!]
  """
  All values less than the given value.
  """
  id_lt: Int
  """
  All values less than or equal the given value.
  """
  id_lte: Int
  """
  All values greater than the given value.
  """
  id_gt: Int
  """
  All values greater than or equal the given value.
  """
  id_gte: Int
  menFinish: DateTime
  """
  All values that are not equal to given value.
  """
  menFinish_not: DateTime
  """
  All values that are contained in given list.
  """
  menFinish_in: [DateTime!]
  """
  All values that are not contained in given list.
  """
  menFinish_not_in: [DateTime!]
  """
  All values less than the given value.
  """
  menFinish_lt: DateTime
  """
  All values less than or equal the given value.
  """
  menFinish_lte: DateTime
  """
  All values greater than the given value.
  """
  menFinish_gt: DateTime
  """
  All values greater than or equal the given value.
  """
  menFinish_gte: DateTime
  menStart: DateTime
  """
  All values that are not equal to given value.
  """
  menStart_not: DateTime
  """
  All values that are contained in given list.
  """
  menStart_in: [DateTime!]
  """
  All values that are not contained in given list.
  """
  menStart_not_in: [DateTime!]
  """
  All values less than the given value.
  """
  menStart_lt: DateTime
  """
  All values less than or equal the given value.
  """
  menStart_lte: DateTime
  """
  All values greater than the given value.
  """
  menStart_gt: DateTime
  """
  All values greater than or equal the given value.
  """
  menStart_gte: DateTime
}

type CupDataManMdateSubscriptionPayload {
  mutation: MutationType!
  node: CupDataManMdate
  updatedFields: [String!]
  previousValues: CupDataManMdatePreviousValues
}

input CupDataManMdateSubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [CupDataManMdateSubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [CupDataManMdateSubscriptionWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [CupDataManMdateSubscriptionWhereInput!]
  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]
  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String
  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]
  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: CupDataManMdateWhereInput
}

input CupDataManMdateUpdateInput {
  menFinish: DateTime
  menStart: DateTime
  mdateRowId: CupDataProcMdateUpdateOneRequiredWithoutCupDataManMdatesInput
}

input CupDataManMdateUpdateManyDataInput {
  menFinish: DateTime
  menStart: DateTime
}

input CupDataManMdateUpdateManyMutationInput {
  menFinish: DateTime
  menStart: DateTime
}

input CupDataManMdateUpdateManyWithoutMdateRowIdInput {
  create: [CupDataManMdateCreateWithoutMdateRowIdInput!]
  connect: [CupDataManMdateWhereUniqueInput!]
  set: [CupDataManMdateWhereUniqueInput!]
  disconnect: [CupDataManMdateWhereUniqueInput!]
  delete: [CupDataManMdateWhereUniqueInput!]
  update: [CupDataManMdateUpdateWithWhereUniqueWithoutMdateRowIdInput!]
  updateMany: [CupDataManMdateUpdateManyWithWhereNestedInput!]
  deleteMany: [CupDataManMdateScalarWhereInput!]
  upsert: [CupDataManMdateUpsertWithWhereUniqueWithoutMdateRowIdInput!]
}

input CupDataManMdateUpdateManyWithWhereNestedInput {
  where: CupDataManMdateScalarWhereInput!
  data: CupDataManMdateUpdateManyDataInput!
}

input CupDataManMdateUpdateWithoutMdateRowIdDataInput {
  menFinish: DateTime
  menStart: DateTime
}

input CupDataManMdateUpdateWithWhereUniqueWithoutMdateRowIdInput {
  where: CupDataManMdateWhereUniqueInput!
  data: CupDataManMdateUpdateWithoutMdateRowIdDataInput!
}

input CupDataManMdateUpsertWithWhereUniqueWithoutMdateRowIdInput {
  where: CupDataManMdateWhereUniqueInput!
  update: CupDataManMdateUpdateWithoutMdateRowIdDataInput!
  create: CupDataManMdateCreateWithoutMdateRowIdInput!
}

input CupDataManMdateWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [CupDataManMdateWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [CupDataManMdateWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [CupDataManMdateWhereInput!]
  id: Int
  """
  All values that are not equal to given value.
  """
  id_not: Int
  """
  All values that are contained in given list.
  """
  id_in: [Int!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [Int!]
  """
  All values less than the given value.
  """
  id_lt: Int
  """
  All values less than or equal the given value.
  """
  id_lte: Int
  """
  All values greater than the given value.
  """
  id_gt: Int
  """
  All values greater than or equal the given value.
  """
  id_gte: Int
  menFinish: DateTime
  """
  All values that are not equal to given value.
  """
  menFinish_not: DateTime
  """
  All values that are contained in given list.
  """
  menFinish_in: [DateTime!]
  """
  All values that are not contained in given list.
  """
  menFinish_not_in: [DateTime!]
  """
  All values less than the given value.
  """
  menFinish_lt: DateTime
  """
  All values less than or equal the given value.
  """
  menFinish_lte: DateTime
  """
  All values greater than the given value.
  """
  menFinish_gt: DateTime
  """
  All values greater than or equal the given value.
  """
  menFinish_gte: DateTime
  menStart: DateTime
  """
  All values that are not equal to given value.
  """
  menStart_not: DateTime
  """
  All values that are contained in given list.
  """
  menStart_in: [DateTime!]
  """
  All values that are not contained in given list.
  """
  menStart_not_in: [DateTime!]
  """
  All values less than the given value.
  """
  menStart_lt: DateTime
  """
  All values less than or equal the given value.
  """
  menStart_lte: DateTime
  """
  All values greater than the given value.
  """
  menStart_gt: DateTime
  """
  All values greater than or equal the given value.
  """
  menStart_gte: DateTime
  mdateRowId: CupDataProcMdateWhereInput
}

input CupDataManMdateWhereUniqueInput {
  id: Int
}

type CupDataProcFlow {
  id: Int!
  date: DateTime!
  hourlyFlow: Int!
  mdateRowId: CupDataProcMdate!
  userId: User!
}

"""
A connection to a list of items.
"""
type CupDataProcFlowConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [CupDataProcFlowEdge]!
  aggregate: AggregateCupDataProcFlow!
}

input CupDataProcFlowCreateInput {
  date: DateTime!
  hourlyFlow: Int!
  mdateRowId: CupDataProcMdateCreateOneWithoutCupDataProcFlowInput!
  userId: UserCreateOneWithoutCupDataProcFlowInput!
}

input CupDataProcFlowCreateManyWithoutMdateRowIdInput {
  create: [CupDataProcFlowCreateWithoutMdateRowIdInput!]
  connect: [CupDataProcFlowWhereUniqueInput!]
}

input CupDataProcFlowCreateManyWithoutUserIdInput {
  create: [CupDataProcFlowCreateWithoutUserIdInput!]
  connect: [CupDataProcFlowWhereUniqueInput!]
}

input CupDataProcFlowCreateWithoutMdateRowIdInput {
  date: DateTime!
  hourlyFlow: Int!
  userId: UserCreateOneWithoutCupDataProcFlowInput!
}

input CupDataProcFlowCreateWithoutUserIdInput {
  date: DateTime!
  hourlyFlow: Int!
  mdateRowId: CupDataProcMdateCreateOneWithoutCupDataProcFlowInput!
}

"""
An edge in a connection.
"""
type CupDataProcFlowEdge {
  """
  The item at the end of the edge.
  """
  node: CupDataProcFlow!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum CupDataProcFlowOrderByInput {
  id_ASC
  id_DESC
  date_ASC
  date_DESC
  hourlyFlow_ASC
  hourlyFlow_DESC
}

type CupDataProcFlowPreviousValues {
  id: Int!
  date: DateTime!
  hourlyFlow: Int!
}

input CupDataProcFlowScalarWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [CupDataProcFlowScalarWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [CupDataProcFlowScalarWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [CupDataProcFlowScalarWhereInput!]
  id: Int
  """
  All values that are not equal to given value.
  """
  id_not: Int
  """
  All values that are contained in given list.
  """
  id_in: [Int!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [Int!]
  """
  All values less than the given value.
  """
  id_lt: Int
  """
  All values less than or equal the given value.
  """
  id_lte: Int
  """
  All values greater than the given value.
  """
  id_gt: Int
  """
  All values greater than or equal the given value.
  """
  id_gte: Int
  date: DateTime
  """
  All values that are not equal to given value.
  """
  date_not: DateTime
  """
  All values that are contained in given list.
  """
  date_in: [DateTime!]
  """
  All values that are not contained in given list.
  """
  date_not_in: [DateTime!]
  """
  All values less than the given value.
  """
  date_lt: DateTime
  """
  All values less than or equal the given value.
  """
  date_lte: DateTime
  """
  All values greater than the given value.
  """
  date_gt: DateTime
  """
  All values greater than or equal the given value.
  """
  date_gte: DateTime
  hourlyFlow: Int
  """
  All values that are not equal to given value.
  """
  hourlyFlow_not: Int
  """
  All values that are contained in given list.
  """
  hourlyFlow_in: [Int!]
  """
  All values that are not contained in given list.
  """
  hourlyFlow_not_in: [Int!]
  """
  All values less than the given value.
  """
  hourlyFlow_lt: Int
  """
  All values less than or equal the given value.
  """
  hourlyFlow_lte: Int
  """
  All values greater than the given value.
  """
  hourlyFlow_gt: Int
  """
  All values greater than or equal the given value.
  """
  hourlyFlow_gte: Int
}

type CupDataProcFlowSubscriptionPayload {
  mutation: MutationType!
  node: CupDataProcFlow
  updatedFields: [String!]
  previousValues: CupDataProcFlowPreviousValues
}

input CupDataProcFlowSubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [CupDataProcFlowSubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [CupDataProcFlowSubscriptionWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [CupDataProcFlowSubscriptionWhereInput!]
  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]
  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String
  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]
  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: CupDataProcFlowWhereInput
}

input CupDataProcFlowUpdateInput {
  date: DateTime
  hourlyFlow: Int
  mdateRowId: CupDataProcMdateUpdateOneRequiredWithoutCupDataProcFlowInput
  userId: UserUpdateOneRequiredWithoutCupDataProcFlowInput
}

input CupDataProcFlowUpdateManyDataInput {
  date: DateTime
  hourlyFlow: Int
}

input CupDataProcFlowUpdateManyMutationInput {
  date: DateTime
  hourlyFlow: Int
}

input CupDataProcFlowUpdateManyWithoutMdateRowIdInput {
  create: [CupDataProcFlowCreateWithoutMdateRowIdInput!]
  connect: [CupDataProcFlowWhereUniqueInput!]
  set: [CupDataProcFlowWhereUniqueInput!]
  disconnect: [CupDataProcFlowWhereUniqueInput!]
  delete: [CupDataProcFlowWhereUniqueInput!]
  update: [CupDataProcFlowUpdateWithWhereUniqueWithoutMdateRowIdInput!]
  updateMany: [CupDataProcFlowUpdateManyWithWhereNestedInput!]
  deleteMany: [CupDataProcFlowScalarWhereInput!]
  upsert: [CupDataProcFlowUpsertWithWhereUniqueWithoutMdateRowIdInput!]
}

input CupDataProcFlowUpdateManyWithoutUserIdInput {
  create: [CupDataProcFlowCreateWithoutUserIdInput!]
  connect: [CupDataProcFlowWhereUniqueInput!]
  set: [CupDataProcFlowWhereUniqueInput!]
  disconnect: [CupDataProcFlowWhereUniqueInput!]
  delete: [CupDataProcFlowWhereUniqueInput!]
  update: [CupDataProcFlowUpdateWithWhereUniqueWithoutUserIdInput!]
  updateMany: [CupDataProcFlowUpdateManyWithWhereNestedInput!]
  deleteMany: [CupDataProcFlowScalarWhereInput!]
  upsert: [CupDataProcFlowUpsertWithWhereUniqueWithoutUserIdInput!]
}

input CupDataProcFlowUpdateManyWithWhereNestedInput {
  where: CupDataProcFlowScalarWhereInput!
  data: CupDataProcFlowUpdateManyDataInput!
}

input CupDataProcFlowUpdateWithoutMdateRowIdDataInput {
  date: DateTime
  hourlyFlow: Int
  userId: UserUpdateOneRequiredWithoutCupDataProcFlowInput
}

input CupDataProcFlowUpdateWithoutUserIdDataInput {
  date: DateTime
  hourlyFlow: Int
  mdateRowId: CupDataProcMdateUpdateOneRequiredWithoutCupDataProcFlowInput
}

input CupDataProcFlowUpdateWithWhereUniqueWithoutMdateRowIdInput {
  where: CupDataProcFlowWhereUniqueInput!
  data: CupDataProcFlowUpdateWithoutMdateRowIdDataInput!
}

input CupDataProcFlowUpdateWithWhereUniqueWithoutUserIdInput {
  where: CupDataProcFlowWhereUniqueInput!
  data: CupDataProcFlowUpdateWithoutUserIdDataInput!
}

input CupDataProcFlowUpsertWithWhereUniqueWithoutMdateRowIdInput {
  where: CupDataProcFlowWhereUniqueInput!
  update: CupDataProcFlowUpdateWithoutMdateRowIdDataInput!
  create: CupDataProcFlowCreateWithoutMdateRowIdInput!
}

input CupDataProcFlowUpsertWithWhereUniqueWithoutUserIdInput {
  where: CupDataProcFlowWhereUniqueInput!
  update: CupDataProcFlowUpdateWithoutUserIdDataInput!
  create: CupDataProcFlowCreateWithoutUserIdInput!
}

input CupDataProcFlowWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [CupDataProcFlowWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [CupDataProcFlowWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [CupDataProcFlowWhereInput!]
  id: Int
  """
  All values that are not equal to given value.
  """
  id_not: Int
  """
  All values that are contained in given list.
  """
  id_in: [Int!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [Int!]
  """
  All values less than the given value.
  """
  id_lt: Int
  """
  All values less than or equal the given value.
  """
  id_lte: Int
  """
  All values greater than the given value.
  """
  id_gt: Int
  """
  All values greater than or equal the given value.
  """
  id_gte: Int
  date: DateTime
  """
  All values that are not equal to given value.
  """
  date_not: DateTime
  """
  All values that are contained in given list.
  """
  date_in: [DateTime!]
  """
  All values that are not contained in given list.
  """
  date_not_in: [DateTime!]
  """
  All values less than the given value.
  """
  date_lt: DateTime
  """
  All values less than or equal the given value.
  """
  date_lte: DateTime
  """
  All values greater than the given value.
  """
  date_gt: DateTime
  """
  All values greater than or equal the given value.
  """
  date_gte: DateTime
  hourlyFlow: Int
  """
  All values that are not equal to given value.
  """
  hourlyFlow_not: Int
  """
  All values that are contained in given list.
  """
  hourlyFlow_in: [Int!]
  """
  All values that are not contained in given list.
  """
  hourlyFlow_not_in: [Int!]
  """
  All values less than the given value.
  """
  hourlyFlow_lt: Int
  """
  All values less than or equal the given value.
  """
  hourlyFlow_lte: Int
  """
  All values greater than the given value.
  """
  hourlyFlow_gt: Int
  """
  All values greater than or equal the given value.
  """
  hourlyFlow_gte: Int
  mdateRowId: CupDataProcMdateWhereInput
  userId: UserWhereInput
}

input CupDataProcFlowWhereUniqueInput {
  id: Int
}

type CupDataProcMdate {
  id: Int!
  cupDataManMdates(where: CupDataManMdateWhereInput, orderBy: CupDataManMdateOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [CupDataManMdate!]
  cupDataProcFlow(where: CupDataProcFlowWhereInput, orderBy: CupDataProcFlowOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [CupDataProcFlow!]
  dataRejected: Boolean
  dataVerified: Boolean!
  menFinish: DateTime!
  menStart: DateTime!
  rejectId: CupDataRejection
  rewardAmount: Int
  userId: User!
}

"""
A connection to a list of items.
"""
type CupDataProcMdateConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [CupDataProcMdateEdge]!
  aggregate: AggregateCupDataProcMdate!
}

input CupDataProcMdateCreateInput {
  dataRejected: Boolean
  dataVerified: Boolean!
  menFinish: DateTime!
  menStart: DateTime!
  rewardAmount: Int
  cupDataManMdates: CupDataManMdateCreateManyWithoutMdateRowIdInput
  cupDataProcFlow: CupDataProcFlowCreateManyWithoutMdateRowIdInput
  rejectId: CupDataRejectionCreateOneWithoutCupDataProcMdatesInput
  userId: UserCreateOneWithoutCupDataProcMdatesInput!
}

input CupDataProcMdateCreateManyWithoutRejectIdInput {
  create: [CupDataProcMdateCreateWithoutRejectIdInput!]
  connect: [CupDataProcMdateWhereUniqueInput!]
}

input CupDataProcMdateCreateManyWithoutUserIdInput {
  create: [CupDataProcMdateCreateWithoutUserIdInput!]
  connect: [CupDataProcMdateWhereUniqueInput!]
}

input CupDataProcMdateCreateOneWithoutCupDataManMdatesInput {
  create: CupDataProcMdateCreateWithoutCupDataManMdatesInput
  connect: CupDataProcMdateWhereUniqueInput
}

input CupDataProcMdateCreateOneWithoutCupDataProcFlowInput {
  create: CupDataProcMdateCreateWithoutCupDataProcFlowInput
  connect: CupDataProcMdateWhereUniqueInput
}

input CupDataProcMdateCreateWithoutCupDataManMdatesInput {
  dataRejected: Boolean
  dataVerified: Boolean!
  menFinish: DateTime!
  menStart: DateTime!
  rewardAmount: Int
  cupDataProcFlow: CupDataProcFlowCreateManyWithoutMdateRowIdInput
  rejectId: CupDataRejectionCreateOneWithoutCupDataProcMdatesInput
  userId: UserCreateOneWithoutCupDataProcMdatesInput!
}

input CupDataProcMdateCreateWithoutCupDataProcFlowInput {
  dataRejected: Boolean
  dataVerified: Boolean!
  menFinish: DateTime!
  menStart: DateTime!
  rewardAmount: Int
  cupDataManMdates: CupDataManMdateCreateManyWithoutMdateRowIdInput
  rejectId: CupDataRejectionCreateOneWithoutCupDataProcMdatesInput
  userId: UserCreateOneWithoutCupDataProcMdatesInput!
}

input CupDataProcMdateCreateWithoutRejectIdInput {
  dataRejected: Boolean
  dataVerified: Boolean!
  menFinish: DateTime!
  menStart: DateTime!
  rewardAmount: Int
  cupDataManMdates: CupDataManMdateCreateManyWithoutMdateRowIdInput
  cupDataProcFlow: CupDataProcFlowCreateManyWithoutMdateRowIdInput
  userId: UserCreateOneWithoutCupDataProcMdatesInput!
}

input CupDataProcMdateCreateWithoutUserIdInput {
  dataRejected: Boolean
  dataVerified: Boolean!
  menFinish: DateTime!
  menStart: DateTime!
  rewardAmount: Int
  cupDataManMdates: CupDataManMdateCreateManyWithoutMdateRowIdInput
  cupDataProcFlow: CupDataProcFlowCreateManyWithoutMdateRowIdInput
  rejectId: CupDataRejectionCreateOneWithoutCupDataProcMdatesInput
}

"""
An edge in a connection.
"""
type CupDataProcMdateEdge {
  """
  The item at the end of the edge.
  """
  node: CupDataProcMdate!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum CupDataProcMdateOrderByInput {
  id_ASC
  id_DESC
  dataRejected_ASC
  dataRejected_DESC
  dataVerified_ASC
  dataVerified_DESC
  menFinish_ASC
  menFinish_DESC
  menStart_ASC
  menStart_DESC
  rewardAmount_ASC
  rewardAmount_DESC
}

type CupDataProcMdatePreviousValues {
  id: Int!
  dataRejected: Boolean
  dataVerified: Boolean!
  menFinish: DateTime!
  menStart: DateTime!
  rewardAmount: Int
}

input CupDataProcMdateScalarWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [CupDataProcMdateScalarWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [CupDataProcMdateScalarWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [CupDataProcMdateScalarWhereInput!]
  id: Int
  """
  All values that are not equal to given value.
  """
  id_not: Int
  """
  All values that are contained in given list.
  """
  id_in: [Int!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [Int!]
  """
  All values less than the given value.
  """
  id_lt: Int
  """
  All values less than or equal the given value.
  """
  id_lte: Int
  """
  All values greater than the given value.
  """
  id_gt: Int
  """
  All values greater than or equal the given value.
  """
  id_gte: Int
  dataRejected: Boolean
  """
  All values that are not equal to given value.
  """
  dataRejected_not: Boolean
  dataVerified: Boolean
  """
  All values that are not equal to given value.
  """
  dataVerified_not: Boolean
  menFinish: DateTime
  """
  All values that are not equal to given value.
  """
  menFinish_not: DateTime
  """
  All values that are contained in given list.
  """
  menFinish_in: [DateTime!]
  """
  All values that are not contained in given list.
  """
  menFinish_not_in: [DateTime!]
  """
  All values less than the given value.
  """
  menFinish_lt: DateTime
  """
  All values less than or equal the given value.
  """
  menFinish_lte: DateTime
  """
  All values greater than the given value.
  """
  menFinish_gt: DateTime
  """
  All values greater than or equal the given value.
  """
  menFinish_gte: DateTime
  menStart: DateTime
  """
  All values that are not equal to given value.
  """
  menStart_not: DateTime
  """
  All values that are contained in given list.
  """
  menStart_in: [DateTime!]
  """
  All values that are not contained in given list.
  """
  menStart_not_in: [DateTime!]
  """
  All values less than the given value.
  """
  menStart_lt: DateTime
  """
  All values less than or equal the given value.
  """
  menStart_lte: DateTime
  """
  All values greater than the given value.
  """
  menStart_gt: DateTime
  """
  All values greater than or equal the given value.
  """
  menStart_gte: DateTime
  rewardAmount: Int
  """
  All values that are not equal to given value.
  """
  rewardAmount_not: Int
  """
  All values that are contained in given list.
  """
  rewardAmount_in: [Int!]
  """
  All values that are not contained in given list.
  """
  rewardAmount_not_in: [Int!]
  """
  All values less than the given value.
  """
  rewardAmount_lt: Int
  """
  All values less than or equal the given value.
  """
  rewardAmount_lte: Int
  """
  All values greater than the given value.
  """
  rewardAmount_gt: Int
  """
  All values greater than or equal the given value.
  """
  rewardAmount_gte: Int
}

type CupDataProcMdateSubscriptionPayload {
  mutation: MutationType!
  node: CupDataProcMdate
  updatedFields: [String!]
  previousValues: CupDataProcMdatePreviousValues
}

input CupDataProcMdateSubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [CupDataProcMdateSubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [CupDataProcMdateSubscriptionWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [CupDataProcMdateSubscriptionWhereInput!]
  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]
  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String
  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]
  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: CupDataProcMdateWhereInput
}

input CupDataProcMdateUpdateInput {
  dataRejected: Boolean
  dataVerified: Boolean
  menFinish: DateTime
  menStart: DateTime
  rewardAmount: Int
  cupDataManMdates: CupDataManMdateUpdateManyWithoutMdateRowIdInput
  cupDataProcFlow: CupDataProcFlowUpdateManyWithoutMdateRowIdInput
  rejectId: CupDataRejectionUpdateOneWithoutCupDataProcMdatesInput
  userId: UserUpdateOneRequiredWithoutCupDataProcMdatesInput
}

input CupDataProcMdateUpdateManyDataInput {
  dataRejected: Boolean
  dataVerified: Boolean
  menFinish: DateTime
  menStart: DateTime
  rewardAmount: Int
}

input CupDataProcMdateUpdateManyMutationInput {
  dataRejected: Boolean
  dataVerified: Boolean
  menFinish: DateTime
  menStart: DateTime
  rewardAmount: Int
}

input CupDataProcMdateUpdateManyWithoutRejectIdInput {
  create: [CupDataProcMdateCreateWithoutRejectIdInput!]
  connect: [CupDataProcMdateWhereUniqueInput!]
  set: [CupDataProcMdateWhereUniqueInput!]
  disconnect: [CupDataProcMdateWhereUniqueInput!]
  delete: [CupDataProcMdateWhereUniqueInput!]
  update: [CupDataProcMdateUpdateWithWhereUniqueWithoutRejectIdInput!]
  updateMany: [CupDataProcMdateUpdateManyWithWhereNestedInput!]
  deleteMany: [CupDataProcMdateScalarWhereInput!]
  upsert: [CupDataProcMdateUpsertWithWhereUniqueWithoutRejectIdInput!]
}

input CupDataProcMdateUpdateManyWithoutUserIdInput {
  create: [CupDataProcMdateCreateWithoutUserIdInput!]
  connect: [CupDataProcMdateWhereUniqueInput!]
  set: [CupDataProcMdateWhereUniqueInput!]
  disconnect: [CupDataProcMdateWhereUniqueInput!]
  delete: [CupDataProcMdateWhereUniqueInput!]
  update: [CupDataProcMdateUpdateWithWhereUniqueWithoutUserIdInput!]
  updateMany: [CupDataProcMdateUpdateManyWithWhereNestedInput!]
  deleteMany: [CupDataProcMdateScalarWhereInput!]
  upsert: [CupDataProcMdateUpsertWithWhereUniqueWithoutUserIdInput!]
}

input CupDataProcMdateUpdateManyWithWhereNestedInput {
  where: CupDataProcMdateScalarWhereInput!
  data: CupDataProcMdateUpdateManyDataInput!
}

input CupDataProcMdateUpdateOneRequiredWithoutCupDataManMdatesInput {
  create: CupDataProcMdateCreateWithoutCupDataManMdatesInput
  connect: CupDataProcMdateWhereUniqueInput
  update: CupDataProcMdateUpdateWithoutCupDataManMdatesDataInput
  upsert: CupDataProcMdateUpsertWithoutCupDataManMdatesInput
}

input CupDataProcMdateUpdateOneRequiredWithoutCupDataProcFlowInput {
  create: CupDataProcMdateCreateWithoutCupDataProcFlowInput
  connect: CupDataProcMdateWhereUniqueInput
  update: CupDataProcMdateUpdateWithoutCupDataProcFlowDataInput
  upsert: CupDataProcMdateUpsertWithoutCupDataProcFlowInput
}

input CupDataProcMdateUpdateWithoutCupDataManMdatesDataInput {
  dataRejected: Boolean
  dataVerified: Boolean
  menFinish: DateTime
  menStart: DateTime
  rewardAmount: Int
  cupDataProcFlow: CupDataProcFlowUpdateManyWithoutMdateRowIdInput
  rejectId: CupDataRejectionUpdateOneWithoutCupDataProcMdatesInput
  userId: UserUpdateOneRequiredWithoutCupDataProcMdatesInput
}

input CupDataProcMdateUpdateWithoutCupDataProcFlowDataInput {
  dataRejected: Boolean
  dataVerified: Boolean
  menFinish: DateTime
  menStart: DateTime
  rewardAmount: Int
  cupDataManMdates: CupDataManMdateUpdateManyWithoutMdateRowIdInput
  rejectId: CupDataRejectionUpdateOneWithoutCupDataProcMdatesInput
  userId: UserUpdateOneRequiredWithoutCupDataProcMdatesInput
}

input CupDataProcMdateUpdateWithoutRejectIdDataInput {
  dataRejected: Boolean
  dataVerified: Boolean
  menFinish: DateTime
  menStart: DateTime
  rewardAmount: Int
  cupDataManMdates: CupDataManMdateUpdateManyWithoutMdateRowIdInput
  cupDataProcFlow: CupDataProcFlowUpdateManyWithoutMdateRowIdInput
  userId: UserUpdateOneRequiredWithoutCupDataProcMdatesInput
}

input CupDataProcMdateUpdateWithoutUserIdDataInput {
  dataRejected: Boolean
  dataVerified: Boolean
  menFinish: DateTime
  menStart: DateTime
  rewardAmount: Int
  cupDataManMdates: CupDataManMdateUpdateManyWithoutMdateRowIdInput
  cupDataProcFlow: CupDataProcFlowUpdateManyWithoutMdateRowIdInput
  rejectId: CupDataRejectionUpdateOneWithoutCupDataProcMdatesInput
}

input CupDataProcMdateUpdateWithWhereUniqueWithoutRejectIdInput {
  where: CupDataProcMdateWhereUniqueInput!
  data: CupDataProcMdateUpdateWithoutRejectIdDataInput!
}

input CupDataProcMdateUpdateWithWhereUniqueWithoutUserIdInput {
  where: CupDataProcMdateWhereUniqueInput!
  data: CupDataProcMdateUpdateWithoutUserIdDataInput!
}

input CupDataProcMdateUpsertWithoutCupDataManMdatesInput {
  update: CupDataProcMdateUpdateWithoutCupDataManMdatesDataInput!
  create: CupDataProcMdateCreateWithoutCupDataManMdatesInput!
}

input CupDataProcMdateUpsertWithoutCupDataProcFlowInput {
  update: CupDataProcMdateUpdateWithoutCupDataProcFlowDataInput!
  create: CupDataProcMdateCreateWithoutCupDataProcFlowInput!
}

input CupDataProcMdateUpsertWithWhereUniqueWithoutRejectIdInput {
  where: CupDataProcMdateWhereUniqueInput!
  update: CupDataProcMdateUpdateWithoutRejectIdDataInput!
  create: CupDataProcMdateCreateWithoutRejectIdInput!
}

input CupDataProcMdateUpsertWithWhereUniqueWithoutUserIdInput {
  where: CupDataProcMdateWhereUniqueInput!
  update: CupDataProcMdateUpdateWithoutUserIdDataInput!
  create: CupDataProcMdateCreateWithoutUserIdInput!
}

input CupDataProcMdateWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [CupDataProcMdateWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [CupDataProcMdateWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [CupDataProcMdateWhereInput!]
  id: Int
  """
  All values that are not equal to given value.
  """
  id_not: Int
  """
  All values that are contained in given list.
  """
  id_in: [Int!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [Int!]
  """
  All values less than the given value.
  """
  id_lt: Int
  """
  All values less than or equal the given value.
  """
  id_lte: Int
  """
  All values greater than the given value.
  """
  id_gt: Int
  """
  All values greater than or equal the given value.
  """
  id_gte: Int
  dataRejected: Boolean
  """
  All values that are not equal to given value.
  """
  dataRejected_not: Boolean
  dataVerified: Boolean
  """
  All values that are not equal to given value.
  """
  dataVerified_not: Boolean
  menFinish: DateTime
  """
  All values that are not equal to given value.
  """
  menFinish_not: DateTime
  """
  All values that are contained in given list.
  """
  menFinish_in: [DateTime!]
  """
  All values that are not contained in given list.
  """
  menFinish_not_in: [DateTime!]
  """
  All values less than the given value.
  """
  menFinish_lt: DateTime
  """
  All values less than or equal the given value.
  """
  menFinish_lte: DateTime
  """
  All values greater than the given value.
  """
  menFinish_gt: DateTime
  """
  All values greater than or equal the given value.
  """
  menFinish_gte: DateTime
  menStart: DateTime
  """
  All values that are not equal to given value.
  """
  menStart_not: DateTime
  """
  All values that are contained in given list.
  """
  menStart_in: [DateTime!]
  """
  All values that are not contained in given list.
  """
  menStart_not_in: [DateTime!]
  """
  All values less than the given value.
  """
  menStart_lt: DateTime
  """
  All values less than or equal the given value.
  """
  menStart_lte: DateTime
  """
  All values greater than the given value.
  """
  menStart_gt: DateTime
  """
  All values greater than or equal the given value.
  """
  menStart_gte: DateTime
  rewardAmount: Int
  """
  All values that are not equal to given value.
  """
  rewardAmount_not: Int
  """
  All values that are contained in given list.
  """
  rewardAmount_in: [Int!]
  """
  All values that are not contained in given list.
  """
  rewardAmount_not_in: [Int!]
  """
  All values less than the given value.
  """
  rewardAmount_lt: Int
  """
  All values less than or equal the given value.
  """
  rewardAmount_lte: Int
  """
  All values greater than the given value.
  """
  rewardAmount_gt: Int
  """
  All values greater than or equal the given value.
  """
  rewardAmount_gte: Int
  cupDataManMdates_every: CupDataManMdateWhereInput
  cupDataManMdates_some: CupDataManMdateWhereInput
  cupDataManMdates_none: CupDataManMdateWhereInput
  cupDataProcFlow_every: CupDataProcFlowWhereInput
  cupDataProcFlow_some: CupDataProcFlowWhereInput
  cupDataProcFlow_none: CupDataProcFlowWhereInput
  rejectId: CupDataRejectionWhereInput
  userId: UserWhereInput
}

input CupDataProcMdateWhereUniqueInput {
  id: Int
}

type CupDataProcVolume {
  id: Int!
  confidenceL: Int
  confidenceR: Int
  cupDataRowId: CupDatum!
  inVitro: Boolean!
  volume: Int
  volumeAdj: Int
  volumeL: Int
  volumeR: Int
}

"""
A connection to a list of items.
"""
type CupDataProcVolumeConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [CupDataProcVolumeEdge]!
  aggregate: AggregateCupDataProcVolume!
}

input CupDataProcVolumeCreateInput {
  confidenceL: Int
  confidenceR: Int
  inVitro: Boolean
  volume: Int
  volumeAdj: Int
  volumeL: Int
  volumeR: Int
  cupDataRowId: CupDatumCreateOneWithoutCupDataProcVolumeInput!
}

input CupDataProcVolumeCreateManyWithoutCupDataRowIdInput {
  create: [CupDataProcVolumeCreateWithoutCupDataRowIdInput!]
  connect: [CupDataProcVolumeWhereUniqueInput!]
}

input CupDataProcVolumeCreateWithoutCupDataRowIdInput {
  confidenceL: Int
  confidenceR: Int
  inVitro: Boolean
  volume: Int
  volumeAdj: Int
  volumeL: Int
  volumeR: Int
}

"""
An edge in a connection.
"""
type CupDataProcVolumeEdge {
  """
  The item at the end of the edge.
  """
  node: CupDataProcVolume!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum CupDataProcVolumeOrderByInput {
  id_ASC
  id_DESC
  confidenceL_ASC
  confidenceL_DESC
  confidenceR_ASC
  confidenceR_DESC
  inVitro_ASC
  inVitro_DESC
  volume_ASC
  volume_DESC
  volumeAdj_ASC
  volumeAdj_DESC
  volumeL_ASC
  volumeL_DESC
  volumeR_ASC
  volumeR_DESC
}

type CupDataProcVolumePreviousValues {
  id: Int!
  confidenceL: Int
  confidenceR: Int
  inVitro: Boolean!
  volume: Int
  volumeAdj: Int
  volumeL: Int
  volumeR: Int
}

input CupDataProcVolumeScalarWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [CupDataProcVolumeScalarWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [CupDataProcVolumeScalarWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [CupDataProcVolumeScalarWhereInput!]
  id: Int
  """
  All values that are not equal to given value.
  """
  id_not: Int
  """
  All values that are contained in given list.
  """
  id_in: [Int!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [Int!]
  """
  All values less than the given value.
  """
  id_lt: Int
  """
  All values less than or equal the given value.
  """
  id_lte: Int
  """
  All values greater than the given value.
  """
  id_gt: Int
  """
  All values greater than or equal the given value.
  """
  id_gte: Int
  confidenceL: Int
  """
  All values that are not equal to given value.
  """
  confidenceL_not: Int
  """
  All values that are contained in given list.
  """
  confidenceL_in: [Int!]
  """
  All values that are not contained in given list.
  """
  confidenceL_not_in: [Int!]
  """
  All values less than the given value.
  """
  confidenceL_lt: Int
  """
  All values less than or equal the given value.
  """
  confidenceL_lte: Int
  """
  All values greater than the given value.
  """
  confidenceL_gt: Int
  """
  All values greater than or equal the given value.
  """
  confidenceL_gte: Int
  confidenceR: Int
  """
  All values that are not equal to given value.
  """
  confidenceR_not: Int
  """
  All values that are contained in given list.
  """
  confidenceR_in: [Int!]
  """
  All values that are not contained in given list.
  """
  confidenceR_not_in: [Int!]
  """
  All values less than the given value.
  """
  confidenceR_lt: Int
  """
  All values less than or equal the given value.
  """
  confidenceR_lte: Int
  """
  All values greater than the given value.
  """
  confidenceR_gt: Int
  """
  All values greater than or equal the given value.
  """
  confidenceR_gte: Int
  inVitro: Boolean
  """
  All values that are not equal to given value.
  """
  inVitro_not: Boolean
  volume: Int
  """
  All values that are not equal to given value.
  """
  volume_not: Int
  """
  All values that are contained in given list.
  """
  volume_in: [Int!]
  """
  All values that are not contained in given list.
  """
  volume_not_in: [Int!]
  """
  All values less than the given value.
  """
  volume_lt: Int
  """
  All values less than or equal the given value.
  """
  volume_lte: Int
  """
  All values greater than the given value.
  """
  volume_gt: Int
  """
  All values greater than or equal the given value.
  """
  volume_gte: Int
  volumeAdj: Int
  """
  All values that are not equal to given value.
  """
  volumeAdj_not: Int
  """
  All values that are contained in given list.
  """
  volumeAdj_in: [Int!]
  """
  All values that are not contained in given list.
  """
  volumeAdj_not_in: [Int!]
  """
  All values less than the given value.
  """
  volumeAdj_lt: Int
  """
  All values less than or equal the given value.
  """
  volumeAdj_lte: Int
  """
  All values greater than the given value.
  """
  volumeAdj_gt: Int
  """
  All values greater than or equal the given value.
  """
  volumeAdj_gte: Int
  volumeL: Int
  """
  All values that are not equal to given value.
  """
  volumeL_not: Int
  """
  All values that are contained in given list.
  """
  volumeL_in: [Int!]
  """
  All values that are not contained in given list.
  """
  volumeL_not_in: [Int!]
  """
  All values less than the given value.
  """
  volumeL_lt: Int
  """
  All values less than or equal the given value.
  """
  volumeL_lte: Int
  """
  All values greater than the given value.
  """
  volumeL_gt: Int
  """
  All values greater than or equal the given value.
  """
  volumeL_gte: Int
  volumeR: Int
  """
  All values that are not equal to given value.
  """
  volumeR_not: Int
  """
  All values that are contained in given list.
  """
  volumeR_in: [Int!]
  """
  All values that are not contained in given list.
  """
  volumeR_not_in: [Int!]
  """
  All values less than the given value.
  """
  volumeR_lt: Int
  """
  All values less than or equal the given value.
  """
  volumeR_lte: Int
  """
  All values greater than the given value.
  """
  volumeR_gt: Int
  """
  All values greater than or equal the given value.
  """
  volumeR_gte: Int
}

type CupDataProcVolumeSubscriptionPayload {
  mutation: MutationType!
  node: CupDataProcVolume
  updatedFields: [String!]
  previousValues: CupDataProcVolumePreviousValues
}

input CupDataProcVolumeSubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [CupDataProcVolumeSubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [CupDataProcVolumeSubscriptionWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [CupDataProcVolumeSubscriptionWhereInput!]
  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]
  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String
  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]
  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: CupDataProcVolumeWhereInput
}

input CupDataProcVolumeUpdateInput {
  confidenceL: Int
  confidenceR: Int
  inVitro: Boolean
  volume: Int
  volumeAdj: Int
  volumeL: Int
  volumeR: Int
  cupDataRowId: CupDatumUpdateOneRequiredWithoutCupDataProcVolumeInput
}

input CupDataProcVolumeUpdateManyDataInput {
  confidenceL: Int
  confidenceR: Int
  inVitro: Boolean
  volume: Int
  volumeAdj: Int
  volumeL: Int
  volumeR: Int
}

input CupDataProcVolumeUpdateManyMutationInput {
  confidenceL: Int
  confidenceR: Int
  inVitro: Boolean
  volume: Int
  volumeAdj: Int
  volumeL: Int
  volumeR: Int
}

input CupDataProcVolumeUpdateManyWithoutCupDataRowIdInput {
  create: [CupDataProcVolumeCreateWithoutCupDataRowIdInput!]
  connect: [CupDataProcVolumeWhereUniqueInput!]
  set: [CupDataProcVolumeWhereUniqueInput!]
  disconnect: [CupDataProcVolumeWhereUniqueInput!]
  delete: [CupDataProcVolumeWhereUniqueInput!]
  update: [CupDataProcVolumeUpdateWithWhereUniqueWithoutCupDataRowIdInput!]
  updateMany: [CupDataProcVolumeUpdateManyWithWhereNestedInput!]
  deleteMany: [CupDataProcVolumeScalarWhereInput!]
  upsert: [CupDataProcVolumeUpsertWithWhereUniqueWithoutCupDataRowIdInput!]
}

input CupDataProcVolumeUpdateManyWithWhereNestedInput {
  where: CupDataProcVolumeScalarWhereInput!
  data: CupDataProcVolumeUpdateManyDataInput!
}

input CupDataProcVolumeUpdateWithoutCupDataRowIdDataInput {
  confidenceL: Int
  confidenceR: Int
  inVitro: Boolean
  volume: Int
  volumeAdj: Int
  volumeL: Int
  volumeR: Int
}

input CupDataProcVolumeUpdateWithWhereUniqueWithoutCupDataRowIdInput {
  where: CupDataProcVolumeWhereUniqueInput!
  data: CupDataProcVolumeUpdateWithoutCupDataRowIdDataInput!
}

input CupDataProcVolumeUpsertWithWhereUniqueWithoutCupDataRowIdInput {
  where: CupDataProcVolumeWhereUniqueInput!
  update: CupDataProcVolumeUpdateWithoutCupDataRowIdDataInput!
  create: CupDataProcVolumeCreateWithoutCupDataRowIdInput!
}

input CupDataProcVolumeWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [CupDataProcVolumeWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [CupDataProcVolumeWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [CupDataProcVolumeWhereInput!]
  id: Int
  """
  All values that are not equal to given value.
  """
  id_not: Int
  """
  All values that are contained in given list.
  """
  id_in: [Int!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [Int!]
  """
  All values less than the given value.
  """
  id_lt: Int
  """
  All values less than or equal the given value.
  """
  id_lte: Int
  """
  All values greater than the given value.
  """
  id_gt: Int
  """
  All values greater than or equal the given value.
  """
  id_gte: Int
  confidenceL: Int
  """
  All values that are not equal to given value.
  """
  confidenceL_not: Int
  """
  All values that are contained in given list.
  """
  confidenceL_in: [Int!]
  """
  All values that are not contained in given list.
  """
  confidenceL_not_in: [Int!]
  """
  All values less than the given value.
  """
  confidenceL_lt: Int
  """
  All values less than or equal the given value.
  """
  confidenceL_lte: Int
  """
  All values greater than the given value.
  """
  confidenceL_gt: Int
  """
  All values greater than or equal the given value.
  """
  confidenceL_gte: Int
  confidenceR: Int
  """
  All values that are not equal to given value.
  """
  confidenceR_not: Int
  """
  All values that are contained in given list.
  """
  confidenceR_in: [Int!]
  """
  All values that are not contained in given list.
  """
  confidenceR_not_in: [Int!]
  """
  All values less than the given value.
  """
  confidenceR_lt: Int
  """
  All values less than or equal the given value.
  """
  confidenceR_lte: Int
  """
  All values greater than the given value.
  """
  confidenceR_gt: Int
  """
  All values greater than or equal the given value.
  """
  confidenceR_gte: Int
  inVitro: Boolean
  """
  All values that are not equal to given value.
  """
  inVitro_not: Boolean
  volume: Int
  """
  All values that are not equal to given value.
  """
  volume_not: Int
  """
  All values that are contained in given list.
  """
  volume_in: [Int!]
  """
  All values that are not contained in given list.
  """
  volume_not_in: [Int!]
  """
  All values less than the given value.
  """
  volume_lt: Int
  """
  All values less than or equal the given value.
  """
  volume_lte: Int
  """
  All values greater than the given value.
  """
  volume_gt: Int
  """
  All values greater than or equal the given value.
  """
  volume_gte: Int
  volumeAdj: Int
  """
  All values that are not equal to given value.
  """
  volumeAdj_not: Int
  """
  All values that are contained in given list.
  """
  volumeAdj_in: [Int!]
  """
  All values that are not contained in given list.
  """
  volumeAdj_not_in: [Int!]
  """
  All values less than the given value.
  """
  volumeAdj_lt: Int
  """
  All values less than or equal the given value.
  """
  volumeAdj_lte: Int
  """
  All values greater than the given value.
  """
  volumeAdj_gt: Int
  """
  All values greater than or equal the given value.
  """
  volumeAdj_gte: Int
  volumeL: Int
  """
  All values that are not equal to given value.
  """
  volumeL_not: Int
  """
  All values that are contained in given list.
  """
  volumeL_in: [Int!]
  """
  All values that are not contained in given list.
  """
  volumeL_not_in: [Int!]
  """
  All values less than the given value.
  """
  volumeL_lt: Int
  """
  All values less than or equal the given value.
  """
  volumeL_lte: Int
  """
  All values greater than the given value.
  """
  volumeL_gt: Int
  """
  All values greater than or equal the given value.
  """
  volumeL_gte: Int
  volumeR: Int
  """
  All values that are not equal to given value.
  """
  volumeR_not: Int
  """
  All values that are contained in given list.
  """
  volumeR_in: [Int!]
  """
  All values that are not contained in given list.
  """
  volumeR_not_in: [Int!]
  """
  All values less than the given value.
  """
  volumeR_lt: Int
  """
  All values less than or equal the given value.
  """
  volumeR_lte: Int
  """
  All values greater than the given value.
  """
  volumeR_gt: Int
  """
  All values greater than or equal the given value.
  """
  volumeR_gte: Int
  cupDataRowId: CupDatumWhereInput
}

input CupDataProcVolumeWhereUniqueInput {
  id: Int
}

type CupDataQaResponse {
  id: Int!
  answerId: CupDataAnswer!
  qaDate: DateTime!
  questionId: CupDataQuestion!
  userId: User!
}

"""
A connection to a list of items.
"""
type CupDataQaResponseConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [CupDataQaResponseEdge]!
  aggregate: AggregateCupDataQaResponse!
}

input CupDataQaResponseCreateInput {
  qaDate: DateTime!
  answerId: CupDataAnswerCreateOneWithoutCupDataQaResponseInput!
  questionId: CupDataQuestionCreateOneWithoutCupDataQaResponseInput!
  userId: UserCreateOneWithoutCupDataQaResponseInput!
}

input CupDataQaResponseCreateManyWithoutAnswerIdInput {
  create: [CupDataQaResponseCreateWithoutAnswerIdInput!]
  connect: [CupDataQaResponseWhereUniqueInput!]
}

input CupDataQaResponseCreateManyWithoutQuestionIdInput {
  create: [CupDataQaResponseCreateWithoutQuestionIdInput!]
  connect: [CupDataQaResponseWhereUniqueInput!]
}

input CupDataQaResponseCreateManyWithoutUserIdInput {
  create: [CupDataQaResponseCreateWithoutUserIdInput!]
  connect: [CupDataQaResponseWhereUniqueInput!]
}

input CupDataQaResponseCreateWithoutAnswerIdInput {
  qaDate: DateTime!
  questionId: CupDataQuestionCreateOneWithoutCupDataQaResponseInput!
  userId: UserCreateOneWithoutCupDataQaResponseInput!
}

input CupDataQaResponseCreateWithoutQuestionIdInput {
  qaDate: DateTime!
  answerId: CupDataAnswerCreateOneWithoutCupDataQaResponseInput!
  userId: UserCreateOneWithoutCupDataQaResponseInput!
}

input CupDataQaResponseCreateWithoutUserIdInput {
  qaDate: DateTime!
  answerId: CupDataAnswerCreateOneWithoutCupDataQaResponseInput!
  questionId: CupDataQuestionCreateOneWithoutCupDataQaResponseInput!
}

"""
An edge in a connection.
"""
type CupDataQaResponseEdge {
  """
  The item at the end of the edge.
  """
  node: CupDataQaResponse!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum CupDataQaResponseOrderByInput {
  id_ASC
  id_DESC
  qaDate_ASC
  qaDate_DESC
}

type CupDataQaResponsePreviousValues {
  id: Int!
  qaDate: DateTime!
}

input CupDataQaResponseScalarWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [CupDataQaResponseScalarWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [CupDataQaResponseScalarWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [CupDataQaResponseScalarWhereInput!]
  id: Int
  """
  All values that are not equal to given value.
  """
  id_not: Int
  """
  All values that are contained in given list.
  """
  id_in: [Int!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [Int!]
  """
  All values less than the given value.
  """
  id_lt: Int
  """
  All values less than or equal the given value.
  """
  id_lte: Int
  """
  All values greater than the given value.
  """
  id_gt: Int
  """
  All values greater than or equal the given value.
  """
  id_gte: Int
  qaDate: DateTime
  """
  All values that are not equal to given value.
  """
  qaDate_not: DateTime
  """
  All values that are contained in given list.
  """
  qaDate_in: [DateTime!]
  """
  All values that are not contained in given list.
  """
  qaDate_not_in: [DateTime!]
  """
  All values less than the given value.
  """
  qaDate_lt: DateTime
  """
  All values less than or equal the given value.
  """
  qaDate_lte: DateTime
  """
  All values greater than the given value.
  """
  qaDate_gt: DateTime
  """
  All values greater than or equal the given value.
  """
  qaDate_gte: DateTime
}

type CupDataQaResponseSubscriptionPayload {
  mutation: MutationType!
  node: CupDataQaResponse
  updatedFields: [String!]
  previousValues: CupDataQaResponsePreviousValues
}

input CupDataQaResponseSubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [CupDataQaResponseSubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [CupDataQaResponseSubscriptionWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [CupDataQaResponseSubscriptionWhereInput!]
  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]
  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String
  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]
  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: CupDataQaResponseWhereInput
}

input CupDataQaResponseUpdateInput {
  qaDate: DateTime
  answerId: CupDataAnswerUpdateOneRequiredWithoutCupDataQaResponseInput
  questionId: CupDataQuestionUpdateOneRequiredWithoutCupDataQaResponseInput
  userId: UserUpdateOneRequiredWithoutCupDataQaResponseInput
}

input CupDataQaResponseUpdateManyDataInput {
  qaDate: DateTime
}

input CupDataQaResponseUpdateManyMutationInput {
  qaDate: DateTime
}

input CupDataQaResponseUpdateManyWithoutAnswerIdInput {
  create: [CupDataQaResponseCreateWithoutAnswerIdInput!]
  connect: [CupDataQaResponseWhereUniqueInput!]
  set: [CupDataQaResponseWhereUniqueInput!]
  disconnect: [CupDataQaResponseWhereUniqueInput!]
  delete: [CupDataQaResponseWhereUniqueInput!]
  update: [CupDataQaResponseUpdateWithWhereUniqueWithoutAnswerIdInput!]
  updateMany: [CupDataQaResponseUpdateManyWithWhereNestedInput!]
  deleteMany: [CupDataQaResponseScalarWhereInput!]
  upsert: [CupDataQaResponseUpsertWithWhereUniqueWithoutAnswerIdInput!]
}

input CupDataQaResponseUpdateManyWithoutQuestionIdInput {
  create: [CupDataQaResponseCreateWithoutQuestionIdInput!]
  connect: [CupDataQaResponseWhereUniqueInput!]
  set: [CupDataQaResponseWhereUniqueInput!]
  disconnect: [CupDataQaResponseWhereUniqueInput!]
  delete: [CupDataQaResponseWhereUniqueInput!]
  update: [CupDataQaResponseUpdateWithWhereUniqueWithoutQuestionIdInput!]
  updateMany: [CupDataQaResponseUpdateManyWithWhereNestedInput!]
  deleteMany: [CupDataQaResponseScalarWhereInput!]
  upsert: [CupDataQaResponseUpsertWithWhereUniqueWithoutQuestionIdInput!]
}

input CupDataQaResponseUpdateManyWithoutUserIdInput {
  create: [CupDataQaResponseCreateWithoutUserIdInput!]
  connect: [CupDataQaResponseWhereUniqueInput!]
  set: [CupDataQaResponseWhereUniqueInput!]
  disconnect: [CupDataQaResponseWhereUniqueInput!]
  delete: [CupDataQaResponseWhereUniqueInput!]
  update: [CupDataQaResponseUpdateWithWhereUniqueWithoutUserIdInput!]
  updateMany: [CupDataQaResponseUpdateManyWithWhereNestedInput!]
  deleteMany: [CupDataQaResponseScalarWhereInput!]
  upsert: [CupDataQaResponseUpsertWithWhereUniqueWithoutUserIdInput!]
}

input CupDataQaResponseUpdateManyWithWhereNestedInput {
  where: CupDataQaResponseScalarWhereInput!
  data: CupDataQaResponseUpdateManyDataInput!
}

input CupDataQaResponseUpdateWithoutAnswerIdDataInput {
  qaDate: DateTime
  questionId: CupDataQuestionUpdateOneRequiredWithoutCupDataQaResponseInput
  userId: UserUpdateOneRequiredWithoutCupDataQaResponseInput
}

input CupDataQaResponseUpdateWithoutQuestionIdDataInput {
  qaDate: DateTime
  answerId: CupDataAnswerUpdateOneRequiredWithoutCupDataQaResponseInput
  userId: UserUpdateOneRequiredWithoutCupDataQaResponseInput
}

input CupDataQaResponseUpdateWithoutUserIdDataInput {
  qaDate: DateTime
  answerId: CupDataAnswerUpdateOneRequiredWithoutCupDataQaResponseInput
  questionId: CupDataQuestionUpdateOneRequiredWithoutCupDataQaResponseInput
}

input CupDataQaResponseUpdateWithWhereUniqueWithoutAnswerIdInput {
  where: CupDataQaResponseWhereUniqueInput!
  data: CupDataQaResponseUpdateWithoutAnswerIdDataInput!
}

input CupDataQaResponseUpdateWithWhereUniqueWithoutQuestionIdInput {
  where: CupDataQaResponseWhereUniqueInput!
  data: CupDataQaResponseUpdateWithoutQuestionIdDataInput!
}

input CupDataQaResponseUpdateWithWhereUniqueWithoutUserIdInput {
  where: CupDataQaResponseWhereUniqueInput!
  data: CupDataQaResponseUpdateWithoutUserIdDataInput!
}

input CupDataQaResponseUpsertWithWhereUniqueWithoutAnswerIdInput {
  where: CupDataQaResponseWhereUniqueInput!
  update: CupDataQaResponseUpdateWithoutAnswerIdDataInput!
  create: CupDataQaResponseCreateWithoutAnswerIdInput!
}

input CupDataQaResponseUpsertWithWhereUniqueWithoutQuestionIdInput {
  where: CupDataQaResponseWhereUniqueInput!
  update: CupDataQaResponseUpdateWithoutQuestionIdDataInput!
  create: CupDataQaResponseCreateWithoutQuestionIdInput!
}

input CupDataQaResponseUpsertWithWhereUniqueWithoutUserIdInput {
  where: CupDataQaResponseWhereUniqueInput!
  update: CupDataQaResponseUpdateWithoutUserIdDataInput!
  create: CupDataQaResponseCreateWithoutUserIdInput!
}

input CupDataQaResponseWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [CupDataQaResponseWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [CupDataQaResponseWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [CupDataQaResponseWhereInput!]
  id: Int
  """
  All values that are not equal to given value.
  """
  id_not: Int
  """
  All values that are contained in given list.
  """
  id_in: [Int!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [Int!]
  """
  All values less than the given value.
  """
  id_lt: Int
  """
  All values less than or equal the given value.
  """
  id_lte: Int
  """
  All values greater than the given value.
  """
  id_gt: Int
  """
  All values greater than or equal the given value.
  """
  id_gte: Int
  qaDate: DateTime
  """
  All values that are not equal to given value.
  """
  qaDate_not: DateTime
  """
  All values that are contained in given list.
  """
  qaDate_in: [DateTime!]
  """
  All values that are not contained in given list.
  """
  qaDate_not_in: [DateTime!]
  """
  All values less than the given value.
  """
  qaDate_lt: DateTime
  """
  All values less than or equal the given value.
  """
  qaDate_lte: DateTime
  """
  All values greater than the given value.
  """
  qaDate_gt: DateTime
  """
  All values greater than or equal the given value.
  """
  qaDate_gte: DateTime
  answerId: CupDataAnswerWhereInput
  questionId: CupDataQuestionWhereInput
  userId: UserWhereInput
}

input CupDataQaResponseWhereUniqueInput {
  id: Int
}

type CupDataQuestion {
  id: Int!
  cupDataAnswer(where: CupDataAnswerWhereInput, orderBy: CupDataAnswerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [CupDataAnswer!]
  cupDataQaResponse(where: CupDataQaResponseWhereInput, orderBy: CupDataQaResponseOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [CupDataQaResponse!]
  questionText: String!
}

"""
A connection to a list of items.
"""
type CupDataQuestionConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [CupDataQuestionEdge]!
  aggregate: AggregateCupDataQuestion!
}

input CupDataQuestionCreateInput {
  questionText: String!
  cupDataAnswer: CupDataAnswerCreateManyWithoutQuestionIdInput
  cupDataQaResponse: CupDataQaResponseCreateManyWithoutQuestionIdInput
}

input CupDataQuestionCreateOneWithoutCupDataAnswerInput {
  create: CupDataQuestionCreateWithoutCupDataAnswerInput
  connect: CupDataQuestionWhereUniqueInput
}

input CupDataQuestionCreateOneWithoutCupDataQaResponseInput {
  create: CupDataQuestionCreateWithoutCupDataQaResponseInput
  connect: CupDataQuestionWhereUniqueInput
}

input CupDataQuestionCreateWithoutCupDataAnswerInput {
  questionText: String!
  cupDataQaResponse: CupDataQaResponseCreateManyWithoutQuestionIdInput
}

input CupDataQuestionCreateWithoutCupDataQaResponseInput {
  questionText: String!
  cupDataAnswer: CupDataAnswerCreateManyWithoutQuestionIdInput
}

"""
An edge in a connection.
"""
type CupDataQuestionEdge {
  """
  The item at the end of the edge.
  """
  node: CupDataQuestion!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum CupDataQuestionOrderByInput {
  id_ASC
  id_DESC
  questionText_ASC
  questionText_DESC
}

type CupDataQuestionPreviousValues {
  id: Int!
  questionText: String!
}

type CupDataQuestionSubscriptionPayload {
  mutation: MutationType!
  node: CupDataQuestion
  updatedFields: [String!]
  previousValues: CupDataQuestionPreviousValues
}

input CupDataQuestionSubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [CupDataQuestionSubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [CupDataQuestionSubscriptionWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [CupDataQuestionSubscriptionWhereInput!]
  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]
  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String
  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]
  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: CupDataQuestionWhereInput
}

input CupDataQuestionUpdateInput {
  questionText: String
  cupDataAnswer: CupDataAnswerUpdateManyWithoutQuestionIdInput
  cupDataQaResponse: CupDataQaResponseUpdateManyWithoutQuestionIdInput
}

input CupDataQuestionUpdateManyMutationInput {
  questionText: String
}

input CupDataQuestionUpdateOneRequiredWithoutCupDataAnswerInput {
  create: CupDataQuestionCreateWithoutCupDataAnswerInput
  connect: CupDataQuestionWhereUniqueInput
  update: CupDataQuestionUpdateWithoutCupDataAnswerDataInput
  upsert: CupDataQuestionUpsertWithoutCupDataAnswerInput
}

input CupDataQuestionUpdateOneRequiredWithoutCupDataQaResponseInput {
  create: CupDataQuestionCreateWithoutCupDataQaResponseInput
  connect: CupDataQuestionWhereUniqueInput
  update: CupDataQuestionUpdateWithoutCupDataQaResponseDataInput
  upsert: CupDataQuestionUpsertWithoutCupDataQaResponseInput
}

input CupDataQuestionUpdateWithoutCupDataAnswerDataInput {
  questionText: String
  cupDataQaResponse: CupDataQaResponseUpdateManyWithoutQuestionIdInput
}

input CupDataQuestionUpdateWithoutCupDataQaResponseDataInput {
  questionText: String
  cupDataAnswer: CupDataAnswerUpdateManyWithoutQuestionIdInput
}

input CupDataQuestionUpsertWithoutCupDataAnswerInput {
  update: CupDataQuestionUpdateWithoutCupDataAnswerDataInput!
  create: CupDataQuestionCreateWithoutCupDataAnswerInput!
}

input CupDataQuestionUpsertWithoutCupDataQaResponseInput {
  update: CupDataQuestionUpdateWithoutCupDataQaResponseDataInput!
  create: CupDataQuestionCreateWithoutCupDataQaResponseInput!
}

input CupDataQuestionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [CupDataQuestionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [CupDataQuestionWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [CupDataQuestionWhereInput!]
  id: Int
  """
  All values that are not equal to given value.
  """
  id_not: Int
  """
  All values that are contained in given list.
  """
  id_in: [Int!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [Int!]
  """
  All values less than the given value.
  """
  id_lt: Int
  """
  All values less than or equal the given value.
  """
  id_lte: Int
  """
  All values greater than the given value.
  """
  id_gt: Int
  """
  All values greater than or equal the given value.
  """
  id_gte: Int
  questionText: String
  """
  All values that are not equal to given value.
  """
  questionText_not: String
  """
  All values that are contained in given list.
  """
  questionText_in: [String!]
  """
  All values that are not contained in given list.
  """
  questionText_not_in: [String!]
  """
  All values less than the given value.
  """
  questionText_lt: String
  """
  All values less than or equal the given value.
  """
  questionText_lte: String
  """
  All values greater than the given value.
  """
  questionText_gt: String
  """
  All values greater than or equal the given value.
  """
  questionText_gte: String
  """
  All values containing the given string.
  """
  questionText_contains: String
  """
  All values not containing the given string.
  """
  questionText_not_contains: String
  """
  All values starting with the given string.
  """
  questionText_starts_with: String
  """
  All values not starting with the given string.
  """
  questionText_not_starts_with: String
  """
  All values ending with the given string.
  """
  questionText_ends_with: String
  """
  All values not ending with the given string.
  """
  questionText_not_ends_with: String
  cupDataAnswer_every: CupDataAnswerWhereInput
  cupDataAnswer_some: CupDataAnswerWhereInput
  cupDataAnswer_none: CupDataAnswerWhereInput
  cupDataQaResponse_every: CupDataQaResponseWhereInput
  cupDataQaResponse_some: CupDataQaResponseWhereInput
  cupDataQaResponse_none: CupDataQaResponseWhereInput
}

input CupDataQuestionWhereUniqueInput {
  id: Int
}

type CupDataRaw {
  id: Int!
  pageData: String!
  serialNumber: Cup
}

"""
A connection to a list of items.
"""
type CupDataRawConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [CupDataRawEdge]!
  aggregate: AggregateCupDataRaw!
}

input CupDataRawCreateInput {
  pageData: String!
  serialNumber: CupCreateOneWithoutCupDataRawInput
}

input CupDataRawCreateManyWithoutSerialNumberInput {
  create: [CupDataRawCreateWithoutSerialNumberInput!]
  connect: [CupDataRawWhereUniqueInput!]
}

input CupDataRawCreateWithoutSerialNumberInput {
  pageData: String!
}

"""
An edge in a connection.
"""
type CupDataRawEdge {
  """
  The item at the end of the edge.
  """
  node: CupDataRaw!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum CupDataRawOrderByInput {
  id_ASC
  id_DESC
  pageData_ASC
  pageData_DESC
}

type CupDataRawPreviousValues {
  id: Int!
  pageData: String!
}

input CupDataRawScalarWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [CupDataRawScalarWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [CupDataRawScalarWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [CupDataRawScalarWhereInput!]
  id: Int
  """
  All values that are not equal to given value.
  """
  id_not: Int
  """
  All values that are contained in given list.
  """
  id_in: [Int!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [Int!]
  """
  All values less than the given value.
  """
  id_lt: Int
  """
  All values less than or equal the given value.
  """
  id_lte: Int
  """
  All values greater than the given value.
  """
  id_gt: Int
  """
  All values greater than or equal the given value.
  """
  id_gte: Int
  pageData: String
  """
  All values that are not equal to given value.
  """
  pageData_not: String
  """
  All values that are contained in given list.
  """
  pageData_in: [String!]
  """
  All values that are not contained in given list.
  """
  pageData_not_in: [String!]
  """
  All values less than the given value.
  """
  pageData_lt: String
  """
  All values less than or equal the given value.
  """
  pageData_lte: String
  """
  All values greater than the given value.
  """
  pageData_gt: String
  """
  All values greater than or equal the given value.
  """
  pageData_gte: String
  """
  All values containing the given string.
  """
  pageData_contains: String
  """
  All values not containing the given string.
  """
  pageData_not_contains: String
  """
  All values starting with the given string.
  """
  pageData_starts_with: String
  """
  All values not starting with the given string.
  """
  pageData_not_starts_with: String
  """
  All values ending with the given string.
  """
  pageData_ends_with: String
  """
  All values not ending with the given string.
  """
  pageData_not_ends_with: String
}

type CupDataRawSubscriptionPayload {
  mutation: MutationType!
  node: CupDataRaw
  updatedFields: [String!]
  previousValues: CupDataRawPreviousValues
}

input CupDataRawSubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [CupDataRawSubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [CupDataRawSubscriptionWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [CupDataRawSubscriptionWhereInput!]
  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]
  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String
  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]
  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: CupDataRawWhereInput
}

input CupDataRawUpdateInput {
  pageData: String
  serialNumber: CupUpdateOneWithoutCupDataRawInput
}

input CupDataRawUpdateManyDataInput {
  pageData: String
}

input CupDataRawUpdateManyMutationInput {
  pageData: String
}

input CupDataRawUpdateManyWithoutSerialNumberInput {
  create: [CupDataRawCreateWithoutSerialNumberInput!]
  connect: [CupDataRawWhereUniqueInput!]
  set: [CupDataRawWhereUniqueInput!]
  disconnect: [CupDataRawWhereUniqueInput!]
  delete: [CupDataRawWhereUniqueInput!]
  update: [CupDataRawUpdateWithWhereUniqueWithoutSerialNumberInput!]
  updateMany: [CupDataRawUpdateManyWithWhereNestedInput!]
  deleteMany: [CupDataRawScalarWhereInput!]
  upsert: [CupDataRawUpsertWithWhereUniqueWithoutSerialNumberInput!]
}

input CupDataRawUpdateManyWithWhereNestedInput {
  where: CupDataRawScalarWhereInput!
  data: CupDataRawUpdateManyDataInput!
}

input CupDataRawUpdateWithoutSerialNumberDataInput {
  pageData: String
}

input CupDataRawUpdateWithWhereUniqueWithoutSerialNumberInput {
  where: CupDataRawWhereUniqueInput!
  data: CupDataRawUpdateWithoutSerialNumberDataInput!
}

input CupDataRawUpsertWithWhereUniqueWithoutSerialNumberInput {
  where: CupDataRawWhereUniqueInput!
  update: CupDataRawUpdateWithoutSerialNumberDataInput!
  create: CupDataRawCreateWithoutSerialNumberInput!
}

input CupDataRawWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [CupDataRawWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [CupDataRawWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [CupDataRawWhereInput!]
  id: Int
  """
  All values that are not equal to given value.
  """
  id_not: Int
  """
  All values that are contained in given list.
  """
  id_in: [Int!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [Int!]
  """
  All values less than the given value.
  """
  id_lt: Int
  """
  All values less than or equal the given value.
  """
  id_lte: Int
  """
  All values greater than the given value.
  """
  id_gt: Int
  """
  All values greater than or equal the given value.
  """
  id_gte: Int
  pageData: String
  """
  All values that are not equal to given value.
  """
  pageData_not: String
  """
  All values that are contained in given list.
  """
  pageData_in: [String!]
  """
  All values that are not contained in given list.
  """
  pageData_not_in: [String!]
  """
  All values less than the given value.
  """
  pageData_lt: String
  """
  All values less than or equal the given value.
  """
  pageData_lte: String
  """
  All values greater than the given value.
  """
  pageData_gt: String
  """
  All values greater than or equal the given value.
  """
  pageData_gte: String
  """
  All values containing the given string.
  """
  pageData_contains: String
  """
  All values not containing the given string.
  """
  pageData_not_contains: String
  """
  All values starting with the given string.
  """
  pageData_starts_with: String
  """
  All values not starting with the given string.
  """
  pageData_not_starts_with: String
  """
  All values ending with the given string.
  """
  pageData_ends_with: String
  """
  All values not ending with the given string.
  """
  pageData_not_ends_with: String
  serialNumber: CupWhereInput
}

input CupDataRawWhereUniqueInput {
  id: Int
}

type CupDataRejection {
  id: Int!
  cupDataProcMdates(where: CupDataProcMdateWhereInput, orderBy: CupDataProcMdateOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [CupDataProcMdate!]
  rejectionDescription: String!
}

"""
A connection to a list of items.
"""
type CupDataRejectionConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [CupDataRejectionEdge]!
  aggregate: AggregateCupDataRejection!
}

input CupDataRejectionCreateInput {
  rejectionDescription: String!
  cupDataProcMdates: CupDataProcMdateCreateManyWithoutRejectIdInput
}

input CupDataRejectionCreateOneWithoutCupDataProcMdatesInput {
  create: CupDataRejectionCreateWithoutCupDataProcMdatesInput
  connect: CupDataRejectionWhereUniqueInput
}

input CupDataRejectionCreateWithoutCupDataProcMdatesInput {
  rejectionDescription: String!
}

"""
An edge in a connection.
"""
type CupDataRejectionEdge {
  """
  The item at the end of the edge.
  """
  node: CupDataRejection!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum CupDataRejectionOrderByInput {
  id_ASC
  id_DESC
  rejectionDescription_ASC
  rejectionDescription_DESC
}

type CupDataRejectionPreviousValues {
  id: Int!
  rejectionDescription: String!
}

type CupDataRejectionSubscriptionPayload {
  mutation: MutationType!
  node: CupDataRejection
  updatedFields: [String!]
  previousValues: CupDataRejectionPreviousValues
}

input CupDataRejectionSubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [CupDataRejectionSubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [CupDataRejectionSubscriptionWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [CupDataRejectionSubscriptionWhereInput!]
  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]
  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String
  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]
  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: CupDataRejectionWhereInput
}

input CupDataRejectionUpdateInput {
  rejectionDescription: String
  cupDataProcMdates: CupDataProcMdateUpdateManyWithoutRejectIdInput
}

input CupDataRejectionUpdateManyMutationInput {
  rejectionDescription: String
}

input CupDataRejectionUpdateOneWithoutCupDataProcMdatesInput {
  create: CupDataRejectionCreateWithoutCupDataProcMdatesInput
  connect: CupDataRejectionWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: CupDataRejectionUpdateWithoutCupDataProcMdatesDataInput
  upsert: CupDataRejectionUpsertWithoutCupDataProcMdatesInput
}

input CupDataRejectionUpdateWithoutCupDataProcMdatesDataInput {
  rejectionDescription: String
}

input CupDataRejectionUpsertWithoutCupDataProcMdatesInput {
  update: CupDataRejectionUpdateWithoutCupDataProcMdatesDataInput!
  create: CupDataRejectionCreateWithoutCupDataProcMdatesInput!
}

input CupDataRejectionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [CupDataRejectionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [CupDataRejectionWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [CupDataRejectionWhereInput!]
  id: Int
  """
  All values that are not equal to given value.
  """
  id_not: Int
  """
  All values that are contained in given list.
  """
  id_in: [Int!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [Int!]
  """
  All values less than the given value.
  """
  id_lt: Int
  """
  All values less than or equal the given value.
  """
  id_lte: Int
  """
  All values greater than the given value.
  """
  id_gt: Int
  """
  All values greater than or equal the given value.
  """
  id_gte: Int
  rejectionDescription: String
  """
  All values that are not equal to given value.
  """
  rejectionDescription_not: String
  """
  All values that are contained in given list.
  """
  rejectionDescription_in: [String!]
  """
  All values that are not contained in given list.
  """
  rejectionDescription_not_in: [String!]
  """
  All values less than the given value.
  """
  rejectionDescription_lt: String
  """
  All values less than or equal the given value.
  """
  rejectionDescription_lte: String
  """
  All values greater than the given value.
  """
  rejectionDescription_gt: String
  """
  All values greater than or equal the given value.
  """
  rejectionDescription_gte: String
  """
  All values containing the given string.
  """
  rejectionDescription_contains: String
  """
  All values not containing the given string.
  """
  rejectionDescription_not_contains: String
  """
  All values starting with the given string.
  """
  rejectionDescription_starts_with: String
  """
  All values not starting with the given string.
  """
  rejectionDescription_not_starts_with: String
  """
  All values ending with the given string.
  """
  rejectionDescription_ends_with: String
  """
  All values not ending with the given string.
  """
  rejectionDescription_not_ends_with: String
  cupDataProcMdates_every: CupDataProcMdateWhereInput
  cupDataProcMdates_some: CupDataProcMdateWhereInput
  cupDataProcMdates_none: CupDataProcMdateWhereInput
}

input CupDataRejectionWhereUniqueInput {
  id: Int
  rejectionDescription: String
}

type CupDataUserRemove {
  id: Int!
  changeTime: DateTime!
  explainId: CupDataUserRemoveExplain!
  serialNumber: Cup!
  userId: User!
}

"""
A connection to a list of items.
"""
type CupDataUserRemoveConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [CupDataUserRemoveEdge]!
  aggregate: AggregateCupDataUserRemove!
}

input CupDataUserRemoveCreateInput {
  changeTime: DateTime!
  explainId: CupDataUserRemoveExplainCreateOneWithoutCupDataUserRemoveInput!
  serialNumber: CupCreateOneWithoutCupDataUserRemoveInput!
  userId: UserCreateOneWithoutCupDataUserRemoveInput!
}

input CupDataUserRemoveCreateManyWithoutExplainIdInput {
  create: [CupDataUserRemoveCreateWithoutExplainIdInput!]
  connect: [CupDataUserRemoveWhereUniqueInput!]
}

input CupDataUserRemoveCreateManyWithoutSerialNumberInput {
  create: [CupDataUserRemoveCreateWithoutSerialNumberInput!]
  connect: [CupDataUserRemoveWhereUniqueInput!]
}

input CupDataUserRemoveCreateManyWithoutUserIdInput {
  create: [CupDataUserRemoveCreateWithoutUserIdInput!]
  connect: [CupDataUserRemoveWhereUniqueInput!]
}

input CupDataUserRemoveCreateWithoutExplainIdInput {
  changeTime: DateTime!
  serialNumber: CupCreateOneWithoutCupDataUserRemoveInput!
  userId: UserCreateOneWithoutCupDataUserRemoveInput!
}

input CupDataUserRemoveCreateWithoutSerialNumberInput {
  changeTime: DateTime!
  explainId: CupDataUserRemoveExplainCreateOneWithoutCupDataUserRemoveInput!
  userId: UserCreateOneWithoutCupDataUserRemoveInput!
}

input CupDataUserRemoveCreateWithoutUserIdInput {
  changeTime: DateTime!
  explainId: CupDataUserRemoveExplainCreateOneWithoutCupDataUserRemoveInput!
  serialNumber: CupCreateOneWithoutCupDataUserRemoveInput!
}

"""
An edge in a connection.
"""
type CupDataUserRemoveEdge {
  """
  The item at the end of the edge.
  """
  node: CupDataUserRemove!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

type CupDataUserRemoveExplain {
  id: Int!
  cupDataUserRemove(where: CupDataUserRemoveWhereInput, orderBy: CupDataUserRemoveOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [CupDataUserRemove!]
  explain: String!
}

"""
A connection to a list of items.
"""
type CupDataUserRemoveExplainConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [CupDataUserRemoveExplainEdge]!
  aggregate: AggregateCupDataUserRemoveExplain!
}

input CupDataUserRemoveExplainCreateInput {
  explain: String!
  cupDataUserRemove: CupDataUserRemoveCreateManyWithoutExplainIdInput
}

input CupDataUserRemoveExplainCreateOneWithoutCupDataUserRemoveInput {
  create: CupDataUserRemoveExplainCreateWithoutCupDataUserRemoveInput
  connect: CupDataUserRemoveExplainWhereUniqueInput
}

input CupDataUserRemoveExplainCreateWithoutCupDataUserRemoveInput {
  explain: String!
}

"""
An edge in a connection.
"""
type CupDataUserRemoveExplainEdge {
  """
  The item at the end of the edge.
  """
  node: CupDataUserRemoveExplain!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum CupDataUserRemoveExplainOrderByInput {
  id_ASC
  id_DESC
  explain_ASC
  explain_DESC
}

type CupDataUserRemoveExplainPreviousValues {
  id: Int!
  explain: String!
}

type CupDataUserRemoveExplainSubscriptionPayload {
  mutation: MutationType!
  node: CupDataUserRemoveExplain
  updatedFields: [String!]
  previousValues: CupDataUserRemoveExplainPreviousValues
}

input CupDataUserRemoveExplainSubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [CupDataUserRemoveExplainSubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [CupDataUserRemoveExplainSubscriptionWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [CupDataUserRemoveExplainSubscriptionWhereInput!]
  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]
  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String
  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]
  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: CupDataUserRemoveExplainWhereInput
}

input CupDataUserRemoveExplainUpdateInput {
  explain: String
  cupDataUserRemove: CupDataUserRemoveUpdateManyWithoutExplainIdInput
}

input CupDataUserRemoveExplainUpdateManyMutationInput {
  explain: String
}

input CupDataUserRemoveExplainUpdateOneRequiredWithoutCupDataUserRemoveInput {
  create: CupDataUserRemoveExplainCreateWithoutCupDataUserRemoveInput
  connect: CupDataUserRemoveExplainWhereUniqueInput
  update: CupDataUserRemoveExplainUpdateWithoutCupDataUserRemoveDataInput
  upsert: CupDataUserRemoveExplainUpsertWithoutCupDataUserRemoveInput
}

input CupDataUserRemoveExplainUpdateWithoutCupDataUserRemoveDataInput {
  explain: String
}

input CupDataUserRemoveExplainUpsertWithoutCupDataUserRemoveInput {
  update: CupDataUserRemoveExplainUpdateWithoutCupDataUserRemoveDataInput!
  create: CupDataUserRemoveExplainCreateWithoutCupDataUserRemoveInput!
}

input CupDataUserRemoveExplainWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [CupDataUserRemoveExplainWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [CupDataUserRemoveExplainWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [CupDataUserRemoveExplainWhereInput!]
  id: Int
  """
  All values that are not equal to given value.
  """
  id_not: Int
  """
  All values that are contained in given list.
  """
  id_in: [Int!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [Int!]
  """
  All values less than the given value.
  """
  id_lt: Int
  """
  All values less than or equal the given value.
  """
  id_lte: Int
  """
  All values greater than the given value.
  """
  id_gt: Int
  """
  All values greater than or equal the given value.
  """
  id_gte: Int
  explain: String
  """
  All values that are not equal to given value.
  """
  explain_not: String
  """
  All values that are contained in given list.
  """
  explain_in: [String!]
  """
  All values that are not contained in given list.
  """
  explain_not_in: [String!]
  """
  All values less than the given value.
  """
  explain_lt: String
  """
  All values less than or equal the given value.
  """
  explain_lte: String
  """
  All values greater than the given value.
  """
  explain_gt: String
  """
  All values greater than or equal the given value.
  """
  explain_gte: String
  """
  All values containing the given string.
  """
  explain_contains: String
  """
  All values not containing the given string.
  """
  explain_not_contains: String
  """
  All values starting with the given string.
  """
  explain_starts_with: String
  """
  All values not starting with the given string.
  """
  explain_not_starts_with: String
  """
  All values ending with the given string.
  """
  explain_ends_with: String
  """
  All values not ending with the given string.
  """
  explain_not_ends_with: String
  cupDataUserRemove_every: CupDataUserRemoveWhereInput
  cupDataUserRemove_some: CupDataUserRemoveWhereInput
  cupDataUserRemove_none: CupDataUserRemoveWhereInput
}

input CupDataUserRemoveExplainWhereUniqueInput {
  id: Int
}

enum CupDataUserRemoveOrderByInput {
  id_ASC
  id_DESC
  changeTime_ASC
  changeTime_DESC
}

type CupDataUserRemovePreviousValues {
  id: Int!
  changeTime: DateTime!
}

input CupDataUserRemoveScalarWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [CupDataUserRemoveScalarWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [CupDataUserRemoveScalarWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [CupDataUserRemoveScalarWhereInput!]
  id: Int
  """
  All values that are not equal to given value.
  """
  id_not: Int
  """
  All values that are contained in given list.
  """
  id_in: [Int!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [Int!]
  """
  All values less than the given value.
  """
  id_lt: Int
  """
  All values less than or equal the given value.
  """
  id_lte: Int
  """
  All values greater than the given value.
  """
  id_gt: Int
  """
  All values greater than or equal the given value.
  """
  id_gte: Int
  changeTime: DateTime
  """
  All values that are not equal to given value.
  """
  changeTime_not: DateTime
  """
  All values that are contained in given list.
  """
  changeTime_in: [DateTime!]
  """
  All values that are not contained in given list.
  """
  changeTime_not_in: [DateTime!]
  """
  All values less than the given value.
  """
  changeTime_lt: DateTime
  """
  All values less than or equal the given value.
  """
  changeTime_lte: DateTime
  """
  All values greater than the given value.
  """
  changeTime_gt: DateTime
  """
  All values greater than or equal the given value.
  """
  changeTime_gte: DateTime
}

type CupDataUserRemoveSubscriptionPayload {
  mutation: MutationType!
  node: CupDataUserRemove
  updatedFields: [String!]
  previousValues: CupDataUserRemovePreviousValues
}

input CupDataUserRemoveSubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [CupDataUserRemoveSubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [CupDataUserRemoveSubscriptionWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [CupDataUserRemoveSubscriptionWhereInput!]
  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]
  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String
  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]
  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: CupDataUserRemoveWhereInput
}

input CupDataUserRemoveUpdateInput {
  changeTime: DateTime
  explainId: CupDataUserRemoveExplainUpdateOneRequiredWithoutCupDataUserRemoveInput
  serialNumber: CupUpdateOneRequiredWithoutCupDataUserRemoveInput
  userId: UserUpdateOneRequiredWithoutCupDataUserRemoveInput
}

input CupDataUserRemoveUpdateManyDataInput {
  changeTime: DateTime
}

input CupDataUserRemoveUpdateManyMutationInput {
  changeTime: DateTime
}

input CupDataUserRemoveUpdateManyWithoutExplainIdInput {
  create: [CupDataUserRemoveCreateWithoutExplainIdInput!]
  connect: [CupDataUserRemoveWhereUniqueInput!]
  set: [CupDataUserRemoveWhereUniqueInput!]
  disconnect: [CupDataUserRemoveWhereUniqueInput!]
  delete: [CupDataUserRemoveWhereUniqueInput!]
  update: [CupDataUserRemoveUpdateWithWhereUniqueWithoutExplainIdInput!]
  updateMany: [CupDataUserRemoveUpdateManyWithWhereNestedInput!]
  deleteMany: [CupDataUserRemoveScalarWhereInput!]
  upsert: [CupDataUserRemoveUpsertWithWhereUniqueWithoutExplainIdInput!]
}

input CupDataUserRemoveUpdateManyWithoutSerialNumberInput {
  create: [CupDataUserRemoveCreateWithoutSerialNumberInput!]
  connect: [CupDataUserRemoveWhereUniqueInput!]
  set: [CupDataUserRemoveWhereUniqueInput!]
  disconnect: [CupDataUserRemoveWhereUniqueInput!]
  delete: [CupDataUserRemoveWhereUniqueInput!]
  update: [CupDataUserRemoveUpdateWithWhereUniqueWithoutSerialNumberInput!]
  updateMany: [CupDataUserRemoveUpdateManyWithWhereNestedInput!]
  deleteMany: [CupDataUserRemoveScalarWhereInput!]
  upsert: [CupDataUserRemoveUpsertWithWhereUniqueWithoutSerialNumberInput!]
}

input CupDataUserRemoveUpdateManyWithoutUserIdInput {
  create: [CupDataUserRemoveCreateWithoutUserIdInput!]
  connect: [CupDataUserRemoveWhereUniqueInput!]
  set: [CupDataUserRemoveWhereUniqueInput!]
  disconnect: [CupDataUserRemoveWhereUniqueInput!]
  delete: [CupDataUserRemoveWhereUniqueInput!]
  update: [CupDataUserRemoveUpdateWithWhereUniqueWithoutUserIdInput!]
  updateMany: [CupDataUserRemoveUpdateManyWithWhereNestedInput!]
  deleteMany: [CupDataUserRemoveScalarWhereInput!]
  upsert: [CupDataUserRemoveUpsertWithWhereUniqueWithoutUserIdInput!]
}

input CupDataUserRemoveUpdateManyWithWhereNestedInput {
  where: CupDataUserRemoveScalarWhereInput!
  data: CupDataUserRemoveUpdateManyDataInput!
}

input CupDataUserRemoveUpdateWithoutExplainIdDataInput {
  changeTime: DateTime
  serialNumber: CupUpdateOneRequiredWithoutCupDataUserRemoveInput
  userId: UserUpdateOneRequiredWithoutCupDataUserRemoveInput
}

input CupDataUserRemoveUpdateWithoutSerialNumberDataInput {
  changeTime: DateTime
  explainId: CupDataUserRemoveExplainUpdateOneRequiredWithoutCupDataUserRemoveInput
  userId: UserUpdateOneRequiredWithoutCupDataUserRemoveInput
}

input CupDataUserRemoveUpdateWithoutUserIdDataInput {
  changeTime: DateTime
  explainId: CupDataUserRemoveExplainUpdateOneRequiredWithoutCupDataUserRemoveInput
  serialNumber: CupUpdateOneRequiredWithoutCupDataUserRemoveInput
}

input CupDataUserRemoveUpdateWithWhereUniqueWithoutExplainIdInput {
  where: CupDataUserRemoveWhereUniqueInput!
  data: CupDataUserRemoveUpdateWithoutExplainIdDataInput!
}

input CupDataUserRemoveUpdateWithWhereUniqueWithoutSerialNumberInput {
  where: CupDataUserRemoveWhereUniqueInput!
  data: CupDataUserRemoveUpdateWithoutSerialNumberDataInput!
}

input CupDataUserRemoveUpdateWithWhereUniqueWithoutUserIdInput {
  where: CupDataUserRemoveWhereUniqueInput!
  data: CupDataUserRemoveUpdateWithoutUserIdDataInput!
}

input CupDataUserRemoveUpsertWithWhereUniqueWithoutExplainIdInput {
  where: CupDataUserRemoveWhereUniqueInput!
  update: CupDataUserRemoveUpdateWithoutExplainIdDataInput!
  create: CupDataUserRemoveCreateWithoutExplainIdInput!
}

input CupDataUserRemoveUpsertWithWhereUniqueWithoutSerialNumberInput {
  where: CupDataUserRemoveWhereUniqueInput!
  update: CupDataUserRemoveUpdateWithoutSerialNumberDataInput!
  create: CupDataUserRemoveCreateWithoutSerialNumberInput!
}

input CupDataUserRemoveUpsertWithWhereUniqueWithoutUserIdInput {
  where: CupDataUserRemoveWhereUniqueInput!
  update: CupDataUserRemoveUpdateWithoutUserIdDataInput!
  create: CupDataUserRemoveCreateWithoutUserIdInput!
}

input CupDataUserRemoveWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [CupDataUserRemoveWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [CupDataUserRemoveWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [CupDataUserRemoveWhereInput!]
  id: Int
  """
  All values that are not equal to given value.
  """
  id_not: Int
  """
  All values that are contained in given list.
  """
  id_in: [Int!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [Int!]
  """
  All values less than the given value.
  """
  id_lt: Int
  """
  All values less than or equal the given value.
  """
  id_lte: Int
  """
  All values greater than the given value.
  """
  id_gt: Int
  """
  All values greater than or equal the given value.
  """
  id_gte: Int
  changeTime: DateTime
  """
  All values that are not equal to given value.
  """
  changeTime_not: DateTime
  """
  All values that are contained in given list.
  """
  changeTime_in: [DateTime!]
  """
  All values that are not contained in given list.
  """
  changeTime_not_in: [DateTime!]
  """
  All values less than the given value.
  """
  changeTime_lt: DateTime
  """
  All values less than or equal the given value.
  """
  changeTime_lte: DateTime
  """
  All values greater than the given value.
  """
  changeTime_gt: DateTime
  """
  All values greater than or equal the given value.
  """
  changeTime_gte: DateTime
  explainId: CupDataUserRemoveExplainWhereInput
  serialNumber: CupWhereInput
  userId: UserWhereInput
}

input CupDataUserRemoveWhereUniqueInput {
  id: Int
}

type CupDatum {
  id: Int!
  battery: Int!
  calibFlag: Boolean!
  ch1: Int!
  ch10: Int!
  ch11: Int!
  ch12: Int!
  ch13: Int!
  ch14: Int!
  ch2: Int!
  ch3: Int!
  ch4: Int!
  ch5: Int!
  ch6: Int!
  ch7: Int!
  ch8: Int!
  ch9: Int!
  colourB: Int!
  colourC: Int!
  colourG: Int!
  colourR: Int!
  cupDataColourCalc(where: CupDataColourCalcWhereInput, orderBy: CupDataColourCalcOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [CupDataColourCalc!]
  cupDataProcVolume(where: CupDataProcVolumeWhereInput, orderBy: CupDataProcVolumeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [CupDataProcVolume!]
  date: DateTime!
  day: Int!
  hour: Int!
  line: Int!
  minute: Int!
  month: Int!
  page: Int!
  rawTotalVolume: Int
  rawVolumeL: Int
  rawVolumeR: Int
  serialNumber: Cup
  temperature: Int!
  x: Int!
  y: Int!
  year: Int!
  z: Int!
}

"""
A connection to a list of items.
"""
type CupDatumConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [CupDatumEdge]!
  aggregate: AggregateCupDatum!
}

input CupDatumCreateInput {
  battery: Int!
  calibFlag: Boolean!
  ch1: Int!
  ch10: Int!
  ch11: Int!
  ch12: Int!
  ch13: Int!
  ch14: Int!
  ch2: Int!
  ch3: Int!
  ch4: Int!
  ch5: Int!
  ch6: Int!
  ch7: Int!
  ch8: Int!
  ch9: Int!
  colourB: Int!
  colourC: Int!
  colourG: Int!
  colourR: Int!
  date: DateTime!
  day: Int!
  hour: Int!
  line: Int!
  minute: Int!
  month: Int!
  page: Int!
  rawTotalVolume: Int
  rawVolumeL: Int
  rawVolumeR: Int
  temperature: Int!
  x: Int!
  y: Int!
  year: Int!
  z: Int!
  cupDataColourCalc: CupDataColourCalcCreateManyWithoutCupDataRowIdInput
  cupDataProcVolume: CupDataProcVolumeCreateManyWithoutCupDataRowIdInput
  serialNumber: CupCreateOneWithoutCupDataInput
}

input CupDatumCreateManyWithoutSerialNumberInput {
  create: [CupDatumCreateWithoutSerialNumberInput!]
  connect: [CupDatumWhereUniqueInput!]
}

input CupDatumCreateOneWithoutCupDataColourCalcInput {
  create: CupDatumCreateWithoutCupDataColourCalcInput
  connect: CupDatumWhereUniqueInput
}

input CupDatumCreateOneWithoutCupDataProcVolumeInput {
  create: CupDatumCreateWithoutCupDataProcVolumeInput
  connect: CupDatumWhereUniqueInput
}

input CupDatumCreateWithoutCupDataColourCalcInput {
  battery: Int!
  calibFlag: Boolean!
  ch1: Int!
  ch10: Int!
  ch11: Int!
  ch12: Int!
  ch13: Int!
  ch14: Int!
  ch2: Int!
  ch3: Int!
  ch4: Int!
  ch5: Int!
  ch6: Int!
  ch7: Int!
  ch8: Int!
  ch9: Int!
  colourB: Int!
  colourC: Int!
  colourG: Int!
  colourR: Int!
  date: DateTime!
  day: Int!
  hour: Int!
  line: Int!
  minute: Int!
  month: Int!
  page: Int!
  rawTotalVolume: Int
  rawVolumeL: Int
  rawVolumeR: Int
  temperature: Int!
  x: Int!
  y: Int!
  year: Int!
  z: Int!
  cupDataProcVolume: CupDataProcVolumeCreateManyWithoutCupDataRowIdInput
  serialNumber: CupCreateOneWithoutCupDataInput
}

input CupDatumCreateWithoutCupDataProcVolumeInput {
  battery: Int!
  calibFlag: Boolean!
  ch1: Int!
  ch10: Int!
  ch11: Int!
  ch12: Int!
  ch13: Int!
  ch14: Int!
  ch2: Int!
  ch3: Int!
  ch4: Int!
  ch5: Int!
  ch6: Int!
  ch7: Int!
  ch8: Int!
  ch9: Int!
  colourB: Int!
  colourC: Int!
  colourG: Int!
  colourR: Int!
  date: DateTime!
  day: Int!
  hour: Int!
  line: Int!
  minute: Int!
  month: Int!
  page: Int!
  rawTotalVolume: Int
  rawVolumeL: Int
  rawVolumeR: Int
  temperature: Int!
  x: Int!
  y: Int!
  year: Int!
  z: Int!
  cupDataColourCalc: CupDataColourCalcCreateManyWithoutCupDataRowIdInput
  serialNumber: CupCreateOneWithoutCupDataInput
}

input CupDatumCreateWithoutSerialNumberInput {
  battery: Int!
  calibFlag: Boolean!
  ch1: Int!
  ch10: Int!
  ch11: Int!
  ch12: Int!
  ch13: Int!
  ch14: Int!
  ch2: Int!
  ch3: Int!
  ch4: Int!
  ch5: Int!
  ch6: Int!
  ch7: Int!
  ch8: Int!
  ch9: Int!
  colourB: Int!
  colourC: Int!
  colourG: Int!
  colourR: Int!
  date: DateTime!
  day: Int!
  hour: Int!
  line: Int!
  minute: Int!
  month: Int!
  page: Int!
  rawTotalVolume: Int
  rawVolumeL: Int
  rawVolumeR: Int
  temperature: Int!
  x: Int!
  y: Int!
  year: Int!
  z: Int!
  cupDataColourCalc: CupDataColourCalcCreateManyWithoutCupDataRowIdInput
  cupDataProcVolume: CupDataProcVolumeCreateManyWithoutCupDataRowIdInput
}

"""
An edge in a connection.
"""
type CupDatumEdge {
  """
  The item at the end of the edge.
  """
  node: CupDatum!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum CupDatumOrderByInput {
  id_ASC
  id_DESC
  battery_ASC
  battery_DESC
  calibFlag_ASC
  calibFlag_DESC
  ch1_ASC
  ch1_DESC
  ch10_ASC
  ch10_DESC
  ch11_ASC
  ch11_DESC
  ch12_ASC
  ch12_DESC
  ch13_ASC
  ch13_DESC
  ch14_ASC
  ch14_DESC
  ch2_ASC
  ch2_DESC
  ch3_ASC
  ch3_DESC
  ch4_ASC
  ch4_DESC
  ch5_ASC
  ch5_DESC
  ch6_ASC
  ch6_DESC
  ch7_ASC
  ch7_DESC
  ch8_ASC
  ch8_DESC
  ch9_ASC
  ch9_DESC
  colourB_ASC
  colourB_DESC
  colourC_ASC
  colourC_DESC
  colourG_ASC
  colourG_DESC
  colourR_ASC
  colourR_DESC
  date_ASC
  date_DESC
  day_ASC
  day_DESC
  hour_ASC
  hour_DESC
  line_ASC
  line_DESC
  minute_ASC
  minute_DESC
  month_ASC
  month_DESC
  page_ASC
  page_DESC
  rawTotalVolume_ASC
  rawTotalVolume_DESC
  rawVolumeL_ASC
  rawVolumeL_DESC
  rawVolumeR_ASC
  rawVolumeR_DESC
  temperature_ASC
  temperature_DESC
  x_ASC
  x_DESC
  y_ASC
  y_DESC
  year_ASC
  year_DESC
  z_ASC
  z_DESC
}

type CupDatumPreviousValues {
  id: Int!
  battery: Int!
  calibFlag: Boolean!
  ch1: Int!
  ch10: Int!
  ch11: Int!
  ch12: Int!
  ch13: Int!
  ch14: Int!
  ch2: Int!
  ch3: Int!
  ch4: Int!
  ch5: Int!
  ch6: Int!
  ch7: Int!
  ch8: Int!
  ch9: Int!
  colourB: Int!
  colourC: Int!
  colourG: Int!
  colourR: Int!
  date: DateTime!
  day: Int!
  hour: Int!
  line: Int!
  minute: Int!
  month: Int!
  page: Int!
  rawTotalVolume: Int
  rawVolumeL: Int
  rawVolumeR: Int
  temperature: Int!
  x: Int!
  y: Int!
  year: Int!
  z: Int!
}

input CupDatumScalarWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [CupDatumScalarWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [CupDatumScalarWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [CupDatumScalarWhereInput!]
  id: Int
  """
  All values that are not equal to given value.
  """
  id_not: Int
  """
  All values that are contained in given list.
  """
  id_in: [Int!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [Int!]
  """
  All values less than the given value.
  """
  id_lt: Int
  """
  All values less than or equal the given value.
  """
  id_lte: Int
  """
  All values greater than the given value.
  """
  id_gt: Int
  """
  All values greater than or equal the given value.
  """
  id_gte: Int
  battery: Int
  """
  All values that are not equal to given value.
  """
  battery_not: Int
  """
  All values that are contained in given list.
  """
  battery_in: [Int!]
  """
  All values that are not contained in given list.
  """
  battery_not_in: [Int!]
  """
  All values less than the given value.
  """
  battery_lt: Int
  """
  All values less than or equal the given value.
  """
  battery_lte: Int
  """
  All values greater than the given value.
  """
  battery_gt: Int
  """
  All values greater than or equal the given value.
  """
  battery_gte: Int
  calibFlag: Boolean
  """
  All values that are not equal to given value.
  """
  calibFlag_not: Boolean
  ch1: Int
  """
  All values that are not equal to given value.
  """
  ch1_not: Int
  """
  All values that are contained in given list.
  """
  ch1_in: [Int!]
  """
  All values that are not contained in given list.
  """
  ch1_not_in: [Int!]
  """
  All values less than the given value.
  """
  ch1_lt: Int
  """
  All values less than or equal the given value.
  """
  ch1_lte: Int
  """
  All values greater than the given value.
  """
  ch1_gt: Int
  """
  All values greater than or equal the given value.
  """
  ch1_gte: Int
  ch10: Int
  """
  All values that are not equal to given value.
  """
  ch10_not: Int
  """
  All values that are contained in given list.
  """
  ch10_in: [Int!]
  """
  All values that are not contained in given list.
  """
  ch10_not_in: [Int!]
  """
  All values less than the given value.
  """
  ch10_lt: Int
  """
  All values less than or equal the given value.
  """
  ch10_lte: Int
  """
  All values greater than the given value.
  """
  ch10_gt: Int
  """
  All values greater than or equal the given value.
  """
  ch10_gte: Int
  ch11: Int
  """
  All values that are not equal to given value.
  """
  ch11_not: Int
  """
  All values that are contained in given list.
  """
  ch11_in: [Int!]
  """
  All values that are not contained in given list.
  """
  ch11_not_in: [Int!]
  """
  All values less than the given value.
  """
  ch11_lt: Int
  """
  All values less than or equal the given value.
  """
  ch11_lte: Int
  """
  All values greater than the given value.
  """
  ch11_gt: Int
  """
  All values greater than or equal the given value.
  """
  ch11_gte: Int
  ch12: Int
  """
  All values that are not equal to given value.
  """
  ch12_not: Int
  """
  All values that are contained in given list.
  """
  ch12_in: [Int!]
  """
  All values that are not contained in given list.
  """
  ch12_not_in: [Int!]
  """
  All values less than the given value.
  """
  ch12_lt: Int
  """
  All values less than or equal the given value.
  """
  ch12_lte: Int
  """
  All values greater than the given value.
  """
  ch12_gt: Int
  """
  All values greater than or equal the given value.
  """
  ch12_gte: Int
  ch13: Int
  """
  All values that are not equal to given value.
  """
  ch13_not: Int
  """
  All values that are contained in given list.
  """
  ch13_in: [Int!]
  """
  All values that are not contained in given list.
  """
  ch13_not_in: [Int!]
  """
  All values less than the given value.
  """
  ch13_lt: Int
  """
  All values less than or equal the given value.
  """
  ch13_lte: Int
  """
  All values greater than the given value.
  """
  ch13_gt: Int
  """
  All values greater than or equal the given value.
  """
  ch13_gte: Int
  ch14: Int
  """
  All values that are not equal to given value.
  """
  ch14_not: Int
  """
  All values that are contained in given list.
  """
  ch14_in: [Int!]
  """
  All values that are not contained in given list.
  """
  ch14_not_in: [Int!]
  """
  All values less than the given value.
  """
  ch14_lt: Int
  """
  All values less than or equal the given value.
  """
  ch14_lte: Int
  """
  All values greater than the given value.
  """
  ch14_gt: Int
  """
  All values greater than or equal the given value.
  """
  ch14_gte: Int
  ch2: Int
  """
  All values that are not equal to given value.
  """
  ch2_not: Int
  """
  All values that are contained in given list.
  """
  ch2_in: [Int!]
  """
  All values that are not contained in given list.
  """
  ch2_not_in: [Int!]
  """
  All values less than the given value.
  """
  ch2_lt: Int
  """
  All values less than or equal the given value.
  """
  ch2_lte: Int
  """
  All values greater than the given value.
  """
  ch2_gt: Int
  """
  All values greater than or equal the given value.
  """
  ch2_gte: Int
  ch3: Int
  """
  All values that are not equal to given value.
  """
  ch3_not: Int
  """
  All values that are contained in given list.
  """
  ch3_in: [Int!]
  """
  All values that are not contained in given list.
  """
  ch3_not_in: [Int!]
  """
  All values less than the given value.
  """
  ch3_lt: Int
  """
  All values less than or equal the given value.
  """
  ch3_lte: Int
  """
  All values greater than the given value.
  """
  ch3_gt: Int
  """
  All values greater than or equal the given value.
  """
  ch3_gte: Int
  ch4: Int
  """
  All values that are not equal to given value.
  """
  ch4_not: Int
  """
  All values that are contained in given list.
  """
  ch4_in: [Int!]
  """
  All values that are not contained in given list.
  """
  ch4_not_in: [Int!]
  """
  All values less than the given value.
  """
  ch4_lt: Int
  """
  All values less than or equal the given value.
  """
  ch4_lte: Int
  """
  All values greater than the given value.
  """
  ch4_gt: Int
  """
  All values greater than or equal the given value.
  """
  ch4_gte: Int
  ch5: Int
  """
  All values that are not equal to given value.
  """
  ch5_not: Int
  """
  All values that are contained in given list.
  """
  ch5_in: [Int!]
  """
  All values that are not contained in given list.
  """
  ch5_not_in: [Int!]
  """
  All values less than the given value.
  """
  ch5_lt: Int
  """
  All values less than or equal the given value.
  """
  ch5_lte: Int
  """
  All values greater than the given value.
  """
  ch5_gt: Int
  """
  All values greater than or equal the given value.
  """
  ch5_gte: Int
  ch6: Int
  """
  All values that are not equal to given value.
  """
  ch6_not: Int
  """
  All values that are contained in given list.
  """
  ch6_in: [Int!]
  """
  All values that are not contained in given list.
  """
  ch6_not_in: [Int!]
  """
  All values less than the given value.
  """
  ch6_lt: Int
  """
  All values less than or equal the given value.
  """
  ch6_lte: Int
  """
  All values greater than the given value.
  """
  ch6_gt: Int
  """
  All values greater than or equal the given value.
  """
  ch6_gte: Int
  ch7: Int
  """
  All values that are not equal to given value.
  """
  ch7_not: Int
  """
  All values that are contained in given list.
  """
  ch7_in: [Int!]
  """
  All values that are not contained in given list.
  """
  ch7_not_in: [Int!]
  """
  All values less than the given value.
  """
  ch7_lt: Int
  """
  All values less than or equal the given value.
  """
  ch7_lte: Int
  """
  All values greater than the given value.
  """
  ch7_gt: Int
  """
  All values greater than or equal the given value.
  """
  ch7_gte: Int
  ch8: Int
  """
  All values that are not equal to given value.
  """
  ch8_not: Int
  """
  All values that are contained in given list.
  """
  ch8_in: [Int!]
  """
  All values that are not contained in given list.
  """
  ch8_not_in: [Int!]
  """
  All values less than the given value.
  """
  ch8_lt: Int
  """
  All values less than or equal the given value.
  """
  ch8_lte: Int
  """
  All values greater than the given value.
  """
  ch8_gt: Int
  """
  All values greater than or equal the given value.
  """
  ch8_gte: Int
  ch9: Int
  """
  All values that are not equal to given value.
  """
  ch9_not: Int
  """
  All values that are contained in given list.
  """
  ch9_in: [Int!]
  """
  All values that are not contained in given list.
  """
  ch9_not_in: [Int!]
  """
  All values less than the given value.
  """
  ch9_lt: Int
  """
  All values less than or equal the given value.
  """
  ch9_lte: Int
  """
  All values greater than the given value.
  """
  ch9_gt: Int
  """
  All values greater than or equal the given value.
  """
  ch9_gte: Int
  colourB: Int
  """
  All values that are not equal to given value.
  """
  colourB_not: Int
  """
  All values that are contained in given list.
  """
  colourB_in: [Int!]
  """
  All values that are not contained in given list.
  """
  colourB_not_in: [Int!]
  """
  All values less than the given value.
  """
  colourB_lt: Int
  """
  All values less than or equal the given value.
  """
  colourB_lte: Int
  """
  All values greater than the given value.
  """
  colourB_gt: Int
  """
  All values greater than or equal the given value.
  """
  colourB_gte: Int
  colourC: Int
  """
  All values that are not equal to given value.
  """
  colourC_not: Int
  """
  All values that are contained in given list.
  """
  colourC_in: [Int!]
  """
  All values that are not contained in given list.
  """
  colourC_not_in: [Int!]
  """
  All values less than the given value.
  """
  colourC_lt: Int
  """
  All values less than or equal the given value.
  """
  colourC_lte: Int
  """
  All values greater than the given value.
  """
  colourC_gt: Int
  """
  All values greater than or equal the given value.
  """
  colourC_gte: Int
  colourG: Int
  """
  All values that are not equal to given value.
  """
  colourG_not: Int
  """
  All values that are contained in given list.
  """
  colourG_in: [Int!]
  """
  All values that are not contained in given list.
  """
  colourG_not_in: [Int!]
  """
  All values less than the given value.
  """
  colourG_lt: Int
  """
  All values less than or equal the given value.
  """
  colourG_lte: Int
  """
  All values greater than the given value.
  """
  colourG_gt: Int
  """
  All values greater than or equal the given value.
  """
  colourG_gte: Int
  colourR: Int
  """
  All values that are not equal to given value.
  """
  colourR_not: Int
  """
  All values that are contained in given list.
  """
  colourR_in: [Int!]
  """
  All values that are not contained in given list.
  """
  colourR_not_in: [Int!]
  """
  All values less than the given value.
  """
  colourR_lt: Int
  """
  All values less than or equal the given value.
  """
  colourR_lte: Int
  """
  All values greater than the given value.
  """
  colourR_gt: Int
  """
  All values greater than or equal the given value.
  """
  colourR_gte: Int
  date: DateTime
  """
  All values that are not equal to given value.
  """
  date_not: DateTime
  """
  All values that are contained in given list.
  """
  date_in: [DateTime!]
  """
  All values that are not contained in given list.
  """
  date_not_in: [DateTime!]
  """
  All values less than the given value.
  """
  date_lt: DateTime
  """
  All values less than or equal the given value.
  """
  date_lte: DateTime
  """
  All values greater than the given value.
  """
  date_gt: DateTime
  """
  All values greater than or equal the given value.
  """
  date_gte: DateTime
  day: Int
  """
  All values that are not equal to given value.
  """
  day_not: Int
  """
  All values that are contained in given list.
  """
  day_in: [Int!]
  """
  All values that are not contained in given list.
  """
  day_not_in: [Int!]
  """
  All values less than the given value.
  """
  day_lt: Int
  """
  All values less than or equal the given value.
  """
  day_lte: Int
  """
  All values greater than the given value.
  """
  day_gt: Int
  """
  All values greater than or equal the given value.
  """
  day_gte: Int
  hour: Int
  """
  All values that are not equal to given value.
  """
  hour_not: Int
  """
  All values that are contained in given list.
  """
  hour_in: [Int!]
  """
  All values that are not contained in given list.
  """
  hour_not_in: [Int!]
  """
  All values less than the given value.
  """
  hour_lt: Int
  """
  All values less than or equal the given value.
  """
  hour_lte: Int
  """
  All values greater than the given value.
  """
  hour_gt: Int
  """
  All values greater than or equal the given value.
  """
  hour_gte: Int
  line: Int
  """
  All values that are not equal to given value.
  """
  line_not: Int
  """
  All values that are contained in given list.
  """
  line_in: [Int!]
  """
  All values that are not contained in given list.
  """
  line_not_in: [Int!]
  """
  All values less than the given value.
  """
  line_lt: Int
  """
  All values less than or equal the given value.
  """
  line_lte: Int
  """
  All values greater than the given value.
  """
  line_gt: Int
  """
  All values greater than or equal the given value.
  """
  line_gte: Int
  minute: Int
  """
  All values that are not equal to given value.
  """
  minute_not: Int
  """
  All values that are contained in given list.
  """
  minute_in: [Int!]
  """
  All values that are not contained in given list.
  """
  minute_not_in: [Int!]
  """
  All values less than the given value.
  """
  minute_lt: Int
  """
  All values less than or equal the given value.
  """
  minute_lte: Int
  """
  All values greater than the given value.
  """
  minute_gt: Int
  """
  All values greater than or equal the given value.
  """
  minute_gte: Int
  month: Int
  """
  All values that are not equal to given value.
  """
  month_not: Int
  """
  All values that are contained in given list.
  """
  month_in: [Int!]
  """
  All values that are not contained in given list.
  """
  month_not_in: [Int!]
  """
  All values less than the given value.
  """
  month_lt: Int
  """
  All values less than or equal the given value.
  """
  month_lte: Int
  """
  All values greater than the given value.
  """
  month_gt: Int
  """
  All values greater than or equal the given value.
  """
  month_gte: Int
  page: Int
  """
  All values that are not equal to given value.
  """
  page_not: Int
  """
  All values that are contained in given list.
  """
  page_in: [Int!]
  """
  All values that are not contained in given list.
  """
  page_not_in: [Int!]
  """
  All values less than the given value.
  """
  page_lt: Int
  """
  All values less than or equal the given value.
  """
  page_lte: Int
  """
  All values greater than the given value.
  """
  page_gt: Int
  """
  All values greater than or equal the given value.
  """
  page_gte: Int
  rawTotalVolume: Int
  """
  All values that are not equal to given value.
  """
  rawTotalVolume_not: Int
  """
  All values that are contained in given list.
  """
  rawTotalVolume_in: [Int!]
  """
  All values that are not contained in given list.
  """
  rawTotalVolume_not_in: [Int!]
  """
  All values less than the given value.
  """
  rawTotalVolume_lt: Int
  """
  All values less than or equal the given value.
  """
  rawTotalVolume_lte: Int
  """
  All values greater than the given value.
  """
  rawTotalVolume_gt: Int
  """
  All values greater than or equal the given value.
  """
  rawTotalVolume_gte: Int
  rawVolumeL: Int
  """
  All values that are not equal to given value.
  """
  rawVolumeL_not: Int
  """
  All values that are contained in given list.
  """
  rawVolumeL_in: [Int!]
  """
  All values that are not contained in given list.
  """
  rawVolumeL_not_in: [Int!]
  """
  All values less than the given value.
  """
  rawVolumeL_lt: Int
  """
  All values less than or equal the given value.
  """
  rawVolumeL_lte: Int
  """
  All values greater than the given value.
  """
  rawVolumeL_gt: Int
  """
  All values greater than or equal the given value.
  """
  rawVolumeL_gte: Int
  rawVolumeR: Int
  """
  All values that are not equal to given value.
  """
  rawVolumeR_not: Int
  """
  All values that are contained in given list.
  """
  rawVolumeR_in: [Int!]
  """
  All values that are not contained in given list.
  """
  rawVolumeR_not_in: [Int!]
  """
  All values less than the given value.
  """
  rawVolumeR_lt: Int
  """
  All values less than or equal the given value.
  """
  rawVolumeR_lte: Int
  """
  All values greater than the given value.
  """
  rawVolumeR_gt: Int
  """
  All values greater than or equal the given value.
  """
  rawVolumeR_gte: Int
  temperature: Int
  """
  All values that are not equal to given value.
  """
  temperature_not: Int
  """
  All values that are contained in given list.
  """
  temperature_in: [Int!]
  """
  All values that are not contained in given list.
  """
  temperature_not_in: [Int!]
  """
  All values less than the given value.
  """
  temperature_lt: Int
  """
  All values less than or equal the given value.
  """
  temperature_lte: Int
  """
  All values greater than the given value.
  """
  temperature_gt: Int
  """
  All values greater than or equal the given value.
  """
  temperature_gte: Int
  x: Int
  """
  All values that are not equal to given value.
  """
  x_not: Int
  """
  All values that are contained in given list.
  """
  x_in: [Int!]
  """
  All values that are not contained in given list.
  """
  x_not_in: [Int!]
  """
  All values less than the given value.
  """
  x_lt: Int
  """
  All values less than or equal the given value.
  """
  x_lte: Int
  """
  All values greater than the given value.
  """
  x_gt: Int
  """
  All values greater than or equal the given value.
  """
  x_gte: Int
  y: Int
  """
  All values that are not equal to given value.
  """
  y_not: Int
  """
  All values that are contained in given list.
  """
  y_in: [Int!]
  """
  All values that are not contained in given list.
  """
  y_not_in: [Int!]
  """
  All values less than the given value.
  """
  y_lt: Int
  """
  All values less than or equal the given value.
  """
  y_lte: Int
  """
  All values greater than the given value.
  """
  y_gt: Int
  """
  All values greater than or equal the given value.
  """
  y_gte: Int
  year: Int
  """
  All values that are not equal to given value.
  """
  year_not: Int
  """
  All values that are contained in given list.
  """
  year_in: [Int!]
  """
  All values that are not contained in given list.
  """
  year_not_in: [Int!]
  """
  All values less than the given value.
  """
  year_lt: Int
  """
  All values less than or equal the given value.
  """
  year_lte: Int
  """
  All values greater than the given value.
  """
  year_gt: Int
  """
  All values greater than or equal the given value.
  """
  year_gte: Int
  z: Int
  """
  All values that are not equal to given value.
  """
  z_not: Int
  """
  All values that are contained in given list.
  """
  z_in: [Int!]
  """
  All values that are not contained in given list.
  """
  z_not_in: [Int!]
  """
  All values less than the given value.
  """
  z_lt: Int
  """
  All values less than or equal the given value.
  """
  z_lte: Int
  """
  All values greater than the given value.
  """
  z_gt: Int
  """
  All values greater than or equal the given value.
  """
  z_gte: Int
}

type CupDatumSubscriptionPayload {
  mutation: MutationType!
  node: CupDatum
  updatedFields: [String!]
  previousValues: CupDatumPreviousValues
}

input CupDatumSubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [CupDatumSubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [CupDatumSubscriptionWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [CupDatumSubscriptionWhereInput!]
  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]
  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String
  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]
  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: CupDatumWhereInput
}

input CupDatumUpdateInput {
  battery: Int
  calibFlag: Boolean
  ch1: Int
  ch10: Int
  ch11: Int
  ch12: Int
  ch13: Int
  ch14: Int
  ch2: Int
  ch3: Int
  ch4: Int
  ch5: Int
  ch6: Int
  ch7: Int
  ch8: Int
  ch9: Int
  colourB: Int
  colourC: Int
  colourG: Int
  colourR: Int
  date: DateTime
  day: Int
  hour: Int
  line: Int
  minute: Int
  month: Int
  page: Int
  rawTotalVolume: Int
  rawVolumeL: Int
  rawVolumeR: Int
  temperature: Int
  x: Int
  y: Int
  year: Int
  z: Int
  cupDataColourCalc: CupDataColourCalcUpdateManyWithoutCupDataRowIdInput
  cupDataProcVolume: CupDataProcVolumeUpdateManyWithoutCupDataRowIdInput
  serialNumber: CupUpdateOneWithoutCupDataInput
}

input CupDatumUpdateManyDataInput {
  battery: Int
  calibFlag: Boolean
  ch1: Int
  ch10: Int
  ch11: Int
  ch12: Int
  ch13: Int
  ch14: Int
  ch2: Int
  ch3: Int
  ch4: Int
  ch5: Int
  ch6: Int
  ch7: Int
  ch8: Int
  ch9: Int
  colourB: Int
  colourC: Int
  colourG: Int
  colourR: Int
  date: DateTime
  day: Int
  hour: Int
  line: Int
  minute: Int
  month: Int
  page: Int
  rawTotalVolume: Int
  rawVolumeL: Int
  rawVolumeR: Int
  temperature: Int
  x: Int
  y: Int
  year: Int
  z: Int
}

input CupDatumUpdateManyMutationInput {
  battery: Int
  calibFlag: Boolean
  ch1: Int
  ch10: Int
  ch11: Int
  ch12: Int
  ch13: Int
  ch14: Int
  ch2: Int
  ch3: Int
  ch4: Int
  ch5: Int
  ch6: Int
  ch7: Int
  ch8: Int
  ch9: Int
  colourB: Int
  colourC: Int
  colourG: Int
  colourR: Int
  date: DateTime
  day: Int
  hour: Int
  line: Int
  minute: Int
  month: Int
  page: Int
  rawTotalVolume: Int
  rawVolumeL: Int
  rawVolumeR: Int
  temperature: Int
  x: Int
  y: Int
  year: Int
  z: Int
}

input CupDatumUpdateManyWithoutSerialNumberInput {
  create: [CupDatumCreateWithoutSerialNumberInput!]
  connect: [CupDatumWhereUniqueInput!]
  set: [CupDatumWhereUniqueInput!]
  disconnect: [CupDatumWhereUniqueInput!]
  delete: [CupDatumWhereUniqueInput!]
  update: [CupDatumUpdateWithWhereUniqueWithoutSerialNumberInput!]
  updateMany: [CupDatumUpdateManyWithWhereNestedInput!]
  deleteMany: [CupDatumScalarWhereInput!]
  upsert: [CupDatumUpsertWithWhereUniqueWithoutSerialNumberInput!]
}

input CupDatumUpdateManyWithWhereNestedInput {
  where: CupDatumScalarWhereInput!
  data: CupDatumUpdateManyDataInput!
}

input CupDatumUpdateOneRequiredWithoutCupDataColourCalcInput {
  create: CupDatumCreateWithoutCupDataColourCalcInput
  connect: CupDatumWhereUniqueInput
  update: CupDatumUpdateWithoutCupDataColourCalcDataInput
  upsert: CupDatumUpsertWithoutCupDataColourCalcInput
}

input CupDatumUpdateOneRequiredWithoutCupDataProcVolumeInput {
  create: CupDatumCreateWithoutCupDataProcVolumeInput
  connect: CupDatumWhereUniqueInput
  update: CupDatumUpdateWithoutCupDataProcVolumeDataInput
  upsert: CupDatumUpsertWithoutCupDataProcVolumeInput
}

input CupDatumUpdateWithoutCupDataColourCalcDataInput {
  battery: Int
  calibFlag: Boolean
  ch1: Int
  ch10: Int
  ch11: Int
  ch12: Int
  ch13: Int
  ch14: Int
  ch2: Int
  ch3: Int
  ch4: Int
  ch5: Int
  ch6: Int
  ch7: Int
  ch8: Int
  ch9: Int
  colourB: Int
  colourC: Int
  colourG: Int
  colourR: Int
  date: DateTime
  day: Int
  hour: Int
  line: Int
  minute: Int
  month: Int
  page: Int
  rawTotalVolume: Int
  rawVolumeL: Int
  rawVolumeR: Int
  temperature: Int
  x: Int
  y: Int
  year: Int
  z: Int
  cupDataProcVolume: CupDataProcVolumeUpdateManyWithoutCupDataRowIdInput
  serialNumber: CupUpdateOneWithoutCupDataInput
}

input CupDatumUpdateWithoutCupDataProcVolumeDataInput {
  battery: Int
  calibFlag: Boolean
  ch1: Int
  ch10: Int
  ch11: Int
  ch12: Int
  ch13: Int
  ch14: Int
  ch2: Int
  ch3: Int
  ch4: Int
  ch5: Int
  ch6: Int
  ch7: Int
  ch8: Int
  ch9: Int
  colourB: Int
  colourC: Int
  colourG: Int
  colourR: Int
  date: DateTime
  day: Int
  hour: Int
  line: Int
  minute: Int
  month: Int
  page: Int
  rawTotalVolume: Int
  rawVolumeL: Int
  rawVolumeR: Int
  temperature: Int
  x: Int
  y: Int
  year: Int
  z: Int
  cupDataColourCalc: CupDataColourCalcUpdateManyWithoutCupDataRowIdInput
  serialNumber: CupUpdateOneWithoutCupDataInput
}

input CupDatumUpdateWithoutSerialNumberDataInput {
  battery: Int
  calibFlag: Boolean
  ch1: Int
  ch10: Int
  ch11: Int
  ch12: Int
  ch13: Int
  ch14: Int
  ch2: Int
  ch3: Int
  ch4: Int
  ch5: Int
  ch6: Int
  ch7: Int
  ch8: Int
  ch9: Int
  colourB: Int
  colourC: Int
  colourG: Int
  colourR: Int
  date: DateTime
  day: Int
  hour: Int
  line: Int
  minute: Int
  month: Int
  page: Int
  rawTotalVolume: Int
  rawVolumeL: Int
  rawVolumeR: Int
  temperature: Int
  x: Int
  y: Int
  year: Int
  z: Int
  cupDataColourCalc: CupDataColourCalcUpdateManyWithoutCupDataRowIdInput
  cupDataProcVolume: CupDataProcVolumeUpdateManyWithoutCupDataRowIdInput
}

input CupDatumUpdateWithWhereUniqueWithoutSerialNumberInput {
  where: CupDatumWhereUniqueInput!
  data: CupDatumUpdateWithoutSerialNumberDataInput!
}

input CupDatumUpsertWithoutCupDataColourCalcInput {
  update: CupDatumUpdateWithoutCupDataColourCalcDataInput!
  create: CupDatumCreateWithoutCupDataColourCalcInput!
}

input CupDatumUpsertWithoutCupDataProcVolumeInput {
  update: CupDatumUpdateWithoutCupDataProcVolumeDataInput!
  create: CupDatumCreateWithoutCupDataProcVolumeInput!
}

input CupDatumUpsertWithWhereUniqueWithoutSerialNumberInput {
  where: CupDatumWhereUniqueInput!
  update: CupDatumUpdateWithoutSerialNumberDataInput!
  create: CupDatumCreateWithoutSerialNumberInput!
}

input CupDatumWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [CupDatumWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [CupDatumWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [CupDatumWhereInput!]
  id: Int
  """
  All values that are not equal to given value.
  """
  id_not: Int
  """
  All values that are contained in given list.
  """
  id_in: [Int!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [Int!]
  """
  All values less than the given value.
  """
  id_lt: Int
  """
  All values less than or equal the given value.
  """
  id_lte: Int
  """
  All values greater than the given value.
  """
  id_gt: Int
  """
  All values greater than or equal the given value.
  """
  id_gte: Int
  battery: Int
  """
  All values that are not equal to given value.
  """
  battery_not: Int
  """
  All values that are contained in given list.
  """
  battery_in: [Int!]
  """
  All values that are not contained in given list.
  """
  battery_not_in: [Int!]
  """
  All values less than the given value.
  """
  battery_lt: Int
  """
  All values less than or equal the given value.
  """
  battery_lte: Int
  """
  All values greater than the given value.
  """
  battery_gt: Int
  """
  All values greater than or equal the given value.
  """
  battery_gte: Int
  calibFlag: Boolean
  """
  All values that are not equal to given value.
  """
  calibFlag_not: Boolean
  ch1: Int
  """
  All values that are not equal to given value.
  """
  ch1_not: Int
  """
  All values that are contained in given list.
  """
  ch1_in: [Int!]
  """
  All values that are not contained in given list.
  """
  ch1_not_in: [Int!]
  """
  All values less than the given value.
  """
  ch1_lt: Int
  """
  All values less than or equal the given value.
  """
  ch1_lte: Int
  """
  All values greater than the given value.
  """
  ch1_gt: Int
  """
  All values greater than or equal the given value.
  """
  ch1_gte: Int
  ch10: Int
  """
  All values that are not equal to given value.
  """
  ch10_not: Int
  """
  All values that are contained in given list.
  """
  ch10_in: [Int!]
  """
  All values that are not contained in given list.
  """
  ch10_not_in: [Int!]
  """
  All values less than the given value.
  """
  ch10_lt: Int
  """
  All values less than or equal the given value.
  """
  ch10_lte: Int
  """
  All values greater than the given value.
  """
  ch10_gt: Int
  """
  All values greater than or equal the given value.
  """
  ch10_gte: Int
  ch11: Int
  """
  All values that are not equal to given value.
  """
  ch11_not: Int
  """
  All values that are contained in given list.
  """
  ch11_in: [Int!]
  """
  All values that are not contained in given list.
  """
  ch11_not_in: [Int!]
  """
  All values less than the given value.
  """
  ch11_lt: Int
  """
  All values less than or equal the given value.
  """
  ch11_lte: Int
  """
  All values greater than the given value.
  """
  ch11_gt: Int
  """
  All values greater than or equal the given value.
  """
  ch11_gte: Int
  ch12: Int
  """
  All values that are not equal to given value.
  """
  ch12_not: Int
  """
  All values that are contained in given list.
  """
  ch12_in: [Int!]
  """
  All values that are not contained in given list.
  """
  ch12_not_in: [Int!]
  """
  All values less than the given value.
  """
  ch12_lt: Int
  """
  All values less than or equal the given value.
  """
  ch12_lte: Int
  """
  All values greater than the given value.
  """
  ch12_gt: Int
  """
  All values greater than or equal the given value.
  """
  ch12_gte: Int
  ch13: Int
  """
  All values that are not equal to given value.
  """
  ch13_not: Int
  """
  All values that are contained in given list.
  """
  ch13_in: [Int!]
  """
  All values that are not contained in given list.
  """
  ch13_not_in: [Int!]
  """
  All values less than the given value.
  """
  ch13_lt: Int
  """
  All values less than or equal the given value.
  """
  ch13_lte: Int
  """
  All values greater than the given value.
  """
  ch13_gt: Int
  """
  All values greater than or equal the given value.
  """
  ch13_gte: Int
  ch14: Int
  """
  All values that are not equal to given value.
  """
  ch14_not: Int
  """
  All values that are contained in given list.
  """
  ch14_in: [Int!]
  """
  All values that are not contained in given list.
  """
  ch14_not_in: [Int!]
  """
  All values less than the given value.
  """
  ch14_lt: Int
  """
  All values less than or equal the given value.
  """
  ch14_lte: Int
  """
  All values greater than the given value.
  """
  ch14_gt: Int
  """
  All values greater than or equal the given value.
  """
  ch14_gte: Int
  ch2: Int
  """
  All values that are not equal to given value.
  """
  ch2_not: Int
  """
  All values that are contained in given list.
  """
  ch2_in: [Int!]
  """
  All values that are not contained in given list.
  """
  ch2_not_in: [Int!]
  """
  All values less than the given value.
  """
  ch2_lt: Int
  """
  All values less than or equal the given value.
  """
  ch2_lte: Int
  """
  All values greater than the given value.
  """
  ch2_gt: Int
  """
  All values greater than or equal the given value.
  """
  ch2_gte: Int
  ch3: Int
  """
  All values that are not equal to given value.
  """
  ch3_not: Int
  """
  All values that are contained in given list.
  """
  ch3_in: [Int!]
  """
  All values that are not contained in given list.
  """
  ch3_not_in: [Int!]
  """
  All values less than the given value.
  """
  ch3_lt: Int
  """
  All values less than or equal the given value.
  """
  ch3_lte: Int
  """
  All values greater than the given value.
  """
  ch3_gt: Int
  """
  All values greater than or equal the given value.
  """
  ch3_gte: Int
  ch4: Int
  """
  All values that are not equal to given value.
  """
  ch4_not: Int
  """
  All values that are contained in given list.
  """
  ch4_in: [Int!]
  """
  All values that are not contained in given list.
  """
  ch4_not_in: [Int!]
  """
  All values less than the given value.
  """
  ch4_lt: Int
  """
  All values less than or equal the given value.
  """
  ch4_lte: Int
  """
  All values greater than the given value.
  """
  ch4_gt: Int
  """
  All values greater than or equal the given value.
  """
  ch4_gte: Int
  ch5: Int
  """
  All values that are not equal to given value.
  """
  ch5_not: Int
  """
  All values that are contained in given list.
  """
  ch5_in: [Int!]
  """
  All values that are not contained in given list.
  """
  ch5_not_in: [Int!]
  """
  All values less than the given value.
  """
  ch5_lt: Int
  """
  All values less than or equal the given value.
  """
  ch5_lte: Int
  """
  All values greater than the given value.
  """
  ch5_gt: Int
  """
  All values greater than or equal the given value.
  """
  ch5_gte: Int
  ch6: Int
  """
  All values that are not equal to given value.
  """
  ch6_not: Int
  """
  All values that are contained in given list.
  """
  ch6_in: [Int!]
  """
  All values that are not contained in given list.
  """
  ch6_not_in: [Int!]
  """
  All values less than the given value.
  """
  ch6_lt: Int
  """
  All values less than or equal the given value.
  """
  ch6_lte: Int
  """
  All values greater than the given value.
  """
  ch6_gt: Int
  """
  All values greater than or equal the given value.
  """
  ch6_gte: Int
  ch7: Int
  """
  All values that are not equal to given value.
  """
  ch7_not: Int
  """
  All values that are contained in given list.
  """
  ch7_in: [Int!]
  """
  All values that are not contained in given list.
  """
  ch7_not_in: [Int!]
  """
  All values less than the given value.
  """
  ch7_lt: Int
  """
  All values less than or equal the given value.
  """
  ch7_lte: Int
  """
  All values greater than the given value.
  """
  ch7_gt: Int
  """
  All values greater than or equal the given value.
  """
  ch7_gte: Int
  ch8: Int
  """
  All values that are not equal to given value.
  """
  ch8_not: Int
  """
  All values that are contained in given list.
  """
  ch8_in: [Int!]
  """
  All values that are not contained in given list.
  """
  ch8_not_in: [Int!]
  """
  All values less than the given value.
  """
  ch8_lt: Int
  """
  All values less than or equal the given value.
  """
  ch8_lte: Int
  """
  All values greater than the given value.
  """
  ch8_gt: Int
  """
  All values greater than or equal the given value.
  """
  ch8_gte: Int
  ch9: Int
  """
  All values that are not equal to given value.
  """
  ch9_not: Int
  """
  All values that are contained in given list.
  """
  ch9_in: [Int!]
  """
  All values that are not contained in given list.
  """
  ch9_not_in: [Int!]
  """
  All values less than the given value.
  """
  ch9_lt: Int
  """
  All values less than or equal the given value.
  """
  ch9_lte: Int
  """
  All values greater than the given value.
  """
  ch9_gt: Int
  """
  All values greater than or equal the given value.
  """
  ch9_gte: Int
  colourB: Int
  """
  All values that are not equal to given value.
  """
  colourB_not: Int
  """
  All values that are contained in given list.
  """
  colourB_in: [Int!]
  """
  All values that are not contained in given list.
  """
  colourB_not_in: [Int!]
  """
  All values less than the given value.
  """
  colourB_lt: Int
  """
  All values less than or equal the given value.
  """
  colourB_lte: Int
  """
  All values greater than the given value.
  """
  colourB_gt: Int
  """
  All values greater than or equal the given value.
  """
  colourB_gte: Int
  colourC: Int
  """
  All values that are not equal to given value.
  """
  colourC_not: Int
  """
  All values that are contained in given list.
  """
  colourC_in: [Int!]
  """
  All values that are not contained in given list.
  """
  colourC_not_in: [Int!]
  """
  All values less than the given value.
  """
  colourC_lt: Int
  """
  All values less than or equal the given value.
  """
  colourC_lte: Int
  """
  All values greater than the given value.
  """
  colourC_gt: Int
  """
  All values greater than or equal the given value.
  """
  colourC_gte: Int
  colourG: Int
  """
  All values that are not equal to given value.
  """
  colourG_not: Int
  """
  All values that are contained in given list.
  """
  colourG_in: [Int!]
  """
  All values that are not contained in given list.
  """
  colourG_not_in: [Int!]
  """
  All values less than the given value.
  """
  colourG_lt: Int
  """
  All values less than or equal the given value.
  """
  colourG_lte: Int
  """
  All values greater than the given value.
  """
  colourG_gt: Int
  """
  All values greater than or equal the given value.
  """
  colourG_gte: Int
  colourR: Int
  """
  All values that are not equal to given value.
  """
  colourR_not: Int
  """
  All values that are contained in given list.
  """
  colourR_in: [Int!]
  """
  All values that are not contained in given list.
  """
  colourR_not_in: [Int!]
  """
  All values less than the given value.
  """
  colourR_lt: Int
  """
  All values less than or equal the given value.
  """
  colourR_lte: Int
  """
  All values greater than the given value.
  """
  colourR_gt: Int
  """
  All values greater than or equal the given value.
  """
  colourR_gte: Int
  date: DateTime
  """
  All values that are not equal to given value.
  """
  date_not: DateTime
  """
  All values that are contained in given list.
  """
  date_in: [DateTime!]
  """
  All values that are not contained in given list.
  """
  date_not_in: [DateTime!]
  """
  All values less than the given value.
  """
  date_lt: DateTime
  """
  All values less than or equal the given value.
  """
  date_lte: DateTime
  """
  All values greater than the given value.
  """
  date_gt: DateTime
  """
  All values greater than or equal the given value.
  """
  date_gte: DateTime
  day: Int
  """
  All values that are not equal to given value.
  """
  day_not: Int
  """
  All values that are contained in given list.
  """
  day_in: [Int!]
  """
  All values that are not contained in given list.
  """
  day_not_in: [Int!]
  """
  All values less than the given value.
  """
  day_lt: Int
  """
  All values less than or equal the given value.
  """
  day_lte: Int
  """
  All values greater than the given value.
  """
  day_gt: Int
  """
  All values greater than or equal the given value.
  """
  day_gte: Int
  hour: Int
  """
  All values that are not equal to given value.
  """
  hour_not: Int
  """
  All values that are contained in given list.
  """
  hour_in: [Int!]
  """
  All values that are not contained in given list.
  """
  hour_not_in: [Int!]
  """
  All values less than the given value.
  """
  hour_lt: Int
  """
  All values less than or equal the given value.
  """
  hour_lte: Int
  """
  All values greater than the given value.
  """
  hour_gt: Int
  """
  All values greater than or equal the given value.
  """
  hour_gte: Int
  line: Int
  """
  All values that are not equal to given value.
  """
  line_not: Int
  """
  All values that are contained in given list.
  """
  line_in: [Int!]
  """
  All values that are not contained in given list.
  """
  line_not_in: [Int!]
  """
  All values less than the given value.
  """
  line_lt: Int
  """
  All values less than or equal the given value.
  """
  line_lte: Int
  """
  All values greater than the given value.
  """
  line_gt: Int
  """
  All values greater than or equal the given value.
  """
  line_gte: Int
  minute: Int
  """
  All values that are not equal to given value.
  """
  minute_not: Int
  """
  All values that are contained in given list.
  """
  minute_in: [Int!]
  """
  All values that are not contained in given list.
  """
  minute_not_in: [Int!]
  """
  All values less than the given value.
  """
  minute_lt: Int
  """
  All values less than or equal the given value.
  """
  minute_lte: Int
  """
  All values greater than the given value.
  """
  minute_gt: Int
  """
  All values greater than or equal the given value.
  """
  minute_gte: Int
  month: Int
  """
  All values that are not equal to given value.
  """
  month_not: Int
  """
  All values that are contained in given list.
  """
  month_in: [Int!]
  """
  All values that are not contained in given list.
  """
  month_not_in: [Int!]
  """
  All values less than the given value.
  """
  month_lt: Int
  """
  All values less than or equal the given value.
  """
  month_lte: Int
  """
  All values greater than the given value.
  """
  month_gt: Int
  """
  All values greater than or equal the given value.
  """
  month_gte: Int
  page: Int
  """
  All values that are not equal to given value.
  """
  page_not: Int
  """
  All values that are contained in given list.
  """
  page_in: [Int!]
  """
  All values that are not contained in given list.
  """
  page_not_in: [Int!]
  """
  All values less than the given value.
  """
  page_lt: Int
  """
  All values less than or equal the given value.
  """
  page_lte: Int
  """
  All values greater than the given value.
  """
  page_gt: Int
  """
  All values greater than or equal the given value.
  """
  page_gte: Int
  rawTotalVolume: Int
  """
  All values that are not equal to given value.
  """
  rawTotalVolume_not: Int
  """
  All values that are contained in given list.
  """
  rawTotalVolume_in: [Int!]
  """
  All values that are not contained in given list.
  """
  rawTotalVolume_not_in: [Int!]
  """
  All values less than the given value.
  """
  rawTotalVolume_lt: Int
  """
  All values less than or equal the given value.
  """
  rawTotalVolume_lte: Int
  """
  All values greater than the given value.
  """
  rawTotalVolume_gt: Int
  """
  All values greater than or equal the given value.
  """
  rawTotalVolume_gte: Int
  rawVolumeL: Int
  """
  All values that are not equal to given value.
  """
  rawVolumeL_not: Int
  """
  All values that are contained in given list.
  """
  rawVolumeL_in: [Int!]
  """
  All values that are not contained in given list.
  """
  rawVolumeL_not_in: [Int!]
  """
  All values less than the given value.
  """
  rawVolumeL_lt: Int
  """
  All values less than or equal the given value.
  """
  rawVolumeL_lte: Int
  """
  All values greater than the given value.
  """
  rawVolumeL_gt: Int
  """
  All values greater than or equal the given value.
  """
  rawVolumeL_gte: Int
  rawVolumeR: Int
  """
  All values that are not equal to given value.
  """
  rawVolumeR_not: Int
  """
  All values that are contained in given list.
  """
  rawVolumeR_in: [Int!]
  """
  All values that are not contained in given list.
  """
  rawVolumeR_not_in: [Int!]
  """
  All values less than the given value.
  """
  rawVolumeR_lt: Int
  """
  All values less than or equal the given value.
  """
  rawVolumeR_lte: Int
  """
  All values greater than the given value.
  """
  rawVolumeR_gt: Int
  """
  All values greater than or equal the given value.
  """
  rawVolumeR_gte: Int
  temperature: Int
  """
  All values that are not equal to given value.
  """
  temperature_not: Int
  """
  All values that are contained in given list.
  """
  temperature_in: [Int!]
  """
  All values that are not contained in given list.
  """
  temperature_not_in: [Int!]
  """
  All values less than the given value.
  """
  temperature_lt: Int
  """
  All values less than or equal the given value.
  """
  temperature_lte: Int
  """
  All values greater than the given value.
  """
  temperature_gt: Int
  """
  All values greater than or equal the given value.
  """
  temperature_gte: Int
  x: Int
  """
  All values that are not equal to given value.
  """
  x_not: Int
  """
  All values that are contained in given list.
  """
  x_in: [Int!]
  """
  All values that are not contained in given list.
  """
  x_not_in: [Int!]
  """
  All values less than the given value.
  """
  x_lt: Int
  """
  All values less than or equal the given value.
  """
  x_lte: Int
  """
  All values greater than the given value.
  """
  x_gt: Int
  """
  All values greater than or equal the given value.
  """
  x_gte: Int
  y: Int
  """
  All values that are not equal to given value.
  """
  y_not: Int
  """
  All values that are contained in given list.
  """
  y_in: [Int!]
  """
  All values that are not contained in given list.
  """
  y_not_in: [Int!]
  """
  All values less than the given value.
  """
  y_lt: Int
  """
  All values less than or equal the given value.
  """
  y_lte: Int
  """
  All values greater than the given value.
  """
  y_gt: Int
  """
  All values greater than or equal the given value.
  """
  y_gte: Int
  year: Int
  """
  All values that are not equal to given value.
  """
  year_not: Int
  """
  All values that are contained in given list.
  """
  year_in: [Int!]
  """
  All values that are not contained in given list.
  """
  year_not_in: [Int!]
  """
  All values less than the given value.
  """
  year_lt: Int
  """
  All values less than or equal the given value.
  """
  year_lte: Int
  """
  All values greater than the given value.
  """
  year_gt: Int
  """
  All values greater than or equal the given value.
  """
  year_gte: Int
  z: Int
  """
  All values that are not equal to given value.
  """
  z_not: Int
  """
  All values that are contained in given list.
  """
  z_in: [Int!]
  """
  All values that are not contained in given list.
  """
  z_not_in: [Int!]
  """
  All values less than the given value.
  """
  z_lt: Int
  """
  All values less than or equal the given value.
  """
  z_lte: Int
  """
  All values greater than the given value.
  """
  z_gt: Int
  """
  All values greater than or equal the given value.
  """
  z_gte: Int
  cupDataColourCalc_every: CupDataColourCalcWhereInput
  cupDataColourCalc_some: CupDataColourCalcWhereInput
  cupDataColourCalc_none: CupDataColourCalcWhereInput
  cupDataProcVolume_every: CupDataProcVolumeWhereInput
  cupDataProcVolume_some: CupDataProcVolumeWhereInput
  cupDataProcVolume_none: CupDataProcVolumeWhereInput
  serialNumber: CupWhereInput
}

input CupDatumWhereUniqueInput {
  id: Int
}

"""
An edge in a connection.
"""
type CupEdge {
  """
  The item at the end of the edge.
  """
  node: Cup!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum CupOrderByInput {
  id_ASC
  id_DESC
  anonSerialNumber_ASC
  anonSerialNumber_DESC
  encryptionKey_ASC
  encryptionKey_DESC
}

type CupPreviousValues {
  id: Int!
  anonSerialNumber: Int!
  encryptionKey: Int!
}

input CupScalarWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [CupScalarWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [CupScalarWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [CupScalarWhereInput!]
  id: Int
  """
  All values that are not equal to given value.
  """
  id_not: Int
  """
  All values that are contained in given list.
  """
  id_in: [Int!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [Int!]
  """
  All values less than the given value.
  """
  id_lt: Int
  """
  All values less than or equal the given value.
  """
  id_lte: Int
  """
  All values greater than the given value.
  """
  id_gt: Int
  """
  All values greater than or equal the given value.
  """
  id_gte: Int
  anonSerialNumber: Int
  """
  All values that are not equal to given value.
  """
  anonSerialNumber_not: Int
  """
  All values that are contained in given list.
  """
  anonSerialNumber_in: [Int!]
  """
  All values that are not contained in given list.
  """
  anonSerialNumber_not_in: [Int!]
  """
  All values less than the given value.
  """
  anonSerialNumber_lt: Int
  """
  All values less than or equal the given value.
  """
  anonSerialNumber_lte: Int
  """
  All values greater than the given value.
  """
  anonSerialNumber_gt: Int
  """
  All values greater than or equal the given value.
  """
  anonSerialNumber_gte: Int
  encryptionKey: Int
  """
  All values that are not equal to given value.
  """
  encryptionKey_not: Int
  """
  All values that are contained in given list.
  """
  encryptionKey_in: [Int!]
  """
  All values that are not contained in given list.
  """
  encryptionKey_not_in: [Int!]
  """
  All values less than the given value.
  """
  encryptionKey_lt: Int
  """
  All values less than or equal the given value.
  """
  encryptionKey_lte: Int
  """
  All values greater than the given value.
  """
  encryptionKey_gt: Int
  """
  All values greater than or equal the given value.
  """
  encryptionKey_gte: Int
}

type CupSubscriptionPayload {
  mutation: MutationType!
  node: Cup
  updatedFields: [String!]
  previousValues: CupPreviousValues
}

input CupSubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [CupSubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [CupSubscriptionWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [CupSubscriptionWhereInput!]
  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]
  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String
  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]
  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: CupWhereInput
}

input CupUpdateInput {
  anonSerialNumber: Int
  encryptionKey: Int
  calibId: CalibrationUpdateOneWithoutCupInput
  companyId: CompanyUpdateOneWithoutCupInput
  cupAppSync: CupAppSyncUpdateManyWithoutSerialNumberInput
  cupData: CupDatumUpdateManyWithoutSerialNumberInput
  cupDataColourCalib: CupDataColourCalibUpdateManyWithoutSerialNumberInput
  cupDataRaw: CupDataRawUpdateManyWithoutSerialNumberInput
  cupDataUserRemove: CupDataUserRemoveUpdateManyWithoutSerialNumberInput
  fwId: FirmwareUpdateOneWithoutCupInput
  hwId: HardwareUpdateOneWithoutCupInput
  userCups: UserCupUpdateManyWithoutSerialNumberInput
}

input CupUpdateManyDataInput {
  anonSerialNumber: Int
  encryptionKey: Int
}

input CupUpdateManyMutationInput {
  anonSerialNumber: Int
  encryptionKey: Int
}

input CupUpdateManyWithoutCalibIdInput {
  create: [CupCreateWithoutCalibIdInput!]
  connect: [CupWhereUniqueInput!]
  set: [CupWhereUniqueInput!]
  disconnect: [CupWhereUniqueInput!]
  delete: [CupWhereUniqueInput!]
  update: [CupUpdateWithWhereUniqueWithoutCalibIdInput!]
  updateMany: [CupUpdateManyWithWhereNestedInput!]
  deleteMany: [CupScalarWhereInput!]
  upsert: [CupUpsertWithWhereUniqueWithoutCalibIdInput!]
}

input CupUpdateManyWithoutCompanyIdInput {
  create: [CupCreateWithoutCompanyIdInput!]
  connect: [CupWhereUniqueInput!]
  set: [CupWhereUniqueInput!]
  disconnect: [CupWhereUniqueInput!]
  delete: [CupWhereUniqueInput!]
  update: [CupUpdateWithWhereUniqueWithoutCompanyIdInput!]
  updateMany: [CupUpdateManyWithWhereNestedInput!]
  deleteMany: [CupScalarWhereInput!]
  upsert: [CupUpsertWithWhereUniqueWithoutCompanyIdInput!]
}

input CupUpdateManyWithoutFwIdInput {
  create: [CupCreateWithoutFwIdInput!]
  connect: [CupWhereUniqueInput!]
  set: [CupWhereUniqueInput!]
  disconnect: [CupWhereUniqueInput!]
  delete: [CupWhereUniqueInput!]
  update: [CupUpdateWithWhereUniqueWithoutFwIdInput!]
  updateMany: [CupUpdateManyWithWhereNestedInput!]
  deleteMany: [CupScalarWhereInput!]
  upsert: [CupUpsertWithWhereUniqueWithoutFwIdInput!]
}

input CupUpdateManyWithoutHwIdInput {
  create: [CupCreateWithoutHwIdInput!]
  connect: [CupWhereUniqueInput!]
  set: [CupWhereUniqueInput!]
  disconnect: [CupWhereUniqueInput!]
  delete: [CupWhereUniqueInput!]
  update: [CupUpdateWithWhereUniqueWithoutHwIdInput!]
  updateMany: [CupUpdateManyWithWhereNestedInput!]
  deleteMany: [CupScalarWhereInput!]
  upsert: [CupUpsertWithWhereUniqueWithoutHwIdInput!]
}

input CupUpdateManyWithWhereNestedInput {
  where: CupScalarWhereInput!
  data: CupUpdateManyDataInput!
}

input CupUpdateOneRequiredWithoutCupAppSyncInput {
  create: CupCreateWithoutCupAppSyncInput
  connect: CupWhereUniqueInput
  update: CupUpdateWithoutCupAppSyncDataInput
  upsert: CupUpsertWithoutCupAppSyncInput
}

input CupUpdateOneRequiredWithoutCupDataColourCalibInput {
  create: CupCreateWithoutCupDataColourCalibInput
  connect: CupWhereUniqueInput
  update: CupUpdateWithoutCupDataColourCalibDataInput
  upsert: CupUpsertWithoutCupDataColourCalibInput
}

input CupUpdateOneRequiredWithoutCupDataUserRemoveInput {
  create: CupCreateWithoutCupDataUserRemoveInput
  connect: CupWhereUniqueInput
  update: CupUpdateWithoutCupDataUserRemoveDataInput
  upsert: CupUpsertWithoutCupDataUserRemoveInput
}

input CupUpdateOneWithoutCupDataInput {
  create: CupCreateWithoutCupDataInput
  connect: CupWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: CupUpdateWithoutCupDataDataInput
  upsert: CupUpsertWithoutCupDataInput
}

input CupUpdateOneWithoutCupDataRawInput {
  create: CupCreateWithoutCupDataRawInput
  connect: CupWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: CupUpdateWithoutCupDataRawDataInput
  upsert: CupUpsertWithoutCupDataRawInput
}

input CupUpdateOneWithoutUserCupsInput {
  create: CupCreateWithoutUserCupsInput
  connect: CupWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: CupUpdateWithoutUserCupsDataInput
  upsert: CupUpsertWithoutUserCupsInput
}

input CupUpdateWithoutCalibIdDataInput {
  anonSerialNumber: Int
  encryptionKey: Int
  companyId: CompanyUpdateOneWithoutCupInput
  cupAppSync: CupAppSyncUpdateManyWithoutSerialNumberInput
  cupData: CupDatumUpdateManyWithoutSerialNumberInput
  cupDataColourCalib: CupDataColourCalibUpdateManyWithoutSerialNumberInput
  cupDataRaw: CupDataRawUpdateManyWithoutSerialNumberInput
  cupDataUserRemove: CupDataUserRemoveUpdateManyWithoutSerialNumberInput
  fwId: FirmwareUpdateOneWithoutCupInput
  hwId: HardwareUpdateOneWithoutCupInput
  userCups: UserCupUpdateManyWithoutSerialNumberInput
}

input CupUpdateWithoutCompanyIdDataInput {
  anonSerialNumber: Int
  encryptionKey: Int
  calibId: CalibrationUpdateOneWithoutCupInput
  cupAppSync: CupAppSyncUpdateManyWithoutSerialNumberInput
  cupData: CupDatumUpdateManyWithoutSerialNumberInput
  cupDataColourCalib: CupDataColourCalibUpdateManyWithoutSerialNumberInput
  cupDataRaw: CupDataRawUpdateManyWithoutSerialNumberInput
  cupDataUserRemove: CupDataUserRemoveUpdateManyWithoutSerialNumberInput
  fwId: FirmwareUpdateOneWithoutCupInput
  hwId: HardwareUpdateOneWithoutCupInput
  userCups: UserCupUpdateManyWithoutSerialNumberInput
}

input CupUpdateWithoutCupAppSyncDataInput {
  anonSerialNumber: Int
  encryptionKey: Int
  calibId: CalibrationUpdateOneWithoutCupInput
  companyId: CompanyUpdateOneWithoutCupInput
  cupData: CupDatumUpdateManyWithoutSerialNumberInput
  cupDataColourCalib: CupDataColourCalibUpdateManyWithoutSerialNumberInput
  cupDataRaw: CupDataRawUpdateManyWithoutSerialNumberInput
  cupDataUserRemove: CupDataUserRemoveUpdateManyWithoutSerialNumberInput
  fwId: FirmwareUpdateOneWithoutCupInput
  hwId: HardwareUpdateOneWithoutCupInput
  userCups: UserCupUpdateManyWithoutSerialNumberInput
}

input CupUpdateWithoutCupDataColourCalibDataInput {
  anonSerialNumber: Int
  encryptionKey: Int
  calibId: CalibrationUpdateOneWithoutCupInput
  companyId: CompanyUpdateOneWithoutCupInput
  cupAppSync: CupAppSyncUpdateManyWithoutSerialNumberInput
  cupData: CupDatumUpdateManyWithoutSerialNumberInput
  cupDataRaw: CupDataRawUpdateManyWithoutSerialNumberInput
  cupDataUserRemove: CupDataUserRemoveUpdateManyWithoutSerialNumberInput
  fwId: FirmwareUpdateOneWithoutCupInput
  hwId: HardwareUpdateOneWithoutCupInput
  userCups: UserCupUpdateManyWithoutSerialNumberInput
}

input CupUpdateWithoutCupDataDataInput {
  anonSerialNumber: Int
  encryptionKey: Int
  calibId: CalibrationUpdateOneWithoutCupInput
  companyId: CompanyUpdateOneWithoutCupInput
  cupAppSync: CupAppSyncUpdateManyWithoutSerialNumberInput
  cupDataColourCalib: CupDataColourCalibUpdateManyWithoutSerialNumberInput
  cupDataRaw: CupDataRawUpdateManyWithoutSerialNumberInput
  cupDataUserRemove: CupDataUserRemoveUpdateManyWithoutSerialNumberInput
  fwId: FirmwareUpdateOneWithoutCupInput
  hwId: HardwareUpdateOneWithoutCupInput
  userCups: UserCupUpdateManyWithoutSerialNumberInput
}

input CupUpdateWithoutCupDataRawDataInput {
  anonSerialNumber: Int
  encryptionKey: Int
  calibId: CalibrationUpdateOneWithoutCupInput
  companyId: CompanyUpdateOneWithoutCupInput
  cupAppSync: CupAppSyncUpdateManyWithoutSerialNumberInput
  cupData: CupDatumUpdateManyWithoutSerialNumberInput
  cupDataColourCalib: CupDataColourCalibUpdateManyWithoutSerialNumberInput
  cupDataUserRemove: CupDataUserRemoveUpdateManyWithoutSerialNumberInput
  fwId: FirmwareUpdateOneWithoutCupInput
  hwId: HardwareUpdateOneWithoutCupInput
  userCups: UserCupUpdateManyWithoutSerialNumberInput
}

input CupUpdateWithoutCupDataUserRemoveDataInput {
  anonSerialNumber: Int
  encryptionKey: Int
  calibId: CalibrationUpdateOneWithoutCupInput
  companyId: CompanyUpdateOneWithoutCupInput
  cupAppSync: CupAppSyncUpdateManyWithoutSerialNumberInput
  cupData: CupDatumUpdateManyWithoutSerialNumberInput
  cupDataColourCalib: CupDataColourCalibUpdateManyWithoutSerialNumberInput
  cupDataRaw: CupDataRawUpdateManyWithoutSerialNumberInput
  fwId: FirmwareUpdateOneWithoutCupInput
  hwId: HardwareUpdateOneWithoutCupInput
  userCups: UserCupUpdateManyWithoutSerialNumberInput
}

input CupUpdateWithoutFwIdDataInput {
  anonSerialNumber: Int
  encryptionKey: Int
  calibId: CalibrationUpdateOneWithoutCupInput
  companyId: CompanyUpdateOneWithoutCupInput
  cupAppSync: CupAppSyncUpdateManyWithoutSerialNumberInput
  cupData: CupDatumUpdateManyWithoutSerialNumberInput
  cupDataColourCalib: CupDataColourCalibUpdateManyWithoutSerialNumberInput
  cupDataRaw: CupDataRawUpdateManyWithoutSerialNumberInput
  cupDataUserRemove: CupDataUserRemoveUpdateManyWithoutSerialNumberInput
  hwId: HardwareUpdateOneWithoutCupInput
  userCups: UserCupUpdateManyWithoutSerialNumberInput
}

input CupUpdateWithoutHwIdDataInput {
  anonSerialNumber: Int
  encryptionKey: Int
  calibId: CalibrationUpdateOneWithoutCupInput
  companyId: CompanyUpdateOneWithoutCupInput
  cupAppSync: CupAppSyncUpdateManyWithoutSerialNumberInput
  cupData: CupDatumUpdateManyWithoutSerialNumberInput
  cupDataColourCalib: CupDataColourCalibUpdateManyWithoutSerialNumberInput
  cupDataRaw: CupDataRawUpdateManyWithoutSerialNumberInput
  cupDataUserRemove: CupDataUserRemoveUpdateManyWithoutSerialNumberInput
  fwId: FirmwareUpdateOneWithoutCupInput
  userCups: UserCupUpdateManyWithoutSerialNumberInput
}

input CupUpdateWithoutUserCupsDataInput {
  anonSerialNumber: Int
  encryptionKey: Int
  calibId: CalibrationUpdateOneWithoutCupInput
  companyId: CompanyUpdateOneWithoutCupInput
  cupAppSync: CupAppSyncUpdateManyWithoutSerialNumberInput
  cupData: CupDatumUpdateManyWithoutSerialNumberInput
  cupDataColourCalib: CupDataColourCalibUpdateManyWithoutSerialNumberInput
  cupDataRaw: CupDataRawUpdateManyWithoutSerialNumberInput
  cupDataUserRemove: CupDataUserRemoveUpdateManyWithoutSerialNumberInput
  fwId: FirmwareUpdateOneWithoutCupInput
  hwId: HardwareUpdateOneWithoutCupInput
}

input CupUpdateWithWhereUniqueWithoutCalibIdInput {
  where: CupWhereUniqueInput!
  data: CupUpdateWithoutCalibIdDataInput!
}

input CupUpdateWithWhereUniqueWithoutCompanyIdInput {
  where: CupWhereUniqueInput!
  data: CupUpdateWithoutCompanyIdDataInput!
}

input CupUpdateWithWhereUniqueWithoutFwIdInput {
  where: CupWhereUniqueInput!
  data: CupUpdateWithoutFwIdDataInput!
}

input CupUpdateWithWhereUniqueWithoutHwIdInput {
  where: CupWhereUniqueInput!
  data: CupUpdateWithoutHwIdDataInput!
}

input CupUpsertWithoutCupAppSyncInput {
  update: CupUpdateWithoutCupAppSyncDataInput!
  create: CupCreateWithoutCupAppSyncInput!
}

input CupUpsertWithoutCupDataColourCalibInput {
  update: CupUpdateWithoutCupDataColourCalibDataInput!
  create: CupCreateWithoutCupDataColourCalibInput!
}

input CupUpsertWithoutCupDataInput {
  update: CupUpdateWithoutCupDataDataInput!
  create: CupCreateWithoutCupDataInput!
}

input CupUpsertWithoutCupDataRawInput {
  update: CupUpdateWithoutCupDataRawDataInput!
  create: CupCreateWithoutCupDataRawInput!
}

input CupUpsertWithoutCupDataUserRemoveInput {
  update: CupUpdateWithoutCupDataUserRemoveDataInput!
  create: CupCreateWithoutCupDataUserRemoveInput!
}

input CupUpsertWithoutUserCupsInput {
  update: CupUpdateWithoutUserCupsDataInput!
  create: CupCreateWithoutUserCupsInput!
}

input CupUpsertWithWhereUniqueWithoutCalibIdInput {
  where: CupWhereUniqueInput!
  update: CupUpdateWithoutCalibIdDataInput!
  create: CupCreateWithoutCalibIdInput!
}

input CupUpsertWithWhereUniqueWithoutCompanyIdInput {
  where: CupWhereUniqueInput!
  update: CupUpdateWithoutCompanyIdDataInput!
  create: CupCreateWithoutCompanyIdInput!
}

input CupUpsertWithWhereUniqueWithoutFwIdInput {
  where: CupWhereUniqueInput!
  update: CupUpdateWithoutFwIdDataInput!
  create: CupCreateWithoutFwIdInput!
}

input CupUpsertWithWhereUniqueWithoutHwIdInput {
  where: CupWhereUniqueInput!
  update: CupUpdateWithoutHwIdDataInput!
  create: CupCreateWithoutHwIdInput!
}

input CupWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [CupWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [CupWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [CupWhereInput!]
  id: Int
  """
  All values that are not equal to given value.
  """
  id_not: Int
  """
  All values that are contained in given list.
  """
  id_in: [Int!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [Int!]
  """
  All values less than the given value.
  """
  id_lt: Int
  """
  All values less than or equal the given value.
  """
  id_lte: Int
  """
  All values greater than the given value.
  """
  id_gt: Int
  """
  All values greater than or equal the given value.
  """
  id_gte: Int
  anonSerialNumber: Int
  """
  All values that are not equal to given value.
  """
  anonSerialNumber_not: Int
  """
  All values that are contained in given list.
  """
  anonSerialNumber_in: [Int!]
  """
  All values that are not contained in given list.
  """
  anonSerialNumber_not_in: [Int!]
  """
  All values less than the given value.
  """
  anonSerialNumber_lt: Int
  """
  All values less than or equal the given value.
  """
  anonSerialNumber_lte: Int
  """
  All values greater than the given value.
  """
  anonSerialNumber_gt: Int
  """
  All values greater than or equal the given value.
  """
  anonSerialNumber_gte: Int
  encryptionKey: Int
  """
  All values that are not equal to given value.
  """
  encryptionKey_not: Int
  """
  All values that are contained in given list.
  """
  encryptionKey_in: [Int!]
  """
  All values that are not contained in given list.
  """
  encryptionKey_not_in: [Int!]
  """
  All values less than the given value.
  """
  encryptionKey_lt: Int
  """
  All values less than or equal the given value.
  """
  encryptionKey_lte: Int
  """
  All values greater than the given value.
  """
  encryptionKey_gt: Int
  """
  All values greater than or equal the given value.
  """
  encryptionKey_gte: Int
  calibId: CalibrationWhereInput
  companyId: CompanyWhereInput
  cupAppSync_every: CupAppSyncWhereInput
  cupAppSync_some: CupAppSyncWhereInput
  cupAppSync_none: CupAppSyncWhereInput
  cupData_every: CupDatumWhereInput
  cupData_some: CupDatumWhereInput
  cupData_none: CupDatumWhereInput
  cupDataColourCalib_every: CupDataColourCalibWhereInput
  cupDataColourCalib_some: CupDataColourCalibWhereInput
  cupDataColourCalib_none: CupDataColourCalibWhereInput
  cupDataRaw_every: CupDataRawWhereInput
  cupDataRaw_some: CupDataRawWhereInput
  cupDataRaw_none: CupDataRawWhereInput
  cupDataUserRemove_every: CupDataUserRemoveWhereInput
  cupDataUserRemove_some: CupDataUserRemoveWhereInput
  cupDataUserRemove_none: CupDataUserRemoveWhereInput
  fwId: FirmwareWhereInput
  hwId: HardwareWhereInput
  userCups_every: UserCupWhereInput
  userCups_some: UserCupWhereInput
  userCups_none: UserCupWhereInput
}

input CupWhereUniqueInput {
  id: Int
}

scalar DateTime

type Ethnicity {
  id: Int!
  ethnicity: String!
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
}

"""
A connection to a list of items.
"""
type EthnicityConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [EthnicityEdge]!
  aggregate: AggregateEthnicity!
}

input EthnicityCreateInput {
  ethnicity: String!
  users: UserCreateManyWithoutEthnicityIdInput
}

input EthnicityCreateOneWithoutUsersInput {
  create: EthnicityCreateWithoutUsersInput
  connect: EthnicityWhereUniqueInput
}

input EthnicityCreateWithoutUsersInput {
  ethnicity: String!
}

"""
An edge in a connection.
"""
type EthnicityEdge {
  """
  The item at the end of the edge.
  """
  node: Ethnicity!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum EthnicityOrderByInput {
  id_ASC
  id_DESC
  ethnicity_ASC
  ethnicity_DESC
}

type EthnicityPreviousValues {
  id: Int!
  ethnicity: String!
}

type EthnicitySubscriptionPayload {
  mutation: MutationType!
  node: Ethnicity
  updatedFields: [String!]
  previousValues: EthnicityPreviousValues
}

input EthnicitySubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [EthnicitySubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [EthnicitySubscriptionWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [EthnicitySubscriptionWhereInput!]
  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]
  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String
  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]
  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: EthnicityWhereInput
}

input EthnicityUpdateInput {
  ethnicity: String
  users: UserUpdateManyWithoutEthnicityIdInput
}

input EthnicityUpdateManyMutationInput {
  ethnicity: String
}

input EthnicityUpdateOneRequiredWithoutUsersInput {
  create: EthnicityCreateWithoutUsersInput
  connect: EthnicityWhereUniqueInput
  update: EthnicityUpdateWithoutUsersDataInput
  upsert: EthnicityUpsertWithoutUsersInput
}

input EthnicityUpdateWithoutUsersDataInput {
  ethnicity: String
}

input EthnicityUpsertWithoutUsersInput {
  update: EthnicityUpdateWithoutUsersDataInput!
  create: EthnicityCreateWithoutUsersInput!
}

input EthnicityWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [EthnicityWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [EthnicityWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [EthnicityWhereInput!]
  id: Int
  """
  All values that are not equal to given value.
  """
  id_not: Int
  """
  All values that are contained in given list.
  """
  id_in: [Int!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [Int!]
  """
  All values less than the given value.
  """
  id_lt: Int
  """
  All values less than or equal the given value.
  """
  id_lte: Int
  """
  All values greater than the given value.
  """
  id_gt: Int
  """
  All values greater than or equal the given value.
  """
  id_gte: Int
  ethnicity: String
  """
  All values that are not equal to given value.
  """
  ethnicity_not: String
  """
  All values that are contained in given list.
  """
  ethnicity_in: [String!]
  """
  All values that are not contained in given list.
  """
  ethnicity_not_in: [String!]
  """
  All values less than the given value.
  """
  ethnicity_lt: String
  """
  All values less than or equal the given value.
  """
  ethnicity_lte: String
  """
  All values greater than the given value.
  """
  ethnicity_gt: String
  """
  All values greater than or equal the given value.
  """
  ethnicity_gte: String
  """
  All values containing the given string.
  """
  ethnicity_contains: String
  """
  All values not containing the given string.
  """
  ethnicity_not_contains: String
  """
  All values starting with the given string.
  """
  ethnicity_starts_with: String
  """
  All values not starting with the given string.
  """
  ethnicity_not_starts_with: String
  """
  All values ending with the given string.
  """
  ethnicity_ends_with: String
  """
  All values not ending with the given string.
  """
  ethnicity_not_ends_with: String
  users_every: UserWhereInput
  users_some: UserWhereInput
  users_none: UserWhereInput
}

input EthnicityWhereUniqueInput {
  id: Int
  ethnicity: String
}

type Firmware {
  id: Int!
  cup(where: CupWhereInput, orderBy: CupOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Cup!]
  fwVersion: String!
}

"""
A connection to a list of items.
"""
type FirmwareConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [FirmwareEdge]!
  aggregate: AggregateFirmware!
}

input FirmwareCreateInput {
  fwVersion: String!
  cup: CupCreateManyWithoutFwIdInput
}

input FirmwareCreateOneWithoutCupInput {
  create: FirmwareCreateWithoutCupInput
  connect: FirmwareWhereUniqueInput
}

input FirmwareCreateWithoutCupInput {
  fwVersion: String!
}

"""
An edge in a connection.
"""
type FirmwareEdge {
  """
  The item at the end of the edge.
  """
  node: Firmware!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum FirmwareOrderByInput {
  id_ASC
  id_DESC
  fwVersion_ASC
  fwVersion_DESC
}

type FirmwarePreviousValues {
  id: Int!
  fwVersion: String!
}

type FirmwareSubscriptionPayload {
  mutation: MutationType!
  node: Firmware
  updatedFields: [String!]
  previousValues: FirmwarePreviousValues
}

input FirmwareSubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [FirmwareSubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [FirmwareSubscriptionWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [FirmwareSubscriptionWhereInput!]
  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]
  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String
  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]
  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: FirmwareWhereInput
}

input FirmwareUpdateInput {
  fwVersion: String
  cup: CupUpdateManyWithoutFwIdInput
}

input FirmwareUpdateManyMutationInput {
  fwVersion: String
}

input FirmwareUpdateOneWithoutCupInput {
  create: FirmwareCreateWithoutCupInput
  connect: FirmwareWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: FirmwareUpdateWithoutCupDataInput
  upsert: FirmwareUpsertWithoutCupInput
}

input FirmwareUpdateWithoutCupDataInput {
  fwVersion: String
}

input FirmwareUpsertWithoutCupInput {
  update: FirmwareUpdateWithoutCupDataInput!
  create: FirmwareCreateWithoutCupInput!
}

input FirmwareWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [FirmwareWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [FirmwareWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [FirmwareWhereInput!]
  id: Int
  """
  All values that are not equal to given value.
  """
  id_not: Int
  """
  All values that are contained in given list.
  """
  id_in: [Int!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [Int!]
  """
  All values less than the given value.
  """
  id_lt: Int
  """
  All values less than or equal the given value.
  """
  id_lte: Int
  """
  All values greater than the given value.
  """
  id_gt: Int
  """
  All values greater than or equal the given value.
  """
  id_gte: Int
  fwVersion: String
  """
  All values that are not equal to given value.
  """
  fwVersion_not: String
  """
  All values that are contained in given list.
  """
  fwVersion_in: [String!]
  """
  All values that are not contained in given list.
  """
  fwVersion_not_in: [String!]
  """
  All values less than the given value.
  """
  fwVersion_lt: String
  """
  All values less than or equal the given value.
  """
  fwVersion_lte: String
  """
  All values greater than the given value.
  """
  fwVersion_gt: String
  """
  All values greater than or equal the given value.
  """
  fwVersion_gte: String
  """
  All values containing the given string.
  """
  fwVersion_contains: String
  """
  All values not containing the given string.
  """
  fwVersion_not_contains: String
  """
  All values starting with the given string.
  """
  fwVersion_starts_with: String
  """
  All values not starting with the given string.
  """
  fwVersion_not_starts_with: String
  """
  All values ending with the given string.
  """
  fwVersion_ends_with: String
  """
  All values not ending with the given string.
  """
  fwVersion_not_ends_with: String
  cup_every: CupWhereInput
  cup_some: CupWhereInput
  cup_none: CupWhereInput
}

input FirmwareWhereUniqueInput {
  id: Int
  fwVersion: String
}

type Hardware {
  id: Int!
  cup(where: CupWhereInput, orderBy: CupOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Cup!]
  hwVersion: String!
}

"""
A connection to a list of items.
"""
type HardwareConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [HardwareEdge]!
  aggregate: AggregateHardware!
}

input HardwareCreateInput {
  hwVersion: String!
  cup: CupCreateManyWithoutHwIdInput
}

input HardwareCreateOneWithoutCupInput {
  create: HardwareCreateWithoutCupInput
  connect: HardwareWhereUniqueInput
}

input HardwareCreateWithoutCupInput {
  hwVersion: String!
}

"""
An edge in a connection.
"""
type HardwareEdge {
  """
  The item at the end of the edge.
  """
  node: Hardware!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum HardwareOrderByInput {
  id_ASC
  id_DESC
  hwVersion_ASC
  hwVersion_DESC
}

type HardwarePreviousValues {
  id: Int!
  hwVersion: String!
}

type HardwareSubscriptionPayload {
  mutation: MutationType!
  node: Hardware
  updatedFields: [String!]
  previousValues: HardwarePreviousValues
}

input HardwareSubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [HardwareSubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [HardwareSubscriptionWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [HardwareSubscriptionWhereInput!]
  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]
  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String
  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]
  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: HardwareWhereInput
}

input HardwareUpdateInput {
  hwVersion: String
  cup: CupUpdateManyWithoutHwIdInput
}

input HardwareUpdateManyMutationInput {
  hwVersion: String
}

input HardwareUpdateOneWithoutCupInput {
  create: HardwareCreateWithoutCupInput
  connect: HardwareWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: HardwareUpdateWithoutCupDataInput
  upsert: HardwareUpsertWithoutCupInput
}

input HardwareUpdateWithoutCupDataInput {
  hwVersion: String
}

input HardwareUpsertWithoutCupInput {
  update: HardwareUpdateWithoutCupDataInput!
  create: HardwareCreateWithoutCupInput!
}

input HardwareWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [HardwareWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [HardwareWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [HardwareWhereInput!]
  id: Int
  """
  All values that are not equal to given value.
  """
  id_not: Int
  """
  All values that are contained in given list.
  """
  id_in: [Int!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [Int!]
  """
  All values less than the given value.
  """
  id_lt: Int
  """
  All values less than or equal the given value.
  """
  id_lte: Int
  """
  All values greater than the given value.
  """
  id_gt: Int
  """
  All values greater than or equal the given value.
  """
  id_gte: Int
  hwVersion: String
  """
  All values that are not equal to given value.
  """
  hwVersion_not: String
  """
  All values that are contained in given list.
  """
  hwVersion_in: [String!]
  """
  All values that are not contained in given list.
  """
  hwVersion_not_in: [String!]
  """
  All values less than the given value.
  """
  hwVersion_lt: String
  """
  All values less than or equal the given value.
  """
  hwVersion_lte: String
  """
  All values greater than the given value.
  """
  hwVersion_gt: String
  """
  All values greater than or equal the given value.
  """
  hwVersion_gte: String
  """
  All values containing the given string.
  """
  hwVersion_contains: String
  """
  All values not containing the given string.
  """
  hwVersion_not_contains: String
  """
  All values starting with the given string.
  """
  hwVersion_starts_with: String
  """
  All values not starting with the given string.
  """
  hwVersion_not_starts_with: String
  """
  All values ending with the given string.
  """
  hwVersion_ends_with: String
  """
  All values not ending with the given string.
  """
  hwVersion_not_ends_with: String
  cup_every: CupWhereInput
  cup_some: CupWhereInput
  cup_none: CupWhereInput
}

input HardwareWhereUniqueInput {
  id: Int
  hwVersion: String
}

"""
Raw JSON value
"""
scalar Json

"""
The 'Long' scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

"""
Information about pagination in a connection.
"""
type PageInfo {
  """
  When paginating forwards, are there more items?
  """
  hasNextPage: Boolean!
  """
  When paginating backwards, are there more items?
  """
  hasPreviousPage: Boolean!
  """
  When paginating backwards, the cursor to continue.
  """
  startCursor: String
  """
  When paginating forwards, the cursor to continue.
  """
  endCursor: String
}

type PlatformComp {
  id: Int!
  phoneId: Int!
  platformId: Int!
  problemHistory: Boolean
  softwareId: Int!
  successHistory: Boolean
}

"""
A connection to a list of items.
"""
type PlatformCompConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [PlatformCompEdge]!
  aggregate: AggregatePlatformComp!
}

input PlatformCompCreateInput {
  phoneId: Int!
  platformId: Int!
  problemHistory: Boolean
  softwareId: Int!
  successHistory: Boolean
}

"""
An edge in a connection.
"""
type PlatformCompEdge {
  """
  The item at the end of the edge.
  """
  node: PlatformComp!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum PlatformCompOrderByInput {
  id_ASC
  id_DESC
  phoneId_ASC
  phoneId_DESC
  platformId_ASC
  platformId_DESC
  problemHistory_ASC
  problemHistory_DESC
  softwareId_ASC
  softwareId_DESC
  successHistory_ASC
  successHistory_DESC
}

type PlatformCompPreviousValues {
  id: Int!
  phoneId: Int!
  platformId: Int!
  problemHistory: Boolean
  softwareId: Int!
  successHistory: Boolean
}

type PlatformCompSubscriptionPayload {
  mutation: MutationType!
  node: PlatformComp
  updatedFields: [String!]
  previousValues: PlatformCompPreviousValues
}

input PlatformCompSubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [PlatformCompSubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [PlatformCompSubscriptionWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [PlatformCompSubscriptionWhereInput!]
  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]
  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String
  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]
  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: PlatformCompWhereInput
}

input PlatformCompUpdateInput {
  phoneId: Int
  platformId: Int
  problemHistory: Boolean
  softwareId: Int
  successHistory: Boolean
}

input PlatformCompUpdateManyMutationInput {
  phoneId: Int
  platformId: Int
  problemHistory: Boolean
  softwareId: Int
  successHistory: Boolean
}

input PlatformCompWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [PlatformCompWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [PlatformCompWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [PlatformCompWhereInput!]
  id: Int
  """
  All values that are not equal to given value.
  """
  id_not: Int
  """
  All values that are contained in given list.
  """
  id_in: [Int!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [Int!]
  """
  All values less than the given value.
  """
  id_lt: Int
  """
  All values less than or equal the given value.
  """
  id_lte: Int
  """
  All values greater than the given value.
  """
  id_gt: Int
  """
  All values greater than or equal the given value.
  """
  id_gte: Int
  phoneId: Int
  """
  All values that are not equal to given value.
  """
  phoneId_not: Int
  """
  All values that are contained in given list.
  """
  phoneId_in: [Int!]
  """
  All values that are not contained in given list.
  """
  phoneId_not_in: [Int!]
  """
  All values less than the given value.
  """
  phoneId_lt: Int
  """
  All values less than or equal the given value.
  """
  phoneId_lte: Int
  """
  All values greater than the given value.
  """
  phoneId_gt: Int
  """
  All values greater than or equal the given value.
  """
  phoneId_gte: Int
  platformId: Int
  """
  All values that are not equal to given value.
  """
  platformId_not: Int
  """
  All values that are contained in given list.
  """
  platformId_in: [Int!]
  """
  All values that are not contained in given list.
  """
  platformId_not_in: [Int!]
  """
  All values less than the given value.
  """
  platformId_lt: Int
  """
  All values less than or equal the given value.
  """
  platformId_lte: Int
  """
  All values greater than the given value.
  """
  platformId_gt: Int
  """
  All values greater than or equal the given value.
  """
  platformId_gte: Int
  problemHistory: Boolean
  """
  All values that are not equal to given value.
  """
  problemHistory_not: Boolean
  softwareId: Int
  """
  All values that are not equal to given value.
  """
  softwareId_not: Int
  """
  All values that are contained in given list.
  """
  softwareId_in: [Int!]
  """
  All values that are not contained in given list.
  """
  softwareId_not_in: [Int!]
  """
  All values less than the given value.
  """
  softwareId_lt: Int
  """
  All values less than or equal the given value.
  """
  softwareId_lte: Int
  """
  All values greater than the given value.
  """
  softwareId_gt: Int
  """
  All values greater than or equal the given value.
  """
  softwareId_gte: Int
  successHistory: Boolean
  """
  All values that are not equal to given value.
  """
  successHistory_not: Boolean
}

input PlatformCompWhereUniqueInput {
  id: Int
}

enum PrismaDatabase {
  default
}

type User {
  id: Int!
  anonUserId: Int
  appServerSync(where: AppServerSyncWhereInput, orderBy: AppServerSyncOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [AppServerSync!]
  countryId: Country
  cupDataProcFlow(where: CupDataProcFlowWhereInput, orderBy: CupDataProcFlowOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [CupDataProcFlow!]
  cupDataProcMdates(where: CupDataProcMdateWhereInput, orderBy: CupDataProcMdateOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [CupDataProcMdate!]
  cupDataQaResponse(where: CupDataQaResponseWhereInput, orderBy: CupDataQaResponseOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [CupDataQaResponse!]
  cupDataUserRemove(where: CupDataUserRemoveWhereInput, orderBy: CupDataUserRemoveOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [CupDataUserRemove!]
  deleted: Boolean!
  dob: DateTime!
  email: String!
  encryptSaltString: String
  ethnicityId: Ethnicity!
  firstName: String!
  givenBirth: Boolean!
  lastName: String!
  password: String!
  userCoinHistory(where: UserCoinHistoryWhereInput, orderBy: UserCoinHistoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [UserCoinHistory!]
  userCups(where: UserCupWhereInput, orderBy: UserCupOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [UserCup!]
  userInterviewData(where: UserInterviewDatumWhereInput, orderBy: UserInterviewDatumOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [UserInterviewDatum!]
  userRecordDataByPeriod(where: UserRecordDataByPeriodWhereInput, orderBy: UserRecordDataByPeriodOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [UserRecordDataByPeriod!]
}

type UserCoinHistory {
  id: Int!
  category: String!
  coin: Int!
  contents: String!
  date: DateTime!
  txhash: String!
  userId: User
  userRecordDataByPeriod(where: UserRecordDataByPeriodWhereInput, orderBy: UserRecordDataByPeriodOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [UserRecordDataByPeriod!]
}

"""
A connection to a list of items.
"""
type UserCoinHistoryConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [UserCoinHistoryEdge]!
  aggregate: AggregateUserCoinHistory!
}

input UserCoinHistoryCreateInput {
  category: String!
  coin: Int!
  contents: String!
  date: DateTime!
  txhash: String!
  userId: UserCreateOneWithoutUserCoinHistoryInput
  userRecordDataByPeriod: UserRecordDataByPeriodCreateManyWithoutCoinHistoryRowIdInput
}

input UserCoinHistoryCreateManyWithoutUserIdInput {
  create: [UserCoinHistoryCreateWithoutUserIdInput!]
  connect: [UserCoinHistoryWhereUniqueInput!]
}

input UserCoinHistoryCreateOneWithoutUserRecordDataByPeriodInput {
  create: UserCoinHistoryCreateWithoutUserRecordDataByPeriodInput
  connect: UserCoinHistoryWhereUniqueInput
}

input UserCoinHistoryCreateWithoutUserIdInput {
  category: String!
  coin: Int!
  contents: String!
  date: DateTime!
  txhash: String!
  userRecordDataByPeriod: UserRecordDataByPeriodCreateManyWithoutCoinHistoryRowIdInput
}

input UserCoinHistoryCreateWithoutUserRecordDataByPeriodInput {
  category: String!
  coin: Int!
  contents: String!
  date: DateTime!
  txhash: String!
  userId: UserCreateOneWithoutUserCoinHistoryInput
}

"""
An edge in a connection.
"""
type UserCoinHistoryEdge {
  """
  The item at the end of the edge.
  """
  node: UserCoinHistory!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum UserCoinHistoryOrderByInput {
  id_ASC
  id_DESC
  category_ASC
  category_DESC
  coin_ASC
  coin_DESC
  contents_ASC
  contents_DESC
  date_ASC
  date_DESC
  txhash_ASC
  txhash_DESC
}

type UserCoinHistoryPreviousValues {
  id: Int!
  category: String!
  coin: Int!
  contents: String!
  date: DateTime!
  txhash: String!
}

input UserCoinHistoryScalarWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [UserCoinHistoryScalarWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [UserCoinHistoryScalarWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [UserCoinHistoryScalarWhereInput!]
  id: Int
  """
  All values that are not equal to given value.
  """
  id_not: Int
  """
  All values that are contained in given list.
  """
  id_in: [Int!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [Int!]
  """
  All values less than the given value.
  """
  id_lt: Int
  """
  All values less than or equal the given value.
  """
  id_lte: Int
  """
  All values greater than the given value.
  """
  id_gt: Int
  """
  All values greater than or equal the given value.
  """
  id_gte: Int
  category: String
  """
  All values that are not equal to given value.
  """
  category_not: String
  """
  All values that are contained in given list.
  """
  category_in: [String!]
  """
  All values that are not contained in given list.
  """
  category_not_in: [String!]
  """
  All values less than the given value.
  """
  category_lt: String
  """
  All values less than or equal the given value.
  """
  category_lte: String
  """
  All values greater than the given value.
  """
  category_gt: String
  """
  All values greater than or equal the given value.
  """
  category_gte: String
  """
  All values containing the given string.
  """
  category_contains: String
  """
  All values not containing the given string.
  """
  category_not_contains: String
  """
  All values starting with the given string.
  """
  category_starts_with: String
  """
  All values not starting with the given string.
  """
  category_not_starts_with: String
  """
  All values ending with the given string.
  """
  category_ends_with: String
  """
  All values not ending with the given string.
  """
  category_not_ends_with: String
  coin: Int
  """
  All values that are not equal to given value.
  """
  coin_not: Int
  """
  All values that are contained in given list.
  """
  coin_in: [Int!]
  """
  All values that are not contained in given list.
  """
  coin_not_in: [Int!]
  """
  All values less than the given value.
  """
  coin_lt: Int
  """
  All values less than or equal the given value.
  """
  coin_lte: Int
  """
  All values greater than the given value.
  """
  coin_gt: Int
  """
  All values greater than or equal the given value.
  """
  coin_gte: Int
  contents: String
  """
  All values that are not equal to given value.
  """
  contents_not: String
  """
  All values that are contained in given list.
  """
  contents_in: [String!]
  """
  All values that are not contained in given list.
  """
  contents_not_in: [String!]
  """
  All values less than the given value.
  """
  contents_lt: String
  """
  All values less than or equal the given value.
  """
  contents_lte: String
  """
  All values greater than the given value.
  """
  contents_gt: String
  """
  All values greater than or equal the given value.
  """
  contents_gte: String
  """
  All values containing the given string.
  """
  contents_contains: String
  """
  All values not containing the given string.
  """
  contents_not_contains: String
  """
  All values starting with the given string.
  """
  contents_starts_with: String
  """
  All values not starting with the given string.
  """
  contents_not_starts_with: String
  """
  All values ending with the given string.
  """
  contents_ends_with: String
  """
  All values not ending with the given string.
  """
  contents_not_ends_with: String
  date: DateTime
  """
  All values that are not equal to given value.
  """
  date_not: DateTime
  """
  All values that are contained in given list.
  """
  date_in: [DateTime!]
  """
  All values that are not contained in given list.
  """
  date_not_in: [DateTime!]
  """
  All values less than the given value.
  """
  date_lt: DateTime
  """
  All values less than or equal the given value.
  """
  date_lte: DateTime
  """
  All values greater than the given value.
  """
  date_gt: DateTime
  """
  All values greater than or equal the given value.
  """
  date_gte: DateTime
  txhash: String
  """
  All values that are not equal to given value.
  """
  txhash_not: String
  """
  All values that are contained in given list.
  """
  txhash_in: [String!]
  """
  All values that are not contained in given list.
  """
  txhash_not_in: [String!]
  """
  All values less than the given value.
  """
  txhash_lt: String
  """
  All values less than or equal the given value.
  """
  txhash_lte: String
  """
  All values greater than the given value.
  """
  txhash_gt: String
  """
  All values greater than or equal the given value.
  """
  txhash_gte: String
  """
  All values containing the given string.
  """
  txhash_contains: String
  """
  All values not containing the given string.
  """
  txhash_not_contains: String
  """
  All values starting with the given string.
  """
  txhash_starts_with: String
  """
  All values not starting with the given string.
  """
  txhash_not_starts_with: String
  """
  All values ending with the given string.
  """
  txhash_ends_with: String
  """
  All values not ending with the given string.
  """
  txhash_not_ends_with: String
}

type UserCoinHistorySubscriptionPayload {
  mutation: MutationType!
  node: UserCoinHistory
  updatedFields: [String!]
  previousValues: UserCoinHistoryPreviousValues
}

input UserCoinHistorySubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [UserCoinHistorySubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [UserCoinHistorySubscriptionWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [UserCoinHistorySubscriptionWhereInput!]
  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]
  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String
  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]
  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: UserCoinHistoryWhereInput
}

input UserCoinHistoryUpdateInput {
  category: String
  coin: Int
  contents: String
  date: DateTime
  txhash: String
  userId: UserUpdateOneWithoutUserCoinHistoryInput
  userRecordDataByPeriod: UserRecordDataByPeriodUpdateManyWithoutCoinHistoryRowIdInput
}

input UserCoinHistoryUpdateManyDataInput {
  category: String
  coin: Int
  contents: String
  date: DateTime
  txhash: String
}

input UserCoinHistoryUpdateManyMutationInput {
  category: String
  coin: Int
  contents: String
  date: DateTime
  txhash: String
}

input UserCoinHistoryUpdateManyWithoutUserIdInput {
  create: [UserCoinHistoryCreateWithoutUserIdInput!]
  connect: [UserCoinHistoryWhereUniqueInput!]
  set: [UserCoinHistoryWhereUniqueInput!]
  disconnect: [UserCoinHistoryWhereUniqueInput!]
  delete: [UserCoinHistoryWhereUniqueInput!]
  update: [UserCoinHistoryUpdateWithWhereUniqueWithoutUserIdInput!]
  updateMany: [UserCoinHistoryUpdateManyWithWhereNestedInput!]
  deleteMany: [UserCoinHistoryScalarWhereInput!]
  upsert: [UserCoinHistoryUpsertWithWhereUniqueWithoutUserIdInput!]
}

input UserCoinHistoryUpdateManyWithWhereNestedInput {
  where: UserCoinHistoryScalarWhereInput!
  data: UserCoinHistoryUpdateManyDataInput!
}

input UserCoinHistoryUpdateOneWithoutUserRecordDataByPeriodInput {
  create: UserCoinHistoryCreateWithoutUserRecordDataByPeriodInput
  connect: UserCoinHistoryWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: UserCoinHistoryUpdateWithoutUserRecordDataByPeriodDataInput
  upsert: UserCoinHistoryUpsertWithoutUserRecordDataByPeriodInput
}

input UserCoinHistoryUpdateWithoutUserIdDataInput {
  category: String
  coin: Int
  contents: String
  date: DateTime
  txhash: String
  userRecordDataByPeriod: UserRecordDataByPeriodUpdateManyWithoutCoinHistoryRowIdInput
}

input UserCoinHistoryUpdateWithoutUserRecordDataByPeriodDataInput {
  category: String
  coin: Int
  contents: String
  date: DateTime
  txhash: String
  userId: UserUpdateOneWithoutUserCoinHistoryInput
}

input UserCoinHistoryUpdateWithWhereUniqueWithoutUserIdInput {
  where: UserCoinHistoryWhereUniqueInput!
  data: UserCoinHistoryUpdateWithoutUserIdDataInput!
}

input UserCoinHistoryUpsertWithoutUserRecordDataByPeriodInput {
  update: UserCoinHistoryUpdateWithoutUserRecordDataByPeriodDataInput!
  create: UserCoinHistoryCreateWithoutUserRecordDataByPeriodInput!
}

input UserCoinHistoryUpsertWithWhereUniqueWithoutUserIdInput {
  where: UserCoinHistoryWhereUniqueInput!
  update: UserCoinHistoryUpdateWithoutUserIdDataInput!
  create: UserCoinHistoryCreateWithoutUserIdInput!
}

input UserCoinHistoryWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [UserCoinHistoryWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [UserCoinHistoryWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [UserCoinHistoryWhereInput!]
  id: Int
  """
  All values that are not equal to given value.
  """
  id_not: Int
  """
  All values that are contained in given list.
  """
  id_in: [Int!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [Int!]
  """
  All values less than the given value.
  """
  id_lt: Int
  """
  All values less than or equal the given value.
  """
  id_lte: Int
  """
  All values greater than the given value.
  """
  id_gt: Int
  """
  All values greater than or equal the given value.
  """
  id_gte: Int
  category: String
  """
  All values that are not equal to given value.
  """
  category_not: String
  """
  All values that are contained in given list.
  """
  category_in: [String!]
  """
  All values that are not contained in given list.
  """
  category_not_in: [String!]
  """
  All values less than the given value.
  """
  category_lt: String
  """
  All values less than or equal the given value.
  """
  category_lte: String
  """
  All values greater than the given value.
  """
  category_gt: String
  """
  All values greater than or equal the given value.
  """
  category_gte: String
  """
  All values containing the given string.
  """
  category_contains: String
  """
  All values not containing the given string.
  """
  category_not_contains: String
  """
  All values starting with the given string.
  """
  category_starts_with: String
  """
  All values not starting with the given string.
  """
  category_not_starts_with: String
  """
  All values ending with the given string.
  """
  category_ends_with: String
  """
  All values not ending with the given string.
  """
  category_not_ends_with: String
  coin: Int
  """
  All values that are not equal to given value.
  """
  coin_not: Int
  """
  All values that are contained in given list.
  """
  coin_in: [Int!]
  """
  All values that are not contained in given list.
  """
  coin_not_in: [Int!]
  """
  All values less than the given value.
  """
  coin_lt: Int
  """
  All values less than or equal the given value.
  """
  coin_lte: Int
  """
  All values greater than the given value.
  """
  coin_gt: Int
  """
  All values greater than or equal the given value.
  """
  coin_gte: Int
  contents: String
  """
  All values that are not equal to given value.
  """
  contents_not: String
  """
  All values that are contained in given list.
  """
  contents_in: [String!]
  """
  All values that are not contained in given list.
  """
  contents_not_in: [String!]
  """
  All values less than the given value.
  """
  contents_lt: String
  """
  All values less than or equal the given value.
  """
  contents_lte: String
  """
  All values greater than the given value.
  """
  contents_gt: String
  """
  All values greater than or equal the given value.
  """
  contents_gte: String
  """
  All values containing the given string.
  """
  contents_contains: String
  """
  All values not containing the given string.
  """
  contents_not_contains: String
  """
  All values starting with the given string.
  """
  contents_starts_with: String
  """
  All values not starting with the given string.
  """
  contents_not_starts_with: String
  """
  All values ending with the given string.
  """
  contents_ends_with: String
  """
  All values not ending with the given string.
  """
  contents_not_ends_with: String
  date: DateTime
  """
  All values that are not equal to given value.
  """
  date_not: DateTime
  """
  All values that are contained in given list.
  """
  date_in: [DateTime!]
  """
  All values that are not contained in given list.
  """
  date_not_in: [DateTime!]
  """
  All values less than the given value.
  """
  date_lt: DateTime
  """
  All values less than or equal the given value.
  """
  date_lte: DateTime
  """
  All values greater than the given value.
  """
  date_gt: DateTime
  """
  All values greater than or equal the given value.
  """
  date_gte: DateTime
  txhash: String
  """
  All values that are not equal to given value.
  """
  txhash_not: String
  """
  All values that are contained in given list.
  """
  txhash_in: [String!]
  """
  All values that are not contained in given list.
  """
  txhash_not_in: [String!]
  """
  All values less than the given value.
  """
  txhash_lt: String
  """
  All values less than or equal the given value.
  """
  txhash_lte: String
  """
  All values greater than the given value.
  """
  txhash_gt: String
  """
  All values greater than or equal the given value.
  """
  txhash_gte: String
  """
  All values containing the given string.
  """
  txhash_contains: String
  """
  All values not containing the given string.
  """
  txhash_not_contains: String
  """
  All values starting with the given string.
  """
  txhash_starts_with: String
  """
  All values not starting with the given string.
  """
  txhash_not_starts_with: String
  """
  All values ending with the given string.
  """
  txhash_ends_with: String
  """
  All values not ending with the given string.
  """
  txhash_not_ends_with: String
  userId: UserWhereInput
  userRecordDataByPeriod_every: UserRecordDataByPeriodWhereInput
  userRecordDataByPeriod_some: UserRecordDataByPeriodWhereInput
  userRecordDataByPeriod_none: UserRecordDataByPeriodWhereInput
}

input UserCoinHistoryWhereUniqueInput {
  id: Int
}

"""
A connection to a list of items.
"""
type UserConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  anonUserId: Int
  deleted: Boolean
  dob: DateTime!
  email: String!
  encryptSaltString: String
  firstName: String!
  givenBirth: Boolean!
  lastName: String!
  password: String!
  appServerSync: AppServerSyncCreateManyWithoutUserIdInput
  countryId: CountryCreateOneWithoutUsersInput
  cupDataProcFlow: CupDataProcFlowCreateManyWithoutUserIdInput
  cupDataProcMdates: CupDataProcMdateCreateManyWithoutUserIdInput
  cupDataQaResponse: CupDataQaResponseCreateManyWithoutUserIdInput
  cupDataUserRemove: CupDataUserRemoveCreateManyWithoutUserIdInput
  ethnicityId: EthnicityCreateOneWithoutUsersInput!
  userCoinHistory: UserCoinHistoryCreateManyWithoutUserIdInput
  userCups: UserCupCreateManyWithoutUserIdInput
  userInterviewData: UserInterviewDatumCreateManyWithoutUserIdInput
  userRecordDataByPeriod: UserRecordDataByPeriodCreateManyWithoutUserIdInput
}

input UserCreateManyWithoutCountryIdInput {
  create: [UserCreateWithoutCountryIdInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateManyWithoutEthnicityIdInput {
  create: [UserCreateWithoutEthnicityIdInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateOneWithoutAppServerSyncInput {
  create: UserCreateWithoutAppServerSyncInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutCupDataProcFlowInput {
  create: UserCreateWithoutCupDataProcFlowInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutCupDataProcMdatesInput {
  create: UserCreateWithoutCupDataProcMdatesInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutCupDataQaResponseInput {
  create: UserCreateWithoutCupDataQaResponseInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutCupDataUserRemoveInput {
  create: UserCreateWithoutCupDataUserRemoveInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutUserCoinHistoryInput {
  create: UserCreateWithoutUserCoinHistoryInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutUserCupsInput {
  create: UserCreateWithoutUserCupsInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutUserInterviewDataInput {
  create: UserCreateWithoutUserInterviewDataInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutUserRecordDataByPeriodInput {
  create: UserCreateWithoutUserRecordDataByPeriodInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutAppServerSyncInput {
  anonUserId: Int
  deleted: Boolean
  dob: DateTime!
  email: String!
  encryptSaltString: String
  firstName: String!
  givenBirth: Boolean!
  lastName: String!
  password: String!
  countryId: CountryCreateOneWithoutUsersInput
  cupDataProcFlow: CupDataProcFlowCreateManyWithoutUserIdInput
  cupDataProcMdates: CupDataProcMdateCreateManyWithoutUserIdInput
  cupDataQaResponse: CupDataQaResponseCreateManyWithoutUserIdInput
  cupDataUserRemove: CupDataUserRemoveCreateManyWithoutUserIdInput
  ethnicityId: EthnicityCreateOneWithoutUsersInput!
  userCoinHistory: UserCoinHistoryCreateManyWithoutUserIdInput
  userCups: UserCupCreateManyWithoutUserIdInput
  userInterviewData: UserInterviewDatumCreateManyWithoutUserIdInput
  userRecordDataByPeriod: UserRecordDataByPeriodCreateManyWithoutUserIdInput
}

input UserCreateWithoutCountryIdInput {
  anonUserId: Int
  deleted: Boolean
  dob: DateTime!
  email: String!
  encryptSaltString: String
  firstName: String!
  givenBirth: Boolean!
  lastName: String!
  password: String!
  appServerSync: AppServerSyncCreateManyWithoutUserIdInput
  cupDataProcFlow: CupDataProcFlowCreateManyWithoutUserIdInput
  cupDataProcMdates: CupDataProcMdateCreateManyWithoutUserIdInput
  cupDataQaResponse: CupDataQaResponseCreateManyWithoutUserIdInput
  cupDataUserRemove: CupDataUserRemoveCreateManyWithoutUserIdInput
  ethnicityId: EthnicityCreateOneWithoutUsersInput!
  userCoinHistory: UserCoinHistoryCreateManyWithoutUserIdInput
  userCups: UserCupCreateManyWithoutUserIdInput
  userInterviewData: UserInterviewDatumCreateManyWithoutUserIdInput
  userRecordDataByPeriod: UserRecordDataByPeriodCreateManyWithoutUserIdInput
}

input UserCreateWithoutCupDataProcFlowInput {
  anonUserId: Int
  deleted: Boolean
  dob: DateTime!
  email: String!
  encryptSaltString: String
  firstName: String!
  givenBirth: Boolean!
  lastName: String!
  password: String!
  appServerSync: AppServerSyncCreateManyWithoutUserIdInput
  countryId: CountryCreateOneWithoutUsersInput
  cupDataProcMdates: CupDataProcMdateCreateManyWithoutUserIdInput
  cupDataQaResponse: CupDataQaResponseCreateManyWithoutUserIdInput
  cupDataUserRemove: CupDataUserRemoveCreateManyWithoutUserIdInput
  ethnicityId: EthnicityCreateOneWithoutUsersInput!
  userCoinHistory: UserCoinHistoryCreateManyWithoutUserIdInput
  userCups: UserCupCreateManyWithoutUserIdInput
  userInterviewData: UserInterviewDatumCreateManyWithoutUserIdInput
  userRecordDataByPeriod: UserRecordDataByPeriodCreateManyWithoutUserIdInput
}

input UserCreateWithoutCupDataProcMdatesInput {
  anonUserId: Int
  deleted: Boolean
  dob: DateTime!
  email: String!
  encryptSaltString: String
  firstName: String!
  givenBirth: Boolean!
  lastName: String!
  password: String!
  appServerSync: AppServerSyncCreateManyWithoutUserIdInput
  countryId: CountryCreateOneWithoutUsersInput
  cupDataProcFlow: CupDataProcFlowCreateManyWithoutUserIdInput
  cupDataQaResponse: CupDataQaResponseCreateManyWithoutUserIdInput
  cupDataUserRemove: CupDataUserRemoveCreateManyWithoutUserIdInput
  ethnicityId: EthnicityCreateOneWithoutUsersInput!
  userCoinHistory: UserCoinHistoryCreateManyWithoutUserIdInput
  userCups: UserCupCreateManyWithoutUserIdInput
  userInterviewData: UserInterviewDatumCreateManyWithoutUserIdInput
  userRecordDataByPeriod: UserRecordDataByPeriodCreateManyWithoutUserIdInput
}

input UserCreateWithoutCupDataQaResponseInput {
  anonUserId: Int
  deleted: Boolean
  dob: DateTime!
  email: String!
  encryptSaltString: String
  firstName: String!
  givenBirth: Boolean!
  lastName: String!
  password: String!
  appServerSync: AppServerSyncCreateManyWithoutUserIdInput
  countryId: CountryCreateOneWithoutUsersInput
  cupDataProcFlow: CupDataProcFlowCreateManyWithoutUserIdInput
  cupDataProcMdates: CupDataProcMdateCreateManyWithoutUserIdInput
  cupDataUserRemove: CupDataUserRemoveCreateManyWithoutUserIdInput
  ethnicityId: EthnicityCreateOneWithoutUsersInput!
  userCoinHistory: UserCoinHistoryCreateManyWithoutUserIdInput
  userCups: UserCupCreateManyWithoutUserIdInput
  userInterviewData: UserInterviewDatumCreateManyWithoutUserIdInput
  userRecordDataByPeriod: UserRecordDataByPeriodCreateManyWithoutUserIdInput
}

input UserCreateWithoutCupDataUserRemoveInput {
  anonUserId: Int
  deleted: Boolean
  dob: DateTime!
  email: String!
  encryptSaltString: String
  firstName: String!
  givenBirth: Boolean!
  lastName: String!
  password: String!
  appServerSync: AppServerSyncCreateManyWithoutUserIdInput
  countryId: CountryCreateOneWithoutUsersInput
  cupDataProcFlow: CupDataProcFlowCreateManyWithoutUserIdInput
  cupDataProcMdates: CupDataProcMdateCreateManyWithoutUserIdInput
  cupDataQaResponse: CupDataQaResponseCreateManyWithoutUserIdInput
  ethnicityId: EthnicityCreateOneWithoutUsersInput!
  userCoinHistory: UserCoinHistoryCreateManyWithoutUserIdInput
  userCups: UserCupCreateManyWithoutUserIdInput
  userInterviewData: UserInterviewDatumCreateManyWithoutUserIdInput
  userRecordDataByPeriod: UserRecordDataByPeriodCreateManyWithoutUserIdInput
}

input UserCreateWithoutEthnicityIdInput {
  anonUserId: Int
  deleted: Boolean
  dob: DateTime!
  email: String!
  encryptSaltString: String
  firstName: String!
  givenBirth: Boolean!
  lastName: String!
  password: String!
  appServerSync: AppServerSyncCreateManyWithoutUserIdInput
  countryId: CountryCreateOneWithoutUsersInput
  cupDataProcFlow: CupDataProcFlowCreateManyWithoutUserIdInput
  cupDataProcMdates: CupDataProcMdateCreateManyWithoutUserIdInput
  cupDataQaResponse: CupDataQaResponseCreateManyWithoutUserIdInput
  cupDataUserRemove: CupDataUserRemoveCreateManyWithoutUserIdInput
  userCoinHistory: UserCoinHistoryCreateManyWithoutUserIdInput
  userCups: UserCupCreateManyWithoutUserIdInput
  userInterviewData: UserInterviewDatumCreateManyWithoutUserIdInput
  userRecordDataByPeriod: UserRecordDataByPeriodCreateManyWithoutUserIdInput
}

input UserCreateWithoutUserCoinHistoryInput {
  anonUserId: Int
  deleted: Boolean
  dob: DateTime!
  email: String!
  encryptSaltString: String
  firstName: String!
  givenBirth: Boolean!
  lastName: String!
  password: String!
  appServerSync: AppServerSyncCreateManyWithoutUserIdInput
  countryId: CountryCreateOneWithoutUsersInput
  cupDataProcFlow: CupDataProcFlowCreateManyWithoutUserIdInput
  cupDataProcMdates: CupDataProcMdateCreateManyWithoutUserIdInput
  cupDataQaResponse: CupDataQaResponseCreateManyWithoutUserIdInput
  cupDataUserRemove: CupDataUserRemoveCreateManyWithoutUserIdInput
  ethnicityId: EthnicityCreateOneWithoutUsersInput!
  userCups: UserCupCreateManyWithoutUserIdInput
  userInterviewData: UserInterviewDatumCreateManyWithoutUserIdInput
  userRecordDataByPeriod: UserRecordDataByPeriodCreateManyWithoutUserIdInput
}

input UserCreateWithoutUserCupsInput {
  anonUserId: Int
  deleted: Boolean
  dob: DateTime!
  email: String!
  encryptSaltString: String
  firstName: String!
  givenBirth: Boolean!
  lastName: String!
  password: String!
  appServerSync: AppServerSyncCreateManyWithoutUserIdInput
  countryId: CountryCreateOneWithoutUsersInput
  cupDataProcFlow: CupDataProcFlowCreateManyWithoutUserIdInput
  cupDataProcMdates: CupDataProcMdateCreateManyWithoutUserIdInput
  cupDataQaResponse: CupDataQaResponseCreateManyWithoutUserIdInput
  cupDataUserRemove: CupDataUserRemoveCreateManyWithoutUserIdInput
  ethnicityId: EthnicityCreateOneWithoutUsersInput!
  userCoinHistory: UserCoinHistoryCreateManyWithoutUserIdInput
  userInterviewData: UserInterviewDatumCreateManyWithoutUserIdInput
  userRecordDataByPeriod: UserRecordDataByPeriodCreateManyWithoutUserIdInput
}

input UserCreateWithoutUserInterviewDataInput {
  anonUserId: Int
  deleted: Boolean
  dob: DateTime!
  email: String!
  encryptSaltString: String
  firstName: String!
  givenBirth: Boolean!
  lastName: String!
  password: String!
  appServerSync: AppServerSyncCreateManyWithoutUserIdInput
  countryId: CountryCreateOneWithoutUsersInput
  cupDataProcFlow: CupDataProcFlowCreateManyWithoutUserIdInput
  cupDataProcMdates: CupDataProcMdateCreateManyWithoutUserIdInput
  cupDataQaResponse: CupDataQaResponseCreateManyWithoutUserIdInput
  cupDataUserRemove: CupDataUserRemoveCreateManyWithoutUserIdInput
  ethnicityId: EthnicityCreateOneWithoutUsersInput!
  userCoinHistory: UserCoinHistoryCreateManyWithoutUserIdInput
  userCups: UserCupCreateManyWithoutUserIdInput
  userRecordDataByPeriod: UserRecordDataByPeriodCreateManyWithoutUserIdInput
}

input UserCreateWithoutUserRecordDataByPeriodInput {
  anonUserId: Int
  deleted: Boolean
  dob: DateTime!
  email: String!
  encryptSaltString: String
  firstName: String!
  givenBirth: Boolean!
  lastName: String!
  password: String!
  appServerSync: AppServerSyncCreateManyWithoutUserIdInput
  countryId: CountryCreateOneWithoutUsersInput
  cupDataProcFlow: CupDataProcFlowCreateManyWithoutUserIdInput
  cupDataProcMdates: CupDataProcMdateCreateManyWithoutUserIdInput
  cupDataQaResponse: CupDataQaResponseCreateManyWithoutUserIdInput
  cupDataUserRemove: CupDataUserRemoveCreateManyWithoutUserIdInput
  ethnicityId: EthnicityCreateOneWithoutUsersInput!
  userCoinHistory: UserCoinHistoryCreateManyWithoutUserIdInput
  userCups: UserCupCreateManyWithoutUserIdInput
  userInterviewData: UserInterviewDatumCreateManyWithoutUserIdInput
}

type UserCup {
  id: Int!
  serialNumber: Cup
  userId: User
}

"""
A connection to a list of items.
"""
type UserCupConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [UserCupEdge]!
  aggregate: AggregateUserCup!
}

input UserCupCreateInput {
  serialNumber: CupCreateOneWithoutUserCupsInput
  userId: UserCreateOneWithoutUserCupsInput
}

input UserCupCreateManyWithoutSerialNumberInput {
  create: [UserCupCreateWithoutSerialNumberInput!]
  connect: [UserCupWhereUniqueInput!]
}

input UserCupCreateManyWithoutUserIdInput {
  create: [UserCupCreateWithoutUserIdInput!]
  connect: [UserCupWhereUniqueInput!]
}

input UserCupCreateWithoutSerialNumberInput {
  userId: UserCreateOneWithoutUserCupsInput
}

input UserCupCreateWithoutUserIdInput {
  serialNumber: CupCreateOneWithoutUserCupsInput
}

"""
An edge in a connection.
"""
type UserCupEdge {
  """
  The item at the end of the edge.
  """
  node: UserCup!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum UserCupOrderByInput {
  id_ASC
  id_DESC
}

type UserCupPreviousValues {
  id: Int!
}

input UserCupScalarWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [UserCupScalarWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [UserCupScalarWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [UserCupScalarWhereInput!]
  id: Int
  """
  All values that are not equal to given value.
  """
  id_not: Int
  """
  All values that are contained in given list.
  """
  id_in: [Int!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [Int!]
  """
  All values less than the given value.
  """
  id_lt: Int
  """
  All values less than or equal the given value.
  """
  id_lte: Int
  """
  All values greater than the given value.
  """
  id_gt: Int
  """
  All values greater than or equal the given value.
  """
  id_gte: Int
}

type UserCupSubscriptionPayload {
  mutation: MutationType!
  node: UserCup
  updatedFields: [String!]
  previousValues: UserCupPreviousValues
}

input UserCupSubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [UserCupSubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [UserCupSubscriptionWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [UserCupSubscriptionWhereInput!]
  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]
  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String
  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]
  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: UserCupWhereInput
}

input UserCupUpdateInput {
  serialNumber: CupUpdateOneWithoutUserCupsInput
  userId: UserUpdateOneWithoutUserCupsInput
}

input UserCupUpdateManyWithoutSerialNumberInput {
  create: [UserCupCreateWithoutSerialNumberInput!]
  connect: [UserCupWhereUniqueInput!]
  set: [UserCupWhereUniqueInput!]
  disconnect: [UserCupWhereUniqueInput!]
  delete: [UserCupWhereUniqueInput!]
  update: [UserCupUpdateWithWhereUniqueWithoutSerialNumberInput!]
  deleteMany: [UserCupScalarWhereInput!]
  upsert: [UserCupUpsertWithWhereUniqueWithoutSerialNumberInput!]
}

input UserCupUpdateManyWithoutUserIdInput {
  create: [UserCupCreateWithoutUserIdInput!]
  connect: [UserCupWhereUniqueInput!]
  set: [UserCupWhereUniqueInput!]
  disconnect: [UserCupWhereUniqueInput!]
  delete: [UserCupWhereUniqueInput!]
  update: [UserCupUpdateWithWhereUniqueWithoutUserIdInput!]
  deleteMany: [UserCupScalarWhereInput!]
  upsert: [UserCupUpsertWithWhereUniqueWithoutUserIdInput!]
}

input UserCupUpdateWithoutSerialNumberDataInput {
  userId: UserUpdateOneWithoutUserCupsInput
}

input UserCupUpdateWithoutUserIdDataInput {
  serialNumber: CupUpdateOneWithoutUserCupsInput
}

input UserCupUpdateWithWhereUniqueWithoutSerialNumberInput {
  where: UserCupWhereUniqueInput!
  data: UserCupUpdateWithoutSerialNumberDataInput!
}

input UserCupUpdateWithWhereUniqueWithoutUserIdInput {
  where: UserCupWhereUniqueInput!
  data: UserCupUpdateWithoutUserIdDataInput!
}

input UserCupUpsertWithWhereUniqueWithoutSerialNumberInput {
  where: UserCupWhereUniqueInput!
  update: UserCupUpdateWithoutSerialNumberDataInput!
  create: UserCupCreateWithoutSerialNumberInput!
}

input UserCupUpsertWithWhereUniqueWithoutUserIdInput {
  where: UserCupWhereUniqueInput!
  update: UserCupUpdateWithoutUserIdDataInput!
  create: UserCupCreateWithoutUserIdInput!
}

input UserCupWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [UserCupWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [UserCupWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [UserCupWhereInput!]
  id: Int
  """
  All values that are not equal to given value.
  """
  id_not: Int
  """
  All values that are contained in given list.
  """
  id_in: [Int!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [Int!]
  """
  All values less than the given value.
  """
  id_lt: Int
  """
  All values less than or equal the given value.
  """
  id_lte: Int
  """
  All values greater than the given value.
  """
  id_gt: Int
  """
  All values greater than or equal the given value.
  """
  id_gte: Int
  serialNumber: CupWhereInput
  userId: UserWhereInput
}

input UserCupWhereUniqueInput {
  id: Int
}

"""
An edge in a connection.
"""
type UserEdge {
  """
  The item at the end of the edge.
  """
  node: User!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

type UserInterviewDatum {
  id: Int!
  answerRange: Int
  answerText: String
  answerYn: Boolean
  date: DateTime!
  questionId: UserInterviewQuestion!
  userId: User!
}

"""
A connection to a list of items.
"""
type UserInterviewDatumConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [UserInterviewDatumEdge]!
  aggregate: AggregateUserInterviewDatum!
}

input UserInterviewDatumCreateInput {
  answerRange: Int
  answerText: String
  answerYn: Boolean
  date: DateTime!
  questionId: UserInterviewQuestionCreateOneWithoutUserInterviewDataInput!
  userId: UserCreateOneWithoutUserInterviewDataInput!
}

input UserInterviewDatumCreateManyWithoutQuestionIdInput {
  create: [UserInterviewDatumCreateWithoutQuestionIdInput!]
  connect: [UserInterviewDatumWhereUniqueInput!]
}

input UserInterviewDatumCreateManyWithoutUserIdInput {
  create: [UserInterviewDatumCreateWithoutUserIdInput!]
  connect: [UserInterviewDatumWhereUniqueInput!]
}

input UserInterviewDatumCreateWithoutQuestionIdInput {
  answerRange: Int
  answerText: String
  answerYn: Boolean
  date: DateTime!
  userId: UserCreateOneWithoutUserInterviewDataInput!
}

input UserInterviewDatumCreateWithoutUserIdInput {
  answerRange: Int
  answerText: String
  answerYn: Boolean
  date: DateTime!
  questionId: UserInterviewQuestionCreateOneWithoutUserInterviewDataInput!
}

"""
An edge in a connection.
"""
type UserInterviewDatumEdge {
  """
  The item at the end of the edge.
  """
  node: UserInterviewDatum!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum UserInterviewDatumOrderByInput {
  id_ASC
  id_DESC
  answerRange_ASC
  answerRange_DESC
  answerText_ASC
  answerText_DESC
  answerYn_ASC
  answerYn_DESC
  date_ASC
  date_DESC
}

type UserInterviewDatumPreviousValues {
  id: Int!
  answerRange: Int
  answerText: String
  answerYn: Boolean
  date: DateTime!
}

input UserInterviewDatumScalarWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [UserInterviewDatumScalarWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [UserInterviewDatumScalarWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [UserInterviewDatumScalarWhereInput!]
  id: Int
  """
  All values that are not equal to given value.
  """
  id_not: Int
  """
  All values that are contained in given list.
  """
  id_in: [Int!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [Int!]
  """
  All values less than the given value.
  """
  id_lt: Int
  """
  All values less than or equal the given value.
  """
  id_lte: Int
  """
  All values greater than the given value.
  """
  id_gt: Int
  """
  All values greater than or equal the given value.
  """
  id_gte: Int
  answerRange: Int
  """
  All values that are not equal to given value.
  """
  answerRange_not: Int
  """
  All values that are contained in given list.
  """
  answerRange_in: [Int!]
  """
  All values that are not contained in given list.
  """
  answerRange_not_in: [Int!]
  """
  All values less than the given value.
  """
  answerRange_lt: Int
  """
  All values less than or equal the given value.
  """
  answerRange_lte: Int
  """
  All values greater than the given value.
  """
  answerRange_gt: Int
  """
  All values greater than or equal the given value.
  """
  answerRange_gte: Int
  answerText: String
  """
  All values that are not equal to given value.
  """
  answerText_not: String
  """
  All values that are contained in given list.
  """
  answerText_in: [String!]
  """
  All values that are not contained in given list.
  """
  answerText_not_in: [String!]
  """
  All values less than the given value.
  """
  answerText_lt: String
  """
  All values less than or equal the given value.
  """
  answerText_lte: String
  """
  All values greater than the given value.
  """
  answerText_gt: String
  """
  All values greater than or equal the given value.
  """
  answerText_gte: String
  """
  All values containing the given string.
  """
  answerText_contains: String
  """
  All values not containing the given string.
  """
  answerText_not_contains: String
  """
  All values starting with the given string.
  """
  answerText_starts_with: String
  """
  All values not starting with the given string.
  """
  answerText_not_starts_with: String
  """
  All values ending with the given string.
  """
  answerText_ends_with: String
  """
  All values not ending with the given string.
  """
  answerText_not_ends_with: String
  answerYn: Boolean
  """
  All values that are not equal to given value.
  """
  answerYn_not: Boolean
  date: DateTime
  """
  All values that are not equal to given value.
  """
  date_not: DateTime
  """
  All values that are contained in given list.
  """
  date_in: [DateTime!]
  """
  All values that are not contained in given list.
  """
  date_not_in: [DateTime!]
  """
  All values less than the given value.
  """
  date_lt: DateTime
  """
  All values less than or equal the given value.
  """
  date_lte: DateTime
  """
  All values greater than the given value.
  """
  date_gt: DateTime
  """
  All values greater than or equal the given value.
  """
  date_gte: DateTime
}

type UserInterviewDatumSubscriptionPayload {
  mutation: MutationType!
  node: UserInterviewDatum
  updatedFields: [String!]
  previousValues: UserInterviewDatumPreviousValues
}

input UserInterviewDatumSubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [UserInterviewDatumSubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [UserInterviewDatumSubscriptionWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [UserInterviewDatumSubscriptionWhereInput!]
  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]
  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String
  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]
  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: UserInterviewDatumWhereInput
}

input UserInterviewDatumUpdateInput {
  answerRange: Int
  answerText: String
  answerYn: Boolean
  date: DateTime
  questionId: UserInterviewQuestionUpdateOneRequiredWithoutUserInterviewDataInput
  userId: UserUpdateOneRequiredWithoutUserInterviewDataInput
}

input UserInterviewDatumUpdateManyDataInput {
  answerRange: Int
  answerText: String
  answerYn: Boolean
  date: DateTime
}

input UserInterviewDatumUpdateManyMutationInput {
  answerRange: Int
  answerText: String
  answerYn: Boolean
  date: DateTime
}

input UserInterviewDatumUpdateManyWithoutQuestionIdInput {
  create: [UserInterviewDatumCreateWithoutQuestionIdInput!]
  connect: [UserInterviewDatumWhereUniqueInput!]
  set: [UserInterviewDatumWhereUniqueInput!]
  disconnect: [UserInterviewDatumWhereUniqueInput!]
  delete: [UserInterviewDatumWhereUniqueInput!]
  update: [UserInterviewDatumUpdateWithWhereUniqueWithoutQuestionIdInput!]
  updateMany: [UserInterviewDatumUpdateManyWithWhereNestedInput!]
  deleteMany: [UserInterviewDatumScalarWhereInput!]
  upsert: [UserInterviewDatumUpsertWithWhereUniqueWithoutQuestionIdInput!]
}

input UserInterviewDatumUpdateManyWithoutUserIdInput {
  create: [UserInterviewDatumCreateWithoutUserIdInput!]
  connect: [UserInterviewDatumWhereUniqueInput!]
  set: [UserInterviewDatumWhereUniqueInput!]
  disconnect: [UserInterviewDatumWhereUniqueInput!]
  delete: [UserInterviewDatumWhereUniqueInput!]
  update: [UserInterviewDatumUpdateWithWhereUniqueWithoutUserIdInput!]
  updateMany: [UserInterviewDatumUpdateManyWithWhereNestedInput!]
  deleteMany: [UserInterviewDatumScalarWhereInput!]
  upsert: [UserInterviewDatumUpsertWithWhereUniqueWithoutUserIdInput!]
}

input UserInterviewDatumUpdateManyWithWhereNestedInput {
  where: UserInterviewDatumScalarWhereInput!
  data: UserInterviewDatumUpdateManyDataInput!
}

input UserInterviewDatumUpdateWithoutQuestionIdDataInput {
  answerRange: Int
  answerText: String
  answerYn: Boolean
  date: DateTime
  userId: UserUpdateOneRequiredWithoutUserInterviewDataInput
}

input UserInterviewDatumUpdateWithoutUserIdDataInput {
  answerRange: Int
  answerText: String
  answerYn: Boolean
  date: DateTime
  questionId: UserInterviewQuestionUpdateOneRequiredWithoutUserInterviewDataInput
}

input UserInterviewDatumUpdateWithWhereUniqueWithoutQuestionIdInput {
  where: UserInterviewDatumWhereUniqueInput!
  data: UserInterviewDatumUpdateWithoutQuestionIdDataInput!
}

input UserInterviewDatumUpdateWithWhereUniqueWithoutUserIdInput {
  where: UserInterviewDatumWhereUniqueInput!
  data: UserInterviewDatumUpdateWithoutUserIdDataInput!
}

input UserInterviewDatumUpsertWithWhereUniqueWithoutQuestionIdInput {
  where: UserInterviewDatumWhereUniqueInput!
  update: UserInterviewDatumUpdateWithoutQuestionIdDataInput!
  create: UserInterviewDatumCreateWithoutQuestionIdInput!
}

input UserInterviewDatumUpsertWithWhereUniqueWithoutUserIdInput {
  where: UserInterviewDatumWhereUniqueInput!
  update: UserInterviewDatumUpdateWithoutUserIdDataInput!
  create: UserInterviewDatumCreateWithoutUserIdInput!
}

input UserInterviewDatumWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [UserInterviewDatumWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [UserInterviewDatumWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [UserInterviewDatumWhereInput!]
  id: Int
  """
  All values that are not equal to given value.
  """
  id_not: Int
  """
  All values that are contained in given list.
  """
  id_in: [Int!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [Int!]
  """
  All values less than the given value.
  """
  id_lt: Int
  """
  All values less than or equal the given value.
  """
  id_lte: Int
  """
  All values greater than the given value.
  """
  id_gt: Int
  """
  All values greater than or equal the given value.
  """
  id_gte: Int
  answerRange: Int
  """
  All values that are not equal to given value.
  """
  answerRange_not: Int
  """
  All values that are contained in given list.
  """
  answerRange_in: [Int!]
  """
  All values that are not contained in given list.
  """
  answerRange_not_in: [Int!]
  """
  All values less than the given value.
  """
  answerRange_lt: Int
  """
  All values less than or equal the given value.
  """
  answerRange_lte: Int
  """
  All values greater than the given value.
  """
  answerRange_gt: Int
  """
  All values greater than or equal the given value.
  """
  answerRange_gte: Int
  answerText: String
  """
  All values that are not equal to given value.
  """
  answerText_not: String
  """
  All values that are contained in given list.
  """
  answerText_in: [String!]
  """
  All values that are not contained in given list.
  """
  answerText_not_in: [String!]
  """
  All values less than the given value.
  """
  answerText_lt: String
  """
  All values less than or equal the given value.
  """
  answerText_lte: String
  """
  All values greater than the given value.
  """
  answerText_gt: String
  """
  All values greater than or equal the given value.
  """
  answerText_gte: String
  """
  All values containing the given string.
  """
  answerText_contains: String
  """
  All values not containing the given string.
  """
  answerText_not_contains: String
  """
  All values starting with the given string.
  """
  answerText_starts_with: String
  """
  All values not starting with the given string.
  """
  answerText_not_starts_with: String
  """
  All values ending with the given string.
  """
  answerText_ends_with: String
  """
  All values not ending with the given string.
  """
  answerText_not_ends_with: String
  answerYn: Boolean
  """
  All values that are not equal to given value.
  """
  answerYn_not: Boolean
  date: DateTime
  """
  All values that are not equal to given value.
  """
  date_not: DateTime
  """
  All values that are contained in given list.
  """
  date_in: [DateTime!]
  """
  All values that are not contained in given list.
  """
  date_not_in: [DateTime!]
  """
  All values less than the given value.
  """
  date_lt: DateTime
  """
  All values less than or equal the given value.
  """
  date_lte: DateTime
  """
  All values greater than the given value.
  """
  date_gt: DateTime
  """
  All values greater than or equal the given value.
  """
  date_gte: DateTime
  questionId: UserInterviewQuestionWhereInput
  userId: UserWhereInput
}

input UserInterviewDatumWhereUniqueInput {
  id: Int
}

type UserInterviewQuestion {
  id: Int!
  answerTypeId: AnswerType!
  question: String!
  userInterviewData(where: UserInterviewDatumWhereInput, orderBy: UserInterviewDatumOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [UserInterviewDatum!]
}

"""
A connection to a list of items.
"""
type UserInterviewQuestionConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [UserInterviewQuestionEdge]!
  aggregate: AggregateUserInterviewQuestion!
}

input UserInterviewQuestionCreateInput {
  question: String!
  answerTypeId: AnswerTypeCreateOneWithoutUserInterviewQuestionsInput!
  userInterviewData: UserInterviewDatumCreateManyWithoutQuestionIdInput
}

input UserInterviewQuestionCreateManyWithoutAnswerTypeIdInput {
  create: [UserInterviewQuestionCreateWithoutAnswerTypeIdInput!]
  connect: [UserInterviewQuestionWhereUniqueInput!]
}

input UserInterviewQuestionCreateOneWithoutUserInterviewDataInput {
  create: UserInterviewQuestionCreateWithoutUserInterviewDataInput
  connect: UserInterviewQuestionWhereUniqueInput
}

input UserInterviewQuestionCreateWithoutAnswerTypeIdInput {
  question: String!
  userInterviewData: UserInterviewDatumCreateManyWithoutQuestionIdInput
}

input UserInterviewQuestionCreateWithoutUserInterviewDataInput {
  question: String!
  answerTypeId: AnswerTypeCreateOneWithoutUserInterviewQuestionsInput!
}

"""
An edge in a connection.
"""
type UserInterviewQuestionEdge {
  """
  The item at the end of the edge.
  """
  node: UserInterviewQuestion!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum UserInterviewQuestionOrderByInput {
  id_ASC
  id_DESC
  question_ASC
  question_DESC
}

type UserInterviewQuestionPreviousValues {
  id: Int!
  question: String!
}

input UserInterviewQuestionScalarWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [UserInterviewQuestionScalarWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [UserInterviewQuestionScalarWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [UserInterviewQuestionScalarWhereInput!]
  id: Int
  """
  All values that are not equal to given value.
  """
  id_not: Int
  """
  All values that are contained in given list.
  """
  id_in: [Int!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [Int!]
  """
  All values less than the given value.
  """
  id_lt: Int
  """
  All values less than or equal the given value.
  """
  id_lte: Int
  """
  All values greater than the given value.
  """
  id_gt: Int
  """
  All values greater than or equal the given value.
  """
  id_gte: Int
  question: String
  """
  All values that are not equal to given value.
  """
  question_not: String
  """
  All values that are contained in given list.
  """
  question_in: [String!]
  """
  All values that are not contained in given list.
  """
  question_not_in: [String!]
  """
  All values less than the given value.
  """
  question_lt: String
  """
  All values less than or equal the given value.
  """
  question_lte: String
  """
  All values greater than the given value.
  """
  question_gt: String
  """
  All values greater than or equal the given value.
  """
  question_gte: String
  """
  All values containing the given string.
  """
  question_contains: String
  """
  All values not containing the given string.
  """
  question_not_contains: String
  """
  All values starting with the given string.
  """
  question_starts_with: String
  """
  All values not starting with the given string.
  """
  question_not_starts_with: String
  """
  All values ending with the given string.
  """
  question_ends_with: String
  """
  All values not ending with the given string.
  """
  question_not_ends_with: String
}

type UserInterviewQuestionSubscriptionPayload {
  mutation: MutationType!
  node: UserInterviewQuestion
  updatedFields: [String!]
  previousValues: UserInterviewQuestionPreviousValues
}

input UserInterviewQuestionSubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [UserInterviewQuestionSubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [UserInterviewQuestionSubscriptionWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [UserInterviewQuestionSubscriptionWhereInput!]
  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]
  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String
  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]
  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: UserInterviewQuestionWhereInput
}

input UserInterviewQuestionUpdateInput {
  question: String
  answerTypeId: AnswerTypeUpdateOneRequiredWithoutUserInterviewQuestionsInput
  userInterviewData: UserInterviewDatumUpdateManyWithoutQuestionIdInput
}

input UserInterviewQuestionUpdateManyDataInput {
  question: String
}

input UserInterviewQuestionUpdateManyMutationInput {
  question: String
}

input UserInterviewQuestionUpdateManyWithoutAnswerTypeIdInput {
  create: [UserInterviewQuestionCreateWithoutAnswerTypeIdInput!]
  connect: [UserInterviewQuestionWhereUniqueInput!]
  set: [UserInterviewQuestionWhereUniqueInput!]
  disconnect: [UserInterviewQuestionWhereUniqueInput!]
  delete: [UserInterviewQuestionWhereUniqueInput!]
  update: [UserInterviewQuestionUpdateWithWhereUniqueWithoutAnswerTypeIdInput!]
  updateMany: [UserInterviewQuestionUpdateManyWithWhereNestedInput!]
  deleteMany: [UserInterviewQuestionScalarWhereInput!]
  upsert: [UserInterviewQuestionUpsertWithWhereUniqueWithoutAnswerTypeIdInput!]
}

input UserInterviewQuestionUpdateManyWithWhereNestedInput {
  where: UserInterviewQuestionScalarWhereInput!
  data: UserInterviewQuestionUpdateManyDataInput!
}

input UserInterviewQuestionUpdateOneRequiredWithoutUserInterviewDataInput {
  create: UserInterviewQuestionCreateWithoutUserInterviewDataInput
  connect: UserInterviewQuestionWhereUniqueInput
  update: UserInterviewQuestionUpdateWithoutUserInterviewDataDataInput
  upsert: UserInterviewQuestionUpsertWithoutUserInterviewDataInput
}

input UserInterviewQuestionUpdateWithoutAnswerTypeIdDataInput {
  question: String
  userInterviewData: UserInterviewDatumUpdateManyWithoutQuestionIdInput
}

input UserInterviewQuestionUpdateWithoutUserInterviewDataDataInput {
  question: String
  answerTypeId: AnswerTypeUpdateOneRequiredWithoutUserInterviewQuestionsInput
}

input UserInterviewQuestionUpdateWithWhereUniqueWithoutAnswerTypeIdInput {
  where: UserInterviewQuestionWhereUniqueInput!
  data: UserInterviewQuestionUpdateWithoutAnswerTypeIdDataInput!
}

input UserInterviewQuestionUpsertWithoutUserInterviewDataInput {
  update: UserInterviewQuestionUpdateWithoutUserInterviewDataDataInput!
  create: UserInterviewQuestionCreateWithoutUserInterviewDataInput!
}

input UserInterviewQuestionUpsertWithWhereUniqueWithoutAnswerTypeIdInput {
  where: UserInterviewQuestionWhereUniqueInput!
  update: UserInterviewQuestionUpdateWithoutAnswerTypeIdDataInput!
  create: UserInterviewQuestionCreateWithoutAnswerTypeIdInput!
}

input UserInterviewQuestionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [UserInterviewQuestionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [UserInterviewQuestionWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [UserInterviewQuestionWhereInput!]
  id: Int
  """
  All values that are not equal to given value.
  """
  id_not: Int
  """
  All values that are contained in given list.
  """
  id_in: [Int!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [Int!]
  """
  All values less than the given value.
  """
  id_lt: Int
  """
  All values less than or equal the given value.
  """
  id_lte: Int
  """
  All values greater than the given value.
  """
  id_gt: Int
  """
  All values greater than or equal the given value.
  """
  id_gte: Int
  question: String
  """
  All values that are not equal to given value.
  """
  question_not: String
  """
  All values that are contained in given list.
  """
  question_in: [String!]
  """
  All values that are not contained in given list.
  """
  question_not_in: [String!]
  """
  All values less than the given value.
  """
  question_lt: String
  """
  All values less than or equal the given value.
  """
  question_lte: String
  """
  All values greater than the given value.
  """
  question_gt: String
  """
  All values greater than or equal the given value.
  """
  question_gte: String
  """
  All values containing the given string.
  """
  question_contains: String
  """
  All values not containing the given string.
  """
  question_not_contains: String
  """
  All values starting with the given string.
  """
  question_starts_with: String
  """
  All values not starting with the given string.
  """
  question_not_starts_with: String
  """
  All values ending with the given string.
  """
  question_ends_with: String
  """
  All values not ending with the given string.
  """
  question_not_ends_with: String
  answerTypeId: AnswerTypeWhereInput
  userInterviewData_every: UserInterviewDatumWhereInput
  userInterviewData_some: UserInterviewDatumWhereInput
  userInterviewData_none: UserInterviewDatumWhereInput
}

input UserInterviewQuestionWhereUniqueInput {
  id: Int
  question: String
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  anonUserId_ASC
  anonUserId_DESC
  deleted_ASC
  deleted_DESC
  dob_ASC
  dob_DESC
  email_ASC
  email_DESC
  encryptSaltString_ASC
  encryptSaltString_DESC
  firstName_ASC
  firstName_DESC
  givenBirth_ASC
  givenBirth_DESC
  lastName_ASC
  lastName_DESC
  password_ASC
  password_DESC
}

type UserPreviousValues {
  id: Int!
  anonUserId: Int
  deleted: Boolean!
  dob: DateTime!
  email: String!
  encryptSaltString: String
  firstName: String!
  givenBirth: Boolean!
  lastName: String!
  password: String!
}

type UserRecordDataByDay {
  id: Int!
  crampsLevel: Int
  recordDate: DateTime!
  recordPeriodRowId: UserRecordDataByPeriod
  userRecordDataByTime(where: UserRecordDataByTimeWhereInput, orderBy: UserRecordDataByTimeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [UserRecordDataByTime!]
}

"""
A connection to a list of items.
"""
type UserRecordDataByDayConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [UserRecordDataByDayEdge]!
  aggregate: AggregateUserRecordDataByDay!
}

input UserRecordDataByDayCreateInput {
  crampsLevel: Int
  recordDate: DateTime!
  recordPeriodRowId: UserRecordDataByPeriodCreateOneWithoutUserRecordDataByDayInput
  userRecordDataByTime: UserRecordDataByTimeCreateManyWithoutRecordDayRowIdInput
}

input UserRecordDataByDayCreateManyWithoutRecordPeriodRowIdInput {
  create: [UserRecordDataByDayCreateWithoutRecordPeriodRowIdInput!]
  connect: [UserRecordDataByDayWhereUniqueInput!]
}

input UserRecordDataByDayCreateOneWithoutUserRecordDataByTimeInput {
  create: UserRecordDataByDayCreateWithoutUserRecordDataByTimeInput
  connect: UserRecordDataByDayWhereUniqueInput
}

input UserRecordDataByDayCreateWithoutRecordPeriodRowIdInput {
  crampsLevel: Int
  recordDate: DateTime!
  userRecordDataByTime: UserRecordDataByTimeCreateManyWithoutRecordDayRowIdInput
}

input UserRecordDataByDayCreateWithoutUserRecordDataByTimeInput {
  crampsLevel: Int
  recordDate: DateTime!
  recordPeriodRowId: UserRecordDataByPeriodCreateOneWithoutUserRecordDataByDayInput
}

"""
An edge in a connection.
"""
type UserRecordDataByDayEdge {
  """
  The item at the end of the edge.
  """
  node: UserRecordDataByDay!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum UserRecordDataByDayOrderByInput {
  id_ASC
  id_DESC
  crampsLevel_ASC
  crampsLevel_DESC
  recordDate_ASC
  recordDate_DESC
}

type UserRecordDataByDayPreviousValues {
  id: Int!
  crampsLevel: Int
  recordDate: DateTime!
}

input UserRecordDataByDayScalarWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [UserRecordDataByDayScalarWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [UserRecordDataByDayScalarWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [UserRecordDataByDayScalarWhereInput!]
  id: Int
  """
  All values that are not equal to given value.
  """
  id_not: Int
  """
  All values that are contained in given list.
  """
  id_in: [Int!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [Int!]
  """
  All values less than the given value.
  """
  id_lt: Int
  """
  All values less than or equal the given value.
  """
  id_lte: Int
  """
  All values greater than the given value.
  """
  id_gt: Int
  """
  All values greater than or equal the given value.
  """
  id_gte: Int
  crampsLevel: Int
  """
  All values that are not equal to given value.
  """
  crampsLevel_not: Int
  """
  All values that are contained in given list.
  """
  crampsLevel_in: [Int!]
  """
  All values that are not contained in given list.
  """
  crampsLevel_not_in: [Int!]
  """
  All values less than the given value.
  """
  crampsLevel_lt: Int
  """
  All values less than or equal the given value.
  """
  crampsLevel_lte: Int
  """
  All values greater than the given value.
  """
  crampsLevel_gt: Int
  """
  All values greater than or equal the given value.
  """
  crampsLevel_gte: Int
  recordDate: DateTime
  """
  All values that are not equal to given value.
  """
  recordDate_not: DateTime
  """
  All values that are contained in given list.
  """
  recordDate_in: [DateTime!]
  """
  All values that are not contained in given list.
  """
  recordDate_not_in: [DateTime!]
  """
  All values less than the given value.
  """
  recordDate_lt: DateTime
  """
  All values less than or equal the given value.
  """
  recordDate_lte: DateTime
  """
  All values greater than the given value.
  """
  recordDate_gt: DateTime
  """
  All values greater than or equal the given value.
  """
  recordDate_gte: DateTime
}

type UserRecordDataByDaySubscriptionPayload {
  mutation: MutationType!
  node: UserRecordDataByDay
  updatedFields: [String!]
  previousValues: UserRecordDataByDayPreviousValues
}

input UserRecordDataByDaySubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [UserRecordDataByDaySubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [UserRecordDataByDaySubscriptionWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [UserRecordDataByDaySubscriptionWhereInput!]
  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]
  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String
  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]
  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: UserRecordDataByDayWhereInput
}

input UserRecordDataByDayUpdateInput {
  crampsLevel: Int
  recordDate: DateTime
  recordPeriodRowId: UserRecordDataByPeriodUpdateOneWithoutUserRecordDataByDayInput
  userRecordDataByTime: UserRecordDataByTimeUpdateManyWithoutRecordDayRowIdInput
}

input UserRecordDataByDayUpdateManyDataInput {
  crampsLevel: Int
  recordDate: DateTime
}

input UserRecordDataByDayUpdateManyMutationInput {
  crampsLevel: Int
  recordDate: DateTime
}

input UserRecordDataByDayUpdateManyWithoutRecordPeriodRowIdInput {
  create: [UserRecordDataByDayCreateWithoutRecordPeriodRowIdInput!]
  connect: [UserRecordDataByDayWhereUniqueInput!]
  set: [UserRecordDataByDayWhereUniqueInput!]
  disconnect: [UserRecordDataByDayWhereUniqueInput!]
  delete: [UserRecordDataByDayWhereUniqueInput!]
  update: [UserRecordDataByDayUpdateWithWhereUniqueWithoutRecordPeriodRowIdInput!]
  updateMany: [UserRecordDataByDayUpdateManyWithWhereNestedInput!]
  deleteMany: [UserRecordDataByDayScalarWhereInput!]
  upsert: [UserRecordDataByDayUpsertWithWhereUniqueWithoutRecordPeriodRowIdInput!]
}

input UserRecordDataByDayUpdateManyWithWhereNestedInput {
  where: UserRecordDataByDayScalarWhereInput!
  data: UserRecordDataByDayUpdateManyDataInput!
}

input UserRecordDataByDayUpdateOneWithoutUserRecordDataByTimeInput {
  create: UserRecordDataByDayCreateWithoutUserRecordDataByTimeInput
  connect: UserRecordDataByDayWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: UserRecordDataByDayUpdateWithoutUserRecordDataByTimeDataInput
  upsert: UserRecordDataByDayUpsertWithoutUserRecordDataByTimeInput
}

input UserRecordDataByDayUpdateWithoutRecordPeriodRowIdDataInput {
  crampsLevel: Int
  recordDate: DateTime
  userRecordDataByTime: UserRecordDataByTimeUpdateManyWithoutRecordDayRowIdInput
}

input UserRecordDataByDayUpdateWithoutUserRecordDataByTimeDataInput {
  crampsLevel: Int
  recordDate: DateTime
  recordPeriodRowId: UserRecordDataByPeriodUpdateOneWithoutUserRecordDataByDayInput
}

input UserRecordDataByDayUpdateWithWhereUniqueWithoutRecordPeriodRowIdInput {
  where: UserRecordDataByDayWhereUniqueInput!
  data: UserRecordDataByDayUpdateWithoutRecordPeriodRowIdDataInput!
}

input UserRecordDataByDayUpsertWithoutUserRecordDataByTimeInput {
  update: UserRecordDataByDayUpdateWithoutUserRecordDataByTimeDataInput!
  create: UserRecordDataByDayCreateWithoutUserRecordDataByTimeInput!
}

input UserRecordDataByDayUpsertWithWhereUniqueWithoutRecordPeriodRowIdInput {
  where: UserRecordDataByDayWhereUniqueInput!
  update: UserRecordDataByDayUpdateWithoutRecordPeriodRowIdDataInput!
  create: UserRecordDataByDayCreateWithoutRecordPeriodRowIdInput!
}

input UserRecordDataByDayWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [UserRecordDataByDayWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [UserRecordDataByDayWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [UserRecordDataByDayWhereInput!]
  id: Int
  """
  All values that are not equal to given value.
  """
  id_not: Int
  """
  All values that are contained in given list.
  """
  id_in: [Int!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [Int!]
  """
  All values less than the given value.
  """
  id_lt: Int
  """
  All values less than or equal the given value.
  """
  id_lte: Int
  """
  All values greater than the given value.
  """
  id_gt: Int
  """
  All values greater than or equal the given value.
  """
  id_gte: Int
  crampsLevel: Int
  """
  All values that are not equal to given value.
  """
  crampsLevel_not: Int
  """
  All values that are contained in given list.
  """
  crampsLevel_in: [Int!]
  """
  All values that are not contained in given list.
  """
  crampsLevel_not_in: [Int!]
  """
  All values less than the given value.
  """
  crampsLevel_lt: Int
  """
  All values less than or equal the given value.
  """
  crampsLevel_lte: Int
  """
  All values greater than the given value.
  """
  crampsLevel_gt: Int
  """
  All values greater than or equal the given value.
  """
  crampsLevel_gte: Int
  recordDate: DateTime
  """
  All values that are not equal to given value.
  """
  recordDate_not: DateTime
  """
  All values that are contained in given list.
  """
  recordDate_in: [DateTime!]
  """
  All values that are not contained in given list.
  """
  recordDate_not_in: [DateTime!]
  """
  All values less than the given value.
  """
  recordDate_lt: DateTime
  """
  All values less than or equal the given value.
  """
  recordDate_lte: DateTime
  """
  All values greater than the given value.
  """
  recordDate_gt: DateTime
  """
  All values greater than or equal the given value.
  """
  recordDate_gte: DateTime
  recordPeriodRowId: UserRecordDataByPeriodWhereInput
  userRecordDataByTime_every: UserRecordDataByTimeWhereInput
  userRecordDataByTime_some: UserRecordDataByTimeWhereInput
  userRecordDataByTime_none: UserRecordDataByTimeWhereInput
}

input UserRecordDataByDayWhereUniqueInput {
  id: Int
}

type UserRecordDataByPeriod {
  id: Int!
  coinHistoryRowId: UserCoinHistory
  isTakePill: Boolean
  mensFinish: DateTime!
  mensStart: DateTime!
  userId: User
  userRecordDataByDay(where: UserRecordDataByDayWhereInput, orderBy: UserRecordDataByDayOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [UserRecordDataByDay!]
}

"""
A connection to a list of items.
"""
type UserRecordDataByPeriodConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [UserRecordDataByPeriodEdge]!
  aggregate: AggregateUserRecordDataByPeriod!
}

input UserRecordDataByPeriodCreateInput {
  isTakePill: Boolean
  mensFinish: DateTime!
  mensStart: DateTime!
  coinHistoryRowId: UserCoinHistoryCreateOneWithoutUserRecordDataByPeriodInput
  userId: UserCreateOneWithoutUserRecordDataByPeriodInput
  userRecordDataByDay: UserRecordDataByDayCreateManyWithoutRecordPeriodRowIdInput
}

input UserRecordDataByPeriodCreateManyWithoutCoinHistoryRowIdInput {
  create: [UserRecordDataByPeriodCreateWithoutCoinHistoryRowIdInput!]
  connect: [UserRecordDataByPeriodWhereUniqueInput!]
}

input UserRecordDataByPeriodCreateManyWithoutUserIdInput {
  create: [UserRecordDataByPeriodCreateWithoutUserIdInput!]
  connect: [UserRecordDataByPeriodWhereUniqueInput!]
}

input UserRecordDataByPeriodCreateOneWithoutUserRecordDataByDayInput {
  create: UserRecordDataByPeriodCreateWithoutUserRecordDataByDayInput
  connect: UserRecordDataByPeriodWhereUniqueInput
}

input UserRecordDataByPeriodCreateWithoutCoinHistoryRowIdInput {
  isTakePill: Boolean
  mensFinish: DateTime!
  mensStart: DateTime!
  userId: UserCreateOneWithoutUserRecordDataByPeriodInput
  userRecordDataByDay: UserRecordDataByDayCreateManyWithoutRecordPeriodRowIdInput
}

input UserRecordDataByPeriodCreateWithoutUserIdInput {
  isTakePill: Boolean
  mensFinish: DateTime!
  mensStart: DateTime!
  coinHistoryRowId: UserCoinHistoryCreateOneWithoutUserRecordDataByPeriodInput
  userRecordDataByDay: UserRecordDataByDayCreateManyWithoutRecordPeriodRowIdInput
}

input UserRecordDataByPeriodCreateWithoutUserRecordDataByDayInput {
  isTakePill: Boolean
  mensFinish: DateTime!
  mensStart: DateTime!
  coinHistoryRowId: UserCoinHistoryCreateOneWithoutUserRecordDataByPeriodInput
  userId: UserCreateOneWithoutUserRecordDataByPeriodInput
}

"""
An edge in a connection.
"""
type UserRecordDataByPeriodEdge {
  """
  The item at the end of the edge.
  """
  node: UserRecordDataByPeriod!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum UserRecordDataByPeriodOrderByInput {
  id_ASC
  id_DESC
  isTakePill_ASC
  isTakePill_DESC
  mensFinish_ASC
  mensFinish_DESC
  mensStart_ASC
  mensStart_DESC
}

type UserRecordDataByPeriodPreviousValues {
  id: Int!
  isTakePill: Boolean
  mensFinish: DateTime!
  mensStart: DateTime!
}

input UserRecordDataByPeriodScalarWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [UserRecordDataByPeriodScalarWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [UserRecordDataByPeriodScalarWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [UserRecordDataByPeriodScalarWhereInput!]
  id: Int
  """
  All values that are not equal to given value.
  """
  id_not: Int
  """
  All values that are contained in given list.
  """
  id_in: [Int!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [Int!]
  """
  All values less than the given value.
  """
  id_lt: Int
  """
  All values less than or equal the given value.
  """
  id_lte: Int
  """
  All values greater than the given value.
  """
  id_gt: Int
  """
  All values greater than or equal the given value.
  """
  id_gte: Int
  isTakePill: Boolean
  """
  All values that are not equal to given value.
  """
  isTakePill_not: Boolean
  mensFinish: DateTime
  """
  All values that are not equal to given value.
  """
  mensFinish_not: DateTime
  """
  All values that are contained in given list.
  """
  mensFinish_in: [DateTime!]
  """
  All values that are not contained in given list.
  """
  mensFinish_not_in: [DateTime!]
  """
  All values less than the given value.
  """
  mensFinish_lt: DateTime
  """
  All values less than or equal the given value.
  """
  mensFinish_lte: DateTime
  """
  All values greater than the given value.
  """
  mensFinish_gt: DateTime
  """
  All values greater than or equal the given value.
  """
  mensFinish_gte: DateTime
  mensStart: DateTime
  """
  All values that are not equal to given value.
  """
  mensStart_not: DateTime
  """
  All values that are contained in given list.
  """
  mensStart_in: [DateTime!]
  """
  All values that are not contained in given list.
  """
  mensStart_not_in: [DateTime!]
  """
  All values less than the given value.
  """
  mensStart_lt: DateTime
  """
  All values less than or equal the given value.
  """
  mensStart_lte: DateTime
  """
  All values greater than the given value.
  """
  mensStart_gt: DateTime
  """
  All values greater than or equal the given value.
  """
  mensStart_gte: DateTime
}

type UserRecordDataByPeriodSubscriptionPayload {
  mutation: MutationType!
  node: UserRecordDataByPeriod
  updatedFields: [String!]
  previousValues: UserRecordDataByPeriodPreviousValues
}

input UserRecordDataByPeriodSubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [UserRecordDataByPeriodSubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [UserRecordDataByPeriodSubscriptionWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [UserRecordDataByPeriodSubscriptionWhereInput!]
  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]
  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String
  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]
  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: UserRecordDataByPeriodWhereInput
}

input UserRecordDataByPeriodUpdateInput {
  isTakePill: Boolean
  mensFinish: DateTime
  mensStart: DateTime
  coinHistoryRowId: UserCoinHistoryUpdateOneWithoutUserRecordDataByPeriodInput
  userId: UserUpdateOneWithoutUserRecordDataByPeriodInput
  userRecordDataByDay: UserRecordDataByDayUpdateManyWithoutRecordPeriodRowIdInput
}

input UserRecordDataByPeriodUpdateManyDataInput {
  isTakePill: Boolean
  mensFinish: DateTime
  mensStart: DateTime
}

input UserRecordDataByPeriodUpdateManyMutationInput {
  isTakePill: Boolean
  mensFinish: DateTime
  mensStart: DateTime
}

input UserRecordDataByPeriodUpdateManyWithoutCoinHistoryRowIdInput {
  create: [UserRecordDataByPeriodCreateWithoutCoinHistoryRowIdInput!]
  connect: [UserRecordDataByPeriodWhereUniqueInput!]
  set: [UserRecordDataByPeriodWhereUniqueInput!]
  disconnect: [UserRecordDataByPeriodWhereUniqueInput!]
  delete: [UserRecordDataByPeriodWhereUniqueInput!]
  update: [UserRecordDataByPeriodUpdateWithWhereUniqueWithoutCoinHistoryRowIdInput!]
  updateMany: [UserRecordDataByPeriodUpdateManyWithWhereNestedInput!]
  deleteMany: [UserRecordDataByPeriodScalarWhereInput!]
  upsert: [UserRecordDataByPeriodUpsertWithWhereUniqueWithoutCoinHistoryRowIdInput!]
}

input UserRecordDataByPeriodUpdateManyWithoutUserIdInput {
  create: [UserRecordDataByPeriodCreateWithoutUserIdInput!]
  connect: [UserRecordDataByPeriodWhereUniqueInput!]
  set: [UserRecordDataByPeriodWhereUniqueInput!]
  disconnect: [UserRecordDataByPeriodWhereUniqueInput!]
  delete: [UserRecordDataByPeriodWhereUniqueInput!]
  update: [UserRecordDataByPeriodUpdateWithWhereUniqueWithoutUserIdInput!]
  updateMany: [UserRecordDataByPeriodUpdateManyWithWhereNestedInput!]
  deleteMany: [UserRecordDataByPeriodScalarWhereInput!]
  upsert: [UserRecordDataByPeriodUpsertWithWhereUniqueWithoutUserIdInput!]
}

input UserRecordDataByPeriodUpdateManyWithWhereNestedInput {
  where: UserRecordDataByPeriodScalarWhereInput!
  data: UserRecordDataByPeriodUpdateManyDataInput!
}

input UserRecordDataByPeriodUpdateOneWithoutUserRecordDataByDayInput {
  create: UserRecordDataByPeriodCreateWithoutUserRecordDataByDayInput
  connect: UserRecordDataByPeriodWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: UserRecordDataByPeriodUpdateWithoutUserRecordDataByDayDataInput
  upsert: UserRecordDataByPeriodUpsertWithoutUserRecordDataByDayInput
}

input UserRecordDataByPeriodUpdateWithoutCoinHistoryRowIdDataInput {
  isTakePill: Boolean
  mensFinish: DateTime
  mensStart: DateTime
  userId: UserUpdateOneWithoutUserRecordDataByPeriodInput
  userRecordDataByDay: UserRecordDataByDayUpdateManyWithoutRecordPeriodRowIdInput
}

input UserRecordDataByPeriodUpdateWithoutUserIdDataInput {
  isTakePill: Boolean
  mensFinish: DateTime
  mensStart: DateTime
  coinHistoryRowId: UserCoinHistoryUpdateOneWithoutUserRecordDataByPeriodInput
  userRecordDataByDay: UserRecordDataByDayUpdateManyWithoutRecordPeriodRowIdInput
}

input UserRecordDataByPeriodUpdateWithoutUserRecordDataByDayDataInput {
  isTakePill: Boolean
  mensFinish: DateTime
  mensStart: DateTime
  coinHistoryRowId: UserCoinHistoryUpdateOneWithoutUserRecordDataByPeriodInput
  userId: UserUpdateOneWithoutUserRecordDataByPeriodInput
}

input UserRecordDataByPeriodUpdateWithWhereUniqueWithoutCoinHistoryRowIdInput {
  where: UserRecordDataByPeriodWhereUniqueInput!
  data: UserRecordDataByPeriodUpdateWithoutCoinHistoryRowIdDataInput!
}

input UserRecordDataByPeriodUpdateWithWhereUniqueWithoutUserIdInput {
  where: UserRecordDataByPeriodWhereUniqueInput!
  data: UserRecordDataByPeriodUpdateWithoutUserIdDataInput!
}

input UserRecordDataByPeriodUpsertWithoutUserRecordDataByDayInput {
  update: UserRecordDataByPeriodUpdateWithoutUserRecordDataByDayDataInput!
  create: UserRecordDataByPeriodCreateWithoutUserRecordDataByDayInput!
}

input UserRecordDataByPeriodUpsertWithWhereUniqueWithoutCoinHistoryRowIdInput {
  where: UserRecordDataByPeriodWhereUniqueInput!
  update: UserRecordDataByPeriodUpdateWithoutCoinHistoryRowIdDataInput!
  create: UserRecordDataByPeriodCreateWithoutCoinHistoryRowIdInput!
}

input UserRecordDataByPeriodUpsertWithWhereUniqueWithoutUserIdInput {
  where: UserRecordDataByPeriodWhereUniqueInput!
  update: UserRecordDataByPeriodUpdateWithoutUserIdDataInput!
  create: UserRecordDataByPeriodCreateWithoutUserIdInput!
}

input UserRecordDataByPeriodWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [UserRecordDataByPeriodWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [UserRecordDataByPeriodWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [UserRecordDataByPeriodWhereInput!]
  id: Int
  """
  All values that are not equal to given value.
  """
  id_not: Int
  """
  All values that are contained in given list.
  """
  id_in: [Int!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [Int!]
  """
  All values less than the given value.
  """
  id_lt: Int
  """
  All values less than or equal the given value.
  """
  id_lte: Int
  """
  All values greater than the given value.
  """
  id_gt: Int
  """
  All values greater than or equal the given value.
  """
  id_gte: Int
  isTakePill: Boolean
  """
  All values that are not equal to given value.
  """
  isTakePill_not: Boolean
  mensFinish: DateTime
  """
  All values that are not equal to given value.
  """
  mensFinish_not: DateTime
  """
  All values that are contained in given list.
  """
  mensFinish_in: [DateTime!]
  """
  All values that are not contained in given list.
  """
  mensFinish_not_in: [DateTime!]
  """
  All values less than the given value.
  """
  mensFinish_lt: DateTime
  """
  All values less than or equal the given value.
  """
  mensFinish_lte: DateTime
  """
  All values greater than the given value.
  """
  mensFinish_gt: DateTime
  """
  All values greater than or equal the given value.
  """
  mensFinish_gte: DateTime
  mensStart: DateTime
  """
  All values that are not equal to given value.
  """
  mensStart_not: DateTime
  """
  All values that are contained in given list.
  """
  mensStart_in: [DateTime!]
  """
  All values that are not contained in given list.
  """
  mensStart_not_in: [DateTime!]
  """
  All values less than the given value.
  """
  mensStart_lt: DateTime
  """
  All values less than or equal the given value.
  """
  mensStart_lte: DateTime
  """
  All values greater than the given value.
  """
  mensStart_gt: DateTime
  """
  All values greater than or equal the given value.
  """
  mensStart_gte: DateTime
  coinHistoryRowId: UserCoinHistoryWhereInput
  userId: UserWhereInput
  userRecordDataByDay_every: UserRecordDataByDayWhereInput
  userRecordDataByDay_some: UserRecordDataByDayWhereInput
  userRecordDataByDay_none: UserRecordDataByDayWhereInput
}

input UserRecordDataByPeriodWhereUniqueInput {
  id: Int
}

type UserRecordDataByTime {
  id: Int!
  changeTime: DateTime!
  colorB: Int
  colorG: Int
  colorR: Int
  leakage: String
  recordDayRowId: UserRecordDataByDay
  startTime: DateTime
  volume: Float
}

"""
A connection to a list of items.
"""
type UserRecordDataByTimeConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [UserRecordDataByTimeEdge]!
  aggregate: AggregateUserRecordDataByTime!
}

input UserRecordDataByTimeCreateInput {
  changeTime: DateTime!
  colorB: Int
  colorG: Int
  colorR: Int
  leakage: String
  startTime: DateTime
  volume: Float
  recordDayRowId: UserRecordDataByDayCreateOneWithoutUserRecordDataByTimeInput
}

input UserRecordDataByTimeCreateManyWithoutRecordDayRowIdInput {
  create: [UserRecordDataByTimeCreateWithoutRecordDayRowIdInput!]
  connect: [UserRecordDataByTimeWhereUniqueInput!]
}

input UserRecordDataByTimeCreateWithoutRecordDayRowIdInput {
  changeTime: DateTime!
  colorB: Int
  colorG: Int
  colorR: Int
  leakage: String
  startTime: DateTime
  volume: Float
}

"""
An edge in a connection.
"""
type UserRecordDataByTimeEdge {
  """
  The item at the end of the edge.
  """
  node: UserRecordDataByTime!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum UserRecordDataByTimeOrderByInput {
  id_ASC
  id_DESC
  changeTime_ASC
  changeTime_DESC
  colorB_ASC
  colorB_DESC
  colorG_ASC
  colorG_DESC
  colorR_ASC
  colorR_DESC
  leakage_ASC
  leakage_DESC
  startTime_ASC
  startTime_DESC
  volume_ASC
  volume_DESC
}

type UserRecordDataByTimePreviousValues {
  id: Int!
  changeTime: DateTime!
  colorB: Int
  colorG: Int
  colorR: Int
  leakage: String
  startTime: DateTime
  volume: Float
}

input UserRecordDataByTimeScalarWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [UserRecordDataByTimeScalarWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [UserRecordDataByTimeScalarWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [UserRecordDataByTimeScalarWhereInput!]
  id: Int
  """
  All values that are not equal to given value.
  """
  id_not: Int
  """
  All values that are contained in given list.
  """
  id_in: [Int!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [Int!]
  """
  All values less than the given value.
  """
  id_lt: Int
  """
  All values less than or equal the given value.
  """
  id_lte: Int
  """
  All values greater than the given value.
  """
  id_gt: Int
  """
  All values greater than or equal the given value.
  """
  id_gte: Int
  changeTime: DateTime
  """
  All values that are not equal to given value.
  """
  changeTime_not: DateTime
  """
  All values that are contained in given list.
  """
  changeTime_in: [DateTime!]
  """
  All values that are not contained in given list.
  """
  changeTime_not_in: [DateTime!]
  """
  All values less than the given value.
  """
  changeTime_lt: DateTime
  """
  All values less than or equal the given value.
  """
  changeTime_lte: DateTime
  """
  All values greater than the given value.
  """
  changeTime_gt: DateTime
  """
  All values greater than or equal the given value.
  """
  changeTime_gte: DateTime
  colorB: Int
  """
  All values that are not equal to given value.
  """
  colorB_not: Int
  """
  All values that are contained in given list.
  """
  colorB_in: [Int!]
  """
  All values that are not contained in given list.
  """
  colorB_not_in: [Int!]
  """
  All values less than the given value.
  """
  colorB_lt: Int
  """
  All values less than or equal the given value.
  """
  colorB_lte: Int
  """
  All values greater than the given value.
  """
  colorB_gt: Int
  """
  All values greater than or equal the given value.
  """
  colorB_gte: Int
  colorG: Int
  """
  All values that are not equal to given value.
  """
  colorG_not: Int
  """
  All values that are contained in given list.
  """
  colorG_in: [Int!]
  """
  All values that are not contained in given list.
  """
  colorG_not_in: [Int!]
  """
  All values less than the given value.
  """
  colorG_lt: Int
  """
  All values less than or equal the given value.
  """
  colorG_lte: Int
  """
  All values greater than the given value.
  """
  colorG_gt: Int
  """
  All values greater than or equal the given value.
  """
  colorG_gte: Int
  colorR: Int
  """
  All values that are not equal to given value.
  """
  colorR_not: Int
  """
  All values that are contained in given list.
  """
  colorR_in: [Int!]
  """
  All values that are not contained in given list.
  """
  colorR_not_in: [Int!]
  """
  All values less than the given value.
  """
  colorR_lt: Int
  """
  All values less than or equal the given value.
  """
  colorR_lte: Int
  """
  All values greater than the given value.
  """
  colorR_gt: Int
  """
  All values greater than or equal the given value.
  """
  colorR_gte: Int
  leakage: String
  """
  All values that are not equal to given value.
  """
  leakage_not: String
  """
  All values that are contained in given list.
  """
  leakage_in: [String!]
  """
  All values that are not contained in given list.
  """
  leakage_not_in: [String!]
  """
  All values less than the given value.
  """
  leakage_lt: String
  """
  All values less than or equal the given value.
  """
  leakage_lte: String
  """
  All values greater than the given value.
  """
  leakage_gt: String
  """
  All values greater than or equal the given value.
  """
  leakage_gte: String
  """
  All values containing the given string.
  """
  leakage_contains: String
  """
  All values not containing the given string.
  """
  leakage_not_contains: String
  """
  All values starting with the given string.
  """
  leakage_starts_with: String
  """
  All values not starting with the given string.
  """
  leakage_not_starts_with: String
  """
  All values ending with the given string.
  """
  leakage_ends_with: String
  """
  All values not ending with the given string.
  """
  leakage_not_ends_with: String
  startTime: DateTime
  """
  All values that are not equal to given value.
  """
  startTime_not: DateTime
  """
  All values that are contained in given list.
  """
  startTime_in: [DateTime!]
  """
  All values that are not contained in given list.
  """
  startTime_not_in: [DateTime!]
  """
  All values less than the given value.
  """
  startTime_lt: DateTime
  """
  All values less than or equal the given value.
  """
  startTime_lte: DateTime
  """
  All values greater than the given value.
  """
  startTime_gt: DateTime
  """
  All values greater than or equal the given value.
  """
  startTime_gte: DateTime
  volume: Float
  """
  All values that are not equal to given value.
  """
  volume_not: Float
  """
  All values that are contained in given list.
  """
  volume_in: [Float!]
  """
  All values that are not contained in given list.
  """
  volume_not_in: [Float!]
  """
  All values less than the given value.
  """
  volume_lt: Float
  """
  All values less than or equal the given value.
  """
  volume_lte: Float
  """
  All values greater than the given value.
  """
  volume_gt: Float
  """
  All values greater than or equal the given value.
  """
  volume_gte: Float
}

type UserRecordDataByTimeSubscriptionPayload {
  mutation: MutationType!
  node: UserRecordDataByTime
  updatedFields: [String!]
  previousValues: UserRecordDataByTimePreviousValues
}

input UserRecordDataByTimeSubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [UserRecordDataByTimeSubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [UserRecordDataByTimeSubscriptionWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [UserRecordDataByTimeSubscriptionWhereInput!]
  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]
  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String
  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]
  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: UserRecordDataByTimeWhereInput
}

input UserRecordDataByTimeUpdateInput {
  changeTime: DateTime
  colorB: Int
  colorG: Int
  colorR: Int
  leakage: String
  startTime: DateTime
  volume: Float
  recordDayRowId: UserRecordDataByDayUpdateOneWithoutUserRecordDataByTimeInput
}

input UserRecordDataByTimeUpdateManyDataInput {
  changeTime: DateTime
  colorB: Int
  colorG: Int
  colorR: Int
  leakage: String
  startTime: DateTime
  volume: Float
}

input UserRecordDataByTimeUpdateManyMutationInput {
  changeTime: DateTime
  colorB: Int
  colorG: Int
  colorR: Int
  leakage: String
  startTime: DateTime
  volume: Float
}

input UserRecordDataByTimeUpdateManyWithoutRecordDayRowIdInput {
  create: [UserRecordDataByTimeCreateWithoutRecordDayRowIdInput!]
  connect: [UserRecordDataByTimeWhereUniqueInput!]
  set: [UserRecordDataByTimeWhereUniqueInput!]
  disconnect: [UserRecordDataByTimeWhereUniqueInput!]
  delete: [UserRecordDataByTimeWhereUniqueInput!]
  update: [UserRecordDataByTimeUpdateWithWhereUniqueWithoutRecordDayRowIdInput!]
  updateMany: [UserRecordDataByTimeUpdateManyWithWhereNestedInput!]
  deleteMany: [UserRecordDataByTimeScalarWhereInput!]
  upsert: [UserRecordDataByTimeUpsertWithWhereUniqueWithoutRecordDayRowIdInput!]
}

input UserRecordDataByTimeUpdateManyWithWhereNestedInput {
  where: UserRecordDataByTimeScalarWhereInput!
  data: UserRecordDataByTimeUpdateManyDataInput!
}

input UserRecordDataByTimeUpdateWithoutRecordDayRowIdDataInput {
  changeTime: DateTime
  colorB: Int
  colorG: Int
  colorR: Int
  leakage: String
  startTime: DateTime
  volume: Float
}

input UserRecordDataByTimeUpdateWithWhereUniqueWithoutRecordDayRowIdInput {
  where: UserRecordDataByTimeWhereUniqueInput!
  data: UserRecordDataByTimeUpdateWithoutRecordDayRowIdDataInput!
}

input UserRecordDataByTimeUpsertWithWhereUniqueWithoutRecordDayRowIdInput {
  where: UserRecordDataByTimeWhereUniqueInput!
  update: UserRecordDataByTimeUpdateWithoutRecordDayRowIdDataInput!
  create: UserRecordDataByTimeCreateWithoutRecordDayRowIdInput!
}

input UserRecordDataByTimeWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [UserRecordDataByTimeWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [UserRecordDataByTimeWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [UserRecordDataByTimeWhereInput!]
  id: Int
  """
  All values that are not equal to given value.
  """
  id_not: Int
  """
  All values that are contained in given list.
  """
  id_in: [Int!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [Int!]
  """
  All values less than the given value.
  """
  id_lt: Int
  """
  All values less than or equal the given value.
  """
  id_lte: Int
  """
  All values greater than the given value.
  """
  id_gt: Int
  """
  All values greater than or equal the given value.
  """
  id_gte: Int
  changeTime: DateTime
  """
  All values that are not equal to given value.
  """
  changeTime_not: DateTime
  """
  All values that are contained in given list.
  """
  changeTime_in: [DateTime!]
  """
  All values that are not contained in given list.
  """
  changeTime_not_in: [DateTime!]
  """
  All values less than the given value.
  """
  changeTime_lt: DateTime
  """
  All values less than or equal the given value.
  """
  changeTime_lte: DateTime
  """
  All values greater than the given value.
  """
  changeTime_gt: DateTime
  """
  All values greater than or equal the given value.
  """
  changeTime_gte: DateTime
  colorB: Int
  """
  All values that are not equal to given value.
  """
  colorB_not: Int
  """
  All values that are contained in given list.
  """
  colorB_in: [Int!]
  """
  All values that are not contained in given list.
  """
  colorB_not_in: [Int!]
  """
  All values less than the given value.
  """
  colorB_lt: Int
  """
  All values less than or equal the given value.
  """
  colorB_lte: Int
  """
  All values greater than the given value.
  """
  colorB_gt: Int
  """
  All values greater than or equal the given value.
  """
  colorB_gte: Int
  colorG: Int
  """
  All values that are not equal to given value.
  """
  colorG_not: Int
  """
  All values that are contained in given list.
  """
  colorG_in: [Int!]
  """
  All values that are not contained in given list.
  """
  colorG_not_in: [Int!]
  """
  All values less than the given value.
  """
  colorG_lt: Int
  """
  All values less than or equal the given value.
  """
  colorG_lte: Int
  """
  All values greater than the given value.
  """
  colorG_gt: Int
  """
  All values greater than or equal the given value.
  """
  colorG_gte: Int
  colorR: Int
  """
  All values that are not equal to given value.
  """
  colorR_not: Int
  """
  All values that are contained in given list.
  """
  colorR_in: [Int!]
  """
  All values that are not contained in given list.
  """
  colorR_not_in: [Int!]
  """
  All values less than the given value.
  """
  colorR_lt: Int
  """
  All values less than or equal the given value.
  """
  colorR_lte: Int
  """
  All values greater than the given value.
  """
  colorR_gt: Int
  """
  All values greater than or equal the given value.
  """
  colorR_gte: Int
  leakage: String
  """
  All values that are not equal to given value.
  """
  leakage_not: String
  """
  All values that are contained in given list.
  """
  leakage_in: [String!]
  """
  All values that are not contained in given list.
  """
  leakage_not_in: [String!]
  """
  All values less than the given value.
  """
  leakage_lt: String
  """
  All values less than or equal the given value.
  """
  leakage_lte: String
  """
  All values greater than the given value.
  """
  leakage_gt: String
  """
  All values greater than or equal the given value.
  """
  leakage_gte: String
  """
  All values containing the given string.
  """
  leakage_contains: String
  """
  All values not containing the given string.
  """
  leakage_not_contains: String
  """
  All values starting with the given string.
  """
  leakage_starts_with: String
  """
  All values not starting with the given string.
  """
  leakage_not_starts_with: String
  """
  All values ending with the given string.
  """
  leakage_ends_with: String
  """
  All values not ending with the given string.
  """
  leakage_not_ends_with: String
  startTime: DateTime
  """
  All values that are not equal to given value.
  """
  startTime_not: DateTime
  """
  All values that are contained in given list.
  """
  startTime_in: [DateTime!]
  """
  All values that are not contained in given list.
  """
  startTime_not_in: [DateTime!]
  """
  All values less than the given value.
  """
  startTime_lt: DateTime
  """
  All values less than or equal the given value.
  """
  startTime_lte: DateTime
  """
  All values greater than the given value.
  """
  startTime_gt: DateTime
  """
  All values greater than or equal the given value.
  """
  startTime_gte: DateTime
  volume: Float
  """
  All values that are not equal to given value.
  """
  volume_not: Float
  """
  All values that are contained in given list.
  """
  volume_in: [Float!]
  """
  All values that are not contained in given list.
  """
  volume_not_in: [Float!]
  """
  All values less than the given value.
  """
  volume_lt: Float
  """
  All values less than or equal the given value.
  """
  volume_lte: Float
  """
  All values greater than the given value.
  """
  volume_gt: Float
  """
  All values greater than or equal the given value.
  """
  volume_gte: Float
  recordDayRowId: UserRecordDataByDayWhereInput
}

input UserRecordDataByTimeWhereUniqueInput {
  id: Int
}

input UserScalarWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [UserScalarWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [UserScalarWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [UserScalarWhereInput!]
  id: Int
  """
  All values that are not equal to given value.
  """
  id_not: Int
  """
  All values that are contained in given list.
  """
  id_in: [Int!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [Int!]
  """
  All values less than the given value.
  """
  id_lt: Int
  """
  All values less than or equal the given value.
  """
  id_lte: Int
  """
  All values greater than the given value.
  """
  id_gt: Int
  """
  All values greater than or equal the given value.
  """
  id_gte: Int
  anonUserId: Int
  """
  All values that are not equal to given value.
  """
  anonUserId_not: Int
  """
  All values that are contained in given list.
  """
  anonUserId_in: [Int!]
  """
  All values that are not contained in given list.
  """
  anonUserId_not_in: [Int!]
  """
  All values less than the given value.
  """
  anonUserId_lt: Int
  """
  All values less than or equal the given value.
  """
  anonUserId_lte: Int
  """
  All values greater than the given value.
  """
  anonUserId_gt: Int
  """
  All values greater than or equal the given value.
  """
  anonUserId_gte: Int
  deleted: Boolean
  """
  All values that are not equal to given value.
  """
  deleted_not: Boolean
  dob: DateTime
  """
  All values that are not equal to given value.
  """
  dob_not: DateTime
  """
  All values that are contained in given list.
  """
  dob_in: [DateTime!]
  """
  All values that are not contained in given list.
  """
  dob_not_in: [DateTime!]
  """
  All values less than the given value.
  """
  dob_lt: DateTime
  """
  All values less than or equal the given value.
  """
  dob_lte: DateTime
  """
  All values greater than the given value.
  """
  dob_gt: DateTime
  """
  All values greater than or equal the given value.
  """
  dob_gte: DateTime
  email: String
  """
  All values that are not equal to given value.
  """
  email_not: String
  """
  All values that are contained in given list.
  """
  email_in: [String!]
  """
  All values that are not contained in given list.
  """
  email_not_in: [String!]
  """
  All values less than the given value.
  """
  email_lt: String
  """
  All values less than or equal the given value.
  """
  email_lte: String
  """
  All values greater than the given value.
  """
  email_gt: String
  """
  All values greater than or equal the given value.
  """
  email_gte: String
  """
  All values containing the given string.
  """
  email_contains: String
  """
  All values not containing the given string.
  """
  email_not_contains: String
  """
  All values starting with the given string.
  """
  email_starts_with: String
  """
  All values not starting with the given string.
  """
  email_not_starts_with: String
  """
  All values ending with the given string.
  """
  email_ends_with: String
  """
  All values not ending with the given string.
  """
  email_not_ends_with: String
  encryptSaltString: String
  """
  All values that are not equal to given value.
  """
  encryptSaltString_not: String
  """
  All values that are contained in given list.
  """
  encryptSaltString_in: [String!]
  """
  All values that are not contained in given list.
  """
  encryptSaltString_not_in: [String!]
  """
  All values less than the given value.
  """
  encryptSaltString_lt: String
  """
  All values less than or equal the given value.
  """
  encryptSaltString_lte: String
  """
  All values greater than the given value.
  """
  encryptSaltString_gt: String
  """
  All values greater than or equal the given value.
  """
  encryptSaltString_gte: String
  """
  All values containing the given string.
  """
  encryptSaltString_contains: String
  """
  All values not containing the given string.
  """
  encryptSaltString_not_contains: String
  """
  All values starting with the given string.
  """
  encryptSaltString_starts_with: String
  """
  All values not starting with the given string.
  """
  encryptSaltString_not_starts_with: String
  """
  All values ending with the given string.
  """
  encryptSaltString_ends_with: String
  """
  All values not ending with the given string.
  """
  encryptSaltString_not_ends_with: String
  firstName: String
  """
  All values that are not equal to given value.
  """
  firstName_not: String
  """
  All values that are contained in given list.
  """
  firstName_in: [String!]
  """
  All values that are not contained in given list.
  """
  firstName_not_in: [String!]
  """
  All values less than the given value.
  """
  firstName_lt: String
  """
  All values less than or equal the given value.
  """
  firstName_lte: String
  """
  All values greater than the given value.
  """
  firstName_gt: String
  """
  All values greater than or equal the given value.
  """
  firstName_gte: String
  """
  All values containing the given string.
  """
  firstName_contains: String
  """
  All values not containing the given string.
  """
  firstName_not_contains: String
  """
  All values starting with the given string.
  """
  firstName_starts_with: String
  """
  All values not starting with the given string.
  """
  firstName_not_starts_with: String
  """
  All values ending with the given string.
  """
  firstName_ends_with: String
  """
  All values not ending with the given string.
  """
  firstName_not_ends_with: String
  givenBirth: Boolean
  """
  All values that are not equal to given value.
  """
  givenBirth_not: Boolean
  lastName: String
  """
  All values that are not equal to given value.
  """
  lastName_not: String
  """
  All values that are contained in given list.
  """
  lastName_in: [String!]
  """
  All values that are not contained in given list.
  """
  lastName_not_in: [String!]
  """
  All values less than the given value.
  """
  lastName_lt: String
  """
  All values less than or equal the given value.
  """
  lastName_lte: String
  """
  All values greater than the given value.
  """
  lastName_gt: String
  """
  All values greater than or equal the given value.
  """
  lastName_gte: String
  """
  All values containing the given string.
  """
  lastName_contains: String
  """
  All values not containing the given string.
  """
  lastName_not_contains: String
  """
  All values starting with the given string.
  """
  lastName_starts_with: String
  """
  All values not starting with the given string.
  """
  lastName_not_starts_with: String
  """
  All values ending with the given string.
  """
  lastName_ends_with: String
  """
  All values not ending with the given string.
  """
  lastName_not_ends_with: String
  password: String
  """
  All values that are not equal to given value.
  """
  password_not: String
  """
  All values that are contained in given list.
  """
  password_in: [String!]
  """
  All values that are not contained in given list.
  """
  password_not_in: [String!]
  """
  All values less than the given value.
  """
  password_lt: String
  """
  All values less than or equal the given value.
  """
  password_lte: String
  """
  All values greater than the given value.
  """
  password_gt: String
  """
  All values greater than or equal the given value.
  """
  password_gte: String
  """
  All values containing the given string.
  """
  password_contains: String
  """
  All values not containing the given string.
  """
  password_not_contains: String
  """
  All values starting with the given string.
  """
  password_starts_with: String
  """
  All values not starting with the given string.
  """
  password_not_starts_with: String
  """
  All values ending with the given string.
  """
  password_ends_with: String
  """
  All values not ending with the given string.
  """
  password_not_ends_with: String
}

type UsersDataAnalysis {
  id: Int!
  email: String!
  firstName: String!
  lastName: String!
  password: String!
  userId: String!
}

"""
A connection to a list of items.
"""
type UsersDataAnalysisConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [UsersDataAnalysisEdge]!
  aggregate: AggregateUsersDataAnalysis!
}

input UsersDataAnalysisCreateInput {
  email: String!
  firstName: String!
  lastName: String!
  password: String!
  userId: String!
}

"""
An edge in a connection.
"""
type UsersDataAnalysisEdge {
  """
  The item at the end of the edge.
  """
  node: UsersDataAnalysis!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum UsersDataAnalysisOrderByInput {
  id_ASC
  id_DESC
  email_ASC
  email_DESC
  firstName_ASC
  firstName_DESC
  lastName_ASC
  lastName_DESC
  password_ASC
  password_DESC
  userId_ASC
  userId_DESC
}

type UsersDataAnalysisPreviousValues {
  id: Int!
  email: String!
  firstName: String!
  lastName: String!
  password: String!
  userId: String!
}

type UsersDataAnalysisSubscriptionPayload {
  mutation: MutationType!
  node: UsersDataAnalysis
  updatedFields: [String!]
  previousValues: UsersDataAnalysisPreviousValues
}

input UsersDataAnalysisSubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [UsersDataAnalysisSubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [UsersDataAnalysisSubscriptionWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [UsersDataAnalysisSubscriptionWhereInput!]
  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]
  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String
  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]
  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: UsersDataAnalysisWhereInput
}

input UsersDataAnalysisUpdateInput {
  email: String
  firstName: String
  lastName: String
  password: String
  userId: String
}

input UsersDataAnalysisUpdateManyMutationInput {
  email: String
  firstName: String
  lastName: String
  password: String
  userId: String
}

input UsersDataAnalysisWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [UsersDataAnalysisWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [UsersDataAnalysisWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [UsersDataAnalysisWhereInput!]
  id: Int
  """
  All values that are not equal to given value.
  """
  id_not: Int
  """
  All values that are contained in given list.
  """
  id_in: [Int!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [Int!]
  """
  All values less than the given value.
  """
  id_lt: Int
  """
  All values less than or equal the given value.
  """
  id_lte: Int
  """
  All values greater than the given value.
  """
  id_gt: Int
  """
  All values greater than or equal the given value.
  """
  id_gte: Int
  email: String
  """
  All values that are not equal to given value.
  """
  email_not: String
  """
  All values that are contained in given list.
  """
  email_in: [String!]
  """
  All values that are not contained in given list.
  """
  email_not_in: [String!]
  """
  All values less than the given value.
  """
  email_lt: String
  """
  All values less than or equal the given value.
  """
  email_lte: String
  """
  All values greater than the given value.
  """
  email_gt: String
  """
  All values greater than or equal the given value.
  """
  email_gte: String
  """
  All values containing the given string.
  """
  email_contains: String
  """
  All values not containing the given string.
  """
  email_not_contains: String
  """
  All values starting with the given string.
  """
  email_starts_with: String
  """
  All values not starting with the given string.
  """
  email_not_starts_with: String
  """
  All values ending with the given string.
  """
  email_ends_with: String
  """
  All values not ending with the given string.
  """
  email_not_ends_with: String
  firstName: String
  """
  All values that are not equal to given value.
  """
  firstName_not: String
  """
  All values that are contained in given list.
  """
  firstName_in: [String!]
  """
  All values that are not contained in given list.
  """
  firstName_not_in: [String!]
  """
  All values less than the given value.
  """
  firstName_lt: String
  """
  All values less than or equal the given value.
  """
  firstName_lte: String
  """
  All values greater than the given value.
  """
  firstName_gt: String
  """
  All values greater than or equal the given value.
  """
  firstName_gte: String
  """
  All values containing the given string.
  """
  firstName_contains: String
  """
  All values not containing the given string.
  """
  firstName_not_contains: String
  """
  All values starting with the given string.
  """
  firstName_starts_with: String
  """
  All values not starting with the given string.
  """
  firstName_not_starts_with: String
  """
  All values ending with the given string.
  """
  firstName_ends_with: String
  """
  All values not ending with the given string.
  """
  firstName_not_ends_with: String
  lastName: String
  """
  All values that are not equal to given value.
  """
  lastName_not: String
  """
  All values that are contained in given list.
  """
  lastName_in: [String!]
  """
  All values that are not contained in given list.
  """
  lastName_not_in: [String!]
  """
  All values less than the given value.
  """
  lastName_lt: String
  """
  All values less than or equal the given value.
  """
  lastName_lte: String
  """
  All values greater than the given value.
  """
  lastName_gt: String
  """
  All values greater than or equal the given value.
  """
  lastName_gte: String
  """
  All values containing the given string.
  """
  lastName_contains: String
  """
  All values not containing the given string.
  """
  lastName_not_contains: String
  """
  All values starting with the given string.
  """
  lastName_starts_with: String
  """
  All values not starting with the given string.
  """
  lastName_not_starts_with: String
  """
  All values ending with the given string.
  """
  lastName_ends_with: String
  """
  All values not ending with the given string.
  """
  lastName_not_ends_with: String
  password: String
  """
  All values that are not equal to given value.
  """
  password_not: String
  """
  All values that are contained in given list.
  """
  password_in: [String!]
  """
  All values that are not contained in given list.
  """
  password_not_in: [String!]
  """
  All values less than the given value.
  """
  password_lt: String
  """
  All values less than or equal the given value.
  """
  password_lte: String
  """
  All values greater than the given value.
  """
  password_gt: String
  """
  All values greater than or equal the given value.
  """
  password_gte: String
  """
  All values containing the given string.
  """
  password_contains: String
  """
  All values not containing the given string.
  """
  password_not_contains: String
  """
  All values starting with the given string.
  """
  password_starts_with: String
  """
  All values not starting with the given string.
  """
  password_not_starts_with: String
  """
  All values ending with the given string.
  """
  password_ends_with: String
  """
  All values not ending with the given string.
  """
  password_not_ends_with: String
  userId: String
  """
  All values that are not equal to given value.
  """
  userId_not: String
  """
  All values that are contained in given list.
  """
  userId_in: [String!]
  """
  All values that are not contained in given list.
  """
  userId_not_in: [String!]
  """
  All values less than the given value.
  """
  userId_lt: String
  """
  All values less than or equal the given value.
  """
  userId_lte: String
  """
  All values greater than the given value.
  """
  userId_gt: String
  """
  All values greater than or equal the given value.
  """
  userId_gte: String
  """
  All values containing the given string.
  """
  userId_contains: String
  """
  All values not containing the given string.
  """
  userId_not_contains: String
  """
  All values starting with the given string.
  """
  userId_starts_with: String
  """
  All values not starting with the given string.
  """
  userId_not_starts_with: String
  """
  All values ending with the given string.
  """
  userId_ends_with: String
  """
  All values not ending with the given string.
  """
  userId_not_ends_with: String
}

input UsersDataAnalysisWhereUniqueInput {
  id: Int
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [UserSubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [UserSubscriptionWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [UserSubscriptionWhereInput!]
  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]
  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String
  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]
  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: UserWhereInput
}

input UserUpdateInput {
  anonUserId: Int
  deleted: Boolean
  dob: DateTime
  email: String
  encryptSaltString: String
  firstName: String
  givenBirth: Boolean
  lastName: String
  password: String
  appServerSync: AppServerSyncUpdateManyWithoutUserIdInput
  countryId: CountryUpdateOneWithoutUsersInput
  cupDataProcFlow: CupDataProcFlowUpdateManyWithoutUserIdInput
  cupDataProcMdates: CupDataProcMdateUpdateManyWithoutUserIdInput
  cupDataQaResponse: CupDataQaResponseUpdateManyWithoutUserIdInput
  cupDataUserRemove: CupDataUserRemoveUpdateManyWithoutUserIdInput
  ethnicityId: EthnicityUpdateOneRequiredWithoutUsersInput
  userCoinHistory: UserCoinHistoryUpdateManyWithoutUserIdInput
  userCups: UserCupUpdateManyWithoutUserIdInput
  userInterviewData: UserInterviewDatumUpdateManyWithoutUserIdInput
  userRecordDataByPeriod: UserRecordDataByPeriodUpdateManyWithoutUserIdInput
}

input UserUpdateManyDataInput {
  anonUserId: Int
  deleted: Boolean
  dob: DateTime
  email: String
  encryptSaltString: String
  firstName: String
  givenBirth: Boolean
  lastName: String
  password: String
}

input UserUpdateManyMutationInput {
  anonUserId: Int
  deleted: Boolean
  dob: DateTime
  email: String
  encryptSaltString: String
  firstName: String
  givenBirth: Boolean
  lastName: String
  password: String
}

input UserUpdateManyWithoutCountryIdInput {
  create: [UserCreateWithoutCountryIdInput!]
  connect: [UserWhereUniqueInput!]
  set: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  delete: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutCountryIdInput!]
  updateMany: [UserUpdateManyWithWhereNestedInput!]
  deleteMany: [UserScalarWhereInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutCountryIdInput!]
}

input UserUpdateManyWithoutEthnicityIdInput {
  create: [UserCreateWithoutEthnicityIdInput!]
  connect: [UserWhereUniqueInput!]
  set: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  delete: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutEthnicityIdInput!]
  updateMany: [UserUpdateManyWithWhereNestedInput!]
  deleteMany: [UserScalarWhereInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutEthnicityIdInput!]
}

input UserUpdateManyWithWhereNestedInput {
  where: UserScalarWhereInput!
  data: UserUpdateManyDataInput!
}

input UserUpdateOneRequiredWithoutAppServerSyncInput {
  create: UserCreateWithoutAppServerSyncInput
  connect: UserWhereUniqueInput
  update: UserUpdateWithoutAppServerSyncDataInput
  upsert: UserUpsertWithoutAppServerSyncInput
}

input UserUpdateOneRequiredWithoutCupDataProcFlowInput {
  create: UserCreateWithoutCupDataProcFlowInput
  connect: UserWhereUniqueInput
  update: UserUpdateWithoutCupDataProcFlowDataInput
  upsert: UserUpsertWithoutCupDataProcFlowInput
}

input UserUpdateOneRequiredWithoutCupDataProcMdatesInput {
  create: UserCreateWithoutCupDataProcMdatesInput
  connect: UserWhereUniqueInput
  update: UserUpdateWithoutCupDataProcMdatesDataInput
  upsert: UserUpsertWithoutCupDataProcMdatesInput
}

input UserUpdateOneRequiredWithoutCupDataQaResponseInput {
  create: UserCreateWithoutCupDataQaResponseInput
  connect: UserWhereUniqueInput
  update: UserUpdateWithoutCupDataQaResponseDataInput
  upsert: UserUpsertWithoutCupDataQaResponseInput
}

input UserUpdateOneRequiredWithoutCupDataUserRemoveInput {
  create: UserCreateWithoutCupDataUserRemoveInput
  connect: UserWhereUniqueInput
  update: UserUpdateWithoutCupDataUserRemoveDataInput
  upsert: UserUpsertWithoutCupDataUserRemoveInput
}

input UserUpdateOneRequiredWithoutUserInterviewDataInput {
  create: UserCreateWithoutUserInterviewDataInput
  connect: UserWhereUniqueInput
  update: UserUpdateWithoutUserInterviewDataDataInput
  upsert: UserUpsertWithoutUserInterviewDataInput
}

input UserUpdateOneWithoutUserCoinHistoryInput {
  create: UserCreateWithoutUserCoinHistoryInput
  connect: UserWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: UserUpdateWithoutUserCoinHistoryDataInput
  upsert: UserUpsertWithoutUserCoinHistoryInput
}

input UserUpdateOneWithoutUserCupsInput {
  create: UserCreateWithoutUserCupsInput
  connect: UserWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: UserUpdateWithoutUserCupsDataInput
  upsert: UserUpsertWithoutUserCupsInput
}

input UserUpdateOneWithoutUserRecordDataByPeriodInput {
  create: UserCreateWithoutUserRecordDataByPeriodInput
  connect: UserWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: UserUpdateWithoutUserRecordDataByPeriodDataInput
  upsert: UserUpsertWithoutUserRecordDataByPeriodInput
}

input UserUpdateWithoutAppServerSyncDataInput {
  anonUserId: Int
  deleted: Boolean
  dob: DateTime
  email: String
  encryptSaltString: String
  firstName: String
  givenBirth: Boolean
  lastName: String
  password: String
  countryId: CountryUpdateOneWithoutUsersInput
  cupDataProcFlow: CupDataProcFlowUpdateManyWithoutUserIdInput
  cupDataProcMdates: CupDataProcMdateUpdateManyWithoutUserIdInput
  cupDataQaResponse: CupDataQaResponseUpdateManyWithoutUserIdInput
  cupDataUserRemove: CupDataUserRemoveUpdateManyWithoutUserIdInput
  ethnicityId: EthnicityUpdateOneRequiredWithoutUsersInput
  userCoinHistory: UserCoinHistoryUpdateManyWithoutUserIdInput
  userCups: UserCupUpdateManyWithoutUserIdInput
  userInterviewData: UserInterviewDatumUpdateManyWithoutUserIdInput
  userRecordDataByPeriod: UserRecordDataByPeriodUpdateManyWithoutUserIdInput
}

input UserUpdateWithoutCountryIdDataInput {
  anonUserId: Int
  deleted: Boolean
  dob: DateTime
  email: String
  encryptSaltString: String
  firstName: String
  givenBirth: Boolean
  lastName: String
  password: String
  appServerSync: AppServerSyncUpdateManyWithoutUserIdInput
  cupDataProcFlow: CupDataProcFlowUpdateManyWithoutUserIdInput
  cupDataProcMdates: CupDataProcMdateUpdateManyWithoutUserIdInput
  cupDataQaResponse: CupDataQaResponseUpdateManyWithoutUserIdInput
  cupDataUserRemove: CupDataUserRemoveUpdateManyWithoutUserIdInput
  ethnicityId: EthnicityUpdateOneRequiredWithoutUsersInput
  userCoinHistory: UserCoinHistoryUpdateManyWithoutUserIdInput
  userCups: UserCupUpdateManyWithoutUserIdInput
  userInterviewData: UserInterviewDatumUpdateManyWithoutUserIdInput
  userRecordDataByPeriod: UserRecordDataByPeriodUpdateManyWithoutUserIdInput
}

input UserUpdateWithoutCupDataProcFlowDataInput {
  anonUserId: Int
  deleted: Boolean
  dob: DateTime
  email: String
  encryptSaltString: String
  firstName: String
  givenBirth: Boolean
  lastName: String
  password: String
  appServerSync: AppServerSyncUpdateManyWithoutUserIdInput
  countryId: CountryUpdateOneWithoutUsersInput
  cupDataProcMdates: CupDataProcMdateUpdateManyWithoutUserIdInput
  cupDataQaResponse: CupDataQaResponseUpdateManyWithoutUserIdInput
  cupDataUserRemove: CupDataUserRemoveUpdateManyWithoutUserIdInput
  ethnicityId: EthnicityUpdateOneRequiredWithoutUsersInput
  userCoinHistory: UserCoinHistoryUpdateManyWithoutUserIdInput
  userCups: UserCupUpdateManyWithoutUserIdInput
  userInterviewData: UserInterviewDatumUpdateManyWithoutUserIdInput
  userRecordDataByPeriod: UserRecordDataByPeriodUpdateManyWithoutUserIdInput
}

input UserUpdateWithoutCupDataProcMdatesDataInput {
  anonUserId: Int
  deleted: Boolean
  dob: DateTime
  email: String
  encryptSaltString: String
  firstName: String
  givenBirth: Boolean
  lastName: String
  password: String
  appServerSync: AppServerSyncUpdateManyWithoutUserIdInput
  countryId: CountryUpdateOneWithoutUsersInput
  cupDataProcFlow: CupDataProcFlowUpdateManyWithoutUserIdInput
  cupDataQaResponse: CupDataQaResponseUpdateManyWithoutUserIdInput
  cupDataUserRemove: CupDataUserRemoveUpdateManyWithoutUserIdInput
  ethnicityId: EthnicityUpdateOneRequiredWithoutUsersInput
  userCoinHistory: UserCoinHistoryUpdateManyWithoutUserIdInput
  userCups: UserCupUpdateManyWithoutUserIdInput
  userInterviewData: UserInterviewDatumUpdateManyWithoutUserIdInput
  userRecordDataByPeriod: UserRecordDataByPeriodUpdateManyWithoutUserIdInput
}

input UserUpdateWithoutCupDataQaResponseDataInput {
  anonUserId: Int
  deleted: Boolean
  dob: DateTime
  email: String
  encryptSaltString: String
  firstName: String
  givenBirth: Boolean
  lastName: String
  password: String
  appServerSync: AppServerSyncUpdateManyWithoutUserIdInput
  countryId: CountryUpdateOneWithoutUsersInput
  cupDataProcFlow: CupDataProcFlowUpdateManyWithoutUserIdInput
  cupDataProcMdates: CupDataProcMdateUpdateManyWithoutUserIdInput
  cupDataUserRemove: CupDataUserRemoveUpdateManyWithoutUserIdInput
  ethnicityId: EthnicityUpdateOneRequiredWithoutUsersInput
  userCoinHistory: UserCoinHistoryUpdateManyWithoutUserIdInput
  userCups: UserCupUpdateManyWithoutUserIdInput
  userInterviewData: UserInterviewDatumUpdateManyWithoutUserIdInput
  userRecordDataByPeriod: UserRecordDataByPeriodUpdateManyWithoutUserIdInput
}

input UserUpdateWithoutCupDataUserRemoveDataInput {
  anonUserId: Int
  deleted: Boolean
  dob: DateTime
  email: String
  encryptSaltString: String
  firstName: String
  givenBirth: Boolean
  lastName: String
  password: String
  appServerSync: AppServerSyncUpdateManyWithoutUserIdInput
  countryId: CountryUpdateOneWithoutUsersInput
  cupDataProcFlow: CupDataProcFlowUpdateManyWithoutUserIdInput
  cupDataProcMdates: CupDataProcMdateUpdateManyWithoutUserIdInput
  cupDataQaResponse: CupDataQaResponseUpdateManyWithoutUserIdInput
  ethnicityId: EthnicityUpdateOneRequiredWithoutUsersInput
  userCoinHistory: UserCoinHistoryUpdateManyWithoutUserIdInput
  userCups: UserCupUpdateManyWithoutUserIdInput
  userInterviewData: UserInterviewDatumUpdateManyWithoutUserIdInput
  userRecordDataByPeriod: UserRecordDataByPeriodUpdateManyWithoutUserIdInput
}

input UserUpdateWithoutEthnicityIdDataInput {
  anonUserId: Int
  deleted: Boolean
  dob: DateTime
  email: String
  encryptSaltString: String
  firstName: String
  givenBirth: Boolean
  lastName: String
  password: String
  appServerSync: AppServerSyncUpdateManyWithoutUserIdInput
  countryId: CountryUpdateOneWithoutUsersInput
  cupDataProcFlow: CupDataProcFlowUpdateManyWithoutUserIdInput
  cupDataProcMdates: CupDataProcMdateUpdateManyWithoutUserIdInput
  cupDataQaResponse: CupDataQaResponseUpdateManyWithoutUserIdInput
  cupDataUserRemove: CupDataUserRemoveUpdateManyWithoutUserIdInput
  userCoinHistory: UserCoinHistoryUpdateManyWithoutUserIdInput
  userCups: UserCupUpdateManyWithoutUserIdInput
  userInterviewData: UserInterviewDatumUpdateManyWithoutUserIdInput
  userRecordDataByPeriod: UserRecordDataByPeriodUpdateManyWithoutUserIdInput
}

input UserUpdateWithoutUserCoinHistoryDataInput {
  anonUserId: Int
  deleted: Boolean
  dob: DateTime
  email: String
  encryptSaltString: String
  firstName: String
  givenBirth: Boolean
  lastName: String
  password: String
  appServerSync: AppServerSyncUpdateManyWithoutUserIdInput
  countryId: CountryUpdateOneWithoutUsersInput
  cupDataProcFlow: CupDataProcFlowUpdateManyWithoutUserIdInput
  cupDataProcMdates: CupDataProcMdateUpdateManyWithoutUserIdInput
  cupDataQaResponse: CupDataQaResponseUpdateManyWithoutUserIdInput
  cupDataUserRemove: CupDataUserRemoveUpdateManyWithoutUserIdInput
  ethnicityId: EthnicityUpdateOneRequiredWithoutUsersInput
  userCups: UserCupUpdateManyWithoutUserIdInput
  userInterviewData: UserInterviewDatumUpdateManyWithoutUserIdInput
  userRecordDataByPeriod: UserRecordDataByPeriodUpdateManyWithoutUserIdInput
}

input UserUpdateWithoutUserCupsDataInput {
  anonUserId: Int
  deleted: Boolean
  dob: DateTime
  email: String
  encryptSaltString: String
  firstName: String
  givenBirth: Boolean
  lastName: String
  password: String
  appServerSync: AppServerSyncUpdateManyWithoutUserIdInput
  countryId: CountryUpdateOneWithoutUsersInput
  cupDataProcFlow: CupDataProcFlowUpdateManyWithoutUserIdInput
  cupDataProcMdates: CupDataProcMdateUpdateManyWithoutUserIdInput
  cupDataQaResponse: CupDataQaResponseUpdateManyWithoutUserIdInput
  cupDataUserRemove: CupDataUserRemoveUpdateManyWithoutUserIdInput
  ethnicityId: EthnicityUpdateOneRequiredWithoutUsersInput
  userCoinHistory: UserCoinHistoryUpdateManyWithoutUserIdInput
  userInterviewData: UserInterviewDatumUpdateManyWithoutUserIdInput
  userRecordDataByPeriod: UserRecordDataByPeriodUpdateManyWithoutUserIdInput
}

input UserUpdateWithoutUserInterviewDataDataInput {
  anonUserId: Int
  deleted: Boolean
  dob: DateTime
  email: String
  encryptSaltString: String
  firstName: String
  givenBirth: Boolean
  lastName: String
  password: String
  appServerSync: AppServerSyncUpdateManyWithoutUserIdInput
  countryId: CountryUpdateOneWithoutUsersInput
  cupDataProcFlow: CupDataProcFlowUpdateManyWithoutUserIdInput
  cupDataProcMdates: CupDataProcMdateUpdateManyWithoutUserIdInput
  cupDataQaResponse: CupDataQaResponseUpdateManyWithoutUserIdInput
  cupDataUserRemove: CupDataUserRemoveUpdateManyWithoutUserIdInput
  ethnicityId: EthnicityUpdateOneRequiredWithoutUsersInput
  userCoinHistory: UserCoinHistoryUpdateManyWithoutUserIdInput
  userCups: UserCupUpdateManyWithoutUserIdInput
  userRecordDataByPeriod: UserRecordDataByPeriodUpdateManyWithoutUserIdInput
}

input UserUpdateWithoutUserRecordDataByPeriodDataInput {
  anonUserId: Int
  deleted: Boolean
  dob: DateTime
  email: String
  encryptSaltString: String
  firstName: String
  givenBirth: Boolean
  lastName: String
  password: String
  appServerSync: AppServerSyncUpdateManyWithoutUserIdInput
  countryId: CountryUpdateOneWithoutUsersInput
  cupDataProcFlow: CupDataProcFlowUpdateManyWithoutUserIdInput
  cupDataProcMdates: CupDataProcMdateUpdateManyWithoutUserIdInput
  cupDataQaResponse: CupDataQaResponseUpdateManyWithoutUserIdInput
  cupDataUserRemove: CupDataUserRemoveUpdateManyWithoutUserIdInput
  ethnicityId: EthnicityUpdateOneRequiredWithoutUsersInput
  userCoinHistory: UserCoinHistoryUpdateManyWithoutUserIdInput
  userCups: UserCupUpdateManyWithoutUserIdInput
  userInterviewData: UserInterviewDatumUpdateManyWithoutUserIdInput
}

input UserUpdateWithWhereUniqueWithoutCountryIdInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutCountryIdDataInput!
}

input UserUpdateWithWhereUniqueWithoutEthnicityIdInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutEthnicityIdDataInput!
}

input UserUpsertWithoutAppServerSyncInput {
  update: UserUpdateWithoutAppServerSyncDataInput!
  create: UserCreateWithoutAppServerSyncInput!
}

input UserUpsertWithoutCupDataProcFlowInput {
  update: UserUpdateWithoutCupDataProcFlowDataInput!
  create: UserCreateWithoutCupDataProcFlowInput!
}

input UserUpsertWithoutCupDataProcMdatesInput {
  update: UserUpdateWithoutCupDataProcMdatesDataInput!
  create: UserCreateWithoutCupDataProcMdatesInput!
}

input UserUpsertWithoutCupDataQaResponseInput {
  update: UserUpdateWithoutCupDataQaResponseDataInput!
  create: UserCreateWithoutCupDataQaResponseInput!
}

input UserUpsertWithoutCupDataUserRemoveInput {
  update: UserUpdateWithoutCupDataUserRemoveDataInput!
  create: UserCreateWithoutCupDataUserRemoveInput!
}

input UserUpsertWithoutUserCoinHistoryInput {
  update: UserUpdateWithoutUserCoinHistoryDataInput!
  create: UserCreateWithoutUserCoinHistoryInput!
}

input UserUpsertWithoutUserCupsInput {
  update: UserUpdateWithoutUserCupsDataInput!
  create: UserCreateWithoutUserCupsInput!
}

input UserUpsertWithoutUserInterviewDataInput {
  update: UserUpdateWithoutUserInterviewDataDataInput!
  create: UserCreateWithoutUserInterviewDataInput!
}

input UserUpsertWithoutUserRecordDataByPeriodInput {
  update: UserUpdateWithoutUserRecordDataByPeriodDataInput!
  create: UserCreateWithoutUserRecordDataByPeriodInput!
}

input UserUpsertWithWhereUniqueWithoutCountryIdInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutCountryIdDataInput!
  create: UserCreateWithoutCountryIdInput!
}

input UserUpsertWithWhereUniqueWithoutEthnicityIdInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutEthnicityIdDataInput!
  create: UserCreateWithoutEthnicityIdInput!
}

input UserWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [UserWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [UserWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [UserWhereInput!]
  id: Int
  """
  All values that are not equal to given value.
  """
  id_not: Int
  """
  All values that are contained in given list.
  """
  id_in: [Int!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [Int!]
  """
  All values less than the given value.
  """
  id_lt: Int
  """
  All values less than or equal the given value.
  """
  id_lte: Int
  """
  All values greater than the given value.
  """
  id_gt: Int
  """
  All values greater than or equal the given value.
  """
  id_gte: Int
  anonUserId: Int
  """
  All values that are not equal to given value.
  """
  anonUserId_not: Int
  """
  All values that are contained in given list.
  """
  anonUserId_in: [Int!]
  """
  All values that are not contained in given list.
  """
  anonUserId_not_in: [Int!]
  """
  All values less than the given value.
  """
  anonUserId_lt: Int
  """
  All values less than or equal the given value.
  """
  anonUserId_lte: Int
  """
  All values greater than the given value.
  """
  anonUserId_gt: Int
  """
  All values greater than or equal the given value.
  """
  anonUserId_gte: Int
  deleted: Boolean
  """
  All values that are not equal to given value.
  """
  deleted_not: Boolean
  dob: DateTime
  """
  All values that are not equal to given value.
  """
  dob_not: DateTime
  """
  All values that are contained in given list.
  """
  dob_in: [DateTime!]
  """
  All values that are not contained in given list.
  """
  dob_not_in: [DateTime!]
  """
  All values less than the given value.
  """
  dob_lt: DateTime
  """
  All values less than or equal the given value.
  """
  dob_lte: DateTime
  """
  All values greater than the given value.
  """
  dob_gt: DateTime
  """
  All values greater than or equal the given value.
  """
  dob_gte: DateTime
  email: String
  """
  All values that are not equal to given value.
  """
  email_not: String
  """
  All values that are contained in given list.
  """
  email_in: [String!]
  """
  All values that are not contained in given list.
  """
  email_not_in: [String!]
  """
  All values less than the given value.
  """
  email_lt: String
  """
  All values less than or equal the given value.
  """
  email_lte: String
  """
  All values greater than the given value.
  """
  email_gt: String
  """
  All values greater than or equal the given value.
  """
  email_gte: String
  """
  All values containing the given string.
  """
  email_contains: String
  """
  All values not containing the given string.
  """
  email_not_contains: String
  """
  All values starting with the given string.
  """
  email_starts_with: String
  """
  All values not starting with the given string.
  """
  email_not_starts_with: String
  """
  All values ending with the given string.
  """
  email_ends_with: String
  """
  All values not ending with the given string.
  """
  email_not_ends_with: String
  encryptSaltString: String
  """
  All values that are not equal to given value.
  """
  encryptSaltString_not: String
  """
  All values that are contained in given list.
  """
  encryptSaltString_in: [String!]
  """
  All values that are not contained in given list.
  """
  encryptSaltString_not_in: [String!]
  """
  All values less than the given value.
  """
  encryptSaltString_lt: String
  """
  All values less than or equal the given value.
  """
  encryptSaltString_lte: String
  """
  All values greater than the given value.
  """
  encryptSaltString_gt: String
  """
  All values greater than or equal the given value.
  """
  encryptSaltString_gte: String
  """
  All values containing the given string.
  """
  encryptSaltString_contains: String
  """
  All values not containing the given string.
  """
  encryptSaltString_not_contains: String
  """
  All values starting with the given string.
  """
  encryptSaltString_starts_with: String
  """
  All values not starting with the given string.
  """
  encryptSaltString_not_starts_with: String
  """
  All values ending with the given string.
  """
  encryptSaltString_ends_with: String
  """
  All values not ending with the given string.
  """
  encryptSaltString_not_ends_with: String
  firstName: String
  """
  All values that are not equal to given value.
  """
  firstName_not: String
  """
  All values that are contained in given list.
  """
  firstName_in: [String!]
  """
  All values that are not contained in given list.
  """
  firstName_not_in: [String!]
  """
  All values less than the given value.
  """
  firstName_lt: String
  """
  All values less than or equal the given value.
  """
  firstName_lte: String
  """
  All values greater than the given value.
  """
  firstName_gt: String
  """
  All values greater than or equal the given value.
  """
  firstName_gte: String
  """
  All values containing the given string.
  """
  firstName_contains: String
  """
  All values not containing the given string.
  """
  firstName_not_contains: String
  """
  All values starting with the given string.
  """
  firstName_starts_with: String
  """
  All values not starting with the given string.
  """
  firstName_not_starts_with: String
  """
  All values ending with the given string.
  """
  firstName_ends_with: String
  """
  All values not ending with the given string.
  """
  firstName_not_ends_with: String
  givenBirth: Boolean
  """
  All values that are not equal to given value.
  """
  givenBirth_not: Boolean
  lastName: String
  """
  All values that are not equal to given value.
  """
  lastName_not: String
  """
  All values that are contained in given list.
  """
  lastName_in: [String!]
  """
  All values that are not contained in given list.
  """
  lastName_not_in: [String!]
  """
  All values less than the given value.
  """
  lastName_lt: String
  """
  All values less than or equal the given value.
  """
  lastName_lte: String
  """
  All values greater than the given value.
  """
  lastName_gt: String
  """
  All values greater than or equal the given value.
  """
  lastName_gte: String
  """
  All values containing the given string.
  """
  lastName_contains: String
  """
  All values not containing the given string.
  """
  lastName_not_contains: String
  """
  All values starting with the given string.
  """
  lastName_starts_with: String
  """
  All values not starting with the given string.
  """
  lastName_not_starts_with: String
  """
  All values ending with the given string.
  """
  lastName_ends_with: String
  """
  All values not ending with the given string.
  """
  lastName_not_ends_with: String
  password: String
  """
  All values that are not equal to given value.
  """
  password_not: String
  """
  All values that are contained in given list.
  """
  password_in: [String!]
  """
  All values that are not contained in given list.
  """
  password_not_in: [String!]
  """
  All values less than the given value.
  """
  password_lt: String
  """
  All values less than or equal the given value.
  """
  password_lte: String
  """
  All values greater than the given value.
  """
  password_gt: String
  """
  All values greater than or equal the given value.
  """
  password_gte: String
  """
  All values containing the given string.
  """
  password_contains: String
  """
  All values not containing the given string.
  """
  password_not_contains: String
  """
  All values starting with the given string.
  """
  password_starts_with: String
  """
  All values not starting with the given string.
  """
  password_not_starts_with: String
  """
  All values ending with the given string.
  """
  password_ends_with: String
  """
  All values not ending with the given string.
  """
  password_not_ends_with: String
  appServerSync_every: AppServerSyncWhereInput
  appServerSync_some: AppServerSyncWhereInput
  appServerSync_none: AppServerSyncWhereInput
  countryId: CountryWhereInput
  cupDataProcFlow_every: CupDataProcFlowWhereInput
  cupDataProcFlow_some: CupDataProcFlowWhereInput
  cupDataProcFlow_none: CupDataProcFlowWhereInput
  cupDataProcMdates_every: CupDataProcMdateWhereInput
  cupDataProcMdates_some: CupDataProcMdateWhereInput
  cupDataProcMdates_none: CupDataProcMdateWhereInput
  cupDataQaResponse_every: CupDataQaResponseWhereInput
  cupDataQaResponse_some: CupDataQaResponseWhereInput
  cupDataQaResponse_none: CupDataQaResponseWhereInput
  cupDataUserRemove_every: CupDataUserRemoveWhereInput
  cupDataUserRemove_some: CupDataUserRemoveWhereInput
  cupDataUserRemove_none: CupDataUserRemoveWhereInput
  ethnicityId: EthnicityWhereInput
  userCoinHistory_every: UserCoinHistoryWhereInput
  userCoinHistory_some: UserCoinHistoryWhereInput
  userCoinHistory_none: UserCoinHistoryWhereInput
  userCups_every: UserCupWhereInput
  userCups_some: UserCupWhereInput
  userCups_none: UserCupWhereInput
  userInterviewData_every: UserInterviewDatumWhereInput
  userInterviewData_some: UserInterviewDatumWhereInput
  userInterviewData_none: UserInterviewDatumWhereInput
  userRecordDataByPeriod_every: UserRecordDataByPeriodWhereInput
  userRecordDataByPeriod_some: UserRecordDataByPeriodWhereInput
  userRecordDataByPeriod_none: UserRecordDataByPeriodWhereInput
}

input UserWhereUniqueInput {
  id: Int
  anonUserId: Int
  email: String
}

type Mutation {
  createAnswerType(data: AnswerTypeCreateInput!): AnswerType!
  createAppServerSync(data: AppServerSyncCreateInput!): AppServerSync!
  createAuthToken: AuthToken!
  createCalibration(data: CalibrationCreateInput!): Calibration!
  createCompany(data: CompanyCreateInput!): Company!
  createCountry(data: CountryCreateInput!): Country!
  createCup(data: CupCreateInput!): Cup!
  createCupAppSync(data: CupAppSyncCreateInput!): CupAppSync!
  createCupDataAnswer(data: CupDataAnswerCreateInput!): CupDataAnswer!
  createCupDataColourCalc(data: CupDataColourCalcCreateInput!): CupDataColourCalc!
  createCupDataColourCalib(data: CupDataColourCalibCreateInput!): CupDataColourCalib!
  createCupDataManMdate(data: CupDataManMdateCreateInput!): CupDataManMdate!
  createCupDataProcFlow(data: CupDataProcFlowCreateInput!): CupDataProcFlow!
  createCupDataProcMdate(data: CupDataProcMdateCreateInput!): CupDataProcMdate!
  createCupDataProcVolume(data: CupDataProcVolumeCreateInput!): CupDataProcVolume!
  createCupDataQaResponse(data: CupDataQaResponseCreateInput!): CupDataQaResponse!
  createCupDataQuestion(data: CupDataQuestionCreateInput!): CupDataQuestion!
  createCupDataRaw(data: CupDataRawCreateInput!): CupDataRaw!
  createCupDataRejection(data: CupDataRejectionCreateInput!): CupDataRejection!
  createCupDataUserRemove(data: CupDataUserRemoveCreateInput!): CupDataUserRemove!
  createCupDataUserRemoveExplain(data: CupDataUserRemoveExplainCreateInput!): CupDataUserRemoveExplain!
  createCupDatum(data: CupDatumCreateInput!): CupDatum!
  createEthnicity(data: EthnicityCreateInput!): Ethnicity!
  createFirmware(data: FirmwareCreateInput!): Firmware!
  createHardware(data: HardwareCreateInput!): Hardware!
  createPlatformComp(data: PlatformCompCreateInput!): PlatformComp!
  createUser(data: UserCreateInput!): User!
  createUserCoinHistory(data: UserCoinHistoryCreateInput!): UserCoinHistory!
  createUserCup(data: UserCupCreateInput!): UserCup!
  createUserInterviewDatum(data: UserInterviewDatumCreateInput!): UserInterviewDatum!
  createUserInterviewQuestion(data: UserInterviewQuestionCreateInput!): UserInterviewQuestion!
  createUserRecordDataByDay(data: UserRecordDataByDayCreateInput!): UserRecordDataByDay!
  createUserRecordDataByPeriod(data: UserRecordDataByPeriodCreateInput!): UserRecordDataByPeriod!
  createUserRecordDataByTime(data: UserRecordDataByTimeCreateInput!): UserRecordDataByTime!
  createUsersDataAnalysis(data: UsersDataAnalysisCreateInput!): UsersDataAnalysis!
  updateAnswerType(data: AnswerTypeUpdateInput!, where: AnswerTypeWhereUniqueInput!): AnswerType
  updateAppServerSync(data: AppServerSyncUpdateInput!, where: AppServerSyncWhereUniqueInput!): AppServerSync
  updateCalibration(data: CalibrationUpdateInput!, where: CalibrationWhereUniqueInput!): Calibration
  updateCompany(data: CompanyUpdateInput!, where: CompanyWhereUniqueInput!): Company
  updateCountry(data: CountryUpdateInput!, where: CountryWhereUniqueInput!): Country
  updateCup(data: CupUpdateInput!, where: CupWhereUniqueInput!): Cup
  updateCupAppSync(data: CupAppSyncUpdateInput!, where: CupAppSyncWhereUniqueInput!): CupAppSync
  updateCupDataAnswer(data: CupDataAnswerUpdateInput!, where: CupDataAnswerWhereUniqueInput!): CupDataAnswer
  updateCupDataColourCalc(data: CupDataColourCalcUpdateInput!, where: CupDataColourCalcWhereUniqueInput!): CupDataColourCalc
  updateCupDataColourCalib(data: CupDataColourCalibUpdateInput!, where: CupDataColourCalibWhereUniqueInput!): CupDataColourCalib
  updateCupDataManMdate(data: CupDataManMdateUpdateInput!, where: CupDataManMdateWhereUniqueInput!): CupDataManMdate
  updateCupDataProcFlow(data: CupDataProcFlowUpdateInput!, where: CupDataProcFlowWhereUniqueInput!): CupDataProcFlow
  updateCupDataProcMdate(data: CupDataProcMdateUpdateInput!, where: CupDataProcMdateWhereUniqueInput!): CupDataProcMdate
  updateCupDataProcVolume(data: CupDataProcVolumeUpdateInput!, where: CupDataProcVolumeWhereUniqueInput!): CupDataProcVolume
  updateCupDataQaResponse(data: CupDataQaResponseUpdateInput!, where: CupDataQaResponseWhereUniqueInput!): CupDataQaResponse
  updateCupDataQuestion(data: CupDataQuestionUpdateInput!, where: CupDataQuestionWhereUniqueInput!): CupDataQuestion
  updateCupDataRaw(data: CupDataRawUpdateInput!, where: CupDataRawWhereUniqueInput!): CupDataRaw
  updateCupDataRejection(data: CupDataRejectionUpdateInput!, where: CupDataRejectionWhereUniqueInput!): CupDataRejection
  updateCupDataUserRemove(data: CupDataUserRemoveUpdateInput!, where: CupDataUserRemoveWhereUniqueInput!): CupDataUserRemove
  updateCupDataUserRemoveExplain(data: CupDataUserRemoveExplainUpdateInput!, where: CupDataUserRemoveExplainWhereUniqueInput!): CupDataUserRemoveExplain
  updateCupDatum(data: CupDatumUpdateInput!, where: CupDatumWhereUniqueInput!): CupDatum
  updateEthnicity(data: EthnicityUpdateInput!, where: EthnicityWhereUniqueInput!): Ethnicity
  updateFirmware(data: FirmwareUpdateInput!, where: FirmwareWhereUniqueInput!): Firmware
  updateHardware(data: HardwareUpdateInput!, where: HardwareWhereUniqueInput!): Hardware
  updatePlatformComp(data: PlatformCompUpdateInput!, where: PlatformCompWhereUniqueInput!): PlatformComp
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateUserCoinHistory(data: UserCoinHistoryUpdateInput!, where: UserCoinHistoryWhereUniqueInput!): UserCoinHistory
  updateUserCup(data: UserCupUpdateInput!, where: UserCupWhereUniqueInput!): UserCup
  updateUserInterviewDatum(data: UserInterviewDatumUpdateInput!, where: UserInterviewDatumWhereUniqueInput!): UserInterviewDatum
  updateUserInterviewQuestion(data: UserInterviewQuestionUpdateInput!, where: UserInterviewQuestionWhereUniqueInput!): UserInterviewQuestion
  updateUserRecordDataByDay(data: UserRecordDataByDayUpdateInput!, where: UserRecordDataByDayWhereUniqueInput!): UserRecordDataByDay
  updateUserRecordDataByPeriod(data: UserRecordDataByPeriodUpdateInput!, where: UserRecordDataByPeriodWhereUniqueInput!): UserRecordDataByPeriod
  updateUserRecordDataByTime(data: UserRecordDataByTimeUpdateInput!, where: UserRecordDataByTimeWhereUniqueInput!): UserRecordDataByTime
  updateUsersDataAnalysis(data: UsersDataAnalysisUpdateInput!, where: UsersDataAnalysisWhereUniqueInput!): UsersDataAnalysis
  deleteAnswerType(where: AnswerTypeWhereUniqueInput!): AnswerType
  deleteAppServerSync(where: AppServerSyncWhereUniqueInput!): AppServerSync
  deleteAuthToken(where: AuthTokenWhereUniqueInput!): AuthToken
  deleteCalibration(where: CalibrationWhereUniqueInput!): Calibration
  deleteCompany(where: CompanyWhereUniqueInput!): Company
  deleteCountry(where: CountryWhereUniqueInput!): Country
  deleteCup(where: CupWhereUniqueInput!): Cup
  deleteCupAppSync(where: CupAppSyncWhereUniqueInput!): CupAppSync
  deleteCupDataAnswer(where: CupDataAnswerWhereUniqueInput!): CupDataAnswer
  deleteCupDataColourCalc(where: CupDataColourCalcWhereUniqueInput!): CupDataColourCalc
  deleteCupDataColourCalib(where: CupDataColourCalibWhereUniqueInput!): CupDataColourCalib
  deleteCupDataManMdate(where: CupDataManMdateWhereUniqueInput!): CupDataManMdate
  deleteCupDataProcFlow(where: CupDataProcFlowWhereUniqueInput!): CupDataProcFlow
  deleteCupDataProcMdate(where: CupDataProcMdateWhereUniqueInput!): CupDataProcMdate
  deleteCupDataProcVolume(where: CupDataProcVolumeWhereUniqueInput!): CupDataProcVolume
  deleteCupDataQaResponse(where: CupDataQaResponseWhereUniqueInput!): CupDataQaResponse
  deleteCupDataQuestion(where: CupDataQuestionWhereUniqueInput!): CupDataQuestion
  deleteCupDataRaw(where: CupDataRawWhereUniqueInput!): CupDataRaw
  deleteCupDataRejection(where: CupDataRejectionWhereUniqueInput!): CupDataRejection
  deleteCupDataUserRemove(where: CupDataUserRemoveWhereUniqueInput!): CupDataUserRemove
  deleteCupDataUserRemoveExplain(where: CupDataUserRemoveExplainWhereUniqueInput!): CupDataUserRemoveExplain
  deleteCupDatum(where: CupDatumWhereUniqueInput!): CupDatum
  deleteEthnicity(where: EthnicityWhereUniqueInput!): Ethnicity
  deleteFirmware(where: FirmwareWhereUniqueInput!): Firmware
  deleteHardware(where: HardwareWhereUniqueInput!): Hardware
  deletePlatformComp(where: PlatformCompWhereUniqueInput!): PlatformComp
  deleteUser(where: UserWhereUniqueInput!): User
  deleteUserCoinHistory(where: UserCoinHistoryWhereUniqueInput!): UserCoinHistory
  deleteUserCup(where: UserCupWhereUniqueInput!): UserCup
  deleteUserInterviewDatum(where: UserInterviewDatumWhereUniqueInput!): UserInterviewDatum
  deleteUserInterviewQuestion(where: UserInterviewQuestionWhereUniqueInput!): UserInterviewQuestion
  deleteUserRecordDataByDay(where: UserRecordDataByDayWhereUniqueInput!): UserRecordDataByDay
  deleteUserRecordDataByPeriod(where: UserRecordDataByPeriodWhereUniqueInput!): UserRecordDataByPeriod
  deleteUserRecordDataByTime(where: UserRecordDataByTimeWhereUniqueInput!): UserRecordDataByTime
  deleteUsersDataAnalysis(where: UsersDataAnalysisWhereUniqueInput!): UsersDataAnalysis
  upsertAnswerType(where: AnswerTypeWhereUniqueInput!, create: AnswerTypeCreateInput!, update: AnswerTypeUpdateInput!): AnswerType!
  upsertAppServerSync(where: AppServerSyncWhereUniqueInput!, create: AppServerSyncCreateInput!, update: AppServerSyncUpdateInput!): AppServerSync!
  upsertCalibration(where: CalibrationWhereUniqueInput!, create: CalibrationCreateInput!, update: CalibrationUpdateInput!): Calibration!
  upsertCompany(where: CompanyWhereUniqueInput!, create: CompanyCreateInput!, update: CompanyUpdateInput!): Company!
  upsertCountry(where: CountryWhereUniqueInput!, create: CountryCreateInput!, update: CountryUpdateInput!): Country!
  upsertCup(where: CupWhereUniqueInput!, create: CupCreateInput!, update: CupUpdateInput!): Cup!
  upsertCupAppSync(where: CupAppSyncWhereUniqueInput!, create: CupAppSyncCreateInput!, update: CupAppSyncUpdateInput!): CupAppSync!
  upsertCupDataAnswer(where: CupDataAnswerWhereUniqueInput!, create: CupDataAnswerCreateInput!, update: CupDataAnswerUpdateInput!): CupDataAnswer!
  upsertCupDataColourCalc(where: CupDataColourCalcWhereUniqueInput!, create: CupDataColourCalcCreateInput!, update: CupDataColourCalcUpdateInput!): CupDataColourCalc!
  upsertCupDataColourCalib(where: CupDataColourCalibWhereUniqueInput!, create: CupDataColourCalibCreateInput!, update: CupDataColourCalibUpdateInput!): CupDataColourCalib!
  upsertCupDataManMdate(where: CupDataManMdateWhereUniqueInput!, create: CupDataManMdateCreateInput!, update: CupDataManMdateUpdateInput!): CupDataManMdate!
  upsertCupDataProcFlow(where: CupDataProcFlowWhereUniqueInput!, create: CupDataProcFlowCreateInput!, update: CupDataProcFlowUpdateInput!): CupDataProcFlow!
  upsertCupDataProcMdate(where: CupDataProcMdateWhereUniqueInput!, create: CupDataProcMdateCreateInput!, update: CupDataProcMdateUpdateInput!): CupDataProcMdate!
  upsertCupDataProcVolume(where: CupDataProcVolumeWhereUniqueInput!, create: CupDataProcVolumeCreateInput!, update: CupDataProcVolumeUpdateInput!): CupDataProcVolume!
  upsertCupDataQaResponse(where: CupDataQaResponseWhereUniqueInput!, create: CupDataQaResponseCreateInput!, update: CupDataQaResponseUpdateInput!): CupDataQaResponse!
  upsertCupDataQuestion(where: CupDataQuestionWhereUniqueInput!, create: CupDataQuestionCreateInput!, update: CupDataQuestionUpdateInput!): CupDataQuestion!
  upsertCupDataRaw(where: CupDataRawWhereUniqueInput!, create: CupDataRawCreateInput!, update: CupDataRawUpdateInput!): CupDataRaw!
  upsertCupDataRejection(where: CupDataRejectionWhereUniqueInput!, create: CupDataRejectionCreateInput!, update: CupDataRejectionUpdateInput!): CupDataRejection!
  upsertCupDataUserRemove(where: CupDataUserRemoveWhereUniqueInput!, create: CupDataUserRemoveCreateInput!, update: CupDataUserRemoveUpdateInput!): CupDataUserRemove!
  upsertCupDataUserRemoveExplain(where: CupDataUserRemoveExplainWhereUniqueInput!, create: CupDataUserRemoveExplainCreateInput!, update: CupDataUserRemoveExplainUpdateInput!): CupDataUserRemoveExplain!
  upsertCupDatum(where: CupDatumWhereUniqueInput!, create: CupDatumCreateInput!, update: CupDatumUpdateInput!): CupDatum!
  upsertEthnicity(where: EthnicityWhereUniqueInput!, create: EthnicityCreateInput!, update: EthnicityUpdateInput!): Ethnicity!
  upsertFirmware(where: FirmwareWhereUniqueInput!, create: FirmwareCreateInput!, update: FirmwareUpdateInput!): Firmware!
  upsertHardware(where: HardwareWhereUniqueInput!, create: HardwareCreateInput!, update: HardwareUpdateInput!): Hardware!
  upsertPlatformComp(where: PlatformCompWhereUniqueInput!, create: PlatformCompCreateInput!, update: PlatformCompUpdateInput!): PlatformComp!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  upsertUserCoinHistory(where: UserCoinHistoryWhereUniqueInput!, create: UserCoinHistoryCreateInput!, update: UserCoinHistoryUpdateInput!): UserCoinHistory!
  upsertUserCup(where: UserCupWhereUniqueInput!, create: UserCupCreateInput!, update: UserCupUpdateInput!): UserCup!
  upsertUserInterviewDatum(where: UserInterviewDatumWhereUniqueInput!, create: UserInterviewDatumCreateInput!, update: UserInterviewDatumUpdateInput!): UserInterviewDatum!
  upsertUserInterviewQuestion(where: UserInterviewQuestionWhereUniqueInput!, create: UserInterviewQuestionCreateInput!, update: UserInterviewQuestionUpdateInput!): UserInterviewQuestion!
  upsertUserRecordDataByDay(where: UserRecordDataByDayWhereUniqueInput!, create: UserRecordDataByDayCreateInput!, update: UserRecordDataByDayUpdateInput!): UserRecordDataByDay!
  upsertUserRecordDataByPeriod(where: UserRecordDataByPeriodWhereUniqueInput!, create: UserRecordDataByPeriodCreateInput!, update: UserRecordDataByPeriodUpdateInput!): UserRecordDataByPeriod!
  upsertUserRecordDataByTime(where: UserRecordDataByTimeWhereUniqueInput!, create: UserRecordDataByTimeCreateInput!, update: UserRecordDataByTimeUpdateInput!): UserRecordDataByTime!
  upsertUsersDataAnalysis(where: UsersDataAnalysisWhereUniqueInput!, create: UsersDataAnalysisCreateInput!, update: UsersDataAnalysisUpdateInput!): UsersDataAnalysis!
  updateManyAnswerTypes(data: AnswerTypeUpdateManyMutationInput!, where: AnswerTypeWhereInput): BatchPayload!
  updateManyAppServerSyncs(data: AppServerSyncUpdateManyMutationInput!, where: AppServerSyncWhereInput): BatchPayload!
  updateManyCalibrations(data: CalibrationUpdateManyMutationInput!, where: CalibrationWhereInput): BatchPayload!
  updateManyCompanies(data: CompanyUpdateManyMutationInput!, where: CompanyWhereInput): BatchPayload!
  updateManyCountries(data: CountryUpdateManyMutationInput!, where: CountryWhereInput): BatchPayload!
  updateManyCups(data: CupUpdateManyMutationInput!, where: CupWhereInput): BatchPayload!
  updateManyCupAppSyncs(data: CupAppSyncUpdateManyMutationInput!, where: CupAppSyncWhereInput): BatchPayload!
  updateManyCupDataAnswers(data: CupDataAnswerUpdateManyMutationInput!, where: CupDataAnswerWhereInput): BatchPayload!
  updateManyCupDataColourCalcs(data: CupDataColourCalcUpdateManyMutationInput!, where: CupDataColourCalcWhereInput): BatchPayload!
  updateManyCupDataColourCalibs(data: CupDataColourCalibUpdateManyMutationInput!, where: CupDataColourCalibWhereInput): BatchPayload!
  updateManyCupDataManMdates(data: CupDataManMdateUpdateManyMutationInput!, where: CupDataManMdateWhereInput): BatchPayload!
  updateManyCupDataProcFlows(data: CupDataProcFlowUpdateManyMutationInput!, where: CupDataProcFlowWhereInput): BatchPayload!
  updateManyCupDataProcMdates(data: CupDataProcMdateUpdateManyMutationInput!, where: CupDataProcMdateWhereInput): BatchPayload!
  updateManyCupDataProcVolumes(data: CupDataProcVolumeUpdateManyMutationInput!, where: CupDataProcVolumeWhereInput): BatchPayload!
  updateManyCupDataQaResponses(data: CupDataQaResponseUpdateManyMutationInput!, where: CupDataQaResponseWhereInput): BatchPayload!
  updateManyCupDataQuestions(data: CupDataQuestionUpdateManyMutationInput!, where: CupDataQuestionWhereInput): BatchPayload!
  updateManyCupDataRaws(data: CupDataRawUpdateManyMutationInput!, where: CupDataRawWhereInput): BatchPayload!
  updateManyCupDataRejections(data: CupDataRejectionUpdateManyMutationInput!, where: CupDataRejectionWhereInput): BatchPayload!
  updateManyCupDataUserRemoves(data: CupDataUserRemoveUpdateManyMutationInput!, where: CupDataUserRemoveWhereInput): BatchPayload!
  updateManyCupDataUserRemoveExplains(data: CupDataUserRemoveExplainUpdateManyMutationInput!, where: CupDataUserRemoveExplainWhereInput): BatchPayload!
  updateManyCupData(data: CupDatumUpdateManyMutationInput!, where: CupDatumWhereInput): BatchPayload!
  updateManyEthnicities(data: EthnicityUpdateManyMutationInput!, where: EthnicityWhereInput): BatchPayload!
  updateManyFirmwares(data: FirmwareUpdateManyMutationInput!, where: FirmwareWhereInput): BatchPayload!
  updateManyHardwares(data: HardwareUpdateManyMutationInput!, where: HardwareWhereInput): BatchPayload!
  updateManyPlatformComps(data: PlatformCompUpdateManyMutationInput!, where: PlatformCompWhereInput): BatchPayload!
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  updateManyUserCoinHistories(data: UserCoinHistoryUpdateManyMutationInput!, where: UserCoinHistoryWhereInput): BatchPayload!
  updateManyUserInterviewData(data: UserInterviewDatumUpdateManyMutationInput!, where: UserInterviewDatumWhereInput): BatchPayload!
  updateManyUserInterviewQuestions(data: UserInterviewQuestionUpdateManyMutationInput!, where: UserInterviewQuestionWhereInput): BatchPayload!
  updateManyUserRecordDataByDays(data: UserRecordDataByDayUpdateManyMutationInput!, where: UserRecordDataByDayWhereInput): BatchPayload!
  updateManyUserRecordDataByPeriods(data: UserRecordDataByPeriodUpdateManyMutationInput!, where: UserRecordDataByPeriodWhereInput): BatchPayload!
  updateManyUserRecordDataByTimes(data: UserRecordDataByTimeUpdateManyMutationInput!, where: UserRecordDataByTimeWhereInput): BatchPayload!
  updateManyUsersDataAnalyses(data: UsersDataAnalysisUpdateManyMutationInput!, where: UsersDataAnalysisWhereInput): BatchPayload!
  deleteManyAnswerTypes(where: AnswerTypeWhereInput): BatchPayload!
  deleteManyAppServerSyncs(where: AppServerSyncWhereInput): BatchPayload!
  deleteManyAuthTokens(where: AuthTokenWhereInput): BatchPayload!
  deleteManyCalibrations(where: CalibrationWhereInput): BatchPayload!
  deleteManyCompanies(where: CompanyWhereInput): BatchPayload!
  deleteManyCountries(where: CountryWhereInput): BatchPayload!
  deleteManyCups(where: CupWhereInput): BatchPayload!
  deleteManyCupAppSyncs(where: CupAppSyncWhereInput): BatchPayload!
  deleteManyCupDataAnswers(where: CupDataAnswerWhereInput): BatchPayload!
  deleteManyCupDataColourCalcs(where: CupDataColourCalcWhereInput): BatchPayload!
  deleteManyCupDataColourCalibs(where: CupDataColourCalibWhereInput): BatchPayload!
  deleteManyCupDataManMdates(where: CupDataManMdateWhereInput): BatchPayload!
  deleteManyCupDataProcFlows(where: CupDataProcFlowWhereInput): BatchPayload!
  deleteManyCupDataProcMdates(where: CupDataProcMdateWhereInput): BatchPayload!
  deleteManyCupDataProcVolumes(where: CupDataProcVolumeWhereInput): BatchPayload!
  deleteManyCupDataQaResponses(where: CupDataQaResponseWhereInput): BatchPayload!
  deleteManyCupDataQuestions(where: CupDataQuestionWhereInput): BatchPayload!
  deleteManyCupDataRaws(where: CupDataRawWhereInput): BatchPayload!
  deleteManyCupDataRejections(where: CupDataRejectionWhereInput): BatchPayload!
  deleteManyCupDataUserRemoves(where: CupDataUserRemoveWhereInput): BatchPayload!
  deleteManyCupDataUserRemoveExplains(where: CupDataUserRemoveExplainWhereInput): BatchPayload!
  deleteManyCupData(where: CupDatumWhereInput): BatchPayload!
  deleteManyEthnicities(where: EthnicityWhereInput): BatchPayload!
  deleteManyFirmwares(where: FirmwareWhereInput): BatchPayload!
  deleteManyHardwares(where: HardwareWhereInput): BatchPayload!
  deleteManyPlatformComps(where: PlatformCompWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  deleteManyUserCoinHistories(where: UserCoinHistoryWhereInput): BatchPayload!
  deleteManyUserCups(where: UserCupWhereInput): BatchPayload!
  deleteManyUserInterviewData(where: UserInterviewDatumWhereInput): BatchPayload!
  deleteManyUserInterviewQuestions(where: UserInterviewQuestionWhereInput): BatchPayload!
  deleteManyUserRecordDataByDays(where: UserRecordDataByDayWhereInput): BatchPayload!
  deleteManyUserRecordDataByPeriods(where: UserRecordDataByPeriodWhereInput): BatchPayload!
  deleteManyUserRecordDataByTimes(where: UserRecordDataByTimeWhereInput): BatchPayload!
  deleteManyUsersDataAnalyses(where: UsersDataAnalysisWhereInput): BatchPayload!
  executeRaw(database: PrismaDatabase, query: String!): Json!
}

type Query {
  answerTypes(where: AnswerTypeWhereInput, orderBy: AnswerTypeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [AnswerType]!
  appServerSyncs(where: AppServerSyncWhereInput, orderBy: AppServerSyncOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [AppServerSync]!
  authTokens(where: AuthTokenWhereInput, orderBy: AuthTokenOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [AuthToken]!
  calibrations(where: CalibrationWhereInput, orderBy: CalibrationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Calibration]!
  companies(where: CompanyWhereInput, orderBy: CompanyOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Company]!
  countries(where: CountryWhereInput, orderBy: CountryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Country]!
  cups(where: CupWhereInput, orderBy: CupOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Cup]!
  cupAppSyncs(where: CupAppSyncWhereInput, orderBy: CupAppSyncOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [CupAppSync]!
  cupDataAnswers(where: CupDataAnswerWhereInput, orderBy: CupDataAnswerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [CupDataAnswer]!
  cupDataColourCalcs(where: CupDataColourCalcWhereInput, orderBy: CupDataColourCalcOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [CupDataColourCalc]!
  cupDataColourCalibs(where: CupDataColourCalibWhereInput, orderBy: CupDataColourCalibOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [CupDataColourCalib]!
  cupDataManMdates(where: CupDataManMdateWhereInput, orderBy: CupDataManMdateOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [CupDataManMdate]!
  cupDataProcFlows(where: CupDataProcFlowWhereInput, orderBy: CupDataProcFlowOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [CupDataProcFlow]!
  cupDataProcMdates(where: CupDataProcMdateWhereInput, orderBy: CupDataProcMdateOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [CupDataProcMdate]!
  cupDataProcVolumes(where: CupDataProcVolumeWhereInput, orderBy: CupDataProcVolumeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [CupDataProcVolume]!
  cupDataQaResponses(where: CupDataQaResponseWhereInput, orderBy: CupDataQaResponseOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [CupDataQaResponse]!
  cupDataQuestions(where: CupDataQuestionWhereInput, orderBy: CupDataQuestionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [CupDataQuestion]!
  cupDataRaws(where: CupDataRawWhereInput, orderBy: CupDataRawOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [CupDataRaw]!
  cupDataRejections(where: CupDataRejectionWhereInput, orderBy: CupDataRejectionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [CupDataRejection]!
  cupDataUserRemoves(where: CupDataUserRemoveWhereInput, orderBy: CupDataUserRemoveOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [CupDataUserRemove]!
  cupDataUserRemoveExplains(where: CupDataUserRemoveExplainWhereInput, orderBy: CupDataUserRemoveExplainOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [CupDataUserRemoveExplain]!
  cupData(where: CupDatumWhereInput, orderBy: CupDatumOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [CupDatum]!
  ethnicities(where: EthnicityWhereInput, orderBy: EthnicityOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Ethnicity]!
  firmwares(where: FirmwareWhereInput, orderBy: FirmwareOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Firmware]!
  hardwares(where: HardwareWhereInput, orderBy: HardwareOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Hardware]!
  platformComps(where: PlatformCompWhereInput, orderBy: PlatformCompOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [PlatformComp]!
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  userCoinHistories(where: UserCoinHistoryWhereInput, orderBy: UserCoinHistoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [UserCoinHistory]!
  userCups(where: UserCupWhereInput, orderBy: UserCupOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [UserCup]!
  userInterviewData(where: UserInterviewDatumWhereInput, orderBy: UserInterviewDatumOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [UserInterviewDatum]!
  userInterviewQuestions(where: UserInterviewQuestionWhereInput, orderBy: UserInterviewQuestionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [UserInterviewQuestion]!
  userRecordDataByDays(where: UserRecordDataByDayWhereInput, orderBy: UserRecordDataByDayOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [UserRecordDataByDay]!
  userRecordDataByPeriods(where: UserRecordDataByPeriodWhereInput, orderBy: UserRecordDataByPeriodOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [UserRecordDataByPeriod]!
  userRecordDataByTimes(where: UserRecordDataByTimeWhereInput, orderBy: UserRecordDataByTimeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [UserRecordDataByTime]!
  usersDataAnalyses(where: UsersDataAnalysisWhereInput, orderBy: UsersDataAnalysisOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [UsersDataAnalysis]!
  answerType(where: AnswerTypeWhereUniqueInput!): AnswerType
  appServerSync(where: AppServerSyncWhereUniqueInput!): AppServerSync
  authToken(where: AuthTokenWhereUniqueInput!): AuthToken
  calibration(where: CalibrationWhereUniqueInput!): Calibration
  company(where: CompanyWhereUniqueInput!): Company
  country(where: CountryWhereUniqueInput!): Country
  cup(where: CupWhereUniqueInput!): Cup
  cupAppSync(where: CupAppSyncWhereUniqueInput!): CupAppSync
  cupDataAnswer(where: CupDataAnswerWhereUniqueInput!): CupDataAnswer
  cupDataColourCalc(where: CupDataColourCalcWhereUniqueInput!): CupDataColourCalc
  cupDataColourCalib(where: CupDataColourCalibWhereUniqueInput!): CupDataColourCalib
  cupDataManMdate(where: CupDataManMdateWhereUniqueInput!): CupDataManMdate
  cupDataProcFlow(where: CupDataProcFlowWhereUniqueInput!): CupDataProcFlow
  cupDataProcMdate(where: CupDataProcMdateWhereUniqueInput!): CupDataProcMdate
  cupDataProcVolume(where: CupDataProcVolumeWhereUniqueInput!): CupDataProcVolume
  cupDataQaResponse(where: CupDataQaResponseWhereUniqueInput!): CupDataQaResponse
  cupDataQuestion(where: CupDataQuestionWhereUniqueInput!): CupDataQuestion
  cupDataRaw(where: CupDataRawWhereUniqueInput!): CupDataRaw
  cupDataRejection(where: CupDataRejectionWhereUniqueInput!): CupDataRejection
  cupDataUserRemove(where: CupDataUserRemoveWhereUniqueInput!): CupDataUserRemove
  cupDataUserRemoveExplain(where: CupDataUserRemoveExplainWhereUniqueInput!): CupDataUserRemoveExplain
  cupDatum(where: CupDatumWhereUniqueInput!): CupDatum
  ethnicity(where: EthnicityWhereUniqueInput!): Ethnicity
  firmware(where: FirmwareWhereUniqueInput!): Firmware
  hardware(where: HardwareWhereUniqueInput!): Hardware
  platformComp(where: PlatformCompWhereUniqueInput!): PlatformComp
  user(where: UserWhereUniqueInput!): User
  userCoinHistory(where: UserCoinHistoryWhereUniqueInput!): UserCoinHistory
  userCup(where: UserCupWhereUniqueInput!): UserCup
  userInterviewDatum(where: UserInterviewDatumWhereUniqueInput!): UserInterviewDatum
  userInterviewQuestion(where: UserInterviewQuestionWhereUniqueInput!): UserInterviewQuestion
  userRecordDataByDay(where: UserRecordDataByDayWhereUniqueInput!): UserRecordDataByDay
  userRecordDataByPeriod(where: UserRecordDataByPeriodWhereUniqueInput!): UserRecordDataByPeriod
  userRecordDataByTime(where: UserRecordDataByTimeWhereUniqueInput!): UserRecordDataByTime
  usersDataAnalysis(where: UsersDataAnalysisWhereUniqueInput!): UsersDataAnalysis
  answerTypesConnection(where: AnswerTypeWhereInput, orderBy: AnswerTypeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AnswerTypeConnection!
  appServerSyncsConnection(where: AppServerSyncWhereInput, orderBy: AppServerSyncOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AppServerSyncConnection!
  authTokensConnection(where: AuthTokenWhereInput, orderBy: AuthTokenOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AuthTokenConnection!
  calibrationsConnection(where: CalibrationWhereInput, orderBy: CalibrationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CalibrationConnection!
  companiesConnection(where: CompanyWhereInput, orderBy: CompanyOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CompanyConnection!
  countriesConnection(where: CountryWhereInput, orderBy: CountryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CountryConnection!
  cupsConnection(where: CupWhereInput, orderBy: CupOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CupConnection!
  cupAppSyncsConnection(where: CupAppSyncWhereInput, orderBy: CupAppSyncOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CupAppSyncConnection!
  cupDataAnswersConnection(where: CupDataAnswerWhereInput, orderBy: CupDataAnswerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CupDataAnswerConnection!
  cupDataColourCalcsConnection(where: CupDataColourCalcWhereInput, orderBy: CupDataColourCalcOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CupDataColourCalcConnection!
  cupDataColourCalibsConnection(where: CupDataColourCalibWhereInput, orderBy: CupDataColourCalibOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CupDataColourCalibConnection!
  cupDataManMdatesConnection(where: CupDataManMdateWhereInput, orderBy: CupDataManMdateOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CupDataManMdateConnection!
  cupDataProcFlowsConnection(where: CupDataProcFlowWhereInput, orderBy: CupDataProcFlowOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CupDataProcFlowConnection!
  cupDataProcMdatesConnection(where: CupDataProcMdateWhereInput, orderBy: CupDataProcMdateOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CupDataProcMdateConnection!
  cupDataProcVolumesConnection(where: CupDataProcVolumeWhereInput, orderBy: CupDataProcVolumeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CupDataProcVolumeConnection!
  cupDataQaResponsesConnection(where: CupDataQaResponseWhereInput, orderBy: CupDataQaResponseOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CupDataQaResponseConnection!
  cupDataQuestionsConnection(where: CupDataQuestionWhereInput, orderBy: CupDataQuestionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CupDataQuestionConnection!
  cupDataRawsConnection(where: CupDataRawWhereInput, orderBy: CupDataRawOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CupDataRawConnection!
  cupDataRejectionsConnection(where: CupDataRejectionWhereInput, orderBy: CupDataRejectionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CupDataRejectionConnection!
  cupDataUserRemovesConnection(where: CupDataUserRemoveWhereInput, orderBy: CupDataUserRemoveOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CupDataUserRemoveConnection!
  cupDataUserRemoveExplainsConnection(where: CupDataUserRemoveExplainWhereInput, orderBy: CupDataUserRemoveExplainOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CupDataUserRemoveExplainConnection!
  cupDataConnection(where: CupDatumWhereInput, orderBy: CupDatumOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CupDatumConnection!
  ethnicitiesConnection(where: EthnicityWhereInput, orderBy: EthnicityOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): EthnicityConnection!
  firmwaresConnection(where: FirmwareWhereInput, orderBy: FirmwareOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): FirmwareConnection!
  hardwaresConnection(where: HardwareWhereInput, orderBy: HardwareOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): HardwareConnection!
  platformCompsConnection(where: PlatformCompWhereInput, orderBy: PlatformCompOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PlatformCompConnection!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  userCoinHistoriesConnection(where: UserCoinHistoryWhereInput, orderBy: UserCoinHistoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserCoinHistoryConnection!
  userCupsConnection(where: UserCupWhereInput, orderBy: UserCupOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserCupConnection!
  userInterviewDataConnection(where: UserInterviewDatumWhereInput, orderBy: UserInterviewDatumOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserInterviewDatumConnection!
  userInterviewQuestionsConnection(where: UserInterviewQuestionWhereInput, orderBy: UserInterviewQuestionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserInterviewQuestionConnection!
  userRecordDataByDaysConnection(where: UserRecordDataByDayWhereInput, orderBy: UserRecordDataByDayOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserRecordDataByDayConnection!
  userRecordDataByPeriodsConnection(where: UserRecordDataByPeriodWhereInput, orderBy: UserRecordDataByPeriodOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserRecordDataByPeriodConnection!
  userRecordDataByTimesConnection(where: UserRecordDataByTimeWhereInput, orderBy: UserRecordDataByTimeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserRecordDataByTimeConnection!
  usersDataAnalysesConnection(where: UsersDataAnalysisWhereInput, orderBy: UsersDataAnalysisOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UsersDataAnalysisConnection!
}

type Subscription {
  answerType(where: AnswerTypeSubscriptionWhereInput): AnswerTypeSubscriptionPayload
  appServerSync(where: AppServerSyncSubscriptionWhereInput): AppServerSyncSubscriptionPayload
  authToken(where: AuthTokenSubscriptionWhereInput): AuthTokenSubscriptionPayload
  calibration(where: CalibrationSubscriptionWhereInput): CalibrationSubscriptionPayload
  company(where: CompanySubscriptionWhereInput): CompanySubscriptionPayload
  country(where: CountrySubscriptionWhereInput): CountrySubscriptionPayload
  cup(where: CupSubscriptionWhereInput): CupSubscriptionPayload
  cupAppSync(where: CupAppSyncSubscriptionWhereInput): CupAppSyncSubscriptionPayload
  cupDataAnswer(where: CupDataAnswerSubscriptionWhereInput): CupDataAnswerSubscriptionPayload
  cupDataColourCalc(where: CupDataColourCalcSubscriptionWhereInput): CupDataColourCalcSubscriptionPayload
  cupDataColourCalib(where: CupDataColourCalibSubscriptionWhereInput): CupDataColourCalibSubscriptionPayload
  cupDataManMdate(where: CupDataManMdateSubscriptionWhereInput): CupDataManMdateSubscriptionPayload
  cupDataProcFlow(where: CupDataProcFlowSubscriptionWhereInput): CupDataProcFlowSubscriptionPayload
  cupDataProcMdate(where: CupDataProcMdateSubscriptionWhereInput): CupDataProcMdateSubscriptionPayload
  cupDataProcVolume(where: CupDataProcVolumeSubscriptionWhereInput): CupDataProcVolumeSubscriptionPayload
  cupDataQaResponse(where: CupDataQaResponseSubscriptionWhereInput): CupDataQaResponseSubscriptionPayload
  cupDataQuestion(where: CupDataQuestionSubscriptionWhereInput): CupDataQuestionSubscriptionPayload
  cupDataRaw(where: CupDataRawSubscriptionWhereInput): CupDataRawSubscriptionPayload
  cupDataRejection(where: CupDataRejectionSubscriptionWhereInput): CupDataRejectionSubscriptionPayload
  cupDataUserRemove(where: CupDataUserRemoveSubscriptionWhereInput): CupDataUserRemoveSubscriptionPayload
  cupDataUserRemoveExplain(where: CupDataUserRemoveExplainSubscriptionWhereInput): CupDataUserRemoveExplainSubscriptionPayload
  cupDatum(where: CupDatumSubscriptionWhereInput): CupDatumSubscriptionPayload
  ethnicity(where: EthnicitySubscriptionWhereInput): EthnicitySubscriptionPayload
  firmware(where: FirmwareSubscriptionWhereInput): FirmwareSubscriptionPayload
  hardware(where: HardwareSubscriptionWhereInput): HardwareSubscriptionPayload
  platformComp(where: PlatformCompSubscriptionWhereInput): PlatformCompSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  userCoinHistory(where: UserCoinHistorySubscriptionWhereInput): UserCoinHistorySubscriptionPayload
  userCup(where: UserCupSubscriptionWhereInput): UserCupSubscriptionPayload
  userInterviewDatum(where: UserInterviewDatumSubscriptionWhereInput): UserInterviewDatumSubscriptionPayload
  userInterviewQuestion(where: UserInterviewQuestionSubscriptionWhereInput): UserInterviewQuestionSubscriptionPayload
  userRecordDataByDay(where: UserRecordDataByDaySubscriptionWhereInput): UserRecordDataByDaySubscriptionPayload
  userRecordDataByPeriod(where: UserRecordDataByPeriodSubscriptionWhereInput): UserRecordDataByPeriodSubscriptionPayload
  userRecordDataByTime(where: UserRecordDataByTimeSubscriptionWhereInput): UserRecordDataByTimeSubscriptionPayload
  usersDataAnalysis(where: UsersDataAnalysisSubscriptionWhereInput): UsersDataAnalysisSubscriptionPayload
}
`;

module.exports.Prisma = class Binding extends Prisma {
  constructor({ endpoint, secret, fragmentReplacements, debug }) {
    super({ typeDefs, endpoint, secret, fragmentReplacements, debug });

    var self = this;
    this.exists = {
      AnswerType(where) {
        return super.existsDelegate(
          'query',
          'answerTypes',
          { where },
          {},
          '{ id }'
        );
      },
      AppServerSync(where) {
        return super.existsDelegate(
          'query',
          'appServerSyncs',
          { where },
          {},
          '{ id }'
        );
      },
      AuthToken(where) {
        return super.existsDelegate(
          'query',
          'authTokens',
          { where },
          {},
          '{ id }'
        );
      },
      Calibration(where) {
        return super.existsDelegate(
          'query',
          'calibrations',
          { where },
          {},
          '{ id }'
        );
      },
      Company(where) {
        return super.existsDelegate(
          'query',
          'companies',
          { where },
          {},
          '{ id }'
        );
      },
      Country(where) {
        return super.existsDelegate(
          'query',
          'countries',
          { where },
          {},
          '{ id }'
        );
      },
      Cup(where) {
        return super.existsDelegate('query', 'cups', { where }, {}, '{ id }');
      },
      CupAppSync(where) {
        return super.existsDelegate(
          'query',
          'cupAppSyncs',
          { where },
          {},
          '{ id }'
        );
      },
      CupDataAnswer(where) {
        return super.existsDelegate(
          'query',
          'cupDataAnswers',
          { where },
          {},
          '{ id }'
        );
      },
      CupDataColourCalc(where) {
        return super.existsDelegate(
          'query',
          'cupDataColourCalcs',
          { where },
          {},
          '{ id }'
        );
      },
      CupDataColourCalib(where) {
        return super.existsDelegate(
          'query',
          'cupDataColourCalibs',
          { where },
          {},
          '{ id }'
        );
      },
      CupDataManMdate(where) {
        return super.existsDelegate(
          'query',
          'cupDataManMdates',
          { where },
          {},
          '{ id }'
        );
      },
      CupDataProcFlow(where) {
        return super.existsDelegate(
          'query',
          'cupDataProcFlows',
          { where },
          {},
          '{ id }'
        );
      },
      CupDataProcMdate(where) {
        return super.existsDelegate(
          'query',
          'cupDataProcMdates',
          { where },
          {},
          '{ id }'
        );
      },
      CupDataProcVolume(where) {
        return super.existsDelegate(
          'query',
          'cupDataProcVolumes',
          { where },
          {},
          '{ id }'
        );
      },
      CupDataQaResponse(where) {
        return super.existsDelegate(
          'query',
          'cupDataQaResponses',
          { where },
          {},
          '{ id }'
        );
      },
      CupDataQuestion(where) {
        return super.existsDelegate(
          'query',
          'cupDataQuestions',
          { where },
          {},
          '{ id }'
        );
      },
      CupDataRaw(where) {
        return super.existsDelegate(
          'query',
          'cupDataRaws',
          { where },
          {},
          '{ id }'
        );
      },
      CupDataRejection(where) {
        return super.existsDelegate(
          'query',
          'cupDataRejections',
          { where },
          {},
          '{ id }'
        );
      },
      CupDataUserRemove(where) {
        return super.existsDelegate(
          'query',
          'cupDataUserRemoves',
          { where },
          {},
          '{ id }'
        );
      },
      CupDataUserRemoveExplain(where) {
        return super.existsDelegate(
          'query',
          'cupDataUserRemoveExplains',
          { where },
          {},
          '{ id }'
        );
      },
      CupDatum(where) {
        return super.existsDelegate(
          'query',
          'cupData',
          { where },
          {},
          '{ id }'
        );
      },
      Ethnicity(where) {
        return super.existsDelegate(
          'query',
          'ethnicities',
          { where },
          {},
          '{ id }'
        );
      },
      Firmware(where) {
        return super.existsDelegate(
          'query',
          'firmwares',
          { where },
          {},
          '{ id }'
        );
      },
      Hardware(where) {
        return super.existsDelegate(
          'query',
          'hardwares',
          { where },
          {},
          '{ id }'
        );
      },
      PlatformComp(where) {
        return super.existsDelegate(
          'query',
          'platformComps',
          { where },
          {},
          '{ id }'
        );
      },
      User(where) {
        return super.existsDelegate('query', 'users', { where }, {}, '{ id }');
      },
      UserCoinHistory(where) {
        return super.existsDelegate(
          'query',
          'userCoinHistories',
          { where },
          {},
          '{ id }'
        );
      },
      UserCup(where) {
        return super.existsDelegate(
          'query',
          'userCups',
          { where },
          {},
          '{ id }'
        );
      },
      UserInterviewDatum(where) {
        return super.existsDelegate(
          'query',
          'userInterviewData',
          { where },
          {},
          '{ id }'
        );
      },
      UserInterviewQuestion(where) {
        return super.existsDelegate(
          'query',
          'userInterviewQuestions',
          { where },
          {},
          '{ id }'
        );
      },
      UserRecordDataByDay(where) {
        return super.existsDelegate(
          'query',
          'userRecordDataByDays',
          { where },
          {},
          '{ id }'
        );
      },
      UserRecordDataByPeriod(where) {
        return super.existsDelegate(
          'query',
          'userRecordDataByPeriods',
          { where },
          {},
          '{ id }'
        );
      },
      UserRecordDataByTime(where) {
        return super.existsDelegate(
          'query',
          'userRecordDataByTimes',
          { where },
          {},
          '{ id }'
        );
      },
      UsersDataAnalysis(where) {
        return super.existsDelegate(
          'query',
          'usersDataAnalyses',
          { where },
          {},
          '{ id }'
        );
      }
    };

    this.query = {
      answerTypes(args, info) {
        return self.delegate('query', 'answerTypes', args, {}, info);
      },
      appServerSyncs(args, info) {
        return self.delegate('query', 'appServerSyncs', args, {}, info);
      },
      authTokens(args, info) {
        return self.delegate('query', 'authTokens', args, {}, info);
      },
      calibrations(args, info) {
        return self.delegate('query', 'calibrations', args, {}, info);
      },
      companies(args, info) {
        return self.delegate('query', 'companies', args, {}, info);
      },
      countries(args, info) {
        return self.delegate('query', 'countries', args, {}, info);
      },
      cups(args, info) {
        return self.delegate('query', 'cups', args, {}, info);
      },
      cupAppSyncs(args, info) {
        return self.delegate('query', 'cupAppSyncs', args, {}, info);
      },
      cupDataAnswers(args, info) {
        return self.delegate('query', 'cupDataAnswers', args, {}, info);
      },
      cupDataColourCalcs(args, info) {
        return self.delegate('query', 'cupDataColourCalcs', args, {}, info);
      },
      cupDataColourCalibs(args, info) {
        return self.delegate('query', 'cupDataColourCalibs', args, {}, info);
      },
      cupDataManMdates(args, info) {
        return self.delegate('query', 'cupDataManMdates', args, {}, info);
      },
      cupDataProcFlows(args, info) {
        return self.delegate('query', 'cupDataProcFlows', args, {}, info);
      },
      cupDataProcMdates(args, info) {
        return self.delegate('query', 'cupDataProcMdates', args, {}, info);
      },
      cupDataProcVolumes(args, info) {
        return self.delegate('query', 'cupDataProcVolumes', args, {}, info);
      },
      cupDataQaResponses(args, info) {
        return self.delegate('query', 'cupDataQaResponses', args, {}, info);
      },
      cupDataQuestions(args, info) {
        return self.delegate('query', 'cupDataQuestions', args, {}, info);
      },
      cupDataRaws(args, info) {
        return self.delegate('query', 'cupDataRaws', args, {}, info);
      },
      cupDataRejections(args, info) {
        return self.delegate('query', 'cupDataRejections', args, {}, info);
      },
      cupDataUserRemoves(args, info) {
        return self.delegate('query', 'cupDataUserRemoves', args, {}, info);
      },
      cupDataUserRemoveExplains(args, info) {
        return self.delegate(
          'query',
          'cupDataUserRemoveExplains',
          args,
          {},
          info
        );
      },
      cupData(args, info) {
        return self.delegate('query', 'cupData', args, {}, info);
      },
      ethnicities(args, info) {
        return self.delegate('query', 'ethnicities', args, {}, info);
      },
      firmwares(args, info) {
        return self.delegate('query', 'firmwares', args, {}, info);
      },
      hardwares(args, info) {
        return self.delegate('query', 'hardwares', args, {}, info);
      },
      platformComps(args, info) {
        return self.delegate('query', 'platformComps', args, {}, info);
      },
      users(args, info) {
        return self.delegate('query', 'users', args, {}, info);
      },
      userCoinHistories(args, info) {
        return self.delegate('query', 'userCoinHistories', args, {}, info);
      },
      userCups(args, info) {
        return self.delegate('query', 'userCups', args, {}, info);
      },
      userInterviewData(args, info) {
        return self.delegate('query', 'userInterviewData', args, {}, info);
      },
      userInterviewQuestions(args, info) {
        return self.delegate('query', 'userInterviewQuestions', args, {}, info);
      },
      userRecordDataByDays(args, info) {
        return self.delegate('query', 'userRecordDataByDays', args, {}, info);
      },
      userRecordDataByPeriods(args, info) {
        return self.delegate(
          'query',
          'userRecordDataByPeriods',
          args,
          {},
          info
        );
      },
      userRecordDataByTimes(args, info) {
        return self.delegate('query', 'userRecordDataByTimes', args, {}, info);
      },
      usersDataAnalyses(args, info) {
        return self.delegate('query', 'usersDataAnalyses', args, {}, info);
      },
      answerType(args, info) {
        return self.delegate('query', 'answerType', args, {}, info);
      },
      appServerSync(args, info) {
        return self.delegate('query', 'appServerSync', args, {}, info);
      },
      authToken(args, info) {
        return self.delegate('query', 'authToken', args, {}, info);
      },
      calibration(args, info) {
        return self.delegate('query', 'calibration', args, {}, info);
      },
      company(args, info) {
        return self.delegate('query', 'company', args, {}, info);
      },
      country(args, info) {
        return self.delegate('query', 'country', args, {}, info);
      },
      cup(args, info) {
        return self.delegate('query', 'cup', args, {}, info);
      },
      cupAppSync(args, info) {
        return self.delegate('query', 'cupAppSync', args, {}, info);
      },
      cupDataAnswer(args, info) {
        return self.delegate('query', 'cupDataAnswer', args, {}, info);
      },
      cupDataColourCalc(args, info) {
        return self.delegate('query', 'cupDataColourCalc', args, {}, info);
      },
      cupDataColourCalib(args, info) {
        return self.delegate('query', 'cupDataColourCalib', args, {}, info);
      },
      cupDataManMdate(args, info) {
        return self.delegate('query', 'cupDataManMdate', args, {}, info);
      },
      cupDataProcFlow(args, info) {
        return self.delegate('query', 'cupDataProcFlow', args, {}, info);
      },
      cupDataProcMdate(args, info) {
        return self.delegate('query', 'cupDataProcMdate', args, {}, info);
      },
      cupDataProcVolume(args, info) {
        return self.delegate('query', 'cupDataProcVolume', args, {}, info);
      },
      cupDataQaResponse(args, info) {
        return self.delegate('query', 'cupDataQaResponse', args, {}, info);
      },
      cupDataQuestion(args, info) {
        return self.delegate('query', 'cupDataQuestion', args, {}, info);
      },
      cupDataRaw(args, info) {
        return self.delegate('query', 'cupDataRaw', args, {}, info);
      },
      cupDataRejection(args, info) {
        return self.delegate('query', 'cupDataRejection', args, {}, info);
      },
      cupDataUserRemove(args, info) {
        return self.delegate('query', 'cupDataUserRemove', args, {}, info);
      },
      cupDataUserRemoveExplain(args, info) {
        return self.delegate(
          'query',
          'cupDataUserRemoveExplain',
          args,
          {},
          info
        );
      },
      cupDatum(args, info) {
        return self.delegate('query', 'cupDatum', args, {}, info);
      },
      ethnicity(args, info) {
        return self.delegate('query', 'ethnicity', args, {}, info);
      },
      firmware(args, info) {
        return self.delegate('query', 'firmware', args, {}, info);
      },
      hardware(args, info) {
        return self.delegate('query', 'hardware', args, {}, info);
      },
      platformComp(args, info) {
        return self.delegate('query', 'platformComp', args, {}, info);
      },
      user(args, info) {
        return self.delegate('query', 'user', args, {}, info);
      },
      userCoinHistory(args, info) {
        return self.delegate('query', 'userCoinHistory', args, {}, info);
      },
      userCup(args, info) {
        return self.delegate('query', 'userCup', args, {}, info);
      },
      userInterviewDatum(args, info) {
        return self.delegate('query', 'userInterviewDatum', args, {}, info);
      },
      userInterviewQuestion(args, info) {
        return self.delegate('query', 'userInterviewQuestion', args, {}, info);
      },
      userRecordDataByDay(args, info) {
        return self.delegate('query', 'userRecordDataByDay', args, {}, info);
      },
      userRecordDataByPeriod(args, info) {
        return self.delegate('query', 'userRecordDataByPeriod', args, {}, info);
      },
      userRecordDataByTime(args, info) {
        return self.delegate('query', 'userRecordDataByTime', args, {}, info);
      },
      usersDataAnalysis(args, info) {
        return self.delegate('query', 'usersDataAnalysis', args, {}, info);
      },
      answerTypesConnection(args, info) {
        return self.delegate('query', 'answerTypesConnection', args, {}, info);
      },
      appServerSyncsConnection(args, info) {
        return self.delegate(
          'query',
          'appServerSyncsConnection',
          args,
          {},
          info
        );
      },
      authTokensConnection(args, info) {
        return self.delegate('query', 'authTokensConnection', args, {}, info);
      },
      calibrationsConnection(args, info) {
        return self.delegate('query', 'calibrationsConnection', args, {}, info);
      },
      companiesConnection(args, info) {
        return self.delegate('query', 'companiesConnection', args, {}, info);
      },
      countriesConnection(args, info) {
        return self.delegate('query', 'countriesConnection', args, {}, info);
      },
      cupsConnection(args, info) {
        return self.delegate('query', 'cupsConnection', args, {}, info);
      },
      cupAppSyncsConnection(args, info) {
        return self.delegate('query', 'cupAppSyncsConnection', args, {}, info);
      },
      cupDataAnswersConnection(args, info) {
        return self.delegate(
          'query',
          'cupDataAnswersConnection',
          args,
          {},
          info
        );
      },
      cupDataColourCalcsConnection(args, info) {
        return self.delegate(
          'query',
          'cupDataColourCalcsConnection',
          args,
          {},
          info
        );
      },
      cupDataColourCalibsConnection(args, info) {
        return self.delegate(
          'query',
          'cupDataColourCalibsConnection',
          args,
          {},
          info
        );
      },
      cupDataManMdatesConnection(args, info) {
        return self.delegate(
          'query',
          'cupDataManMdatesConnection',
          args,
          {},
          info
        );
      },
      cupDataProcFlowsConnection(args, info) {
        return self.delegate(
          'query',
          'cupDataProcFlowsConnection',
          args,
          {},
          info
        );
      },
      cupDataProcMdatesConnection(args, info) {
        return self.delegate(
          'query',
          'cupDataProcMdatesConnection',
          args,
          {},
          info
        );
      },
      cupDataProcVolumesConnection(args, info) {
        return self.delegate(
          'query',
          'cupDataProcVolumesConnection',
          args,
          {},
          info
        );
      },
      cupDataQaResponsesConnection(args, info) {
        return self.delegate(
          'query',
          'cupDataQaResponsesConnection',
          args,
          {},
          info
        );
      },
      cupDataQuestionsConnection(args, info) {
        return self.delegate(
          'query',
          'cupDataQuestionsConnection',
          args,
          {},
          info
        );
      },
      cupDataRawsConnection(args, info) {
        return self.delegate('query', 'cupDataRawsConnection', args, {}, info);
      },
      cupDataRejectionsConnection(args, info) {
        return self.delegate(
          'query',
          'cupDataRejectionsConnection',
          args,
          {},
          info
        );
      },
      cupDataUserRemovesConnection(args, info) {
        return self.delegate(
          'query',
          'cupDataUserRemovesConnection',
          args,
          {},
          info
        );
      },
      cupDataUserRemoveExplainsConnection(args, info) {
        return self.delegate(
          'query',
          'cupDataUserRemoveExplainsConnection',
          args,
          {},
          info
        );
      },
      cupDataConnection(args, info) {
        return self.delegate('query', 'cupDataConnection', args, {}, info);
      },
      ethnicitiesConnection(args, info) {
        return self.delegate('query', 'ethnicitiesConnection', args, {}, info);
      },
      firmwaresConnection(args, info) {
        return self.delegate('query', 'firmwaresConnection', args, {}, info);
      },
      hardwaresConnection(args, info) {
        return self.delegate('query', 'hardwaresConnection', args, {}, info);
      },
      platformCompsConnection(args, info) {
        return self.delegate(
          'query',
          'platformCompsConnection',
          args,
          {},
          info
        );
      },
      usersConnection(args, info) {
        return self.delegate('query', 'usersConnection', args, {}, info);
      },
      userCoinHistoriesConnection(args, info) {
        return self.delegate(
          'query',
          'userCoinHistoriesConnection',
          args,
          {},
          info
        );
      },
      userCupsConnection(args, info) {
        return self.delegate('query', 'userCupsConnection', args, {}, info);
      },
      userInterviewDataConnection(args, info) {
        return self.delegate(
          'query',
          'userInterviewDataConnection',
          args,
          {},
          info
        );
      },
      userInterviewQuestionsConnection(args, info) {
        return self.delegate(
          'query',
          'userInterviewQuestionsConnection',
          args,
          {},
          info
        );
      },
      userRecordDataByDaysConnection(args, info) {
        return self.delegate(
          'query',
          'userRecordDataByDaysConnection',
          args,
          {},
          info
        );
      },
      userRecordDataByPeriodsConnection(args, info) {
        return self.delegate(
          'query',
          'userRecordDataByPeriodsConnection',
          args,
          {},
          info
        );
      },
      userRecordDataByTimesConnection(args, info) {
        return self.delegate(
          'query',
          'userRecordDataByTimesConnection',
          args,
          {},
          info
        );
      },
      usersDataAnalysesConnection(args, info) {
        return self.delegate(
          'query',
          'usersDataAnalysesConnection',
          args,
          {},
          info
        );
      }
    };

    this.mutation = {
      createAnswerType(args, info) {
        return self.delegate('mutation', 'createAnswerType', args, {}, info);
      },
      createAppServerSync(args, info) {
        return self.delegate('mutation', 'createAppServerSync', args, {}, info);
      },
      createAuthToken(args, info) {
        return self.delegate('mutation', 'createAuthToken', args, {}, info);
      },
      createCalibration(args, info) {
        return self.delegate('mutation', 'createCalibration', args, {}, info);
      },
      createCompany(args, info) {
        return self.delegate('mutation', 'createCompany', args, {}, info);
      },
      createCountry(args, info) {
        return self.delegate('mutation', 'createCountry', args, {}, info);
      },
      createCup(args, info) {
        return self.delegate('mutation', 'createCup', args, {}, info);
      },
      createCupAppSync(args, info) {
        return self.delegate('mutation', 'createCupAppSync', args, {}, info);
      },
      createCupDataAnswer(args, info) {
        return self.delegate('mutation', 'createCupDataAnswer', args, {}, info);
      },
      createCupDataColourCalc(args, info) {
        return self.delegate(
          'mutation',
          'createCupDataColourCalc',
          args,
          {},
          info
        );
      },
      createCupDataColourCalib(args, info) {
        return self.delegate(
          'mutation',
          'createCupDataColourCalib',
          args,
          {},
          info
        );
      },
      createCupDataManMdate(args, info) {
        return self.delegate(
          'mutation',
          'createCupDataManMdate',
          args,
          {},
          info
        );
      },
      createCupDataProcFlow(args, info) {
        return self.delegate(
          'mutation',
          'createCupDataProcFlow',
          args,
          {},
          info
        );
      },
      createCupDataProcMdate(args, info) {
        return self.delegate(
          'mutation',
          'createCupDataProcMdate',
          args,
          {},
          info
        );
      },
      createCupDataProcVolume(args, info) {
        return self.delegate(
          'mutation',
          'createCupDataProcVolume',
          args,
          {},
          info
        );
      },
      createCupDataQaResponse(args, info) {
        return self.delegate(
          'mutation',
          'createCupDataQaResponse',
          args,
          {},
          info
        );
      },
      createCupDataQuestion(args, info) {
        return self.delegate(
          'mutation',
          'createCupDataQuestion',
          args,
          {},
          info
        );
      },
      createCupDataRaw(args, info) {
        return self.delegate('mutation', 'createCupDataRaw', args, {}, info);
      },
      createCupDataRejection(args, info) {
        return self.delegate(
          'mutation',
          'createCupDataRejection',
          args,
          {},
          info
        );
      },
      createCupDataUserRemove(args, info) {
        return self.delegate(
          'mutation',
          'createCupDataUserRemove',
          args,
          {},
          info
        );
      },
      createCupDataUserRemoveExplain(args, info) {
        return self.delegate(
          'mutation',
          'createCupDataUserRemoveExplain',
          args,
          {},
          info
        );
      },
      createCupDatum(args, info) {
        return self.delegate('mutation', 'createCupDatum', args, {}, info);
      },
      createEthnicity(args, info) {
        return self.delegate('mutation', 'createEthnicity', args, {}, info);
      },
      createFirmware(args, info) {
        return self.delegate('mutation', 'createFirmware', args, {}, info);
      },
      createHardware(args, info) {
        return self.delegate('mutation', 'createHardware', args, {}, info);
      },
      createPlatformComp(args, info) {
        return self.delegate('mutation', 'createPlatformComp', args, {}, info);
      },
      createUser(args, info) {
        return self.delegate('mutation', 'createUser', args, {}, info);
      },
      createUserCoinHistory(args, info) {
        return self.delegate(
          'mutation',
          'createUserCoinHistory',
          args,
          {},
          info
        );
      },
      createUserCup(args, info) {
        return self.delegate('mutation', 'createUserCup', args, {}, info);
      },
      createUserInterviewDatum(args, info) {
        return self.delegate(
          'mutation',
          'createUserInterviewDatum',
          args,
          {},
          info
        );
      },
      createUserInterviewQuestion(args, info) {
        return self.delegate(
          'mutation',
          'createUserInterviewQuestion',
          args,
          {},
          info
        );
      },
      createUserRecordDataByDay(args, info) {
        return self.delegate(
          'mutation',
          'createUserRecordDataByDay',
          args,
          {},
          info
        );
      },
      createUserRecordDataByPeriod(args, info) {
        return self.delegate(
          'mutation',
          'createUserRecordDataByPeriod',
          args,
          {},
          info
        );
      },
      createUserRecordDataByTime(args, info) {
        return self.delegate(
          'mutation',
          'createUserRecordDataByTime',
          args,
          {},
          info
        );
      },
      createUsersDataAnalysis(args, info) {
        return self.delegate(
          'mutation',
          'createUsersDataAnalysis',
          args,
          {},
          info
        );
      },
      updateAnswerType(args, info) {
        return self.delegate('mutation', 'updateAnswerType', args, {}, info);
      },
      updateAppServerSync(args, info) {
        return self.delegate('mutation', 'updateAppServerSync', args, {}, info);
      },
      updateCalibration(args, info) {
        return self.delegate('mutation', 'updateCalibration', args, {}, info);
      },
      updateCompany(args, info) {
        return self.delegate('mutation', 'updateCompany', args, {}, info);
      },
      updateCountry(args, info) {
        return self.delegate('mutation', 'updateCountry', args, {}, info);
      },
      updateCup(args, info) {
        return self.delegate('mutation', 'updateCup', args, {}, info);
      },
      updateCupAppSync(args, info) {
        return self.delegate('mutation', 'updateCupAppSync', args, {}, info);
      },
      updateCupDataAnswer(args, info) {
        return self.delegate('mutation', 'updateCupDataAnswer', args, {}, info);
      },
      updateCupDataColourCalc(args, info) {
        return self.delegate(
          'mutation',
          'updateCupDataColourCalc',
          args,
          {},
          info
        );
      },
      updateCupDataColourCalib(args, info) {
        return self.delegate(
          'mutation',
          'updateCupDataColourCalib',
          args,
          {},
          info
        );
      },
      updateCupDataManMdate(args, info) {
        return self.delegate(
          'mutation',
          'updateCupDataManMdate',
          args,
          {},
          info
        );
      },
      updateCupDataProcFlow(args, info) {
        return self.delegate(
          'mutation',
          'updateCupDataProcFlow',
          args,
          {},
          info
        );
      },
      updateCupDataProcMdate(args, info) {
        return self.delegate(
          'mutation',
          'updateCupDataProcMdate',
          args,
          {},
          info
        );
      },
      updateCupDataProcVolume(args, info) {
        return self.delegate(
          'mutation',
          'updateCupDataProcVolume',
          args,
          {},
          info
        );
      },
      updateCupDataQaResponse(args, info) {
        return self.delegate(
          'mutation',
          'updateCupDataQaResponse',
          args,
          {},
          info
        );
      },
      updateCupDataQuestion(args, info) {
        return self.delegate(
          'mutation',
          'updateCupDataQuestion',
          args,
          {},
          info
        );
      },
      updateCupDataRaw(args, info) {
        return self.delegate('mutation', 'updateCupDataRaw', args, {}, info);
      },
      updateCupDataRejection(args, info) {
        return self.delegate(
          'mutation',
          'updateCupDataRejection',
          args,
          {},
          info
        );
      },
      updateCupDataUserRemove(args, info) {
        return self.delegate(
          'mutation',
          'updateCupDataUserRemove',
          args,
          {},
          info
        );
      },
      updateCupDataUserRemoveExplain(args, info) {
        return self.delegate(
          'mutation',
          'updateCupDataUserRemoveExplain',
          args,
          {},
          info
        );
      },
      updateCupDatum(args, info) {
        return self.delegate('mutation', 'updateCupDatum', args, {}, info);
      },
      updateEthnicity(args, info) {
        return self.delegate('mutation', 'updateEthnicity', args, {}, info);
      },
      updateFirmware(args, info) {
        return self.delegate('mutation', 'updateFirmware', args, {}, info);
      },
      updateHardware(args, info) {
        return self.delegate('mutation', 'updateHardware', args, {}, info);
      },
      updatePlatformComp(args, info) {
        return self.delegate('mutation', 'updatePlatformComp', args, {}, info);
      },
      updateUser(args, info) {
        return self.delegate('mutation', 'updateUser', args, {}, info);
      },
      updateUserCoinHistory(args, info) {
        return self.delegate(
          'mutation',
          'updateUserCoinHistory',
          args,
          {},
          info
        );
      },
      updateUserCup(args, info) {
        return self.delegate('mutation', 'updateUserCup', args, {}, info);
      },
      updateUserInterviewDatum(args, info) {
        return self.delegate(
          'mutation',
          'updateUserInterviewDatum',
          args,
          {},
          info
        );
      },
      updateUserInterviewQuestion(args, info) {
        return self.delegate(
          'mutation',
          'updateUserInterviewQuestion',
          args,
          {},
          info
        );
      },
      updateUserRecordDataByDay(args, info) {
        return self.delegate(
          'mutation',
          'updateUserRecordDataByDay',
          args,
          {},
          info
        );
      },
      updateUserRecordDataByPeriod(args, info) {
        return self.delegate(
          'mutation',
          'updateUserRecordDataByPeriod',
          args,
          {},
          info
        );
      },
      updateUserRecordDataByTime(args, info) {
        return self.delegate(
          'mutation',
          'updateUserRecordDataByTime',
          args,
          {},
          info
        );
      },
      updateUsersDataAnalysis(args, info) {
        return self.delegate(
          'mutation',
          'updateUsersDataAnalysis',
          args,
          {},
          info
        );
      },
      deleteAnswerType(args, info) {
        return self.delegate('mutation', 'deleteAnswerType', args, {}, info);
      },
      deleteAppServerSync(args, info) {
        return self.delegate('mutation', 'deleteAppServerSync', args, {}, info);
      },
      deleteAuthToken(args, info) {
        return self.delegate('mutation', 'deleteAuthToken', args, {}, info);
      },
      deleteCalibration(args, info) {
        return self.delegate('mutation', 'deleteCalibration', args, {}, info);
      },
      deleteCompany(args, info) {
        return self.delegate('mutation', 'deleteCompany', args, {}, info);
      },
      deleteCountry(args, info) {
        return self.delegate('mutation', 'deleteCountry', args, {}, info);
      },
      deleteCup(args, info) {
        return self.delegate('mutation', 'deleteCup', args, {}, info);
      },
      deleteCupAppSync(args, info) {
        return self.delegate('mutation', 'deleteCupAppSync', args, {}, info);
      },
      deleteCupDataAnswer(args, info) {
        return self.delegate('mutation', 'deleteCupDataAnswer', args, {}, info);
      },
      deleteCupDataColourCalc(args, info) {
        return self.delegate(
          'mutation',
          'deleteCupDataColourCalc',
          args,
          {},
          info
        );
      },
      deleteCupDataColourCalib(args, info) {
        return self.delegate(
          'mutation',
          'deleteCupDataColourCalib',
          args,
          {},
          info
        );
      },
      deleteCupDataManMdate(args, info) {
        return self.delegate(
          'mutation',
          'deleteCupDataManMdate',
          args,
          {},
          info
        );
      },
      deleteCupDataProcFlow(args, info) {
        return self.delegate(
          'mutation',
          'deleteCupDataProcFlow',
          args,
          {},
          info
        );
      },
      deleteCupDataProcMdate(args, info) {
        return self.delegate(
          'mutation',
          'deleteCupDataProcMdate',
          args,
          {},
          info
        );
      },
      deleteCupDataProcVolume(args, info) {
        return self.delegate(
          'mutation',
          'deleteCupDataProcVolume',
          args,
          {},
          info
        );
      },
      deleteCupDataQaResponse(args, info) {
        return self.delegate(
          'mutation',
          'deleteCupDataQaResponse',
          args,
          {},
          info
        );
      },
      deleteCupDataQuestion(args, info) {
        return self.delegate(
          'mutation',
          'deleteCupDataQuestion',
          args,
          {},
          info
        );
      },
      deleteCupDataRaw(args, info) {
        return self.delegate('mutation', 'deleteCupDataRaw', args, {}, info);
      },
      deleteCupDataRejection(args, info) {
        return self.delegate(
          'mutation',
          'deleteCupDataRejection',
          args,
          {},
          info
        );
      },
      deleteCupDataUserRemove(args, info) {
        return self.delegate(
          'mutation',
          'deleteCupDataUserRemove',
          args,
          {},
          info
        );
      },
      deleteCupDataUserRemoveExplain(args, info) {
        return self.delegate(
          'mutation',
          'deleteCupDataUserRemoveExplain',
          args,
          {},
          info
        );
      },
      deleteCupDatum(args, info) {
        return self.delegate('mutation', 'deleteCupDatum', args, {}, info);
      },
      deleteEthnicity(args, info) {
        return self.delegate('mutation', 'deleteEthnicity', args, {}, info);
      },
      deleteFirmware(args, info) {
        return self.delegate('mutation', 'deleteFirmware', args, {}, info);
      },
      deleteHardware(args, info) {
        return self.delegate('mutation', 'deleteHardware', args, {}, info);
      },
      deletePlatformComp(args, info) {
        return self.delegate('mutation', 'deletePlatformComp', args, {}, info);
      },
      deleteUser(args, info) {
        return self.delegate('mutation', 'deleteUser', args, {}, info);
      },
      deleteUserCoinHistory(args, info) {
        return self.delegate(
          'mutation',
          'deleteUserCoinHistory',
          args,
          {},
          info
        );
      },
      deleteUserCup(args, info) {
        return self.delegate('mutation', 'deleteUserCup', args, {}, info);
      },
      deleteUserInterviewDatum(args, info) {
        return self.delegate(
          'mutation',
          'deleteUserInterviewDatum',
          args,
          {},
          info
        );
      },
      deleteUserInterviewQuestion(args, info) {
        return self.delegate(
          'mutation',
          'deleteUserInterviewQuestion',
          args,
          {},
          info
        );
      },
      deleteUserRecordDataByDay(args, info) {
        return self.delegate(
          'mutation',
          'deleteUserRecordDataByDay',
          args,
          {},
          info
        );
      },
      deleteUserRecordDataByPeriod(args, info) {
        return self.delegate(
          'mutation',
          'deleteUserRecordDataByPeriod',
          args,
          {},
          info
        );
      },
      deleteUserRecordDataByTime(args, info) {
        return self.delegate(
          'mutation',
          'deleteUserRecordDataByTime',
          args,
          {},
          info
        );
      },
      deleteUsersDataAnalysis(args, info) {
        return self.delegate(
          'mutation',
          'deleteUsersDataAnalysis',
          args,
          {},
          info
        );
      },
      upsertAnswerType(args, info) {
        return self.delegate('mutation', 'upsertAnswerType', args, {}, info);
      },
      upsertAppServerSync(args, info) {
        return self.delegate('mutation', 'upsertAppServerSync', args, {}, info);
      },
      upsertCalibration(args, info) {
        return self.delegate('mutation', 'upsertCalibration', args, {}, info);
      },
      upsertCompany(args, info) {
        return self.delegate('mutation', 'upsertCompany', args, {}, info);
      },
      upsertCountry(args, info) {
        return self.delegate('mutation', 'upsertCountry', args, {}, info);
      },
      upsertCup(args, info) {
        return self.delegate('mutation', 'upsertCup', args, {}, info);
      },
      upsertCupAppSync(args, info) {
        return self.delegate('mutation', 'upsertCupAppSync', args, {}, info);
      },
      upsertCupDataAnswer(args, info) {
        return self.delegate('mutation', 'upsertCupDataAnswer', args, {}, info);
      },
      upsertCupDataColourCalc(args, info) {
        return self.delegate(
          'mutation',
          'upsertCupDataColourCalc',
          args,
          {},
          info
        );
      },
      upsertCupDataColourCalib(args, info) {
        return self.delegate(
          'mutation',
          'upsertCupDataColourCalib',
          args,
          {},
          info
        );
      },
      upsertCupDataManMdate(args, info) {
        return self.delegate(
          'mutation',
          'upsertCupDataManMdate',
          args,
          {},
          info
        );
      },
      upsertCupDataProcFlow(args, info) {
        return self.delegate(
          'mutation',
          'upsertCupDataProcFlow',
          args,
          {},
          info
        );
      },
      upsertCupDataProcMdate(args, info) {
        return self.delegate(
          'mutation',
          'upsertCupDataProcMdate',
          args,
          {},
          info
        );
      },
      upsertCupDataProcVolume(args, info) {
        return self.delegate(
          'mutation',
          'upsertCupDataProcVolume',
          args,
          {},
          info
        );
      },
      upsertCupDataQaResponse(args, info) {
        return self.delegate(
          'mutation',
          'upsertCupDataQaResponse',
          args,
          {},
          info
        );
      },
      upsertCupDataQuestion(args, info) {
        return self.delegate(
          'mutation',
          'upsertCupDataQuestion',
          args,
          {},
          info
        );
      },
      upsertCupDataRaw(args, info) {
        return self.delegate('mutation', 'upsertCupDataRaw', args, {}, info);
      },
      upsertCupDataRejection(args, info) {
        return self.delegate(
          'mutation',
          'upsertCupDataRejection',
          args,
          {},
          info
        );
      },
      upsertCupDataUserRemove(args, info) {
        return self.delegate(
          'mutation',
          'upsertCupDataUserRemove',
          args,
          {},
          info
        );
      },
      upsertCupDataUserRemoveExplain(args, info) {
        return self.delegate(
          'mutation',
          'upsertCupDataUserRemoveExplain',
          args,
          {},
          info
        );
      },
      upsertCupDatum(args, info) {
        return self.delegate('mutation', 'upsertCupDatum', args, {}, info);
      },
      upsertEthnicity(args, info) {
        return self.delegate('mutation', 'upsertEthnicity', args, {}, info);
      },
      upsertFirmware(args, info) {
        return self.delegate('mutation', 'upsertFirmware', args, {}, info);
      },
      upsertHardware(args, info) {
        return self.delegate('mutation', 'upsertHardware', args, {}, info);
      },
      upsertPlatformComp(args, info) {
        return self.delegate('mutation', 'upsertPlatformComp', args, {}, info);
      },
      upsertUser(args, info) {
        return self.delegate('mutation', 'upsertUser', args, {}, info);
      },
      upsertUserCoinHistory(args, info) {
        return self.delegate(
          'mutation',
          'upsertUserCoinHistory',
          args,
          {},
          info
        );
      },
      upsertUserCup(args, info) {
        return self.delegate('mutation', 'upsertUserCup', args, {}, info);
      },
      upsertUserInterviewDatum(args, info) {
        return self.delegate(
          'mutation',
          'upsertUserInterviewDatum',
          args,
          {},
          info
        );
      },
      upsertUserInterviewQuestion(args, info) {
        return self.delegate(
          'mutation',
          'upsertUserInterviewQuestion',
          args,
          {},
          info
        );
      },
      upsertUserRecordDataByDay(args, info) {
        return self.delegate(
          'mutation',
          'upsertUserRecordDataByDay',
          args,
          {},
          info
        );
      },
      upsertUserRecordDataByPeriod(args, info) {
        return self.delegate(
          'mutation',
          'upsertUserRecordDataByPeriod',
          args,
          {},
          info
        );
      },
      upsertUserRecordDataByTime(args, info) {
        return self.delegate(
          'mutation',
          'upsertUserRecordDataByTime',
          args,
          {},
          info
        );
      },
      upsertUsersDataAnalysis(args, info) {
        return self.delegate(
          'mutation',
          'upsertUsersDataAnalysis',
          args,
          {},
          info
        );
      },
      updateManyAnswerTypes(args, info) {
        return self.delegate(
          'mutation',
          'updateManyAnswerTypes',
          args,
          {},
          info
        );
      },
      updateManyAppServerSyncs(args, info) {
        return self.delegate(
          'mutation',
          'updateManyAppServerSyncs',
          args,
          {},
          info
        );
      },
      updateManyCalibrations(args, info) {
        return self.delegate(
          'mutation',
          'updateManyCalibrations',
          args,
          {},
          info
        );
      },
      updateManyCompanies(args, info) {
        return self.delegate('mutation', 'updateManyCompanies', args, {}, info);
      },
      updateManyCountries(args, info) {
        return self.delegate('mutation', 'updateManyCountries', args, {}, info);
      },
      updateManyCups(args, info) {
        return self.delegate('mutation', 'updateManyCups', args, {}, info);
      },
      updateManyCupAppSyncs(args, info) {
        return self.delegate(
          'mutation',
          'updateManyCupAppSyncs',
          args,
          {},
          info
        );
      },
      updateManyCupDataAnswers(args, info) {
        return self.delegate(
          'mutation',
          'updateManyCupDataAnswers',
          args,
          {},
          info
        );
      },
      updateManyCupDataColourCalcs(args, info) {
        return self.delegate(
          'mutation',
          'updateManyCupDataColourCalcs',
          args,
          {},
          info
        );
      },
      updateManyCupDataColourCalibs(args, info) {
        return self.delegate(
          'mutation',
          'updateManyCupDataColourCalibs',
          args,
          {},
          info
        );
      },
      updateManyCupDataManMdates(args, info) {
        return self.delegate(
          'mutation',
          'updateManyCupDataManMdates',
          args,
          {},
          info
        );
      },
      updateManyCupDataProcFlows(args, info) {
        return self.delegate(
          'mutation',
          'updateManyCupDataProcFlows',
          args,
          {},
          info
        );
      },
      updateManyCupDataProcMdates(args, info) {
        return self.delegate(
          'mutation',
          'updateManyCupDataProcMdates',
          args,
          {},
          info
        );
      },
      updateManyCupDataProcVolumes(args, info) {
        return self.delegate(
          'mutation',
          'updateManyCupDataProcVolumes',
          args,
          {},
          info
        );
      },
      updateManyCupDataQaResponses(args, info) {
        return self.delegate(
          'mutation',
          'updateManyCupDataQaResponses',
          args,
          {},
          info
        );
      },
      updateManyCupDataQuestions(args, info) {
        return self.delegate(
          'mutation',
          'updateManyCupDataQuestions',
          args,
          {},
          info
        );
      },
      updateManyCupDataRaws(args, info) {
        return self.delegate(
          'mutation',
          'updateManyCupDataRaws',
          args,
          {},
          info
        );
      },
      updateManyCupDataRejections(args, info) {
        return self.delegate(
          'mutation',
          'updateManyCupDataRejections',
          args,
          {},
          info
        );
      },
      updateManyCupDataUserRemoves(args, info) {
        return self.delegate(
          'mutation',
          'updateManyCupDataUserRemoves',
          args,
          {},
          info
        );
      },
      updateManyCupDataUserRemoveExplains(args, info) {
        return self.delegate(
          'mutation',
          'updateManyCupDataUserRemoveExplains',
          args,
          {},
          info
        );
      },
      updateManyCupData(args, info) {
        return self.delegate('mutation', 'updateManyCupData', args, {}, info);
      },
      updateManyEthnicities(args, info) {
        return self.delegate(
          'mutation',
          'updateManyEthnicities',
          args,
          {},
          info
        );
      },
      updateManyFirmwares(args, info) {
        return self.delegate('mutation', 'updateManyFirmwares', args, {}, info);
      },
      updateManyHardwares(args, info) {
        return self.delegate('mutation', 'updateManyHardwares', args, {}, info);
      },
      updateManyPlatformComps(args, info) {
        return self.delegate(
          'mutation',
          'updateManyPlatformComps',
          args,
          {},
          info
        );
      },
      updateManyUsers(args, info) {
        return self.delegate('mutation', 'updateManyUsers', args, {}, info);
      },
      updateManyUserCoinHistories(args, info) {
        return self.delegate(
          'mutation',
          'updateManyUserCoinHistories',
          args,
          {},
          info
        );
      },
      updateManyUserInterviewData(args, info) {
        return self.delegate(
          'mutation',
          'updateManyUserInterviewData',
          args,
          {},
          info
        );
      },
      updateManyUserInterviewQuestions(args, info) {
        return self.delegate(
          'mutation',
          'updateManyUserInterviewQuestions',
          args,
          {},
          info
        );
      },
      updateManyUserRecordDataByDays(args, info) {
        return self.delegate(
          'mutation',
          'updateManyUserRecordDataByDays',
          args,
          {},
          info
        );
      },
      updateManyUserRecordDataByPeriods(args, info) {
        return self.delegate(
          'mutation',
          'updateManyUserRecordDataByPeriods',
          args,
          {},
          info
        );
      },
      updateManyUserRecordDataByTimes(args, info) {
        return self.delegate(
          'mutation',
          'updateManyUserRecordDataByTimes',
          args,
          {},
          info
        );
      },
      updateManyUsersDataAnalyses(args, info) {
        return self.delegate(
          'mutation',
          'updateManyUsersDataAnalyses',
          args,
          {},
          info
        );
      },
      deleteManyAnswerTypes(args, info) {
        return self.delegate(
          'mutation',
          'deleteManyAnswerTypes',
          args,
          {},
          info
        );
      },
      deleteManyAppServerSyncs(args, info) {
        return self.delegate(
          'mutation',
          'deleteManyAppServerSyncs',
          args,
          {},
          info
        );
      },
      deleteManyAuthTokens(args, info) {
        return self.delegate(
          'mutation',
          'deleteManyAuthTokens',
          args,
          {},
          info
        );
      },
      deleteManyCalibrations(args, info) {
        return self.delegate(
          'mutation',
          'deleteManyCalibrations',
          args,
          {},
          info
        );
      },
      deleteManyCompanies(args, info) {
        return self.delegate('mutation', 'deleteManyCompanies', args, {}, info);
      },
      deleteManyCountries(args, info) {
        return self.delegate('mutation', 'deleteManyCountries', args, {}, info);
      },
      deleteManyCups(args, info) {
        return self.delegate('mutation', 'deleteManyCups', args, {}, info);
      },
      deleteManyCupAppSyncs(args, info) {
        return self.delegate(
          'mutation',
          'deleteManyCupAppSyncs',
          args,
          {},
          info
        );
      },
      deleteManyCupDataAnswers(args, info) {
        return self.delegate(
          'mutation',
          'deleteManyCupDataAnswers',
          args,
          {},
          info
        );
      },
      deleteManyCupDataColourCalcs(args, info) {
        return self.delegate(
          'mutation',
          'deleteManyCupDataColourCalcs',
          args,
          {},
          info
        );
      },
      deleteManyCupDataColourCalibs(args, info) {
        return self.delegate(
          'mutation',
          'deleteManyCupDataColourCalibs',
          args,
          {},
          info
        );
      },
      deleteManyCupDataManMdates(args, info) {
        return self.delegate(
          'mutation',
          'deleteManyCupDataManMdates',
          args,
          {},
          info
        );
      },
      deleteManyCupDataProcFlows(args, info) {
        return self.delegate(
          'mutation',
          'deleteManyCupDataProcFlows',
          args,
          {},
          info
        );
      },
      deleteManyCupDataProcMdates(args, info) {
        return self.delegate(
          'mutation',
          'deleteManyCupDataProcMdates',
          args,
          {},
          info
        );
      },
      deleteManyCupDataProcVolumes(args, info) {
        return self.delegate(
          'mutation',
          'deleteManyCupDataProcVolumes',
          args,
          {},
          info
        );
      },
      deleteManyCupDataQaResponses(args, info) {
        return self.delegate(
          'mutation',
          'deleteManyCupDataQaResponses',
          args,
          {},
          info
        );
      },
      deleteManyCupDataQuestions(args, info) {
        return self.delegate(
          'mutation',
          'deleteManyCupDataQuestions',
          args,
          {},
          info
        );
      },
      deleteManyCupDataRaws(args, info) {
        return self.delegate(
          'mutation',
          'deleteManyCupDataRaws',
          args,
          {},
          info
        );
      },
      deleteManyCupDataRejections(args, info) {
        return self.delegate(
          'mutation',
          'deleteManyCupDataRejections',
          args,
          {},
          info
        );
      },
      deleteManyCupDataUserRemoves(args, info) {
        return self.delegate(
          'mutation',
          'deleteManyCupDataUserRemoves',
          args,
          {},
          info
        );
      },
      deleteManyCupDataUserRemoveExplains(args, info) {
        return self.delegate(
          'mutation',
          'deleteManyCupDataUserRemoveExplains',
          args,
          {},
          info
        );
      },
      deleteManyCupData(args, info) {
        return self.delegate('mutation', 'deleteManyCupData', args, {}, info);
      },
      deleteManyEthnicities(args, info) {
        return self.delegate(
          'mutation',
          'deleteManyEthnicities',
          args,
          {},
          info
        );
      },
      deleteManyFirmwares(args, info) {
        return self.delegate('mutation', 'deleteManyFirmwares', args, {}, info);
      },
      deleteManyHardwares(args, info) {
        return self.delegate('mutation', 'deleteManyHardwares', args, {}, info);
      },
      deleteManyPlatformComps(args, info) {
        return self.delegate(
          'mutation',
          'deleteManyPlatformComps',
          args,
          {},
          info
        );
      },
      deleteManyUsers(args, info) {
        return self.delegate('mutation', 'deleteManyUsers', args, {}, info);
      },
      deleteManyUserCoinHistories(args, info) {
        return self.delegate(
          'mutation',
          'deleteManyUserCoinHistories',
          args,
          {},
          info
        );
      },
      deleteManyUserCups(args, info) {
        return self.delegate('mutation', 'deleteManyUserCups', args, {}, info);
      },
      deleteManyUserInterviewData(args, info) {
        return self.delegate(
          'mutation',
          'deleteManyUserInterviewData',
          args,
          {},
          info
        );
      },
      deleteManyUserInterviewQuestions(args, info) {
        return self.delegate(
          'mutation',
          'deleteManyUserInterviewQuestions',
          args,
          {},
          info
        );
      },
      deleteManyUserRecordDataByDays(args, info) {
        return self.delegate(
          'mutation',
          'deleteManyUserRecordDataByDays',
          args,
          {},
          info
        );
      },
      deleteManyUserRecordDataByPeriods(args, info) {
        return self.delegate(
          'mutation',
          'deleteManyUserRecordDataByPeriods',
          args,
          {},
          info
        );
      },
      deleteManyUserRecordDataByTimes(args, info) {
        return self.delegate(
          'mutation',
          'deleteManyUserRecordDataByTimes',
          args,
          {},
          info
        );
      },
      deleteManyUsersDataAnalyses(args, info) {
        return self.delegate(
          'mutation',
          'deleteManyUsersDataAnalyses',
          args,
          {},
          info
        );
      },
      executeRaw(args, info) {
        return self.delegate('mutation', 'executeRaw', args, {}, info);
      }
    };

    this.subscription = {
      answerType(args, infoOrQuery) {
        return self.delegateSubscription('answerType', args, {}, infoOrQuery);
      },
      appServerSync(args, infoOrQuery) {
        return self.delegateSubscription(
          'appServerSync',
          args,
          {},
          infoOrQuery
        );
      },
      authToken(args, infoOrQuery) {
        return self.delegateSubscription('authToken', args, {}, infoOrQuery);
      },
      calibration(args, infoOrQuery) {
        return self.delegateSubscription('calibration', args, {}, infoOrQuery);
      },
      company(args, infoOrQuery) {
        return self.delegateSubscription('company', args, {}, infoOrQuery);
      },
      country(args, infoOrQuery) {
        return self.delegateSubscription('country', args, {}, infoOrQuery);
      },
      cup(args, infoOrQuery) {
        return self.delegateSubscription('cup', args, {}, infoOrQuery);
      },
      cupAppSync(args, infoOrQuery) {
        return self.delegateSubscription('cupAppSync', args, {}, infoOrQuery);
      },
      cupDataAnswer(args, infoOrQuery) {
        return self.delegateSubscription(
          'cupDataAnswer',
          args,
          {},
          infoOrQuery
        );
      },
      cupDataColourCalc(args, infoOrQuery) {
        return self.delegateSubscription(
          'cupDataColourCalc',
          args,
          {},
          infoOrQuery
        );
      },
      cupDataColourCalib(args, infoOrQuery) {
        return self.delegateSubscription(
          'cupDataColourCalib',
          args,
          {},
          infoOrQuery
        );
      },
      cupDataManMdate(args, infoOrQuery) {
        return self.delegateSubscription(
          'cupDataManMdate',
          args,
          {},
          infoOrQuery
        );
      },
      cupDataProcFlow(args, infoOrQuery) {
        return self.delegateSubscription(
          'cupDataProcFlow',
          args,
          {},
          infoOrQuery
        );
      },
      cupDataProcMdate(args, infoOrQuery) {
        return self.delegateSubscription(
          'cupDataProcMdate',
          args,
          {},
          infoOrQuery
        );
      },
      cupDataProcVolume(args, infoOrQuery) {
        return self.delegateSubscription(
          'cupDataProcVolume',
          args,
          {},
          infoOrQuery
        );
      },
      cupDataQaResponse(args, infoOrQuery) {
        return self.delegateSubscription(
          'cupDataQaResponse',
          args,
          {},
          infoOrQuery
        );
      },
      cupDataQuestion(args, infoOrQuery) {
        return self.delegateSubscription(
          'cupDataQuestion',
          args,
          {},
          infoOrQuery
        );
      },
      cupDataRaw(args, infoOrQuery) {
        return self.delegateSubscription('cupDataRaw', args, {}, infoOrQuery);
      },
      cupDataRejection(args, infoOrQuery) {
        return self.delegateSubscription(
          'cupDataRejection',
          args,
          {},
          infoOrQuery
        );
      },
      cupDataUserRemove(args, infoOrQuery) {
        return self.delegateSubscription(
          'cupDataUserRemove',
          args,
          {},
          infoOrQuery
        );
      },
      cupDataUserRemoveExplain(args, infoOrQuery) {
        return self.delegateSubscription(
          'cupDataUserRemoveExplain',
          args,
          {},
          infoOrQuery
        );
      },
      cupDatum(args, infoOrQuery) {
        return self.delegateSubscription('cupDatum', args, {}, infoOrQuery);
      },
      ethnicity(args, infoOrQuery) {
        return self.delegateSubscription('ethnicity', args, {}, infoOrQuery);
      },
      firmware(args, infoOrQuery) {
        return self.delegateSubscription('firmware', args, {}, infoOrQuery);
      },
      hardware(args, infoOrQuery) {
        return self.delegateSubscription('hardware', args, {}, infoOrQuery);
      },
      platformComp(args, infoOrQuery) {
        return self.delegateSubscription('platformComp', args, {}, infoOrQuery);
      },
      user(args, infoOrQuery) {
        return self.delegateSubscription('user', args, {}, infoOrQuery);
      },
      userCoinHistory(args, infoOrQuery) {
        return self.delegateSubscription(
          'userCoinHistory',
          args,
          {},
          infoOrQuery
        );
      },
      userCup(args, infoOrQuery) {
        return self.delegateSubscription('userCup', args, {}, infoOrQuery);
      },
      userInterviewDatum(args, infoOrQuery) {
        return self.delegateSubscription(
          'userInterviewDatum',
          args,
          {},
          infoOrQuery
        );
      },
      userInterviewQuestion(args, infoOrQuery) {
        return self.delegateSubscription(
          'userInterviewQuestion',
          args,
          {},
          infoOrQuery
        );
      },
      userRecordDataByDay(args, infoOrQuery) {
        return self.delegateSubscription(
          'userRecordDataByDay',
          args,
          {},
          infoOrQuery
        );
      },
      userRecordDataByPeriod(args, infoOrQuery) {
        return self.delegateSubscription(
          'userRecordDataByPeriod',
          args,
          {},
          infoOrQuery
        );
      },
      userRecordDataByTime(args, infoOrQuery) {
        return self.delegateSubscription(
          'userRecordDataByTime',
          args,
          {},
          infoOrQuery
        );
      },
      usersDataAnalysis(args, infoOrQuery) {
        return self.delegateSubscription(
          'usersDataAnalysis',
          args,
          {},
          infoOrQuery
        );
      }
    };
  }

  delegate(operation, field, args, context, info) {
    return super.delegate(operation, field, args, context, info);
  }
};

module.exports = {
  typeDefs
};
