import './Menu.css';
import React from 'react';

import { Link } from 'react-router-dom';

function Menu(param) {
  return (
    <aside className="Menu">
      <nav>
        <ul>
            <li>
                <Link to="/">Início</Link>
            </li>
            <li>
                <Link to="/useState">useState()</Link>
            </li>
            <li>
                <Link to="/useEffect">useEffect()</Link>
            </li>
            <li>
                <Link to="/useRef">useRef()</Link>
            </li>
            <li>
                <Link to="/useMemo">useMemo()</Link>
            </li>
            <li>
                <Link to="/useCallback">useCallback()</Link>
            </li>
            <li>
                <Link to="/useContext">useContext()</Link>
            </li>
            <li>
                <Link to="/useReducer">useReducer()</Link>
            </li>
            <li>
                <Link to="/useCustom">useMyHook()</Link>
            </li>
            <li>
                <Link to="/param/123">Param #01</Link>
            </li>
            <li>
                <Link to="/param/legal">Param #02</Link>
            </li>
            <li>
                <Link to="/about">Sobre</Link>
            </li>
            <li>
                <Link to="/naoExiste">Não Existe</Link>
            </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Menu;