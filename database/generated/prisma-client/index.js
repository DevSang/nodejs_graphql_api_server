'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
var prisma_lib_1 = require('prisma-client-lib');
var typeDefs = require('./prisma-schema').typeDefs;

var models = [
  {
    name: 'AnswerType',
    embedded: false
  },
  {
    name: 'AppServerSync',
    embedded: false
  },
  {
    name: 'AuthToken',
    embedded: false
  },
  {
    name: 'Calibration',
    embedded: false
  },
  {
    name: 'Company',
    embedded: false
  },
  {
    name: 'Country',
    embedded: false
  },
  {
    name: 'Cup',
    embedded: false
  },
  {
    name: 'CupAppSync',
    embedded: false
  },
  {
    name: 'CupDataAnswer',
    embedded: false
  },
  {
    name: 'CupDataColourCalc',
    embedded: false
  },
  {
    name: 'CupDataColourCalib',
    embedded: false
  },
  {
    name: 'CupDataManMdate',
    embedded: false
  },
  {
    name: 'CupDataProcFlow',
    embedded: false
  },
  {
    name: 'CupDataProcMdate',
    embedded: false
  },
  {
    name: 'CupDataProcVolume',
    embedded: false
  },
  {
    name: 'CupDataQaResponse',
    embedded: false
  },
  {
    name: 'CupDataQuestion',
    embedded: false
  },
  {
    name: 'CupDataRaw',
    embedded: false
  },
  {
    name: 'CupDataRejection',
    embedded: false
  },
  {
    name: 'CupDataUserRemove',
    embedded: false
  },
  {
    name: 'CupDataUserRemoveExplain',
    embedded: false
  },
  {
    name: 'CupDatum',
    embedded: false
  },
  {
    name: 'Ethnicity',
    embedded: false
  },
  {
    name: 'Firmware',
    embedded: false
  },
  {
    name: 'Hardware',
    embedded: false
  },
  {
    name: 'PlatformComp',
    embedded: false
  },
  {
    name: 'User',
    embedded: false
  },
  {
    name: 'UserCoinHistory',
    embedded: false
  },
  {
    name: 'UserCup',
    embedded: false
  },
  {
    name: 'UserInterviewDatum',
    embedded: false
  },
  {
    name: 'UserInterviewQuestion',
    embedded: false
  },
  {
    name: 'UserRecordDataByDay',
    embedded: false
  },
  {
    name: 'UserRecordDataByPeriod',
    embedded: false
  },
  {
    name: 'UserRecordDataByTime',
    embedded: false
  },
  {
    name: 'UsersDataAnalysis',
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `http://localhost:4466`
});
exports.prisma = new exports.Prisma();
