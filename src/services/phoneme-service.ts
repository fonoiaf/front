import instance from '#/service';

import type { AxiosInstance } from 'axios';

export default function PhonemeService() {
  const service: AxiosInstance = instance;

  const fetchPhonemes = async (params: any) => {
    console.log('phonemes');

    // return service.get('/api/taxonomy/phonemes', {
    //   params: {
    //     ID: 12345,
    //   },
    // });

    return service.get('/api/taxonomy/phonemes');
  };

  return {
    fetchPhonemes,
  };
}
