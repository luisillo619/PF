import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getOrders2 } from "../../../redux/actions/index";

const SeeAllOrders = () => {
  const dispatch = useDispatch();
  const getAllOrders = useSelector((state) => state.getOrders);

  useEffect(() => {
    dispatch(getOrders2());
  }, [dispatch]);
   console.log(getAllOrders);
  return (
    <div className="flex flex-row overflow-scroll justify-center ">
      
   </div>
  );
};

export default SeeAllOrders;