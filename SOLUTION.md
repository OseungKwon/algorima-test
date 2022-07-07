## 고민

drag&drop 기능이 있는 웹 애플리케이션을 구현하기 위해 아래의 3가지 라이브러리를 고민하였습니다.

![image](https://user-images.githubusercontent.com/54261116/177706766-87ae7d6f-cd71-4810-8780-4c3cfea9bfbc.png)
대표적인 3가지 라이브러리 중에 react-draggable이 가장 다운로드 수가 높았지만, 드래그 가능한 컴포넌트의 위치가 바뀔 때마다 DOM이 변환되기에 선택하기 부적절해 보였습니다.

고민 결과 최종적으로 react-beautiful-dnd를 선택했는데, 그 이유는 리스트 만들고, 내부에 있는 컴포넌트를 쉽게 드래그할 수 있기 때문입니다. 

## 블록 이동하기
코드를 짜면서, dnd를 어떤 식으로 사용해야 할 지 고민이 많이 됐습니다. 리스트에서 블록을 끌어다가 박스에 넣는 동작을 dnd로 어떻게 구현할지 고민하다 최종적으로는 다음과 같이 설계하였습니다.

- 데이터 블록과 함수 블록을 담고 있는 리스트는 내부 요소를 드래그 할 수 있어야 한다. => `<Draggable/>` 적용
- 빈 박스(슬롯)에 블록을 넣으면, 해당 박스의 내용은 블록의 내용이 된다. => `<Droppable/>` 적용

## 데이터 블록은 데이터 슬롯에, 함수 블록은 함수 슬롯에

`onDragEnd` 함수는 드래그가 끝났을 때, 어떻게 동작할지를 정의합니다.
드래그를 시작한 리스트와(ex. datas) 드래그를 놓는 슬롯(ex. dataBox)이 일치하는 경우, 드롭이 가능하도록 만들었습니다.
```js
if (
    (srcId === "datas" && desId === "dataBox") ||
    (srcId === "funcs" && desId === "funcBox")
  ) {
    setItems({
      ...items,
      [srcId]: lists[srcId].filter((_, i) => i !== source.index)
    });
    setBox({
      ...box,
      [boxType]: lists[srcId].filter((_, i) => i === source.index)[0].content
    });
  }
```

## 올바른 슬롯은 dashed로, 잘못된 슬롯은 red line으로 표시
드래그 도중, datas에서 꺼낸 블록이 dataBox위에 올라가면 해당 슬롯은 dashed로 테두리가 변하고, funcBox위에 올라가면 해당 슬롯은 red로 테두리가 변환되기 위해 `isDraggingOver`를 사용하였습니다.

styled-component에 props로서, 
- `curEl={curEl}` : 꺼낸 블록이 있는 리스트 id
- `dropBoxId={provided.droppableProps["data-rbd-droppable-id"]}` : 드래그 중인 블록과 겹쳐있는 박스 id
- `isDraggingOver={snapshot.isDraggingOver}` : 드래그 유무
를 사용하여, 다음과 같은 코드를 통해 블록과 슬롯이 올바르게 짝지어진 경우와 아닌 경우를 나누어 스타일을 주었습니다.
```js
border: ${(props) => {
    if (props.isDraggingOver) {
      //console.log("props", props.curEl, props.dropBoxId);
      if (props.curEl === "datas") {
        if (props.dropBoxId === "dataBox") return "2px dashed gray";
        else return "1px solid red";
      } else {
        if (props.dropBoxId === "funcBox") return "2px dashed gray";
        else return "1px solid red";
      }
    }
  }};
```
