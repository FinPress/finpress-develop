/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@wordpress/core-data/build-module/actions.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@wordpress/core-data/build-module/actions.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __experimentalBatch: () => (/* binding */ __experimentalBatch),
/* harmony export */   __experimentalReceiveCurrentGlobalStylesId: () => (/* binding */ __experimentalReceiveCurrentGlobalStylesId),
/* harmony export */   __experimentalReceiveThemeBaseGlobalStyles: () => (/* binding */ __experimentalReceiveThemeBaseGlobalStyles),
/* harmony export */   __experimentalReceiveThemeGlobalStyleVariations: () => (/* binding */ __experimentalReceiveThemeGlobalStyleVariations),
/* harmony export */   __experimentalSaveSpecifiedEntityEdits: () => (/* binding */ __experimentalSaveSpecifiedEntityEdits),
/* harmony export */   __unstableCreateUndoLevel: () => (/* binding */ __unstableCreateUndoLevel),
/* harmony export */   addEntities: () => (/* binding */ addEntities),
/* harmony export */   deleteEntityRecord: () => (/* binding */ deleteEntityRecord),
/* harmony export */   editEntityRecord: () => (/* binding */ editEntityRecord),
/* harmony export */   receiveAutosaves: () => (/* binding */ receiveAutosaves),
/* harmony export */   receiveCurrentTheme: () => (/* binding */ receiveCurrentTheme),
/* harmony export */   receiveCurrentUser: () => (/* binding */ receiveCurrentUser),
/* harmony export */   receiveDefaultTemplateId: () => (/* binding */ receiveDefaultTemplateId),
/* harmony export */   receiveEmbedPreview: () => (/* binding */ receiveEmbedPreview),
/* harmony export */   receiveEntityRecords: () => (/* binding */ receiveEntityRecords),
/* harmony export */   receiveNavigationFallbackId: () => (/* binding */ receiveNavigationFallbackId),
/* harmony export */   receiveRevisions: () => (/* binding */ receiveRevisions),
/* harmony export */   receiveThemeGlobalStyleRevisions: () => (/* binding */ receiveThemeGlobalStyleRevisions),
/* harmony export */   receiveThemeSupports: () => (/* binding */ receiveThemeSupports),
/* harmony export */   receiveUploadPermissions: () => (/* binding */ receiveUploadPermissions),
/* harmony export */   receiveUserPermission: () => (/* binding */ receiveUserPermission),
/* harmony export */   receiveUserPermissions: () => (/* binding */ receiveUserPermissions),
/* harmony export */   receiveUserQuery: () => (/* binding */ receiveUserQuery),
/* harmony export */   redo: () => (/* binding */ redo),
/* harmony export */   saveEditedEntityRecord: () => (/* binding */ saveEditedEntityRecord),
/* harmony export */   saveEntityRecord: () => (/* binding */ saveEntityRecord),
/* harmony export */   undo: () => (/* binding */ undo)
/* harmony export */ });
/* harmony import */ var fast_deep_equal_es6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fast-deep-equal/es6 */ "./node_modules/fast-deep-equal/es6/index.js");
/* harmony import */ var fast_deep_equal_es6__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fast_deep_equal_es6__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! uuid */ "./node_modules/@wordpress/core-data/node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/deprecated */ "@wordpress/deprecated");
/* harmony import */ var _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_deprecated__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils */ "./node_modules/@wordpress/core-data/build-module/utils/set-nested-value.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils */ "./node_modules/@wordpress/core-data/build-module/utils/get-nested-value.js");
/* harmony import */ var _queried_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./queried-data */ "./node_modules/@wordpress/core-data/build-module/queried-data/actions.js");
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./entities */ "./node_modules/@wordpress/core-data/build-module/entities.js");
/* harmony import */ var _batch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./batch */ "./node_modules/@wordpress/core-data/build-module/batch/create-batch.js");
/* harmony import */ var _name__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./name */ "./node_modules/@wordpress/core-data/build-module/name.js");
/**
 * External dependencies
 */



/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */







/**
 * Returns an action object used in signalling that authors have been received.
 * Ignored from documentation as it's internal to the data store.
 *
 * @ignore
 *
 * @param {string}       queryID Query ID.
 * @param {Array|Object} users   Users received.
 *
 * @return {Object} Action object.
 */
function receiveUserQuery(queryID, users) {
  return {
    type: 'RECEIVE_USER_QUERY',
    users: Array.isArray(users) ? users : [users],
    queryID
  };
}

/**
 * Returns an action used in signalling that the current user has been received.
 * Ignored from documentation as it's internal to the data store.
 *
 * @ignore
 *
 * @param {Object} currentUser Current user object.
 *
 * @return {Object} Action object.
 */
function receiveCurrentUser(currentUser) {
  return {
    type: 'RECEIVE_CURRENT_USER',
    currentUser
  };
}

/**
 * Returns an action object used in adding new entities.
 *
 * @param {Array} entities Entities received.
 *
 * @return {Object} Action object.
 */
function addEntities(entities) {
  return {
    type: 'ADD_ENTITIES',
    entities
  };
}

/**
 * Returns an action object used in signalling that entity records have been received.
 *
 * @param {string}       kind            Kind of the received entity record.
 * @param {string}       name            Name of the received entity record.
 * @param {Array|Object} records         Records received.
 * @param {?Object}      query           Query Object.
 * @param {?boolean}     invalidateCache Should invalidate query caches.
 * @param {?Object}      edits           Edits to reset.
 * @param {?Object}      meta            Meta information about pagination.
 * @return {Object} Action object.
 */
function receiveEntityRecords(kind, name, records, query, invalidateCache = false, edits, meta) {
  // Auto drafts should not have titles, but some plugins rely on them so we can't filter this
  // on the server.
  if (kind === 'postType') {
    records = (Array.isArray(records) ? records : [records]).map(record => record.status === 'auto-draft' ? {
      ...record,
      title: ''
    } : record);
  }
  let action;
  if (query) {
    action = (0,_queried_data__WEBPACK_IMPORTED_MODULE_4__.receiveQueriedItems)(records, query, edits, meta);
  } else {
    action = (0,_queried_data__WEBPACK_IMPORTED_MODULE_4__.receiveItems)(records, edits, meta);
  }
  return {
    ...action,
    kind,
    name,
    invalidateCache
  };
}

/**
 * Returns an action object used in signalling that the current theme has been received.
 * Ignored from documentation as it's internal to the data store.
 *
 * @ignore
 *
 * @param {Object} currentTheme The current theme.
 *
 * @return {Object} Action object.
 */
function receiveCurrentTheme(currentTheme) {
  return {
    type: 'RECEIVE_CURRENT_THEME',
    currentTheme
  };
}

/**
 * Returns an action object used in signalling that the current global styles id has been received.
 * Ignored from documentation as it's internal to the data store.
 *
 * @ignore
 *
 * @param {string} currentGlobalStylesId The current global styles id.
 *
 * @return {Object} Action object.
 */
function __experimentalReceiveCurrentGlobalStylesId(currentGlobalStylesId) {
  return {
    type: 'RECEIVE_CURRENT_GLOBAL_STYLES_ID',
    id: currentGlobalStylesId
  };
}

/**
 * Returns an action object used in signalling that the theme base global styles have been received
 * Ignored from documentation as it's internal to the data store.
 *
 * @ignore
 *
 * @param {string} stylesheet   The theme's identifier
 * @param {Object} globalStyles The global styles object.
 *
 * @return {Object} Action object.
 */
function __experimentalReceiveThemeBaseGlobalStyles(stylesheet, globalStyles) {
  return {
    type: 'RECEIVE_THEME_GLOBAL_STYLES',
    stylesheet,
    globalStyles
  };
}

/**
 * Returns an action object used in signalling that the theme global styles variations have been received.
 * Ignored from documentation as it's internal to the data store.
 *
 * @ignore
 *
 * @param {string} stylesheet The theme's identifier
 * @param {Array}  variations The global styles variations.
 *
 * @return {Object} Action object.
 */
function __experimentalReceiveThemeGlobalStyleVariations(stylesheet, variations) {
  return {
    type: 'RECEIVE_THEME_GLOBAL_STYLE_VARIATIONS',
    stylesheet,
    variations
  };
}

/**
 * Returns an action object used in signalling that the index has been received.
 *
 * @deprecated since WP 5.9, this is not useful anymore, use the selector directly.
 *
 * @return {Object} Action object.
 */
function receiveThemeSupports() {
  _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_3___default()("wp.data.dispatch( 'core' ).receiveThemeSupports", {
    since: '5.9'
  });
  return {
    type: 'DO_NOTHING'
  };
}

/**
 * Returns an action object used in signalling that the theme global styles CPT post revisions have been received.
 * Ignored from documentation as it's internal to the data store.
 *
 * @deprecated since WordPress 6.5.0. Callers should use `dispatch( 'core' ).receiveRevision` instead.
 *
 * @ignore
 *
 * @param {number} currentId The post id.
 * @param {Array}  revisions The global styles revisions.
 *
 * @return {Object} Action object.
 */
function receiveThemeGlobalStyleRevisions(currentId, revisions) {
  _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_3___default()("wp.data.dispatch( 'core' ).receiveThemeGlobalStyleRevisions()", {
    since: '6.5.0',
    alternative: "wp.data.dispatch( 'core' ).receiveRevisions"
  });
  return {
    type: 'RECEIVE_THEME_GLOBAL_STYLE_REVISIONS',
    currentId,
    revisions
  };
}

/**
 * Returns an action object used in signalling that the preview data for
 * a given URl has been received.
 * Ignored from documentation as it's internal to the data store.
 *
 * @ignore
 *
 * @param {string} url     URL to preview the embed for.
 * @param {*}      preview Preview data.
 *
 * @return {Object} Action object.
 */
function receiveEmbedPreview(url, preview) {
  return {
    type: 'RECEIVE_EMBED_PREVIEW',
    url,
    preview
  };
}

/**
 * Action triggered to delete an entity record.
 *
 * @param {string}        kind                         Kind of the deleted entity.
 * @param {string}        name                         Name of the deleted entity.
 * @param {number|string} recordId                     Record ID of the deleted entity.
 * @param {?Object}       query                        Special query parameters for the
 *                                                     DELETE API call.
 * @param {Object}        [options]                    Delete options.
 * @param {Function}      [options.__unstableFetch]    Internal use only. Function to
 *                                                     call instead of `apiFetch()`.
 *                                                     Must return a promise.
 * @param {boolean}       [options.throwOnError=false] If false, this action suppresses all
 *                                                     the exceptions. Defaults to false.
 */
const deleteEntityRecord = (kind, name, recordId, query, {
  __unstableFetch = (_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default()),
  throwOnError = false
} = {}) => async ({
  dispatch,
  resolveSelect
}) => {
  const configs = await resolveSelect.getEntitiesConfig(kind);
  const entityConfig = configs.find(config => config.kind === kind && config.name === name);
  let error;
  let deletedRecord = false;
  if (!entityConfig) {
    return;
  }
  const lock = await dispatch.__unstableAcquireStoreLock(_name__WEBPACK_IMPORTED_MODULE_5__.STORE_NAME, ['entities', 'records', kind, name, recordId], {
    exclusive: true
  });
  try {
    dispatch({
      type: 'DELETE_ENTITY_RECORD_START',
      kind,
      name,
      recordId
    });
    let hasError = false;
    try {
      let path = `${entityConfig.baseURL}/${recordId}`;
      if (query) {
        path = (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_2__.addQueryArgs)(path, query);
      }
      deletedRecord = await __unstableFetch({
        path,
        method: 'DELETE'
      });
      await dispatch((0,_queried_data__WEBPACK_IMPORTED_MODULE_4__.removeItems)(kind, name, recordId, true));
    } catch (_error) {
      hasError = true;
      error = _error;
    }
    dispatch({
      type: 'DELETE_ENTITY_RECORD_FINISH',
      kind,
      name,
      recordId,
      error
    });
    if (hasError && throwOnError) {
      throw error;
    }
    return deletedRecord;
  } finally {
    dispatch.__unstableReleaseStoreLock(lock);
  }
};

/**
 * Returns an action object that triggers an
 * edit to an entity record.
 *
 * @param {string}        kind                 Kind of the edited entity record.
 * @param {string}        name                 Name of the edited entity record.
 * @param {number|string} recordId             Record ID of the edited entity record.
 * @param {Object}        edits                The edits.
 * @param {Object}        options              Options for the edit.
 * @param {boolean}       [options.undoIgnore] Whether to ignore the edit in undo history or not.
 *
 * @return {Object} Action object.
 */
const editEntityRecord = (kind, name, recordId, edits, options = {}) => ({
  select,
  dispatch
}) => {
  const entityConfig = select.getEntityConfig(kind, name);
  if (!entityConfig) {
    throw new Error(`The entity being edited (${kind}, ${name}) does not have a loaded config.`);
  }
  const {
    mergedEdits = {}
  } = entityConfig;
  const record = select.getRawEntityRecord(kind, name, recordId);
  const editedRecord = select.getEditedEntityRecord(kind, name, recordId);
  const edit = {
    kind,
    name,
    recordId,
    // Clear edits when they are equal to their persisted counterparts
    // so that the property is not considered dirty.
    edits: Object.keys(edits).reduce((acc, key) => {
      const recordValue = record[key];
      const editedRecordValue = editedRecord[key];
      const value = mergedEdits[key] ? {
        ...editedRecordValue,
        ...edits[key]
      } : edits[key];
      acc[key] = fast_deep_equal_es6__WEBPACK_IMPORTED_MODULE_0___default()(recordValue, value) ? undefined : value;
      return acc;
    }, {})
  };
  if (window.__experimentalEnableSync && entityConfig.syncConfig) {
    if (false) {}
  } else {
    if (!options.undoIgnore) {
      select.getUndoManager().addRecord([{
        id: {
          kind,
          name,
          recordId
        },
        changes: Object.keys(edits).reduce((acc, key) => {
          acc[key] = {
            from: editedRecord[key],
            to: edits[key]
          };
          return acc;
        }, {})
      }], options.isCached);
    }
    dispatch({
      type: 'EDIT_ENTITY_RECORD',
      ...edit
    });
  }
};

/**
 * Action triggered to undo the last edit to
 * an entity record, if any.
 */
const undo = () => ({
  select,
  dispatch
}) => {
  const undoRecord = select.getUndoManager().undo();
  if (!undoRecord) {
    return;
  }
  dispatch({
    type: 'UNDO',
    record: undoRecord
  });
};

/**
 * Action triggered to redo the last undone
 * edit to an entity record, if any.
 */
const redo = () => ({
  select,
  dispatch
}) => {
  const redoRecord = select.getUndoManager().redo();
  if (!redoRecord) {
    return;
  }
  dispatch({
    type: 'REDO',
    record: redoRecord
  });
};

/**
 * Forces the creation of a new undo level.
 *
 * @return {Object} Action object.
 */
const __unstableCreateUndoLevel = () => ({
  select
}) => {
  select.getUndoManager().addRecord();
};

/**
 * Action triggered to save an entity record.
 *
 * @param {string}   kind                         Kind of the received entity.
 * @param {string}   name                         Name of the received entity.
 * @param {Object}   record                       Record to be saved.
 * @param {Object}   options                      Saving options.
 * @param {boolean}  [options.isAutosave=false]   Whether this is an autosave.
 * @param {Function} [options.__unstableFetch]    Internal use only. Function to
 *                                                call instead of `apiFetch()`.
 *                                                Must return a promise.
 * @param {boolean}  [options.throwOnError=false] If false, this action suppresses all
 *                                                the exceptions. Defaults to false.
 */
const saveEntityRecord = (kind, name, record, {
  isAutosave = false,
  __unstableFetch = (_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default()),
  throwOnError = false
} = {}) => async ({
  select,
  resolveSelect,
  dispatch
}) => {
  const configs = await resolveSelect.getEntitiesConfig(kind);
  const entityConfig = configs.find(config => config.kind === kind && config.name === name);
  if (!entityConfig) {
    return;
  }
  const entityIdKey = entityConfig.key || _entities__WEBPACK_IMPORTED_MODULE_6__.DEFAULT_ENTITY_KEY;
  const recordId = record[entityIdKey];
  const lock = await dispatch.__unstableAcquireStoreLock(_name__WEBPACK_IMPORTED_MODULE_5__.STORE_NAME, ['entities', 'records', kind, name, recordId || (0,uuid__WEBPACK_IMPORTED_MODULE_7__["default"])()], {
    exclusive: true
  });
  try {
    // Evaluate optimized edits.
    // (Function edits that should be evaluated on save to avoid expensive computations on every edit.)
    for (const [key, value] of Object.entries(record)) {
      if (typeof value === 'function') {
        const evaluatedValue = value(select.getEditedEntityRecord(kind, name, recordId));
        dispatch.editEntityRecord(kind, name, recordId, {
          [key]: evaluatedValue
        }, {
          undoIgnore: true
        });
        record[key] = evaluatedValue;
      }
    }
    dispatch({
      type: 'SAVE_ENTITY_RECORD_START',
      kind,
      name,
      recordId,
      isAutosave
    });
    let updatedRecord;
    let error;
    let hasError = false;
    try {
      const path = `${entityConfig.baseURL}${recordId ? '/' + recordId : ''}`;
      const persistedRecord = select.getRawEntityRecord(kind, name, recordId);
      if (isAutosave) {
        // Most of this autosave logic is very specific to posts.
        // This is fine for now as it is the only supported autosave,
        // but ideally this should all be handled in the back end,
        // so the client just sends and receives objects.
        const currentUser = select.getCurrentUser();
        const currentUserId = currentUser ? currentUser.id : undefined;
        const autosavePost = await resolveSelect.getAutosave(persistedRecord.type, persistedRecord.id, currentUserId);
        // Autosaves need all expected fields to be present.
        // So we fallback to the previous autosave and then
        // to the actual persisted entity if the edits don't
        // have a value.
        let data = {
          ...persistedRecord,
          ...autosavePost,
          ...record
        };
        data = Object.keys(data).reduce((acc, key) => {
          if (['title', 'excerpt', 'content', 'meta'].includes(key)) {
            acc[key] = data[key];
          }
          return acc;
        }, {
          // Do not update the `status` if we have edited it when auto saving.
          // It's very important to let the user explicitly save this change,
          // because it can lead to unexpected results. An example would be to
          // have a draft post and change the status to publish.
          status: data.status === 'auto-draft' ? 'draft' : undefined
        });
        updatedRecord = await __unstableFetch({
          path: `${path}/autosaves`,
          method: 'POST',
          data
        });

        // An autosave may be processed by the server as a regular save
        // when its update is requested by the author and the post had
        // draft or auto-draft status.
        if (persistedRecord.id === updatedRecord.id) {
          let newRecord = {
            ...persistedRecord,
            ...data,
            ...updatedRecord
          };
          newRecord = Object.keys(newRecord).reduce((acc, key) => {
            // These properties are persisted in autosaves.
            if (['title', 'excerpt', 'content'].includes(key)) {
              acc[key] = newRecord[key];
            } else if (key === 'status') {
              // Status is only persisted in autosaves when going from
              // "auto-draft" to "draft".
              acc[key] = persistedRecord.status === 'auto-draft' && newRecord.status === 'draft' ? newRecord.status : persistedRecord.status;
            } else {
              // These properties are not persisted in autosaves.
              acc[key] = persistedRecord[key];
            }
            return acc;
          }, {});
          dispatch.receiveEntityRecords(kind, name, newRecord, undefined, true);
        } else {
          dispatch.receiveAutosaves(persistedRecord.id, updatedRecord);
        }
      } else {
        let edits = record;
        if (entityConfig.__unstablePrePersist) {
          edits = {
            ...edits,
            ...entityConfig.__unstablePrePersist(persistedRecord, edits)
          };
        }
        updatedRecord = await __unstableFetch({
          path,
          method: recordId ? 'PUT' : 'POST',
          data: edits
        });
        dispatch.receiveEntityRecords(kind, name, updatedRecord, undefined, true, edits);
      }
    } catch (_error) {
      hasError = true;
      error = _error;
    }
    dispatch({
      type: 'SAVE_ENTITY_RECORD_FINISH',
      kind,
      name,
      recordId,
      error,
      isAutosave
    });
    if (hasError && throwOnError) {
      throw error;
    }
    return updatedRecord;
  } finally {
    dispatch.__unstableReleaseStoreLock(lock);
  }
};

/**
 * Runs multiple core-data actions at the same time using one API request.
 *
 * Example:
 *
 * ```
 * const [ savedRecord, updatedRecord, deletedRecord ] =
 *   await dispatch( 'core' ).__experimentalBatch( [
 *     ( { saveEntityRecord } ) => saveEntityRecord( 'root', 'widget', widget ),
 *     ( { saveEditedEntityRecord } ) => saveEntityRecord( 'root', 'widget', 123 ),
 *     ( { deleteEntityRecord } ) => deleteEntityRecord( 'root', 'widget', 123, null ),
 *   ] );
 * ```
 *
 * @param {Array} requests Array of functions which are invoked simultaneously.
 *                         Each function is passed an object containing
 *                         `saveEntityRecord`, `saveEditedEntityRecord`, and
 *                         `deleteEntityRecord`.
 *
 * @return {(thunkArgs: Object) => Promise} A promise that resolves to an array containing the return
 *                                          values of each function given in `requests`.
 */
const __experimentalBatch = requests => async ({
  dispatch
}) => {
  const batch = (0,_batch__WEBPACK_IMPORTED_MODULE_8__["default"])();
  const api = {
    saveEntityRecord(kind, name, record, options) {
      return batch.add(add => dispatch.saveEntityRecord(kind, name, record, {
        ...options,
        __unstableFetch: add
      }));
    },
    saveEditedEntityRecord(kind, name, recordId, options) {
      return batch.add(add => dispatch.saveEditedEntityRecord(kind, name, recordId, {
        ...options,
        __unstableFetch: add
      }));
    },
    deleteEntityRecord(kind, name, recordId, query, options) {
      return batch.add(add => dispatch.deleteEntityRecord(kind, name, recordId, query, {
        ...options,
        __unstableFetch: add
      }));
    }
  };
  const resultPromises = requests.map(request => request(api));
  const [, ...results] = await Promise.all([batch.run(), ...resultPromises]);
  return results;
};

/**
 * Action triggered to save an entity record's edits.
 *
 * @param {string}  kind     Kind of the entity.
 * @param {string}  name     Name of the entity.
 * @param {Object}  recordId ID of the record.
 * @param {Object=} options  Saving options.
 */
const saveEditedEntityRecord = (kind, name, recordId, options) => async ({
  select,
  dispatch,
  resolveSelect
}) => {
  if (!select.hasEditsForEntityRecord(kind, name, recordId)) {
    return;
  }
  const configs = await resolveSelect.getEntitiesConfig(kind);
  const entityConfig = configs.find(config => config.kind === kind && config.name === name);
  if (!entityConfig) {
    return;
  }
  const entityIdKey = entityConfig.key || _entities__WEBPACK_IMPORTED_MODULE_6__.DEFAULT_ENTITY_KEY;
  const edits = select.getEntityRecordNonTransientEdits(kind, name, recordId);
  const record = {
    [entityIdKey]: recordId,
    ...edits
  };
  return await dispatch.saveEntityRecord(kind, name, record, options);
};

/**
 * Action triggered to save only specified properties for the entity.
 *
 * @param {string}        kind        Kind of the entity.
 * @param {string}        name        Name of the entity.
 * @param {number|string} recordId    ID of the record.
 * @param {Array}         itemsToSave List of entity properties or property paths to save.
 * @param {Object}        options     Saving options.
 */
const __experimentalSaveSpecifiedEntityEdits = (kind, name, recordId, itemsToSave, options) => async ({
  select,
  dispatch,
  resolveSelect
}) => {
  if (!select.hasEditsForEntityRecord(kind, name, recordId)) {
    return;
  }
  const edits = select.getEntityRecordNonTransientEdits(kind, name, recordId);
  const editsToSave = {};
  for (const item of itemsToSave) {
    (0,_utils__WEBPACK_IMPORTED_MODULE_9__["default"])(editsToSave, item, (0,_utils__WEBPACK_IMPORTED_MODULE_10__["default"])(edits, item));
  }
  const configs = await resolveSelect.getEntitiesConfig(kind);
  const entityConfig = configs.find(config => config.kind === kind && config.name === name);
  const entityIdKey = entityConfig?.key || _entities__WEBPACK_IMPORTED_MODULE_6__.DEFAULT_ENTITY_KEY;

  // If a record key is provided then update the existing record.
  // This necessitates providing `recordKey` to saveEntityRecord as part of the
  // `record` argument (here called `editsToSave`) to stop that action creating
  // a new record and instead cause it to update the existing record.
  if (recordId) {
    editsToSave[entityIdKey] = recordId;
  }
  return await dispatch.saveEntityRecord(kind, name, editsToSave, options);
};

/**
 * Returns an action object used in signalling that Upload permissions have been received.
 *
 * @deprecated since WP 5.9, use receiveUserPermission instead.
 *
 * @param {boolean} hasUploadPermissions Does the user have permission to upload files?
 *
 * @return {Object} Action object.
 */
function receiveUploadPermissions(hasUploadPermissions) {
  _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_3___default()("wp.data.dispatch( 'core' ).receiveUploadPermissions", {
    since: '5.9',
    alternative: 'receiveUserPermission'
  });
  return receiveUserPermission('create/media', hasUploadPermissions);
}

/**
 * Returns an action object used in signalling that the current user has
 * permission to perform an action on a REST resource.
 * Ignored from documentation as it's internal to the data store.
 *
 * @ignore
 *
 * @param {string}  key       A key that represents the action and REST resource.
 * @param {boolean} isAllowed Whether or not the user can perform the action.
 *
 * @return {Object} Action object.
 */
function receiveUserPermission(key, isAllowed) {
  return {
    type: 'RECEIVE_USER_PERMISSION',
    key,
    isAllowed
  };
}

/**
 * Returns an action object used in signalling that the current user has
 * permission to perform an action on a REST resource. Ignored from
 * documentation as it's internal to the data store.
 *
 * @ignore
 *
 * @param {Object<string, boolean>} permissions An object where keys represent
 *                                              actions and REST resources, and
 *                                              values indicate whether the user
 *                                              is allowed to perform the
 *                                              action.
 *
 * @return {Object} Action object.
 */
function receiveUserPermissions(permissions) {
  return {
    type: 'RECEIVE_USER_PERMISSIONS',
    permissions
  };
}

/**
 * Returns an action object used in signalling that the autosaves for a
 * post have been received.
 * Ignored from documentation as it's internal to the data store.
 *
 * @ignore
 *
 * @param {number}       postId    The id of the post that is parent to the autosave.
 * @param {Array|Object} autosaves An array of autosaves or singular autosave object.
 *
 * @return {Object} Action object.
 */
function receiveAutosaves(postId, autosaves) {
  return {
    type: 'RECEIVE_AUTOSAVES',
    postId,
    autosaves: Array.isArray(autosaves) ? autosaves : [autosaves]
  };
}

/**
 * Returns an action object signalling that the fallback Navigation
 * Menu id has been received.
 *
 * @param {integer} fallbackId the id of the fallback Navigation Menu
 * @return {Object} Action object.
 */
function receiveNavigationFallbackId(fallbackId) {
  return {
    type: 'RECEIVE_NAVIGATION_FALLBACK_ID',
    fallbackId
  };
}

/**
 * Returns an action object used to set the template for a given query.
 *
 * @param {Object} query      The lookup query.
 * @param {string} templateId The resolved template id.
 *
 * @return {Object} Action object.
 */
function receiveDefaultTemplateId(query, templateId) {
  return {
    type: 'RECEIVE_DEFAULT_TEMPLATE',
    query,
    templateId
  };
}

/**
 * Action triggered to receive revision items.
 *
 * @param {string}        kind            Kind of the received entity record revisions.
 * @param {string}        name            Name of the received entity record revisions.
 * @param {number|string} recordKey       The key of the entity record whose revisions you want to fetch.
 * @param {Array|Object}  records         Revisions received.
 * @param {?Object}       query           Query Object.
 * @param {?boolean}      invalidateCache Should invalidate query caches.
 * @param {?Object}       meta            Meta information about pagination.
 */
const receiveRevisions = (kind, name, recordKey, records, query, invalidateCache = false, meta) => async ({
  dispatch,
  resolveSelect
}) => {
  const configs = await resolveSelect.getEntitiesConfig(kind);
  const entityConfig = configs.find(config => config.kind === kind && config.name === name);
  const key = entityConfig && entityConfig?.revisionKey ? entityConfig.revisionKey : _entities__WEBPACK_IMPORTED_MODULE_6__.DEFAULT_ENTITY_KEY;
  dispatch({
    type: 'RECEIVE_ITEM_REVISIONS',
    key,
    items: Array.isArray(records) ? records : [records],
    recordKey,
    meta,
    query,
    kind,
    name,
    invalidateCache
  });
};


/***/ }),

/***/ "./node_modules/@wordpress/core-data/build-module/batch/create-batch.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@wordpress/core-data/build-module/batch/create-batch.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createBatch)
/* harmony export */ });
/* harmony import */ var _default_processor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./default-processor */ "./node_modules/@wordpress/core-data/build-module/batch/default-processor.js");
/**
 * Internal dependencies
 */


/**
 * Creates a batch, which can be used to combine multiple API requests into one
 * API request using the WordPress batch processing API (/v1/batch).
 *
 * ```
 * const batch = createBatch();
 * const dunePromise = batch.add( {
 *   path: '/v1/books',
 *   method: 'POST',
 *   data: { title: 'Dune' }
 * } );
 * const lotrPromise = batch.add( {
 *   path: '/v1/books',
 *   method: 'POST',
 *   data: { title: 'Lord of the Rings' }
 * } );
 * const isSuccess = await batch.run(); // Sends one POST to /v1/batch.
 * if ( isSuccess ) {
 *   console.log(
 *     'Saved two books:',
 *     await dunePromise,
 *     await lotrPromise
 *   );
 * }
 * ```
 *
 * @param {Function} [processor] Processor function. Can be used to replace the
 *                               default functionality which is to send an API
 *                               request to /v1/batch. Is given an array of
 *                               inputs and must return a promise that
 *                               resolves to an array of objects containing
 *                               either `output` or `error`.
 */
function createBatch(processor = _default_processor__WEBPACK_IMPORTED_MODULE_0__["default"]) {
  let lastId = 0;
  /** @type {Array<{ input: any; resolve: ( value: any ) => void; reject: ( error: any ) => void }>} */
  let queue = [];
  const pending = new ObservableSet();
  return {
    /**
     * Adds an input to the batch and returns a promise that is resolved or
     * rejected when the input is processed by `batch.run()`.
     *
     * You may also pass a thunk which allows inputs to be added
     * asynchronously.
     *
     * ```
     * // Both are allowed:
     * batch.add( { path: '/v1/books', ... } );
     * batch.add( ( add ) => add( { path: '/v1/books', ... } ) );
     * ```
     *
     * If a thunk is passed, `batch.run()` will pause until either:
     *
     * - The thunk calls its `add` argument, or;
     * - The thunk returns a promise and that promise resolves, or;
     * - The thunk returns a non-promise.
     *
     * @param {any|Function} inputOrThunk Input to add or thunk to execute.
     *
     * @return {Promise|any} If given an input, returns a promise that
     *                       is resolved or rejected when the batch is
     *                       processed. If given a thunk, returns the return
     *                       value of that thunk.
     */
    add(inputOrThunk) {
      const id = ++lastId;
      pending.add(id);
      const add = input => new Promise((resolve, reject) => {
        queue.push({
          input,
          resolve,
          reject
        });
        pending.delete(id);
      });
      if (typeof inputOrThunk === 'function') {
        return Promise.resolve(inputOrThunk(add)).finally(() => {
          pending.delete(id);
        });
      }
      return add(inputOrThunk);
    },
    /**
     * Runs the batch. This calls `batchProcessor` and resolves or rejects
     * all promises returned by `add()`.
     *
     * @return {Promise<boolean>} A promise that resolves to a boolean that is true
     *                   if the processor returned no errors.
     */
    async run() {
      if (pending.size) {
        await new Promise(resolve => {
          const unsubscribe = pending.subscribe(() => {
            if (!pending.size) {
              unsubscribe();
              resolve(undefined);
            }
          });
        });
      }
      let results;
      try {
        results = await processor(queue.map(({
          input
        }) => input));
        if (results.length !== queue.length) {
          throw new Error('run: Array returned by processor must be same size as input array.');
        }
      } catch (error) {
        for (const {
          reject
        } of queue) {
          reject(error);
        }
        throw error;
      }
      let isSuccess = true;
      results.forEach((result, key) => {
        const queueItem = queue[key];
        if (result?.error) {
          queueItem?.reject(result.error);
          isSuccess = false;
        } else {
          var _result$output;
          queueItem?.resolve((_result$output = result?.output) !== null && _result$output !== void 0 ? _result$output : result);
        }
      });
      queue = [];
      return isSuccess;
    }
  };
}
class ObservableSet {
  constructor(...args) {
    this.set = new Set(...args);
    this.subscribers = new Set();
  }
  get size() {
    return this.set.size;
  }
  add(value) {
    this.set.add(value);
    this.subscribers.forEach(subscriber => subscriber());
    return this;
  }
  delete(value) {
    const isSuccess = this.set.delete(value);
    this.subscribers.forEach(subscriber => subscriber());
    return isSuccess;
  }
  subscribe(subscriber) {
    this.subscribers.add(subscriber);
    return () => {
      this.subscribers.delete(subscriber);
    };
  }
}


/***/ }),

/***/ "./node_modules/@wordpress/core-data/build-module/batch/default-processor.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@wordpress/core-data/build-module/batch/default-processor.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ defaultProcessor)
/* harmony export */ });
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress dependencies
 */


/**
 * Maximum number of requests to place in a single batch request. Obtained by
 * sending a preflight OPTIONS request to /batch/v1/.
 *
 * @type {number?}
 */
let maxItems = null;
function chunk(arr, chunkSize) {
  const tmp = [...arr];
  const cache = [];
  while (tmp.length) {
    cache.push(tmp.splice(0, chunkSize));
  }
  return cache;
}

/**
 * Default batch processor. Sends its input requests to /batch/v1.
 *
 * @param {Array} requests List of API requests to perform at once.
 *
 * @return {Promise} Promise that resolves to a list of objects containing
 *                   either `output` (if that request was successful) or `error`
 *                   (if not ).
 */
