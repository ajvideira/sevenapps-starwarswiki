import React, { useCallback, useMemo, useState } from 'react';
import YoutubePlayer from 'react-native-youtube-iframe';
import { useTheme } from 'styled-components';

import { Container, GoBack } from '~/components';
import { useDataStore } from '~/services/stores/dataStore';

const Watch: React.FC = () => {
  const theme = useTheme();
  const [playing, setPlaying] = useState(false);
  const { selectedData } = useDataStore();

  const youtubeId = useMemo(
    () => selectedData.trailer_url?.split('v=')[1].substring(0, 11),
    [selectedData]
  ) as string;

  const onChangeState = useCallback((state) => {
    if (state === 'ended') {
      setPlaying(false);
    }
  }, []);

  return (
    <Container align="flex-start" justify="center">
      <YoutubePlayer
        height={theme.metrics.px(300)}
        width={theme.metrics.width}
        play={playing}
        videoId={youtubeId}
        onChangeState={onChangeState}
      />
      <GoBack />
    </Container>
  );
};
export default Watch;
