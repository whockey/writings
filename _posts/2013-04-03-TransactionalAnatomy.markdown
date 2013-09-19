---
layout: post
title:  "How Transaction Processing Works"
date:   2013-04-03
tag : This is a tag
---

This is a basic intro to credit card processing, adopted from a [quora thread](http://www.quora.com/How-does-credit-card-processing-work) on the same topic. The term ‘processor’ is often used loosely when referring to card-linked transactions, and can reference most players in the value chain. What follows is a more detailed explanation of what actually happens behind the scenes.



### The Players ###
(0) Customer and Merchant (not discussed)<br />
(1) Merchant Point of Sale (POS)<br />
(2) Payment Gateway<br />
(3) Payment Processor<br />
(4) Network/Association/Interchange<br />
(5) Card Issuer (Customer Bank/Acquirer)<br />
(6) Merchant Bank (Merchant Acquirer)<br />


<br />

The card payment landscape is difficult to explain - especially so as the large players have moved full-stack over the past 10 years. First Data and WorldPay are traditional processors, but now have strong gateways. Chase is a traditional card issuer, but their Paymentech division is also a gateway & processor. Wells Fargo is also now a processor (and has nabbed Stripe as a client). Visa and MasterCard have also become consumer card issuers. POS and Gateways are often integrated. First Data even makes cards - including the AmEx Centurion.

<!-- more -->

<br /> 
 
 
### The Basic Steps for a Transaction ###
(1) A customer completes a transaction at the merchant POS. POS system then passes the transaction, card, and merchant bank info to the Gateway<br /><br />
(2) The Payment Gateway collects transaction, card, and merchant data from the Gateway and passes it securely to the linked Payment Processor<br /><br />
(3) The Payment Processor collects the Gateway data and identifies the correct Network/Association based on the card type. Processor then routes all the transaction data to the Network.<br /><br />
(4) The Network collects the transaction information and verifies the available balance with the Card Issuer<sup>1</sup>. In addition to the balance check, the network performs a security check to ensure the card is within normal spending patterns. If the transaction is approved by Card Issuer and passes the security check, the Network passes an affirmative response upstream to the POS and downstream to Card Issuer<sup>2</sup>. During Settlement<sup>3</sup>, network collects transaction amount from Card Issuer account and passes it to the Merchant Account.<br /><br />
(5) The Card Issuer is responsible for checking the available balance and passing the verified amount to the Network during settlement.<br /><br />
(6) The Merchant Bank receives the value of the transactions less the fees deducted by the Gateway, Processor, and Network.<br />

<br />
###Player Details
(1) The Merchant POS is the in-store scanner or shopping cart. Often they will help to do the initial collection of payment data. Online examples include Shopify, Magento, Drupal, and Big Platform. The Brick and Mortar POS landscape is dominated by NCR, IBM, HP, and Verifone - and Square is quickly emerging. For the most part, merchants hold an ‘Approved Merchant Account (Token)’ however many e-commerce platforms are now providing this as a service. Fees are usually based on a monthly fixed cost, a per-transaction fee, and an overall percent of transaction fee. Generally the POS (or sometimes Gateway) charges the merchant a single fee that covers all the downstream costs. <br /><br />
(2) The payment gateway is a secure connection between a POS and Processor. Historically, processor connections required such high security that it was not economical for a POS or merchant to implement themselves. Of late, these costs have come down and we now see the integration of POS, Gateways, and Processors. Examples of e-commerce gateways include Authorize.net, Paypal, Stripe, and Braintree. Verisign, CICS (IBM), and Authorize.net are the dominant in-store players.<br /><br />
(3) Payment Processors are responsible for collecting and routing data from the gateway to the Network. The correct Network for each transaction is identified based on the first and last card numbers (did you know 10 of the 16 card numbers are non-unique and not considered personally identifiable information?). The biggest players in processing are First Data and TSYS, followed by WorldPay, Chase Paymentech, and Wells <br /><br />
(4) The Networks (or Associations or Interchanges) do the real work. They interface with the Processors to collect transaction, customer, and merchant info; the Card Issuers to authorize purchases and collect payments; and Merchant Banks to pass settled payments. As such, they have the highest fees. Visa, MasterCard, American Express, and Discover are the largest Networks.<br /><br />
(5) The Card Issuers are the consumer-facing element of the equation - they issue consumer cards, collect monthly payments, and handle customer service. While they rarely charge a transaction fee, they make money from consumer lending, annual fees, and late fees. The largest US issuers are American Express*, Discover*, Chase, Citi, Bank of America, Wells Fargo, and Capital One.<br /><br />
(6) The Merchant Bank simply accepts transactions and deals with disputes (but that is a different post).<br /><br />
 
 
<br /> 
### Notes ####

<p><sup>1</sup> &nbsp;&nbsp;The Network and Card Issuer are a single entity in the case of American Express and Discover. This is called a ‘Closed-Loop’ transaction. Transactions that use the Visa or MC Networks are considered ‘Open Loop’.</p>
<p><sup>2</sup> &nbsp;&nbsp;In (4), once the transaction is approved, an affirmative message is passed via the Network, Processor, and Gateway to the Merchant POS. If a transaction is declined, a similar message is passed and the POS after which the entire process is severed and no settlement occurs.</p>
<p><sup>3</sup> &nbsp;&nbsp;Settlement (as referenced here) is actually a three-step process. First is Authorization, where a customer is approved for a purchase. Second is Capture, which occurs when the merchant passes a batch of authorized transactions to the Network (often each night). Third is Settlement, when the captured transactions are actually pulled from customer accounts and moved to merchant accounts. Those $0.07 charges that appear in your ‘pending transactions’ are the authorization charges - they are subsequently cancelled and replaced once the final transaction amount has been captured.</p>