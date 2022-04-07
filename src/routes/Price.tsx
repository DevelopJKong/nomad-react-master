import ReactApexChart from "react-apexcharts";
import { useQuery } from "react-query";
import { useRecoilValue } from "recoil";
import { fetchCoinHistory } from "../api";
import { isDarkAtom } from "../atoms";

interface IHistorical {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}
interface PriceProps {
  coinId: string;
}

function Price({ coinId }: PriceProps) {
  const isDark = useRecoilValue(isDarkAtom);
  const { isLoading, data } = useQuery<IHistorical[]>(
    ["price", coinId],
    () => fetchCoinHistory(coinId),
    {
      refetchInterval: 2000,
    }
  );
  return (
    <div>
      {isLoading ? (
        "Loading price..."
      ) : (
        <ReactApexChart
          type="candlestick"
          series={[
            {
              data: 
                data?.map((price) => {
                  return [
                    Date.parse(price.time_close),
                    price.open,
                    price.high,
                    price.low,
                    price.close,
                  ];
                }),
            },
          ]}
          options={ {
              theme: {
                mode: isDark ? "dark" : "light"
              },
              chart: {
                type:"candlestick",
                height:300,
                width:500,
                toolbar: {
                  show:false,
                },
                background: "transparent",
              },
              stroke: {
                curve: "smooth",
                width: 5,
              },
              yaxis: {
                show: false,
              },
              xaxis: {
                type: "datetime",
                categories: data?.map((price) => price.time_close),
                labels: {
                  style: {
                    colors: '#fdcb6e'
                  }
                }
              }
                
             
          }
          }
        />
      )}
    </div>
  );
}

export default Price;
