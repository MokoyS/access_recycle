import React, { useEffect } from 'react';
import { FileText, Shield, Scale } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const Terms = () => {
  
  // Scroll en haut de page au chargement
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      <Helmet>
        <title>Terms & Conditions | Access Recycle</title>
        <meta name="description" content="Terms and Conditions of sale for Access Recycle Ltd." />
      </Helmet>

      {/* --- HEADER --- */}
      <div className="bg-slate-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold mb-4">Terms and Conditions</h1>
          <p className="text-slate-400">
            Standard terms and conditions of sale. <br />
            <span className="text-brand text-sm">Last Updated: October 2025</span>
          </p>
        </div>
      </div>

      {/* --- CONTENT --- */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-200 text-slate-700 leading-relaxed text-sm md:text-base">
          
          {/* Company Details */}
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 mb-10">
            <h3 className="font-bold text-slate-900 mb-2">Access Recycle Ltd</h3>
            [cite_start]<p>Registered Office: 151 High Street, Loughton, IG10 4LG, UK [cite: 8, 11]</p>
            <p>Registered in England No: 9563486 | [cite_start]VAT Registered No: GB235079409 [cite: 11, 21]</p>
            [cite_start]<p>Email: info@accessrecycle.com [cite: 23]</p>
          </div>

          <div className="space-y-12">

            {/* Section 1 */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span className="text-brand">1.</span> Interpretation
              </h2>
              <p className="mb-4">In these Conditions:</p>
              <ul className="list-disc pl-5 space-y-2">
                [cite_start]<li><strong>'Customer'</strong> means the person, firm, company, entity or organisation with whom Access Recycle contracts for the sale of Goods[cite: 7].</li>
                [cite_start]<li><strong>'The Conditions'</strong> means the standard terms and conditions of sale set out in this document[cite: 8].</li>
                [cite_start]<li><strong>'The Contract'</strong> means any contract for the purchase and sale or other supply of Goods by Access Recycle to a Customer[cite: 9].</li>
                [cite_start]<li><strong>'Special Order Goods'</strong> shall mean Goods that have been ordered specifically by Customer or configured to Customer's specifications[cite: 13].</li>
              </ul>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span className="text-brand">2.</span> Agreement
              </h2>
              <p>
                [cite_start]All Contracts between Access Recycle and a Customer shall be governed by these Conditions to the exclusion of any other terms and conditions not accepted in writing by an Authorised Representative of Access Recycle[cite: 17].
              </p>
              <p className="mt-2">
                The Customer agrees not to solicit any employee, representative or agent of Access Recycle. [cite_start]Any such solicitation is an express breach of these Conditions[cite: 33].
              </p>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span className="text-brand">3.</span> Orders and Specifications
              </h2>
              <p>
                When a sale is agreed Access Recycle will issue a pro forma invoice. [cite_start]It is the Customer's responsibility to confirm the order either by email or payment[cite: 38, 39]. 
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mt-4">
                <p className="font-semibold text-amber-800">Important:</p>
                <p className="text-amber-700">
                  [cite_start]If the invoice remains unpaid after 5 days (excluding the date of issue), Access Recycle reserves the right to offer the stock for resale without notification[cite: 40].
                </p>
              </div>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span className="text-brand">4.</span> Price
              </h2>
              <p>
                [cite_start]Prices for Goods in stock will be agreed with the Customer at the time the order is accepted[cite: 68]. [cite_start]All prices exclude the cost of delivery, configuration, and other services unless otherwise agreed[cite: 70]. [cite_start]Prices are exclusive of Value Added Tax ("VAT")[cite: 76].
              </p>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span className="text-brand">5.</span> Delivery & Inspection
              </h2>
              <p>
                [cite_start]It is the Customer's responsibility to check all packages for evidence of tampering and/or damage before signing to accept delivery[cite: 93]. 
              </p>
              <p className="mt-2">
                [cite_start]<strong>Discrepancies:</strong> Any short shipment or damage must be notified in writing to Access Recycle by 5.00 pm on the next business day[cite: 94]. [cite_start]The Customer shall notify Access Recycle within 5 working days from receipt of Goods of any delivery discrepancies[cite: 97].
              </p>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span className="text-brand">6.</span> Payment
              </h2>
              <p>
                [cite_start]Acceptable payment methods are Telegraphic Transfer, BACS, Debit or Credit Card (subject to fees)[cite: 110]. [cite_start]Unless agreed otherwise (Credit Account), payment must be made in full before delivery[cite: 111].
              </p>
              <p className="mt-2">
                [cite_start]<strong>Late Payment:</strong> If the Customer fails to make a payment on the due date, Access Recycle may charge interest at the rate of 5% per annum above HSBC Bank Plc base rate[cite: 123, 136].
              </p>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span className="text-brand">7.</span> Returns Policy
              </h2>
              <p>
                [cite_start]Access Recycle is not the manufacturer of the Goods and sells them with the benefit of the manufacturer's warranty[cite: 143].
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-4">
                <li>
                  [cite_start]Any claim for defects must be notified by email to <a href="mailto:return@accessrecycle.com" className="text-brand font-bold underline">return@accessrecycle.com</a>[cite: 152].
                </li>
                <li>
                  [cite_start]This email must be received within <strong>14 days</strong> of delivery for defect goods[cite: 152].
                </li>
                <li>
                  [cite_start]Returns must be authorised in advance and returned within <strong>5 working days</strong> of authorisation in original UNMARKED packaging[cite: 153].
                </li>
                <li>
                  [cite_start]Items which are not new are sold "as seen" without warranty unless otherwise stated[cite: 168, 169].
                </li>
              </ul>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span className="text-brand">8.</span> Property in the Goods (Retention of Title)
              </h2>
              <p>
                [cite_start]The title to the property in the Goods shall not pass to the Customer until payment of the whole purchase price and any other sums outstanding have been received in full by Access Recycle[cite: 171, 172].
              </p>
            </section>

            {/* Section 9 */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span className="text-brand">9.</span> Cancellation
              </h2>
              <p>
                [cite_start]If the Customer cancels or fails to take delivery, they will be liable to indemnify Access Recycle against any resulting loss, which may include restocking fees[cite: 208, 210].
              </p>
            </section>

            {/* Section 10 */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span className="text-brand">10.</span> Confidentiality
              </h2>
              <p>
                Product pricing and availability information is the property of Access Recycle. [cite_start]The Customer agrees to hold this Information in confidence[cite: 220, 222].
              </p>
            </section>

            {/* Section 12 */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span className="text-brand">12.</span> Warranties and Liability
              </h2>
              <p>
                Access Recycle endeavors to purchase Goods from reputable suppliers. [cite_start]Liability for any claim shall not exceed the sum paid by the Customer for those specific Goods[cite: 247, 246].
              </p>
            </section>

            {/* Section 15 */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span className="text-brand">15.</span> Jurisdiction
              </h2>
              <div className="flex items-start gap-3">
                <Scale className="w-6 h-6 text-brand mt-1 flex-shrink-0" />
                <p>
                  [cite_start]The Contract shall be governed by the laws of England and the Customer submits to the exclusive jurisdiction of the English Courts[cite: 269].
                </p>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;