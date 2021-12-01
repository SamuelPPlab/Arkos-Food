import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import { fetchMainData } from "../redux/actions/mainPageActions";


const MainPage = ({ stock }) => {
  const dispatch = useDispatch();
  console.log(stock)
  useEffect(() => {
    dispatch(fetchMainData());
  }, [])
  return(
    <div>

    </div>
  );
};

const mapStateToProps = ({ mainPageReducer: { stock, loading, error } }) => ({
  stock,
  loading,
  error,
});

export default connect(mapStateToProps)(MainPage);
