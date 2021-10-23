import React from 'react';
import { DragDropContext, Droppable, Draggable} from "react-beautiful-dnd";

import FormContainer from "../../containers/FormContainer";
import FormItemContainer from "../../containers/FormItemContainer";
import './content.style.css';

const Content = props => {
    const onDragEnd = result => {
        // dropped outside the list
        if (!result.destination){
            return;
        }
        props.handleReorderItem(result.source.index, result.destination.index);
    };

    return (
        <div className="pa3 ph5-ns">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                        <div className="card text-center">
                            <div className="card-body">
                                <p className="card-text">Let's define the main requirements:</p>
                                <div className="d-inline-block">
                                    <FormContainer module={props.module} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {props.items.length ? (
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                            <div className="content__todos">
                                <ul className="list-group content__todos__ul">
                                    <DragDropContext onDragEnd={onDragEnd}>
                                        <Droppable droppableId="droppable">
                                            {provided => (
                                                <div ref={provided.innerRef}>
                                                    {props.items.map((item, index) => (
                                                        <Draggable key={item._id} draggableId={item._id} index={index}>
                                                            { (provided, snapshot) => (
                                                                <div
                                                                    ref={provided.innerRef}
                                                                    data-testid="content-draggable-item"
                                                                    {...provided.draggableProps}
                                                                    {...provided.dragHandleProps}
                                                                    className="content__todos__li">
                                                                        <FormItemContainer module={props.module} item={item} />
                                                                </div>
                                                            )}
                                                        </Draggable>
                                                    ))}
                                                    {provided.placeholder}
                                                </div>
                                            )}
                                        </Droppable>
                                    </DragDropContext>
                                </ul>
                            </div>
                        </div>
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export default Content;