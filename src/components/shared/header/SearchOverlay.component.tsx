import React,{useEffect, useState} from "react";
import Modal from "react-bootstrap/Modal";
import styles from "./searchoverlay.module.scss";
import SearchInput from "./search_tabs/SearchInput.component";
import MenuLinks from "./search_tabs/SearchTabs.component";
import { CrossIcon } from "../../shared/icons/crossicon";
import algoliasearch from 'algoliasearch/lite';
import instantsearch from 'algoliasearch/lite';

const SearchOverlay = (props: any) => {
  const [isResult, setResult] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const  [data, setData] = useState([{}]);

  const searchClient = algoliasearch('testing9DFZ2ODF33','0ae09568a97f143707a7158a5c6de789');
  const index = searchClient.initIndex('test_courses');

  useEffect( () => {

    index.search(searchInput)
    .then(({ hits }) => {
      // console.log(hits);
      setData(hits);
      if(searchInput != "")
          setResult(true)
       else setResult(false)
    });  

  },[searchInput])
  
  // console.log(data[0]);
  return (
    <Modal
      centered
      contentClassName={styles.modalsearch_content}
      dialogClassName={styles.modalsearch_dialog}
      show={props.show}
      onHide={props.handleClose}
    >
      <Modal.Body className={styles.modalsearch_body}>
        <div className={styles.close_btn} onClick={props.handleClose}>
          <CrossIcon color="#000000" />
        </div>
        <SearchInput  setSearchInput= {setSearchInput} hits={data} isResult = {isResult} />
        <MenuLinks   />
      </Modal.Body>
    </Modal>
  );
};

export default SearchOverlay;
