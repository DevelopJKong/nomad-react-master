import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const Card = styled.div`
  background-color: ${(props) => props.theme.cardColor};
  padding: 5px 10px;
  margin-bottom:10px;

`;

interface IDraggableCardProps {
  toDo: string;
  index: number;
}

function DraggableCard({ toDo, index }:IDraggableCardProps)  {
  return (
    <Draggable draggableId={toDo} index={index}>
      {(magic) => (
        <Card
          ref={magic.innerRef}
          {...magic.draggableProps}
          {...magic.dragHandleProps}
        >
          {toDo}
        </Card>
      )}
    </Draggable>
  );
}

export default DraggableCard;
