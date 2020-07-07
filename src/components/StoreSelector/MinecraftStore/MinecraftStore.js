import React from 'react';
import "./MinecraftStore.css";
import ImgHandler from "../../ImgHandler"
import MinecraftCategory from './MinecraftCategory/MinecraftCategory'
import MinecraftStoreItem from './MinecraftStoreItem/MinecraftStoreItem'
import ItemModal from "./ItemModal/ItemModal"
import data from "./minecraftData.json"
import { useState } from 'react'
const MinecraftStore = (props) => {

    const [storeView, setStoreView] = useState(0);
    const [storeViewItems, setStoreViewItems] = useState(data.items);
    const [modalView, setModalView] = useState(0);
    const [modalData, setModalData] = useState({})



    let dailyDeals = [data.items[5], data.items[2], data.items[4], data.items[9], data.items[1], data.items[17]]


    let categorieItems = [
        {
            categoryName: "All",
            icon: <i class="fas fa-globe-americas"></i>
        },
        {
            categoryName: "Food",
            icon: <i class="fas fa-apple-alt"></i>
        },
        {
            categoryName: "Tools",
            icon: <i class="fas fa-tools"></i>
        },
        {
            categoryName: "Minerals",
            icon: <i class="fas fa-gem"></i>
        },
        {
            categoryName: "Weapons",
            icon: <i class="fas fa-gavel"></i>
        }, {
            categoryName: "Misc",
            icon: <i class="fas fa-book"></i>
        }
    ]


    function changeStoreView(childData, itemSet) {
        setStoreView(childData)
        setStoreViewItems(itemSet)
    }

    function handleModal(viewNum, childData) {
        setModalView(viewNum)
        setModalData(childData)
    }

    function closeModal() {
        setModalView(0)
    }

    function renderModal() {
        if (modalView === 1) {
            return (<ItemModal closeModal={closeModal} modalData={modalData} />)
        }
        else if (modalView === 0) {
            return ''
        }
    }


    function renderStoreView() {
        if (storeView === 0) {
            return (<div className="bottom-wrapper">
                <div className="deals-header">
                    <div className="deals-title">Daily Deals</div>
                    <div className="deals-bar"></div>
                </div>
                <div className="deal-items-container">
                    {dailyDeals.map((data) => <MinecraftStoreItem key={data.id} name={data.name} img={ImgHandler[data.id]} price={data.price} modalRender={renderModal} handleModal={handleModal} />
                    )}
                </div>
                <i class="fas fa-arrow-left" onClick={props.closeStore}></i>
                <div className="middle-info-container">
                    <div className="nether-side middle-info-card">
                        <div className="middle-card-title">NETHER<br></br> INVENTORY</div>
                        <button className="middle-card-button nether-button">COMING SOON</button>
                    </div>
                    <div className="ender-side middle-info-card">
                        <div className="middle-card-title">ENDER<br></br> INVENTORY</div>
                        <button className="middle-card-button ender-button">COMING SOON</button>
                    </div>
                </div>
                <div className="testimonials-container">
                    <div className="testimonials-title">Testimonials</div>
                    <div className="deals-bar"></div>
                </div>
            </div>)
        }
        else if (storeView === 1) {
            return (<div className="bottom-wrapper">
                <div className="deals-header">
                    <div className="deals-title">Mineral Items</div>
                    <div className="deals-bar"></div>
                </div>
                <div className="deal-items-container">
                    {storeViewItems.map((data) => <MinecraftStoreItem key={data.id} name={data.name} img={ImgHandler[data.id]} price={data.price} />
                    )}
                </div>
                <i class="fas fa-arrow-left" onClick={props.closeStore}></i>
            </div>)
        }
        else if (storeView === 2) {
            return (<div className="bottom-wrapper">
                <div className="deals-header">
                    <div className="deals-title">Food Items</div>
                    <div className="deals-bar"></div>
                </div>
                <div className="deal-items-container">
                    {storeViewItems.map((data) => <MinecraftStoreItem key={data.id} name={data.name} img={ImgHandler[data.id]} price={data.price} />
                    )}
                </div>
                <i class="fas fa-arrow-left" onClick={props.closeStore}></i>
            </div>)
        }
        else if (storeView === 3) {
            return (<div className="bottom-wrapper">
                <div className="deals-header">
                    <div className="deals-title">All Items</div>
                    <div className="deals-bar"></div>
                </div>
                <div className="deal-items-container">
                    {storeViewItems.map((data) => <MinecraftStoreItem key={data.id} name={data.name} img={ImgHandler[data.id]} price={data.price} />
                    )}
                </div>
                <i class="fas fa-arrow-left" onClick={props.closeStore}></i>
            </div>)
        }
        else if (storeView === 4) {
            return (<div className="bottom-wrapper">
                <div className="deals-header">
                    <div className="deals-title">Weapon Items</div>
                    <div className="deals-bar"></div>
                </div>
                <div className="deal-items-container">
                    {storeViewItems.map((data) => <MinecraftStoreItem key={data.id} name={data.name} img={ImgHandler[data.id]} price={data.price} />
                    )}
                </div>
                <i class="fas fa-arrow-left" onClick={props.closeStore}></i>
            </div>)
        }
        else if (storeView === 5) {
            return (<div className="bottom-wrapper">
                <div className="deals-header">
                    <div className="deals-title">Tool Items</div>
                    <div className="deals-bar"></div>
                </div>
                <div className="deal-items-container">
                    {storeViewItems.map((data) => <MinecraftStoreItem key={data.id} name={data.name} img={ImgHandler[data.id]} price={data.price} />
                    )}
                </div>
                <i class="fas fa-arrow-left" onClick={props.closeStore}></i>
            </div>)
        }
        else if (storeView === 6) {
            return (<div className="bottom-wrapper">
                <div className="deals-header">
                    <div className="deals-title">Misc Items</div>
                    <div className="deals-bar"></div>
                </div>
                <div className="deal-items-container">
                    {storeViewItems.map((data) => <MinecraftStoreItem key={data.id} name={data.name} img={ImgHandler[data.id]} price={data.price} />
                    )}
                </div>
                <i class="fas fa-arrow-left" onClick={props.closeStore}></i>
            </div>)
        }
    }





    return (<div className="minecraft-store-container">
        {renderModal()}
        <div className="minecraft-nav-bar-container">
            <div className="minecraft-icon" onClick={() => { { changeStoreView(0, []) } }}></div>
            <div className="minecraft-search"><input placeholder="Search..." /></div>
            <div className="store-icons-container">
                <div className="store-icon favorites"></div>
                <div className="store-icon shopping-cart"></div>
            </div>
        </div>
        <div className="categories-container">
            {categorieItems.map((items) => <MinecraftCategory img={items.icon} title={items.categoryName} changeView={changeStoreView} />)}
        </div>
        {renderStoreView()}

        <div className="footer-container"></div>
    </div>);
}

export default MinecraftStore;




