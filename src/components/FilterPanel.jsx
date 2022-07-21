import { useDispatch } from "react-redux";
import { Badge } from "UI/Badge";
import { Card } from "UI/Card";
import { Stack } from "UI/Stack";
import { selectFilter } from "store/filters/filter-selector";
import { useSelector } from "react-redux";
import { removeFilter, clearFilter } from "store/filters/filter-action";

const FilterPanel = () => {
  const dispatch = useDispatch();
  const currentFilter = useSelector(selectFilter);

  if (!currentFilter.length) {
    return null;
  }

  return (
    <Card className="filter-panel">
      <div className="filter-panel-wrapper">
        <Stack>
          {currentFilter.map((item) => (
            <Badge
              key={item}
              variant="clearable"
              onClear={() => {
                dispatch(removeFilter(item));
              }}
            >
              {item}
            </Badge>
          ))}
        </Stack>

        <button className="link" onClick={() => dispatch(clearFilter)}>
          Clear
        </button>
      </div>
    </Card>
  );
};

export { FilterPanel };
