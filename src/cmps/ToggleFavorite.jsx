import { useState } from "react"
import { useSelector, useDispatch } from 'react-redux'
import * as React from 'react';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';


export function ToggleFavorite() {
    const { currCity } = useSelector(state => state.weatherModule)
    const { weather } = useSelector(state => state.weatherModule)
    const { favorites } = useSelector(state => state.weatherModule)
    const [isToggle, setToggle] = useState(false)
    const [open, setOpen] = React.useState(false);

    const dispatch = useDispatch()

    function onSetToggle() {
        setToggle(prevIsToggle => !prevIsToggle)
        const newObj = { ...currCity, currWeather: weather[0] }
        if (!isToggle) {
            dispatch({ type: 'ADD_FAVORITE', newObj })
        }
        else {
            dispatch({ type: 'REMOVE_FAVORITE', newObj })
        }
    }
    function isFavorite() {
        return favorites.some(favorite => favorite.Key === currCity.Key)
    }
    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    return (
        <section>
            <Tooltip open={open} onClose={handleClose} onOpen={handleOpen}
                title={isToggle ? "Remove From Favorites" : "Add To Favorites"}>
                <Button style={{ borderRadius: "50%" }}>
                    <div className="toggleBtn" onClick={onSetToggle}>{(!isFavorite()) ? <img src={require(`../assets/imgs/heart.png`)} alt='' /> : <img src={require(`../assets/imgs/red.png`)} alt='' />}</div>
                </Button>
            </Tooltip>
        </section>
    )
}

