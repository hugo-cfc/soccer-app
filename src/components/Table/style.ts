import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  table {
    border-collapse: collapse;

    margin-bottom: 50px;
  }

  table tbody {
    tr {
      background-color: #fff; // => Brasileirão id: 2013
      /* background-color: #e6e6e6; => Premier id: 2021 */

      /* td:nth-child(2n + 3) {
        background: ${shade(0.2, '#e6e6e6')}; => Premier id: 2021
      } */

      & td {
        color: #001959; // => Brasileirão id: 2013

        /* color: #37043c; // => Premier id: 2021 */

        /* &.team-name-td {
          text-align: left; => Premier id: 2021
        } */
      }
    }

    td,
    th {
      padding: 8px 10px;
      text-align: center;

      /* font-size: 30px; => premier id: 2021 */
      /* letter-spacing: 0.05em; => premier id: 2021 */

      font-size: 24px; // => Brasileirão id: 2013
      font-weight: bold; // => Brasileirão  id: 2013
    }

    /* tr td:first-child {
      font-weight: bold; => Premier id: 2021
    } */

    tr:nth-child(-n + 4) {
      /* background-color: #00ff7f; => Premier id: 2021 */
      background-color: #fff; // => Brasileirão id: 2013

      /* td:nth-child(2n + 3) {
        background: ${shade(0.2, '#00ff7f')}; ==> Premier id: 2021
      } */

      & td {
        /* color: #fff; ==> Premier id: 2021*/
        color: #001959; // => Brasileirão id: 2013
      }
    }

    tr:nth-child(5) {
      /* background-color: #00f1ff; ==> Premier id: 2021 */
      background-color: #fff; // => Brasileirão id: 2013

      /* td:nth-child(2n + 3) {
        background: ${shade(0.2, '#00f1ff')}; ==> Premier id: 2021
      } */

      & td {
        /* color: #fff; ==> Premier id: 2021*/
        color: #001959; // => Brasileirão id: 2013
      }
    }

    tr:nth-child(n + 18) {
      /* background-color: #fd005b; => Premier id: 2021*/
      background-color: #fff; // => Brasileirão id: 2013

      /* td:nth-child(2n + 3) {
        background: ${shade(0.2, '#fd005b')}; ==> Premier id: 2021
      } */

      td {
        /* color: #fff; ==> Premier id: 2021*/
        color: #001959; // => Brasileirão id: 2013
      }
    }
  }
`;
