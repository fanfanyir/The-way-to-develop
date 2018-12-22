import * as constants from './constants';

export const getFocused = (focused) => ({
  type: constants.SEARCH_FOCUSED,
  focused

})

export const getBlur = (focused) => ({
  type: constants.SEARCH_BLUR,
  focused
})
