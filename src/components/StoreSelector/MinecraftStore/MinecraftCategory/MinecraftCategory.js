import React from 'react';
import "./MinecraftCategory.css"
import data from "../minecraftData.json"

const MinecraftCategory = (props) => {


    function renderItemStore() {

        let dataSet = data.items;
        let emptyData = [];
        let newData = [];
        let i;
        if (props.title === "Minerals") {
            for (i = 0; i < dataSet.length; i++) {
                if (dataSet[i].category === 'mineral') {
                    newData.push(dataSet[i]);
                }
            }
            props.changeView(1, emptyData);
            setTimeout(function () {
                props.changeView(1, newData);
            }, 1)
        }
        else if (props.title === "All") {
            props.changeView(1, emptyData);
            setTimeout(function () {
                props.changeView(3, dataSet);
            }, 1)
        }
        else if (props.title === "Food") {
            for (i = 0; i < dataSet.length; i++) {
                if (dataSet[i].category === 'food') {
                    newData.push(dataSet[i]);
                }
            }
            props.changeView(2, emptyData);
            setTimeout(function () {
                props.changeView(2, newData);
            }, 1)
        }
        else if (props.title === "Tools") {
            for (i = 0; i < dataSet.length; i++) {
                if (dataSet[i].category === 'tool') {
                    newData.push(dataSet[i]);
                }
            }
            props.changeView(2, emptyData);
            setTimeout(function () {
                props.changeView(5, newData);
            }, 1)
        }
        else if (props.title === "Weapons") {
            for (i = 0; i < dataSet.length; i++) {
                if (dataSet[i].category === 'weapon') {
                    newData.push(dataSet[i]);
                }
            }
            props.changeView(2, emptyData);
            setTimeout(function () {
                props.changeView(4, newData);
            }, 1)
        }
        else if (props.title === "Misc") {
            for (i = 0; i < dataSet.length; i++) {
                if (dataSet[i].category === 'misc') {
                    newData.push(dataSet[i]);
                }
            }
            props.changeView(2, emptyData);
            setTimeout(function () {
                props.changeView(6, newData);
            }, 1)
        }
    }



    return (<div className="minecraft-category" onClick={renderItemStore}>
        <div className="category-title" >{props.title}</div>
        {props.img}

    </div>);
}


export default MinecraftCategory;