import React, { useEffect, useState } from "react";
import CollapseWrapper from "../common/collapse";
import PropTypes from "prop-types";

const FormComponent = ({ children }) => {
      return(
        React.Children.map(children, (child, index) => {
          return React.cloneElement(child, [++index])
        })
      )
  };
  FormComponent.propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node 
    ])
  };


const ChildrenExercise = () => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>
            <FormComponent>
                <Component />
                <Component />
                <Component />
            </FormComponent>
        </CollapseWrapper>
    );
};

const Component = (index) => {
    return <div>{index[0]} Компонент списка</div>;
};

export default ChildrenExercise;