async function defaultProcessor(requests) {
  if (maxItems === null) {
    const preflightResponse = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
      path: '/batch/v1',
      method: 'OPTIONS'
    });
    maxItems = preflightResponse.endpoints[0].args.requests.maxItems;
  }
  const results = [];

  // @ts-ignore We would have crashed or never gotten to this point if we hadn't received the maxItems count.
  for (const batchRequests of chunk(requests, maxItems)) {
    const batchResponse = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
      path: '/batch/v1',
      method: 'POST',
      data: {
        validation: 'require-all-validate',
        requests: batchRequests.map(request => ({
          path: request.path,
          body: request.data,
          // Rename 'data' to 'body'.
          method: request.method,
          headers: request.headers
        }))
      }
    });
    let batchResults;
    if (batchResponse.failed) {
      batchResults = batchResponse.responses.map(response => ({
        error: response?.body
      }));
    } else {
      batchResults = batchResponse.responses.map(response => {
        const result = {};
        if (response.status >= 200 && response.status < 300) {
          result.output = response.body;
        } else {
          result.error = response.body;
        }
        return result;
      });
    }
    results.push(...batchResults);
  }
  return results;
}


/***/ }),

/***/ "./node_modules/@wordpress/core-data/build-module/dynamic-entities.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@wordpress/core-data/build-module/dynamic-entities.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dynamicActions: () => (/* binding */ dynamicActions),
/* harmony export */   dynamicSelectors: () => (/* binding */ dynamicSelectors)
/* harmony export */ });
/**
 * Internal dependencies
 */

/**
 * A simple utility that pluralizes a string.
 * Converts:
 * - "post" to "posts"
 * - "taxonomy" to "taxonomies"
 * - "media" to "mediaItems"
 * - "status" to "statuses"
 *
 * It does not pluralize "GlobalStyles" due to lack of clarity about it at time of writing.
 */

/**
 * A simple utility that singularizes a string.
 *
 * Converts:
 * - "posts" to "post"
 * - "taxonomies" to "taxonomy"
 * - "mediaItems" to "media"
 * - "statuses" to "status"
 */

let dynamicActions;
let dynamicSelectors;


/***/ }),

/***/ "./node_modules/@wordpress/core-data/build-module/entities.js":
/*!********************************************************************!*\
  !*** ./node_modules/@wordpress/core-data/build-module/entities.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEFAULT_ENTITY_KEY: () => (/* binding */ DEFAULT_ENTITY_KEY),
/* harmony export */   additionalEntityConfigLoaders: () => (/* binding */ additionalEntityConfigLoaders),
/* harmony export */   getMethodName: () => (/* binding */ getMethodName),
/* harmony export */   prePersistPostType: () => (/* binding */ prePersistPostType),
/* harmony export */   rootEntitiesConfig: () => (/* binding */ rootEntitiesConfig)
/* harmony export */ });
/* harmony import */ var change_case__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! change-case */ "./node_modules/capital-case/dist.es2015/index.js");
/* harmony import */ var change_case__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! change-case */ "./node_modules/pascal-case/dist.es2015/index.js");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_rich_text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/rich-text */ "@wordpress/rich-text");
/* harmony import */ var _wordpress_rich_text__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_2__);
/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */



const DEFAULT_ENTITY_KEY = 'id';
const POST_RAW_ATTRIBUTES = ['title', 'excerpt', 'content'];
const rootEntitiesConfig = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Base'),
  kind: 'root',
  name: '__unstableBase',
  baseURL: '/',
  baseURLParams: {
    // Please also change the preload path when changing this.
    // @see lib/compat/wordpress-6.8/preload.php
    _fields: ['description', 'gmt_offset', 'home', 'name', 'site_icon', 'site_icon_url', 'site_logo', 'timezone_string', 'url', 'page_for_posts', 'page_on_front', 'show_on_front'].join(',')
  },
  // The entity doesn't support selecting multiple records.
  // The property is maintained for backward compatibility.
  plural: '__unstableBases',
  syncConfig: {
    fetch: async () => {
      return _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
        path: '/'
      });
    },
    applyChangesToDoc: (doc, changes) => {
      const document = doc.getMap('document');
      Object.entries(changes).forEach(([key, value]) => {
        if (document.get(key) !== value) {
          document.set(key, value);
        }
      });
    },
    fromCRDTDoc: doc => {
      return doc.getMap('document').toJSON();
    }
  },
  syncObjectType: 'root/base',
  getSyncObjectId: () => 'index'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Post Type'),
  name: 'postType',
  kind: 'root',
  key: 'slug',
  baseURL: '/wp/v2/types',
  baseURLParams: {
    context: 'edit'
  },
  plural: 'postTypes',
  syncConfig: {
    fetch: async id => {
      return _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
        path: `/wp/v2/types/${id}?context=edit`
      });
    },
    applyChangesToDoc: (doc, changes) => {
      const document = doc.getMap('document');
      Object.entries(changes).forEach(([key, value]) => {
        if (document.get(key) !== value) {
          document.set(key, value);
        }
      });
    },
    fromCRDTDoc: doc => {
      return doc.getMap('document').toJSON();
    }
  },
  syncObjectType: 'root/postType',
  getSyncObjectId: id => id
}, {
  name: 'media',
  kind: 'root',
  baseURL: '/wp/v2/media',
  baseURLParams: {
    context: 'edit'
  },
  plural: 'mediaItems',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Media'),
  rawAttributes: ['caption', 'title', 'description'],
  supportsPagination: true
}, {
  name: 'taxonomy',
  kind: 'root',
  key: 'slug',
  baseURL: '/wp/v2/taxonomies',
  baseURLParams: {
    context: 'edit'
  },
  plural: 'taxonomies',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Taxonomy')
}, {
  name: 'sidebar',
  kind: 'root',
  baseURL: '/wp/v2/sidebars',
  baseURLParams: {
    context: 'edit'
  },
  plural: 'sidebars',
  transientEdits: {
    blocks: true
  },
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Widget areas')
}, {
  name: 'widget',
  kind: 'root',
  baseURL: '/wp/v2/widgets',
  baseURLParams: {
    context: 'edit'
  },
  plural: 'widgets',
  transientEdits: {
    blocks: true
  },
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Widgets')
}, {
  name: 'widgetType',
  kind: 'root',
  baseURL: '/wp/v2/widget-types',
  baseURLParams: {
    context: 'edit'
  },
  plural: 'widgetTypes',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Widget types')
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('User'),
  name: 'user',
  kind: 'root',
  baseURL: '/wp/v2/users',
  baseURLParams: {
    context: 'edit'
  },
  plural: 'users'
}, {
  name: 'comment',
  kind: 'root',
  baseURL: '/wp/v2/comments',
  baseURLParams: {
    context: 'edit'
  },
  plural: 'comments',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Comment')
}, {
  name: 'menu',
  kind: 'root',
  baseURL: '/wp/v2/menus',
  baseURLParams: {
    context: 'edit'
  },
  plural: 'menus',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Menu')
}, {
  name: 'menuItem',
  kind: 'root',
  baseURL: '/wp/v2/menu-items',
  baseURLParams: {
    context: 'edit'
  },
  plural: 'menuItems',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Menu Item'),
  rawAttributes: ['title']
}, {
  name: 'menuLocation',
  kind: 'root',
  baseURL: '/wp/v2/menu-locations',
  baseURLParams: {
    context: 'edit'
  },
  plural: 'menuLocations',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Menu Location'),
  key: 'name'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Global Styles'),
  name: 'globalStyles',
  kind: 'root',
  baseURL: '/wp/v2/global-styles',
  baseURLParams: {
    context: 'edit'
  },
  plural: 'globalStylesVariations',
  // Should be different from name.
  getTitle: record => record?.title?.rendered || record?.title,
  getRevisionsUrl: (parentId, revisionId) => `/wp/v2/global-styles/${parentId}/revisions${revisionId ? '/' + revisionId : ''}`,
  supportsPagination: true
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Themes'),
  name: 'theme',
  kind: 'root',
  baseURL: '/wp/v2/themes',
  baseURLParams: {
    context: 'edit'
  },
  plural: 'themes',
  key: 'stylesheet'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Plugins'),
  name: 'plugin',
  kind: 'root',
  baseURL: '/wp/v2/plugins',
  baseURLParams: {
    context: 'edit'
  },
  plural: 'plugins',
  key: 'plugin'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Status'),
  name: 'status',
  kind: 'root',
  baseURL: '/wp/v2/statuses',
  baseURLParams: {
    context: 'edit'
  },
  plural: 'statuses',
  key: 'slug'
}];
const additionalEntityConfigLoaders = [{
  kind: 'postType',
  loadEntities: loadPostTypeEntities
}, {
  kind: 'taxonomy',
  loadEntities: loadTaxonomyEntities
}, {
  kind: 'root',
  name: 'site',
  plural: 'sites',
  loadEntities: loadSiteEntity
}];

/**
 * Returns a function to be used to retrieve extra edits to apply before persisting a post type.
 *
 * @param {Object} persistedRecord Already persisted Post
 * @param {Object} edits           Edits.
 * @return {Object} Updated edits.
 */
const prePersistPostType = (persistedRecord, edits) => {
  const newEdits = {};
  if (persistedRecord?.status === 'auto-draft') {
    // Saving an auto-draft should create a draft by default.
    if (!edits.status && !newEdits.status) {
      newEdits.status = 'draft';
    }

    // Fix the auto-draft default title.
    if ((!edits.title || edits.title === 'Auto Draft') && !newEdits.title && (!persistedRecord?.title || persistedRecord?.title === 'Auto Draft')) {
      newEdits.title = '';
    }
  }
  return newEdits;
};
const serialisableBlocksCache = new WeakMap();
function makeBlockAttributesSerializable(attributes) {
  const newAttributes = {
    ...attributes
  };
  for (const [key, value] of Object.entries(attributes)) {
    if (value instanceof _wordpress_rich_text__WEBPACK_IMPORTED_MODULE_2__.RichTextData) {
      newAttributes[key] = value.valueOf();
    }
  }
  return newAttributes;
}
function makeBlocksSerializable(blocks) {
  return blocks.map(block => {
    const {
      innerBlocks,
      attributes,
      ...rest
    } = block;
    return {
      ...rest,
      attributes: makeBlockAttributesSerializable(attributes),
      innerBlocks: makeBlocksSerializable(innerBlocks)
    };
  });
}

/**
 * Returns the list of post type entities.
 *
 * @return {Promise} Entities promise
 */
async function loadPostTypeEntities() {
  const postTypes = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
    path: '/wp/v2/types?context=view'
  });
  return Object.entries(postTypes !== null && postTypes !== void 0 ? postTypes : {}).map(([name, postType]) => {
    var _postType$rest_namesp;
    const isTemplate = ['wp_template', 'wp_template_part'].includes(name);
    const namespace = (_postType$rest_namesp = postType?.rest_namespace) !== null && _postType$rest_namesp !== void 0 ? _postType$rest_namesp : 'wp/v2';
    return {
      kind: 'postType',
      baseURL: `/${namespace}/${postType.rest_base}`,
      baseURLParams: {
        context: 'edit'
      },
      name,
      label: postType.name,
      transientEdits: {
        blocks: true,
        selection: true
      },
      mergedEdits: {
        meta: true
      },
      rawAttributes: POST_RAW_ATTRIBUTES,
      getTitle: record => {
        var _record$slug;
        return record?.title?.rendered || record?.title || (isTemplate ? (0,change_case__WEBPACK_IMPORTED_MODULE_3__.capitalCase)((_record$slug = record.slug) !== null && _record$slug !== void 0 ? _record$slug : '') : String(record.id));
      },
      __unstablePrePersist: isTemplate ? undefined : prePersistPostType,
      __unstable_rest_base: postType.rest_base,
      syncConfig: {
        fetch: async id => {
          return _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
            path: `/${namespace}/${postType.rest_base}/${id}?context=edit`
          });
        },
        applyChangesToDoc: (doc, changes) => {
          const document = doc.getMap('document');
          Object.entries(changes).forEach(([key, value]) => {
            if (typeof value !== 'function') {
              if (key === 'blocks') {
                if (!serialisableBlocksCache.has(value)) {
                  serialisableBlocksCache.set(value, makeBlocksSerializable(value));
                }
                value = serialisableBlocksCache.get(value);
              }
              if (document.get(key) !== value) {
                document.set(key, value);
              }
            }
          });
        },
        fromCRDTDoc: doc => {
          return doc.getMap('document').toJSON();
        }
      },
      syncObjectType: 'postType/' + postType.name,
      getSyncObjectId: id => id,
      supportsPagination: true,
      getRevisionsUrl: (parentId, revisionId) => `/${namespace}/${postType.rest_base}/${parentId}/revisions${revisionId ? '/' + revisionId : ''}`,
      revisionKey: isTemplate ? 'wp_id' : DEFAULT_ENTITY_KEY
    };
  });
}

/**
 * Returns the list of the taxonomies entities.
 *
 * @return {Promise} Entities promise
 */
async function loadTaxonomyEntities() {
  const taxonomies = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
    path: '/wp/v2/taxonomies?context=view'
  });
  return Object.entries(taxonomies !== null && taxonomies !== void 0 ? taxonomies : {}).map(([name, taxonomy]) => {
    var _taxonomy$rest_namesp;
    const namespace = (_taxonomy$rest_namesp = taxonomy?.rest_namespace) !== null && _taxonomy$rest_namesp !== void 0 ? _taxonomy$rest_namesp : 'wp/v2';
    return {
      kind: 'taxonomy',
      baseURL: `/${namespace}/${taxonomy.rest_base}`,
      baseURLParams: {
        context: 'edit'
      },
      name,
      label: taxonomy.name
    };
  });
}

/**
 * Returns the Site entity.
 *
 * @return {Promise} Entity promise
 */
async function loadSiteEntity() {
  var _site$schema$properti;
  const entity = {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Site'),
    name: 'site',
    kind: 'root',
    baseURL: '/wp/v2/settings',
    syncConfig: {
      fetch: async () => {
        return _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
          path: '/wp/v2/settings'
        });
      },
      applyChangesToDoc: (doc, changes) => {
        const document = doc.getMap('document');
        Object.entries(changes).forEach(([key, value]) => {
          if (document.get(key) !== value) {
            document.set(key, value);
          }
        });
      },
      fromCRDTDoc: doc => {
        return doc.getMap('document').toJSON();
      }
    },
    syncObjectType: 'root/site',
    getSyncObjectId: () => 'index',
    meta: {}
  };
  const site = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
    path: entity.baseURL,
    method: 'OPTIONS'
  });
  const labels = {};
  Object.entries((_site$schema$properti = site?.schema?.properties) !== null && _site$schema$properti !== void 0 ? _site$schema$properti : {}).forEach(([key, value]) => {
    // Ignore properties `title` and `type` keys.
    if (typeof value === 'object' && value.title) {
      labels[key] = value.title;
    }
  });
  return [{
    ...entity,
    meta: {
      labels
    }
  }];
}

/**
 * Returns the entity's getter method name given its kind and name or plural name.
 *
 * @example
 * ```js
 * const nameSingular = getMethodName( 'root', 'theme', 'get' );
 * // nameSingular is getRootTheme
 *
 * const namePlural = getMethodName( 'root', 'themes', 'set' );
 * // namePlural is setRootThemes
 * ```
 *
 * @param {string} kind   Entity kind.
 * @param {string} name   Entity name or plural name.
 * @param {string} prefix Function prefix.
 *
 * @return {string} Method name
 */
const getMethodName = (kind, name, prefix = 'get') => {
  const kindPrefix = kind === 'root' ? '' : (0,change_case__WEBPACK_IMPORTED_MODULE_4__.pascalCase)(kind);
  const suffix = (0,change_case__WEBPACK_IMPORTED_MODULE_4__.pascalCase)(name);
  return `${prefix}${kindPrefix}${suffix}`;
};


/***/ }),

/***/ "./node_modules/@wordpress/core-data/build-module/entity-context.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@wordpress/core-data/build-module/entity-context.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EntityContext: () => (/* binding */ EntityContext)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress dependencies
 */

const EntityContext = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createContext)({});


/***/ }),

/***/ "./node_modules/@wordpress/core-data/build-module/entity-provider.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@wordpress/core-data/build-module/entity-provider.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EntityProvider)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _entity_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./entity-context */ "./node_modules/@wordpress/core-data/build-module/entity-context.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


/**
 * Context provider component for providing
 * an entity for a specific entity.
 *
 * @param {Object} props          The component's props.
 * @param {string} props.kind     The entity kind.
 * @param {string} props.type     The entity name.
 * @param {number} props.id       The entity ID.
 * @param {*}      props.children The children to wrap.
 *
 * @return {Object} The provided children, wrapped with
 *                   the entity's context provider.
 */

function EntityProvider({
  kind,
  type: name,
  id,
  children
}) {
  const parent = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useContext)(_entity_context__WEBPACK_IMPORTED_MODULE_2__.EntityContext);
  const childContext = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => ({
    ...parent,
    [kind]: {
      ...parent?.[kind],
      [name]: id
    }
  }), [parent, kind, name, id]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_entity_context__WEBPACK_IMPORTED_MODULE_2__.EntityContext.Provider, {
    value: childContext,
    children: children
  });
}


/***/ }),

/***/ "./node_modules/@wordpress/core-data/build-module/fetch/__experimental-fetch-link-suggestions.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@wordpress/core-data/build-module/fetch/__experimental-fetch-link-suggestions.js ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ fetchLinkSuggestions),
/* harmony export */   sortResults: () => (/* binding */ sortResults),
/* harmony export */   tokenize: () => (/* binding */ tokenize)
/* harmony export */ });
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/html-entities */ "@wordpress/html-entities");
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/**
 * WordPress dependencies
 */




/**
 * Fetches link suggestions from the WordPress API.
 *
 * WordPress does not support searching multiple tables at once, e.g. posts and terms, so we
 * perform multiple queries at the same time and then merge the results together.
 *
 * @param search
 * @param searchOptions
 * @param editorSettings
 *
 * @example
 * ```js
 * import { __experimentalFetchLinkSuggestions as fetchLinkSuggestions } from '@wordpress/core-data';
 *
 * //...
 *
 * export function initialize( id, settings ) {
 *
 * settings.__experimentalFetchLinkSuggestions = (
 *     search,
 *     searchOptions
 * ) => fetchLinkSuggestions( search, searchOptions, settings );
 * ```
 */
async function fetchLinkSuggestions(search, searchOptions = {}, editorSettings = {}) {
  const searchOptionsToUse = searchOptions.isInitialSuggestions && searchOptions.initialSuggestionsSearchOptions ? {
    ...searchOptions,
    ...searchOptions.initialSuggestionsSearchOptions
  } : searchOptions;
  const {
    type,
    subtype,
    page,
    perPage = searchOptions.isInitialSuggestions ? 3 : 20
  } = searchOptionsToUse;
  const {
    disablePostFormats = false
  } = editorSettings;
  const queries = [];
  if (!type || type === 'post') {
    queries.push(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
      path: (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_1__.addQueryArgs)('/wp/v2/search', {
        search,
        page,
        per_page: perPage,
        type: 'post',
        subtype
      })
    }).then(results => {
      return results.map(result => {
        return {
          id: result.id,
          url: result.url,
          title: (0,_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_2__.decodeEntities)(result.title || '') || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('(no title)'),
          type: result.subtype || result.type,
          kind: 'post-type'
        };
      });
    }).catch(() => []) // Fail by returning no results.
    );
  }
  if (!type || type === 'term') {
    queries.push(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
      path: (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_1__.addQueryArgs)('/wp/v2/search', {
        search,
        page,
        per_page: perPage,
        type: 'term',
        subtype
      })
    }).then(results => {
      return results.map(result => {
        return {
          id: result.id,
          url: result.url,
          title: (0,_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_2__.decodeEntities)(result.title || '') || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('(no title)'),
          type: result.subtype || result.type,
          kind: 'taxonomy'
        };
      });
    }).catch(() => []) // Fail by returning no results.
    );
  }
  if (!disablePostFormats && (!type || type === 'post-format')) {
    queries.push(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
      path: (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_1__.addQueryArgs)('/wp/v2/search', {
        search,
        page,
        per_page: perPage,
        type: 'post-format',
        subtype
      })
    }).then(results => {
      return results.map(result => {
        return {
          id: result.id,
          url: result.url,
          title: (0,_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_2__.decodeEntities)(result.title || '') || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('(no title)'),
          type: result.subtype || result.type,
          kind: 'taxonomy'
        };
      });
    }).catch(() => []) // Fail by returning no results.
    );
  }
  if (!type || type === 'attachment') {
    queries.push(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
      path: (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_1__.addQueryArgs)('/wp/v2/media', {
        search,
        page,
        per_page: perPage
      })
    }).then(results => {
      return results.map(result => {
        return {
          id: result.id,
          url: result.source_url,
          title: (0,_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_2__.decodeEntities)(result.title.rendered || '') || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('(no title)'),
          type: result.type,
          kind: 'media'
        };
      });
    }).catch(() => []) // Fail by returning no results.
    );
  }
  const responses = await Promise.all(queries);
  let results = responses.flat();
  results = results.filter(result => !!result.id);
  results = sortResults(results, search);
  results = results.slice(0, perPage);
  return results;
}

/**
 * Sort search results by relevance to the given query.
 *
 * Sorting is necessary as we're querying multiple endpoints and merging the results. For example
 * a taxonomy title might be more relevant than a post title, but by default taxonomy results will
 * be ordered after all the (potentially irrelevant) post results.
 *
 * We sort by scoring each result, where the score is the number of tokens in the title that are
 * also in the search query, divided by the total number of tokens in the title. This gives us a
 * score between 0 and 1, where 1 is a perfect match.
 *
 * @param results
 * @param search
 */
function sortResults(results, search) {
  const searchTokens = tokenize(search);
  const scores = {};
  for (const result of results) {
    if (result.title) {
      const titleTokens = tokenize(result.title);
      const exactMatchingTokens = titleTokens.filter(titleToken => searchTokens.some(searchToken => titleToken === searchToken));
      const subMatchingTokens = titleTokens.filter(titleToken => searchTokens.some(searchToken => titleToken !== searchToken && titleToken.includes(searchToken)));

      // The score is a combination of exact matches and sub-matches.
      // More weight is given to exact matches, as they are more relevant (e.g. "cat" vs "caterpillar").
      // Diving by the total number of tokens in the title normalizes the score and skews
      // the results towards shorter titles.
      const exactMatchScore = exactMatchingTokens.length / titleTokens.length * 10;
      const subMatchScore = subMatchingTokens.length / titleTokens.length;
      scores[result.id] = exactMatchScore + subMatchScore;
    } else {
      scores[result.id] = 0;
    }
  }
  return results.sort((a, b) => scores[b.id] - scores[a.id]);
}

/**
 * Turns text into an array of tokens, with whitespace and punctuation removed.
 *
 * For example, `"I'm having a ball."` becomes `[ "im", "having", "a", "ball" ]`.
 *
 * @param text
 */
function tokenize(text) {
  // \p{L} matches any kind of letter from any language.
  // \p{N} matches any kind of numeric character.
  return text.toLowerCase().match(/[\p{L}\p{N}]+/gu) || [];
}


/***/ }),

/***/ "./node_modules/@wordpress/core-data/build-module/fetch/__experimental-fetch-url-data.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@wordpress/core-data/build-module/fetch/__experimental-fetch-url-data.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_1__);
/**
 * WordPress dependencies
 */



/**
 * A simple in-memory cache for requests.
 * This avoids repeat HTTP requests which may be beneficial
 * for those wishing to preserve low-bandwidth.
 */
const CACHE = new Map();

/**
 * @typedef WPRemoteUrlData
 *
 * @property {string} title contents of the remote URL's `<title>` tag.
 */

/**
 * Fetches data about a remote URL.
 * eg: <title> tag, favicon...etc.
 *
 * @async
 * @param {string}  url     the URL to request details from.
 * @param {?Object} options any options to pass to the underlying fetch.
 * @example
 * ```js
 * import { __experimentalFetchUrlData as fetchUrlData } from '@wordpress/core-data';
 *
 * //...
 *
 * export function initialize( id, settings ) {
 *
 * settings.__experimentalFetchUrlData = (
 * url
 * ) => fetchUrlData( url );
 * ```
 * @return {Promise< WPRemoteUrlData[] >} Remote URL data.
 */
const fetchUrlData = async (url, options = {}) => {
  const endpoint = '/wp-block-editor/v1/url-details';
  const args = {
    url: (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_1__.prependHTTP)(url)
  };
  if (!(0,_wordpress_url__WEBPACK_IMPORTED_MODULE_1__.isURL)(url)) {
    return Promise.reject(`${url} is not a valid URL.`);
  }

  // Test for "http" based URL as it is possible for valid
  // yet unusable URLs such as `tel:123456` to be passed.
  const protocol = (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_1__.getProtocol)(url);
  if (!protocol || !(0,_wordpress_url__WEBPACK_IMPORTED_MODULE_1__.isValidProtocol)(protocol) || !protocol.startsWith('http') || !/^https?:\/\/[^\/\s]/i.test(url)) {
    return Promise.reject(`${url} does not have a valid protocol. URLs must be "http" based`);
  }
  if (CACHE.has(url)) {
    return CACHE.get(url);
  }
  return _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
    path: (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_1__.addQueryArgs)(endpoint, args),
    ...options
  }).then(res => {
    CACHE.set(url, res);
    return res;
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchUrlData);


/***/ }),

/***/ "./node_modules/@wordpress/core-data/build-module/fetch/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@wordpress/core-data/build-module/fetch/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __experimentalFetchLinkSuggestions: () => (/* reexport safe */ _experimental_fetch_link_suggestions__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   __experimentalFetchUrlData: () => (/* reexport safe */ _experimental_fetch_url_data__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   fetchBlockPatterns: () => (/* binding */ fetchBlockPatterns)
/* harmony export */ });
/* harmony import */ var change_case__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! change-case */ "./node_modules/camel-case/dist.es2015/index.js");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _experimental_fetch_link_suggestions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./__experimental-fetch-link-suggestions */ "./node_modules/@wordpress/core-data/build-module/fetch/__experimental-fetch-link-suggestions.js");
/* harmony import */ var _experimental_fetch_url_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./__experimental-fetch-url-data */ "./node_modules/@wordpress/core-data/build-module/fetch/__experimental-fetch-url-data.js");
/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */



async function fetchBlockPatterns() {
  const restPatterns = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
    path: '/wp/v2/block-patterns/patterns'
  });
  if (!restPatterns) {
    return [];
  }
  return restPatterns.map(pattern => Object.fromEntries(Object.entries(pattern).map(([key, value]) => [(0,change_case__WEBPACK_IMPORTED_MODULE_3__.camelCase)(key), value])));
}


/***/ }),

/***/ "./node_modules/@wordpress/core-data/build-module/footnotes/get-footnotes-order.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@wordpress/core-data/build-module/footnotes/get-footnotes-order.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getFootnotesOrder)
/* harmony export */ });
/* harmony import */ var _get_rich_text_values_cached__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-rich-text-values-cached */ "./node_modules/@wordpress/core-data/build-module/footnotes/get-rich-text-values-cached.js");
/**
 * Internal dependencies
 */

const cache = new WeakMap();
function getBlockFootnotesOrder(block) {
  if (!cache.has(block)) {
    const order = [];
    for (const value of (0,_get_rich_text_values_cached__WEBPACK_IMPORTED_MODULE_0__["default"])(block)) {
      if (!value) {
        continue;
      }

      // replacements is a sparse array, use forEach to skip empty slots.
      value.replacements.forEach(({
        type,
        attributes
      }) => {
        if (type === 'core/footnote') {
          order.push(attributes['data-fn']);
        }
      });
    }
    cache.set(block, order);
  }
  return cache.get(block);
}
function getFootnotesOrder(blocks) {
  // We can only separate getting order from blocks at the root level. For
  // deeper inner blocks, this will not work since it's possible to have both
  // inner blocks and block attributes, so order needs to be computed from the
  // Edit functions as a whole.
  return blocks.flatMap(getBlockFootnotesOrder);
}


/***/ }),

/***/ "./node_modules/@wordpress/core-data/build-module/footnotes/get-rich-text-values-cached.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@wordpress/core-data/build-module/footnotes/get-rich-text-values-cached.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getRichTextValuesCached)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lock_unlock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lock-unlock */ "./node_modules/@wordpress/core-data/build-module/lock-unlock.js");
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


// TODO: The following line should have been:
//
//   const unlockedApis = unlock( blockEditorPrivateApis );
//
// But there are hidden circular dependencies in RNMobile code, specifically in
// certain native components in the `components` package that depend on
// `block-editor`. What follows is a workaround that defers the `unlock` call
// to prevent native code from failing.
//
// Fix once https://github.com/WordPress/gutenberg/issues/52692 is closed.
let unlockedApis;
const cache = new WeakMap();
function getRichTextValuesCached(block) {
  if (!unlockedApis) {
    unlockedApis = (0,_lock_unlock__WEBPACK_IMPORTED_MODULE_1__.unlock)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.privateApis);
  }
  if (!cache.has(block)) {
    const values = unlockedApis.getRichTextValues([block]);
    cache.set(block, values);
  }
  return cache.get(block);
}


/***/ }),

/***/ "./node_modules/@wordpress/core-data/build-module/footnotes/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@wordpress/core-data/build-module/footnotes/index.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   updateFootnotesFromMeta: () => (/* binding */ updateFootnotesFromMeta)
/* harmony export */ });
/* harmony import */ var _wordpress_rich_text__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/rich-text */ "@wordpress/rich-text");
/* harmony import */ var _wordpress_rich_text__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _get_footnotes_order__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-footnotes-order */ "./node_modules/@wordpress/core-data/build-module/footnotes/get-footnotes-order.js");
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */

let oldFootnotes = {};
function updateFootnotesFromMeta(blocks, meta) {
  const output = {
    blocks
  };
  if (!meta) {
    return output;
  }

  // If meta.footnotes is empty, it means the meta is not registered.
  if (meta.footnotes === undefined) {
    return output;
  }
  const newOrder = (0,_get_footnotes_order__WEBPACK_IMPORTED_MODULE_1__["default"])(blocks);
  const footnotes = meta.footnotes ? JSON.parse(meta.footnotes) : [];
  const currentOrder = footnotes.map(fn => fn.id);
  if (currentOrder.join('') === newOrder.join('')) {
    return output;
  }
  const newFootnotes = newOrder.map(fnId => footnotes.find(fn => fn.id === fnId) || oldFootnotes[fnId] || {
    id: fnId,
    content: ''
  });
  function updateAttributes(attributes) {
    // Only attempt to update attributes, if attributes is an object.
    if (!attributes || Array.isArray(attributes) || typeof attributes !== 'object') {
      return attributes;
    }
    attributes = {
      ...attributes
    };
    for (const key in attributes) {
      const value = attributes[key];
      if (Array.isArray(value)) {
        attributes[key] = value.map(updateAttributes);
        continue;
      }

      // To do, remove support for string values?
      if (typeof value !== 'string' && !(value instanceof _wordpress_rich_text__WEBPACK_IMPORTED_MODULE_0__.RichTextData)) {
        continue;
      }
      const richTextValue = typeof value === 'string' ? _wordpress_rich_text__WEBPACK_IMPORTED_MODULE_0__.RichTextData.fromHTMLString(value) : new _wordpress_rich_text__WEBPACK_IMPORTED_MODULE_0__.RichTextData(value);
      let hasFootnotes = false;
      richTextValue.replacements.forEach(replacement => {
        if (replacement.type === 'core/footnote') {
          const id = replacement.attributes['data-fn'];
          const index = newOrder.indexOf(id);
          // The innerHTML contains the count wrapped in a link.
          const countValue = (0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_0__.create)({
            html: replacement.innerHTML
          });
          countValue.text = String(index + 1);
          countValue.formats = Array.from({
            length: countValue.text.length
          }, () => countValue.formats[0]);
          countValue.replacements = Array.from({
            length: countValue.text.length
          }, () => countValue.replacements[0]);
          replacement.innerHTML = (0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_0__.toHTMLString)({
            value: countValue
          });
          hasFootnotes = true;
        }
      });
      if (hasFootnotes) {
        attributes[key] = typeof value === 'string' ? richTextValue.toHTMLString() : richTextValue;
      }
    }
    return attributes;
  }
  function updateBlocksAttributes(__blocks) {
    return __blocks.map(block => {
      return {
        ...block,
        attributes: updateAttributes(block.attributes),
        innerBlocks: updateBlocksAttributes(block.innerBlocks)
      };
    });
  }

  // We need to go through all block attributes deeply and update the
  // footnote anchor numbering (textContent) to match the new order.
  const newBlocks = updateBlocksAttributes(blocks);
  oldFootnotes = {
    ...oldFootnotes,
    ...footnotes.reduce((acc, fn) => {
      if (!newOrder.includes(fn.id)) {
        acc[fn.id] = fn;
      }
      return acc;
    }, {})
  };
  return {
    meta: {
      ...meta,
      footnotes: JSON.stringify(newFootnotes)
    },
    blocks: newBlocks
  };
}


/***/ }),

/***/ "./node_modules/@wordpress/core-data/build-module/hooks/constants.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@wordpress/core-data/build-module/hooks/constants.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Status: () => (/* binding */ Status)
/* harmony export */ });
let Status = /*#__PURE__*/function (Status) {
  Status["Idle"] = "IDLE";
  Status["Resolving"] = "RESOLVING";
  Status["Error"] = "ERROR";
  Status["Success"] = "SUCCESS";
  return Status;
}({});


/***/ }),

/***/ "./node_modules/@wordpress/core-data/build-module/hooks/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@wordpress/core-data/build-module/hooks/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __experimentalUseEntityRecord: () => (/* reexport safe */ _use_entity_record__WEBPACK_IMPORTED_MODULE_0__.__experimentalUseEntityRecord),
/* harmony export */   __experimentalUseEntityRecords: () => (/* reexport safe */ _use_entity_records__WEBPACK_IMPORTED_MODULE_1__.__experimentalUseEntityRecords),
/* harmony export */   __experimentalUseResourcePermissions: () => (/* reexport safe */ _use_resource_permissions__WEBPACK_IMPORTED_MODULE_2__.__experimentalUseResourcePermissions),
/* harmony export */   useEntityBlockEditor: () => (/* reexport safe */ _use_entity_block_editor__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   useEntityId: () => (/* reexport safe */ _use_entity_id__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   useEntityProp: () => (/* reexport safe */ _use_entity_prop__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   useEntityRecord: () => (/* reexport safe */ _use_entity_record__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   useEntityRecords: () => (/* reexport safe */ _use_entity_records__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   useResourcePermissions: () => (/* reexport safe */ _use_resource_permissions__WEBPACK_IMPORTED_MODULE_2__["default"])
/* harmony export */ });
/* harmony import */ var _use_entity_record__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./use-entity-record */ "./node_modules/@wordpress/core-data/build-module/hooks/use-entity-record.js");
/* harmony import */ var _use_entity_records__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-entity-records */ "./node_modules/@wordpress/core-data/build-module/hooks/use-entity-records.js");
/* harmony import */ var _use_resource_permissions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./use-resource-permissions */ "./node_modules/@wordpress/core-data/build-module/hooks/use-resource-permissions.js");
/* harmony import */ var _use_entity_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./use-entity-block-editor */ "./node_modules/@wordpress/core-data/build-module/hooks/use-entity-block-editor.js");
/* harmony import */ var _use_entity_id__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./use-entity-id */ "./node_modules/@wordpress/core-data/build-module/hooks/use-entity-id.js");
/* harmony import */ var _use_entity_prop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./use-entity-prop */ "./node_modules/@wordpress/core-data/build-module/hooks/use-entity-prop.js");








