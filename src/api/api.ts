const Method = {
  GET: `GET`,
  POST: `POST`,
  DELETE: `DELETE`,
  PUT: `PUT`
};
const Mode = {
  COORS: `cors`,
};

const api = ({
              url,
              method = Method.GET,
              body = null,
              headers = new Headers(),
              mode = Mode.COORS,
            }) => fetch(url, {method, mode, headers, body}).then(response => response.json());

export {api, Method, Mode};
