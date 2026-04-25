const Payments = () => {
  return (
    <div className="p-6">
      <h2 className="text-lg font-semibold text-[#43302E] mb-4">
        Scheduled Payments
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-zinc-200">
          <thead className="bg-zinc-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-zinc-500 uppercase tracking-wider"
              >
                Payee
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-zinc-500 uppercase tracking-wider"
              >
                Amount
              </th>

              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-zinc-500 uppercase tracking-wider"
              >
                Date
              </th>

              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-zinc-500 uppercase tracking-wider"
              >
                Status
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-amber-100">
            <tr>
              <td className="p-4 whitespace-nowrap text-sm font-medium text-zinc-900">
                <div className="flex items-center space-x-2">
                  <div className="size-8 bg-zinc-200 rounded-full center-item text-zinc-500 overflow-clip">
                    <img src="/user1.jpeg" alt="" />
                    <span>Loan Payment</span>
                  </div>
                </div>
              </td>

                <td className="p-4 whitespace-nowrap text-sm text-zinc-400">
                    $1,000.00
                </td>
                <td className="p-4 whitespace-nowrap text-sm text-zinc-400">
                    2023-10-15
                </td>
                <td className=" p-4 whitespace-nowrap text-sm text-green-400 flex items-center">
                    <div className="bg-green-100 py-1 px-2 rounded-full">
                        <span className="inline-block w-2 h-2 mr-1 rounded-full bg-green-500"></span>
Approved
                    </div>
                </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Payments;
