import { format, parseISO } from "date-fns";
import { fr } from "date-fns/locale";

type DateProps = {
  dateString: string;
};

const Date = (props: DateProps) => {
  const { dateString } = props;

  const formattedDate = format(parseISO(dateString), "dd MMMM yyyy", {
    locale: fr,
  });

  return (
    <time dateTime={dateString.toString()} color='#979797'>
      {formattedDate}
    </time>
  );
};

export default Date;
