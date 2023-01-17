import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { withAccessRights } from '@src/HOCs';
import { getLeadersList } from '@src/services/leaderboard.services';
import { LeaderData } from '@src/types/leaders';
import { IOutletContext } from '@src/utils/OutletContext';
import { FC, useEffect, useMemo, useState } from 'react';
import { useOutletContext } from 'react-router';

import { TableLeader } from './components/TableLeader';
import styles from './Leaderboard.module.scss';

const Leaderboard: FC = () => {
  const { setPageName } = useOutletContext<IOutletContext>();
  const [leaders, setLeaders] = useState<LeaderData[]>([]);

  useEffect(() => {
    setPageName('Лидерборд');
    getLeadersList('team8', {
      ratingFieldName: 'score',
      cursor: 0,
      limit: 10,
    })
      .then((leadersData) => setLeaders(leadersData))
      .catch((err) => console.log(err.message));
  }, []);

  const tableRows = useMemo(() =>
    leaders.map(({ id, user, score }) =>
      <TableLeader user={user} score={score} key={id} />)
    , [leaders]
  );

  return (
    <div className={styles.wrapper}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 600 }}>User</TableCell>
              <TableCell align="left" sx={{ fontWeight: 600 }}>
                Score
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{tableRows}</TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default withAccessRights(Leaderboard);