/***/ }),

/***/ "./node_modules/@wordpress/core-data/build-module/hooks/memoize.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@wordpress/core-data/build-module/hooks/memoize.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var memize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! memize */ "./node_modules/memize/dist/index.js");
/**
 * External dependencies
 */


// re-export due to restrictive esModuleInterop setting
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (memize__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./node_modules/@wordpress/core-data/build-module/hooks/use-entity-block-editor.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@wordpress/core-data/build-module/hooks/use-entity-block-editor.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useEntityBlockEditor)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _name__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../name */ "./node_modules/@wordpress/core-data/build-module/name.js");
/* harmony import */ var _use_entity_id__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./use-entity-id */ "./node_modules/@wordpress/core-data/build-module/hooks/use-entity-id.js");
/* harmony import */ var _footnotes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../footnotes */ "./node_modules/@wordpress/core-data/build-module/footnotes/index.js");
/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */



const EMPTY_ARRAY = [];
const parsedBlocksCache = new WeakMap();

/**
 * Hook that returns block content getters and setters for
 * the nearest provided entity of the specified type.
 *
 * The return value has the shape `[ blocks, onInput, onChange ]`.
 * `onInput` is for block changes that don't create undo levels
 * or dirty the post, non-persistent changes, and `onChange` is for
 * persistent changes. They map directly to the props of a
 * `BlockEditorProvider` and are intended to be used with it,
 * or similar components or hooks.
 *
 * @param {string} kind         The entity kind.
 * @param {string} name         The entity name.
 * @param {Object} options
 * @param {string} [options.id] An entity ID to use instead of the context-provided one.
 *
 * @return {[unknown[], Function, Function]} The block array and setters.
 */
function useEntityBlockEditor(kind, name, {
  id: _id
} = {}) {
  const providerId = (0,_use_entity_id__WEBPACK_IMPORTED_MODULE_3__["default"])(kind, name);
  const id = _id !== null && _id !== void 0 ? _id : providerId;
  const {
    getEntityRecord,
    getEntityRecordEdits
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(_name__WEBPACK_IMPORTED_MODULE_4__.STORE_NAME);
  const {
    content,
    editedBlocks,
    meta
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(select => {
    if (!id) {
      return {};
    }
    const {
      getEditedEntityRecord
    } = select(_name__WEBPACK_IMPORTED_MODULE_4__.STORE_NAME);
    const editedRecord = getEditedEntityRecord(kind, name, id);
    return {
      editedBlocks: editedRecord.blocks,
      content: editedRecord.content,
      meta: editedRecord.meta
    };
  }, [kind, name, id]);
  const {
    __unstableCreateUndoLevel,
    editEntityRecord
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useDispatch)(_name__WEBPACK_IMPORTED_MODULE_4__.STORE_NAME);
  const blocks = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (!id) {
      return undefined;
    }
    if (editedBlocks) {
      return editedBlocks;
    }
    if (!content || typeof content !== 'string') {
      return EMPTY_ARRAY;
    }

    // If there's an edit, cache the parsed blocks by the edit.
    // If not, cache by the original entity record.
    const edits = getEntityRecordEdits(kind, name, id);
    const isUnedited = !edits || !Object.keys(edits).length;
    const cackeKey = isUnedited ? getEntityRecord(kind, name, id) : edits;
    let _blocks = parsedBlocksCache.get(cackeKey);
    if (!_blocks) {
      _blocks = (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.parse)(content);
      parsedBlocksCache.set(cackeKey, _blocks);
    }
    return _blocks;
  }, [kind, name, id, editedBlocks, content, getEntityRecord, getEntityRecordEdits]);
  const onChange = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)((newBlocks, options) => {
    const noChange = blocks === newBlocks;
    if (noChange) {
      return __unstableCreateUndoLevel(kind, name, id);
    }
    const {
      selection,
      ...rest
    } = options;

    // We create a new function here on every persistent edit
    // to make sure the edit makes the post dirty and creates
    // a new undo level.
    const edits = {
      selection,
      content: ({
        blocks: blocksForSerialization = []
      }) => (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.__unstableSerializeAndClean)(blocksForSerialization),
      ...(0,_footnotes__WEBPACK_IMPORTED_MODULE_5__.updateFootnotesFromMeta)(newBlocks, meta)
    };
    editEntityRecord(kind, name, id, edits, {
      isCached: false,
      ...rest
    });
  }, [kind, name, id, blocks, meta, __unstableCreateUndoLevel, editEntityRecord]);
  const onInput = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)((newBlocks, options) => {
    const {
      selection,
      ...rest
    } = options;
    const footnotesChanges = (0,_footnotes__WEBPACK_IMPORTED_MODULE_5__.updateFootnotesFromMeta)(newBlocks, meta);
    const edits = {
      selection,
      ...footnotesChanges
    };
    editEntityRecord(kind, name, id, edits, {
      isCached: true,
      ...rest
    });
  }, [kind, name, id, meta, editEntityRecord]);
  return [blocks, onInput, onChange];
}


/***/ }),

/***/ "./node_modules/@wordpress/core-data/build-module/hooks/use-entity-id.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@wordpress/core-data/build-module/hooks/use-entity-id.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useEntityId)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _entity_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../entity-context */ "./node_modules/@wordpress/core-data/build-module/entity-context.js");
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


/**
 * Hook that returns the ID for the nearest
 * provided entity of the specified type.
 *
 * @param {string} kind The entity kind.
 * @param {string} name The entity name.
 */
function useEntityId(kind, name) {
  const context = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useContext)(_entity_context__WEBPACK_IMPORTED_MODULE_1__.EntityContext);
  return context?.[kind]?.[name];
}


/***/ }),

/***/ "./node_modules/@wordpress/core-data/build-module/hooks/use-entity-prop.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@wordpress/core-data/build-module/hooks/use-entity-prop.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useEntityProp)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _name__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../name */ "./node_modules/@wordpress/core-data/build-module/name.js");
/* harmony import */ var _use_entity_id__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./use-entity-id */ "./node_modules/@wordpress/core-data/build-module/hooks/use-entity-id.js");
/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */



/**
 * Hook that returns the value and a setter for the
 * specified property of the nearest provided
 * entity of the specified type.
 *
 * @param {string}        kind  The entity kind.
 * @param {string}        name  The entity name.
 * @param {string}        prop  The property name.
 * @param {number|string} [_id] An entity ID to use instead of the context-provided one.
 *
 * @return {[*, Function, *]} An array where the first item is the
 *                            property value, the second is the
 *                            setter and the third is the full value
 * 							  object from REST API containing more
 * 							  information like `raw`, `rendered` and
 * 							  `protected` props.
 */
function useEntityProp(kind, name, prop, _id) {
  const providerId = (0,_use_entity_id__WEBPACK_IMPORTED_MODULE_2__["default"])(kind, name);
  const id = _id !== null && _id !== void 0 ? _id : providerId;
  const {
    value,
    fullValue
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(select => {
    const {
      getEntityRecord,
      getEditedEntityRecord
    } = select(_name__WEBPACK_IMPORTED_MODULE_3__.STORE_NAME);
    const record = getEntityRecord(kind, name, id); // Trigger resolver.
    const editedRecord = getEditedEntityRecord(kind, name, id);
    return record && editedRecord ? {
      value: editedRecord[prop],
      fullValue: record[prop]
    } : {};
  }, [kind, name, id, prop]);
  const {
    editEntityRecord
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useDispatch)(_name__WEBPACK_IMPORTED_MODULE_3__.STORE_NAME);
  const setValue = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(newValue => {
    editEntityRecord(kind, name, id, {
      [prop]: newValue
    });
  }, [editEntityRecord, kind, name, id, prop]);
  return [value, setValue, fullValue];
}


/***/ }),

/***/ "./node_modules/@wordpress/core-data/build-module/hooks/use-entity-record.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@wordpress/core-data/build-module/hooks/use-entity-record.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __experimentalUseEntityRecord: () => (/* binding */ __experimentalUseEntityRecord),
/* harmony export */   "default": () => (/* binding */ useEntityRecord)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/deprecated */ "@wordpress/deprecated");
/* harmony import */ var _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_deprecated__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _use_query_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./use-query-select */ "./node_modules/@wordpress/core-data/build-module/hooks/use-query-select.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ */ "./node_modules/@wordpress/core-data/build-module/index.js");
/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */


const EMPTY_OBJECT = {};

/**
 * Resolves the specified entity record.
 *
 * @since 6.1.0 Introduced in WordPress core.
 *
 * @param    kind     Kind of the entity, e.g. `root` or a `postType`. See rootEntitiesConfig in ../entities.ts for a list of available kinds.
 * @param    name     Name of the entity, e.g. `plugin` or a `post`. See rootEntitiesConfig in ../entities.ts for a list of available names.
 * @param    recordId ID of the requested entity record.
 * @param    options  Optional hook options.
 * @example
 * ```js
 * import { useEntityRecord } from '@wordpress/core-data';
 *
 * function PageTitleDisplay( { id } ) {
 *   const { record, isResolving } = useEntityRecord( 'postType', 'page', id );
 *
 *   if ( isResolving ) {
 *     return 'Loading...';
 *   }
 *
 *   return record.title;
 * }
 *
 * // Rendered in the application:
 * // <PageTitleDisplay id={ 1 } />
 * ```
 *
 * In the above example, when `PageTitleDisplay` is rendered into an
 * application, the page and the resolution details will be retrieved from
 * the store state using `getEntityRecord()`, or resolved if missing.
 *
 * @example
 * ```js
 * import { useCallback } from 'react';
 * import { useDispatch } from '@wordpress/data';
 * import { __ } from '@wordpress/i18n';
 * import { TextControl } from '@wordpress/components';
 * import { store as noticeStore } from '@wordpress/notices';
 * import { useEntityRecord } from '@wordpress/core-data';
 *
 * function PageRenameForm( { id } ) {
 * 	const page = useEntityRecord( 'postType', 'page', id );
 * 	const { createSuccessNotice, createErrorNotice } =
 * 		useDispatch( noticeStore );
 *
 * 	const setTitle = useCallback( ( title ) => {
 * 		page.edit( { title } );
 * 	}, [ page.edit ] );
 *
 * 	if ( page.isResolving ) {
 * 		return 'Loading...';
 * 	}
 *
 * 	async function onRename( event ) {
 * 		event.preventDefault();
 * 		try {
 * 			await page.save();
 * 			createSuccessNotice( __( 'Page renamed.' ), {
 * 				type: 'snackbar',
 * 			} );
 * 		} catch ( error ) {
 * 			createErrorNotice( error.message, { type: 'snackbar' } );
 * 		}
 * 	}
 *
 * 	return (
 * 		<form onSubmit={ onRename }>
 * 			<TextControl
 *				__nextHasNoMarginBottom
 *				__next40pxDefaultSize
 * 				label={ __( 'Name' ) }
 * 				value={ page.editedRecord.title }
 * 				onChange={ setTitle }
 * 			/>
 * 			<button type="submit">{ __( 'Save' ) }</button>
 * 		</form>
 * 	);
 * }
 *
 * // Rendered in the application:
 * // <PageRenameForm id={ 1 } />
 * ```
 *
 * In the above example, updating and saving the page title is handled
 * via the `edit()` and `save()` mutation helpers provided by
 * `useEntityRecord()`;
 *
 * @return Entity record data.
 * @template RecordType
 */
function useEntityRecord(kind, name, recordId, options = {
  enabled: true
}) {
  const {
    editEntityRecord,
    saveEditedEntityRecord
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useDispatch)(___WEBPACK_IMPORTED_MODULE_3__.store);
  const mutations = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => ({
    edit: (record, editOptions = {}) => editEntityRecord(kind, name, recordId, record, editOptions),
    save: (saveOptions = {}) => saveEditedEntityRecord(kind, name, recordId, {
      throwOnError: true,
      ...saveOptions
    })
  }), [editEntityRecord, kind, name, recordId, saveEditedEntityRecord]);
  const {
    editedRecord,
    hasEdits,
    edits
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useSelect)(select => {
    if (!options.enabled) {
      return {
        editedRecord: EMPTY_OBJECT,
        hasEdits: false,
        edits: EMPTY_OBJECT
      };
    }
    return {
      editedRecord: select(___WEBPACK_IMPORTED_MODULE_3__.store).getEditedEntityRecord(kind, name, recordId),
      hasEdits: select(___WEBPACK_IMPORTED_MODULE_3__.store).hasEditsForEntityRecord(kind, name, recordId),
      edits: select(___WEBPACK_IMPORTED_MODULE_3__.store).getEntityRecordNonTransientEdits(kind, name, recordId)
    };
  }, [kind, name, recordId, options.enabled]);
  const {
    data: record,
    ...querySelectRest
  } = (0,_use_query_select__WEBPACK_IMPORTED_MODULE_4__["default"])(query => {
    if (!options.enabled) {
      return {
        data: null
      };
    }
    return query(___WEBPACK_IMPORTED_MODULE_3__.store).getEntityRecord(kind, name, recordId);
  }, [kind, name, recordId, options.enabled]);
  return {
    record,
    editedRecord,
    hasEdits,
    edits,
    ...querySelectRest,
    ...mutations
  };
}
function __experimentalUseEntityRecord(kind, name, recordId, options) {
  _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_1___default()(`wp.data.__experimentalUseEntityRecord`, {
    alternative: 'wp.data.useEntityRecord',
    since: '6.1'
  });
  return useEntityRecord(kind, name, recordId, options);
}


/***/ }),

/***/ "./node_modules/@wordpress/core-data/build-module/hooks/use-entity-records.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@wordpress/core-data/build-module/hooks/use-entity-records.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __experimentalUseEntityRecords: () => (/* binding */ __experimentalUseEntityRecords),
/* harmony export */   "default": () => (/* binding */ useEntityRecords),
/* harmony export */   useEntityRecordsWithPermissions: () => (/* binding */ useEntityRecordsWithPermissions)
/* harmony export */ });
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/deprecated */ "@wordpress/deprecated");
/* harmony import */ var _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_deprecated__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _use_query_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./use-query-select */ "./node_modules/@wordpress/core-data/build-module/hooks/use-query-select.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ */ "./node_modules/@wordpress/core-data/build-module/index.js");
/* harmony import */ var _lock_unlock__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lock-unlock */ "./node_modules/@wordpress/core-data/build-module/lock-unlock.js");
/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */



const EMPTY_ARRAY = [];

/**
 * Resolves the specified entity records.
 *
 * @since 6.1.0 Introduced in WordPress core.
 *
 * @param    kind      Kind of the entity, e.g. `root` or a `postType`. See rootEntitiesConfig in ../entities.ts for a list of available kinds.
 * @param    name      Name of the entity, e.g. `plugin` or a `post`. See rootEntitiesConfig in ../entities.ts for a list of available names.
 * @param    queryArgs Optional HTTP query description for how to fetch the data, passed to the requested API endpoint.
 * @param    options   Optional hook options.
 * @example
 * ```js
 * import { useEntityRecords } from '@wordpress/core-data';
 *
 * function PageTitlesList() {
 *   const { records, isResolving } = useEntityRecords( 'postType', 'page' );
 *
 *   if ( isResolving ) {
 *     return 'Loading...';
 *   }
 *
 *   return (
 *     <ul>
 *       {records.map(( page ) => (
 *         <li>{ page.title }</li>
 *       ))}
 *     </ul>
 *   );
 * }
 *
 * // Rendered in the application:
 * // <PageTitlesList />
 * ```
 *
 * In the above example, when `PageTitlesList` is rendered into an
 * application, the list of records and the resolution details will be retrieved from
 * the store state using `getEntityRecords()`, or resolved if missing.
 *
 * @return Entity records data.
 * @template RecordType
 */
function useEntityRecords(kind, name, queryArgs = {}, options = {
  enabled: true
}) {
  // Serialize queryArgs to a string that can be safely used as a React dep.
  // We can't just pass queryArgs as one of the deps, because if it is passed
  // as an object literal, then it will be a different object on each call even
  // if the values remain the same.
  const queryAsString = (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_0__.addQueryArgs)('', queryArgs);
  const {
    data: records,
    ...rest
  } = (0,_use_query_select__WEBPACK_IMPORTED_MODULE_5__["default"])(query => {
    if (!options.enabled) {
      return {
        // Avoiding returning a new reference on every execution.
        data: EMPTY_ARRAY
      };
    }
    return query(___WEBPACK_IMPORTED_MODULE_4__.store).getEntityRecords(kind, name, queryArgs);
  }, [kind, name, queryAsString, options.enabled]);
  const {
    totalItems,
    totalPages
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(select => {
    if (!options.enabled) {
      return {
        totalItems: null,
        totalPages: null
      };
    }
    return {
      totalItems: select(___WEBPACK_IMPORTED_MODULE_4__.store).getEntityRecordsTotalItems(kind, name, queryArgs),
      totalPages: select(___WEBPACK_IMPORTED_MODULE_4__.store).getEntityRecordsTotalPages(kind, name, queryArgs)
    };
  }, [kind, name, queryAsString, options.enabled]);
  return {
    records,
    totalItems,
    totalPages,
    ...rest
  };
}
function __experimentalUseEntityRecords(kind, name, queryArgs, options) {
  _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_1___default()(`wp.data.__experimentalUseEntityRecords`, {
    alternative: 'wp.data.useEntityRecords',
    since: '6.1'
  });
  return useEntityRecords(kind, name, queryArgs, options);
}
function useEntityRecordsWithPermissions(kind, name, queryArgs = {}, options = {
  enabled: true
}) {
  const entityConfig = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(select => select(___WEBPACK_IMPORTED_MODULE_4__.store).getEntityConfig(kind, name), [kind, name]);
  const {
    records: data,
    ...ret
  } = useEntityRecords(kind, name, queryArgs, options);
  const ids = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => {
    var _data$map;
    return (_data$map = data?.map(
    // @ts-ignore
    record => {
      var _entityConfig$key;
      return record[(_entityConfig$key = entityConfig?.key) !== null && _entityConfig$key !== void 0 ? _entityConfig$key : 'id'];
    })) !== null && _data$map !== void 0 ? _data$map : [];
  }, [data, entityConfig?.key]);
  const permissions = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(select => {
    const {
      getEntityRecordsPermissions
    } = (0,_lock_unlock__WEBPACK_IMPORTED_MODULE_6__.unlock)(select(___WEBPACK_IMPORTED_MODULE_4__.store));
    return getEntityRecordsPermissions(kind, name, ids);
  }, [ids, kind, name]);
  const dataWithPermissions = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => {
    var _data$map2;
    return (_data$map2 = data?.map((record, index) => ({
      // @ts-ignore
      ...record,
      permissions: permissions[index]
    }))) !== null && _data$map2 !== void 0 ? _data$map2 : [];
  }, [data, permissions]);
  return {
    records: dataWithPermissions,
    ...ret
  };
}


/***/ }),

/***/ "./node_modules/@wordpress/core-data/build-module/hooks/use-query-select.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@wordpress/core-data/build-module/hooks/use-query-select.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   META_SELECTORS: () => (/* binding */ META_SELECTORS),
/* harmony export */   "default": () => (/* binding */ useQuerySelect)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _memoize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./memoize */ "./node_modules/@wordpress/core-data/build-module/hooks/memoize.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./node_modules/@wordpress/core-data/build-module/hooks/constants.js");
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


const META_SELECTORS = ['getIsResolving', 'hasStartedResolution', 'hasFinishedResolution', 'isResolving', 'getCachedResolvers'];
/**
 * Like useSelect, but the selectors return objects containing
 * both the original data AND the resolution info.
 *
 * @since 6.1.0 Introduced in WordPress core.
 * @private
 *
 * @param {Function} mapQuerySelect see useSelect
 * @param {Array}    deps           see useSelect
 *
 * @example
 * ```js
 * import { useQuerySelect } from '@wordpress/data';
 * import { store as coreDataStore } from '@wordpress/core-data';
 *
 * function PageTitleDisplay( { id } ) {
 *   const { data: page, isResolving } = useQuerySelect( ( query ) => {
 *     return query( coreDataStore ).getEntityRecord( 'postType', 'page', id )
 *   }, [ id ] );
 *
 *   if ( isResolving ) {
 *     return 'Loading...';
 *   }
 *
 *   return page.title;
 * }
 *
 * // Rendered in the application:
 * // <PageTitleDisplay id={ 10 } />
 * ```
 *
 * In the above example, when `PageTitleDisplay` is rendered into an
 * application, the page and the resolution details will be retrieved from
 * the store state using the `mapSelect` callback on `useQuerySelect`.
 *
 * If the id prop changes then any page in the state for that id is
 * retrieved. If the id prop doesn't change and other props are passed in
 * that do change, the title will not change because the dependency is just
 * the id.
 * @see useSelect
 *
 * @return {QuerySelectResponse} Queried data.
 */
function useQuerySelect(mapQuerySelect, deps) {
  return (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useSelect)((select, registry) => {
    const resolve = store => enrichSelectors(select(store));
    return mapQuerySelect(resolve, registry);
  }, deps);
}
/**
 * Transform simple selectors into ones that return an object with the
 * original return value AND the resolution info.
 *
 * @param {Object} selectors Selectors to enrich
 * @return {EnrichedSelectors} Enriched selectors
 */
const enrichSelectors = (0,_memoize__WEBPACK_IMPORTED_MODULE_1__["default"])(selectors => {
  const resolvers = {};
  for (const selectorName in selectors) {
    if (META_SELECTORS.includes(selectorName)) {
      continue;
    }
    Object.defineProperty(resolvers, selectorName, {
      get: () => (...args) => {
        const data = selectors[selectorName](...args);
        const resolutionStatus = selectors.getResolutionState(selectorName, args)?.status;
        let status;
        switch (resolutionStatus) {
          case 'resolving':
            status = _constants__WEBPACK_IMPORTED_MODULE_2__.Status.Resolving;
            break;
          case 'finished':
            status = _constants__WEBPACK_IMPORTED_MODULE_2__.Status.Success;
            break;
          case 'error':
            status = _constants__WEBPACK_IMPORTED_MODULE_2__.Status.Error;
            break;
          case undefined:
            status = _constants__WEBPACK_IMPORTED_MODULE_2__.Status.Idle;
            break;
        }
        return {
          data,
          status,
          isResolving: status === _constants__WEBPACK_IMPORTED_MODULE_2__.Status.Resolving,
          hasStarted: status !== _constants__WEBPACK_IMPORTED_MODULE_2__.Status.Idle,
          hasResolved: status === _constants__WEBPACK_IMPORTED_MODULE_2__.Status.Success || status === _constants__WEBPACK_IMPORTED_MODULE_2__.Status.Error
        };
      }
    });
  }
  return resolvers;
});


/***/ }),

/***/ "./node_modules/@wordpress/core-data/build-module/hooks/use-resource-permissions.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@wordpress/core-data/build-module/hooks/use-resource-permissions.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __experimentalUseResourcePermissions: () => (/* binding */ __experimentalUseResourcePermissions),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/deprecated */ "@wordpress/deprecated");
/* harmony import */ var _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_deprecated__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_warning__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/warning */ "@wordpress/warning");
/* harmony import */ var _wordpress_warning__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_warning__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ */ "./node_modules/@wordpress/core-data/build-module/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ "./node_modules/@wordpress/core-data/build-module/hooks/constants.js");
/* harmony import */ var _use_query_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./use-query-select */ "./node_modules/@wordpress/core-data/build-module/hooks/use-query-select.js");
/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */




/**
 * Is the data resolved by now?
 */

/**
 * Resolves resource permissions.
 *
 * @since 6.1.0 Introduced in WordPress core.
 *
 * @param    resource Entity resource to check. Accepts entity object `{ kind: 'root', name: 'media', id: 1 }`
 *                    or REST base as a string - `media`.
 * @param    id       Optional ID of the resource to check, e.g. 10. Note: This argument is discouraged
 *                    when using an entity object as a resource to check permissions and will be ignored.
 *
 * @example
 * ```js
 * import { useResourcePermissions } from '@wordpress/core-data';
 *
 * function PagesList() {
 *   const { canCreate, isResolving } = useResourcePermissions( { kind: 'postType', name: 'page' } );
 *
 *   if ( isResolving ) {
 *     return 'Loading ...';
 *   }
 *
 *   return (
 *     <div>
 *       {canCreate ? (<button>+ Create a new page</button>) : false}
 *       // ...
 *     </div>
 *   );
 * }
 *
 * // Rendered in the application:
 * // <PagesList />
 * ```
 *
 * @example
 * ```js
 * import { useResourcePermissions } from '@wordpress/core-data';
 *
 * function Page({ pageId }) {
 *   const {
 *     canCreate,
 *     canUpdate,
 *     canDelete,
 *     isResolving
 *   } = useResourcePermissions( { kind: 'postType', name: 'page', id: pageId } );
 *
 *   if ( isResolving ) {
 *     return 'Loading ...';
 *   }
 *
 *   return (
 *     <div>
 *       {canCreate ? (<button>+ Create a new page</button>) : false}
 *       {canUpdate ? (<button>Edit page</button>) : false}
 *       {canDelete ? (<button>Delete page</button>) : false}
 *       // ...
 *     </div>
 *   );
 * }
 *
 * // Rendered in the application:
 * // <Page pageId={ 15 } />
 * ```
 *
 * In the above example, when `PagesList` is rendered into an
 * application, the appropriate permissions and the resolution details will be retrieved from
 * the store state using `canUser()`, or resolved if missing.
 *
 * @return Entity records data.
 * @template IdType
 */
function useResourcePermissions(resource, id) {
  // Serialize `resource` to a string that can be safely used as a React dep.
  // We can't just pass `resource` as one of the deps, because if it is passed
  // as an object literal, then it will be a different object on each call even
  // if the values remain the same.
  const isEntity = typeof resource === 'object';
  const resourceAsString = isEntity ? JSON.stringify(resource) : resource;
  if (isEntity && typeof id !== 'undefined') {
     true ? _wordpress_warning__WEBPACK_IMPORTED_MODULE_1___default()(`When 'resource' is an entity object, passing 'id' as a separate argument isn't supported.`) : 0;
  }
  return (0,_use_query_select__WEBPACK_IMPORTED_MODULE_3__["default"])(resolve => {
    const hasId = isEntity ? !!resource.id : !!id;
    const {
      canUser
    } = resolve(___WEBPACK_IMPORTED_MODULE_2__.store);
    const create = canUser('create', isEntity ? {
      kind: resource.kind,
      name: resource.name
    } : resource);
    if (!hasId) {
      const read = canUser('read', resource);
      const isResolving = create.isResolving || read.isResolving;
      const hasResolved = create.hasResolved && read.hasResolved;
      let status = _constants__WEBPACK_IMPORTED_MODULE_4__.Status.Idle;
      if (isResolving) {
        status = _constants__WEBPACK_IMPORTED_MODULE_4__.Status.Resolving;
      } else if (hasResolved) {
        status = _constants__WEBPACK_IMPORTED_MODULE_4__.Status.Success;
      }
      return {
        status,
        isResolving,
        hasResolved,
        canCreate: create.hasResolved && create.data,
        canRead: read.hasResolved && read.data
      };
    }
    const read = canUser('read', resource, id);
    const update = canUser('update', resource, id);
    const _delete = canUser('delete', resource, id);
    const isResolving = read.isResolving || create.isResolving || update.isResolving || _delete.isResolving;
    const hasResolved = read.hasResolved && create.hasResolved && update.hasResolved && _delete.hasResolved;
    let status = _constants__WEBPACK_IMPORTED_MODULE_4__.Status.Idle;
    if (isResolving) {
      status = _constants__WEBPACK_IMPORTED_MODULE_4__.Status.Resolving;
    } else if (hasResolved) {
      status = _constants__WEBPACK_IMPORTED_MODULE_4__.Status.Success;
    }
    return {
      status,
      isResolving,
      hasResolved,
      canRead: hasResolved && read.data,
      canCreate: hasResolved && create.data,
      canUpdate: hasResolved && update.data,
      canDelete: hasResolved && _delete.data
    };
  }, [resourceAsString, id]);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useResourcePermissions);
function __experimentalUseResourcePermissions(resource, id) {
  _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_0___default()(`wp.data.__experimentalUseResourcePermissions`, {
    alternative: 'wp.data.useResourcePermissions',
    since: '6.1'
  });
  return useResourcePermissions(resource, id);
}


/***/ }),

/***/ "./node_modules/@wordpress/core-data/build-module/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@wordpress/core-data/build-module/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EntityProvider: () => (/* reexport safe */ _entity_provider__WEBPACK_IMPORTED_MODULE_12__["default"]),
/* harmony export */   __experimentalFetchLinkSuggestions: () => (/* reexport safe */ _fetch__WEBPACK_IMPORTED_MODULE_13__.__experimentalFetchLinkSuggestions),
/* harmony export */   __experimentalFetchUrlData: () => (/* reexport safe */ _fetch__WEBPACK_IMPORTED_MODULE_13__.__experimentalFetchUrlData),
/* harmony export */   __experimentalUseEntityRecord: () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_14__.__experimentalUseEntityRecord),
/* harmony export */   __experimentalUseEntityRecords: () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_14__.__experimentalUseEntityRecords),
/* harmony export */   __experimentalUseResourcePermissions: () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_14__.__experimentalUseResourcePermissions),
/* harmony export */   fetchBlockPatterns: () => (/* reexport safe */ _fetch__WEBPACK_IMPORTED_MODULE_13__.fetchBlockPatterns),
/* harmony export */   privateApis: () => (/* reexport safe */ _private_apis__WEBPACK_IMPORTED_MODULE_15__.privateApis),
/* harmony export */   store: () => (/* binding */ store),
/* harmony export */   useEntityBlockEditor: () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_14__.useEntityBlockEditor),
/* harmony export */   useEntityId: () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_14__.useEntityId),
/* harmony export */   useEntityProp: () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_14__.useEntityProp),
/* harmony export */   useEntityRecord: () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_14__.useEntityRecord),
/* harmony export */   useEntityRecords: () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_14__.useEntityRecords),
/* harmony export */   useResourcePermissions: () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_14__.useResourcePermissions)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reducer */ "./node_modules/@wordpress/core-data/build-module/reducer.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selectors */ "./node_modules/@wordpress/core-data/build-module/selectors.js");
/* harmony import */ var _private_selectors__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./private-selectors */ "./node_modules/@wordpress/core-data/build-module/private-selectors.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./actions */ "./node_modules/@wordpress/core-data/build-module/actions.js");
/* harmony import */ var _private_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./private-actions */ "./node_modules/@wordpress/core-data/build-module/private-actions.js");
/* harmony import */ var _resolvers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resolvers */ "./node_modules/@wordpress/core-data/build-module/resolvers.js");
/* harmony import */ var _locks_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./locks/actions */ "./node_modules/@wordpress/core-data/build-module/locks/actions.js");
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./entities */ "./node_modules/@wordpress/core-data/build-module/entities.js");
/* harmony import */ var _name__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./name */ "./node_modules/@wordpress/core-data/build-module/name.js");
/* harmony import */ var _lock_unlock__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lock-unlock */ "./node_modules/@wordpress/core-data/build-module/lock-unlock.js");
/* harmony import */ var _dynamic_entities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dynamic-entities */ "./node_modules/@wordpress/core-data/build-module/dynamic-entities.js");
/* harmony import */ var _entity_provider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./entity-provider */ "./node_modules/@wordpress/core-data/build-module/entity-provider.js");
/* harmony import */ var _fetch__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./fetch */ "./node_modules/@wordpress/core-data/build-module/fetch/index.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./hooks */ "./node_modules/@wordpress/core-data/build-module/hooks/index.js");
/* harmony import */ var _private_apis__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./private-apis */ "./node_modules/@wordpress/core-data/build-module/private-apis.js");
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */












// The entity selectors/resolvers and actions are shortcuts to their generic equivalents
// (getEntityRecord, getEntityRecords, updateEntityRecord, updateEntityRecords)
// Instead of getEntityRecord, the consumer could use more user-friendly named selector: getPostType, getTaxonomy...
// The "kind" and the "name" of the entity are combined to generate these shortcuts.
const entitiesConfig = [..._entities__WEBPACK_IMPORTED_MODULE_1__.rootEntitiesConfig, ..._entities__WEBPACK_IMPORTED_MODULE_1__.additionalEntityConfigLoaders.filter(config => !!config.name)];
const entitySelectors = entitiesConfig.reduce((result, entity) => {
  const {
    kind,
    name,
    plural
  } = entity;
  result[(0,_entities__WEBPACK_IMPORTED_MODULE_1__.getMethodName)(kind, name)] = (state, key, query) => _selectors__WEBPACK_IMPORTED_MODULE_2__.getEntityRecord(state, kind, name, key, query);
  if (plural) {
    result[(0,_entities__WEBPACK_IMPORTED_MODULE_1__.getMethodName)(kind, plural, 'get')] = (state, query) => _selectors__WEBPACK_IMPORTED_MODULE_2__.getEntityRecords(state, kind, name, query);
  }
  return result;
}, {});
const entityResolvers = entitiesConfig.reduce((result, entity) => {
  const {
    kind,
    name,
    plural
  } = entity;
  result[(0,_entities__WEBPACK_IMPORTED_MODULE_1__.getMethodName)(kind, name)] = (key, query) => _resolvers__WEBPACK_IMPORTED_MODULE_3__.getEntityRecord(kind, name, key, query);
  if (plural) {
    const pluralMethodName = (0,_entities__WEBPACK_IMPORTED_MODULE_1__.getMethodName)(kind, plural, 'get');
    result[pluralMethodName] = (...args) => _resolvers__WEBPACK_IMPORTED_MODULE_3__.getEntityRecords(kind, name, ...args);
    result[pluralMethodName].shouldInvalidate = action => _resolvers__WEBPACK_IMPORTED_MODULE_3__.getEntityRecords.shouldInvalidate(action, kind, name);
  }
  return result;
}, {});
const entityActions = entitiesConfig.reduce((result, entity) => {
  const {
    kind,
    name
  } = entity;
  result[(0,_entities__WEBPACK_IMPORTED_MODULE_1__.getMethodName)(kind, name, 'save')] = (record, options) => _actions__WEBPACK_IMPORTED_MODULE_4__.saveEntityRecord(kind, name, record, options);
  result[(0,_entities__WEBPACK_IMPORTED_MODULE_1__.getMethodName)(kind, name, 'delete')] = (key, query, options) => _actions__WEBPACK_IMPORTED_MODULE_4__.deleteEntityRecord(kind, name, key, query, options);
  return result;
}, {});
const storeConfig = () => ({
  reducer: _reducer__WEBPACK_IMPORTED_MODULE_5__["default"],
  actions: {
    ..._dynamic_entities__WEBPACK_IMPORTED_MODULE_6__.dynamicActions,
    ..._actions__WEBPACK_IMPORTED_MODULE_4__,
    ...entityActions,
    ...(0,_locks_actions__WEBPACK_IMPORTED_MODULE_7__["default"])()
  },
  selectors: {
    ..._dynamic_entities__WEBPACK_IMPORTED_MODULE_6__.dynamicSelectors,
    ..._selectors__WEBPACK_IMPORTED_MODULE_2__,
    ...entitySelectors
  },
  resolvers: {
    ..._resolvers__WEBPACK_IMPORTED_MODULE_3__,
    ...entityResolvers
  }
});

