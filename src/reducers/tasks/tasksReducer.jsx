import {
    FETCH_ALL,
    ADD_ITEM,
    CANCEL_EDIT_ITEM,
    DELETE_ITEM,
    EDIT_ITEM,
    ITEM_COMPLETION,
    SELECT_EDIT_ITEM,
    REORDER_ITEM
} from "../../actions/types";

const TasksReducer = (state, action) => {

    switch (action.type) {

        case FETCH_ALL:
            return {
                ...state,
                items: [...action.payload]
            }
        case ADD_ITEM: {
            const taskItem = {
                _id: action.payload._id,
                task: action.payload.task,
                completed: false,
            };
            return {...state, items: [...state.items, taskItem]};
        }

        case CANCEL_EDIT_ITEM: {
            const newState = state.items.length ? {...state, editingItem: {}} : {...state};
            return newState;
        }

        case DELETE_ITEM: {
            const items = state.items.filter(({ _id }) => _id !== action.payload);
            return {...state, items};
        }

        case EDIT_ITEM: {
            //TODO Edit operation is not currenctly working
            const items = state.items.map(item => {
                if (item.id === action.payload._id) {
                    item.task = action.payload.value;
                }
                return item;
            });
            return {...state, items, editingItem: {}};
        }

        case ITEM_COMPLETION: {
            const items = state.items.map(item => {
               if (item._id === action.payload._id) {
                   const newItem = { ...item };
                   newItem.completed = !newItem.completed;
                   return newItem;
               }
               return item;
            });
            return {...state, items};
        }

        case SELECT_EDIT_ITEM: {
            const item = state.items.find(({ _id }) => _id === action.payload);
            return { ...state, editingItem: item };
        }

        case REORDER_ITEM: {
            const clone = [...state.items];
            const [removed] = clone.splice(action.payload.initialPosition, 1);
            clone.splice(action.payload.newPosition, 0, removed);

            return { ...state, items: clone };
        }

        default: {
            return state;
        }
    }
};

export default TasksReducer;