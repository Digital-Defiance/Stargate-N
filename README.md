# Stargate-N: Secure Electromagnetic Quanta Interchange
Also registered for Hackathon 2022: https://hackbox.microsoft.com/project/2021

Code moved to monorepo: https://github.com/Digital-Defiance/nx-monorepo

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
* Currently, the design is heading towards having a defined set of operations that each rotor can do.
  Each rotor can do any or all of the operations, but for simplicity, we will only allow each operation/chevron
  to be engaged once per rotor.
  Use as many or as few rotors as necessary to accomplish the desired operation(s). The more rotors, the more delay.
  
Todo: Use Quantum Tensors

## References
  * [https://en.wikipedia.org/wiki/Ray_transfer_matrix_analysis](https://en.wikipedia.org/wiki/Ray_transfer_matrix_analysis)
  * [https://en.wikipedia.org/wiki/S-matrix](https://en.wikipedia.org/wiki/Ray_transfer_matrix_analysis)
    In physics, the S-matrix or scattering matrix relates the initial state and the final state of a physical system undergoing a scattering process.
  * ReduxJS: https://redux.js.org/
  * GitHub CoPilot: https://copilot.github.com/
  * Visual Studio Code: https://code.visualstudio.com/
  * Turborepo: https://turborepo.org/
  * ReactJS: https://reactjs.org/
  * Yarn: https://yarnpkg.com/
  * https://github.com/FreddieMercurial-forks/quantum-tensors / https://github.com/Quantum-Flytrap/quantum-tensors
  
## Idea
The SimPHoTONS
![19fcfc8c-19e0-4099-a930-cd41b73cddad](https://user-images.githubusercontent.com/3766240/190256990-da92881f-448d-4587-816f-c60b6d8136e1.jpg)
A Quantum Photonic Simulator Puzzle Game

Something simple like Hen Fox Farmer type thing?
Character named Quark (Bark) and ?? for (Lisa)

## Notes
```
so maybe we'll have a way to do both
we'll define operations to assign to symbols
and we'll also define an S-Box for each rotor
everything will be shifted by any engaged symbols/chevrons
and then run through the s-box
```

-----------
## SAVE BELOW THIS LINE
--------------------------
## (The Stargate Network)
Stargate-N is both for Stargate-Network and Stargate-N where N is a number representing the number of Chevrons in the Stargate channel.

The Stargate Network will attempt to use physics simulation to create a functional stargate network.

The total connection from end to end can be looked at like an enigma machine.
Rather than nodes in a network, the "addresses" are somewhat equivalent to a rotor on the Engima.
Enigma would be functionally something like Stargate-N=26, with the number of rotors being the number of "nodes" in the stargate network.
Notably the engima does some reflection, using rotors in the opposite direction.

The metaphor falls apart a little, but... (WIP!)

It will be a physics based simulated Stargate system capable of transporting mattter, data, or light anywhere in the network which is composed of other nodes that can relay over a separate link or alternate physical medium. Exit nodes are ideally connected to 3D printers, 2D printers, ligt emitters, etc.


 *input* => ( entrance node ) -> { ... ( gate ) -> ... } ( exit node* ) -> *output*
   \* an exit node may be the same as the input node. The network may also loop back on itself.


HSV is a circle. I don't see why we shouldn't be setting a number of radians or distance around the circle depending on N size (N=256 is 360/256 slices) and then each chevron/color locked must be greater than the last (little like a safe turning past elements).

Will keep writing this up...

:PHOTON:
  * has lambda wavelength, has other properties/spin

Photon enters a rotor who sends the photon through N quantum operations. Each interaction is a recipe pre-denoted by a Chevron/symbol, but itself is a set of settings.

Participants in the network must all be aware of these rotor settings. They may be published or they may be kept secret.
Each rotor on the network is potentially unique.
Still working on the Engima / Color analogy/math and how to make it all work.


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

Each gate may do any manner of optical/electromagnetic transformations in the analog domain- except encoding/decoding 

 WIP WIP WIP

technically one could return to the same stargate (no other nodes)
but each node may have specific (directional) filters it applies... such that a call through different series of nodes should/might yield corruption

These will internally be representated with complex [ ai + bj ] format and other attributes.

A gate must only take EM

This is a research/thought exercise that may not be completed.


# Stargate as a metaphor for functions
{ Object } | *representative photons* => ( Stargate ) => [ representative data ] -> [ representative photons ] -> [ photon emitter ]

( Stargate ) could be written as a function stargate(iv, data) {}. The IV or initialization vector would give the order and type of the chevrons. Chevrons start at the top and go clockwise around the circle. Each chevron gets as many radians/fractions of a radian as is neecessary to fit the desired number of chevrons.

One of our stargates could have R rotors, each with N possibilities.
One of our stargates may even be more complex.

What if the Chevrons were specific wavelengths/colors of light that needed to be sent in the right order to initialize the stargate?
What if the event horizon/gate function actually tried to look at the data as if it were light/waves coming through.
