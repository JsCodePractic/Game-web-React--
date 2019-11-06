import React, { Component } from 'react';
import style from './menu.module.css'

class Menu extends Component {
    state = {
        activ: false
    }
    Chenge() {
        this.setState({
            activ: !this.state.activ
        })
    }
    render() {
        return (
            <div className={style.navigation__menu}>
                <ul className={style.navigation__menu__list}>
                    <li><a onChange={this.Chenge.bind()} className={this.state.activ ? style.navigation__menu__active : style.navigation__menu__not_active} href="">About</a></li>
                    <li><a onChange={this.Chenge.bind()} className={this.state.activ ? style.navigation__menu__active : style.navigation__menu__not_active} href="">Development</a></li>
                    <li><a onChange={this.Chenge.bind()} className={this.state.activ ? style.navigation__menu__active : style.navigation__menu__not_active} href="">Projects</a></li>
                    <li><a onChange={this.Chenge.bind()} className={this.state.activ ? style.navigation__menu__active : style.navigation__menu__not_active} href="">Blog</a></li>
                </ul>
            </div>


        )
    }

}

export default Menu;