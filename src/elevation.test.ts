import axios from "axios";
import { elevation, defaultParamsSerializer, elevationUrl } from "./elevation";

jest.mock("axios");

const mockedAxios = axios as jest.Mocked<typeof axios>;

afterEach(() => {
    jest.clearAllMocks();
});

test("elevation should call axios correctly", () => {
    const params = { locations: ["10,20"] };

    elevation({ params: params }, mockedAxios);

    expect(mockedAxios).toHaveBeenCalledTimes(1);
    expect(mockedAxios).toHaveBeenCalledWith({
        method: "get",
        params: params,
        paramsSerializer: defaultParamsSerializer,
        url: elevationUrl
    });
});
