import React from 'react'
import styled from 'styled-components'
import { detailDataType } from './index'
type Props = {
  currentDate: string,
  weekDayArr: string[],
  calenderDate: (string | detailDataType)[][]
}

const CalenderTable: React.FC<Props> = (props) => {
  console.log(props.calenderDate)
  const Table = styled.table`
    border-collapse : collapse;
    border-spacing: 0;
    table-layout: fixed;
    width: 100%;
    caption {
      font-size: 1.8rem;
      font-weight: bold;
      padding: 10px;
    }
    thead {
      th {
        border: 1px solid #DDDDDD;
        padding: 10px;
      }
    }
    tbody {
      td {
        vertical-align: top;
        border: 1px solid #DDDDDD;
        text-align: center;
        padding: 10px;
        .text-day {
          color: #CCCCCC;
          font-size: 1.2rem;
        }
        .text-count {
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50px;
          color: ${props => props.theme.colors.white};
          font-size: 3rem;
          line-height: 1;
          width: 50px;
          height: 50px;
          margin: 10px auto 0;
          &--stage-00 {
            color: #EEEEEE;
          }
          &--stage-01 {
            background: ${props => props.theme.colors.main};
          }
          &--stage-02 {
            background: ${props => props.theme.colors.secondary};
          }
          &--stage-03 {
            background: ${props => props.theme.colors.accent};
          }
        }
      }
    }
  `

  return (
    <Table {...props}>
      <caption>{props.currentDate}</caption>
      <thead>
        <tr>
          {props.weekDayArr.map((day, index) => <th key={`weekday_${index}`}>{day}</th>)}
        </tr>
      </thead>
      <tbody>
        {props.calenderDate.map((week, index) =>
          <tr key={`week_${index}`}>
            {week.map((day, index) =>
              <td key={`day_${index}`}>
                { typeof day === 'object' &&
                  <>
                    <p className="text-day">{day.day}</p>
                    <p className={`
                      text-count
                      ${day.description.length > 5 ? 'text-count--stage-03' :
                      day.description.length >= 3 && day.description.length <= 5 ? 'text-count--stage-02' :
                      day.description.length > 0 &&  day.description.length <= 2 ? 'text-count--stage-01' :
                      'text-count--stage-00'
                      }
                    `}>
                      <span>{day.description.length}</span>
                    </p>
                  </>
                }
              </td>)
            }
          </tr>
        )}
      </tbody>
    </Table>
  )
}

export default CalenderTable