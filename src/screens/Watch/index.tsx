import React, { useMemo } from 'react';
import { Container } from '../../components/atoms/Container';
import YoutubePlayer from 'react-native-youtube-iframe';
import { useTheme } from 'styled-components';
import { useState } from 'react';
import { useDataStore } from '../../services/stores/dataStore';
import { useCallback } from 'react';

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
    </Container>
  );
};
export default Watch;