/**
 * Store definition for the code data namespace.
 *
 * @see https://github.com/WordPress/gutenberg/blob/HEAD/packages/data/README.md#createReduxStore
 */
const store = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.createReduxStore)(_name__WEBPACK_IMPORTED_MODULE_8__.STORE_NAME, storeConfig());
(0,_lock_unlock__WEBPACK_IMPORTED_MODULE_9__.unlock)(store).registerPrivateSelectors(_private_selectors__WEBPACK_IMPORTED_MODULE_10__);
(0,_lock_unlock__WEBPACK_IMPORTED_MODULE_9__.unlock)(store).registerPrivateActions(_private_actions__WEBPACK_IMPORTED_MODULE_11__);
(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.register)(store); // Register store after unlocking private selectors to allow resolvers to use them.









/***/ }),

/***/ "./node_modules/@wordpress/core-data/build-module/lock-unlock.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@wordpress/core-data/build-module/lock-unlock.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   lock: () => (/* binding */ lock),
/* harmony export */   unlock: () => (/* binding */ unlock)
/* harmony export */ });
/* harmony import */ var _wordpress_private_apis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/private-apis */ "@wordpress/private-apis");
/* harmony import */ var _wordpress_private_apis__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_private_apis__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress dependencies
 */

const {
  lock,
  unlock
} = (0,_wordpress_private_apis__WEBPACK_IMPORTED_MODULE_0__.__dangerousOptInToUnstableAPIsOnlyForCoreModules)('I acknowledge private features are not for use in themes or plugins and doing so will break in the next version of WordPress.', '@wordpress/core-data');


/***/ }),

/***/ "./node_modules/@wordpress/core-data/build-module/locks/actions.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@wordpress/core-data/build-module/locks/actions.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createLocksActions)
/* harmony export */ });
/* harmony import */ var _engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./engine */ "./node_modules/@wordpress/core-data/build-module/locks/engine.js");
/**
 * Internal dependencies
 */

function createLocksActions() {
  const locks = (0,_engine__WEBPACK_IMPORTED_MODULE_0__["default"])();
  function __unstableAcquireStoreLock(store, path, {
    exclusive
  }) {
    return () => locks.acquire(store, path, exclusive);
  }
  function __unstableReleaseStoreLock(lock) {
    return () => locks.release(lock);
  }
  return {
    __unstableAcquireStoreLock,
    __unstableReleaseStoreLock
  };
}


/***/ }),

/***/ "./node_modules/@wordpress/core-data/build-module/locks/engine.js":
/*!************************************************************************!*\
  !*** ./node_modules/@wordpress/core-data/build-module/locks/engine.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createLocks)
/* harmony export */ });
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducer */ "./node_modules/@wordpress/core-data/build-module/locks/reducer.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selectors */ "./node_modules/@wordpress/core-data/build-module/locks/selectors.js");
/**
 * Internal dependencies
 */


function createLocks() {
  let state = (0,_reducer__WEBPACK_IMPORTED_MODULE_0__["default"])(undefined, {
    type: '@@INIT'
  });
  function processPendingLockRequests() {
    for (const request of (0,_selectors__WEBPACK_IMPORTED_MODULE_1__.getPendingLockRequests)(state)) {
      const {
        store,
        path,
        exclusive,
        notifyAcquired
      } = request;
      if ((0,_selectors__WEBPACK_IMPORTED_MODULE_1__.isLockAvailable)(state, store, path, {
        exclusive
      })) {
        const lock = {
          store,
          path,
          exclusive
        };
        state = (0,_reducer__WEBPACK_IMPORTED_MODULE_0__["default"])(state, {
          type: 'GRANT_LOCK_REQUEST',
          lock,
          request
        });
        notifyAcquired(lock);
      }
    }
  }
  function acquire(store, path, exclusive) {
    return new Promise(resolve => {
      state = (0,_reducer__WEBPACK_IMPORTED_MODULE_0__["default"])(state, {
        type: 'ENQUEUE_LOCK_REQUEST',
        request: {
          store,
          path,
          exclusive,
          notifyAcquired: resolve
        }
      });
      processPendingLockRequests();
    });
  }
  function release(lock) {
    state = (0,_reducer__WEBPACK_IMPORTED_MODULE_0__["default"])(state, {
      type: 'RELEASE_LOCK',
      lock
    });
    processPendingLockRequests();
  }
  return {
    acquire,
    release
  };
}


/***/ }),

/***/ "./node_modules/@wordpress/core-data/build-module/locks/reducer.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@wordpress/core-data/build-module/locks/reducer.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ locks)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./node_modules/@wordpress/core-data/build-module/locks/utils.js");
/**
 * Internal dependencies
 */

const DEFAULT_STATE = {
  requests: [],
  tree: {
    locks: [],
    children: {}
  }
};

/**
 * Reducer returning locks.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Updated state.
 */
function locks(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case 'ENQUEUE_LOCK_REQUEST':
      {
        const {
          request
        } = action;
        return {
          ...state,
          requests: [request, ...state.requests]
        };
      }
    case 'GRANT_LOCK_REQUEST':
      {
        const {
          lock,
          request
        } = action;
        const {
          store,
          path
        } = request;
        const storePath = [store, ...path];
        const newTree = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.deepCopyLocksTreePath)(state.tree, storePath);
        const node = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getNode)(newTree, storePath);
        node.locks = [...node.locks, lock];
        return {
          ...state,
          requests: state.requests.filter(r => r !== request),
          tree: newTree
        };
      }
    case 'RELEASE_LOCK':
      {
        const {
          lock
        } = action;
        const storePath = [lock.store, ...lock.path];
        const newTree = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.deepCopyLocksTreePath)(state.tree, storePath);
        const node = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getNode)(newTree, storePath);
        node.locks = node.locks.filter(l => l !== lock);
        return {
          ...state,
          tree: newTree
        };
      }
  }
  return state;
}


/***/ }),

/***/ "./node_modules/@wordpress/core-data/build-module/locks/selectors.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@wordpress/core-data/build-module/locks/selectors.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getPendingLockRequests: () => (/* binding */ getPendingLockRequests),
/* harmony export */   isLockAvailable: () => (/* binding */ isLockAvailable)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./node_modules/@wordpress/core-data/build-module/locks/utils.js");
/**
 * Internal dependencies
 */

function getPendingLockRequests(state) {
  return state.requests;
}
function isLockAvailable(state, store, path, {
  exclusive
}) {
  const storePath = [store, ...path];
  const locks = state.tree;

  // Validate all parents and the node itself
  for (const node of (0,_utils__WEBPACK_IMPORTED_MODULE_0__.iteratePath)(locks, storePath)) {
    if ((0,_utils__WEBPACK_IMPORTED_MODULE_0__.hasConflictingLock)({
      exclusive
    }, node.locks)) {
      return false;
    }
  }

  // iteratePath terminates early if path is unreachable, let's
  // re-fetch the node and check it exists in the tree.
  const node = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getNode)(locks, storePath);
  if (!node) {
    return true;
  }

  // Validate all nested nodes
  for (const descendant of (0,_utils__WEBPACK_IMPORTED_MODULE_0__.iterateDescendants)(node)) {
    if ((0,_utils__WEBPACK_IMPORTED_MODULE_0__.hasConflictingLock)({
      exclusive
    }, descendant.locks)) {
      return false;
    }
  }
  return true;
}


/***/ }),

/***/ "./node_modules/@wordpress/core-data/build-module/locks/utils.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@wordpress/core-data/build-module/locks/utils.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deepCopyLocksTreePath: () => (/* binding */ deepCopyLocksTreePath),
/* harmony export */   getNode: () => (/* binding */ getNode),
/* harmony export */   hasConflictingLock: () => (/* binding */ hasConflictingLock),
/* harmony export */   iterateDescendants: () => (/* binding */ iterateDescendants),
/* harmony export */   iteratePath: () => (/* binding */ iteratePath)
/* harmony export */ });
function deepCopyLocksTreePath(tree, path) {
  const newTree = {
    ...tree
  };
  let currentNode = newTree;
  for (const branchName of path) {
    currentNode.children = {
      ...currentNode.children,
      [branchName]: {
        locks: [],
        children: {},
        ...currentNode.children[branchName]
      }
    };
    currentNode = currentNode.children[branchName];
  }
  return newTree;
}
function getNode(tree, path) {
  let currentNode = tree;
  for (const branchName of path) {
    const nextNode = currentNode.children[branchName];
    if (!nextNode) {
      return null;
    }
    currentNode = nextNode;
  }
  return currentNode;
}
function* iteratePath(tree, path) {
  let currentNode = tree;
  yield currentNode;
  for (const branchName of path) {
    const nextNode = currentNode.children[branchName];
    if (!nextNode) {
      break;
    }
    yield nextNode;
    currentNode = nextNode;
  }
}
function* iterateDescendants(node) {
  const stack = Object.values(node.children);
  while (stack.length) {
    const childNode = stack.pop();
    yield childNode;
    stack.push(...Object.values(childNode.children));
  }
}
function hasConflictingLock({
  exclusive
}, locks) {
  if (exclusive && locks.length) {
    return true;
  }
  if (!exclusive && locks.filter(lock => lock.exclusive).length) {
    return true;
  }
  return false;
}


/***/ }),

/***/ "./node_modules/@wordpress/core-data/build-module/name.js":
/*!****************************************************************!*\
  !*** ./node_modules/@wordpress/core-data/build-module/name.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   STORE_NAME: () => (/* binding */ STORE_NAME)
/* harmony export */ });
/**
 * The reducer key used by core data in store registration.
 * This is defined in a separate file to avoid cycle-dependency
 *
 * @type {string}
 */
const STORE_NAME = 'core';


/***/ }),

/***/ "./node_modules/@wordpress/core-data/build-module/private-actions.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@wordpress/core-data/build-module/private-actions.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   receiveRegisteredPostMeta: () => (/* binding */ receiveRegisteredPostMeta)
/* harmony export */ });
/**
 * Returns an action object used in signalling that the registered post meta
 * fields for a post type have been received.
 *
 * @param {string} postType           Post type slug.
 * @param {Object} registeredPostMeta Registered post meta.
 *
 * @return {Object} Action object.
 */
function receiveRegisteredPostMeta(postType, registeredPostMeta) {
  return {
    type: 'RECEIVE_REGISTERED_POST_META',
    postType,
    registeredPostMeta
  };
}


/***/ }),

/***/ "./node_modules/@wordpress/core-data/build-module/private-apis.js":
/*!************************************************************************!*\
  !*** ./node_modules/@wordpress/core-data/build-module/private-apis.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   privateApis: () => (/* binding */ privateApis)
/* harmony export */ });
/* harmony import */ var _hooks_use_entity_records__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hooks/use-entity-records */ "./node_modules/@wordpress/core-data/build-module/hooks/use-entity-records.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./node_modules/@wordpress/core-data/build-module/utils/receive-intermediate-results.js");
/* harmony import */ var _lock_unlock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lock-unlock */ "./node_modules/@wordpress/core-data/build-module/lock-unlock.js");
/**
 * Internal dependencies
 */



const privateApis = {};
(0,_lock_unlock__WEBPACK_IMPORTED_MODULE_0__.lock)(privateApis, {
  useEntityRecordsWithPermissions: _hooks_use_entity_records__WEBPACK_IMPORTED_MODULE_1__.useEntityRecordsWithPermissions,
  RECEIVE_INTERMEDIATE_RESULTS: _utils__WEBPACK_IMPORTED_MODULE_2__.RECEIVE_INTERMEDIATE_RESULTS
});


/***/ }),

/***/ "./node_modules/@wordpress/core-data/build-module/private-selectors.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@wordpress/core-data/build-module/private-selectors.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getBlockPatternsForPostType: () => (/* binding */ getBlockPatternsForPostType),
/* harmony export */   getEntityRecordPermissions: () => (/* binding */ getEntityRecordPermissions),
/* harmony export */   getEntityRecordsPermissions: () => (/* binding */ getEntityRecordsPermissions),
/* harmony export */   getHomePage: () => (/* binding */ getHomePage),
/* harmony export */   getNavigationFallbackId: () => (/* binding */ getNavigationFallbackId),
/* harmony export */   getPostsPageId: () => (/* binding */ getPostsPageId),
/* harmony export */   getRegisteredPostMeta: () => (/* binding */ getRegisteredPostMeta),
/* harmony export */   getTemplateId: () => (/* binding */ getTemplateId),
/* harmony export */   getUndoManager: () => (/* binding */ getUndoManager)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selectors */ "./node_modules/@wordpress/core-data/build-module/selectors.js");
/* harmony import */ var _name__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./name */ "./node_modules/@wordpress/core-data/build-module/name.js");
/* harmony import */ var _lock_unlock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lock-unlock */ "./node_modules/@wordpress/core-data/build-module/lock-unlock.js");
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */



/**
 * Returns the previous edit from the current undo offset
 * for the entity records edits history, if any.
 *
 * @param state State tree.
 *
 * @return The undo manager.
 */
function getUndoManager(state) {
  return state.undoManager;
}

/**
 * Retrieve the fallback Navigation.
 *
 * @param state Data state.
 * @return The ID for the fallback Navigation post.
 */
function getNavigationFallbackId(state) {
  return state.navigationFallbackId;
}
const getBlockPatternsForPostType = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.createRegistrySelector)(select => (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.createSelector)((state, postType) => select(_name__WEBPACK_IMPORTED_MODULE_1__.STORE_NAME).getBlockPatterns().filter(({
  postTypes
}) => !postTypes || Array.isArray(postTypes) && postTypes.includes(postType)), () => [select(_name__WEBPACK_IMPORTED_MODULE_1__.STORE_NAME).getBlockPatterns()]));

/**
 * Returns the entity records permissions for the given entity record ids.
 */
const getEntityRecordsPermissions = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.createRegistrySelector)(select => (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.createSelector)((state, kind, name, ids) => {
  const normalizedIds = Array.isArray(ids) ? ids : [ids];
  return normalizedIds.map(id => ({
    delete: select(_name__WEBPACK_IMPORTED_MODULE_1__.STORE_NAME).canUser('delete', {
      kind,
      name,
      id
    }),
    update: select(_name__WEBPACK_IMPORTED_MODULE_1__.STORE_NAME).canUser('update', {
      kind,
      name,
      id
    })
  }));
}, state => [state.userPermissions]));

/**
 * Returns the entity record permissions for the given entity record id.
 *
 * @param state Data state.
 * @param kind  Entity kind.
 * @param name  Entity name.
 * @param id    Entity record id.
 *
 * @return The entity record permissions.
 */
function getEntityRecordPermissions(state, kind, name, id) {
  return getEntityRecordsPermissions(state, kind, name, id)[0];
}

/**
 * Returns the registered post meta fields for a given post type.
 *
 * @param state    Data state.
 * @param postType Post type.
 *
 * @return Registered post meta fields.
 */
function getRegisteredPostMeta(state, postType) {
  var _state$registeredPost;
  return (_state$registeredPost = state.registeredPostMeta?.[postType]) !== null && _state$registeredPost !== void 0 ? _state$registeredPost : {};
}
function normalizePageId(value) {
  if (!value || !['number', 'string'].includes(typeof value)) {
    return null;
  }

  // We also need to check if it's not zero (`'0'`).
  if (Number(value) === 0) {
    return null;
  }
  return value.toString();
}
const getHomePage = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.createRegistrySelector)(select => (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.createSelector)(() => {
  const siteData = select(_name__WEBPACK_IMPORTED_MODULE_1__.STORE_NAME).getEntityRecord('root', '__unstableBase');
  if (!siteData) {
    return null;
  }
  const homepageId = siteData?.show_on_front === 'page' ? normalizePageId(siteData.page_on_front) : null;
  if (homepageId) {
    return {
      postType: 'page',
      postId: homepageId
    };
  }
  const frontPageTemplateId = select(_name__WEBPACK_IMPORTED_MODULE_1__.STORE_NAME).getDefaultTemplateId({
    slug: 'front-page'
  });
  return {
    postType: 'wp_template',
    postId: frontPageTemplateId
  };
}, state => [(0,_selectors__WEBPACK_IMPORTED_MODULE_2__.getEntityRecord)(state, 'root', '__unstableBase'), (0,_selectors__WEBPACK_IMPORTED_MODULE_2__.getDefaultTemplateId)(state, {
  slug: 'front-page'
})]));
const getPostsPageId = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.createRegistrySelector)(select => () => {
  const siteData = select(_name__WEBPACK_IMPORTED_MODULE_1__.STORE_NAME).getEntityRecord('root', '__unstableBase');
  return siteData?.show_on_front === 'page' ? normalizePageId(siteData.page_for_posts) : null;
});
const getTemplateId = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.createRegistrySelector)(select => (state, postType, postId) => {
  const homepage = (0,_lock_unlock__WEBPACK_IMPORTED_MODULE_3__.unlock)(select(_name__WEBPACK_IMPORTED_MODULE_1__.STORE_NAME)).getHomePage();
  if (!homepage) {
    return;
  }

  // For the front page, we always use the front page template if existing.
  if (postType === 'page' && postType === homepage?.postType && postId.toString() === homepage?.postId) {
    // The /lookup endpoint cannot currently handle a lookup
    // when a page is set as the front page, so specifically in
    // that case, we want to check if there is a front page
    // template, and instead of falling back to the home
    // template, we want to fall back to the page template.
    const templates = select(_name__WEBPACK_IMPORTED_MODULE_1__.STORE_NAME).getEntityRecords('postType', 'wp_template', {
      per_page: -1
    });
    if (!templates) {
      return;
    }
    const id = templates.find(({
      slug
    }) => slug === 'front-page')?.id;
    if (id) {
      return id;
    }
    // If no front page template is found, continue with the
    // logic below (fetching the page template).
  }
  const editedEntity = select(_name__WEBPACK_IMPORTED_MODULE_1__.STORE_NAME).getEditedEntityRecord('postType', postType, postId);
  if (!editedEntity) {
    return;
  }
  const postsPageId = (0,_lock_unlock__WEBPACK_IMPORTED_MODULE_3__.unlock)(select(_name__WEBPACK_IMPORTED_MODULE_1__.STORE_NAME)).getPostsPageId();
  // Check if the current page is the posts page.
  if (postType === 'page' && postsPageId === postId.toString()) {
    return select(_name__WEBPACK_IMPORTED_MODULE_1__.STORE_NAME).getDefaultTemplateId({
      slug: 'home'
    });
  }
  // First see if the post/page has an assigned template and fetch it.
  const currentTemplateSlug = editedEntity.template;
  if (currentTemplateSlug) {
    const currentTemplate = select(_name__WEBPACK_IMPORTED_MODULE_1__.STORE_NAME).getEntityRecords('postType', 'wp_template', {
      per_page: -1
    })?.find(({
      slug
    }) => slug === currentTemplateSlug);
    if (currentTemplate) {
      return currentTemplate.id;
    }
  }
  // If no template is assigned, use the default template.
  let slugToCheck;
  // In `draft` status we might not have a slug available, so we use the `single`
  // post type templates slug(ex page, single-post, single-product etc..).
  // Pages do not need the `single` prefix in the slug to be prioritized
  // through template hierarchy.
  if (editedEntity.slug) {
    slugToCheck = postType === 'page' ? `${postType}-${editedEntity.slug}` : `single-${postType}-${editedEntity.slug}`;
  } else {
    slugToCheck = postType === 'page' ? 'page' : `single-${postType}`;
  }
  return select(_name__WEBPACK_IMPORTED_MODULE_1__.STORE_NAME).getDefaultTemplateId({
    slug: slugToCheck
  });
});


/***/ }),

/***/ "./node_modules/@wordpress/core-data/build-module/queried-data/actions.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@wordpress/core-data/build-module/queried-data/actions.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   receiveItems: () => (/* binding */ receiveItems),
/* harmony export */   receiveQueriedItems: () => (/* binding */ receiveQueriedItems),
/* harmony export */   removeItems: () => (/* binding */ removeItems)
/* harmony export */ });
/**
 * Returns an action object used in signalling that items have been received.
 *
 * @param {Array}   items Items received.
 * @param {?Object} edits Optional edits to reset.
 * @param {?Object} meta  Meta information about pagination.
 *
 * @return {Object} Action object.
 */
function receiveItems(items, edits, meta) {
  return {
    type: 'RECEIVE_ITEMS',
    items: Array.isArray(items) ? items : [items],
    persistedEdits: edits,
    meta
  };
}

/**
 * Returns an action object used in signalling that entity records have been
 * deleted and they need to be removed from entities state.
 *
 * @param {string}              kind            Kind of the removed entities.
 * @param {string}              name            Name of the removed entities.
 * @param {Array|number|string} records         Record IDs of the removed entities.
 * @param {boolean}             invalidateCache Controls whether we want to invalidate the cache.
 * @return {Object} Action object.
 */
function removeItems(kind, name, records, invalidateCache = false) {
  return {
    type: 'REMOVE_ITEMS',
    itemIds: Array.isArray(records) ? records : [records],
    kind,
    name,
    invalidateCache
  };
}

/**
 * Returns an action object used in signalling that queried data has been
 * received.
 *
 * @param {Array}   items Queried items received.
 * @param {?Object} query Optional query object.
 * @param {?Object} edits Optional edits to reset.
 * @param {?Object} meta  Meta information about pagination.
 *
 * @return {Object} Action object.
 */
function receiveQueriedItems(items, query = {}, edits, meta) {
  return {
    ...receiveItems(items, edits, meta),
    query
  };
}


/***/ }),

/***/ "./node_modules/@wordpress/core-data/build-module/queried-data/get-query-parts.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@wordpress/core-data/build-module/queried-data/get-query-parts.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getQueryParts: () => (/* binding */ getQueryParts)
/* harmony export */ });
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./node_modules/@wordpress/core-data/build-module/utils/get-normalized-comma-separable.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./node_modules/@wordpress/core-data/build-module/utils/with-weak-map-cache.js");
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


/**
 * An object of properties describing a specific query.
 *
 * @typedef {Object} WPQueriedDataQueryParts
 *
 * @property {number}      page      The query page (1-based index, default 1).
 * @property {number}      perPage   Items per page for query (default 10).
 * @property {string}      stableKey An encoded stable string of all non-
 *                                   pagination, non-fields query parameters.
 * @property {?(string[])} fields    Target subset of fields to derive from
 *                                   item objects.
 * @property {?(number[])} include   Specific item IDs to include.
 * @property {string}      context   Scope under which the request is made;
 *                                   determines returned fields in response.
 */

/**
 * Given a query object, returns an object of parts, including pagination
 * details (`page` and `perPage`, or default values). All other properties are
 * encoded into a stable (idempotent) `stableKey` value.
 *
 * @param {Object} query Optional query object.
 *
 * @return {WPQueriedDataQueryParts} Query parts.
 */
function getQueryParts(query) {
  /**
   * @type {WPQueriedDataQueryParts}
   */
  const parts = {
    stableKey: '',
    page: 1,
    perPage: 10,
    fields: null,
    include: null,
    context: 'default'
  };

  // Ensure stable key by sorting keys. Also more efficient for iterating.
  const keys = Object.keys(query).sort();
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    let value = query[key];
    switch (key) {
      case 'page':
        parts[key] = Number(value);
        break;
      case 'per_page':
        parts.perPage = Number(value);
        break;
      case 'context':
        parts.context = value;
        break;
      default:
        // While in theory, we could exclude "_fields" from the stableKey
        // because two request with different fields have the same results
        // We're not able to ensure that because the server can decide to omit
        // fields from the response even if we explicitly asked for it.
        // Example: Asking for titles in posts without title support.
        if (key === '_fields') {
          var _getNormalizedCommaSe;
          parts.fields = (_getNormalizedCommaSe = (0,_utils__WEBPACK_IMPORTED_MODULE_1__["default"])(value)) !== null && _getNormalizedCommaSe !== void 0 ? _getNormalizedCommaSe : [];
          // Make sure to normalize value for `stableKey`
          value = parts.fields.join();
        }

        // Two requests with different include values cannot have same results.
        if (key === 'include') {
          var _getNormalizedCommaSe2;
          if (typeof value === 'number') {
            value = value.toString();
          }
          parts.include = ((_getNormalizedCommaSe2 = (0,_utils__WEBPACK_IMPORTED_MODULE_1__["default"])(value)) !== null && _getNormalizedCommaSe2 !== void 0 ? _getNormalizedCommaSe2 : []).map(Number);
          // Normalize value for `stableKey`.
          value = parts.include.join();
        }

        // While it could be any deterministic string, for simplicity's
        // sake mimic querystring encoding for stable key.
        //
        // TODO: For consistency with PHP implementation, addQueryArgs
        // should accept a key value pair, which may optimize its
        // implementation for our use here, vs. iterating an object
        // with only a single key.
        parts.stableKey += (parts.stableKey ? '&' : '') + (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_0__.addQueryArgs)('', {
          [key]: value
        }).slice(1);
    }
  }
  return parts;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils__WEBPACK_IMPORTED_MODULE_2__["default"])(getQueryParts));


/***/ }),

/***/ "./node_modules/@wordpress/core-data/build-module/queried-data/reducer.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@wordpress/core-data/build-module/queried-data/reducer.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getMergedItemIds: () => (/* binding */ getMergedItemIds),
/* harmony export */   itemIsComplete: () => (/* binding */ itemIsComplete),
/* harmony export */   items: () => (/* binding */ items)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ "./node_modules/@wordpress/core-data/build-module/utils/conservative-map-item.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils */ "./node_modules/@wordpress/core-data/build-module/utils/if-matching-action.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils */ "./node_modules/@wordpress/core-data/build-module/utils/replace-action.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils */ "./node_modules/@wordpress/core-data/build-module/utils/on-sub-key.js");
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../entities */ "./node_modules/@wordpress/core-data/build-module/entities.js");
/* harmony import */ var _get_query_parts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get-query-parts */ "./node_modules/@wordpress/core-data/build-module/queried-data/get-query-parts.js");
/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */



function getContextFromAction(action) {
  const {
    query
  } = action;
  if (!query) {
    return 'default';
  }
  const queryParts = (0,_get_query_parts__WEBPACK_IMPORTED_MODULE_2__["default"])(query);
  return queryParts.context;
}

/**
 * Returns a merged array of item IDs, given details of the received paginated
 * items. The array is sparse-like with `undefined` entries where holes exist.
 *
 * @param {?Array<number>} itemIds     Original item IDs (default empty array).
 * @param {number[]}       nextItemIds Item IDs to merge.
 * @param {number}         page        Page of items merged.
 * @param {number}         perPage     Number of items per page.
 *
 * @return {number[]} Merged array of item IDs.
 */
function getMergedItemIds(itemIds, nextItemIds, page, perPage) {
  var _itemIds$length;
  const receivedAllIds = page === 1 && perPage === -1;
  if (receivedAllIds) {
    return nextItemIds;
  }
  const nextItemIdsStartIndex = (page - 1) * perPage;

  // If later page has already been received, default to the larger known
  // size of the existing array, else calculate as extending the existing.
  const size = Math.max((_itemIds$length = itemIds?.length) !== null && _itemIds$length !== void 0 ? _itemIds$length : 0, nextItemIdsStartIndex + nextItemIds.length);

  // Preallocate array since size is known.
  const mergedItemIds = new Array(size);
  for (let i = 0; i < size; i++) {
    // Preserve existing item ID except for subset of range of next items.
    // We need to check against the possible maximum upper boundary because
    // a page could receive fewer than what was previously stored.
    const isInNextItemsRange = i >= nextItemIdsStartIndex && i < nextItemIdsStartIndex + perPage;
    mergedItemIds[i] = isInNextItemsRange ? nextItemIds[i - nextItemIdsStartIndex] : itemIds?.[i];
  }
  return mergedItemIds;
}

/**
 * Helper function to filter out entities with certain IDs.
 * Entities are keyed by their ID.
 *
 * @param {Object} entities Entity objects, keyed by entity ID.
 * @param {Array}  ids      Entity IDs to filter out.
 *
 * @return {Object} Filtered entities.
 */
function removeEntitiesById(entities, ids) {
  return Object.fromEntries(Object.entries(entities).filter(([id]) => !ids.some(itemId => {
    if (Number.isInteger(itemId)) {
      return itemId === +id;
    }
    return itemId === id;
  })));
}

/**
 * Reducer tracking items state, keyed by ID. Items are assumed to be normal,
 * where identifiers are common across all queries.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Next state.
 */
function items(state = {}, action) {
  switch (action.type) {
    case 'RECEIVE_ITEMS':
      {
        const context = getContextFromAction(action);
        const key = action.key || _entities__WEBPACK_IMPORTED_MODULE_3__.DEFAULT_ENTITY_KEY;
        return {
          ...state,
          [context]: {
            ...state[context],
            ...action.items.reduce((accumulator, value) => {
              const itemId = value?.[key];
              accumulator[itemId] = (0,_utils__WEBPACK_IMPORTED_MODULE_4__["default"])(state?.[context]?.[itemId], value);
              return accumulator;
            }, {})
          }
        };
      }
    case 'REMOVE_ITEMS':
      return Object.fromEntries(Object.entries(state).map(([itemId, contextState]) => [itemId, removeEntitiesById(contextState, action.itemIds)]));
  }
  return state;
}

/**
 * Reducer tracking item completeness, keyed by ID. A complete item is one for
 * which all fields are known. This is used in supporting `_fields` queries,
 * where not all properties associated with an entity are necessarily returned.
 * In such cases, completeness is used as an indication of whether it would be
 * safe to use queried data for a non-`_fields`-limited request.
 *
 * @param {Object<string,Object<string,boolean>>} state  Current state.
 * @param {Object}                                action Dispatched action.
 *
 * @return {Object<string,Object<string,boolean>>} Next state.
 */
function itemIsComplete(state = {}, action) {
  switch (action.type) {
    case 'RECEIVE_ITEMS':
      {
        const context = getContextFromAction(action);
        const {
          query,
          key = _entities__WEBPACK_IMPORTED_MODULE_3__.DEFAULT_ENTITY_KEY
        } = action;

        // An item is considered complete if it is received without an associated
        // fields query. Ideally, this would be implemented in such a way where the
        // complete aggregate of all fields would satisfy completeness. Since the
        // fields are not consistent across all entities, this would require
        // introspection on the REST schema for each entity to know which fields
        // compose a complete item for that entity.
        const queryParts = query ? (0,_get_query_parts__WEBPACK_IMPORTED_MODULE_2__["default"])(query) : {};
        const isCompleteQuery = !query || !Array.isArray(queryParts.fields);
        return {
          ...state,
          [context]: {
            ...state[context],
            ...action.items.reduce((result, item) => {
              const itemId = item?.[key];

              // Defer to completeness if already assigned. Technically the
              // data may be outdated if receiving items for a field subset.
              result[itemId] = state?.[context]?.[itemId] || isCompleteQuery;
              return result;
            }, {})
          }
        };
      }
    case 'REMOVE_ITEMS':
      return Object.fromEntries(Object.entries(state).map(([itemId, contextState]) => [itemId, removeEntitiesById(contextState, action.itemIds)]));
  }
  return state;
}

/**
 * Reducer tracking queries state, keyed by stable query key. Each reducer
 * query object includes `itemIds` and `requestingPageByPerPage`.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Next state.
 */
const receiveQueries = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__.compose)([
// Limit to matching action type so we don't attempt to replace action on
// an unhandled action.
(0,_utils__WEBPACK_IMPORTED_MODULE_5__["default"])(action => 'query' in action),
// Inject query parts into action for use both in `onSubKey` and reducer.
(0,_utils__WEBPACK_IMPORTED_MODULE_6__["default"])(action => {
  // `ifMatchingAction` still passes on initialization, where state is
  // undefined and a query is not assigned. Avoid attempting to parse
  // parts. `onSubKey` will omit by lack of `stableKey`.
  if (action.query) {
    return {
      ...action,
      ...(0,_get_query_parts__WEBPACK_IMPORTED_MODULE_2__["default"])(action.query)
    };
  }
  return action;
}), (0,_utils__WEBPACK_IMPORTED_MODULE_7__["default"])('context'),
// Queries shape is shared, but keyed by query `stableKey` part. Original
// reducer tracks only a single query object.
(0,_utils__WEBPACK_IMPORTED_MODULE_7__["default"])('stableKey')])((state = {}, action) => {
  const {
    type,
    page,
    perPage,
    key = _entities__WEBPACK_IMPORTED_MODULE_3__.DEFAULT_ENTITY_KEY
  } = action;
  if (type !== 'RECEIVE_ITEMS') {
    return state;
  }
  return {
    itemIds: getMergedItemIds(state?.itemIds || [], action.items.map(item => item?.[key]).filter(Boolean), page, perPage),
    meta: action.meta
  };
});

/**
 * Reducer tracking queries state.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Next state.
 */
const queries = (state = {}, action) => {
  switch (action.type) {
    case 'RECEIVE_ITEMS':
      return receiveQueries(state, action);
    case 'REMOVE_ITEMS':
      const removedItems = action.itemIds.reduce((result, itemId) => {
        result[itemId] = true;
        return result;
      }, {});
      return Object.fromEntries(Object.entries(state).map(([queryGroup, contextQueries]) => [queryGroup, Object.fromEntries(Object.entries(contextQueries).map(([query, queryItems]) => [query, {
        ...queryItems,
        itemIds: queryItems.itemIds.filter(queryId => !removedItems[queryId])
      }]))]));
    default:
      return state;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({
  items,
  itemIsComplete,
  queries
}));


/***/ }),

