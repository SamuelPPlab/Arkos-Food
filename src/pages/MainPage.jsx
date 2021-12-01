import React from "react";
import { connect } from "react-redux";


const MainPage = ({ stock }) => {
  console.log(stock)
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
