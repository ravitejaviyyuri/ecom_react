import React, { useState, useContext } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import styles from "./batch.module.scss";
import BatchTable from "./BatchTable.component";
import Courseprice from "./CoursePrice.component";
import Button from "react-bootstrap/Button";
import ChooseBatch from "../HelpChooseBatch/HelpChooseBatch.component";
import {Currency } from './../../../interfaces/currency';
import { Country } from '../../../interfaces/country';
import {AppContext} from "../../../store";
type Props = {
  batches: any,
  price:any,
  currencies: Currency[],
  countries:Country[]
}


const BatchComponent = ({batches ,price, currencies, countries}: Props) => {

  const [isOpen, setOpen] = useState(false);
  const {state, dispatch} = useContext(AppContext);


  var currencyObj: any;
  var coursePrice: any;
  const searchinCurrencies = (currencypre: string) =>{
     let retval:any = null;
     currencies.forEach((currency: Currency)=>{
          if(currency.currency_name == currencypre){
              retval = currency;
          }  
     })
     if(retval != null)return retval
     return currencies[1];
  }
  
   const setPrice =  (obj:any) => {
       
        for (const key in price) {
          console.log(price[key].currency_id );
          if (price[key].currency_id == obj.currency_id) {
            coursePrice = price[key].value;
            console.log(coursePrice);
            break;
          }
        }
   }

  if(state.userState.userInfo.userDetails.currencyPrefrence != "" || state.userState.userInfo.userDetails.country != ""){
       if(state.userState.userInfo.userDetails.currencyPrefrence != ""){
         currencyObj = searchinCurrencies(state.userState.userInfo.userDetails.currencyPrefrence);
         setPrice(currencyObj);
       }else if(state.userState.userInfo.userDetails.country != ""){
         currencyObj = searchinCurrencies("INR");
         setPrice(currencyObj);
       }
       
  }else {
    currencyObj = searchinCurrencies(state.userState.userInfo.userDetails.currencyPrefrence);
    setPrice(currencyObj);
   }
  
  
  return (
    <section id="batches" className={styles.batchtable_enroll_section}>
      <Container>
        <div className={styles.section_title}>Our flexible batches</div>
        <Col className={styles.flex_custome}>
          <Col className="p-0" xs={12} md={8}>
            <BatchTable  batches={batches}/>
          </Col>
          <Col className={styles.course_price_back} xs={12} md={4}>
            <Courseprice  price = {coursePrice}/>
          </Col>
        </Col>
        <Button
          className={styles.cant_find_batch}
          onClick={() => {
            setOpen(true);
          }}
        >
          Cant find a batch?
        </Button>
      </Container>
      <ChooseBatch
        show={isOpen}
        handleClose={() => {
          setOpen(false);
        }}
      />
    </section>
  );
};
export default BatchComponent;