/***/ "./node_modules/@wordpress/core-data/build-module/queried-data/selectors.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@wordpress/core-data/build-module/queried-data/selectors.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getQueriedItems: () => (/* binding */ getQueriedItems),
/* harmony export */   getQueriedTotalItems: () => (/* binding */ getQueriedTotalItems),
/* harmony export */   getQueriedTotalPages: () => (/* binding */ getQueriedTotalPages)
/* harmony export */ });
/* harmony import */ var equivalent_key_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! equivalent-key-map */ "./node_modules/equivalent-key-map/equivalent-key-map.js");
/* harmony import */ var equivalent_key_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(equivalent_key_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _get_query_parts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get-query-parts */ "./node_modules/@wordpress/core-data/build-module/queried-data/get-query-parts.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./node_modules/@wordpress/core-data/build-module/utils/set-nested-value.js");
/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */



/**
 * Cache of state keys to EquivalentKeyMap where the inner map tracks queries
 * to their resulting items set. WeakMap allows garbage collection on expired
 * state references.
 *
 * @type {WeakMap<Object,EquivalentKeyMap>}
 */
const queriedItemsCacheByState = new WeakMap();

/**
 * Returns items for a given query, or null if the items are not known.
 *
 * @param {Object}  state State object.
 * @param {?Object} query Optional query.
 *
 * @return {?Array} Query items.
 */
function getQueriedItemsUncached(state, query) {
  const {
    stableKey,
    page,
    perPage,
    include,
    fields,
    context
  } = (0,_get_query_parts__WEBPACK_IMPORTED_MODULE_2__["default"])(query);
  let itemIds;
  if (state.queries?.[context]?.[stableKey]) {
    itemIds = state.queries[context][stableKey].itemIds;
  }
  if (!itemIds) {
    return null;
  }
  const startOffset = perPage === -1 ? 0 : (page - 1) * perPage;
  const endOffset = perPage === -1 ? itemIds.length : Math.min(startOffset + perPage, itemIds.length);
  const items = [];
  for (let i = startOffset; i < endOffset; i++) {
    const itemId = itemIds[i];
    if (Array.isArray(include) && !include.includes(itemId)) {
      continue;
    }
    if (itemId === undefined) {
      continue;
    }
    // Having a target item ID doesn't guarantee that this object has been queried.
    if (!state.items[context]?.hasOwnProperty(itemId)) {
      return null;
    }
    const item = state.items[context][itemId];
    let filteredItem;
    if (Array.isArray(fields)) {
      filteredItem = {};
      for (let f = 0; f < fields.length; f++) {
        const field = fields[f].split('.');
        let value = item;
        field.forEach(fieldName => {
          value = value?.[fieldName];
        });
        (0,_utils__WEBPACK_IMPORTED_MODULE_3__["default"])(filteredItem, field, value);
      }
    } else {
      // If expecting a complete item, validate that completeness, or
      // otherwise abort.
      if (!state.itemIsComplete[context]?.[itemId]) {
        return null;
      }
      filteredItem = item;
    }
    items.push(filteredItem);
  }
  return items;
}

/**
 * Returns items for a given query, or null if the items are not known. Caches
 * result both per state (by reference) and per query (by deep equality).
 * The caching approach is intended to be durable to query objects which are
 * deeply but not referentially equal, since otherwise:
 *
 * `getQueriedItems( state, {} ) !== getQueriedItems( state, {} )`
 *
 * @param {Object}  state State object.
 * @param {?Object} query Optional query.
 *
 * @return {?Array} Query items.
 */
const getQueriedItems = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.createSelector)((state, query = {}) => {
  let queriedItemsCache = queriedItemsCacheByState.get(state);
  if (queriedItemsCache) {
    const queriedItems = queriedItemsCache.get(query);
    if (queriedItems !== undefined) {
      return queriedItems;
    }
  } else {
    queriedItemsCache = new (equivalent_key_map__WEBPACK_IMPORTED_MODULE_0___default())();
    queriedItemsCacheByState.set(state, queriedItemsCache);
  }
  const items = getQueriedItemsUncached(state, query);
  queriedItemsCache.set(query, items);
  return items;
});
function getQueriedTotalItems(state, query = {}) {
  var _state$queries$contex;
  const {
    stableKey,
    context
  } = (0,_get_query_parts__WEBPACK_IMPORTED_MODULE_2__["default"])(query);
  return (_state$queries$contex = state.queries?.[context]?.[stableKey]?.meta?.totalItems) !== null && _state$queries$contex !== void 0 ? _state$queries$contex : null;
}
function getQueriedTotalPages(state, query = {}) {
  var _state$queries$contex2;
  const {
    stableKey,
    context
  } = (0,_get_query_parts__WEBPACK_IMPORTED_MODULE_2__["default"])(query);
  return (_state$queries$contex2 = state.queries?.[context]?.[stableKey]?.meta?.totalPages) !== null && _state$queries$contex2 !== void 0 ? _state$queries$contex2 : null;
}


/***/ }),

/***/ "./node_modules/@wordpress/core-data/build-module/reducer.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@wordpress/core-data/build-module/reducer.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   autosaves: () => (/* binding */ autosaves),
/* harmony export */   blockPatternCategories: () => (/* binding */ blockPatternCategories),
/* harmony export */   blockPatterns: () => (/* binding */ blockPatterns),
/* harmony export */   currentGlobalStylesId: () => (/* binding */ currentGlobalStylesId),
/* harmony export */   currentTheme: () => (/* binding */ currentTheme),
/* harmony export */   currentUser: () => (/* binding */ currentUser),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   defaultTemplates: () => (/* binding */ defaultTemplates),
/* harmony export */   editsReference: () => (/* binding */ editsReference),
/* harmony export */   embedPreviews: () => (/* binding */ embedPreviews),
/* harmony export */   entities: () => (/* binding */ entities),
/* harmony export */   entitiesConfig: () => (/* binding */ entitiesConfig),
/* harmony export */   navigationFallbackId: () => (/* binding */ navigationFallbackId),
/* harmony export */   registeredPostMeta: () => (/* binding */ registeredPostMeta),
/* harmony export */   taxonomies: () => (/* binding */ taxonomies),
/* harmony export */   terms: () => (/* binding */ terms),
/* harmony export */   themeBaseGlobalStyles: () => (/* binding */ themeBaseGlobalStyles),
/* harmony export */   themeGlobalStyleRevisions: () => (/* binding */ themeGlobalStyleRevisions),
/* harmony export */   themeGlobalStyleVariations: () => (/* binding */ themeGlobalStyleVariations),
/* harmony export */   undoManager: () => (/* binding */ undoManager),
/* harmony export */   userPatternCategories: () => (/* binding */ userPatternCategories),
/* harmony export */   userPermissions: () => (/* binding */ userPermissions),
/* harmony export */   users: () => (/* binding */ users)
/* harmony export */ });
/* harmony import */ var fast_deep_equal_es6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fast-deep-equal/es6 */ "./node_modules/fast-deep-equal/es6/index.js");
/* harmony import */ var fast_deep_equal_es6__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fast_deep_equal_es6__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_undo_manager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/undo-manager */ "./node_modules/@wordpress/undo-manager/build-module/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./node_modules/@wordpress/core-data/build-module/utils/if-matching-action.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./node_modules/@wordpress/core-data/build-module/utils/replace-action.js");
/* harmony import */ var _queried_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./queried-data */ "./node_modules/@wordpress/core-data/build-module/queried-data/reducer.js");
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./entities */ "./node_modules/@wordpress/core-data/build-module/entities.js");
/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */




/** @typedef {import('./types').AnyFunction} AnyFunction */

/**
 * Reducer managing terms state. Keyed by taxonomy slug, the value is either
 * undefined (if no request has been made for given taxonomy), null (if a
 * request is in-flight for given taxonomy), or the array of terms for the
 * taxonomy.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Updated state.
 */
function terms(state = {}, action) {
  switch (action.type) {
    case 'RECEIVE_TERMS':
      return {
        ...state,
        [action.taxonomy]: action.terms
      };
  }
  return state;
}

/**
 * Reducer managing authors state. Keyed by id.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Updated state.
 */
function users(state = {
  byId: {},
  queries: {}
}, action) {
  switch (action.type) {
    case 'RECEIVE_USER_QUERY':
      return {
        byId: {
          ...state.byId,
          // Key users by their ID.
          ...action.users.reduce((newUsers, user) => ({
            ...newUsers,
            [user.id]: user
          }), {})
        },
        queries: {
          ...state.queries,
          [action.queryID]: action.users.map(user => user.id)
        }
      };
  }
  return state;
}

/**
 * Reducer managing current user state.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Updated state.
 */
function currentUser(state = {}, action) {
  switch (action.type) {
    case 'RECEIVE_CURRENT_USER':
      return action.currentUser;
  }
  return state;
}

/**
 * Reducer managing taxonomies.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Updated state.
 */
function taxonomies(state = [], action) {
  switch (action.type) {
    case 'RECEIVE_TAXONOMIES':
      return action.taxonomies;
  }
  return state;
}

/**
 * Reducer managing the current theme.
 *
 * @param {string|undefined} state  Current state.
 * @param {Object}           action Dispatched action.
 *
 * @return {string|undefined} Updated state.
 */
function currentTheme(state = undefined, action) {
  switch (action.type) {
    case 'RECEIVE_CURRENT_THEME':
      return action.currentTheme.stylesheet;
  }
  return state;
}

/**
 * Reducer managing the current global styles id.
 *
 * @param {string|undefined} state  Current state.
 * @param {Object}           action Dispatched action.
 *
 * @return {string|undefined} Updated state.
 */
function currentGlobalStylesId(state = undefined, action) {
  switch (action.type) {
    case 'RECEIVE_CURRENT_GLOBAL_STYLES_ID':
      return action.id;
  }
  return state;
}

/**
 * Reducer managing the theme base global styles.
 *
 * @param {Record<string, object>} state  Current state.
 * @param {Object}                 action Dispatched action.
 *
 * @return {Record<string, object>} Updated state.
 */
function themeBaseGlobalStyles(state = {}, action) {
  switch (action.type) {
    case 'RECEIVE_THEME_GLOBAL_STYLES':
      return {
        ...state,
        [action.stylesheet]: action.globalStyles
      };
  }
  return state;
}

/**
 * Reducer managing the theme global styles variations.
 *
 * @param {Record<string, object>} state  Current state.
 * @param {Object}                 action Dispatched action.
 *
 * @return {Record<string, object>} Updated state.
 */
function themeGlobalStyleVariations(state = {}, action) {
  switch (action.type) {
    case 'RECEIVE_THEME_GLOBAL_STYLE_VARIATIONS':
      return {
        ...state,
        [action.stylesheet]: action.variations
      };
  }
  return state;
}
const withMultiEntityRecordEdits = reducer => (state, action) => {
  if (action.type === 'UNDO' || action.type === 'REDO') {
    const {
      record
    } = action;
    let newState = state;
    record.forEach(({
      id: {
        kind,
        name,
        recordId
      },
      changes
    }) => {
      newState = reducer(newState, {
        type: 'EDIT_ENTITY_RECORD',
        kind,
        name,
        recordId,
        edits: Object.entries(changes).reduce((acc, [key, value]) => {
          acc[key] = action.type === 'UNDO' ? value.from : value.to;
          return acc;
        }, {})
      });
    });
    return newState;
  }
  return reducer(state, action);
};

/**
 * Higher Order Reducer for a given entity config. It supports:
 *
 *  - Fetching
 *  - Editing
 *  - Saving
 *
 * @param {Object} entityConfig Entity config.
 *
 * @return {AnyFunction} Reducer.
 */
function entity(entityConfig) {
  return (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__.compose)([withMultiEntityRecordEdits,
  // Limit to matching action type so we don't attempt to replace action on
  // an unhandled action.
  (0,_utils__WEBPACK_IMPORTED_MODULE_3__["default"])(action => action.name && action.kind && action.name === entityConfig.name && action.kind === entityConfig.kind),
  // Inject the entity config into the action.
  (0,_utils__WEBPACK_IMPORTED_MODULE_4__["default"])(action => {
    return {
      key: entityConfig.key || _entities__WEBPACK_IMPORTED_MODULE_5__.DEFAULT_ENTITY_KEY,
      ...action
    };
  })])((0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.combineReducers)({
    queriedData: _queried_data__WEBPACK_IMPORTED_MODULE_6__["default"],
    edits: (state = {}, action) => {
      var _action$query$context;
      switch (action.type) {
        case 'RECEIVE_ITEMS':
          const context = (_action$query$context = action?.query?.context) !== null && _action$query$context !== void 0 ? _action$query$context : 'default';
          if (context !== 'default') {
            return state;
          }
          const nextState = {
            ...state
          };
          for (const record of action.items) {
            const recordId = record?.[action.key];
            const edits = nextState[recordId];
            if (!edits) {
              continue;
            }
            const nextEdits = Object.keys(edits).reduce((acc, key) => {
              var _record$key$raw;
              // If the edited value is still different to the persisted value,
              // keep the edited value in edits.
              if (
              // Edits are the "raw" attribute values, but records may have
              // objects with more properties, so we use `get` here for the
              // comparison.
              !fast_deep_equal_es6__WEBPACK_IMPORTED_MODULE_0___default()(edits[key], (_record$key$raw = record[key]?.raw) !== null && _record$key$raw !== void 0 ? _record$key$raw : record[key]) && (
              // Sometimes the server alters the sent value which means
              // we need to also remove the edits before the api request.
              !action.persistedEdits || !fast_deep_equal_es6__WEBPACK_IMPORTED_MODULE_0___default()(edits[key], action.persistedEdits[key]))) {
                acc[key] = edits[key];
              }
              return acc;
            }, {});
            if (Object.keys(nextEdits).length) {
              nextState[recordId] = nextEdits;
            } else {
              delete nextState[recordId];
            }
          }
          return nextState;
        case 'EDIT_ENTITY_RECORD':
          const nextEdits = {
            ...state[action.recordId],
            ...action.edits
          };
          Object.keys(nextEdits).forEach(key => {
            // Delete cleared edits so that the properties
            // are not considered dirty.
            if (nextEdits[key] === undefined) {
              delete nextEdits[key];
            }
          });
          return {
            ...state,
            [action.recordId]: nextEdits
          };
      }
      return state;
    },
    saving: (state = {}, action) => {
      switch (action.type) {
        case 'SAVE_ENTITY_RECORD_START':
        case 'SAVE_ENTITY_RECORD_FINISH':
          return {
            ...state,
            [action.recordId]: {
              pending: action.type === 'SAVE_ENTITY_RECORD_START',
              error: action.error,
              isAutosave: action.isAutosave
            }
          };
      }
      return state;
    },
    deleting: (state = {}, action) => {
      switch (action.type) {
        case 'DELETE_ENTITY_RECORD_START':
        case 'DELETE_ENTITY_RECORD_FINISH':
          return {
            ...state,
            [action.recordId]: {
              pending: action.type === 'DELETE_ENTITY_RECORD_START',
              error: action.error
            }
          };
      }
      return state;
    },
    revisions: (state = {}, action) => {
      // Use the same queriedDataReducer shape for revisions.
      if (action.type === 'RECEIVE_ITEM_REVISIONS') {
        const recordKey = action.recordKey;
        delete action.recordKey;
        const newState = (0,_queried_data__WEBPACK_IMPORTED_MODULE_6__["default"])(state[recordKey], {
          ...action,
          type: 'RECEIVE_ITEMS'
        });
        return {
          ...state,
          [recordKey]: newState
        };
      }
      if (action.type === 'REMOVE_ITEMS') {
        return Object.fromEntries(Object.entries(state).filter(([id]) => !action.itemIds.some(itemId => {
          if (Number.isInteger(itemId)) {
            return itemId === +id;
          }
          return itemId === id;
        })));
      }
      return state;
    }
  }));
}

/**
 * Reducer keeping track of the registered entities.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Updated state.
 */
function entitiesConfig(state = _entities__WEBPACK_IMPORTED_MODULE_5__.rootEntitiesConfig, action) {
  switch (action.type) {
    case 'ADD_ENTITIES':
      return [...state, ...action.entities];
  }
  return state;
}

/**
 * Reducer keeping track of the registered entities config and data.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Updated state.
 */
const entities = (state = {}, action) => {
  const newConfig = entitiesConfig(state.config, action);

  // Generates a dynamic reducer for the entities.
  let entitiesDataReducer = state.reducer;
  if (!entitiesDataReducer || newConfig !== state.config) {
    const entitiesByKind = newConfig.reduce((acc, record) => {
      const {
        kind
      } = record;
      if (!acc[kind]) {
        acc[kind] = [];
      }
      acc[kind].push(record);
      return acc;
    }, {});
    entitiesDataReducer = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.combineReducers)(Object.entries(entitiesByKind).reduce((memo, [kind, subEntities]) => {
      const kindReducer = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.combineReducers)(subEntities.reduce((kindMemo, entityConfig) => ({
        ...kindMemo,
        [entityConfig.name]: entity(entityConfig)
      }), {}));
      memo[kind] = kindReducer;
      return memo;
    }, {}));
  }
  const newData = entitiesDataReducer(state.records, action);
  if (newData === state.records && newConfig === state.config && entitiesDataReducer === state.reducer) {
    return state;
  }
  return {
    reducer: entitiesDataReducer,
    records: newData,
    config: newConfig
  };
};

/**
 * @type {UndoManager}
 */
function undoManager(state = (0,_wordpress_undo_manager__WEBPACK_IMPORTED_MODULE_7__.createUndoManager)()) {
  return state;
}
function editsReference(state = {}, action) {
  switch (action.type) {
    case 'EDIT_ENTITY_RECORD':
    case 'UNDO':
    case 'REDO':
      return {};
  }
  return state;
}

/**
 * Reducer managing embed preview data.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Updated state.
 */
function embedPreviews(state = {}, action) {
  switch (action.type) {
    case 'RECEIVE_EMBED_PREVIEW':
      const {
        url,
        preview
      } = action;
      return {
        ...state,
        [url]: preview
      };
  }
  return state;
}

/**
 * State which tracks whether the user can perform an action on a REST
 * resource.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Updated state.
 */
function userPermissions(state = {}, action) {
  switch (action.type) {
    case 'RECEIVE_USER_PERMISSION':
      return {
        ...state,
        [action.key]: action.isAllowed
      };
    case 'RECEIVE_USER_PERMISSIONS':
      return {
        ...state,
        ...action.permissions
      };
  }
  return state;
}

/**
 * Reducer returning autosaves keyed by their parent's post id.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Updated state.
 */
function autosaves(state = {}, action) {
  switch (action.type) {
    case 'RECEIVE_AUTOSAVES':
      const {
        postId,
        autosaves: autosavesData
      } = action;
      return {
        ...state,
        [postId]: autosavesData
      };
  }
  return state;
}
function blockPatterns(state = [], action) {
  switch (action.type) {
    case 'RECEIVE_BLOCK_PATTERNS':
      return action.patterns;
  }
  return state;
}
function blockPatternCategories(state = [], action) {
  switch (action.type) {
    case 'RECEIVE_BLOCK_PATTERN_CATEGORIES':
      return action.categories;
  }
  return state;
}
function userPatternCategories(state = [], action) {
  switch (action.type) {
    case 'RECEIVE_USER_PATTERN_CATEGORIES':
      return action.patternCategories;
  }
  return state;
}
function navigationFallbackId(state = null, action) {
  switch (action.type) {
    case 'RECEIVE_NAVIGATION_FALLBACK_ID':
      return action.fallbackId;
  }
  return state;
}

/**
 * Reducer managing the theme global styles revisions.
 *
 * @param {Record<string, object>} state  Current state.
 * @param {Object}                 action Dispatched action.
 *
 * @return {Record<string, object>} Updated state.
 */
function themeGlobalStyleRevisions(state = {}, action) {
  switch (action.type) {
    case 'RECEIVE_THEME_GLOBAL_STYLE_REVISIONS':
      return {
        ...state,
        [action.currentId]: action.revisions
      };
  }
  return state;
}

/**
 * Reducer managing the template lookup per query.
 *
 * @param {Record<string, string>} state  Current state.
 * @param {Object}                 action Dispatched action.
 *
 * @return {Record<string, string>} Updated state.
 */
function defaultTemplates(state = {}, action) {
  switch (action.type) {
    case 'RECEIVE_DEFAULT_TEMPLATE':
      return {
        ...state,
        [JSON.stringify(action.query)]: action.templateId
      };
  }
  return state;
}

/**
 * Reducer returning an object of registered post meta.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Updated state.
 */
function registeredPostMeta(state = {}, action) {
  switch (action.type) {
    case 'RECEIVE_REGISTERED_POST_META':
      return {
        ...state,
        [action.postType]: action.registeredPostMeta
      };
  }
  return state;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.combineReducers)({
  terms,
  users,
  currentTheme,
  currentGlobalStylesId,
  currentUser,
  themeGlobalStyleVariations,
  themeBaseGlobalStyles,
  themeGlobalStyleRevisions,
  taxonomies,
  entities,
  editsReference,
  undoManager,
  embedPreviews,
  userPermissions,
  autosaves,
  blockPatterns,
  blockPatternCategories,
  userPatternCategories,
  navigationFallbackId,
  defaultTemplates,
  registeredPostMeta
}));


/***/ }),

/***/ "./node_modules/@wordpress/core-data/build-module/resolvers.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@wordpress/core-data/build-module/resolvers.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __experimentalGetCurrentGlobalStylesId: () => (/* binding */ __experimentalGetCurrentGlobalStylesId),
/* harmony export */   __experimentalGetCurrentThemeBaseGlobalStyles: () => (/* binding */ __experimentalGetCurrentThemeBaseGlobalStyles),
/* harmony export */   __experimentalGetCurrentThemeGlobalStylesVariations: () => (/* binding */ __experimentalGetCurrentThemeGlobalStylesVariations),
/* harmony export */   canUser: () => (/* binding */ canUser),
/* harmony export */   canUserEditEntityRecord: () => (/* binding */ canUserEditEntityRecord),
/* harmony export */   getAuthors: () => (/* binding */ getAuthors),
/* harmony export */   getAutosave: () => (/* binding */ getAutosave),
/* harmony export */   getAutosaves: () => (/* binding */ getAutosaves),
/* harmony export */   getBlockPatternCategories: () => (/* binding */ getBlockPatternCategories),
/* harmony export */   getBlockPatterns: () => (/* binding */ getBlockPatterns),
/* harmony export */   getCurrentTheme: () => (/* binding */ getCurrentTheme),
/* harmony export */   getCurrentThemeGlobalStylesRevisions: () => (/* binding */ getCurrentThemeGlobalStylesRevisions),
/* harmony export */   getCurrentUser: () => (/* binding */ getCurrentUser),
/* harmony export */   getDefaultTemplateId: () => (/* binding */ getDefaultTemplateId),
/* harmony export */   getEditedEntityRecord: () => (/* binding */ getEditedEntityRecord),
/* harmony export */   getEmbedPreview: () => (/* binding */ getEmbedPreview),
/* harmony export */   getEntitiesConfig: () => (/* binding */ getEntitiesConfig),
/* harmony export */   getEntityRecord: () => (/* binding */ getEntityRecord),
/* harmony export */   getEntityRecords: () => (/* binding */ getEntityRecords),
/* harmony export */   getNavigationFallbackId: () => (/* binding */ getNavigationFallbackId),
/* harmony export */   getRawEntityRecord: () => (/* binding */ getRawEntityRecord),
/* harmony export */   getRegisteredPostMeta: () => (/* binding */ getRegisteredPostMeta),
/* harmony export */   getRevision: () => (/* binding */ getRevision),
/* harmony export */   getRevisions: () => (/* binding */ getRevisions),
/* harmony export */   getThemeSupports: () => (/* binding */ getThemeSupports),
/* harmony export */   getUserPatternCategories: () => (/* binding */ getUserPatternCategories)
/* harmony export */ });
/* harmony import */ var change_case__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! change-case */ "./node_modules/camel-case/dist.es2015/index.js");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/html-entities */ "@wordpress/html-entities");
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _name__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./name */ "./node_modules/@wordpress/core-data/build-module/name.js");
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./entities */ "./node_modules/@wordpress/core-data/build-module/entities.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./node_modules/@wordpress/core-data/build-module/utils/get-normalized-comma-separable.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils */ "./node_modules/@wordpress/core-data/build-module/utils/user-permissions.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils */ "./node_modules/@wordpress/core-data/build-module/utils/forward-resolver.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils */ "./node_modules/@wordpress/core-data/build-module/utils/receive-intermediate-results.js");
/* harmony import */ var _fetch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./fetch */ "./node_modules/@wordpress/core-data/build-module/fetch/index.js");
/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */






/**
 * Requests authors from the REST API.
 *
 * @param {Object|undefined} query Optional object of query parameters to
 *                                 include with request.
 */
const getAuthors = query => async ({
  dispatch
}) => {
  const path = (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_0__.addQueryArgs)('/wp/v2/users/?who=authors&per_page=100', query);
  const users = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default()({
    path
  });
  dispatch.receiveUserQuery(path, users);
};

/**
 * Requests the current user from the REST API.
 */
const getCurrentUser = () => async ({
  dispatch
}) => {
  const currentUser = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default()({
    path: '/wp/v2/users/me'
  });
  dispatch.receiveCurrentUser(currentUser);
};

/**
 * Requests an entity's record from the REST API.
 *
 * @param {string}           kind  Entity kind.
 * @param {string}           name  Entity name.
 * @param {number|string}    key   Record's key
 * @param {Object|undefined} query Optional object of query parameters to
 *                                 include with request. If requesting specific
 *                                 fields, fields must always include the ID.
 */
const getEntityRecord = (kind, name, key = '', query) => async ({
  select,
  dispatch,
  registry,
  resolveSelect
}) => {
  const configs = await resolveSelect.getEntitiesConfig(kind);
  const entityConfig = configs.find(config => config.name === name && config.kind === kind);
  if (!entityConfig) {
    return;
  }
  const lock = await dispatch.__unstableAcquireStoreLock(_name__WEBPACK_IMPORTED_MODULE_3__.STORE_NAME, ['entities', 'records', kind, name, key], {
    exclusive: false
  });
  try {
    // Entity supports configs,
    // use the sync algorithm instead of the old fetch behavior.
    if (window.__experimentalEnableSync && entityConfig.syncConfig && !query) {
      if (false) {}
    } else {
      if (query !== undefined && query._fields) {
        // If requesting specific fields, items and query association to said
        // records are stored by ID reference. Thus, fields must always include
        // the ID.
        query = {
          ...query,
          _fields: [...new Set([...((0,_utils__WEBPACK_IMPORTED_MODULE_4__["default"])(query._fields) || []), entityConfig.key || _entities__WEBPACK_IMPORTED_MODULE_5__.DEFAULT_ENTITY_KEY])].join()
        };
      }

      // Disable reason: While true that an early return could leave `path`
      // unused, it's important that path is derived using the query prior to
      // additional query modifications in the condition below, since those
      // modifications are relevant to how the data is tracked in state, and not
      // for how the request is made to the REST API.

      // eslint-disable-next-line @wordpress/no-unused-vars-before-return
      const path = (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_0__.addQueryArgs)(entityConfig.baseURL + (key ? '/' + key : ''), {
        ...entityConfig.baseURLParams,
        ...query
      });
      if (query !== undefined && query._fields) {
        query = {
          ...query,
          include: [key]
        };

        // The resolution cache won't consider query as reusable based on the
        // fields, so it's tested here, prior to initiating the REST request,
        // and without causing `getEntityRecords` resolution to occur.
        const hasRecords = select.hasEntityRecords(kind, name, query);
        if (hasRecords) {
          return;
        }
      }
      const response = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default()({
        path,
        parse: false
      });
      const record = await response.json();
      const permissions = (0,_utils__WEBPACK_IMPORTED_MODULE_6__.getUserPermissionsFromAllowHeader)(response.headers?.get('allow'));
      const canUserResolutionsArgs = [];
      const receiveUserPermissionArgs = {};
      for (const action of _utils__WEBPACK_IMPORTED_MODULE_6__.ALLOWED_RESOURCE_ACTIONS) {
        receiveUserPermissionArgs[(0,_utils__WEBPACK_IMPORTED_MODULE_6__.getUserPermissionCacheKey)(action, {
          kind,
          name,
          id: key
        })] = permissions[action];
        canUserResolutionsArgs.push([action, {
          kind,
          name,
          id: key
        }]);
      }
      registry.batch(() => {
        dispatch.receiveEntityRecords(kind, name, record, query);
        dispatch.receiveUserPermissions(receiveUserPermissionArgs);
        dispatch.finishResolutions('canUser', canUserResolutionsArgs);
      });
    }
  } finally {
    dispatch.__unstableReleaseStoreLock(lock);
  }
};

/**
 * Requests an entity's record from the REST API.
 */
const getRawEntityRecord = (0,_utils__WEBPACK_IMPORTED_MODULE_7__["default"])('getEntityRecord');

/**
 * Requests an entity's record from the REST API.
 */
const getEditedEntityRecord = (0,_utils__WEBPACK_IMPORTED_MODULE_7__["default"])('getEntityRecord');

/**
 * Requests the entity's records from the REST API.
 *
 * @param {string}  kind  Entity kind.
 * @param {string}  name  Entity name.
 * @param {?Object} query Query Object. If requesting specific fields, fields
 *                        must always include the ID.
 */
const getEntityRecords = (kind, name, query = {}) => async ({
  dispatch,
  registry,
  resolveSelect
}) => {
  const configs = await resolveSelect.getEntitiesConfig(kind);
  const entityConfig = configs.find(config => config.name === name && config.kind === kind);
  if (!entityConfig) {
    return;
  }
  const lock = await dispatch.__unstableAcquireStoreLock(_name__WEBPACK_IMPORTED_MODULE_3__.STORE_NAME, ['entities', 'records', kind, name], {
    exclusive: false
  });
  const key = entityConfig.key || _entities__WEBPACK_IMPORTED_MODULE_5__.DEFAULT_ENTITY_KEY;
  function getResolutionsArgs(records) {
    return records.filter(record => record?.[key]).map(record => [kind, name, record[key]]);
  }
  try {
    if (query._fields) {
      // If requesting specific fields, items and query association to said
      // records are stored by ID reference. Thus, fields must always include
      // the ID.
      query = {
        ...query,
        _fields: [...new Set([...((0,_utils__WEBPACK_IMPORTED_MODULE_4__["default"])(query._fields) || []), entityConfig.key || _entities__WEBPACK_IMPORTED_MODULE_5__.DEFAULT_ENTITY_KEY])].join()
      };
    }
    const path = (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_0__.addQueryArgs)(entityConfig.baseURL, {
      ...entityConfig.baseURLParams,
      ...query
    });
    let records = [],
      meta;
    if (entityConfig.supportsPagination && query.per_page !== -1) {
      const response = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default()({
        path,
        parse: false
      });
      records = Object.values(await response.json());
      meta = {
        totalItems: parseInt(response.headers.get('X-WP-Total')),
        totalPages: parseInt(response.headers.get('X-WP-TotalPages'))
      };
    } else if (query.per_page === -1 && query[_utils__WEBPACK_IMPORTED_MODULE_8__.RECEIVE_INTERMEDIATE_RESULTS] === true) {
      let page = 1;
      let totalPages;
      do {
        const response = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default()({
          path: (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_0__.addQueryArgs)(path, {
            page,
            per_page: 100
          }),
          parse: false
        });
        const pageRecords = Object.values(await response.json());
        totalPages = parseInt(response.headers.get('X-WP-TotalPages'));
        records.push(...pageRecords);
        registry.batch(() => {
          dispatch.receiveEntityRecords(kind, name, records, query);
          dispatch.finishResolutions('getEntityRecord', getResolutionsArgs(pageRecords));
        });
        page++;
      } while (page <= totalPages);
      meta = {
        totalItems: records.length,
        totalPages: 1
      };
    } else {
      records = Object.values(await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default()({
        path
      }));
      meta = {
        totalItems: records.length,
        totalPages: 1
      };
    }

    // If we request fields but the result doesn't contain the fields,
    // explicitly set these fields as "undefined"
    // that way we consider the query "fulfilled".
    if (query._fields) {
      records = records.map(record => {
        query._fields.split(',').forEach(field => {
          if (!record.hasOwnProperty(field)) {
            record[field] = undefined;
          }
        });
        return record;
      });
    }
    registry.batch(() => {
      dispatch.receiveEntityRecords(kind, name, records, query, false, undefined, meta);

      // When requesting all fields, the list of results can be used to resolve
      // the `getEntityRecord` and `canUser` selectors in addition to `getEntityRecords`.
      // See https://github.com/WordPress/gutenberg/pull/26575
      // See https://github.com/WordPress/gutenberg/pull/64504
      if (!query?._fields && !query.context) {
        const targetHints = records.filter(record => record?.[key]).map(record => ({
          id: record[key],
          permissions: (0,_utils__WEBPACK_IMPORTED_MODULE_6__.getUserPermissionsFromAllowHeader)(record?._links?.self?.[0].targetHints.allow)
        }));
        const canUserResolutionsArgs = [];
        const receiveUserPermissionArgs = {};
        for (const targetHint of targetHints) {
          for (const action of _utils__WEBPACK_IMPORTED_MODULE_6__.ALLOWED_RESOURCE_ACTIONS) {
            canUserResolutionsArgs.push([action, {
              kind,
              name,
              id: targetHint.id
            }]);
            receiveUserPermissionArgs[(0,_utils__WEBPACK_IMPORTED_MODULE_6__.getUserPermissionCacheKey)(action, {
              kind,
              name,
              id: targetHint.id
            })] = targetHint.permissions[action];
          }
        }
        dispatch.receiveUserPermissions(receiveUserPermissionArgs);
        dispatch.finishResolutions('getEntityRecord', getResolutionsArgs(records));
        dispatch.finishResolutions('canUser', canUserResolutionsArgs);
      }
      dispatch.__unstableReleaseStoreLock(lock);
    });
  } catch (e) {
    dispatch.__unstableReleaseStoreLock(lock);
  }
};
getEntityRecords.shouldInvalidate = (action, kind, name) => {
  return (action.type === 'RECEIVE_ITEMS' || action.type === 'REMOVE_ITEMS') && action.invalidateCache && kind === action.kind && name === action.name;
};

/**
 * Requests the current theme.
 */
const getCurrentTheme = () => async ({
  dispatch,
  resolveSelect
}) => {
  const activeThemes = await resolveSelect.getEntityRecords('root', 'theme', {
    status: 'active'
  });
  dispatch.receiveCurrentTheme(activeThemes[0]);
};

/**
 * Requests theme supports data from the index.
 */
const getThemeSupports = (0,_utils__WEBPACK_IMPORTED_MODULE_7__["default"])('getCurrentTheme');

/**
 * Requests a preview from the Embed API.
 *
 * @param {string} url URL to get the preview for.
 */
