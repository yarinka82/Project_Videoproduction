import { BLOCK_TYPE, BUNDLING_POSITION } from "./constants.js";

export async function loadHTML(block_type, file) {
  const elWhereToAdd = document.getElementById('main');
  const response = await fetch(file);
  const html = await response.text();

  if (!html) return;

  let position = null;

if (block_type === BLOCK_TYPE.HEADER) {
    position = BUNDLING_POSITION.BEFORE_BEGIN;
  } else if (block_type === BLOCK_TYPE.FOOTER) {
    position = BUNDLING_POSITION.AFTER_END;
  } else {
    position = BUNDLING_POSITION.BEFORE_END;
  }

  elWhereToAdd.insertAdjacentHTML(position, html)
}
