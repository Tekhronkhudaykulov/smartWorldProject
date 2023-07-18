import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import {renderToStaticMarkup} from "react-dom/server";

const Check = () => {
  const { userList } = useSelector((state: RootState) => state.profileSlice);

  const { getOrderList } = useSelector((state: RootState) => state.orderSlice);

  return renderToStaticMarkup(
      <table id={"check"} className="check-box">
          <div className="box-top">
              <div>
                  <div>Номер заказа</div>
                  <div id="id">{getOrderList.id}</div>
              </div>
              <div>
                  <div>дата время</div>
                  <div id="id">{getOrderList.created_at}</div>
                  <div id="id">{getOrderList.created_time}</div>
              </div>
          </div>
          <div className="username">{getOrderList.user?.full_name}</div>
          <div className="table-id">
              ID <strong>{getOrderList.user?.id}</strong>
          </div>
          <table>
              <thead>
              <tr>
                  <th className="content">№</th>
                  <th>Наименование товара</th>
                  <th className="rotate content">ед.изм</th>
                  <th className="rotate content">кол-во</th>
                  <th>Цена</th>
                  <th>Сумма</th>
              </tr>
              </thead>
              <tbody>
              {getOrderList.orderItems?.map((item) => {
                  return (
                      <tr>
                          <td>{item.id}</td>
                          <td>{item.product.name}</td>
                          <td>шт</td>
                          <td>{item.count}</td>
                          <td>{item.price}</td>
                          <td>{item.total_price}</td>
                      </tr>
                  );
              })}
              </tbody>
          </table>
          <div className="total">
              <div className="check-total">ИТОГО </div>
              {/* <div className="check-amount">12</div> */}
              <div className="check-price">
                  {getOrderList.price?.toLocaleString("ru-RU")}
              </div>
          </div>
          {/* <div className="block">
            Лимит
            <div className="block-right">
              {userList.limit_summa?.toLocaleString("ru-RU")}
            </div>
          </div> */}
          {/* <div className="block">
            Итого
            <div className="block-right">
              {getOrderList.price?.toLocaleString("ru-RU")}
            </div>
          </div> */}
          <div className="block">
              Остаток денежные средств
              <div className="block-right">
                  {userList.balance?.toLocaleString("ru-RU")}
              </div>
          </div>
          <div className="block">
              Остаток лимита
              <div className="block-right">
                  {userList.limit_summa?.toLocaleString("ru-RU")}
              </div>
          </div>
      </table>
  );
};

export default Check;
