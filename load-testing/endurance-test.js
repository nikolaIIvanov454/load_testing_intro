import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  vus: 20,
  duration: '1h',
};

// The function that defines VU logic.
//
// See https://grafana.com/docs/k6/latest/examples/get-started-with-k6/ to learn more
// about authoring k6 scripts.
//
export default function () {
  http.get('http://localhost:8080');
  sleep(1);
}
