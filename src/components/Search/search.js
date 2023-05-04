import './search.css';
import { Link } from "react-router-dom";
import data from '../../data/data.json'
import { useRef, useState } from 'react';

const Search = () => {
    const [searchData, setSearchData] = useState(data.data);
    const [filterData, setFilterData] = useState([]);
    const [shouldPanelShow, setShouldPanelShow] = useState(false);
    const searchInput = useRef()

    const handleChange = (e) => {
        const value = e.target.value;
        if (value.length >= 3) {
            setShouldPanelShow(true)
            filterDataMethod(value)
        } else {
            setShouldPanelShow(false);
        }
    }

    const filterDataMethod = (searchText) => {
        setFilterData([])
        const tempArray = [];
        searchData?.forEach(t => {
            const isTextAvail = t.tag.includes(searchText);           
            if (isTextAvail) {
                const index = t.tag.indexOf(searchText);
                const newStr = t.tag.substring(index, index + 50);
                const obj = {
                    tag: newStr+'...',
                    link: t.link
                }
                tempArray.push(obj)
                
            }
        });
        setFilterData(tempArray)
    }
    const handleLinkClick = () => {
        setShouldPanelShow(false);
        setFilterData([]);
        searchInput.current.value = "";
    }

    return (
        <>
            <input type="text" ref={searchInput} className='search-input' placeholder="Search" onChange={(e) => handleChange(e)} />
            {shouldPanelShow && 
                <div className='search-panel'>

                    <ul>
                        {filterData.length ?
                            filterData.map(item => {
                                return <li onClick={handleLinkClick}><Link to={item.link}>{item.tag}</Link></li>
                            })
                            :
                            <li>No Results Found!</li>
                        }
                       
                    </ul>

                </div>
            }
        </>
    )

}

export default Search;