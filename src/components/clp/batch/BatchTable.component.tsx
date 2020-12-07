import React from "react";
import styles from "./batchtable.module.scss";
import { SparkIcon } from "../../shared/icons/sparkicon";
import BatchRow from  "./BatchRow.component";
type Props = {
  batches : any;
}
const BatchTable = ({batches}: Props) => {
   
   const soldout_batches = batches.soldout.map((data: any, index: Number) => 
      <BatchRow  batch={data.Batch} type ="sold" index={index}/>
   )
   const live_batches = batches.live.map((data: any,index: Number) => 
   <BatchRow  batch={data.Batch} type = "live" index={index}/>
  )
  return (
    <section className={styles.batchtable_section}>
      {soldout_batches}
      {live_batches }
      
    </section> 
  );
};

export default BatchTable;
