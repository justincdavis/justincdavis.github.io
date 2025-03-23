---
title: "Context-aware Multi-Model Object Detection for Diversely Heterogeneous Compute Systems"
authors: "Justin Davis and Mehmet E. Belviranli"
collection: publications
category: conferences
permalink: /publication/date24_context
excerpt: 'Improving energy efficiency on heterogenous compute systems by exploiting non-monotonic relationships between accuracy-energy-latency between model and hardware architecture pairs.'
date: 2024-03-25
venue: 'Design Automation Test Europe (DATE) 2024'
slidesurl: 'http://justincdavis.github.io/files/date24_context_slides.pdf'
paperurl: 'http://justincdavis.github.io/files/date24_context_paper.pdf'
citation: 'http://justincdavis.github.io/files/date24_context_bibtex.tex'
code: "https://github.com/justincdavis/cv2ext/tree/main/src/cv2ext/research/shift"
documentation: "https://cv2tools.readthedocs.io/en/latest/source/cv2ext.research.shift.html"
---

In recent years, deep neural networks (DNNs) have gained widespread adoption for continuous mobile object detection (OD) tasks, particularly in autonomous systems. However, a prevalent issue in their deployment is the one-size-fits-all approach, where a single DNN is used, resulting in inefficient utilization of computational resources. This inefficiency is particularly detrimental in energy-constrained systems, as it degrades overall system efficiency. We identify that, the contextual information embedded in the input data stream (e.g., the frames in the camera feed that the OD models are run on) could be exploited to allow a more efficient multi-model-based OD process. In this paper, we propose SHIFT which continuously selects from a variety of DNN-based OD models depending on the dynamically changing contextual information and computational constraints. During this selection, SHIFT uniquely considers multi-accelerator execution to better optimize the energy-efficiency while satisfying the latency constraints. Our proposed methodology results in improvements of up to 7.5x in energy usage and 2.8x in latency compared to state-of-the-art GPU-based single model OD approaches.
