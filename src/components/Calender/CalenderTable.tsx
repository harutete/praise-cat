import React, { useState } from 'react'
import styled from 'styled-components'

type Props = {
  currentDate: string,
  weekDayArr: string[],
  calenderDate: (number | string)[][]
}
const CalenderTable: React.FC<Props> = (props) => {
  const count = 1
  const Table = styled.table`
    border-collapse : collapse;
    border-spacing: 0;
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
                { typeof day === 'number' &&
                  <>
                    <p className="text-day">{day}</p>
                    { count > 0 &&
                      <p className={`
                        text-count
                        ${count < 3 ? 'text-count--stage-01' :
                          count > 3 && count < 6 ? 'text-count--stage-02' :
                          'text-count--stage-03'
                        }
                      `}>
                        <span>{count}</span>
                      </p>
                    }
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