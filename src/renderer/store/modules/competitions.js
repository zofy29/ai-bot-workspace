import fs from 'fs';
import path from 'path';

/**
 * Transforms the json as saved in static/competitions into an object
 * that can be used in the store. It adds properties like "seedValue"
 * and "maxTimebankValue".
 *
 * @param {Object} obj The json object as retrieved from one of the files in static/competitions
 * @returns {Object} The transformed object, directly usable in the store
 */
function createCompetitionFromJSON(obj) {
  return {
    ...obj,
    lastLaunch: null,
    lastUpdateCheck: null,

    configuration: {
      ...obj.configuration,
      seedValue: null,

      configurationItems: {
        ...obj.configuration.configurationItems.map(item => ({
          ...item,
          value: null,
        })),
      },
    },
  };
}

/**
 * Loads all competitions from static/competitions.
 *
 * @returns {Object[]} An array containing all the competitions
 */
function loadCompetitions() {
  return fs
    .readdirSync(path.resolve(__static, 'competitions/'))
    .map(file => path.resolve(__static, 'competitions/', file))
    .map((file) => {
      const contents = fs.readFileSync(file).toString();
      return createCompetitionFromJSON(JSON.parse(contents));
    });
}

export const competitions = {
  namespaced: true,
  state: {
    all: loadCompetitions(),
  },
  getters: {
    getCompetitionById: state => id => state.all.find(c => c.id === id),
    getCompetitionBackgroundBase64: () => id => fs.readFileSync(path.join(__static, 'patterns/', `${id}.png`)).toString('base64'),
    getCompetitionThumbnailBase64: () => id => fs.readFileSync(path.join(__static, 'thumbnails/', `${id}.png`)).toString('base64'),
  },
  mutations: {},
  actions: {},
};