const getEmbedPreview = url => async ({
  dispatch
}) => {
  try {
    const embedProxyResponse = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default()({
      path: (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_0__.addQueryArgs)('/oembed/1.0/proxy', {
        url
      })
    });
    dispatch.receiveEmbedPreview(url, embedProxyResponse);
  } catch (error) {
    // Embed API 404s if the URL cannot be embedded, so we have to catch the error from the apiRequest here.
    dispatch.receiveEmbedPreview(url, false);
  }
};

/**
 * Checks whether the current user can perform the given action on the given
 * REST resource.
 *
 * @param {string}        requestedAction Action to check. One of: 'create', 'read', 'update',
 *                                        'delete'.
 * @param {string|Object} resource        Entity resource to check. Accepts entity object `{ kind: 'root', name: 'media', id: 1 }`
 *                                        or REST base as a string - `media`.
 * @param {?string}       id              ID of the rest resource to check.
 */
const canUser = (requestedAction, resource, id) => async ({
  dispatch,
  registry,
  resolveSelect
}) => {
  if (!_utils__WEBPACK_IMPORTED_MODULE_6__.ALLOWED_RESOURCE_ACTIONS.includes(requestedAction)) {
    throw new Error(`'${requestedAction}' is not a valid action.`);
  }
  const {
    hasStartedResolution
  } = registry.select(_name__WEBPACK_IMPORTED_MODULE_3__.STORE_NAME);

  // Prevent resolving the same resource twice.
  for (const relatedAction of _utils__WEBPACK_IMPORTED_MODULE_6__.ALLOWED_RESOURCE_ACTIONS) {
    if (relatedAction === requestedAction) {
      continue;
    }
    const isAlreadyResolving = hasStartedResolution('canUser', [relatedAction, resource, id]);
    if (isAlreadyResolving) {
      return;
    }
  }
  let resourcePath = null;
  if (typeof resource === 'object') {
    if (!resource.kind || !resource.name) {
      throw new Error('The entity resource object is not valid.');
    }
    const configs = await resolveSelect.getEntitiesConfig(resource.kind);
    const entityConfig = configs.find(config => config.name === resource.name && config.kind === resource.kind);
    if (!entityConfig) {
      return;
    }
    resourcePath = entityConfig.baseURL + (resource.id ? '/' + resource.id : '');
  } else {
    resourcePath = `/wp/v2/${resource}` + (id ? '/' + id : '');
  }
  let response;
  try {
    response = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default()({
      path: resourcePath,
      method: 'OPTIONS',
      parse: false
    });
  } catch (error) {
    // Do nothing if our OPTIONS request comes back with an API error (4xx or
    // 5xx). The previously determined isAllowed value will remain in the store.
    return;
  }

  // Optional chaining operator is used here because the API requests don't
  // return the expected result in the React native version. Instead, API requests
  // only return the result, without including response properties like the headers.
  const permissions = (0,_utils__WEBPACK_IMPORTED_MODULE_6__.getUserPermissionsFromAllowHeader)(response.headers?.get('allow'));
  registry.batch(() => {
    for (const action of _utils__WEBPACK_IMPORTED_MODULE_6__.ALLOWED_RESOURCE_ACTIONS) {
      const key = (0,_utils__WEBPACK_IMPORTED_MODULE_6__.getUserPermissionCacheKey)(action, resource, id);
      dispatch.receiveUserPermission(key, permissions[action]);

      // Mark related action resolutions as finished.
      if (action !== requestedAction) {
        dispatch.finishResolution('canUser', [action, resource, id]);
      }
    }
  });
};

/**
 * Checks whether the current user can perform the given action on the given
 * REST resource.
 *
 * @param {string}        kind     Entity kind.
 * @param {string}        name     Entity name.
 * @param {number|string} recordId Record's id.
 */
const canUserEditEntityRecord = (kind, name, recordId) => async ({
  dispatch
}) => {
  await dispatch(canUser('update', {
    kind,
    name,
    id: recordId
  }));
};

/**
 * Request autosave data from the REST API.
 *
 * @param {string} postType The type of the parent post.
 * @param {number} postId   The id of the parent post.
 */
const getAutosaves = (postType, postId) => async ({
  dispatch,
  resolveSelect
}) => {
  const {
    rest_base: restBase,
    rest_namespace: restNamespace = 'wp/v2',
    supports
  } = await resolveSelect.getPostType(postType);
  if (!supports?.autosave) {
    return;
  }
  const autosaves = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default()({
    path: `/${restNamespace}/${restBase}/${postId}/autosaves?context=edit`
  });
  if (autosaves && autosaves.length) {
    dispatch.receiveAutosaves(postId, autosaves);
  }
};

/**
 * Request autosave data from the REST API.
 *
 * This resolver exists to ensure the underlying autosaves are fetched via
 * `getAutosaves` when a call to the `getAutosave` selector is made.
 *
 * @param {string} postType The type of the parent post.
 * @param {number} postId   The id of the parent post.
 */
const getAutosave = (postType, postId) => async ({
  resolveSelect
}) => {
  await resolveSelect.getAutosaves(postType, postId);
};
const __experimentalGetCurrentGlobalStylesId = () => async ({
  dispatch,
  resolveSelect
}) => {
  const activeThemes = await resolveSelect.getEntityRecords('root', 'theme', {
    status: 'active'
  });
  const globalStylesURL = activeThemes?.[0]?._links?.['wp:user-global-styles']?.[0]?.href;
  if (!globalStylesURL) {
    return;
  }

  // Regex matches the ID at the end of a URL or immediately before
  // the query string.
  const matches = globalStylesURL.match(/\/(\d+)(?:\?|$)/);
  const id = matches ? Number(matches[1]) : null;
  if (id) {
    dispatch.__experimentalReceiveCurrentGlobalStylesId(id);
  }
};
const __experimentalGetCurrentThemeBaseGlobalStyles = () => async ({
  resolveSelect,
  dispatch
}) => {
  const currentTheme = await resolveSelect.getCurrentTheme();
  // Please adjust the preloaded requests if this changes!
  const themeGlobalStyles = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default()({
    path: `/wp/v2/global-styles/themes/${currentTheme.stylesheet}?context=view`
  });
  dispatch.__experimentalReceiveThemeBaseGlobalStyles(currentTheme.stylesheet, themeGlobalStyles);
};
const __experimentalGetCurrentThemeGlobalStylesVariations = () => async ({
  resolveSelect,
  dispatch
}) => {
  const currentTheme = await resolveSelect.getCurrentTheme();
  // Please adjust the preloaded requests if this changes!
  const variations = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default()({
    path: `/wp/v2/global-styles/themes/${currentTheme.stylesheet}/variations?context=view`
  });
  dispatch.__experimentalReceiveThemeGlobalStyleVariations(currentTheme.stylesheet, variations);
};

/**
 * Fetches and returns the revisions of the current global styles theme.
 */
const getCurrentThemeGlobalStylesRevisions = () => async ({
  resolveSelect,
  dispatch
}) => {
  const globalStylesId = await resolveSelect.__experimentalGetCurrentGlobalStylesId();
  const record = globalStylesId ? await resolveSelect.getEntityRecord('root', 'globalStyles', globalStylesId) : undefined;
  const revisionsURL = record?._links?.['version-history']?.[0]?.href;
  if (revisionsURL) {
    const resetRevisions = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default()({
      url: revisionsURL
    });
    const revisions = resetRevisions?.map(revision => Object.fromEntries(Object.entries(revision).map(([key, value]) => [(0,change_case__WEBPACK_IMPORTED_MODULE_9__.camelCase)(key), value])));
    dispatch.receiveThemeGlobalStyleRevisions(globalStylesId, revisions);
  }
};
getCurrentThemeGlobalStylesRevisions.shouldInvalidate = action => {
  return action.type === 'SAVE_ENTITY_RECORD_FINISH' && action.kind === 'root' && !action.error && action.name === 'globalStyles';
};
const getBlockPatterns = () => async ({
  dispatch
}) => {
  const patterns = await (0,_fetch__WEBPACK_IMPORTED_MODULE_10__.fetchBlockPatterns)();
  dispatch({
    type: 'RECEIVE_BLOCK_PATTERNS',
    patterns
  });
};
const getBlockPatternCategories = () => async ({
  dispatch
}) => {
  const categories = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default()({
    path: '/wp/v2/block-patterns/categories'
  });
  dispatch({
    type: 'RECEIVE_BLOCK_PATTERN_CATEGORIES',
    categories
  });
};
const getUserPatternCategories = () => async ({
  dispatch,
  resolveSelect
}) => {
  const patternCategories = await resolveSelect.getEntityRecords('taxonomy', 'wp_pattern_category', {
    per_page: -1,
    _fields: 'id,name,description,slug',
    context: 'view'
  });
  const mappedPatternCategories = patternCategories?.map(userCategory => ({
    ...userCategory,
    label: (0,_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_1__.decodeEntities)(userCategory.name),
    name: userCategory.slug
  })) || [];
  dispatch({
    type: 'RECEIVE_USER_PATTERN_CATEGORIES',
    patternCategories: mappedPatternCategories
  });
};
const getNavigationFallbackId = () => async ({
  dispatch,
  select,
  registry
}) => {
  const fallback = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default()({
    path: (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_0__.addQueryArgs)('/wp-block-editor/v1/navigation-fallback', {
      _embed: true
    })
  });
  const record = fallback?._embedded?.self;
  registry.batch(() => {
    dispatch.receiveNavigationFallbackId(fallback?.id);
    if (!record) {
      return;
    }

    // If the fallback is already in the store, don't invalidate navigation queries.
    // Otherwise, invalidate the cache for the scenario where there were no Navigation
    // posts in the state and the fallback created one.
    const existingFallbackEntityRecord = select.getEntityRecord('postType', 'wp_navigation', fallback.id);
    const invalidateNavigationQueries = !existingFallbackEntityRecord;
    dispatch.receiveEntityRecords('postType', 'wp_navigation', record, undefined, invalidateNavigationQueries);

    // Resolve to avoid further network requests.
    dispatch.finishResolution('getEntityRecord', ['postType', 'wp_navigation', fallback.id]);
  });
};
const getDefaultTemplateId = query => async ({
  dispatch,
  registry,
  resolveSelect
}) => {
  const template = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default()({
    path: (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_0__.addQueryArgs)('/wp/v2/templates/lookup', query)
  });
  // Wait for the the entities config to be loaded, otherwise receiving
  // the template as an entity will not work.
  await resolveSelect.getEntitiesConfig('postType');
  // Endpoint may return an empty object if no template is found.
  if (template?.id) {
    registry.batch(() => {
      dispatch.receiveDefaultTemplateId(query, template.id);
      dispatch.receiveEntityRecords('postType', 'wp_template', [template]);
      // Avoid further network requests.
      dispatch.finishResolution('getEntityRecord', ['postType', 'wp_template', template.id]);
    });
  }
};

/**
 * Requests an entity's revisions from the REST API.
 *
 * @param {string}           kind      Entity kind.
 * @param {string}           name      Entity name.
 * @param {number|string}    recordKey The key of the entity record whose revisions you want to fetch.
 * @param {Object|undefined} query     Optional object of query parameters to
 *                                     include with request. If requesting specific
 *                                     fields, fields must always include the ID.
 */
const getRevisions = (kind, name, recordKey, query = {}) => async ({
  dispatch,
  registry,
  resolveSelect
}) => {
  const configs = await resolveSelect.getEntitiesConfig(kind);
  const entityConfig = configs.find(config => config.name === name && config.kind === kind);
  if (!entityConfig) {
    return;
  }
  if (query._fields) {
    // If requesting specific fields, items and query association to said
    // records are stored by ID reference. Thus, fields must always include
    // the ID.
    query = {
      ...query,
      _fields: [...new Set([...((0,_utils__WEBPACK_IMPORTED_MODULE_4__["default"])(query._fields) || []), entityConfig.revisionKey || _entities__WEBPACK_IMPORTED_MODULE_5__.DEFAULT_ENTITY_KEY])].join()
    };
  }
  const path = (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_0__.addQueryArgs)(entityConfig.getRevisionsUrl(recordKey), query);
  let records, response;
  const meta = {};
  const isPaginated = entityConfig.supportsPagination && query.per_page !== -1;
  try {
    response = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default()({
      path,
      parse: !isPaginated
    });
  } catch (error) {
    // Do nothing if our request comes back with an API error.
    return;
  }
  if (response) {
    if (isPaginated) {
      records = Object.values(await response.json());
      meta.totalItems = parseInt(response.headers.get('X-WP-Total'));
    } else {
      records = Object.values(response);
    }

    // If we request fields but the result doesn't contain the fields,
    // explicitly set these fields as "undefined"
    // that way we consider the query "fulfilled".
    if (query._fields) {
      records = records.map(record => {
        query._fields.split(',').forEach(field => {
          if (!record.hasOwnProperty(field)) {
            record[field] = undefined;
          }
        });
        return record;
      });
    }
    registry.batch(() => {
      dispatch.receiveRevisions(kind, name, recordKey, records, query, false, meta);

      // When requesting all fields, the list of results can be used to
      // resolve the `getRevision` selector in addition to `getRevisions`.
      if (!query?._fields && !query.context) {
        const key = entityConfig.key || _entities__WEBPACK_IMPORTED_MODULE_5__.DEFAULT_ENTITY_KEY;
        const resolutionsArgs = records.filter(record => record[key]).map(record => [kind, name, recordKey, record[key]]);
        dispatch.finishResolutions('getRevision', resolutionsArgs);
      }
    });
  }
};

// Invalidate cache when a new revision is created.
getRevisions.shouldInvalidate = (action, kind, name, recordKey) => action.type === 'SAVE_ENTITY_RECORD_FINISH' && name === action.name && kind === action.kind && !action.error && recordKey === action.recordId;

/**
 * Requests a specific Entity revision from the REST API.
 *
 * @param {string}           kind        Entity kind.
 * @param {string}           name        Entity name.
 * @param {number|string}    recordKey   The key of the entity record whose revisions you want to fetch.
 * @param {number|string}    revisionKey The revision's key.
 * @param {Object|undefined} query       Optional object of query parameters to
 *                                       include with request. If requesting specific
 *                                       fields, fields must always include the ID.
 */
const getRevision = (kind, name, recordKey, revisionKey, query) => async ({
  dispatch,
  resolveSelect
}) => {
  const configs = await resolveSelect.getEntitiesConfig(kind);
  const entityConfig = configs.find(config => config.name === name && config.kind === kind);
  if (!entityConfig) {
    return;
  }
  if (query !== undefined && query._fields) {
    // If requesting specific fields, items and query association to said
    // records are stored by ID reference. Thus, fields must always include
    // the ID.
    query = {
      ...query,
      _fields: [...new Set([...((0,_utils__WEBPACK_IMPORTED_MODULE_4__["default"])(query._fields) || []), entityConfig.revisionKey || _entities__WEBPACK_IMPORTED_MODULE_5__.DEFAULT_ENTITY_KEY])].join()
    };
  }
  const path = (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_0__.addQueryArgs)(entityConfig.getRevisionsUrl(recordKey, revisionKey), query);
  let record;
  try {
    record = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default()({
      path
    });
  } catch (error) {
    // Do nothing if our request comes back with an API error.
    return;
  }
  if (record) {
    dispatch.receiveRevisions(kind, name, recordKey, record, query);
  }
};

/**
 * Requests a specific post type options from the REST API.
 *
 * @param {string} postType Post type slug.
 */
const getRegisteredPostMeta = postType => async ({
  dispatch,
  resolveSelect
}) => {
  let options;
  try {
    const {
      rest_namespace: restNamespace = 'wp/v2',
      rest_base: restBase
    } = (await resolveSelect.getPostType(postType)) || {};
    options = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default()({
      path: `${restNamespace}/${restBase}/?context=edit`,
      method: 'OPTIONS'
    });
  } catch (error) {
    // Do nothing if the request comes back with an API error.
    return;
  }
  if (options) {
    dispatch.receiveRegisteredPostMeta(postType, options?.schema?.properties?.meta?.properties);
  }
};

/**
 * Requests entity configs for the given kind from the REST API.
 *
 * @param {string} kind Entity kind.
 */
const getEntitiesConfig = kind => async ({
  dispatch
}) => {
  const loader = _entities__WEBPACK_IMPORTED_MODULE_5__.additionalEntityConfigLoaders.find(l => l.kind === kind);
  if (!loader) {
    return;
  }
  try {
    const configs = await loader.loadEntities();
    if (!configs.length) {
      return;
    }
    dispatch.addEntities(configs);
  } catch {
    // Do nothing if the request comes back with an API error.
  }
};


/***/ }),

/***/ "./node_modules/@wordpress/core-data/build-module/selectors.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@wordpress/core-data/build-module/selectors.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __experimentalGetCurrentGlobalStylesId: () => (/* binding */ __experimentalGetCurrentGlobalStylesId),
/* harmony export */   __experimentalGetCurrentThemeBaseGlobalStyles: () => (/* binding */ __experimentalGetCurrentThemeBaseGlobalStyles),
/* harmony export */   __experimentalGetCurrentThemeGlobalStylesVariations: () => (/* binding */ __experimentalGetCurrentThemeGlobalStylesVariations),
/* harmony export */   __experimentalGetDirtyEntityRecords: () => (/* binding */ __experimentalGetDirtyEntityRecords),
/* harmony export */   __experimentalGetEntitiesBeingSaved: () => (/* binding */ __experimentalGetEntitiesBeingSaved),
/* harmony export */   __experimentalGetEntityRecordNoResolver: () => (/* binding */ __experimentalGetEntityRecordNoResolver),
/* harmony export */   canUser: () => (/* binding */ canUser),
/* harmony export */   canUserEditEntityRecord: () => (/* binding */ canUserEditEntityRecord),
/* harmony export */   getAuthors: () => (/* binding */ getAuthors),
/* harmony export */   getAutosave: () => (/* binding */ getAutosave),
/* harmony export */   getAutosaves: () => (/* binding */ getAutosaves),
/* harmony export */   getBlockPatternCategories: () => (/* binding */ getBlockPatternCategories),
/* harmony export */   getBlockPatterns: () => (/* binding */ getBlockPatterns),
/* harmony export */   getCurrentTheme: () => (/* binding */ getCurrentTheme),
/* harmony export */   getCurrentThemeGlobalStylesRevisions: () => (/* binding */ getCurrentThemeGlobalStylesRevisions),
/* harmony export */   getCurrentUser: () => (/* binding */ getCurrentUser),
/* harmony export */   getDefaultTemplateId: () => (/* binding */ getDefaultTemplateId),
/* harmony export */   getEditedEntityRecord: () => (/* binding */ getEditedEntityRecord),
/* harmony export */   getEmbedPreview: () => (/* binding */ getEmbedPreview),
/* harmony export */   getEntitiesByKind: () => (/* binding */ getEntitiesByKind),
/* harmony export */   getEntitiesConfig: () => (/* binding */ getEntitiesConfig),
/* harmony export */   getEntity: () => (/* binding */ getEntity),
/* harmony export */   getEntityConfig: () => (/* binding */ getEntityConfig),
/* harmony export */   getEntityRecord: () => (/* binding */ getEntityRecord),
/* harmony export */   getEntityRecordEdits: () => (/* binding */ getEntityRecordEdits),
/* harmony export */   getEntityRecordNonTransientEdits: () => (/* binding */ getEntityRecordNonTransientEdits),
/* harmony export */   getEntityRecords: () => (/* binding */ getEntityRecords),
/* harmony export */   getEntityRecordsTotalItems: () => (/* binding */ getEntityRecordsTotalItems),
/* harmony export */   getEntityRecordsTotalPages: () => (/* binding */ getEntityRecordsTotalPages),
/* harmony export */   getLastEntityDeleteError: () => (/* binding */ getLastEntityDeleteError),
/* harmony export */   getLastEntitySaveError: () => (/* binding */ getLastEntitySaveError),
/* harmony export */   getRawEntityRecord: () => (/* binding */ getRawEntityRecord),
/* harmony export */   getRedoEdit: () => (/* binding */ getRedoEdit),
/* harmony export */   getReferenceByDistinctEdits: () => (/* binding */ getReferenceByDistinctEdits),
/* harmony export */   getRevision: () => (/* binding */ getRevision),
/* harmony export */   getRevisions: () => (/* binding */ getRevisions),
/* harmony export */   getThemeSupports: () => (/* binding */ getThemeSupports),
/* harmony export */   getUndoEdit: () => (/* binding */ getUndoEdit),
/* harmony export */   getUserPatternCategories: () => (/* binding */ getUserPatternCategories),
/* harmony export */   getUserQueryResults: () => (/* binding */ getUserQueryResults),
/* harmony export */   hasEditsForEntityRecord: () => (/* binding */ hasEditsForEntityRecord),
/* harmony export */   hasEntityRecords: () => (/* binding */ hasEntityRecords),
/* harmony export */   hasFetchedAutosaves: () => (/* binding */ hasFetchedAutosaves),
/* harmony export */   hasRedo: () => (/* binding */ hasRedo),
/* harmony export */   hasUndo: () => (/* binding */ hasUndo),
/* harmony export */   isAutosavingEntityRecord: () => (/* binding */ isAutosavingEntityRecord),
/* harmony export */   isDeletingEntityRecord: () => (/* binding */ isDeletingEntityRecord),
/* harmony export */   isPreviewEmbedFallback: () => (/* binding */ isPreviewEmbedFallback),
/* harmony export */   isRequestingEmbedPreview: () => (/* binding */ isRequestingEmbedPreview),
/* harmony export */   isSavingEntityRecord: () => (/* binding */ isSavingEntityRecord)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/deprecated */ "@wordpress/deprecated");
/* harmony import */ var _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_deprecated__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _name__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./name */ "./node_modules/@wordpress/core-data/build-module/name.js");
/* harmony import */ var _queried_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./queried-data */ "./node_modules/@wordpress/core-data/build-module/queried-data/selectors.js");
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./entities */ "./node_modules/@wordpress/core-data/build-module/entities.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./node_modules/@wordpress/core-data/build-module/utils/get-normalized-comma-separable.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ "./node_modules/@wordpress/core-data/build-module/utils/set-nested-value.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils */ "./node_modules/@wordpress/core-data/build-module/utils/is-numeric-id.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils */ "./node_modules/@wordpress/core-data/build-module/utils/is-raw-attribute.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils */ "./node_modules/@wordpress/core-data/build-module/utils/user-permissions.js");
/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */





// This is an incomplete, high-level approximation of the State type.
// It makes the selectors slightly more safe, but is intended to evolve
// into a more detailed representation over time.
// See https://github.com/WordPress/gutenberg/pull/40025#discussion_r865410589 for more context.

/**
 * HTTP Query parameters sent with the API request to fetch the entity records.
 */

/**
 * Arguments for EntityRecord selectors.
 */

/**
 * Shared reference to an empty object for cases where it is important to avoid
 * returning a new object reference on every invocation, as in a connected or
 * other pure component which performs `shouldComponentUpdate` check on props.
 * This should be used as a last resort, since the normalized data should be
 * maintained by the reducer result in state.
 */
const EMPTY_OBJECT = {};

/**
 * Returns true if a request is in progress for embed preview data, or false
 * otherwise.
 *
 * @param state Data state.
 * @param url   URL the preview would be for.
 *
 * @return Whether a request is in progress for an embed preview.
 */
const isRequestingEmbedPreview = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.createRegistrySelector)(select => (state, url) => {
  return select(_name__WEBPACK_IMPORTED_MODULE_3__.STORE_NAME).isResolving('getEmbedPreview', [url]);
});

/**
 * Returns all available authors.
 *
 * @deprecated since 11.3. Callers should use `select( 'core' ).getUsers({ who: 'authors' })` instead.
 *
 * @param      state Data state.
 * @param      query Optional object of query parameters to
 *                   include with request. For valid query parameters see the [Users page](https://developer.wordpress.org/rest-api/reference/users/) in the REST API Handbook and see the arguments for [List Users](https://developer.wordpress.org/rest-api/reference/users/#list-users) and [Retrieve a User](https://developer.wordpress.org/rest-api/reference/users/#retrieve-a-user).
 * @return Authors list.
 */
function getAuthors(state, query) {
  _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_2___default()("select( 'core' ).getAuthors()", {
    since: '5.9',
    alternative: "select( 'core' ).getUsers({ who: 'authors' })"
  });
  const path = (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_1__.addQueryArgs)('/wp/v2/users/?who=authors&per_page=100', query);
  return getUserQueryResults(state, path);
}

/**
 * Returns the current user.
 *
 * @param state Data state.
 *
 * @return Current user object.
 */
function getCurrentUser(state) {
  return state.currentUser;
}

/**
 * Returns all the users returned by a query ID.
 *
 * @param state   Data state.
 * @param queryID Query ID.
 *
 * @return Users list.
 */
const getUserQueryResults = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.createSelector)((state, queryID) => {
  var _state$users$queries$;
  const queryResults = (_state$users$queries$ = state.users.queries[queryID]) !== null && _state$users$queries$ !== void 0 ? _state$users$queries$ : [];
  return queryResults.map(id => state.users.byId[id]);
}, (state, queryID) => [state.users.queries[queryID], state.users.byId]);

/**
 * Returns the loaded entities for the given kind.
 *
 * @deprecated since WordPress 6.0. Use getEntitiesConfig instead
 * @param      state Data state.
 * @param      kind  Entity kind.
 *
 * @return Array of entities with config matching kind.
 */
function getEntitiesByKind(state, kind) {
  _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_2___default()("wp.data.select( 'core' ).getEntitiesByKind()", {
    since: '6.0',
    alternative: "wp.data.select( 'core' ).getEntitiesConfig()"
  });
  return getEntitiesConfig(state, kind);
}

/**
 * Returns the loaded entities for the given kind.
 *
 * @param state Data state.
 * @param kind  Entity kind.
 *
 * @return Array of entities with config matching kind.
 */
const getEntitiesConfig = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.createSelector)((state, kind) => state.entities.config.filter(entity => entity.kind === kind), /* eslint-disable @typescript-eslint/no-unused-vars */
(state, kind) => state.entities.config
/* eslint-enable @typescript-eslint/no-unused-vars */);
/**
 * Returns the entity config given its kind and name.
 *
 * @deprecated since WordPress 6.0. Use getEntityConfig instead
 * @param      state Data state.
 * @param      kind  Entity kind.
 * @param      name  Entity name.
 *
 * @return Entity config
 */
function getEntity(state, kind, name) {
  _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_2___default()("wp.data.select( 'core' ).getEntity()", {
    since: '6.0',
    alternative: "wp.data.select( 'core' ).getEntityConfig()"
  });
  return getEntityConfig(state, kind, name);
}

/**
 * Returns the entity config given its kind and name.
 *
 * @param state Data state.
 * @param kind  Entity kind.
 * @param name  Entity name.
 *
 * @return Entity config
 */
function getEntityConfig(state, kind, name) {
  return state.entities.config?.find(config => config.kind === kind && config.name === name);
}

/**
 * GetEntityRecord is declared as a *callable interface* with
 * two signatures to work around the fact that TypeScript doesn't
 * allow currying generic functions:
 *
 * ```ts
 * 		type CurriedState = F extends ( state: any, ...args: infer P ) => infer R
 * 			? ( ...args: P ) => R
 * 			: F;
 * 		type Selector = <K extends string | number>(
 *         state: any,
 *         kind: K,
 *         key: K extends string ? 'string value' : false
 *    ) => K;
 * 		type BadlyInferredSignature = CurriedState< Selector >
 *    // BadlyInferredSignature evaluates to:
 *    // (kind: string number, key: false | "string value") => string number
 * ```
 *
 * The signature without the state parameter shipped as CurriedSignature
 * is used in the return value of `select( coreStore )`.
 *
 * See https://github.com/WordPress/gutenberg/pull/41578 for more details.
 */

/**
 * Returns the Entity's record object by key. Returns `null` if the value is not
 * yet received, undefined if the value entity is known to not exist, or the
 * entity object if it exists and is received.
 *
 * @param state State tree
 * @param kind  Entity kind.
 * @param name  Entity name.
 * @param key   Optional record's key. If requesting a global record (e.g. site settings), the key can be omitted. If requesting a specific item, the key must always be included.
 * @param query Optional query. If requesting specific
 *              fields, fields must always include the ID. For valid query parameters see the [Reference](https://developer.wordpress.org/rest-api/reference/) in the REST API Handbook and select the entity kind. Then see the arguments available "Retrieve a [Entity kind]".
 *
 * @return Record.
 */
const getEntityRecord = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.createSelector)((state, kind, name, key, query) => {
  var _query$context;
  const queriedState = state.entities.records?.[kind]?.[name]?.queriedData;
  if (!queriedState) {
    return undefined;
  }
  const context = (_query$context = query?.context) !== null && _query$context !== void 0 ? _query$context : 'default';
  if (query === undefined) {
    // If expecting a complete item, validate that completeness.
    if (!queriedState.itemIsComplete[context]?.[key]) {
      return undefined;
    }
    return queriedState.items[context][key];
  }
  const item = queriedState.items[context]?.[key];
  if (item && query._fields) {
    var _getNormalizedCommaSe;
    const filteredItem = {};
    const fields = (_getNormalizedCommaSe = (0,_utils__WEBPACK_IMPORTED_MODULE_4__["default"])(query._fields)) !== null && _getNormalizedCommaSe !== void 0 ? _getNormalizedCommaSe : [];
    for (let f = 0; f < fields.length; f++) {
      const field = fields[f].split('.');
      let value = item;
      field.forEach(fieldName => {
        value = value?.[fieldName];
      });
      (0,_utils__WEBPACK_IMPORTED_MODULE_5__["default"])(filteredItem, field, value);
    }
    return filteredItem;
  }
  return item;
}, (state, kind, name, recordId, query) => {
  var _query$context2;
  const context = (_query$context2 = query?.context) !== null && _query$context2 !== void 0 ? _query$context2 : 'default';
  return [state.entities.records?.[kind]?.[name]?.queriedData?.items[context]?.[recordId], state.entities.records?.[kind]?.[name]?.queriedData?.itemIsComplete[context]?.[recordId]];
});

/**
 * Normalizes `recordKey`s that look like numeric IDs to numbers.
 *
 * @param args EntityRecordArgs the selector arguments.
 * @return EntityRecordArgs the normalized arguments.
 */
getEntityRecord.__unstableNormalizeArgs = args => {
  const newArgs = [...args];
  const recordKey = newArgs?.[2];

  // If recordKey looks to be a numeric ID then coerce to number.
  newArgs[2] = (0,_utils__WEBPACK_IMPORTED_MODULE_6__["default"])(recordKey) ? Number(recordKey) : recordKey;
  return newArgs;
};

/**
 * Returns the Entity's record object by key. Doesn't trigger a resolver nor requests the entity records from the API if the entity record isn't available in the local state.
 *
 * @param state State tree
 * @param kind  Entity kind.
 * @param name  Entity name.
 * @param key   Record's key
 *
 * @return Record.
 */
function __experimentalGetEntityRecordNoResolver(state, kind, name, key) {
  return getEntityRecord(state, kind, name, key);
}

/**
 * Returns the entity's record object by key,
 * with its attributes mapped to their raw values.
 *
 * @param state State tree.
 * @param kind  Entity kind.
 * @param name  Entity name.
 * @param key   Record's key.
 *
 * @return Object with the entity's raw attributes.
 */
const getRawEntityRecord = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.createSelector)((state, kind, name, key) => {
  const record = getEntityRecord(state, kind, name, key);
  return record && Object.keys(record).reduce((accumulator, _key) => {
    if ((0,_utils__WEBPACK_IMPORTED_MODULE_7__["default"])(getEntityConfig(state, kind, name), _key)) {
      // Because edits are the "raw" attribute values,
      // we return those from record selectors to make rendering,
      // comparisons, and joins with edits easier.
      accumulator[_key] = record[_key]?.raw !== undefined ? record[_key]?.raw : record[_key];
    } else {
      accumulator[_key] = record[_key];
    }
    return accumulator;
  }, {});
}, (state, kind, name, recordId, query) => {
  var _query$context3;
  const context = (_query$context3 = query?.context) !== null && _query$context3 !== void 0 ? _query$context3 : 'default';
  return [state.entities.config, state.entities.records?.[kind]?.[name]?.queriedData?.items[context]?.[recordId], state.entities.records?.[kind]?.[name]?.queriedData?.itemIsComplete[context]?.[recordId]];
});

/**
 * Returns true if records have been received for the given set of parameters,
 * or false otherwise.
 *
 * @param state State tree
 * @param kind  Entity kind.
 * @param name  Entity name.
 * @param query Optional terms query. For valid query parameters see the [Reference](https://developer.wordpress.org/rest-api/reference/) in the REST API Handbook and select the entity kind. Then see the arguments available for "List [Entity kind]s".
 *
 * @return  Whether entity records have been received.
 */
function hasEntityRecords(state, kind, name, query) {
  return Array.isArray(getEntityRecords(state, kind, name, query));
}

/**
 * GetEntityRecord is declared as a *callable interface* with
 * two signatures to work around the fact that TypeScript doesn't
 * allow currying generic functions.
 *
 * @see GetEntityRecord
 * @see https://github.com/WordPress/gutenberg/pull/41578
 */

/**
 * Returns the Entity's records.
 *
 * @param state State tree
 * @param kind  Entity kind.
 * @param name  Entity name.
 * @param query Optional terms query. If requesting specific
 *              fields, fields must always include the ID. For valid query parameters see the [Reference](https://developer.wordpress.org/rest-api/reference/) in the REST API Handbook and select the entity kind. Then see the arguments available for "List [Entity kind]s".
 *
 * @return Records.
 */
const getEntityRecords = (state, kind, name, query) => {
  // Queried data state is prepopulated for all known entities. If this is not
  // assigned for the given parameters, then it is known to not exist.
  const queriedState = state.entities.records?.[kind]?.[name]?.queriedData;
  if (!queriedState) {
    return null;
  }
  return (0,_queried_data__WEBPACK_IMPORTED_MODULE_8__.getQueriedItems)(queriedState, query);
};

/**
 * Returns the Entity's total available records for a given query (ignoring pagination).
 *
 * @param state State tree
 * @param kind  Entity kind.
 * @param name  Entity name.
 * @param query Optional terms query. If requesting specific
 *              fields, fields must always include the ID. For valid query parameters see the [Reference](https://developer.wordpress.org/rest-api/reference/) in the REST API Handbook and select the entity kind. Then see the arguments available for "List [Entity kind]s".
 *
 * @return number | null.
 */
