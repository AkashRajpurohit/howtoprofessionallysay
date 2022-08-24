import { trackEvent } from 'lib/analytics';
import { Printer } from 'react-feather';

const PrintPageButton = () => {
  const printPDF = () => {
    trackEvent({ name: 'Click', data: { value: 'Print PDF' } });
    window.print();
  };

  return (
    <button
      aria-label="Print the page as PDF"
      className="text-primary-500"
      title="Print the page as PDF"
      onClick={printPDF}
    >
      <Printer size={24} />
    </button>
  );
};

export default PrintPageButton;
