'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  const stateChanges = [];

  let copyState = { ...state };

  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        copyState = { ...copyState, ...action.extraData };
        break;

      case 'removeProperties':
        copyState = { ...copyState };

        for (const key of action.keysToRemove) {
          delete copyState[key];
        }
        break;

      case 'clear':
        copyState = {};
        break;

      default:
        return `Unknown action type: ${action.type}`;
    }

    stateChanges.push(copyState);
  }

  return stateChanges;
}

module.exports = transformStateWithClones;