const getEntityRecordsTotalItems = (state, kind, name, query) => {
  // Queried data state is prepopulated for all known entities. If this is not
  // assigned for the given parameters, then it is known to not exist.
  const queriedState = state.entities.records?.[kind]?.[name]?.queriedData;
  if (!queriedState) {
    return null;
  }
  return (0,_queried_data__WEBPACK_IMPORTED_MODULE_8__.getQueriedTotalItems)(queriedState, query);
};

/**
 * Returns the number of available pages for the given query.
 *
 * @param state State tree
 * @param kind  Entity kind.
 * @param name  Entity name.
 * @param query Optional terms query. If requesting specific
 *              fields, fields must always include the ID. For valid query parameters see the [Reference](https://developer.wordpress.org/rest-api/reference/) in the REST API Handbook and select the entity kind. Then see the arguments available for "List [Entity kind]s".
 *
 * @return number | null.
 */
const getEntityRecordsTotalPages = (state, kind, name, query) => {
  // Queried data state is prepopulated for all known entities. If this is not
  // assigned for the given parameters, then it is known to not exist.
  const queriedState = state.entities.records?.[kind]?.[name]?.queriedData;
  if (!queriedState) {
    return null;
  }
  if (query.per_page === -1) {
    return 1;
  }
  const totalItems = (0,_queried_data__WEBPACK_IMPORTED_MODULE_8__.getQueriedTotalItems)(queriedState, query);
  if (!totalItems) {
    return totalItems;
  }
  // If `per_page` is not set and the query relies on the defaults of the
  // REST endpoint, get the info from query's meta.
  if (!query.per_page) {
    return (0,_queried_data__WEBPACK_IMPORTED_MODULE_8__.getQueriedTotalPages)(queriedState, query);
  }
  return Math.ceil(totalItems / query.per_page);
};
/**
 * Returns the list of dirty entity records.
 *
 * @param state State tree.
 *
 * @return The list of updated records
 */
const __experimentalGetDirtyEntityRecords = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.createSelector)(state => {
  const {
    entities: {
      records
    }
  } = state;
  const dirtyRecords = [];
  Object.keys(records).forEach(kind => {
    Object.keys(records[kind]).forEach(name => {
      const primaryKeys = Object.keys(records[kind][name].edits).filter(primaryKey =>
      // The entity record must exist (not be deleted),
      // and it must have edits.
      getEntityRecord(state, kind, name, primaryKey) && hasEditsForEntityRecord(state, kind, name, primaryKey));
      if (primaryKeys.length) {
        const entityConfig = getEntityConfig(state, kind, name);
        primaryKeys.forEach(primaryKey => {
          const entityRecord = getEditedEntityRecord(state, kind, name, primaryKey);
          dirtyRecords.push({
            // We avoid using primaryKey because it's transformed into a string
            // when it's used as an object key.
            key: entityRecord ? entityRecord[entityConfig.key || _entities__WEBPACK_IMPORTED_MODULE_9__.DEFAULT_ENTITY_KEY] : undefined,
            title: entityConfig?.getTitle?.(entityRecord) || '',
            name,
            kind
          });
        });
      }
    });
  });
  return dirtyRecords;
}, state => [state.entities.records]);

/**
 * Returns the list of entities currently being saved.
 *
 * @param state State tree.
 *
 * @return The list of records being saved.
 */
const __experimentalGetEntitiesBeingSaved = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.createSelector)(state => {
  const {
    entities: {
      records
    }
  } = state;
  const recordsBeingSaved = [];
  Object.keys(records).forEach(kind => {
    Object.keys(records[kind]).forEach(name => {
      const primaryKeys = Object.keys(records[kind][name].saving).filter(primaryKey => isSavingEntityRecord(state, kind, name, primaryKey));
      if (primaryKeys.length) {
        const entityConfig = getEntityConfig(state, kind, name);
        primaryKeys.forEach(primaryKey => {
          const entityRecord = getEditedEntityRecord(state, kind, name, primaryKey);
          recordsBeingSaved.push({
            // We avoid using primaryKey because it's transformed into a string
            // when it's used as an object key.
            key: entityRecord ? entityRecord[entityConfig.key || _entities__WEBPACK_IMPORTED_MODULE_9__.DEFAULT_ENTITY_KEY] : undefined,
            title: entityConfig?.getTitle?.(entityRecord) || '',
            name,
            kind
          });
        });
      }
    });
  });
  return recordsBeingSaved;
}, state => [state.entities.records]);

/**
 * Returns the specified entity record's edits.
 *
 * @param state    State tree.
 * @param kind     Entity kind.
 * @param name     Entity name.
 * @param recordId Record ID.
 *
 * @return The entity record's edits.
 */
function getEntityRecordEdits(state, kind, name, recordId) {
  return state.entities.records?.[kind]?.[name]?.edits?.[recordId];
}

/**
 * Returns the specified entity record's non transient edits.
 *
 * Transient edits don't create an undo level, and
 * are not considered for change detection.
 * They are defined in the entity's config.
 *
 * @param state    State tree.
 * @param kind     Entity kind.
 * @param name     Entity name.
 * @param recordId Record ID.
 *
 * @return The entity record's non transient edits.
 */
const getEntityRecordNonTransientEdits = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.createSelector)((state, kind, name, recordId) => {
  const {
    transientEdits
  } = getEntityConfig(state, kind, name) || {};
  const edits = getEntityRecordEdits(state, kind, name, recordId) || {};
  if (!transientEdits) {
    return edits;
  }
  return Object.keys(edits).reduce((acc, key) => {
    if (!transientEdits[key]) {
      acc[key] = edits[key];
    }
    return acc;
  }, {});
}, (state, kind, name, recordId) => [state.entities.config, state.entities.records?.[kind]?.[name]?.edits?.[recordId]]);

/**
 * Returns true if the specified entity record has edits,
 * and false otherwise.
 *
 * @param state    State tree.
 * @param kind     Entity kind.
 * @param name     Entity name.
 * @param recordId Record ID.
 *
 * @return Whether the entity record has edits or not.
 */
function hasEditsForEntityRecord(state, kind, name, recordId) {
  return isSavingEntityRecord(state, kind, name, recordId) || Object.keys(getEntityRecordNonTransientEdits(state, kind, name, recordId)).length > 0;
}

/**
 * Returns the specified entity record, merged with its edits.
 *
 * @param state    State tree.
 * @param kind     Entity kind.
 * @param name     Entity name.
 * @param recordId Record ID.
 *
 * @return The entity record, merged with its edits.
 */
const getEditedEntityRecord = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.createSelector)((state, kind, name, recordId) => {
  const raw = getRawEntityRecord(state, kind, name, recordId);
  const edited = getEntityRecordEdits(state, kind, name, recordId);
  // Never return a non-falsy empty object. Unfortunately we can't return
  // undefined or null because we were previously returning an empty
  // object, so trying to read properties from the result would throw.
  // Using false here is a workaround to avoid breaking changes.
  if (!raw && !edited) {
    return false;
  }
  return {
    ...raw,
    ...edited
  };
}, (state, kind, name, recordId, query) => {
  var _query$context4;
  const context = (_query$context4 = query?.context) !== null && _query$context4 !== void 0 ? _query$context4 : 'default';
  return [state.entities.config, state.entities.records?.[kind]?.[name]?.queriedData.items[context]?.[recordId], state.entities.records?.[kind]?.[name]?.queriedData.itemIsComplete[context]?.[recordId], state.entities.records?.[kind]?.[name]?.edits?.[recordId]];
});

/**
 * Returns true if the specified entity record is autosaving, and false otherwise.
 *
 * @param state    State tree.
 * @param kind     Entity kind.
 * @param name     Entity name.
 * @param recordId Record ID.
 *
 * @return Whether the entity record is autosaving or not.
 */
function isAutosavingEntityRecord(state, kind, name, recordId) {
  var _state$entities$recor;
  const {
    pending,
    isAutosave
  } = (_state$entities$recor = state.entities.records?.[kind]?.[name]?.saving?.[recordId]) !== null && _state$entities$recor !== void 0 ? _state$entities$recor : {};
  return Boolean(pending && isAutosave);
}

/**
 * Returns true if the specified entity record is saving, and false otherwise.
 *
 * @param state    State tree.
 * @param kind     Entity kind.
 * @param name     Entity name.
 * @param recordId Record ID.
 *
 * @return Whether the entity record is saving or not.
 */
function isSavingEntityRecord(state, kind, name, recordId) {
  var _state$entities$recor2;
  return (_state$entities$recor2 = state.entities.records?.[kind]?.[name]?.saving?.[recordId]?.pending) !== null && _state$entities$recor2 !== void 0 ? _state$entities$recor2 : false;
}

/**
 * Returns true if the specified entity record is deleting, and false otherwise.
 *
 * @param state    State tree.
 * @param kind     Entity kind.
 * @param name     Entity name.
 * @param recordId Record ID.
 *
 * @return Whether the entity record is deleting or not.
 */
function isDeletingEntityRecord(state, kind, name, recordId) {
  var _state$entities$recor3;
  return (_state$entities$recor3 = state.entities.records?.[kind]?.[name]?.deleting?.[recordId]?.pending) !== null && _state$entities$recor3 !== void 0 ? _state$entities$recor3 : false;
}

/**
 * Returns the specified entity record's last save error.
 *
 * @param state    State tree.
 * @param kind     Entity kind.
 * @param name     Entity name.
 * @param recordId Record ID.
 *
 * @return The entity record's save error.
 */
function getLastEntitySaveError(state, kind, name, recordId) {
  return state.entities.records?.[kind]?.[name]?.saving?.[recordId]?.error;
}

/**
 * Returns the specified entity record's last delete error.
 *
 * @param state    State tree.
 * @param kind     Entity kind.
 * @param name     Entity name.
 * @param recordId Record ID.
 *
 * @return The entity record's save error.
 */
function getLastEntityDeleteError(state, kind, name, recordId) {
  return state.entities.records?.[kind]?.[name]?.deleting?.[recordId]?.error;
}

/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * Returns the previous edit from the current undo offset
 * for the entity records edits history, if any.
 *
 * @deprecated since 6.3
 *
 * @param      state State tree.
 *
 * @return The edit.
 */
function getUndoEdit(state) {
  _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_2___default()("select( 'core' ).getUndoEdit()", {
    since: '6.3'
  });
  return undefined;
}
/* eslint-enable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * Returns the next edit from the current undo offset
 * for the entity records edits history, if any.
 *
 * @deprecated since 6.3
 *
 * @param      state State tree.
 *
 * @return The edit.
 */
function getRedoEdit(state) {
  _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_2___default()("select( 'core' ).getRedoEdit()", {
    since: '6.3'
  });
  return undefined;
}
/* eslint-enable @typescript-eslint/no-unused-vars */

/**
 * Returns true if there is a previous edit from the current undo offset
 * for the entity records edits history, and false otherwise.
 *
 * @param state State tree.
 *
 * @return Whether there is a previous edit or not.
 */
function hasUndo(state) {
  return state.undoManager.hasUndo();
}

/**
 * Returns true if there is a next edit from the current undo offset
 * for the entity records edits history, and false otherwise.
 *
 * @param state State tree.
 *
 * @return Whether there is a next edit or not.
 */
function hasRedo(state) {
  return state.undoManager.hasRedo();
}

/**
 * Return the current theme.
 *
 * @param state Data state.
 *
 * @return The current theme.
 */
function getCurrentTheme(state) {
  if (!state.currentTheme) {
    return null;
  }
  return getEntityRecord(state, 'root', 'theme', state.currentTheme);
}

/**
 * Return the ID of the current global styles object.
 *
 * @param state Data state.
 *
 * @return The current global styles ID.
 */
function __experimentalGetCurrentGlobalStylesId(state) {
  return state.currentGlobalStylesId;
}

/**
 * Return theme supports data in the index.
 *
 * @param state Data state.
 *
 * @return Index data.
 */
function getThemeSupports(state) {
  var _getCurrentTheme$them;
  return (_getCurrentTheme$them = getCurrentTheme(state)?.theme_supports) !== null && _getCurrentTheme$them !== void 0 ? _getCurrentTheme$them : EMPTY_OBJECT;
}

/**
 * Returns the embed preview for the given URL.
 *
 * @param state Data state.
 * @param url   Embedded URL.
 *
 * @return Undefined if the preview has not been fetched, otherwise, the preview fetched from the embed preview API.
 */
function getEmbedPreview(state, url) {
  return state.embedPreviews[url];
}

/**
 * Determines if the returned preview is an oEmbed link fallback.
 *
 * WordPress can be configured to return a simple link to a URL if it is not embeddable.
 * We need to be able to determine if a URL is embeddable or not, based on what we
 * get back from the oEmbed preview API.
 *
 * @param state Data state.
 * @param url   Embedded URL.
 *
 * @return Is the preview for the URL an oEmbed link fallback.
 */
function isPreviewEmbedFallback(state, url) {
  const preview = state.embedPreviews[url];
  const oEmbedLinkCheck = '<a href="' + url + '">' + url + '</a>';
  if (!preview) {
    return false;
  }
  return preview.html === oEmbedLinkCheck;
}

/**
 * Returns whether the current user can perform the given action on the given
 * REST resource.
 *
 * Calling this may trigger an OPTIONS request to the REST API via the
 * `canUser()` resolver.
 *
 * https://developer.wordpress.org/rest-api/reference/
 *
 * @param state    Data state.
 * @param action   Action to check. One of: 'create', 'read', 'update', 'delete'.
 * @param resource Entity resource to check. Accepts entity object `{ kind: 'root', name: 'media', id: 1 }`
 *                 or REST base as a string - `media`.
 * @param id       Optional ID of the rest resource to check.
 *
 * @return Whether or not the user can perform the action,
 *                             or `undefined` if the OPTIONS request is still being made.
 */
function canUser(state, action, resource, id) {
  const isEntity = typeof resource === 'object';
  if (isEntity && (!resource.kind || !resource.name)) {
    return false;
  }
  const key = (0,_utils__WEBPACK_IMPORTED_MODULE_10__.getUserPermissionCacheKey)(action, resource, id);
  return state.userPermissions[key];
}

/**
 * Returns whether the current user can edit the given entity.
 *
 * Calling this may trigger an OPTIONS request to the REST API via the
 * `canUser()` resolver.
 *
 * https://developer.wordpress.org/rest-api/reference/
 *
 * @param state    Data state.
 * @param kind     Entity kind.
 * @param name     Entity name.
 * @param recordId Record's id.
 * @return Whether or not the user can edit,
 * or `undefined` if the OPTIONS request is still being made.
 */
function canUserEditEntityRecord(state, kind, name, recordId) {
  _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_2___default()(`wp.data.select( 'core' ).canUserEditEntityRecord()`, {
    since: '6.7',
    alternative: `wp.data.select( 'core' ).canUser( 'update', { kind, name, id } )`
  });
  return canUser(state, 'update', {
    kind,
    name,
    id: recordId
  });
}

/**
 * Returns the latest autosaves for the post.
 *
 * May return multiple autosaves since the backend stores one autosave per
 * author for each post.
 *
 * @param state    State tree.
 * @param postType The type of the parent post.
 * @param postId   The id of the parent post.
 *
 * @return An array of autosaves for the post, or undefined if there is none.
 */
function getAutosaves(state, postType, postId) {
  return state.autosaves[postId];
}

/**
 * Returns the autosave for the post and author.
 *
 * @param state    State tree.
 * @param postType The type of the parent post.
 * @param postId   The id of the parent post.
 * @param authorId The id of the author.
 *
 * @return The autosave for the post and author.
 */
function getAutosave(state, postType, postId, authorId) {
  if (authorId === undefined) {
    return;
  }
  const autosaves = state.autosaves[postId];
  return autosaves?.find(autosave => autosave.author === authorId);
}

/**
 * Returns true if the REST request for autosaves has completed.
 *
 * @param state    State tree.
 * @param postType The type of the parent post.
 * @param postId   The id of the parent post.
 *
 * @return True if the REST request was completed. False otherwise.
 */
const hasFetchedAutosaves = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.createRegistrySelector)(select => (state, postType, postId) => {
  return select(_name__WEBPACK_IMPORTED_MODULE_3__.STORE_NAME).hasFinishedResolution('getAutosaves', [postType, postId]);
});

/**
 * Returns a new reference when edited values have changed. This is useful in
 * inferring where an edit has been made between states by comparison of the
 * return values using strict equality.
 *
 * @example
 *
 * ```
 * const hasEditOccurred = (
 *    getReferenceByDistinctEdits( beforeState ) !==
 *    getReferenceByDistinctEdits( afterState )
 * );
 * ```
 *
 * @param state Editor state.
 *
 * @return A value whose reference will change only when an edit occurs.
 */
function getReferenceByDistinctEdits(state) {
  return state.editsReference;
}

/**
 * Retrieve the current theme's base global styles
 *
 * @param state Editor state.
 *
 * @return The Global Styles object.
 */
function __experimentalGetCurrentThemeBaseGlobalStyles(state) {
  const currentTheme = getCurrentTheme(state);
  if (!currentTheme) {
    return null;
  }
  return state.themeBaseGlobalStyles[currentTheme.stylesheet];
}

/**
 * Return the ID of the current global styles object.
 *
 * @param state Data state.
 *
 * @return The current global styles ID.
 */
function __experimentalGetCurrentThemeGlobalStylesVariations(state) {
  const currentTheme = getCurrentTheme(state);
  if (!currentTheme) {
    return null;
  }
  return state.themeGlobalStyleVariations[currentTheme.stylesheet];
}

/**
 * Retrieve the list of registered block patterns.
 *
 * @param state Data state.
 *
 * @return Block pattern list.
 */
function getBlockPatterns(state) {
  return state.blockPatterns;
}

/**
 * Retrieve the list of registered block pattern categories.
 *
 * @param state Data state.
 *
 * @return Block pattern category list.
 */
function getBlockPatternCategories(state) {
  return state.blockPatternCategories;
}

/**
 * Retrieve the registered user pattern categories.
 *
 * @param state Data state.
 *
 * @return User patterns category array.
 */

function getUserPatternCategories(state) {
  return state.userPatternCategories;
}

/**
 * Returns the revisions of the current global styles theme.
 *
 * @deprecated since WordPress 6.5.0. Callers should use `select( 'core' ).getRevisions( 'root', 'globalStyles', ${ recordKey } )` instead, where `recordKey` is the id of the global styles parent post.
 *
 * @param      state Data state.
 *
 * @return The current global styles.
 */
function getCurrentThemeGlobalStylesRevisions(state) {
  _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_2___default()("select( 'core' ).getCurrentThemeGlobalStylesRevisions()", {
    since: '6.5.0',
    alternative: "select( 'core' ).getRevisions( 'root', 'globalStyles', ${ recordKey } )"
  });
  const currentGlobalStylesId = __experimentalGetCurrentGlobalStylesId(state);
  if (!currentGlobalStylesId) {
    return null;
  }
  return state.themeGlobalStyleRevisions[currentGlobalStylesId];
}

/**
 * Returns the default template use to render a given query.
 *
 * @param state Data state.
 * @param query Query.
 *
 * @return The default template id for the given query.
 */
function getDefaultTemplateId(state, query) {
  return state.defaultTemplates[JSON.stringify(query)];
}

/**
 * Returns an entity's revisions.
 *
 * @param state     State tree
 * @param kind      Entity kind.
 * @param name      Entity name.
 * @param recordKey The key of the entity record whose revisions you want to fetch.
 * @param query     Optional query. If requesting specific
 *                  fields, fields must always include the ID. For valid query parameters see revisions schema in [the REST API Handbook](https://developer.wordpress.org/rest-api/reference/). Then see the arguments available "Retrieve a [Entity kind]".
 *
 * @return Record.
 */
const getRevisions = (state, kind, name, recordKey, query) => {
  const queriedStateRevisions = state.entities.records?.[kind]?.[name]?.revisions?.[recordKey];
  if (!queriedStateRevisions) {
    return null;
  }
  return (0,_queried_data__WEBPACK_IMPORTED_MODULE_8__.getQueriedItems)(queriedStateRevisions, query);
};

/**
 * Returns a single, specific revision of a parent entity.
 *
 * @param state       State tree
 * @param kind        Entity kind.
 * @param name        Entity name.
 * @param recordKey   The key of the entity record whose revisions you want to fetch.
 * @param revisionKey The revision's key.
 * @param query       Optional query. If requesting specific
 *                    fields, fields must always include the ID. For valid query parameters see revisions schema in [the REST API Handbook](https://developer.wordpress.org/rest-api/reference/). Then see the arguments available "Retrieve a [entity kind]".
 *
 * @return Record.
 */
const getRevision = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.createSelector)((state, kind, name, recordKey, revisionKey, query) => {
  var _query$context5;
  const queriedState = state.entities.records?.[kind]?.[name]?.revisions?.[recordKey];
  if (!queriedState) {
    return undefined;
  }
  const context = (_query$context5 = query?.context) !== null && _query$context5 !== void 0 ? _query$context5 : 'default';
  if (query === undefined) {
    // If expecting a complete item, validate that completeness.
    if (!queriedState.itemIsComplete[context]?.[revisionKey]) {
      return undefined;
    }
    return queriedState.items[context][revisionKey];
  }
  const item = queriedState.items[context]?.[revisionKey];
  if (item && query._fields) {
    var _getNormalizedCommaSe2;
    const filteredItem = {};
    const fields = (_getNormalizedCommaSe2 = (0,_utils__WEBPACK_IMPORTED_MODULE_4__["default"])(query._fields)) !== null && _getNormalizedCommaSe2 !== void 0 ? _getNormalizedCommaSe2 : [];
    for (let f = 0; f < fields.length; f++) {
      const field = fields[f].split('.');
      let value = item;
      field.forEach(fieldName => {
        value = value?.[fieldName];
      });
      (0,_utils__WEBPACK_IMPORTED_MODULE_5__["default"])(filteredItem, field, value);
    }
    return filteredItem;
  }
  return item;
}, (state, kind, name, recordKey, revisionKey, query) => {
  var _query$context6;
  const context = (_query$context6 = query?.context) !== null && _query$context6 !== void 0 ? _query$context6 : 'default';
  return [state.entities.records?.[kind]?.[name]?.revisions?.[recordKey]?.items?.[context]?.[revisionKey], state.entities.records?.[kind]?.[name]?.revisions?.[recordKey]?.itemIsComplete?.[context]?.[revisionKey]];
});


/***/ }),

/***/ "./node_modules/@wordpress/core-data/build-module/utils/conservative-map-item.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@wordpress/core-data/build-module/utils/conservative-map-item.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ conservativeMapItem)
/* harmony export */ });
/* harmony import */ var fast_deep_equal_es6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fast-deep-equal/es6 */ "./node_modules/fast-deep-equal/es6/index.js");
/* harmony import */ var fast_deep_equal_es6__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fast_deep_equal_es6__WEBPACK_IMPORTED_MODULE_0__);
/**
 * External dependencies
 */


/**
 * Given the current and next item entity record, returns the minimally "modified"
 * result of the next item, preferring value references from the original item
 * if equal. If all values match, the original item is returned.
 *
 * @param {Object} item     Original item.
 * @param {Object} nextItem Next item.
 *
 * @return {Object} Minimally modified merged item.
 */
function conservativeMapItem(item, nextItem) {
  // Return next item in its entirety if there is no original item.
  if (!item) {
    return nextItem;
  }
  let hasChanges = false;
  const result = {};
  for (const key in nextItem) {
    if (fast_deep_equal_es6__WEBPACK_IMPORTED_MODULE_0___default()(item[key], nextItem[key])) {
      result[key] = item[key];
    } else {
      hasChanges = true;
      result[key] = nextItem[key];
    }
  }
  if (!hasChanges) {
    return item;
  }

  // Only at this point, backfill properties from the original item which
  // weren't explicitly set into the result above. This is an optimization
  // to allow `hasChanges` to return early.
  for (const key in item) {
    if (!result.hasOwnProperty(key)) {
      result[key] = item[key];
    }
  }
  return result;
}


/***/ }),

/***/ "./node_modules/@wordpress/core-data/build-module/utils/forward-resolver.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@wordpress/core-data/build-module/utils/forward-resolver.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Higher-order function which forward the resolution to another resolver with the same arguments.
 *
 * @param {string} resolverName forwarded resolver.
 *
 * @return {Function} Enhanced resolver.
 */
const forwardResolver = resolverName => (...args) => async ({
  resolveSelect
}) => {
  await resolveSelect[resolverName](...args);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (forwardResolver);


/***/ }),

/***/ "./node_modules/@wordpress/core-data/build-module/utils/get-nested-value.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@wordpress/core-data/build-module/utils/get-nested-value.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getNestedValue)
/* harmony export */ });
/**
 * Helper util to return a value from a certain path of the object.
 * Path is specified as either:
 * - a string of properties, separated by dots, for example: "x.y".
 * - an array of properties, for example `[ 'x', 'y' ]`.
 * You can also specify a default value in case the result is nullish.
 *
 * @param {Object}       object       Input object.
 * @param {string|Array} path         Path to the object property.
 * @param {*}            defaultValue Default value if the value at the specified path is undefined.
 * @return {*} Value of the object property at the specified path.
 */
function getNestedValue(object, path, defaultValue) {
  if (!object || typeof object !== 'object' || typeof path !== 'string' && !Array.isArray(path)) {
    return object;
  }
  const normalizedPath = Array.isArray(path) ? path : path.split('.');
  let value = object;
  normalizedPath.forEach(fieldName => {
    value = value?.[fieldName];
  });
  return value !== undefined ? value : defaultValue;
}


/***/ }),

/***/ "./node_modules/@wordpress/core-data/build-module/utils/get-normalized-comma-separable.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@wordpress/core-data/build-module/utils/get-normalized-comma-separable.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Given a value which can be specified as one or the other of a comma-separated
 * string or an array, returns a value normalized to an array of strings, or
 * null if the value cannot be interpreted as either.
 *
 * @param {string|string[]|*} value
 *
 * @return {?(string[])} Normalized field value.
 */
function getNormalizedCommaSeparable(value) {
  if (typeof value === 'string') {
    return value.split(',');
  } else if (Array.isArray(value)) {
    return value;
  }
  return null;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getNormalizedCommaSeparable);


/***/ }),

/***/ "./node_modules/@wordpress/core-data/build-module/utils/if-matching-action.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@wordpress/core-data/build-module/utils/if-matching-action.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** @typedef {import('../types').AnyFunction} AnyFunction */

/**
 * A higher-order reducer creator which invokes the original reducer only if
 * the dispatching action matches the given predicate, **OR** if state is
 * initializing (undefined).
 *
 * @param {AnyFunction} isMatch Function predicate for allowing reducer call.
 *
 * @return {AnyFunction} Higher-order reducer.
 */
const ifMatchingAction = isMatch => reducer => (state, action) => {
  if (state === undefined || isMatch(action)) {
    return reducer(state, action);
  }
  return state;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ifMatchingAction);


/***/ }),

/***/ "./node_modules/@wordpress/core-data/build-module/utils/is-numeric-id.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@wordpress/core-data/build-module/utils/is-numeric-id.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isNumericID)
/* harmony export */ });
/**
 * Checks argument to determine if it's a numeric ID.
 * For example, '123' is a numeric ID, but '123abc' is not.
 *
 * @param {any} id the argument to determine if it's a numeric ID.
 * @return {boolean} true if the string is a numeric ID, false otherwise.
 */
function isNumericID(id) {
  return /^\s*\d+\s*$/.test(id);
}


/***/ }),

/***/ "./node_modules/@wordpress/core-data/build-module/utils/is-raw-attribute.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@wordpress/core-data/build-module/utils/is-raw-attribute.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isRawAttribute)
/* harmony export */ });
/**
 * Checks whether the attribute is a "raw" attribute or not.
 *
 * @param {Object} entity    Entity record.
 * @param {string} attribute Attribute name.
 *
 * @return {boolean} Is the attribute raw
 */
function isRawAttribute(entity, attribute) {
  return (entity.rawAttributes || []).includes(attribute);
}


/***/ }),

/***/ "./node_modules/@wordpress/core-data/build-module/utils/on-sub-key.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@wordpress/core-data/build-module/utils/on-sub-key.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   onSubKey: () => (/* binding */ onSubKey)
/* harmony export */ });
/** @typedef {import('../types').AnyFunction} AnyFunction */

/**
 * Higher-order reducer creator which creates a combined reducer object, keyed
 * by a property on the action object.
 *
 * @param {string} actionProperty Action property by which to key object.
 *
 * @return {AnyFunction} Higher-order reducer.
 */
const onSubKey = actionProperty => reducer => (state = {}, action) => {
  // Retrieve subkey from action. Do not track if undefined; useful for cases
  // where reducer is scoped by action shape.
  const key = action[actionProperty];
  if (key === undefined) {
    return state;
  }

  // Avoid updating state if unchanged. Note that this also accounts for a
  // reducer which returns undefined on a key which is not yet tracked.
  const nextKeyState = reducer(state[key], action);
  if (nextKeyState === state[key]) {
    return state;
  }
  return {
    ...state,
    [key]: nextKeyState
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (onSubKey);


/***/ }),

/***/ "./node_modules/@wordpress/core-data/build-module/utils/receive-intermediate-results.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@wordpress/core-data/build-module/utils/receive-intermediate-results.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RECEIVE_INTERMEDIATE_RESULTS: () => (/* binding */ RECEIVE_INTERMEDIATE_RESULTS)
/* harmony export */ });
const RECEIVE_INTERMEDIATE_RESULTS = Symbol('RECEIVE_INTERMEDIATE_RESULTS');


/***/ }),

/***/ "./node_modules/@wordpress/core-data/build-module/utils/replace-action.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@wordpress/core-data/build-module/utils/replace-action.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** @typedef {import('../types').AnyFunction} AnyFunction */

/**
 * Higher-order reducer creator which substitutes the action object before
 * passing to the original reducer.
 *
 * @param {AnyFunction} replacer Function mapping original action to replacement.
 *
 * @return {AnyFunction} Higher-order reducer.
 */
const replaceAction = replacer => reducer => (state, action) => {
  return reducer(state, replacer(action));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (replaceAction);


/***/ }),

/***/ "./node_modules/@wordpress/core-data/build-module/utils/set-nested-value.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@wordpress/core-data/build-module/utils/set-nested-value.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ setNestedValue)
/* harmony export */ });
/**
 * Sets the value at path of object.
 * If a portion of path doesn’t exist, it’s created.
 * Arrays are created for missing index properties while objects are created
 * for all other missing properties.
 *
 * Path is specified as either:
 * - a string of properties, separated by dots, for example: "x.y".
 * - an array of properties, for example `[ 'x', 'y' ]`.
 *
 * This function intentionally mutates the input object.
 *
 * Inspired by _.set().
 *
 * @see https://lodash.com/docs/4.17.15#set
 *
 * @todo Needs to be deduplicated with its copy in `@wordpress/edit-site`.
 *
 * @param {Object}       object Object to modify
 * @param {Array|string} path   Path of the property to set.
 * @param {*}            value  Value to set.
 */
function setNestedValue(object, path, value) {
  if (!object || typeof object !== 'object') {
    return object;
  }
  const normalizedPath = Array.isArray(path) ? path : path.split('.');
  normalizedPath.reduce((acc, key, idx) => {
    if (acc[key] === undefined) {
      if (Number.isInteger(normalizedPath[idx + 1])) {
        acc[key] = [];
      } else {
        acc[key] = {};
      }
    }
    if (idx === normalizedPath.length - 1) {
      acc[key] = value;
    }
    return acc[key];
  }, object);
  return object;
}


/***/ }),

/***/ "./node_modules/@wordpress/core-data/build-module/utils/user-permissions.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@wordpress/core-data/build-module/utils/user-permissions.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ALLOWED_RESOURCE_ACTIONS: () => (/* binding */ ALLOWED_RESOURCE_ACTIONS),
/* harmony export */   getUserPermissionCacheKey: () => (/* binding */ getUserPermissionCacheKey),
/* harmony export */   getUserPermissionsFromAllowHeader: () => (/* binding */ getUserPermissionsFromAllowHeader)
/* harmony export */ });
const ALLOWED_RESOURCE_ACTIONS = ['create', 'read', 'update', 'delete'];
function getUserPermissionsFromAllowHeader(allowedMethods) {
  const permissions = {};
  if (!allowedMethods) {
    return permissions;
  }
  const methods = {
    create: 'POST',
    read: 'GET',
    update: 'PUT',
    delete: 'DELETE'
  };
  for (const [actionName, methodName] of Object.entries(methods)) {
    permissions[actionName] = allowedMethods.includes(methodName);
  }
  return permissions;
}
function getUserPermissionCacheKey(action, resource, id) {
  const key = (typeof resource === 'object' ? [action, resource.kind, resource.name, resource.id] : [action, resource, id]).filter(Boolean).join('/');
  return key;
}


/***/ }),

/***/ "./node_modules/@wordpress/core-data/build-module/utils/with-weak-map-cache.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@wordpress/core-data/build-module/utils/with-weak-map-cache.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Given a function, returns an enhanced function which caches the result and
 * tracks in WeakMap. The result is only cached if the original function is
 * passed a valid object-like argument (requirement for WeakMap key).
 *
 * @param {Function} fn Original function.
 *
 * @return {Function} Enhanced caching function.
 */
function withWeakMapCache(fn) {
  const cache = new WeakMap();
  return key => {
    let value;
    if (cache.has(key)) {
      value = cache.get(key);
    } else {
      value = fn(key);

      // Can reach here if key is not valid for WeakMap, since `has`
      // will return false for invalid key. Since `set` will throw,
      // ensure that key is valid before setting into cache.
      if (key !== null && typeof key === 'object') {
        cache.set(key, value);
      }
    }
    return value;
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (withWeakMapCache);


/***/ }),

/***/ "./node_modules/@wordpress/core-data/node_modules/uuid/dist/esm-browser/native.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@wordpress/core-data/node_modules/uuid/dist/esm-browser/native.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  randomUUID
});

/***/ }),

/***/ "./node_modules/@wordpress/core-data/node_modules/uuid/dist/esm-browser/regex.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@wordpress/core-data/node_modules/uuid/dist/esm-browser/regex.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);

/***/ }),

/***/ "./node_modules/@wordpress/core-data/node_modules/uuid/dist/esm-browser/rng.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@wordpress/core-data/node_modules/uuid/dist/esm-browser/rng.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rng)
/* harmony export */ });
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
let getRandomValues;
const rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

/***/ }),

/***/ "./node_modules/@wordpress/core-data/node_modules/uuid/dist/esm-browser/stringify.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@wordpress/core-data/node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   unsafeStringify: () => (/* binding */ unsafeStringify)
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/@wordpress/core-data/node_modules/uuid/dist/esm-browser/validate.js");

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

const byteToHex = [];

for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).slice(1));
}

function unsafeStringify(arr, offset = 0) {
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  return byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]];
}

function stringify(arr, offset = 0) {
  const uuid = unsafeStringify(arr, offset); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);

/***/ }),

