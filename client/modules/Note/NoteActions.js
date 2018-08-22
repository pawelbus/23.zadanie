import callApi from '../../util/apiCaller';

// Export Constants
export const CREATE_NOTES = 'CREATE_NOTES';
export const CREATE_NOTE = 'CREATE_NOTE';
export const EDIT_NOTE = 'EDIT_NOTE';
export const UPDATE_NOTE = 'UPDATE_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';

// Export Actions
export function createNotes(notesData) {
  return {
    type: CREATE_NOTES,
    lanes: notesData,
  };
}

export function createNote(note, laneId) {
  return {
    type: CREATE_NOTE,
    laneId,
    note,
  };
}

export function editNote(noteId) {
  return {
    type: EDIT_NOTE,
    noteId,
  }
}

export function updateNote(note) {
  return {
    type: UPDATE_NOTE,
    note,
  };
}

export function deleteNote(noteId, laneId) {
  return {
    type: DELETE_NOTE,
    noteId,
    laneId,
  };
}

// Actions creators for connection to sever
export function createNoteRequest(note, laneId) {
  return (dispatch) => {
    return callApi('notes', 'post', { note, laneId }).then(noteResp => {
      dispatch(createNote(noteResp, laneId));
    });
  };
}