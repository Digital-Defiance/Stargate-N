# Stargate-N: Secure Electromagnetic Quanta Interchange
Registered for Hackathon 2022: https://hackbox.microsoft.com/project/2021
see [https://github.com/FreddieMercurial/Stargate-N](https://github.com/FreddieMercurial/Stargate-N)


![wzCWak0Kydt4AlEaUfNJ--1--P6PE6](https://user-images.githubusercontent.com/3766240/187545363-11be83b7-7275-4da3-85c2-37f5c6d88ed6.jpg)
![VKRuD1a0M8MTLlI9PXFk--1--3KQ27](https://user-images.githubusercontent.com/3766240/187508629-26ca6505-662f-4eb3-bfc3-5b560f315eea.jpg)
![LTRoxyuwj28aXlXxiagK--1--LMEV9](https://user-images.githubusercontent.com/3766240/187508068-f2898ead-0426-4647-8064-1412bcb7a72a.jpg)
![Dream_TradingCard](https://user-images.githubusercontent.com/3766240/187551924-cf54edc0-8d57-40ee-977e-7e6e69e33e51.jpg)

This is a concept still undergoing design. Contents are disheveled and constantly being updated as the idea takes shape.

Think of Stargate-N as a quantum enigma machine.
EM/Photons go in, rotor presets perform prescribed manipulations on the quanta and pass it along.
At the end of the journey the quanta may have transformed from red light to invisible EM quanta.

The primary conceptual differences between the enigma and the stargate:
  * The engima operated on 26 symbols with a number of rotor presets that were kept secret
  * The stargate operates on infinitely many symbols, however we find use in an 8-bit/256 symbol stargate
  * Each rotor in the stargate network may be connected by any means
    * direct code
    * network code / interconnects
    * software defined radio / interconnects
  * The final rotor may not be located in the same place or time (delay, at a minimum) as the original rotor.
  * Loopbacks and finite loops are permitted (excepts infinite loops)

The process effectively both encrypts and transports the input quanta.

Processes must be developed to scan 1D, 2D, 3D, and higher order objects and data.
However the process is the same:
  1. Scan and/or represent an input object as ordered EM spectra.
  2. configure the startgate network in a preset manner
  3. objects are transmuted and shifted through space and time as they go through each rotor
  4. objects are reconstituted into data, printed matter, 3D printer matter, 3D+ printed biomatter, etc
  5. some objects may be able to be destroyed on the source or destination depending on success, error, and other interlocks

The Stargate Machine is a state machine, managed by a Redux store.

# What is a Stargate
A Stargate is a complex piece of equipment that, depending on components installed, will send/receive physical matter securely through one or more other stargates. Except for single-gate loopback, a minimum of 2 stargates are required to make a connection with one having the sending component(s) and the other having the receiving component(s).

The network is actually an EM network. A quanta is just a unit of EM/energy. Depending on the attributes, it may be photonic, a pure EM wave, etc.

At its most basic, a stargate only passes/relays photons and electromagnetic waves.
Object/matter at the input gate muts be decomposed into a stream of photons/EM waves.
The photons/EM waves at the output gate must be decoded and reconstituted into the appropriate data structure or matter printer.

Each gate/rotor may be composed of any combination of these components:
* photonic modulator (encoder + emitter) - data to photons
* photonic demodulator (decoder + receiver) - photons to data
* photonic relay - basic stargate (EM/subspace <-> photon <-> EM/subspace)
* matter reconstructor - data (+ energy) to matter (3D printer, bio printer, etc)
* matter scanner - matter to data (3D scanner, MRI, bio scanner, etc)
* matter deconstructor - matter to energy. Fully destructive process. Only relevant to physically constructed object.
  * if object is Registered as esssential (ala Registered mail), full interlocks must be taken to ensure that a copy remains until the emitted object has been fully verified. Object is not "received" until verification token has been returned to the sender.

The originating gate must have a computer to do that decomposition/representation. It is often integrated into the code of all gates so that every gate may originate. A relay (no-op) gate, stream operation only gate, or one-way encoder or decoder gate could also exist. (gate without encoding or decoding capability- only raw manipulation)

Each rotor/gate may do any manner of optical/electromagnetic transformations in the analog domain.