/***/ "./node_modules/@wordpress/core-data/node_modules/uuid/dist/esm-browser/v4.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@wordpress/core-data/node_modules/uuid/dist/esm-browser/v4.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _native_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./native.js */ "./node_modules/@wordpress/core-data/node_modules/uuid/dist/esm-browser/native.js");
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rng.js */ "./node_modules/@wordpress/core-data/node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/@wordpress/core-data/node_modules/uuid/dist/esm-browser/stringify.js");




function v4(options, buf, offset) {
  if (_native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID && !buf && !options) {
    return _native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID();
  }

  options = options || {};
  const rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_1__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_2__.unsafeStringify)(rnds);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);

/***/ }),

/***/ "./node_modules/@wordpress/core-data/node_modules/uuid/dist/esm-browser/validate.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@wordpress/core-data/node_modules/uuid/dist/esm-browser/validate.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ "./node_modules/@wordpress/core-data/node_modules/uuid/dist/esm-browser/regex.js");


function validate(uuid) {
  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__["default"].test(uuid);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);

/***/ }),

/***/ "./node_modules/@wordpress/undo-manager/build-module/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/@wordpress/undo-manager/build-module/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createUndoManager: () => (/* binding */ createUndoManager)
/* harmony export */ });
/* harmony import */ var _wordpress_is_shallow_equal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/is-shallow-equal */ "@wordpress/is-shallow-equal");
/* harmony import */ var _wordpress_is_shallow_equal__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_is_shallow_equal__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress dependencies
 */


/** @typedef {import('./types').HistoryRecord}  HistoryRecord */
/** @typedef {import('./types').HistoryChange}  HistoryChange */
/** @typedef {import('./types').HistoryChanges} HistoryChanges */
/** @typedef {import('./types').UndoManager} UndoManager */

/**
 * Merge changes for a single item into a record of changes.
 *
 * @param {Record< string, HistoryChange >} changes1 Previous changes
 * @param {Record< string, HistoryChange >} changes2 NextChanges
 *
 * @return {Record< string, HistoryChange >} Merged changes
 */
function mergeHistoryChanges(changes1, changes2) {
  /**
   * @type {Record< string, HistoryChange >}
   */
  const newChanges = {
    ...changes1
  };
  Object.entries(changes2).forEach(([key, value]) => {
    if (newChanges[key]) {
      newChanges[key] = {
        ...newChanges[key],
        to: value.to
      };
    } else {
      newChanges[key] = value;
    }
  });
  return newChanges;
}

/**
 * Adds history changes for a single item into a record of changes.
 *
 * @param {HistoryRecord}  record  The record to merge into.
 * @param {HistoryChanges} changes The changes to merge.
 */
const addHistoryChangesIntoRecord = (record, changes) => {
  const existingChangesIndex = record?.findIndex(({
    id: recordIdentifier
  }) => {
    return typeof recordIdentifier === 'string' ? recordIdentifier === changes.id : _wordpress_is_shallow_equal__WEBPACK_IMPORTED_MODULE_0___default()(recordIdentifier, changes.id);
  });
  const nextRecord = [...record];
  if (existingChangesIndex !== -1) {
    // If the edit is already in the stack leave the initial "from" value.
    nextRecord[existingChangesIndex] = {
      id: changes.id,
      changes: mergeHistoryChanges(nextRecord[existingChangesIndex].changes, changes.changes)
    };
  } else {
    nextRecord.push(changes);
  }
  return nextRecord;
};

/**
 * Creates an undo manager.
 *
 * @return {UndoManager} Undo manager.
 */
function createUndoManager() {
  /**
   * @type {HistoryRecord[]}
   */
  let history = [];
  /**
   * @type {HistoryRecord}
   */
  let stagedRecord = [];
  /**
   * @type {number}
   */
  let offset = 0;
  const dropPendingRedos = () => {
    history = history.slice(0, offset || undefined);
    offset = 0;
  };
  const appendStagedRecordToLatestHistoryRecord = () => {
    var _history$index;
    const index = history.length === 0 ? 0 : history.length - 1;
    let latestRecord = (_history$index = history[index]) !== null && _history$index !== void 0 ? _history$index : [];
    stagedRecord.forEach(changes => {
      latestRecord = addHistoryChangesIntoRecord(latestRecord, changes);
    });
    stagedRecord = [];
    history[index] = latestRecord;
  };

  /**
   * Checks whether a record is empty.
   * A record is considered empty if it the changes keep the same values.
   * Also updates to function values are ignored.
   *
   * @param {HistoryRecord} record
   * @return {boolean} Whether the record is empty.
   */
  const isRecordEmpty = record => {
    const filteredRecord = record.filter(({
      changes
    }) => {
      return Object.values(changes).some(({
        from,
        to
      }) => typeof from !== 'function' && typeof to !== 'function' && !_wordpress_is_shallow_equal__WEBPACK_IMPORTED_MODULE_0___default()(from, to));
    });
    return !filteredRecord.length;
  };
  return {
    /**
     * Record changes into the history.
     *
     * @param {HistoryRecord=} record   A record of changes to record.
     * @param {boolean}        isStaged Whether to immediately create an undo point or not.
     */
    addRecord(record, isStaged = false) {
      const isEmpty = !record || isRecordEmpty(record);
      if (isStaged) {
        if (isEmpty) {
          return;
        }
        record.forEach(changes => {
          stagedRecord = addHistoryChangesIntoRecord(stagedRecord, changes);
        });
      } else {
        dropPendingRedos();
        if (stagedRecord.length) {
          appendStagedRecordToLatestHistoryRecord();
        }
        if (isEmpty) {
          return;
        }
        history.push(record);
      }
    },
    undo() {
      if (stagedRecord.length) {
        dropPendingRedos();
        appendStagedRecordToLatestHistoryRecord();
      }
      const undoRecord = history[history.length - 1 + offset];
      if (!undoRecord) {
        return;
      }
      offset -= 1;
      return undoRecord;
    },
    redo() {
      const redoRecord = history[history.length + offset];
      if (!redoRecord) {
        return;
      }
      offset += 1;
      return redoRecord;
    },
    hasUndo() {
      return !!history[history.length - 1 + offset];
    },
    hasRedo() {
      return !!history[history.length + offset];
    }
  };
}


/***/ }),

/***/ "./node_modules/camel-case/dist.es2015/index.js":
/*!******************************************************!*\
  !*** ./node_modules/camel-case/dist.es2015/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   camelCase: () => (/* binding */ camelCase),
/* harmony export */   camelCaseTransform: () => (/* binding */ camelCaseTransform),
/* harmony export */   camelCaseTransformMerge: () => (/* binding */ camelCaseTransformMerge)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var pascal_case__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pascal-case */ "./node_modules/pascal-case/dist.es2015/index.js");


function camelCaseTransform(input, index) {
    if (index === 0)
        return input.toLowerCase();
    return (0,pascal_case__WEBPACK_IMPORTED_MODULE_0__.pascalCaseTransform)(input, index);
}
function camelCaseTransformMerge(input, index) {
    if (index === 0)
        return input.toLowerCase();
    return (0,pascal_case__WEBPACK_IMPORTED_MODULE_0__.pascalCaseTransformMerge)(input);
}
function camelCase(input, options) {
    if (options === void 0) { options = {}; }
    return (0,pascal_case__WEBPACK_IMPORTED_MODULE_0__.pascalCase)(input, (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({ transform: camelCaseTransform }, options));
}


/***/ }),

/***/ "./node_modules/capital-case/dist.es2015/index.js":
/*!********************************************************!*\
  !*** ./node_modules/capital-case/dist.es2015/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   capitalCase: () => (/* binding */ capitalCase),
/* harmony export */   capitalCaseTransform: () => (/* binding */ capitalCaseTransform)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var no_case__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! no-case */ "./node_modules/no-case/dist.es2015/index.js");
/* harmony import */ var upper_case_first__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! upper-case-first */ "./node_modules/upper-case-first/dist.es2015/index.js");



function capitalCaseTransform(input) {
    return (0,upper_case_first__WEBPACK_IMPORTED_MODULE_0__.upperCaseFirst)(input.toLowerCase());
}
function capitalCase(input, options) {
    if (options === void 0) { options = {}; }
    return (0,no_case__WEBPACK_IMPORTED_MODULE_1__.noCase)(input, (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({ delimiter: " ", transform: capitalCaseTransform }, options));
}


/***/ }),

/***/ "./node_modules/equivalent-key-map/equivalent-key-map.js":
/*!***************************************************************!*\
  !*** ./node_modules/equivalent-key-map/equivalent-key-map.js ***!
  \***************************************************************/
/***/ ((module) => {



function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/**
 * Given an instance of EquivalentKeyMap, returns its internal value pair tuple
 * for a key, if one exists. The tuple members consist of the last reference
 * value for the key (used in efficient subsequent lookups) and the value
 * assigned for the key at the leaf node.
 *
 * @param {EquivalentKeyMap} instance EquivalentKeyMap instance.
 * @param {*} key                     The key for which to return value pair.
 *
 * @return {?Array} Value pair, if exists.
 */
function getValuePair(instance, key) {
  var _map = instance._map,
      _arrayTreeMap = instance._arrayTreeMap,
      _objectTreeMap = instance._objectTreeMap; // Map keeps a reference to the last object-like key used to set the
  // value, which can be used to shortcut immediately to the value.

  if (_map.has(key)) {
    return _map.get(key);
  } // Sort keys to ensure stable retrieval from tree.


  var properties = Object.keys(key).sort(); // Tree by type to avoid conflicts on numeric object keys, empty value.

  var map = Array.isArray(key) ? _arrayTreeMap : _objectTreeMap;

  for (var i = 0; i < properties.length; i++) {
    var property = properties[i];
    map = map.get(property);

    if (map === undefined) {
      return;
    }

    var propertyValue = key[property];
    map = map.get(propertyValue);

    if (map === undefined) {
      return;
    }
  }

  var valuePair = map.get('_ekm_value');

  if (!valuePair) {
    return;
  } // If reached, it implies that an object-like key was set with another
  // reference, so delete the reference and replace with the current.


  _map.delete(valuePair[0]);

  valuePair[0] = key;
  map.set('_ekm_value', valuePair);

  _map.set(key, valuePair);

  return valuePair;
}
/**
 * Variant of a Map object which enables lookup by equivalent (deeply equal)
 * object and array keys.
 */


var EquivalentKeyMap =
/*#__PURE__*/
function () {
  /**
   * Constructs a new instance of EquivalentKeyMap.
   *
   * @param {Iterable.<*>} iterable Initial pair of key, value for map.
   */
  function EquivalentKeyMap(iterable) {
    _classCallCheck(this, EquivalentKeyMap);

    this.clear();

    if (iterable instanceof EquivalentKeyMap) {
      // Map#forEach is only means of iterating with support for IE11.
      var iterablePairs = [];
      iterable.forEach(function (value, key) {
        iterablePairs.push([key, value]);
      });
      iterable = iterablePairs;
    }

    if (iterable != null) {
      for (var i = 0; i < iterable.length; i++) {
        this.set(iterable[i][0], iterable[i][1]);
      }
    }
  }
  /**
   * Accessor property returning the number of elements.
   *
   * @return {number} Number of elements.
   */


  _createClass(EquivalentKeyMap, [{
    key: "set",

    /**
     * Add or update an element with a specified key and value.
     *
     * @param {*} key   The key of the element to add.
     * @param {*} value The value of the element to add.
     *
     * @return {EquivalentKeyMap} Map instance.
     */
    value: function set(key, value) {
      // Shortcut non-object-like to set on internal Map.
      if (key === null || _typeof(key) !== 'object') {
        this._map.set(key, value);

        return this;
      } // Sort keys to ensure stable assignment into tree.


      var properties = Object.keys(key).sort();
      var valuePair = [key, value]; // Tree by type to avoid conflicts on numeric object keys, empty value.

      var map = Array.isArray(key) ? this._arrayTreeMap : this._objectTreeMap;

      for (var i = 0; i < properties.length; i++) {
        var property = properties[i];

        if (!map.has(property)) {
          map.set(property, new EquivalentKeyMap());
        }

        map = map.get(property);
        var propertyValue = key[property];

        if (!map.has(propertyValue)) {
          map.set(propertyValue, new EquivalentKeyMap());
        }

        map = map.get(propertyValue);
      } // If an _ekm_value exists, there was already an equivalent key. Before
      // overriding, ensure that the old key reference is removed from map to
      // avoid memory leak of accumulating equivalent keys. This is, in a
      // sense, a poor man's WeakMap, while still enabling iterability.


      var previousValuePair = map.get('_ekm_value');

      if (previousValuePair) {
        this._map.delete(previousValuePair[0]);
      }

      map.set('_ekm_value', valuePair);

      this._map.set(key, valuePair);

      return this;
    }
    /**
     * Returns a specified element.
     *
     * @param {*} key The key of the element to return.
     *
     * @return {?*} The element associated with the specified key or undefined
     *              if the key can't be found.
     */

  }, {
    key: "get",
    value: function get(key) {
      // Shortcut non-object-like to get from internal Map.
      if (key === null || _typeof(key) !== 'object') {
        return this._map.get(key);
      }

      var valuePair = getValuePair(this, key);

      if (valuePair) {
        return valuePair[1];
      }
    }
    /**
     * Returns a boolean indicating whether an element with the specified key
     * exists or not.
     *
     * @param {*} key The key of the element to test for presence.
     *
     * @return {boolean} Whether an element with the specified key exists.
     */

  }, {
    key: "has",
    value: function has(key) {
      if (key === null || _typeof(key) !== 'object') {
        return this._map.has(key);
      } // Test on the _presence_ of the pair, not its value, as even undefined
      // can be a valid member value for a key.


      return getValuePair(this, key) !== undefined;
    }
    /**
     * Removes the specified element.
     *
     * @param {*} key The key of the element to remove.
     *
     * @return {boolean} Returns true if an element existed and has been
     *                   removed, or false if the element does not exist.
     */

  }, {
    key: "delete",
    value: function _delete(key) {
      if (!this.has(key)) {
        return false;
      } // This naive implementation will leave orphaned child trees. A better
      // implementation should traverse and remove orphans.


      this.set(key, undefined);
      return true;
    }
    /**
     * Executes a provided function once per each key/value pair, in insertion
     * order.
     *
     * @param {Function} callback Function to execute for each element.
     * @param {*}        thisArg  Value to use as `this` when executing
     *                            `callback`.
     */

  }, {
    key: "forEach",
    value: function forEach(callback) {
      var _this = this;

      var thisArg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this;

      this._map.forEach(function (value, key) {
        // Unwrap value from object-like value pair.
        if (key !== null && _typeof(key) === 'object') {
          value = value[1];
        }

        callback.call(thisArg, value, key, _this);
      });
    }
    /**
     * Removes all elements.
     */

  }, {
    key: "clear",
    value: function clear() {
      this._map = new Map();
      this._arrayTreeMap = new Map();
      this._objectTreeMap = new Map();
    }
  }, {
    key: "size",
    get: function get() {
      return this._map.size;
    }
  }]);

  return EquivalentKeyMap;
}();

module.exports = EquivalentKeyMap;


/***/ }),

/***/ "./node_modules/fast-deep-equal/es6/index.js":
/*!***************************************************!*\
  !*** ./node_modules/fast-deep-equal/es6/index.js ***!
  \***************************************************/
/***/ ((module) => {



// do not edit .js files directly - edit src/index.jst


  var envHasBigInt64Array = typeof BigInt64Array !== 'undefined';


module.exports = function equal(a, b) {
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;

    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }


    if ((a instanceof Map) && (b instanceof Map)) {
      if (a.size !== b.size) return false;
      for (i of a.entries())
        if (!b.has(i[0])) return false;
      for (i of a.entries())
        if (!equal(i[1], b.get(i[0]))) return false;
      return true;
    }

    if ((a instanceof Set) && (b instanceof Set)) {
      if (a.size !== b.size) return false;
      for (i of a.entries())
        if (!b.has(i[0])) return false;
      return true;
    }

    if (ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (a[i] !== b[i]) return false;
      return true;
    }


    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();

    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;

    for (i = length; i-- !== 0;)
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;

    for (i = length; i-- !== 0;) {
      var key = keys[i];

      if (!equal(a[key], b[key])) return false;
    }

    return true;
  }

  // true if both NaN, false otherwise
  return a!==a && b!==b;
};


/***/ }),

/***/ "./node_modules/lower-case/dist.es2015/index.js":
/*!******************************************************!*\
  !*** ./node_modules/lower-case/dist.es2015/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   localeLowerCase: () => (/* binding */ localeLowerCase),
/* harmony export */   lowerCase: () => (/* binding */ lowerCase)
/* harmony export */ });
/**
 * Source: ftp://ftp.unicode.org/Public/UCD/latest/ucd/SpecialCasing.txt
 */
var SUPPORTED_LOCALE = {
    tr: {
        regexp: /\u0130|\u0049|\u0049\u0307/g,
        map: {
            İ: "\u0069",
            I: "\u0131",
            İ: "\u0069",
        },
    },
    az: {
        regexp: /\u0130/g,
        map: {
            İ: "\u0069",
            I: "\u0131",
            İ: "\u0069",
        },
    },
    lt: {
        regexp: /\u0049|\u004A|\u012E|\u00CC|\u00CD|\u0128/g,
        map: {
            I: "\u0069\u0307",
            J: "\u006A\u0307",
            Į: "\u012F\u0307",
            Ì: "\u0069\u0307\u0300",
            Í: "\u0069\u0307\u0301",
            Ĩ: "\u0069\u0307\u0303",
        },
    },
};
/**
 * Localized lower case.
 */
function localeLowerCase(str, locale) {
    var lang = SUPPORTED_LOCALE[locale.toLowerCase()];
    if (lang)
        return lowerCase(str.replace(lang.regexp, function (m) { return lang.map[m]; }));
    return lowerCase(str);
}
/**
 * Lower case as a function.
 */
function lowerCase(str) {
    return str.toLowerCase();
}


/***/ }),

/***/ "./node_modules/memize/dist/index.js":
/*!*******************************************!*\
  !*** ./node_modules/memize/dist/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ memize)
/* harmony export */ });
/**
 * Memize options object.
 *
 * @typedef MemizeOptions
 *
 * @property {number} [maxSize] Maximum size of the cache.
 */

/**
 * Internal cache entry.
 *
 * @typedef MemizeCacheNode
 *
 * @property {?MemizeCacheNode|undefined} [prev] Previous node.
 * @property {?MemizeCacheNode|undefined} [next] Next node.
 * @property {Array<*>}                   args   Function arguments for cache
 *                                               entry.
 * @property {*}                          val    Function result.
 */

/**
 * Properties of the enhanced function for controlling cache.
 *
 * @typedef MemizeMemoizedFunction
 *
 * @property {()=>void} clear Clear the cache.
 */

/**
 * Accepts a function to be memoized, and returns a new memoized function, with
 * optional options.
 *
 * @template {(...args: any[]) => any} F
 *
 * @param {F}             fn        Function to memoize.
 * @param {MemizeOptions} [options] Options object.
 *
 * @return {((...args: Parameters<F>) => ReturnType<F>) & MemizeMemoizedFunction} Memoized function.
 */
function memize(fn, options) {
	var size = 0;

	/** @type {?MemizeCacheNode|undefined} */
	var head;

	/** @type {?MemizeCacheNode|undefined} */
	var tail;

	options = options || {};

	function memoized(/* ...args */) {
		var node = head,
			len = arguments.length,
			args,
			i;

		searchCache: while (node) {
			// Perform a shallow equality test to confirm that whether the node
			// under test is a candidate for the arguments passed. Two arrays
			// are shallowly equal if their length matches and each entry is
			// strictly equal between the two sets. Avoid abstracting to a
			// function which could incur an arguments leaking deoptimization.

			// Check whether node arguments match arguments length
			if (node.args.length !== arguments.length) {
				node = node.next;
				continue;
			}

			// Check whether node arguments match arguments values
			for (i = 0; i < len; i++) {
				if (node.args[i] !== arguments[i]) {
					node = node.next;
					continue searchCache;
				}
			}

			// At this point we can assume we've found a match

			// Surface matched node to head if not already
			if (node !== head) {
				// As tail, shift to previous. Must only shift if not also
				// head, since if both head and tail, there is no previous.
				if (node === tail) {
					tail = node.prev;
				}

				// Adjust siblings to point to each other. If node was tail,
				// this also handles new tail's empty `next` assignment.
				/** @type {MemizeCacheNode} */ (node.prev).next = node.next;
				if (node.next) {
					node.next.prev = node.prev;
				}

				node.next = head;
				node.prev = null;
				/** @type {MemizeCacheNode} */ (head).prev = node;
				head = node;
			}

			// Return immediately
			return node.val;
		}

		// No cached value found. Continue to insertion phase:

		// Create a copy of arguments (avoid leaking deoptimization)
		args = new Array(len);
		for (i = 0; i < len; i++) {
			args[i] = arguments[i];
		}

		node = {
			args: args,

			// Generate the result from original function
			val: fn.apply(null, args),
		};

		// Don't need to check whether node is already head, since it would
		// have been returned above already if it was

		// Shift existing head down list
		if (head) {
			head.prev = node;
			node.next = head;
		} else {
			// If no head, follows that there's no tail (at initial or reset)
			tail = node;
		}

		// Trim tail if we're reached max size and are pending cache insertion
		if (size === /** @type {MemizeOptions} */ (options).maxSize) {
			tail = /** @type {MemizeCacheNode} */ (tail).prev;
			/** @type {MemizeCacheNode} */ (tail).next = null;
		} else {
			size++;
		}

		head = node;

		return node.val;
	}

	memoized.clear = function () {
		head = null;
		tail = null;
		size = 0;
	};

	// Ignore reason: There's not a clear solution to create an intersection of
	// the function with additional properties, where the goal is to retain the
	// function signature of the incoming argument and add control properties
	// on the return value.

	// @ts-ignore
	return memoized;
}




/***/ }),

/***/ "./node_modules/no-case/dist.es2015/index.js":
/*!***************************************************!*\
  !*** ./node_modules/no-case/dist.es2015/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   noCase: () => (/* binding */ noCase)
/* harmony export */ });
/* harmony import */ var lower_case__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lower-case */ "./node_modules/lower-case/dist.es2015/index.js");

// Support camel case ("camelCase" -> "camel Case" and "CAMELCase" -> "CAMEL Case").
var DEFAULT_SPLIT_REGEXP = [/([a-z0-9])([A-Z])/g, /([A-Z])([A-Z][a-z])/g];
// Remove all non-word characters.
var DEFAULT_STRIP_REGEXP = /[^A-Z0-9]+/gi;
/**
 * Normalize the string into something other libraries can manipulate easier.
 */
function noCase(input, options) {
    if (options === void 0) { options = {}; }
    var _a = options.splitRegexp, splitRegexp = _a === void 0 ? DEFAULT_SPLIT_REGEXP : _a, _b = options.stripRegexp, stripRegexp = _b === void 0 ? DEFAULT_STRIP_REGEXP : _b, _c = options.transform, transform = _c === void 0 ? lower_case__WEBPACK_IMPORTED_MODULE_0__.lowerCase : _c, _d = options.delimiter, delimiter = _d === void 0 ? " " : _d;
    var result = replace(replace(input, splitRegexp, "$1\0$2"), stripRegexp, "\0");
    var start = 0;
    var end = result.length;
    // Trim the delimiter from around the output string.
    while (result.charAt(start) === "\0")
        start++;
    while (result.charAt(end - 1) === "\0")
        end--;
    // Transform each token independently.
    return result.slice(start, end).split("\0").map(transform).join(delimiter);
}
/**
 * Replace `re` in the input string with the replacement value.
 */
function replace(input, re, value) {
    if (re instanceof RegExp)
        return input.replace(re, value);
    return re.reduce(function (input, re) { return input.replace(re, value); }, input);
}


/***/ }),

/***/ "./node_modules/pascal-case/dist.es2015/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/pascal-case/dist.es2015/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pascalCase: () => (/* binding */ pascalCase),
/* harmony export */   pascalCaseTransform: () => (/* binding */ pascalCaseTransform),
/* harmony export */   pascalCaseTransformMerge: () => (/* binding */ pascalCaseTransformMerge)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var no_case__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! no-case */ "./node_modules/no-case/dist.es2015/index.js");


function pascalCaseTransform(input, index) {
    var firstChar = input.charAt(0);
    var lowerChars = input.substr(1).toLowerCase();
    if (index > 0 && firstChar >= "0" && firstChar <= "9") {
        return "_" + firstChar + lowerChars;
    }
    return "" + firstChar.toUpperCase() + lowerChars;
}
function pascalCaseTransformMerge(input) {
    return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
}
function pascalCase(input, options) {
    if (options === void 0) { options = {}; }
    return (0,no_case__WEBPACK_IMPORTED_MODULE_0__.noCase)(input, (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({ delimiter: "", transform: pascalCaseTransform }, options));
}


/***/ }),

/***/ "./node_modules/tslib/tslib.es6.mjs":
/*!******************************************!*\
  !*** ./node_modules/tslib/tslib.es6.mjs ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __addDisposableResource: () => (/* binding */ __addDisposableResource),
/* harmony export */   __assign: () => (/* binding */ __assign),
/* harmony export */   __asyncDelegator: () => (/* binding */ __asyncDelegator),
/* harmony export */   __asyncGenerator: () => (/* binding */ __asyncGenerator),
/* harmony export */   __asyncValues: () => (/* binding */ __asyncValues),
/* harmony export */   __await: () => (/* binding */ __await),
/* harmony export */   __awaiter: () => (/* binding */ __awaiter),
/* harmony export */   __classPrivateFieldGet: () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   __classPrivateFieldIn: () => (/* binding */ __classPrivateFieldIn),
/* harmony export */   __classPrivateFieldSet: () => (/* binding */ __classPrivateFieldSet),
/* harmony export */   __createBinding: () => (/* binding */ __createBinding),
/* harmony export */   __decorate: () => (/* binding */ __decorate),
/* harmony export */   __disposeResources: () => (/* binding */ __disposeResources),
/* harmony export */   __esDecorate: () => (/* binding */ __esDecorate),
/* harmony export */   __exportStar: () => (/* binding */ __exportStar),
/* harmony export */   __extends: () => (/* binding */ __extends),
/* harmony export */   __generator: () => (/* binding */ __generator),
/* harmony export */   __importDefault: () => (/* binding */ __importDefault),
/* harmony export */   __importStar: () => (/* binding */ __importStar),
/* harmony export */   __makeTemplateObject: () => (/* binding */ __makeTemplateObject),
/* harmony export */   __metadata: () => (/* binding */ __metadata),
/* harmony export */   __param: () => (/* binding */ __param),
/* harmony export */   __propKey: () => (/* binding */ __propKey),
/* harmony export */   __read: () => (/* binding */ __read),
/* harmony export */   __rest: () => (/* binding */ __rest),
/* harmony export */   __rewriteRelativeImportExtension: () => (/* binding */ __rewriteRelativeImportExtension),
/* harmony export */   __runInitializers: () => (/* binding */ __runInitializers),
/* harmony export */   __setFunctionName: () => (/* binding */ __setFunctionName),
/* harmony export */   __spread: () => (/* binding */ __spread),
/* harmony export */   __spreadArray: () => (/* binding */ __spreadArray),
/* harmony export */   __spreadArrays: () => (/* binding */ __spreadArrays),
/* harmony export */   __values: () => (/* binding */ __values),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */

var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
      function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
  return extendStatics(d, b);
};

function __extends(d, b) {
  if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() { this.constructor = d; }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
  __assign = Object.assign || function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
  }
  return __assign.apply(this, arguments);
}

function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
              t[p[i]] = s[p[i]];
      }
  return t;
}

function __decorate(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
  return function (target, key) { decorator(target, key, paramIndex); }
}

function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
      var context = {};
      for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
      for (var p in contextIn.access) context.access[p] = contextIn.access[p];
      context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
      var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
      if (kind === "accessor") {
          if (result === void 0) continue;
          if (result === null || typeof result !== "object") throw new TypeError("Object expected");
          if (_ = accept(result.get)) descriptor.get = _;
          if (_ = accept(result.set)) descriptor.set = _;
          if (_ = accept(result.init)) initializers.unshift(_);
      }
      else if (_ = accept(result)) {
          if (kind === "field") initializers.unshift(_);
          else descriptor[key] = _;
      }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};

function __runInitializers(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
      value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};

function __propKey(x) {
  return typeof x === "symbol" ? x : "".concat(x);
};

function __setFunctionName(f, name, prefix) {
  if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
  return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};

function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
  return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
      function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
      function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
  return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
  function verb(n) { return function (v) { return step([n, v]); }; }
  function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (g && (g = 0, op[0] && (_ = 0)), _) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
              case 0: case 1: t = op; break;
              case 4: _.label++; return { value: op[1], done: false };
              case 5: _.label++; y = op[1]; op = [0]; continue;
              case 7: op = _.ops.pop(); _.trys.pop(); continue;
              default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                  if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                  if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                  if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                  if (t[2]) _.ops.pop();
                  _.trys.pop(); continue;
          }
          op = body.call(thisArg, _);
      } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
      if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
  }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
  }
  Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

function __exportStar(m, o) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
      next: function () {
          if (o && i >= o.length) o = void 0;
          return { value: o && o[i++], done: !o };
      }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o), r, ar = [], e;
  try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  }
  catch (error) { e = { error: error }; }
  finally {
      try {
          if (r && !r.done && (m = i["return"])) m.call(i);
      }
      finally { if (e) throw e.error; }
  }
  return ar;
}

/** @deprecated */
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++)
      ar = ar.concat(__read(arguments[i]));
  return ar;
}

/** @deprecated */
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++)
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
          r[k] = a[j];
  return r;
}

function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
      }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []), i, q = [];
  return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function () { return this; }, i;
  function awaitReturn(f) { return function (v) { return Promise.resolve(v).then(f, reject); }; }
  function verb(n, f) { if (g[n]) { i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; if (f) i[n] = f(i[n]); } }
  function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
  function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
  function fulfill(value) { resume("next", value); }
  function reject(value) { resume("throw", value); }
  function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
  function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator], i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
  function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
  function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
  return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
  Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
  o["default"] = v;
};

var ownKeys = function(o) {
  ownKeys = Object.getOwnPropertyNames || function (o) {
    var ar = [];
    for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
    return ar;
  };
  return ownKeys(o);
};

function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
  __setModuleDefault(result, mod);
  return result;
}

function __importDefault(mod) {
  return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

function __classPrivateFieldIn(state, receiver) {
  if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof state === "function" ? receiver === state : state.has(receiver);
}

function __addDisposableResource(env, value, async) {
  if (value !== null && value !== void 0) {
    if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
    var dispose, inner;
    if (async) {
      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
      dispose = value[Symbol.asyncDispose];
    }
    if (dispose === void 0) {
      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
      dispose = value[Symbol.dispose];
      if (async) inner = dispose;
    }
    if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
    if (inner) dispose = function() { try { inner.call(this); } catch (e) { return Promise.reject(e); } };
    env.stack.push({ value: value, dispose: dispose, async: async });
  }
  else if (async) {
    env.stack.push({ async: true });
  }
  return value;
}

var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function __disposeResources(env) {
  function fail(e) {
    env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
    env.hasError = true;
  }
  var r, s = 0;
  function next() {
    while (r = env.stack.pop()) {
      try {
        if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
        if (r.dispose) {
          var result = r.dispose.call(r.value);
          if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) { fail(e); return next(); });
        }
        else s |= 1;
      }
      catch (e) {
        fail(e);
      }
    }
    if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
    if (env.hasError) throw env.error;
  }
  return next();
}

function __rewriteRelativeImportExtension(path, preserveJsx) {
  if (typeof path === "string" && /^\.\.?\//.test(path)) {
      return path.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function (m, tsx, d, ext, cm) {
          return tsx ? preserveJsx ? ".jsx" : ".js" : d && (!ext || !cm) ? m : (d + ext + "." + cm.toLowerCase() + "js");
      });
  }
  return path;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __extends,
  __assign,
  __rest,
  __decorate,
  __param,
  __esDecorate,
  __runInitializers,
  __propKey,
  __setFunctionName,
  __metadata,
  __awaiter,
  __generator,
  __createBinding,
  __exportStar,
  __values,
  __read,
  __spread,
  __spreadArrays,
  __spreadArray,
  __await,
  __asyncGenerator,
  __asyncDelegator,
  __asyncValues,
  __makeTemplateObject,
  __importStar,
  __importDefault,
  __classPrivateFieldGet,
  __classPrivateFieldSet,
  __classPrivateFieldIn,
  __addDisposableResource,
  __disposeResources,
  __rewriteRelativeImportExtension,
});


/***/ }),

/***/ "./node_modules/upper-case-first/dist.es2015/index.js":
/*!************************************************************!*\
  !*** ./node_modules/upper-case-first/dist.es2015/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   upperCaseFirst: () => (/* binding */ upperCaseFirst)
/* harmony export */ });
/**
 * Upper case the first character of an input string.
 */
function upperCaseFirst(input) {
    return input.charAt(0).toUpperCase() + input.substr(1);
}


/***/ }),

/***/ "@wordpress/api-fetch":
/*!**********************************!*\
  !*** external ["wp","apiFetch"] ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["wp"]["apiFetch"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/compose":
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["compose"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/deprecated":
/*!************************************!*\
  !*** external ["wp","deprecated"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["deprecated"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/html-entities":
/*!**************************************!*\
  !*** external ["wp","htmlEntities"] ***!
  \**************************************/
/***/ ((module) => {

module.exports = window["wp"]["htmlEntities"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/is-shallow-equal":
/*!****************************************!*\
  !*** external ["wp","isShallowEqual"] ***!
  \****************************************/
/***/ ((module) => {

module.exports = window["wp"]["isShallowEqual"];

/***/ }),

/***/ "@wordpress/private-apis":
/*!*************************************!*\
  !*** external ["wp","privateApis"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["privateApis"];

/***/ }),

/***/ "@wordpress/rich-text":
/*!**********************************!*\
  !*** external ["wp","richText"] ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["wp"]["richText"];

/***/ }),

/***/ "@wordpress/url":
/*!*****************************!*\
  !*** external ["wp","url"] ***!
  \*****************************/
/***/ ((module) => {

module.exports = window["wp"]["url"];

/***/ }),

/***/ "@wordpress/warning":
/*!*********************************!*\
  !*** external ["wp","warning"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["warning"];

/***/ }),

/***/ "react/jsx-runtime":
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["ReactJSXRuntime"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./node_modules/@wordpress/core-data/build-module/index.js");
/******/ 	(window.wp = window.wp || {}).coreData = __webpack_exports__;
/******/ 	
/******/ })()
;
//# sourceMappingURL=core-data.js.map